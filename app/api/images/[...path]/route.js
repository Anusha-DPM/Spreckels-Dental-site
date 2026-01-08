import { NextRequest, NextResponse } from 'next/server'
import { readFile } from 'fs/promises'
import { join } from 'path'
import { existsSync } from 'fs'

export async function GET(request, { params }) {
  try {
    // In Next.js 13+, params is a Promise, so we need to await it
    const resolvedParams = await params
    
    // Get the image path from URL params
    const pathSegments = resolvedParams.path || []
    if (pathSegments.length === 0) {
      return NextResponse.json(
        { error: 'Image path not provided' },
        { status: 400 }
      )
    }

    // Reconstruct the folder and filename
    const folder = pathSegments[0] || 'blog-images'
    const fileName = pathSegments.slice(1).join('/')
    
    if (!fileName) {
      return NextResponse.json(
        { error: 'Filename not provided' },
        { status: 400 }
      )
    }

    // Security: Prevent directory traversal attacks (but allow dots in filename)
    // Only block if fileName contains '..' or path separators (after join, we only want a single filename)
    if (fileName.includes('..') || fileName.includes('\\')) {
      return NextResponse.json(
        { error: 'Invalid file path' },
        { status: 400 }
      )
    }
    
    console.log('📁 Serving image:', { folder, fileName, pathSegments })

    // Construct file path (outside public folder for security)
    const filePath = join(process.cwd(), 'uploads', folder, fileName)

    // Check if file exists
    if (!existsSync(filePath)) {
      return NextResponse.json(
        { error: 'Image not found' },
        { status: 404 }
      )
    }

    // Read the file
    const fileBuffer = await readFile(filePath)

    // Determine content type from file extension
    const ext = fileName.split('.').pop()?.toLowerCase()
    const contentTypeMap = {
      jpg: 'image/jpeg',
      jpeg: 'image/jpeg',
      png: 'image/png',
      gif: 'image/gif',
      webp: 'image/webp',
      svg: 'image/svg+xml'
    }
    const contentType = contentTypeMap[ext || ''] || 'image/jpeg'

    // Return the image with proper headers
    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    })

  } catch (error) {
    console.error('❌ Error serving image:', error)
    return NextResponse.json(
      { error: 'Failed to serve image' },
      { status: 500 }
    )
  }
}

