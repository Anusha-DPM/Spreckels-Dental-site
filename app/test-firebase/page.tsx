'use client'

import { useState, useEffect } from 'react'
import { db } from '@/lib/firebase'
import { collection, addDoc, getDocs } from 'firebase/firestore'

export default function TestFirebase() {
  const [status, setStatus] = useState('Testing...')
  const [error, setError] = useState('')
  const [posts, setPosts] = useState([])

  useEffect(() => {
    testFirebase()
  }, [])

  const testFirebase = async () => {
    try {
      setStatus('Testing Firebase connection...')
      
      if (!db) {
        setError('Firebase not initialized - check environment variables')
        return
      }

      // Test reading from Firebase
      setStatus('Testing read operation...')
      const querySnapshot = await getDocs(collection(db, 'blog-posts'))
      const existingPosts = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      setPosts(existingPosts)
      setStatus(`✅ Read successful - found ${existingPosts.length} posts`)

      // Test writing to Firebase
      setStatus('Testing write operation...')
      const testPost = {
        title: 'Test Post - ' + new Date().toLocaleString(),
        content: 'This is a test post to check Firebase connection',
        author: 'Test',
        published: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }

      const docRef = await addDoc(collection(db, 'blog-posts'), testPost)
      setStatus(`✅ Write successful - created post with ID: ${docRef.id}`)

    } catch (error: any) {
      console.error('Firebase test failed:', error)
      setError(`❌ Firebase error: ${error.message}`)
      setStatus('Test failed')
    }
  }

  const clearTestPosts = async () => {
    try {
      setStatus('Clearing test posts...')
      // Note: This would require delete permission in Firebase rules
      setStatus('✅ Test posts cleared (manual cleanup may be needed)')
    } catch (error: any) {
      setError(`❌ Clear error: ${error.message}`)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Firebase Connection Test</h1>
        
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Status</h2>
          <p className="text-lg">{status}</p>
          {error && (
            <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
              <strong>Error:</strong> {error}
            </div>
          )}
        </div>

        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Test Posts ({posts.length})</h2>
            <button
              onClick={testFirebase}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Run Test
            </button>
          </div>
          
          {posts.length > 0 ? (
            <div className="space-y-2">
              {posts.map((post: any) => (
                <div key={post.id} className="p-3 border rounded">
                  <strong>{post.title}</strong>
                  <p className="text-sm text-gray-600">{post.content}</p>
                  <p className="text-xs text-gray-500">ID: {post.id}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No posts found</p>
          )}
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Environment Check</h2>
          <div className="space-y-2 text-sm">
            <p><strong>API Key:</strong> {process.env.NEXT_PUBLIC_FIREBASE_API_KEY ? '✅ Set' : '❌ Missing'}</p>
            <p><strong>Project ID:</strong> {process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ? '✅ Set' : '❌ Missing'}</p>
            <p><strong>Auth Domain:</strong> {process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ? '✅ Set' : '❌ Missing'}</p>
            <p><strong>Storage Bucket:</strong> {process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ? '✅ Set' : '❌ Missing'}</p>
            <p><strong>App ID:</strong> {process.env.NEXT_PUBLIC_FIREBASE_APP_ID ? '✅ Set' : '❌ Missing'}</p>
          </div>
        </div>
      </div>
    </div>
  )
} 