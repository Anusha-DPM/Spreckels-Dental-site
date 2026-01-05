import { NextRequest, NextResponse } from 'next/server'
import { writeFile, mkdir } from 'fs/promises'
import { join } from 'path'
import { existsSync } from 'fs'

export async function POST(request) {
  try {
    const formData = await request.formData()
    const file = formData.get('file')
    const folder = formData.get('folder') || 'blog-images'

    if (!file || !(file instanceof File)) {
      return NextResponse.json(
        { error: 'No file provided or invalid file' },
        { status: 400 }
      )
    }

    // Validate file type
    if (!file.type.startsWith('image/')) {
      return NextResponse.json(
        { error: 'Invalid file type. Only images are allowed.' },
        { status: 400 }
      )
    }

    // Validate file size (max 5MB for public folder)
    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        { error: 'File too large. Maximum size is 5MB.' },
        { status: 400 }
      )
    }

    console.log('📤 Simple image upload starting:', {
      fileName: file.name,
      fileSize: file.size,
      fileType: file.type,
      folder: folder
    })

    // Create uploads directory outside public folder for security
    // Store in .next/uploads or a private uploads folder
    const uploadsDir = join(process.cwd(), 'uploads', folder)
    if (!existsSync(uploadsDir)) {
      await mkdir(uploadsDir, { recursive: true })
      console.log('✅ Created uploads directory:', uploadsDir)
    }

    // Generate unique filename
    const timestamp = Date.now()
    const sanitizedFileName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_')
    const fileName = `${timestamp}-${sanitizedFileName}`
    const filePath = join(uploadsDir, fileName)

    // Convert file to buffer and save
    const arrayBuffer = await file.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)
    await writeFile(filePath, buffer)

    // Generate protected URL that goes through API route
    const protectedUrl = `/api/images/${folder}/${fileName}`
    
    // Get the origin from the request headers for absolute URL
    const origin = request.headers.get('origin') || 
                   request.headers.get('host') ? `http://${request.headers.get('host')}` : ''
    const absoluteUrl = origin ? `${origin}${protectedUrl}` : protectedUrl

    console.log('✅ Image uploaded successfully:', {
      fileName: fileName,
      protectedUrl: protectedUrl,
      absoluteUrl: absoluteUrl,
      filePath: filePath
    })

    return NextResponse.json({
      success: true,
      url: absoluteUrl,
      path: `uploads/${folder}/${fileName}`,
      fileName: file.name,
      originalSize: file.size
    })

  } catch (error) {
    console.error('❌ Simple upload error:', error)
    console.error('Error details:', {
      message: error.message,
      stack: error.stack
    })

    return NextResponse.json(
      { 
        error: 'Upload failed', 
        details: error.message
      },
      { status: 500 }
    )
  }
}

