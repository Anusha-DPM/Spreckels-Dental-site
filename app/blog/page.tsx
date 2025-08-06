'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getBlogPosts } from '@/lib/blogDatabase'

interface BlogPost {
  id: string
  title: string
  slug: string
  content: string
  excerpt: string
  coverImage?: string
  imageUrl?: string
  tags: string[]
  category?: string
  author?: string
  metaTitle?: string
  metaDescription?: string
  publishDate?: string
  createdAt?: any
  updatedAt?: any
  published: boolean
  featured?: boolean
  views?: number
  status?: 'draft' | 'published' // Add this for localStorage fallback
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [firebaseStatus, setFirebaseStatus] = useState<'connected' | 'offline' | 'error'>('connected')

  useEffect(() => {
    loadPublishedPosts()
  }, [])

  const loadPublishedPosts = async () => {
    try {
      setIsLoading(true)
      setFirebaseStatus('connected')
      console.log('Loading published posts from Firebase...')
      
      // Load only published posts from Firebase
      const publishedPosts = await getBlogPosts({ published: true })
      console.log('Firebase posts loaded:', publishedPosts)
      setPosts(publishedPosts)
      
      // If no posts from Firebase, try localStorage as fallback
      if (publishedPosts.length === 0) {
        console.log('No Firebase posts, checking localStorage...')
        const savedPosts = localStorage.getItem('blogPosts')
        if (savedPosts) {
          const allPosts = JSON.parse(savedPosts)
          console.log('localStorage posts:', allPosts)
          // Handle both Firebase (published: boolean) and localStorage (status: string) formats
          const publishedPosts = allPosts.filter((post: BlogPost) => {
            if (post.published !== undefined) {
              return post.published === true // Firebase format
            } else if (post.status !== undefined) {
              return post.status === 'published' // localStorage format
            }
            return false
          })
          console.log('Filtered published posts:', publishedPosts)
          setPosts(publishedPosts)
        }
      }
    } catch (error) {
      console.error('Error loading blog posts:', error)
      setFirebaseStatus('error')
      
      // Fallback to localStorage if Firebase fails
      const savedPosts = localStorage.getItem('blogPosts')
      if (savedPosts) {
        const allPosts = JSON.parse(savedPosts)
        console.log('Fallback to localStorage posts:', allPosts)
        // Handle both Firebase (published: boolean) and localStorage (status: string) formats
        const publishedPosts = allPosts.filter((post: BlogPost) => {
          if (post.published !== undefined) {
            return post.published === true // Firebase format
          } else if (post.status !== undefined) {
            return post.status === 'published' // localStorage format
          }
          return false
        })
        setPosts(publishedPosts)
      }
    } finally {
      setIsLoading(false)
    }
  }

  const formatDate = (dateString: any) => {
    if (!dateString) return 'Unknown date'
    
    // Handle Firebase timestamp
    if (dateString && typeof dateString === 'object' && dateString.toDate) {
      return dateString.toDate().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }
    
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  if (isLoading) {
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
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Debug Section - Remove this after testing */}
      <div className={`p-4 text-center ${
        firebaseStatus === 'connected' ? 'bg-green-100' : 
        firebaseStatus === 'offline' ? 'bg-yellow-100' : 'bg-red-100'
      }`}>
        <p className={`text-sm ${
          firebaseStatus === 'connected' ? 'text-green-800' : 
          firebaseStatus === 'offline' ? 'text-yellow-800' : 'text-red-800'
        }`}>
          Status: {firebaseStatus === 'connected' ? 'Firebase Connected' : 
                  firebaseStatus === 'offline' ? 'Offline Mode' : 'Firebase Error'} | 
          Posts: {posts.length} loaded
          <button 
            onClick={loadPublishedPosts}
            className="ml-2 bg-blue-500 text-white px-2 py-1 rounded text-xs"
          >
            Reload
          </button>
          <Link 
            href="/admin/login"
            className="ml-2 bg-green-500 text-white px-2 py-1 rounded text-xs"
          >
            Admin Login
          </Link>
          <Link 
            href="/test-blog"
            className="ml-2 bg-purple-500 text-white px-2 py-1 rounded text-xs"
          >
            Test Blog
          </Link>
        </p>
      </div>
      
             {/* Hero Section */}
       <section className="bg-gradient-to-r from-[#441018] to-[#5a1a2a] pt-[180px] pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Dental Health Blog
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Stay informed about the latest in dental care, tips for maintaining oral health, and insights from our dental professionals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center py-16"
            >
              <div className="text-gray-400 mb-4">
                <svg className="mx-auto h-16 w-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">No blog posts yet</h2>
              <p className="text-gray-600 mb-4">Check back soon for informative articles about dental health and care.</p>
              {firebaseStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 max-w-md mx-auto">
                  <p className="text-red-800 text-sm">
                    ⚠️ Firebase connection issue. Posts may not be loading properly.
                  </p>
                </div>
              )}
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  {(post.coverImage || post.imageUrl) && (
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post.coverImage || post.imageUrl || ''}
                        alt={post.title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {formatDate(post.publishDate || post.createdAt)}
                    </div>
                    
                    <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h2>
                    
                    {post.excerpt && (
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                    )}
                    
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-[#441018] hover:text-[#5a1a2a] font-medium transition-colors duration-200"
                    >
                      Read More
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      

      <Footer />
    </div>
  )
} 