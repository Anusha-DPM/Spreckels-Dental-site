'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

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
  published?: boolean
  featured?: boolean
  views?: number
  status?: 'draft' | 'published'
}

export default function BlogPostPage() {
  const params = useParams()
  const [post, setPost] = useState<BlogPost | null>(null)
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const loadPost = async () => {
      try {
        // Try to load from localStorage first
        const savedPosts = localStorage.getItem('blogPosts')
        if (savedPosts) {
          const allPosts = JSON.parse(savedPosts)
          const foundPost = allPosts.find((p: BlogPost) => {
            return p.slug === params.slug && (
              p.status === 'published' || p.published === true
            )
          })
          
          if (foundPost) {
            setPost(foundPost)
            
            // Get related posts (excluding current post)
            const related = allPosts
              .filter((p: BlogPost) => p.id !== foundPost.id && (
                p.status === 'published' || p.published === true
              ))
              .slice(0, 3)
            setRelatedPosts(related)
            setIsLoading(false)
            return
          }
        }
        
        // If not found in localStorage, try Firebase
        try {
          const { getBlogPostBySlug } = await import('@/lib/blogDatabase')
          const firebasePost = await getBlogPostBySlug(params.slug as string)
          
          if (firebasePost && (firebasePost.published || firebasePost.status === 'published')) {
            setPost(firebasePost)
            
            // Get related posts from Firebase
            const { getBlogPosts } = await import('@/lib/blogDatabase')
            const allPosts = await getBlogPosts({ published: true })
            const related = allPosts
              .filter((p: BlogPost) => p.id !== firebasePost.id)
              .slice(0, 3)
            setRelatedPosts(related)
          }
        } catch (firebaseError) {
          console.warn('Firebase load failed:', firebaseError)
        }
      } catch (error) {
        console.error('Error loading post:', error)
      } finally {
        setIsLoading(false)
      }
    }
    
    loadPost()
  }, [params.slug])

  const formatDate = (dateString: string | undefined) => {
    if (!dateString) return 'Unknown date'
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  // Sanitize HTML content to prevent React errors
  const sanitizeHTML = (html: string) => {
    if (!html || typeof html !== 'string') return ''
    
    try {
      // Remove any script tags and potentially dangerous content
      const sanitized = html
        .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
        .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
        .replace(/javascript:/gi, '')
        .replace(/on\w+\s*=/gi, '')
        .replace(/<object\b[^<]*(?:(?!<\/object>)<[^<]*)*<\/object>/gi, '')
        .replace(/<embed\b[^<]*(?:(?!<\/embed>)<[^<]*)*<\/embed>/gi, '')
        .replace(/<form\b[^<]*(?:(?!<\/form>)<[^<]*)*<\/form>/gi, '')
        .replace(/<input\b[^>]*>/gi, '')
        .replace(/<button\b[^<]*(?:(?!<\/button>)<[^<]*)*<\/button>/gi, '')
      
      return sanitized
    } catch (error) {
      console.warn('Error sanitizing HTML:', error)
      return html.replace(/<[^>]*>/g, '') // Strip all HTML tags if sanitization fails
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#441018] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading blog post...</p>
        </div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link
            href="/blog"
            className="bg-[#441018] text-white px-8 py-3 rounded-lg hover:bg-[#5a1a2a] transition-colors duration-200 font-semibold"
          >
            Back to Blog
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#441018] to-[#5a1a2a] pt-[150px] pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex items-center justify-center text-sm text-gray-300 mb-4">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {formatDate(post.publishDate)}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {post.title}
            </h1>
            
            {post.excerpt && (
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                {post.excerpt}
              </p>
            )}
            
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap justify-center gap-2 mt-6">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-white bg-opacity-20 text-white text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Cover Image */}
      {post.coverImage && (
        <section className="py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </section>
      )}

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="prose prose-lg max-w-none"
          >
            {post.content ? (
                             <div 
                 dangerouslySetInnerHTML={{ __html: sanitizeHTML(post.content) }}
                 onError={(e) => {
                   console.error('Error rendering blog content:', e)
                   setHasError(true)
                   // Fallback to plain text if HTML rendering fails
                   const target = e.target as HTMLDivElement
                   if (target && post.content) {
                     target.innerHTML = post.content.replace(/<[^>]*>/g, '')
                   }
                 }}
               />
            ) : (
              <p className="text-gray-500 italic">No content available.</p>
            )}
            
            {hasError && (
              <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-yellow-800 text-sm">
                  ⚠️ There was an issue rendering some content. The post has been displayed with simplified formatting.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Related Articles
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost, index) => (
                  <motion.article
                    key={relatedPost.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    {relatedPost.coverImage && (
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={relatedPost.coverImage}
                          alt={relatedPost.title}
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
                        {formatDate(relatedPost.publishDate)}
                      </div>
                      
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      
                      {relatedPost.excerpt && (
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {relatedPost.excerpt}
                        </p>
                      )}
                      
                      <Link
                        href={`/blog/${relatedPost.slug}`}
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
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-[#441018] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Improve Your Oral Health?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Our dental professionals are here to help you achieve a healthy, beautiful smile. Schedule your appointment today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://spreckels-dental-site.vercel.app/appointment-request"
                className="bg-white text-[#441018] px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold"
              >
                Schedule Appointment
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-[#441018] transition-colors duration-200 font-semibold"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 