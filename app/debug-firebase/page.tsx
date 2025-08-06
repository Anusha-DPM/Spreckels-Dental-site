'use client'

import { useState } from 'react'
import { createBlogPost, getBlogPosts } from '@/lib/blogDatabase'
import { db } from '@/lib/firebase'
import { collection, addDoc, getDocs } from 'firebase/firestore'

interface BlogPost {
  id: string
  title: string
  content: string
  excerpt: string
  category?: string
  tags: string[]
  author?: string
  published: boolean
  slug: string
  createdAt?: any
  updatedAt?: any
  imageUrl?: string
  coverImage?: string
  metaTitle?: string
  metaDescription?: string
  featured?: boolean
  views?: number
}

export default function DebugFirebase() {
  const [status, setStatus] = useState('')
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const testFirebaseConnection = async () => {
    setIsLoading(true)
    setStatus('Testing Firebase connection...')
    
    try {
      // Test 1: Check if db is available
      if (!db) {
        setStatus('❌ Firebase db is null - check initialization')
        return
      }
      
      setStatus('✅ Firebase db is available')
      
      // Test 2: Try to add a document directly
      setStatus('Testing direct document creation...')
      const testData = {
        title: 'Direct Test Document',
        content: 'This is a direct test',
        timestamp: new Date().toISOString(),
        test: true
      }
      
      const docRef = await addDoc(collection(db, 'test-collection'), testData)
      setStatus(`✅ Direct document created successfully! ID: ${docRef.id}`)
      
      // Test 3: Try to read documents
      setStatus('Testing document reading...')
      const querySnapshot = await getDocs(collection(db, 'test-collection'))
      const docs = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
      setStatus(`✅ Read ${docs.length} test documents successfully`)
      
    } catch (error: any) {
      console.error('Firebase test error:', error)
      setStatus(`❌ Error: ${error?.message || 'Unknown error'}`)
    } finally {
      setIsLoading(false)
    }
  }

  const testBlogPostCreation = async () => {
    setIsLoading(true)
    setStatus('Testing blog post creation...')
    
    try {
      const testPost = {
        title: 'Test Blog Post - ' + new Date().toLocaleString(),
        content: '<p>This is a test blog post content.</p>',
        excerpt: 'This is a test blog post excerpt.',
        category: 'Test',
        tags: ['test', 'blog'],
        author: 'Test Author',
        published: true,
        slug: 'test-blog-post-' + Date.now(),
        imageUrl: '',
        metaTitle: 'Test Blog Post',
        metaDescription: 'Test blog post for debugging'
      }

      const newPost = await createBlogPost(testPost)
      setStatus(`✅ Blog post created successfully! ID: ${newPost.id}`)
      
      // Load all posts to verify
      await loadAllPosts()
      
    } catch (error: any) {
      console.error('Blog post creation error:', error)
      setStatus(`❌ Error: ${error?.message || 'Unknown error'}`)
    } finally {
      setIsLoading(false)
    }
  }

  const loadAllPosts = async () => {
    setIsLoading(true)
    setStatus('Loading all blog posts...')
    
    try {
      const allPosts = await getBlogPosts({ published: null })
      setPosts(allPosts)
      setStatus(`✅ Loaded ${allPosts.length} blog posts`)
    } catch (error: any) {
      console.error('Error loading posts:', error)
      setStatus(`❌ Error loading posts: ${error?.message || 'Unknown error'}`)
    } finally {
      setIsLoading(false)
    }
  }

  const loadPublishedPosts = async () => {
    setIsLoading(true)
    setStatus('Loading published blog posts...')
    
    try {
      const publishedPosts = await getBlogPosts({ published: true })
      setPosts(publishedPosts)
      setStatus(`✅ Loaded ${publishedPosts.length} published blog posts`)
    } catch (error: any) {
      console.error('Error loading published posts:', error)
      setStatus(`❌ Error loading published posts: ${error?.message || 'Unknown error'}`)
    } finally {
      setIsLoading(false)
    }
  }

  const clearStatus = () => {
    setStatus('')
    setPosts([])
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Firebase Debug Page
        </h1>
        
        <div className="space-y-4 mb-6">
          <button
            onClick={testFirebaseConnection}
            disabled={isLoading}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
          >
            {isLoading ? 'Testing...' : 'Test Firebase Connection'}
          </button>
          
          <button
            onClick={testBlogPostCreation}
            disabled={isLoading}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 disabled:opacity-50 ml-2"
          >
            {isLoading ? 'Creating...' : 'Create Test Blog Post'}
          </button>
          
          <button
            onClick={loadAllPosts}
            disabled={isLoading}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 disabled:opacity-50 ml-2"
          >
            {isLoading ? 'Loading...' : 'Load All Posts'}
          </button>
          
          <button
            onClick={loadPublishedPosts}
            disabled={isLoading}
            className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 disabled:opacity-50 ml-2"
          >
            {isLoading ? 'Loading...' : 'Load Published Posts'}
          </button>
          
          <button
            onClick={clearStatus}
            className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 ml-2"
          >
            Clear
          </button>
        </div>
        
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Status:</h2>
          <p className="text-gray-700 bg-gray-100 p-3 rounded">{status || 'Click buttons to test'}</p>
        </div>
        
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Blog Posts ({posts.length}):</h2>
          {posts.length === 0 ? (
            <p className="text-gray-500">No posts found</p>
          ) : (
            <div className="space-y-4">
              {posts.map((post) => (
                <div key={post.id} className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900">{post.title}</h3>
                  <p className="text-gray-600 text-sm">{post.excerpt}</p>
                  <div className="flex items-center mt-2 text-xs text-gray-500">
                    <span>ID: {post.id}</span>
                    <span className="mx-2">•</span>
                    <span>Published: {post.published ? 'Yes' : 'No'}</span>
                    <span className="mx-2">•</span>
                    <span>Author: {post.author}</span>
                    <span className="mx-2">•</span>
                    <span>Created: {post.createdAt}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 