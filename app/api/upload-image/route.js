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
let initError = null

try {
  configValidation = validateFirebaseConfig()
  console.log('🔍 Firebase config validation:', {
    valid: configValidation.valid,
    missingFields: configValidation.missingFields,
    hasApiKey: !!firebaseConfig.apiKey,
    hasProjectId: !!firebaseConfig.projectId,
    hasStorageBucket: !!firebaseConfig.storageBucket
  })
  
  if (configValidation.valid) {
    if (!getApps().length) {
      app = initializeApp(firebaseConfig)
      console.log('✅ Firebase initialized in API route')
    } else {
      app = getApps()[0]
      console.log('✅ Using existing Firebase app')
    }
    storage = getStorage(app)
    console.log('✅ Firebase Storage initialized successfully')
  } else {
    console.error('❌ Firebase configuration invalid. Cannot initialize storage.')
    console.error('Missing fields:', configValidation.missingFields)
  }
} catch (error) {
  console.error('❌ Firebase initialization error:', error)
  console.error('Error details:', {
    message: error.message,
    code: error.code,
    stack: error.stack
  })
  initError = error
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
      
      // Check if we're on Vercel
      const isVercel = process.env.VERCEL === '1' || process.env.VERCEL_ENV
      
      let errorMessage = 'Firebase Storage is not configured.'
      let errorDetails = 'Missing or invalid Firebase configuration'
      
      if (missingVars.length > 0) {
        errorMessage = `Firebase Storage is not configured. Missing environment variables: ${missingVars.join(', ')}`
        
        if (isVercel) {
          errorDetails = `Firebase Storage is required on Vercel (local file storage is not available).\n\nPlease add the following environment variables in Vercel:\n1. Go to your Vercel project → Settings → Environment Variables\n2. Add these variables:\n${missingVars.map(v => `   ${v}=your-value-here`).join('\n')}\n3. Enable them for Production, Preview, and Development\n4. Redeploy your application\n\nSee VERCEL_FIREBASE_SETUP.md for detailed instructions.`
        } else {
          errorDetails = `Please create a .env.local file in your project root with the following variables:\n${missingVars.map(v => `${v}=your-value-here`).join('\n')}\n\nSee firebase-env-template.txt for reference.`
        }
      } else if (initError) {
        // If we have an initialization error, show it
        errorMessage = 'Firebase initialization failed'
        if (isVercel) {
          errorDetails = `Firebase failed to initialize: ${initError.message}. Please check your Firebase configuration values in Vercel Environment Variables and ensure they are correct. After updating, redeploy your application.`
        } else {
          errorDetails = `Firebase failed to initialize: ${initError.message}. Please check your Firebase configuration values in .env.local and ensure they are correct.`
        }
        console.error('Initialization error details:', {
          message: initError.message,
          code: initError.code
        })
      } else {
        if (isVercel) {
          errorDetails = 'Firebase initialization failed. Please check your Firebase configuration in Vercel Environment Variables and ensure all environment variables are set correctly. After updating, redeploy your application. See VERCEL_FIREBASE_SETUP.md for instructions.'
        } else {
          errorDetails = 'Firebase initialization failed. Please check your Firebase configuration and ensure all environment variables are set correctly. Make sure you have restarted your Next.js development server after updating .env.local'
        }
      }
      
      return NextResponse.json(
        { 
          error: errorMessage,
          details: errorDetails,
          missingEnvVars: missingVars,
          initError: initError ? initError.message : null
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
      folder: folder,
      storageBucket: firebaseConfig.storageBucket
    })

    // Generate unique filename
    const timestamp = Date.now()
    const fileName = `${folder}/${timestamp}-${file.name}`
    
    console.log('📁 Upload path:', fileName)
    console.log('🪣 Storage bucket:', firebaseConfig.storageBucket)
    
    // Create storage reference
    const storageRef = ref(storage, fileName)
    console.log('📤 Storage reference created:', storageRef.fullPath)
    
    // Convert file to buffer
    const arrayBuffer = await file.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)
    console.log('📦 Buffer created, size:', buffer.length)
    
    // Upload to Firebase Storage
    console.log('🚀 Starting upload to Firebase Storage...')
    console.log('📋 Upload details:', {
      bucket: firebaseConfig.storageBucket,
      path: fileName,
      size: buffer.length,
      contentType: file.type
    })
    
    try {
      const snapshot = await uploadBytes(storageRef, buffer, {
        contentType: file.type
      })
      console.log('✅ Upload bytes successful')
    } catch (uploadError) {
      // Log detailed error information
      console.error('❌ Upload bytes failed:', uploadError)
      console.error('Error type:', typeof uploadError)
      console.error('Error constructor:', uploadError?.constructor?.name)
      console.error('Error keys:', Object.keys(uploadError || {}))
      
      // Try to extract more information
      if (uploadError?.customData) {
        console.error('Custom data:', JSON.stringify(uploadError.customData, null, 2))
      }
      if (uploadError?.serverResponse) {
        console.error('Server response:', uploadError.serverResponse)
      }
      if (uploadError?.status) {
        console.error('HTTP status:', uploadError.status)
      }
      if (uploadError?.statusText) {
        console.error('HTTP status text:', uploadError.statusText)
      }
      
      // Re-throw to be caught by outer catch
      throw uploadError
    }
    
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
    console.error('Error type:', typeof error)
    console.error('Error constructor:', error?.constructor?.name)
    
    // Try to extract all possible error information for logging
    const errorInfo = {
      message: error.message,
      name: error.name,
      code: error.code
    }
    
    // Check for customData
    if (error.customData) {
      errorInfo.customData = error.customData
      errorInfo.status = error.customData?.status
      errorInfo.serverResponse = error.customData?.serverResponse
      console.error('Custom error data:', JSON.stringify(error.customData, null, 2))
    } else {
      console.warn('⚠️ No customData in error object')
    }
    
    // Check for serverResponse directly on error
    if (error.serverResponse) {
      errorInfo.serverResponse = error.serverResponse
      console.error('Server response (direct):', error.serverResponse)
    }
    
    // Check for status directly on error
    if (error.status) {
      errorInfo.status = error.status
      console.error('HTTP status (direct):', error.status)
    }
    
    // Try to get all properties
    console.error('All error properties:', Object.keys(error))
    console.error('Error info:', errorInfo)
    
    // Try to stringify the entire error (may fail, but worth trying)
    try {
      console.error('Full error object:', JSON.stringify(error, Object.getOwnPropertyNames(error), 2))
    } catch (stringifyError) {
      console.error('Could not stringify error:', stringifyError)
    }
    
    // Provide more specific error messages
    let errorMessage = 'Upload failed'
    let errorDetails = error.message || 'Unknown error'
    
    // Check for specific Firebase Storage error codes
    if (error.code === 'storage/unknown') {
      const status = error.customData?.status || error.status
      if (status === 404) {
        errorMessage = 'Firebase Storage bucket not found'
        const projectId = firebaseConfig.projectId || 'your-project-id'
        const expectedBucket1 = `${projectId}.appspot.com`
        const expectedBucket2 = `${projectId}.firebasestorage.app`
        errorDetails = `The storage bucket "${firebaseConfig.storageBucket || 'not set'}" was not found.

QUICK FIX:
1. Go to Firebase Console: https://console.firebase.google.com/
2. Select your project
3. Go to "Storage" in the left sidebar
4. If you see "Get started", click it to enable Storage
5. Copy the EXACT bucket name shown (could be: ${expectedBucket1} or ${expectedBucket2})
6. Update your .env.local file:
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=sprekels-dental.firebasestorage.app
7. Restart your server (Ctrl+C, then npm run dev)

IMPORTANT:
- Bucket name format can be: "project-id.appspot.com" OR "project-id.firebasestorage.app"
- No gs:// prefix
- Must match EXACTLY what's shown in Firebase Console
- Visit /api/firebase-diagnostic to check your current configuration`
      } else if (status === 403) {
        errorMessage = 'Firebase Storage permission denied'
        errorDetails = 'Check Firebase Storage security rules. The storage rules may be blocking the upload. Visit Firebase Console → Storage → Rules and ensure writes are allowed.'
      } else if (status === 500 || status === 503) {
        errorMessage = 'Firebase Storage server error'
        errorDetails = `Firebase Storage returned a ${status} error. This could mean:
1. Storage bucket permissions are incorrect
2. Storage bucket is not properly configured
3. Firebase Storage service is temporarily unavailable
4. Check Firebase Console → Storage → Rules to ensure writes are allowed
5. Verify the storage bucket exists and is accessible`
      } else if (!error.customData || Object.keys(error.customData).length === 0) {
        errorMessage = 'Firebase Storage error (empty response)'
        errorDetails = `Firebase Storage returned an error with no details (status: ${status || 'unknown'}). This usually means:
1. Storage bucket permissions issue - check Firebase Console → Storage → Rules
2. Storage bucket doesn't exist or is misconfigured
3. Network/firewall blocking the request
4. Verify storageBucket in .env.local: "${firebaseConfig.storageBucket}"
5. Visit Firebase Console → Storage to verify the bucket exists`
      } else {
        errorMessage = 'Firebase Storage error'
        errorDetails = `Error code: ${error.code}, Status: ${status || 'unknown'}. ${error.message}`
      }
    } else if (error.message?.includes('storage/')) {
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
        code: error.code,
        status: error.customData?.status,
        stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
      },
      { status: 500 }
    )
  }
}
