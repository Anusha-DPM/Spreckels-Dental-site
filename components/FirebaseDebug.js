'use client'

import { useState, useEffect } from 'react'
import { db } from '../lib/firebase'
import { createDocument, getAllDocuments } from '../lib/database'
import { createBlogPost, getBlogPosts } from '../lib/blogDatabase'

export default function FirebaseDebug() {
  const [status, setStatus] = useState('')
  const [documents, setDocuments] = useState([])
  const [blogPosts, setBlogPosts] = useState([])
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
        title: "Test Document - " + new Date().toISOString(),
        content: "This is a test document",
        type: "test",
        created: new Date().toISOString()
      }

      setStatus('Creating test document...')
      const newDoc = await createDocument('test-collection', testData)
      setStatus(`✅ Document created successfully! ID: ${newDoc.id}`)
      
      // Test blog post creation
      setStatus('Creating test blog post...')
      const testBlogData = {
        title: "Test Blog Post - " + new Date().toISOString(),
        content: "<p>This is a test blog post content.</p>",
        excerpt: "This is a test blog post excerpt.",
        category: "Test",
        tags: ["test", "blog"],
        author: "Test Author",
        published: true
      }
      const newBlogPost = await createBlogPost(testBlogData)
      setStatus(`✅ Blog post created successfully! ID: ${newBlogPost.id}`)
      
      // Load documents to verify
      await loadDocuments()
      await loadBlogPosts()
      
    } catch (error) {
      console.error('Firebase test error:', error)
      setStatus(`❌ Error: ${error.message}`)
    } finally {
      setLoading(false)
    }
  }

  // Load existing documents
  const loadDocuments = async () => {
    try {
      const allDocs = await getAllDocuments('test-collection')
      setDocuments(allDocs)
      setStatus(`✅ Loaded ${allDocs.length} test documents`)
    } catch (error) {
      console.error('Error loading documents:', error)
      setStatus(`❌ Error loading documents: ${error.message}`)
    }
  }

  // Load existing blog posts
  const loadBlogPosts = async () => {
    try {
      const allPosts = await getBlogPosts({ published: null })
      setBlogPosts(allPosts)
      setStatus(`✅ Loaded ${allPosts.length} blog posts`)
    } catch (error) {
      console.error('Error loading blog posts:', error)
      setStatus(`❌ Error loading blog posts: ${error.message}`)
    }
  }

  useEffect(() => {
    loadDocuments()
    loadBlogPosts()
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

        {/* Documents List */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Test Documents in Database ({documents.length})
          </h2>
          
          {documents.length === 0 ? (
            <p className="text-gray-500">No test documents found in database.</p>
          ) : (
            <div className="space-y-4">
              {documents.map((doc) => (
                <div key={doc.id} className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{doc.title}</h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span>ID: {doc.id}</span>
                    <span>Type: {doc.type}</span>
                    <span>Created: {doc.created}</span>
                  </div>
                  <p className="text-gray-600 mt-2">{doc.content}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Blog Posts List */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Blog Posts in Database ({blogPosts.length})
          </h2>
          
          {blogPosts.length === 0 ? (
            <p className="text-gray-500">No blog posts found in database.</p>
          ) : (
            <div className="space-y-4">
              {blogPosts.map((post) => (
                <div key={post.id} className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{post.title}</h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span>ID: {post.id}</span>
                    <span>Status: {post.published ? 'Published' : 'Draft'}</span>
                    <span>Category: {post.category}</span>
                    <span>Author: {post.author}</span>
                  </div>
                  <p className="text-gray-600 mt-2">{post.excerpt}</p>
                  {post.tags && post.tags.length > 0 && (
                    <div className="mt-2">
                      <span className="text-sm text-gray-500">Tags: </span>
                      {post.tags.map((tag, index) => (
                        <span key={index} className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mr-1">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
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