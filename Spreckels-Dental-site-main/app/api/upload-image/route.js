import { NextRequest, NextResponse } from 'next/server'
import { initializeApp, getApps } from 'firebase/app'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
}

// Initialize Firebase
let app
if (!getApps().length) {
  app = initializeApp(firebaseConfig)
} else {
  app = getApps()[0]
}

const storage = getStorage(app)

export async function POST(request) {
  try {
    const formData = await request.formData()
    const file = formData.get('file')
    const folder = formData.get('folder') || 'images'

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

    // Validate file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      return NextResponse.json(
        { error: 'File too large. Maximum size is 10MB.' },
        { status: 400 }
      )
    }

    console.log('Server-side upload starting:', {
      fileName: file.name,
      fileSize: file.size,
      fileType: file.type,
      folder: folder
    })

    // Generate unique filename
    const timestamp = Date.now()
    const fileName = `${folder}/${timestamp}-${file.name}`
    
    // Create storage reference
    const storageRef = ref(storage, fileName)
    
    // Convert file to buffer
    const arrayBuffer = await file.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)
    
    // Upload to Firebase Storage
    const snapshot = await uploadBytes(storageRef, buffer, {
      contentType: file.type
    })
    
    // Get download URL
    const downloadURL = await getDownloadURL(snapshot.ref)
    
    console.log('Server-side upload successful:', {
      fileName: fileName,
      downloadURL: downloadURL
    })

    return NextResponse.json({
      success: true,
      url: downloadURL,
      path: fileName,
      fileName: file.name,
      originalSize: file.size
    })

  } catch (error) {
    console.error('Server-side upload error:', error)
    return NextResponse.json(
      { 
        error: 'Upload failed', 
        details: error.message 
      },
      { status: 500 }
    )
  }
}
