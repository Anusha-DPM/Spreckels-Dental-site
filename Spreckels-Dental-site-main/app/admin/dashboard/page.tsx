'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  getBlogPosts, 
  deleteBlogPost, 
  updateBlogPost
} from '../../../lib/blogDatabase'

// Define BlogPost type locally since it's not exported from the JS file
interface BlogPost {
  id?: string
  title: string
  content: string
  excerpt?: string
  coverImage?: string
  imageUrl?: string
  tags: string[]
  categories: string[]
  metaTitle: string
  metaDescription: string
  slug: string
  published: boolean
  publishDate: string
  createdAt: string
  updatedAt: string
  author?: string
}
import { uploadImageToFirebase } from '../../../lib/firebase'

export default function AdminDashboard() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [showPublishModal, setShowPublishModal] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Check authentication
    const isAuthenticated = localStorage.getItem('adminAuthenticated')
    if (!isAuthenticated) {
      router.push('/admin/login')
      return
    }

    loadPosts()
  }, [router])

  const loadPosts = async () => {
    try {
      setLoading(true)
      
      // Try to get posts from Firebase first
      try {
        const fetchedPosts = await getBlogPosts()
        setPosts(fetchedPosts.map(post => post as BlogPost))
        return
      } catch (firebaseError) {
        console.warn('Firebase not available, checking localStorage:', firebaseError)
      }
      
      // Fallback to localStorage if Firebase fails
      try {
        const localPosts = JSON.parse(localStorage.getItem('tempBlogPosts') || '[]')
        const sortedPosts = localPosts.sort((a: any, b: any) => 
          new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
        )
        setPosts(sortedPosts.map((post: any) => post as BlogPost))
        
        if (localPosts.length === 0) {
          setError('No blog posts found. Create your first post!')
        }
      } catch (localError) {
        console.error('Error loading from localStorage:', localError)
        setError('Failed to load blog posts from local storage')
      }
    } catch (err) {
      setError('Failed to load blog posts')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleDeletePost = async (postId: string) => {
    try {
      // Try Firebase first
      try {
        await deleteBlogPost(postId)
      } catch (firebaseError) {
        console.warn('Firebase delete failed, using localStorage:', firebaseError)
      }
      
      // Update localStorage
      try {
        const localPosts = JSON.parse(localStorage.getItem('tempBlogPosts') || '[]')
        const updatedPosts = localPosts.filter((post: any) => post.id !== postId)
        localStorage.setItem('tempBlogPosts', JSON.stringify(updatedPosts))
      } catch (localError) {
        console.error('Error updating localStorage:', localError)
      }
      
      setPosts(posts.filter(post => post.id !== postId))
      setShowDeleteModal(false)
      setSelectedPost(null)
    } catch (err) {
      setError('Failed to delete post')
      console.error(err)
    }
  }

  const handlePublishPost = async (post: BlogPost) => {
    try {
      const publishDate = new Date().toISOString()
      
      // Try Firebase first
      try {
        await updateBlogPost(post.id!, {
          published: true,
          publishDate: publishDate
        })
      } catch (firebaseError) {
        console.warn('Firebase update failed, using localStorage:', firebaseError)
      }
      
      // Update localStorage
      try {
        const localPosts = JSON.parse(localStorage.getItem('tempBlogPosts') || '[]')
        const updatedPosts = localPosts.map((p: any) => 
          p.id === post.id 
            ? { ...p, published: true, publishDate: publishDate }
            : p
        )
        localStorage.setItem('tempBlogPosts', JSON.stringify(updatedPosts))
      } catch (localError) {
        console.error('Error updating localStorage:', localError)
      }
      
      setPosts(posts.map(p => 
        p.id === post.id 
          ? { ...p, published: true, publishDate: publishDate }
          : p
      ))
      setShowPublishModal(false)
      setSelectedPost(null)
    } catch (err) {
      setError('Failed to publish post')
      console.error(err)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('adminAuthenticated')
    router.push('/admin/login')
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#441018] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading blog posts...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <motion.header 
        className="bg-white shadow-sm border-b border-gray-200"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gray-900">Blog Dashboard</h1>
              <span className="text-sm text-gray-500">Manage your blog posts</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="/admin/new-post"
                className="bg-[#441018] text-white px-4 py-2 rounded-lg hover:bg-[#5a1a2a] transition-colors duration-200"
              >
                + New Post
              </Link>
              <button
                onClick={handleLogout}
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {error && (
          <motion.div 
            className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {error}
          </motion.div>
        )}

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="text-2xl font-bold text-gray-900">{posts.length}</div>
            <div className="text-sm text-gray-500">Total Posts</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="text-2xl font-bold text-green-600">
              {posts.filter(p => p.published).length}
            </div>
            <div className="text-sm text-gray-500">Published</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="text-2xl font-bold text-yellow-600">
              {posts.filter(p => !p.published).length}
            </div>
            <div className="text-sm text-gray-500">Drafts</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="text-2xl font-bold text-blue-600">
              {posts.length > 0 ? Math.round(posts.reduce((acc, post) => acc + (post.content?.length || 0), 0) / posts.length) : 0}
            </div>
            <div className="text-sm text-gray-500">Avg. Length</div>
          </div>
        </motion.div>

        {/* Posts Table */}
        <motion.div 
          className="bg-white rounded-lg shadow-sm overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">All Posts</h2>
          </div>
          
          {posts.length === 0 ? (
            <div className="p-8 text-center">
              <div className="text-gray-400 text-6xl mb-4">📝</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No posts yet</h3>
              <p className="text-gray-500 mb-4">Create your first blog post to get started</p>
              <Link
                href="/admin/new-post"
                className="bg-[#441018] text-white px-6 py-2 rounded-lg hover:bg-[#5a1a2a] transition-colors duration-200"
              >
                Create First Post
              </Link>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Post
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {posts.map((post, index) => (
                    <motion.tr
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="hover:bg-gray-50"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          {post.coverImage && (
                            <img
                              src={post.coverImage}
                              alt={post.title}
                              className="h-12 w-12 rounded-lg object-cover mr-4"
                            />
                          )}
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {post.title}
                            </div>
                            <div className="text-sm text-gray-500">
                              {post.excerpt || post.content.substring(0, 100)}...
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          post.published 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {post.published ? 'Published' : 'Draft'}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {post.published ? formatDate(post.publishDate) : formatDate(post.createdAt)}
                      </td>
                      <td className="px-6 py-4 text-sm font-medium">
                        <div className="flex space-x-2">
                          <Link
                            href={`/admin/edit-post/${post.id}`}
                            className="text-[#441018] hover:text-[#5a1a2a] transition-colors duration-200"
                          >
                            Edit
                          </Link>
                          {!post.published && (
                            <button
                              onClick={() => {
                                setSelectedPost(post)
                                setShowPublishModal(true)
                              }}
                              className="text-green-600 hover:text-green-800 transition-colors duration-200"
                            >
                              Publish
                            </button>
                          )}
                          <button
                            onClick={() => {
                              setSelectedPost(post)
                              setShowDeleteModal(true)
                            }}
                            className="text-red-600 hover:text-red-800 transition-colors duration-200"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </motion.div>
      </div>

      {/* Delete Modal */}
      {showDeleteModal && selectedPost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div 
            className="bg-white rounded-lg p-6 max-w-md w-full mx-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Delete Post</h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete "{selectedPost.title}"? This action cannot be undone.
            </p>
            <div className="flex space-x-3">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDeletePost(selectedPost.id!)}
                className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
              >
                Delete
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Publish Modal */}
      {showPublishModal && selectedPost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div 
            className="bg-white rounded-lg p-6 max-w-md w-full mx-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Publish Post</h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to publish "{selectedPost.title}"? This will make it visible to all visitors.
            </p>
            <div className="flex space-x-3">
              <button
                onClick={() => setShowPublishModal(false)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                onClick={() => handlePublishPost(selectedPost)}
                className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200"
              >
                Publish
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}
