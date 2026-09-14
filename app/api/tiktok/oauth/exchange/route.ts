import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseAdmin } from '@/lib/supabase';
import { encryptToken, generateSessionToken, hashSessionToken } from '@/lib/crypto';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { code, codeVerifier, redirectUri } = body;

    if (!code || !codeVerifier || !redirectUri) {
      return NextResponse.json(
        { error: 'Missing required parameters: code, codeVerifier, redirectUri' },
        { status: 400 }
      );
    }

    const clientKey = process.env.TIKTOK_CLIENT_KEY;
    const clientSecret = process.env.TIKTOK_CLIENT_SECRET;

    if (!clientKey || !clientSecret) {
      return NextResponse.json(
        { error: 'TikTok developer credentials are not configured on server.' },
        { status: 500 }
      );
    }

    // Call TikTok token endpoint
    const params = new URLSearchParams();
    params.append('client_key', clientKey);
    params.append('client_secret', clientSecret);
    params.append('code', code);
    params.append('grant_type', 'authorization_code');
    params.append('redirect_uri', redirectUri);
    params.append('code_verifier', codeVerifier);

    const tokenRes = await fetch('https://open.tiktokapis.com/v2/oauth/token/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    });

    const tokenData = await tokenRes.json();

    if (tokenData.error || !tokenData.data || !tokenData.data.access_token) {
      const errCode = tokenData.error || tokenData.data?.error_code || 'token_exchange_failed';
      const errMsg = tokenData.error_description || tokenData.data?.error_message || 'Failed to exchange authorization code';
      return NextResponse.json(
        { error: errMsg, code: errCode },
        { status: 400 }
      );
    }

    const data = tokenData.data;
    const openId = data.open_id;
    const accessToken = data.access_token;
    const refreshToken = data.refresh_token;
    const scope = data.scope || 'user.info.basic,video.publish,video.upload';

    const now = new Date();
    const accessTokenExpiresAt = new Date(now.getTime() + (data.expires_in || 86400) * 1000);
    const refreshTokenExpiresAt = new Date(now.getTime() + (data.refresh_expires_in || 31536000) * 1000);

    // Fetch user basic info (display name & avatar)
    let displayName = null;
    let avatarUrl = null;

    try {
      const userRes = await fetch('https://open.tiktokapis.com/v2/user/info/?fields=open_id,display_name,avatar_url', {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      });
      const userData = await userRes.json();
      if (userData.data && userData.data.user) {
        displayName = userData.data.user.display_name || null;
        avatarUrl = userData.data.user.avatar_url || null;
      }
    } catch (e) {
      console.warn('Failed to fetch user basic info from TikTok:', e);
    }

    const supabase = getSupabaseAdmin();

    // Upsert into tiktok_accounts
    const { data: account, error: accountErr } = await supabase
      .from('tiktok_accounts')
      .upsert({
        open_id: openId,
        display_name: displayName,
        avatar_url: avatarUrl,
        access_token_encrypted: encryptToken(accessToken),
        refresh_token_encrypted: encryptToken(refreshToken),
        access_token_expires_at: accessTokenExpiresAt.toISOString(),
        refresh_token_expires_at: refreshTokenExpiresAt.toISOString(),
        scope,
      }, { onConflict: 'open_id' })
      .select('id')
      .single();

    if (accountErr || !account) {
      console.error('Database account upsert error:', accountErr);
      return NextResponse.json({ error: 'Failed to persist account session' }, { status: 500 });
    }

    // Generate opaque session token for desktop client
    const sessionToken = generateSessionToken();
    const sessionHash = hashSessionToken(sessionToken);
    const sessionExpiresAt = new Date(now.getTime() + 90 * 24 * 60 * 60 * 1000); // 90 days

    const { error: sessionErr } = await supabase
      .from('desktop_sessions')
      .insert({
        session_hash: sessionHash,
        tiktok_account_id: account.id,
        expires_at: sessionExpiresAt.toISOString(),
      });

    if (sessionErr) {
      console.error('Database session insert error:', sessionErr);
      return NextResponse.json({ error: 'Failed to create desktop session' }, { status: 500 });
    }

    // Return safe data (never return client_secret or refresh_token)
    return NextResponse.json({
      sessionToken,
      openId,
      displayName,
      avatarUrl,
      scope,
      connected: true,
    });
  } catch (err: any) {
    console.error('OAuth exchange error:', err);
    return NextResponse.json(
      { error: err?.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
