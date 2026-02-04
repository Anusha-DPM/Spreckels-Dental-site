'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { getLatestBlogPosts } from '../lib/blogDatabase'

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

interface LatestBlogPostsProps {
  limit?: number
  showViewAll?: boolean
}

export default function LatestBlogPosts({ limit = 3, showViewAll = true }: LatestBlogPostsProps) {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    console.log('🎯 LatestBlogPosts component mounted')
    loadPosts()
  }, [limit])

  const loadPosts = async () => {
    try {
      setLoading(true)
      console.log('🔄 Loading blog posts...')
      
      // Try to get posts from Firebase first
      try {
        console.log('🔥 Attempting Firebase fetch...')
        const fetchedPosts = await getLatestBlogPosts(limit)
        console.log('✅ Firebase posts fetched:', fetchedPosts)
        setPosts(fetchedPosts.map(post => post as BlogPost))
        return
      } catch (firebaseError) {
        console.warn('⚠️ Firebase not available, checking localStorage:', firebaseError)
      }
      
      // Fallback to localStorage if Firebase fails
      try {
        console.log('💾 Attempting localStorage fetch...')
        const localPosts = JSON.parse(localStorage.getItem('tempBlogPosts') || '[]')
        console.log('📦 Local posts found:', localPosts.length)
        const publishedPosts = localPosts
          .filter((post: any) => post.published)
          .sort((a: any, b: any) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
          .slice(0, limit)
        console.log('📝 Published posts:', publishedPosts.length)
        setPosts(publishedPosts.map((post: any) => post as BlogPost))
      } catch (localError) {
        console.error('❌ Error loading from localStorage:', localError)
        setError('Failed to load blog posts from local storage')
      }
    } catch (err) {
      console.error('💥 Critical error in loadPosts:', err)
      setError('Failed to load blog posts')
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })
    } catch (error) {
      console.warn('📅 Date formatting error:', error)
      return 'Invalid Date'
    }
  }

  // Add error boundary for the entire component
  try {
    if (loading) {
      return (
        <section className="py-8 sm:py-10 lg:py-12 xl:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#441018] mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading latest posts...</p>
            </div>
          </div>
        </section>
      )
    }

    if (error) {
      console.error('🚨 Error in LatestBlogPosts:', error)
      return null
    }

    if (posts.length === 0) {
      console.log('📭 No posts to display')
      return null
    }

    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[27px] sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest from Our Blog
            </h2>
            <p className="text-[16px] sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed about dental health, latest treatments, and tips for maintaining your beautiful smile
            </p>
          </motion.div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {posts.map((post, index) => (
              <motion.article
                key={post.id}
                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Image */}
                {(post.coverImage || post.imageUrl) && (
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.coverImage || post.imageUrl!}
                      alt={post.title}
                      fill
                      className="object-cover"
                      onError={(e) => {
                        console.warn('🖼️ Image failed to load:', post.coverImage || post.imageUrl)
                        e.currentTarget.style.display = 'none'
                      }}
                    />
                  </div>
                )}

                {/* Content */}
                <div className="p-6">
                  {/* Categories */}
                  {post.categories && post.categories.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.categories.slice(0, 2).map(category => (
                        <span
                          key={category}
                          className="px-2 py-1 bg-[#441018] text-white text-xs rounded-full"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="hover:text-[#441018] transition-colors duration-200"
                    >
                      {post.title}
                    </Link>
                  </h3>

                  {/* Excerpt */}
                  {post.excerpt && (
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                  )}

                  {/* Meta */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{formatDate(post.publishDate)}</span>
                    {post.author && (
                      <span>By {post.author}</span>
                    )}
                  </div>

                  {/* Read More */}
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-[#441018] font-medium hover:text-[#5a1a2a] transition-colors duration-200"
                  >
                    Read More →
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {/* View All Button */}
          {showViewAll && (
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link
                href="/blog"
                className="inline-flex items-center px-8 py-3 bg-[#441018] text-white font-semibold rounded-lg hover:bg-[#5a1a2a] transition-colors duration-200 text-[15px] sm:text-base"
              >
                View All Posts
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          )}
        </div>
      </section>
    )
  } catch (err) {
    console.error('💥 Critical error in LatestBlogPosts component:', err)
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-[27px] sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Error Loading Posts
            </h2>
            <p className="text-[16px] sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Failed to load the latest blog posts. Please try again later.
            </p>
          </div>
        </div>
      </section>
    )
  }
}
