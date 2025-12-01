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

// Validate Firebase configuration
const validateFirebaseConfig = () => {
  const requiredFields = [
    { key: 'apiKey', envVar: 'NEXT_PUBLIC_FIREBASE_API_KEY' },
    { key: 'authDomain', envVar: 'NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN' },
    { key: 'projectId', envVar: 'NEXT_PUBLIC_FIREBASE_PROJECT_ID' },
    { key: 'storageBucket', envVar: 'NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET' },
    { key: 'messagingSenderId', envVar: 'NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID' },
    { key: 'appId', envVar: 'NEXT_PUBLIC_FIREBASE_APP_ID' }
  ]
  const missingFields = requiredFields.filter(field => !firebaseConfig[field.key])
  
  if (missingFields.length > 0) {
    const missingEnvVars = missingFields.map(f => f.envVar).join(', ')
    console.error('❌ Missing Firebase configuration:', missingFields.map(f => f.key))
    console.error('❌ Missing environment variables:', missingEnvVars)
    console.error('💡 Please create a .env.local file with these variables. See firebase-env-template.txt for reference.')
    return { valid: false, missingFields: missingFields.map(f => f.envVar) }
  }
  return { valid: true, missingFields: [] }
}

// Initialize Firebase
let app = null
let storage = null
let configValidation = null

try {
  configValidation = validateFirebaseConfig()
  if (configValidation.valid) {
    if (!getApps().length) {
      app = initializeApp(firebaseConfig)
      console.log('✅ Firebase initialized in API route')
    } else {
      app = getApps()[0]
    }
    storage = getStorage(app)
  } else {
    console.error('❌ Firebase configuration invalid. Cannot initialize storage.')
  }
} catch (error) {
  console.error('❌ Firebase initialization error:', error)
  app = null
  storage = null
}

export async function POST(request) {
  try {
    // Check if Firebase Storage is initialized
    if (!storage) {
      console.error('❌ Firebase Storage is not initialized')
      
      // Get missing fields information
      const validation = configValidation || validateFirebaseConfig()
      const missingVars = validation.missingFields || []
      
      let errorMessage = 'Firebase Storage is not configured.'
      let errorDetails = 'Missing or invalid Firebase configuration'
      
      if (missingVars.length > 0) {
        errorMessage = `Firebase Storage is not configured. Missing environment variables: ${missingVars.join(', ')}`
        errorDetails = `Please create a .env.local file in your project root with the following variables:\n${missingVars.map(v => `${v}=your-value-here`).join('\n')}\n\nSee firebase-env-template.txt for reference.`
      } else {
        errorDetails = 'Firebase initialization failed. Please check your Firebase configuration and ensure all environment variables are set correctly.'
      }
      
      return NextResponse.json(
        { 
          error: errorMessage,
          details: errorDetails,
          missingEnvVars: missingVars
        },
        { status: 500 }
      )
    }

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
    console.error('❌ Server-side upload error:', error)
    console.error('Error stack:', error.stack)
    console.error('Error details:', {
      message: error.message,
      name: error.name,
      code: error.code
    })
    
    // Provide more specific error messages
    let errorMessage = 'Upload failed'
    let errorDetails = error.message || 'Unknown error'
    
    if (error.message?.includes('storage/')) {
      errorMessage = 'Firebase Storage error'
      errorDetails = error.message
    } else if (error.message?.includes('permission') || error.message?.includes('unauthorized')) {
      errorMessage = 'Permission denied'
      errorDetails = 'Check Firebase Storage security rules'
    } else if (error.message?.includes('network') || error.message?.includes('fetch')) {
      errorMessage = 'Network error'
      errorDetails = 'Failed to connect to Firebase Storage'
    }
    
    return NextResponse.json(
      { 
        error: errorMessage, 
        details: errorDetails,
        stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
      },
      { status: 500 }
    )
  }
}
