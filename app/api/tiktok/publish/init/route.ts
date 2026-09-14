import { NextRequest, NextResponse } from 'next/server';
import { authenticateSession, initDirectPost } from '@/lib/tiktok';

export async function POST(req: NextRequest) {
  try {
    const authHeader = req.headers.get('authorization');
    const session = await authenticateSession(authHeader);

    const body = await req.json();
    const {
      title,
      privacyLevel = 'SELF_ONLY',
      disableComment = false,
      disableDuet = false,
      disableStitch = false,
      videoCoverTimestampMs = 1000,
      videoSize,
      chunkSize,
      totalChunkCount,
    } = body;

    if (!videoSize || !chunkSize || !totalChunkCount) {
      return NextResponse.json(
        { error: 'Missing media source sizing parameters: videoSize, chunkSize, totalChunkCount' },
        { status: 400 }
      );
    }

    const postInfo = {
      title: title || '',
      privacy_level: privacyLevel,
      disable_comment: disableComment,
      disable_duet: disableDuet,
      disable_stitch: disableStitch,
      video_cover_timestamp_ms: videoCoverTimestampMs,
    };

    const sourceInfo = {
      source: 'FILE_UPLOAD',
      video_size: Number(videoSize),
      chunk_size: Number(chunkSize),
      total_chunk_count: Number(totalChunkCount),
    };

    const initResult = await initDirectPost(session.accessToken, postInfo, sourceInfo);

    return NextResponse.json({
      publishId: initResult.publish_id,
      uploadUrl: initResult.upload_url,
    });
  } catch (err: any) {
    console.error('Direct post init error:', err);
    const status = err.message?.startsWith('needs_auth') ? 401 : 500;
    return NextResponse.json(
      { error: err?.message || 'Failed to initialize TikTok upload' },
      { status }
    );
  }
}
