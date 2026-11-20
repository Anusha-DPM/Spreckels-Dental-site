import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { isNoindexBlogPath } from './lib/noindexBlogPaths'

const NOT_FOUND_HTML = `<!DOCTYPE html>
<html lang="en-US">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Page Not Found | Spreckels Park Dental</title>
<meta name="robots" content="noindex, nofollow">
</head>
<body style="margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;background:#f9fafb;font-family:Arial,sans-serif;color:#111827;">
  <div style="text-align:center;padding:24px;">
    <h1 style="font-size:24px;margin:0 0 16px;">Page Not Found</h1>
    <p style="color:#6b7280;margin:0 0 24px;">The page you requested could not be found.</p>
    <a href="/" style="display:inline-block;background:#441018;color:#fff;text-decoration:none;padding:12px 24px;border-radius:8px;font-weight:500;">Go to Homepage</a>
  </div>
</body>
</html>`

export function proxy(request: NextRequest) {
  if (!isNoindexBlogPath(request.nextUrl.pathname)) {
    return NextResponse.next()
  }

  return new NextResponse(NOT_FOUND_HTML, {
    status: 404,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'X-Robots-Tag': 'noindex, nofollow',
      'Cache-Control': 'no-store',
    },
  })
}

export const config = {
  matcher: ['/blog/:path*'],
}
