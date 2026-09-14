import { NextRequest, NextResponse } from 'next/server';
import { authenticateSession, queryCreatorInfo } from '@/lib/tiktok';

export async function POST(req: NextRequest) {
  try {
    const authHeader = req.headers.get('authorization');
    const session = await authenticateSession(authHeader);

    const creatorData = await queryCreatorInfo(session.accessToken);

    return NextResponse.json({
      openId: session.openId,
      displayName: session.displayName,
      creatorUsername: creatorData.creator_username || null,
      creatorNickname: creatorData.creator_nickname || null,
      creatorAvatarUrl: creatorData.creator_avatar_url || null,
      privacyLevelOptions: creatorData.privacy_level_options || ['SELF_ONLY'],
      commentDisabled: creatorData.comment_disabled || false,
      duetDisabled: creatorData.duet_disabled || false,
      stitchDisabled: creatorData.stitch_disabled || false,
      maxVideoPostDurationSec: creatorData.max_video_post_duration_sec || 600,
    });
  } catch (err: any) {
    console.error('Creator info endpoint error:', err);
    const status = err.message?.startsWith('needs_auth') ? 401 : 500;
    return NextResponse.json(
      { error: err?.message || 'Failed to fetch creator info' },
      { status }
    );
  }
}

export async function GET(req: NextRequest) {
  return POST(req);
}
