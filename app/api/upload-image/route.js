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

// Validate Firebase configuration
const validateFirebaseConfig = () => {
  const requiredFields = [
    'apiKey',
    'authDomain', 
    'projectId',
    'storageBucket',
    'messagingSenderId',
    'appId'
  ]

  const missingFields = requiredFields.filter(field => !firebaseConfig[field])
  
  if (missingFields.length > 0) {
    console.error('Missing Firebase configuration fields:', missingFields)
    throw new Error(`Firebase configuration incomplete. Missing: ${missingFields.join(', ')}`)
  }
}

// Initialize Firebase with error handling
let app, storage
try {
  validateFirebaseConfig()
  app = initializeApp(firebaseConfig)
  storage = getStorage(app)
  console.log('✅ Firebase initialized successfully on server')
} catch (error) {
  console.error('❌ Firebase initialization failed on server:', error)
  app = null
  storage = null
}

export async function POST(request) {
  try {
    console.log('🚀 Starting server-side image upload...')
    
    // Check if Firebase is initialized
    if (!storage) {
      console.error('❌ Firebase Storage not initialized on server')
      return NextResponse.json({ 
        error: 'Firebase Storage not available. Please check server configuration.' 
      }, { status: 500 })
    }
    
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
    console.log('🔥 Firebase Storage available:', !!storage)
    console.log('📦 Firebase Config check:', {
      apiKey: !!firebaseConfig.apiKey,
      authDomain: !!firebaseConfig.authDomain,
      projectId: !!firebaseConfig.projectId,
      storageBucket: !!firebaseConfig.storageBucket,
      messagingSenderId: !!firebaseConfig.messagingSenderId,
      appId: !!firebaseConfig.appId
    })
    
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
    console.error('Error details:', {
      code: error.code,
      message: error.message,
      stack: error.stack
    })
    
    // Provide more specific error messages
    if (error.code === 'storage/unauthorized') {
      return NextResponse.json({ 
        error: 'Upload failed: Unauthorized. Please check Firebase Storage rules.' 
      }, { status: 500 })
    } else if (error.code === 'storage/quota-exceeded') {
      return NextResponse.json({ 
        error: 'Upload failed: Storage quota exceeded.' 
      }, { status: 500 })
    } else if (error.code === 'storage/unauthenticated') {
      return NextResponse.json({ 
        error: 'Upload failed: User not authenticated.' 
      }, { status: 500 })
    } else {
      return NextResponse.json({ 
        error: 'Upload failed', 
        details: error.message 
      }, { status: 500 })
    }
  }
}
