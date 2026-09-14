import { NextRequest, NextResponse } from 'next/server';
import { authenticateSession, fetchPublishStatus } from '@/lib/tiktok';

export async function POST(req: NextRequest) {
  try {
    const authHeader = req.headers.get('authorization');
    const session = await authenticateSession(authHeader);

    const body = await req.json();
    const { publishId } = body;

    if (!publishId) {
      return NextResponse.json({ error: 'Missing publishId parameter' }, { status: 400 });
    }

    const statusData = await fetchPublishStatus(session.accessToken, publishId);

    return NextResponse.json({
      publishId,
      status: statusData.status || 'PROCESSING_UPLOAD',
      failReason: statusData.fail_reason || null,
      publicContentUrl: statusData.public_content_url || null,
      uploadedBytes: statusData.uploaded_bytes || null,
    });
  } catch (err: any) {
    console.error('Publish status error:', err);
    const status = err.message?.startsWith('needs_auth') ? 401 : 500;
    return NextResponse.json(
      { error: err?.message || 'Failed to fetch publishing status' },
      { status }
    );
  }
}
