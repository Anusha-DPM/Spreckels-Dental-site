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
  createdAt?: string
  updatedAt?: string
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
      
      // Try Firebase first
      try {
        const firebasePosts = await getBlogPosts({ published: true })
        
        if (firebasePosts.length > 0) {
          console.log('Firebase posts loaded:', firebasePosts)
          console.log('Post images:', firebasePosts.map((post: BlogPost) => ({
            title: post.title,
            coverImage: post.coverImage,
            imageUrl: post.imageUrl
          })))
          console.log('Detailed post data:', firebasePosts.map((post: BlogPost) => ({
            id: post.id,
            title: post.title,
            coverImage: post.coverImage,
            imageUrl: post.imageUrl,
            published: post.published,
            status: post.status
          })))
          setPosts(firebasePosts)
          setFirebaseStatus('connected')
        } else {
          setFirebaseStatus('offline')
        }
      } catch (firebaseError) {
        setFirebaseStatus('error')
      }
      
      // Fallback to localStorage if no posts from Firebase
      if (posts.length === 0) {
        // Try published posts first
        const publishedPostsData = localStorage.getItem('publishedBlogPosts')
        if (publishedPostsData) {
          const publishedPosts = JSON.parse(publishedPostsData)
          setPosts(publishedPosts)
          console.log('✅ Loaded published posts from localStorage')
        } else {
          // Fallback to all posts and filter
          const savedPosts = localStorage.getItem('blogPosts')
          if (savedPosts) {
            const allPosts = JSON.parse(savedPosts)
            const publishedPosts = allPosts.filter((post: BlogPost) => {
              // Handle both Firebase format (published: boolean) and localStorage format (status: string)
              if (post.published !== undefined) {
                return post.published === true
              } else if (post.status !== undefined) {
                return post.status === 'published'
              }
              return false
            })
            setPosts(publishedPosts)
            
            // Save published posts for future use
            localStorage.setItem('publishedBlogPosts', JSON.stringify(publishedPosts))
          }
        }
      }
    } catch (error) {
      setFirebaseStatus('error')
      
      // Final fallback to localStorage
      const savedPosts = localStorage.getItem('blogPosts')
      if (savedPosts) {
        const allPosts = JSON.parse(savedPosts)
        const publishedPosts = allPosts.filter((post: BlogPost) => {
          if (post.published !== undefined) {
            return post.published === true
          } else if (post.status !== undefined) {
            return post.status === 'published'
          }
          return false
        })
        setPosts(publishedPosts)
      }
    } finally {
      setIsLoading(false)
    }
  }

  const formatDate = (dateString: string | undefined) => {
    if (!dateString) return 'Unknown date'
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  // Helper function to get the best available image URL
  const getPostImageUrl = (post: BlogPost): string | null => {
    // Priority: coverImage > imageUrl > null
    if (post.coverImage && post.coverImage.trim()) {
      return post.coverImage.trim()
    }
    if (post.imageUrl && post.imageUrl.trim()) {
      return post.imageUrl.trim()
    }
    return null
  }

  // Helper function to validate image URL
  const isValidImageUrl = (url: string): boolean => {
    if (!url || !url.trim()) return false
    try {
      const urlObj = new URL(url)
      return urlObj.protocol === 'http:' || urlObj.protocol === 'https:'
    } catch {
      return false
    }
  }

  // Default placeholder image for posts without images
  const getDefaultImageUrl = (post: BlogPost): string => {
    // Use a dental-themed placeholder image
    return `https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&auto=format&q=80`
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#441018] mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading blog posts...</p>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed about dental health tips, latest treatments, and insights from our dental professionals.
          </p>
          
          {/* Firebase Status Indicator */}
          {firebaseStatus !== 'connected' && (
            <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-yellow-800 text-sm">
                {firebaseStatus === 'offline' 
                  ? '📡 Using offline mode - posts may not be up to date'
                  : '⚠️ Connection issues - using cached data'
                }
              </p>
            </div>
          )}
        </motion.div>

        {/* Posts Grid */}
        {posts.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center py-12"
          >
            <div className="text-gray-500">
              <svg className="mx-auto h-12 w-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="text-lg font-medium mb-2">No blog posts yet</h3>
              <p>Check back soon for our latest articles and dental health tips.</p>
            </div>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => {
              const imageUrl = getPostImageUrl(post)
              const hasValidImage = imageUrl && isValidImageUrl(imageUrl)
              const displayImageUrl = hasValidImage ? imageUrl : getDefaultImageUrl(post)
              
              return (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Image Section */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={displayImageUrl}
                      alt={post.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        console.error('Image failed to load for post:', post.title)
                        console.error('Attempted image URL:', displayImageUrl)
                        console.error('Original post image data:', {
                          coverImage: post.coverImage,
                          imageUrl: post.imageUrl
                        })
                        
                        // Hide the failed image and show a placeholder
                        const target = e.target as HTMLImageElement
                        target.style.display = 'none'
                        
                        // Create a placeholder div
                        const placeholder = document.createElement('div')
                        placeholder.className = 'absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center'
                        placeholder.innerHTML = `
                          <div class="text-center text-gray-500">
                            <svg class="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <p class="text-sm font-medium">${post.title}</p>
                            <p class="text-xs text-gray-400">Image not available</p>
                          </div>
                        `
                        target.parentNode?.appendChild(placeholder)
                      }}
                      onLoad={() => {
                        console.log('Image loaded successfully for post:', post.title)
                        console.log('Image URL:', displayImageUrl)
                        if (!hasValidImage) {
                          console.log('Using default image for post:', post.title)
                        }
                      }}
                    />
                    
                    {/* Image source indicator */}
                    {!hasValidImage && (
                      <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
                        Default
                      </div>
                    )}
                  </div>
                  
                  {/* Content */}
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
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </motion.article>
              )
            })}
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  )
} 