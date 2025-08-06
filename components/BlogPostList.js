'use client'

import { useState, useEffect } from 'react'
import { getBlogPosts, deleteBlogPost, updateBlogPost } from '../lib/blogDatabase'

export default function BlogPostList() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [status, setStatus] = useState('')

  useEffect(() => {
    loadPosts()
  }, [])

  const loadPosts = async () => {
    try {
      setLoading(true)
      const allPosts = await getBlogPosts({ published: null })
      setPosts(allPosts)
    } catch (error) {
      console.error('Error loading posts:', error)
      setStatus(`❌ Error loading posts: ${error.message}`)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (postId) => {
    if (!confirm('Are you sure you want to delete this blog post?')) {
      return
    }

    try {
      await deleteBlogPost(postId)
      setStatus(`✅ Blog post deleted successfully!`)
      loadPosts() // Reload the list
    } catch (error) {
      console.error('Error deleting post:', error)
      setStatus(`❌ Error deleting post: ${error.message}`)
    }
  }

  const handleTogglePublished = async (postId, currentPublished) => {
    try {
      await updateBlogPost(postId, { published: !currentPublished })
      setStatus(`✅ Blog post ${!currentPublished ? 'published' : 'unpublished'} successfully!`)
      loadPosts() // Reload the list
    } catch (error) {
      console.error('Error updating post:', error)
      setStatus(`❌ Error updating post: ${error.message}`)
    }
  }

  const handleToggleFeatured = async (postId, currentFeatured) => {
    try {
      await updateBlogPost(postId, { featured: !currentFeatured })
      setStatus(`✅ Blog post ${!currentFeatured ? 'featured' : 'unfeatured'} successfully!`)
      loadPosts() // Reload the list
    } catch (error) {
      console.error('Error updating post:', error)
      setStatus(`❌ Error updating post: ${error.message}`)
    }
  }

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-20 bg-gray-200 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            📚 Blog Posts Management
          </h1>
          <button
            onClick={loadPosts}
            className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            Refresh
          </button>
        </div>

        {/* Status Message */}
        {status && (
          <div className={`p-4 rounded-lg mb-6 ${
            status.includes('✅') 
              ? 'bg-green-100 text-green-800 border border-green-200' 
              : 'bg-red-100 text-red-800 border border-red-200'
          }`}>
            {status}
          </div>
        )}

        {/* Posts List */}
        {posts.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500 text-lg">No blog posts found.</p>
            <p className="text-gray-400 text-sm mt-2">Create your first blog post using the upload form.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {posts.map((post) => (
              <div key={post.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">
                      {post.excerpt || 'No excerpt provided'}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>ID: {post.id}</span>
                      <span>Author: {post.author || 'Unknown'}</span>
                      <span>Category: {post.category || 'Uncategorized'}</span>
                      <span>Views: {post.views || 0}</span>
                      <span>Created: {post.createdAt?.toDate?.()?.toLocaleDateString() || 'Unknown'}</span>
                    </div>
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
                  <div className="flex flex-col space-y-2 ml-4">
                    {/* Status Badges */}
                    <div className="flex space-x-2">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        post.published 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {post.published ? 'Published' : 'Draft'}
                      </span>
                      {post.featured && (
                        <span className="px-2 py-1 text-xs rounded-full bg-purple-100 text-purple-800">
                          Featured
                        </span>
                      )}
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleTogglePublished(post.id, post.published)}
                        className={`px-3 py-1 text-xs rounded ${
                          post.published
                            ? 'bg-yellow-500 text-white hover:bg-yellow-600'
                            : 'bg-green-500 text-white hover:bg-green-600'
                        }`}
                      >
                        {post.published ? 'Unpublish' : 'Publish'}
                      </button>
                      <button
                        onClick={() => handleToggleFeatured(post.id, post.featured)}
                        className={`px-3 py-1 text-xs rounded ${
                          post.featured
                            ? 'bg-gray-500 text-white hover:bg-gray-600'
                            : 'bg-purple-500 text-white hover:bg-purple-600'
                        }`}
                      >
                        {post.featured ? 'Unfeature' : 'Feature'}
                      </button>
                      <button
                        onClick={() => handleDelete(post.id)}
                        className="px-3 py-1 text-xs rounded bg-red-500 text-white hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Summary */}
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">📊 Summary</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <span className="text-gray-600">Total Posts:</span>
              <span className="ml-2 font-semibold">{posts.length}</span>
            </div>
            <div>
              <span className="text-gray-600">Published:</span>
              <span className="ml-2 font-semibold">{posts.filter(p => p.published).length}</span>
            </div>
            <div>
              <span className="text-gray-600">Drafts:</span>
              <span className="ml-2 font-semibold">{posts.filter(p => !p.published).length}</span>
            </div>
            <div>
              <span className="text-gray-600">Featured:</span>
              <span className="ml-2 font-semibold">{posts.filter(p => p.featured).length}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 