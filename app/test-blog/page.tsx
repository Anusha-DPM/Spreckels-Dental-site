'use client'

import { useState } from 'react'
import { createBlogPost, getBlogPosts } from '@/lib/blogDatabase'

export default function TestBlogPage() {
  const [status, setStatus] = useState('')
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)

  const testCreatePost = async () => {
    setLoading(true)
    setStatus('Creating test blog post...')
    
    try {
      const testData = {
        title: "Test Blog Post - " + new Date().toLocaleString(),
        content: "<p>This is a test blog post content.</p>",
        excerpt: "This is a test blog post excerpt.",
        category: "Test",
        tags: ["test", "blog"],
        author: "Test Author",
        published: true,
        slug: "test-blog-post-" + Date.now()
      }
      
      const newPost = await createBlogPost(testData)
      setStatus(`✅ Blog post created successfully! ID: ${newPost.id}`)
      
      // Load all posts to verify
      await loadPosts()
      
    } catch (error: any) {
      console.error('Error creating blog post:', error)
      setStatus(`❌ Error: ${error?.message || 'Unknown error'}`)
    } finally {
      setLoading(false)
    }
  }

  const loadPosts = async () => {
    setLoading(true)
    setStatus('Loading blog posts...')
    
    try {
      const allPosts = await getBlogPosts({ published: null })
      setPosts(allPosts)
      setStatus(`✅ Loaded ${allPosts.length} blog posts`)
    } catch (error: any) {
      console.error('Error loading blog posts:', error)
      setStatus(`❌ Error loading posts: ${error?.message || 'Unknown error'}`)
    } finally {
      setLoading(false)
    }
  }

  const loadPublishedPosts = async () => {
    setLoading(true)
    setStatus('Loading published blog posts...')
    
    try {
      const publishedPosts = await getBlogPosts({ published: true })
      setPosts(publishedPosts)
      setStatus(`✅ Loaded ${publishedPosts.length} published blog posts`)
    } catch (error: any) {
      console.error('Error loading published posts:', error)
      setStatus(`❌ Error loading published posts: ${error?.message || 'Unknown error'}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Blog Test Page
        </h1>
        
        <div className="space-y-4 mb-6">
          <button
            onClick={testCreatePost}
            disabled={loading}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? 'Creating...' : 'Create Test Blog Post'}
          </button>
          
          <button
            onClick={loadPosts}
            disabled={loading}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 disabled:opacity-50 ml-2"
          >
            {loading ? 'Loading...' : 'Load All Posts'}
          </button>
          
          <button
            onClick={loadPublishedPosts}
            disabled={loading}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 disabled:opacity-50 ml-2"
          >
            {loading ? 'Loading...' : 'Load Published Posts'}
          </button>
        </div>
        
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Status:</h2>
          <p className="text-gray-700">{status}</p>
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