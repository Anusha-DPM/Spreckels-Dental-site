'use client'

import { useState } from 'react'
import { db } from '../lib/firebase'
import { collection, addDoc, getDocs } from 'firebase/firestore'

export default function DatabaseTest() {
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const testDatabase = async () => {
    setLoading(true)
    setStatus('Testing database connection...')
    
    try {
      // Test 1: Check if Firebase is connected
      if (!db) {
        setStatus('❌ Firebase not connected')
        return
      }
      
      setStatus('✅ Firebase connected')
      
      // Test 2: Create a test document in blog_posts collection
      setStatus('Creating test blog post...')
      const testPost = {
        title: "Test Blog Post",
        content: "This is a test post to verify database connection",
        excerpt: "Test excerpt",
        category: "Test",
        tags: ["test"],
        published: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
      
      const docRef = await addDoc(collection(db, 'blog_posts'), testPost)
      setStatus(`✅ Test blog post created! Document ID: ${docRef.id}`)
      
      // Test 3: Read documents from the collection
      setStatus('Reading documents from database...')
      const querySnapshot = await getDocs(collection(db, 'blog_posts'))
      const posts = []
      querySnapshot.forEach((doc) => {
        posts.push({ id: doc.id, ...doc.data() })
      })
      
      setStatus(`✅ Database working! Found ${posts.length} blog posts`)
      
    } catch (error) {
      console.error('Database test error:', error)
      setStatus(`❌ Error: ${error.message}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Firebase Database Test
        </h1>

        <div className="mb-6">
          <button
            onClick={testDatabase}
            disabled={loading}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {loading ? 'Testing...' : 'Test Database Connection'}
          </button>
        </div>

        {status && (
          <div className={`p-4 rounded-lg mb-6 ${
            status.includes('✅') 
              ? 'bg-green-100 text-green-800 border border-green-200' 
              : 'bg-red-100 text-red-800 border border-red-200'
          }`}>
            {status}
          </div>
        )}

        <div className="p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">What This Test Does:</h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• Checks if Firebase is connected</li>
            <li>• Creates a test blog post in the database</li>
            <li>• Reads documents from the blog_posts collection</li>
            <li>• Verifies the database is working properly</li>
          </ul>
        </div>

        <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">Collections That Will Be Created:</h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• <strong>blog_posts</strong> - Blog articles</li>
            <li>• <strong>appointments</strong> - Patient appointments</li>
            <li>• <strong>contact_messages</strong> - Contact form submissions</li>
            <li>• <strong>testimonials</strong> - Patient testimonials</li>
            <li>• <strong>patients</strong> - Patient records</li>
          </ul>
        </div>
      </div>
    </div>
  )
} 