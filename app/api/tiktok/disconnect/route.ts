import { NextRequest, NextResponse } from 'next/server';
import { authenticateSession, revokeTikTokToken } from '@/lib/tiktok';
import { getSupabaseAdmin } from '@/lib/supabase';

export async function POST(req: NextRequest) {
  try {
    const authHeader = req.headers.get('authorization');
    const session = await authenticateSession(authHeader);

    // Call official revoke endpoint
    await revokeTikTokToken(session.accessToken, session.openId);

    const supabase = getSupabaseAdmin();

    // Delete session
    await supabase.from('desktop_sessions').delete().eq('id', session.sessionId);

    // Also delete account if no other sessions exist
    const { data: remainingSessions } = await supabase
      .from('desktop_sessions')
      .select('id')
      .eq('tiktok_account_id', session.accountId);

    if (!remainingSessions || remainingSessions.length === 0) {
      await supabase.from('tiktok_accounts').delete().eq('id', session.accountId);
    }

    return NextResponse.json({
      disconnected: true,
      openId: session.openId,
    });
  } catch (err: any) {
    console.error('Disconnect error:', err);
    return NextResponse.json(
      { error: err?.message || 'Failed to disconnect account' },
      { status: 500 }
    );
  }
}
