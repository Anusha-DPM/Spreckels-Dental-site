import { NextResponse } from 'next/server'
import crypto from 'crypto'

export const runtime = 'nodejs'

function getCloudinaryConfig() {
  return {
    cloudName:
      process.env.CLOUDINARY_CLOUD_NAME ||
      process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    apiKey:
      process.env.CLOUDINARY_API_KEY ||
      process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
    apiSecret: process.env.CLOUDINARY_API_SECRET,
    uploadPreset:
      process.env.CLOUDINARY_UPLOAD_PRESET ||
      process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET,
  }
}

function signCloudinaryParams(params, apiSecret) {
  const sorted = Object.keys(params)
    .sort()
    .map((key) => `${key}=${params[key]}`)
    .join('&')

  return crypto.createHash('sha1').update(sorted + apiSecret).digest('hex')
}

export async function POST(request) {
  try {
    const formData = await request.formData()
    const file = formData.get('file')

    if (!file || typeof file === 'string') {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 })
    }

    const folder = formData.get('folder')?.toString() || 'blog-images'
    const { cloudName, apiKey, apiSecret, uploadPreset } = getCloudinaryConfig()

    if (!cloudName) {
      return NextResponse.json(
        { error: 'Cloudinary cloud name is not configured on the server.' },
        { status: 500 }
      )
    }

    const uploadForm = new FormData()
    uploadForm.append('file', file)

    if (uploadPreset) {
      uploadForm.append('upload_preset', uploadPreset)
      uploadForm.append('folder', folder)
      uploadForm.append('tags', 'blog,dental')
    } else if (apiKey && apiSecret) {
      const timestamp = Math.round(Date.now() / 1000)
      const params = {
        folder,
        tags: 'blog,dental',
        timestamp,
      }

      uploadForm.append('api_key', apiKey)
      uploadForm.append('timestamp', String(timestamp))
      uploadForm.append('folder', folder)
      uploadForm.append('tags', 'blog,dental')
      uploadForm.append('signature', signCloudinaryParams(params, apiSecret))
    } else {
      return NextResponse.json(
        {
          error:
            'Cloudinary is not configured. Set CLOUDINARY_UPLOAD_PRESET or CLOUDINARY_API_KEY and CLOUDINARY_API_SECRET.',
        },
        { status: 500 }
      )
    }

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      {
        method: 'POST',
        body: uploadForm,
      }
    )

    const data = await response.json()

    if (!response.ok) {
      return NextResponse.json(
        { error: data?.error?.message || 'Cloudinary upload failed' },
        { status: response.status }
      )
    }

    return NextResponse.json({
      url: data.secure_url,
      publicId: data.public_id,
      width: data.width,
      height: data.height,
      format: data.format,
      resourceType: data.resource_type,
    })
  } catch (error) {
    console.error('Upload API error:', error)
    return NextResponse.json(
      { error: error?.message || 'Upload failed' },
      { status: 500 }
    )
  }
}
