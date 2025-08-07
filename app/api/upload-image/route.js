import { NextRequest, NextResponse } from 'next/server'
import { initializeApp } from 'firebase/app'
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
const app = initializeApp(firebaseConfig)
const storage = getStorage(app)

export async function POST(request) {
  try {
    console.log('🚀 Starting server-side image upload...')
    
    // Get the form data
    const formData = await request.formData()
    const file = formData.get('image')
    
    if (!file) {
      console.error('❌ No file provided')
      return NextResponse.json({ error: 'No file provided' }, { status: 400 })
    }
    
    console.log('📁 File received:', file.name, 'Size:', file.size, 'Type:', file.type)
    
    // Validate file type
    if (!file.type.startsWith('image/')) {
      console.error('❌ Invalid file type:', file.type)
      return NextResponse.json({ error: 'Invalid file type. Only images are allowed.' }, { status: 400 })
    }
    
    // Validate file size (5MB limit)
    if (file.size > 5 * 1024 * 1024) {
      console.error('❌ File too large:', file.size)
      return NextResponse.json({ error: 'File too large. Maximum size is 5MB.' }, { status: 400 })
    }
    
    // Convert file to buffer
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    
    // Generate unique filename
    const timestamp = Date.now()
    const fileName = `blog-images/${timestamp}-${file.name}`
    
    console.log('📤 Uploading to Firebase Storage:', fileName)
    
    // Upload to Firebase Storage
    const storageRef = ref(storage, fileName)
    const snapshot = await uploadBytes(storageRef, buffer, {
      contentType: file.type
    })
    
    console.log('✅ File uploaded successfully')
    
    // Get download URL
    const downloadURL = await getDownloadURL(snapshot.ref)
    
    console.log('🔗 Download URL generated:', downloadURL)
    
    return NextResponse.json({
      success: true,
      url: downloadURL,
      path: fileName,
      fileName: file.name
    })
    
  } catch (error) {
    console.error('❌ Server-side upload error:', error)
    return NextResponse.json({ 
      error: 'Upload failed', 
      details: error.message 
    }, { status: 500 })
  }
}
