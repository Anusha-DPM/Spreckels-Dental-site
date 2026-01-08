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

    // Generate unique filename first (needed for fallback)
    const timestamp = Date.now()
    const sanitizedFileName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_')
    const fileName = `${timestamp}-${sanitizedFileName}`

    // Create uploads directory outside public folder for security
    // Store in .next/uploads or a private uploads folder
    const baseUploadsDir = join(process.cwd(), 'uploads')
    const uploadsDir = join(baseUploadsDir, folder)
    console.log('📁 Target uploads directory:', uploadsDir)
    console.log('📁 Current working directory:', process.cwd())
    console.log('📁 Base uploads directory:', baseUploadsDir)
    
    try {
      // First ensure the base uploads directory exists
      if (!existsSync(baseUploadsDir)) {
        console.log('📁 Base uploads directory does not exist, creating...')
        try {
          await mkdir(baseUploadsDir, { recursive: true, mode: 0o755 })
          console.log('✅ Created base uploads directory:', baseUploadsDir)
        } catch (baseError) {
          console.error('❌ Failed to create base directory:', baseError)
          // Try alternative: use public/uploads as fallback
          const fallbackDir = join(process.cwd(), 'public', 'uploads', folder)
          console.log('⚠️ Trying fallback location:', fallbackDir)
          const fallbackBase = join(process.cwd(), 'public', 'uploads')
          if (!existsSync(fallbackBase)) {
            await mkdir(fallbackBase, { recursive: true, mode: 0o755 })
          }
          if (!existsSync(fallbackDir)) {
            await mkdir(fallbackDir, { recursive: true, mode: 0o755 })
          }
          // Use fallback directory
          const filePath = join(fallbackDir, fileName)
          const arrayBuffer = await file.arrayBuffer()
          const buffer = Buffer.from(arrayBuffer)
          await writeFile(filePath, buffer)
          const publicUrl = `/uploads/${folder}/${fileName}`
          const origin = request.headers.get('origin') || 
                         request.headers.get('host') ? `http://${request.headers.get('host')}` : ''
          const absoluteUrl = origin ? `${origin}${publicUrl}` : publicUrl
          return NextResponse.json({
            success: true,
            url: absoluteUrl,
            path: `uploads/${folder}/${fileName}`,
            fileName: file.name,
            originalSize: file.size
          })
        }
      }
      
      // Then create the folder-specific directory
      if (!existsSync(uploadsDir)) {
        console.log('📁 Directory does not exist, creating...')
        await mkdir(uploadsDir, { recursive: true, mode: 0o755 })
        console.log('✅ Created uploads directory:', uploadsDir)
      } else {
        console.log('✅ Uploads directory already exists:', uploadsDir)
      }
      
      // Verify the directory was created and is writable
      if (!existsSync(uploadsDir)) {
        throw new Error(`Directory was not created: ${uploadsDir}`)
      }
      
    } catch (mkdirError) {
      console.error('❌ Failed to create uploads directory:', mkdirError)
      console.error('Error details:', {
        message: mkdirError.message,
        code: mkdirError.code,
        errno: mkdirError.errno,
        path: mkdirError.path,
        syscall: mkdirError.syscall,
        stack: mkdirError.stack
      })
      
      // Try fallback to public/uploads
      try {
        console.log('⚠️ Attempting fallback to public/uploads...')
        const fallbackDir = join(process.cwd(), 'public', 'uploads', folder)
        const fallbackBase = join(process.cwd(), 'public', 'uploads')
        if (!existsSync(fallbackBase)) {
          await mkdir(fallbackBase, { recursive: true, mode: 0o755 })
        }
        if (!existsSync(fallbackDir)) {
          await mkdir(fallbackDir, { recursive: true, mode: 0o755 })
        }
        const filePath = join(fallbackDir, fileName)
        const arrayBuffer = await file.arrayBuffer()
        const buffer = Buffer.from(arrayBuffer)
        await writeFile(filePath, buffer)
        const publicUrl = `/uploads/${folder}/${fileName}`
        const origin = request.headers.get('origin') || 
                       request.headers.get('host') ? `http://${request.headers.get('host')}` : ''
        const absoluteUrl = origin ? `${origin}${publicUrl}` : publicUrl
        console.log('✅ Successfully saved to fallback location:', filePath)
        return NextResponse.json({
          success: true,
          url: absoluteUrl,
          path: `uploads/${folder}/${fileName}`,
          fileName: file.name,
          originalSize: file.size
        })
      } catch (fallbackError) {
        console.error('❌ Fallback also failed:', fallbackError)
        throw new Error(`Failed to create uploads directory: ${mkdirError.message}. Code: ${mkdirError.code || 'unknown'}. Fallback also failed: ${fallbackError.message}`)
      }
    }

    // File name already generated above, now create file path
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
      stack: error.stack,
      name: error.name,
      code: error.code
    })

    // Provide more specific error messages
    let errorMessage = 'Upload failed'
    let errorDetails = error.message || 'Unknown error occurred'
    
    // Check for specific error types
    if (error.code === 'EACCES' || error.message.includes('permission denied') || error.message.includes('EACCES')) {
      errorMessage = 'Permission denied'
      errorDetails = 'Cannot write to uploads directory. Please check folder permissions.'
    } else if (error.code === 'ENOENT' || error.message.includes('ENOENT')) {
      errorMessage = 'Directory not found'
      errorDetails = 'Uploads directory could not be created. Please check disk space and permissions.'
    } else if (error.message.includes('ENOSPC')) {
      errorMessage = 'No space left'
      errorDetails = 'Not enough disk space to save the file.'
    }

    return NextResponse.json(
      { 
        error: errorMessage, 
        details: errorDetails,
        code: error.code
      },
      { status: 500 }
    )
  }
}

