'use client'

import { useState } from 'react'
import { createBlogPost, getBlogPosts } from '@/lib/blogDatabase'

export default function TestConnection() {
  const [status, setStatus] = useState('')
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const testCreatePost = async () => {
    setIsLoading(true)
    setStatus('Creating test blog post...')
    
    try {
      const testPost = {
        title: 'Test Post - ' + new Date().toLocaleString(),
        content: '<p>This is a test post to verify Firebase connection.</p>',
        excerpt: 'Test post for connectivity verification',
        category: 'Test',
        tags: ['test', 'connection'],
        author: 'Test User',
        published: true,
        slug: 'test-post-' + Date.now(),
        imageUrl: '',
        metaTitle: 'Test Post',
        metaDescription: 'Test post for debugging'
      }

      const newPost = await createBlogPost(testPost)
      setStatus(`✅ Post created successfully! ID: ${newPost.id}`)
      
      // Load posts to verify
      await loadPosts()
      
    } catch (error: any) {
      console.error('Error:', error)
      setStatus(`❌ Error: ${error?.message || 'Unknown error'}`)
    } finally {
      setIsLoading(false)
    }
  }

  const loadPosts = async () => {
    setIsLoading(true)
    setStatus('Loading posts...')
    
    try {
      const allPosts = await getBlogPosts({ published: null })
      setPosts(allPosts)
      setStatus(`✅ Loaded ${allPosts.length} posts`)
    } catch (error: any) {
      console.error('Error loading posts:', error)
      setStatus(`❌ Error loading posts: ${error?.message || 'Unknown error'}`)
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
          Connection Test
        </h1>
        
        <div className="space-y-4 mb-6">
          <button
            onClick={testCreatePost}
            disabled={isLoading}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
          >
            {isLoading ? 'Creating...' : 'Create Test Post'}
          </button>
          
          <button
            onClick={loadPosts}
            disabled={isLoading}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 disabled:opacity-50 ml-2"
          >
            {isLoading ? 'Loading...' : 'Load Posts'}
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
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Posts ({posts.length}):</h2>
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