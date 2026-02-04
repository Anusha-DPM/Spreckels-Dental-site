'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function FirebaseTestPage() {
  const [testResults, setTestResults] = useState<any>({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    runFirebaseTests()
  }, [])

  const runFirebaseTests = async () => {
    const results: any = {}
    
    try {
      setLoading(true)
      
      // Test 1: Check environment variables
      console.log('🔍 Testing Environment Variables...')
      results.envVars = await testEnvironmentVariables()
      
      // Test 2: Check Firebase initialization
      console.log('🚀 Testing Firebase Initialization...')
      results.firebaseInit = await testFirebaseInitialization()
      
      // Test 3: Check Firestore connection
      console.log('📊 Testing Firestore Connection...')
      results.firestore = await testFirestoreConnection()
      
      // Test 4: Check Storage connection
      console.log('📁 Testing Firebase Storage...')
      results.storage = await testStorageConnection()
      
      setTestResults(results)
      
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const testEnvironmentVariables = async () => {
    const requiredVars = [
      'NEXT_PUBLIC_FIREBASE_API_KEY',
      'NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN',
      'NEXT_PUBLIC_FIREBASE_PROJECT_ID',
      'NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET',
      'NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID',
      'NEXT_PUBLIC_FIREBASE_APP_ID'
    ]
    
    const missingVars = requiredVars.filter(varName => !process.env[varName])
    
    return {
      success: missingVars.length === 0,
      missing: missingVars,
      message: missingVars.length === 0 
        ? 'All environment variables are set' 
        : `Missing: ${missingVars.join(', ')}`
    }
  }

  const testFirebaseInitialization = async () => {
    try {
      // Dynamic import to avoid SSR issues
      const { initializeApp } = await import('firebase/app')
      
      const firebaseConfig = {
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
      }
      
      const app = initializeApp(firebaseConfig)
      
      return {
        success: true,
        message: 'Firebase initialized successfully',
        projectId: firebaseConfig.projectId
      }
    } catch (err: any) {
      return {
        success: false,
        message: `Firebase initialization failed: ${err.message}`
      }
    }
  }

  const testFirestoreConnection = async () => {
    try {
      const { getFirestore, collection, getDocs } = await import('firebase/firestore')
      const { initializeApp } = await import('firebase/app')
      
      const firebaseConfig = {
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
      }
      
      const app = initializeApp(firebaseConfig)
      const db = getFirestore(app)
      
      // Test read operation
      const testCollection = collection(db, 'test-collection')
      const querySnapshot = await getDocs(testCollection)
      
      return {
        success: true,
        message: `Firestore connection successful - found ${querySnapshot.size} documents in test collection`
      }
    } catch (err: any) {
      return {
        success: false,
        message: `Firestore connection failed: ${err.message}`
      }
    }
  }

  const testStorageConnection = async () => {
    try {
      const { getStorage } = await import('firebase/storage')
      const { initializeApp } = await import('firebase/app')
      
      const firebaseConfig = {
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
      }
      
      const app = initializeApp(firebaseConfig)
      const storage = getStorage(app)
      
      return {
        success: true,
        message: 'Firebase Storage initialized successfully'
      }
    } catch (err: any) {
      return {
        success: false,
        message: `Firebase Storage initialization failed: ${err.message}`
      }
    }
  }

  const getStatusIcon = (success: boolean) => {
    return success ? '✅' : '❌'
  }

  const getStatusColor = (success: boolean) => {
    return success ? 'text-green-600' : 'text-red-600'
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#441018] mx-auto"></div>
          <p className="mt-4 text-gray-600">Running Firebase tests...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Firebase Connection Test</h1>
          
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
              {error}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Environment Variables Test */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                {getStatusIcon(testResults.envVars?.success)} Environment Variables
              </h2>
              <p className={`text-sm ${getStatusColor(testResults.envVars?.success)}`}>
                {testResults.envVars?.message}
              </p>
              {testResults.envVars?.missing && testResults.envVars.missing.length > 0 && (
                <div className="mt-3 p-3 bg-yellow-50 rounded border border-yellow-200">
                  <p className="text-sm text-yellow-800 font-medium">Missing Variables:</p>
                  <ul className="text-sm text-yellow-700 mt-1">
                    {testResults.envVars.missing.map((varName: string) => (
                      <li key={varName}>• {varName}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Firebase Initialization Test */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                {getStatusIcon(testResults.firebaseInit?.success)} Firebase Initialization
              </h2>
              <p className={`text-sm ${getStatusColor(testResults.firebaseInit?.success)}`}>
                {testResults.firebaseInit?.message}
              </p>
              {testResults.firebaseInit?.projectId && (
                <p className="text-sm text-gray-600 mt-2">
                  Project ID: {testResults.firebaseInit.projectId}
                </p>
              )}
            </div>

            {/* Firestore Connection Test */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                {getStatusIcon(testResults.firestore?.success)} Firestore Database
              </h2>
              <p className={`text-sm ${getStatusColor(testResults.firestore?.success)}`}>
                {testResults.firestore?.message}
              </p>
            </div>

            {/* Storage Connection Test */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                {getStatusIcon(testResults.storage?.success)} Firebase Storage
              </h2>
              <p className={`text-sm ${getStatusColor(testResults.storage?.success)}`}>
                {testResults.storage?.message}
              </p>
            </div>
          </div>

          {/* Setup Instructions */}
          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-4">🔧 Setup Instructions</h3>
            <div className="text-sm text-blue-800 space-y-2">
              <p><strong>1. Create Environment File:</strong> Create a <code>.env.local</code> file in your project root</p>
              <p><strong>2. Add Firebase Config:</strong> Copy your Firebase configuration from Firebase Console</p>
              <p><strong>3. Required Variables:</strong></p>
              <div className="ml-4 mt-2">
                <code className="block text-xs bg-blue-100 p-2 rounded">
                  NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key<br/>
                  NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com<br/>
                  NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id<br/>
                  NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com<br/>
                  NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id<br/>
                  NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
                </code>
              </div>
              <p><strong>4. Restart Server:</strong> After adding the environment file, restart your development server</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex space-x-4">
            <button
              onClick={runFirebaseTests}
              className="px-4 py-2 bg-[#441018] text-white rounded-lg hover:bg-[#5a1a2a] transition-colors duration-200"
            >
              Run Tests Again
            </button>
            <a
              href="/"
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              Back to Home
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
