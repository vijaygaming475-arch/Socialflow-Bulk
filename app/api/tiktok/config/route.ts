import { NextResponse } from 'next/server';

export async function GET() {
  const clientKey = process.env.TIKTOK_CLIENT_KEY || null;

  return NextResponse.json({
    clientKey,
    environment: 'sandbox',
    scopes: ['user.info.basic', 'video.publish', 'video.upload'],
  });
}
