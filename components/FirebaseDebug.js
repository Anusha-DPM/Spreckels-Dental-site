'use client'

import { useState, useEffect } from 'react'
import { db } from '../lib/firebase'
import { createBlogPost, getBlogPosts } from '../lib/blogDatabase'

export default function FirebaseDebug() {
  const [status, setStatus] = useState('')
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)

  // Test Firebase connection
  const testConnection = async () => {
    setStatus('Testing Firebase connection...')
    setLoading(true)
    
    try {
      // Check if Firebase is initialized
      if (!db) {
        setStatus('❌ Firebase not initialized - check environment variables')
        return
      }

      setStatus('✅ Firebase initialized successfully')
      
      // Test creating a simple document
      const testData = {
        title: "Test Post - " + new Date().toISOString(),
        content: "This is a test post",
        excerpt: "Test excerpt",
        category: "Test",
        tags: ["test"],
        published: true
      }

      setStatus('Creating test blog post...')
      const newPost = await createBlogPost(testData)
      setStatus(`✅ Blog post created successfully! ID: ${newPost.id}`)
      
      // Load posts to verify
      await loadPosts()
      
    } catch (error) {
      console.error('Firebase test error:', error)
      setStatus(`❌ Error: ${error.message}`)
    } finally {
      setLoading(false)
    }
  }

  // Load existing posts
  const loadPosts = async () => {
    try {
      const allPosts = await getBlogPosts({ published: null })
      setPosts(allPosts)
      setStatus(`✅ Loaded ${allPosts.length} posts`)
    } catch (error) {
      console.error('Error loading posts:', error)
      setStatus(`❌ Error loading posts: ${error.message}`)
    }
  }

  useEffect(() => {
    loadPosts()
  }, [])

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Firebase Debug Tool
        </h1>

        {/* Test Button */}
        <div className="mb-6">
          <button
            onClick={testConnection}
            disabled={loading}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {loading ? 'Testing...' : 'Test Firebase Connection'}
          </button>
        </div>

        {/* Status */}
        {status && (
          <div className={`p-4 rounded-lg mb-6 ${
            status.includes('✅') 
              ? 'bg-green-100 text-green-800 border border-green-200' 
              : 'bg-red-100 text-red-800 border border-red-200'
          }`}>
            {status}
          </div>
        )}

        {/* Environment Variables Check */}
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">Environment Variables Check</h3>
          <div className="space-y-2 text-sm">
            <div>API Key: {process.env.NEXT_PUBLIC_FIREBASE_API_KEY ? '✅ Set' : '❌ Missing'}</div>
            <div>Auth Domain: {process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ? '✅ Set' : '❌ Missing'}</div>
            <div>Project ID: {process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ? '✅ Set' : '❌ Missing'}</div>
            <div>Storage Bucket: {process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ? '✅ Set' : '❌ Missing'}</div>
            <div>Messaging Sender ID: {process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID ? '✅ Set' : '❌ Missing'}</div>
            <div>App ID: {process.env.NEXT_PUBLIC_FIREBASE_APP_ID ? '✅ Set' : '❌ Missing'}</div>
          </div>
        </div>

        {/* Posts List */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Blog Posts in Database ({posts.length})
          </h2>
          
          {posts.length === 0 ? (
            <p className="text-gray-500">No blog posts found in database.</p>
          ) : (
            <div className="space-y-4">
              {posts.map((post) => (
                <div key={post.id} className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{post.title}</h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span>ID: {post.id}</span>
                    <span>Status: {post.published ? 'Published' : 'Draft'}</span>
                    <span>Created: {post.createdAt?.toLocaleDateString()}</span>
                  </div>
                  <p className="text-gray-600 mt-2">{post.excerpt}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Troubleshooting Tips */}
        <div className="mt-8 p-4 bg-yellow-50 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">Troubleshooting Tips</h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• Check if all environment variables are set correctly</li>
            <li>• Verify Firebase project is created and Firestore is enabled</li>
            <li>• Check Firestore security rules (should be in test mode for development)</li>
            <li>• Look for errors in browser console (F12)</li>
            <li>• Make sure you're not in an incognito/private browser window</li>
          </ul>
        </div>
      </div>
    </div>
  )
} 