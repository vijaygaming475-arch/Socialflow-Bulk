import { getSupabaseAdmin } from './supabase';
import { decryptToken, encryptToken, hashSessionToken } from './crypto';

export interface AuthenticatedTikTokSession {
  sessionId: string;
  accountId: string;
  openId: string;
  accessToken: string;
  scope: string;
  displayName: string | null;
}

/**
 * Validates incoming Authorization: Bearer <sessionToken>,
 * loads the session from Supabase, checks token expiry,
 * automatically performs refresh & token rotation if needed,
 * and returns the decrypted valid TikTok access token.
 */
export async function authenticateSession(authHeader: string | null): Promise<AuthenticatedTikTokSession> {
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new Error('Missing or invalid Authorization header');
  }

  const sessionToken = authHeader.replace('Bearer ', '').trim();
  const sessionHash = hashSessionToken(sessionToken);

  const supabase = getSupabaseAdmin();

  // Find active session
  const { data: session, error: sessionErr } = await supabase
    .from('desktop_sessions')
    .select('id, expires_at, tiktok_account_id')
    .eq('session_hash', sessionHash)
    .single();

  if (sessionErr || !session) {
    throw new Error('Invalid or expired desktop session');
  }

  if (new Date(session.expires_at) < new Date()) {
    // Delete expired session
    await supabase.from('desktop_sessions').delete().eq('id', session.id);
    throw new Error('Desktop session expired. Please reconnect.');
  }

  // Load account
  const { data: account, error: accountErr } = await supabase
    .from('tiktok_accounts')
    .select('*')
    .eq('id', session.tiktok_account_id)
    .single();

  if (accountErr || !account) {
    throw new Error('Associated TikTok account not found');
  }

  // Check access token expiration (with 5-minute buffer)
  const now = Date.now();
  const expiresAt = new Date(account.access_token_expires_at).getTime();
  const bufferMs = 5 * 60 * 1000;

  if (now + bufferMs >= expiresAt) {
    // Refresh access token
    const newAccessToken = await refreshTikTokToken(account);
    return {
      sessionId: session.id,
      accountId: account.id,
      openId: account.open_id,
      accessToken: newAccessToken,
      scope: account.scope,
      displayName: account.display_name,
    };
  }

  // Decrypt and return current access token
  const accessToken = decryptToken(account.access_token_encrypted);
  return {
    sessionId: session.id,
    accountId: account.id,
    openId: account.open_id,
    accessToken,
    scope: account.scope,
    displayName: account.display_name,
  };
}

/**
 * Refreshes an expired TikTok access token using the stored refresh token.
 * Handles TikTok refresh token rotation and updates Supabase.
 */
async function refreshTikTokToken(account: any): Promise<string> {
  const clientKey = process.env.TIKTOK_CLIENT_KEY;
  const clientSecret = process.env.TIKTOK_CLIENT_SECRET;

  if (!clientKey || !clientSecret) {
    throw new Error('TIKTOK_CLIENT_KEY or TIKTOK_CLIENT_SECRET is missing');
  }

  const currentRefreshToken = decryptToken(account.refresh_token_encrypted);

  const params = new URLSearchParams();
  params.append('client_key', clientKey);
  params.append('client_secret', clientSecret);
  params.append('grant_type', 'refresh_token');
  params.append('refresh_token', currentRefreshToken);

  const res = await fetch('https://open.tiktokapis.com/v2/oauth/token/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: params.toString(),
  });

  const data = await res.json();

  if (data.error || !data.data || !data.data.access_token) {
    const errorCode = data.error || data.data?.error_code || 'refresh_failed';
    const errorMsg = data.error_description || data.data?.error_message || 'Failed to refresh token';

    // If grant is invalid, user must re-authorize
    if (errorCode === 'invalid_grant' || String(errorCode).includes('grant')) {
      throw new Error(`needs_auth: ${errorMsg}`);
    }

    throw new Error(`TikTok refresh error: ${errorMsg} (${errorCode})`);
  }

  const tokenData = data.data;
  const now = new Date();
  const accessTokenExpiresAt = new Date(now.getTime() + (tokenData.expires_in || 86400) * 1000);
  
  // Rotate refresh token if TikTok provided a new one
  const newRefreshToken = tokenData.refresh_token || currentRefreshToken;
  const refreshExpiresIn = tokenData.refresh_expires_in || 31536000;
  const refreshTokenExpiresAt = new Date(now.getTime() + refreshExpiresIn * 1000);

  const supabase = getSupabaseAdmin();
  await supabase
    .from('tiktok_accounts')
    .update({
      access_token_encrypted: encryptToken(tokenData.access_token),
      refresh_token_encrypted: encryptToken(newRefreshToken),
      access_token_expires_at: accessTokenExpiresAt.toISOString(),
      refresh_token_expires_at: refreshTokenExpiresAt.toISOString(),
      scope: tokenData.scope || account.scope,
    })
    .eq('id', account.id);

  return tokenData.access_token;
}

/**
 * Queries TikTok creator info for Direct Post permissions and privacy options.
 */
export async function queryCreatorInfo(accessToken: string) {
  const res = await fetch('https://open.tiktokapis.com/v2/post/publish/creator_info/query/', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json; charset=UTF-8',
    },
  });

  const json = await res.json();
  if (json.error && json.error.code && json.error.code !== 'ok') {
    throw new Error(`Creator info error: ${json.error.message || json.error.code}`);
  }

  return json.data || {};
}

/**
 * Calls TikTok /v2/post/publish/video/init/ endpoint.
 */
export async function initDirectPost(accessToken: string, postInfo: any, sourceInfo: any) {
  const body = {
    post_info: postInfo,
    source_info: sourceInfo,
  };

  const res = await fetch('https://open.tiktokapis.com/v2/post/publish/video/init/', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(body),
  });

  const json = await res.json();
  if (json.error && json.error.code && json.error.code !== 'ok') {
    const code = json.error.code;
    const msg = json.error.message || code;
    throw new Error(`Publish init error: ${msg} (${code})`);
  }

  return json.data || {};
}

/**
 * Calls TikTok /v2/post/publish/status/fetch/ endpoint.
 */
export async function fetchPublishStatus(accessToken: string, publishId: string) {
  const res = await fetch('https://open.tiktokapis.com/v2/post/publish/status/fetch/', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({ publish_id: publishId }),
  });

  const json = await res.json();
  if (json.error && json.error.code && json.error.code !== 'ok') {
    throw new Error(`Publish status error: ${json.error.message || json.error.code}`);
  }

  return json.data || {};
}

/**
 * Revokes TikTok authorization.
 */
export async function revokeTikTokToken(accessToken: string, openId: string) {
  const clientKey = process.env.TIKTOK_CLIENT_KEY;
  const clientSecret = process.env.TIKTOK_CLIENT_SECRET;

  if (!clientKey || !clientSecret) return;

  const params = new URLSearchParams();
  params.append('client_key', clientKey);
  params.append('client_secret', clientSecret);
  params.append('token', accessToken);
  params.append('open_id', openId);

  try {
    await fetch('https://open.tiktokapis.com/v2/oauth/revoke/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    });
  } catch (e) {
    console.warn('Revoke token warning:', e);
  }
}
