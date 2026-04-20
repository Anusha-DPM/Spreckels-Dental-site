'use client'

import React, { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../../../components/Layout'
import { getBlogPostBySlug, getPublishedBlogPosts } from '../../../lib/blogDatabase'

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

export default function BlogPostPage() {
  const [post, setPost] = useState<BlogPost | null>(null)
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const params = useParams()
  const router = useRouter()
  const slug = params.slug as string

  useEffect(() => {
    loadPost()
  }, [slug])

  // Process images in content after render
  useEffect(() => {
    if (post && typeof window !== 'undefined') {
      const contentDiv = document.querySelector('.prose.prose-lg')
      if (contentDiv) {
        const images = contentDiv.querySelectorAll('img')
        images.forEach((img) => {
          // Add error handling
          img.onerror = () => {
            img.style.display = 'none'
          }
          // Ensure proper styling
          if (!img.classList.contains('blog-content-image')) {
            img.classList.add('blog-content-image')
          }
          // Ensure images load properly
          if (img.src && !img.complete) {
            img.loading = 'lazy'
          }
        })
      }
    }
  }, [post])

  const extractFirstImageFromContent = (content: string): string | null => {
    if (!content) return null
    try {
      const parser = new DOMParser()
      const doc = parser.parseFromString(content, 'text/html')
      const firstImage = doc.querySelector('img')
      if (firstImage) {
        const imageSrc = firstImage.getAttribute('src')
        if (imageSrc && (imageSrc.startsWith('http') || imageSrc.startsWith('https'))) {
          return imageSrc
        }
      }
    } catch (error) {
      console.warn('Error extracting image from content:', error)
    }
    return null
  }

  const loadPost = async () => {
    try {
      setLoading(true)
      
      // Try to get post from Firebase first
      try {
        const fetchedPost = await getBlogPostBySlug(slug)
        
        if (fetchedPost) {
          const blogPost = fetchedPost as BlogPost
          console.log(`📄 Loaded post "${blogPost.title}":`, {
            id: blogPost.id,
            coverImage: blogPost.coverImage,
            imageUrl: blogPost.imageUrl,
            hasContent: !!blogPost.content,
            coverImageType: typeof blogPost.coverImage,
            coverImageLength: blogPost.coverImage?.length || 0
          })
          
          // Validate coverImage URL
          if (blogPost.coverImage) {
            const isValidUrl = blogPost.coverImage.startsWith('http') || blogPost.coverImage.startsWith('https')
            if (!isValidUrl) {
              console.warn(`⚠️ Invalid coverImage URL for "${blogPost.title}":`, blogPost.coverImage)
            } else {
              console.log(`✅ Valid coverImage URL for "${blogPost.title}":`, blogPost.coverImage.substring(0, 100))
            }
          }
          
          // Extract cover image from content if missing
          if (!blogPost.coverImage && !blogPost.imageUrl && blogPost.content) {
            const extractedImage = extractFirstImageFromContent(blogPost.content)
            if (extractedImage) {
              blogPost.coverImage = extractedImage
              console.log('✅ Extracted cover image for post:', blogPost.title)
            }
          }
          setPost(blogPost)
          
          // Load related posts
          const allPosts = await getPublishedBlogPosts()
          const related = allPosts
            .filter(p => p.id !== fetchedPost.id)
            .slice(0, 3)
            .map(post => post as BlogPost)
          setRelatedPosts(related)
          return
        }
      } catch (firebaseError) {
        console.warn('Firebase not available, checking localStorage:', firebaseError)
      }
      
      // Fallback to localStorage if Firebase fails
      try {
        const localPosts = JSON.parse(localStorage.getItem('tempBlogPosts') || '[]')
        const foundPost = localPosts.find((post: any) => post.slug === slug && post.published)
        
        if (foundPost) {
          const blogPost = foundPost as BlogPost
          // Extract cover image from content if missing
          if (!blogPost.coverImage && !blogPost.imageUrl && blogPost.content) {
            const extractedImage = extractFirstImageFromContent(blogPost.content)
            if (extractedImage) {
              blogPost.coverImage = extractedImage
              console.log('✅ Extracted cover image for post:', blogPost.title)
            }
          }
          setPost(blogPost)
          
          // Load related posts from localStorage
          const publishedPosts = localPosts.filter((post: any) => post.published && post.id !== foundPost.id)
          const related = publishedPosts.slice(0, 3).map((post: any) => post as BlogPost)
          setRelatedPosts(related)
        } else {
          setError('Post not found')
        }
      } catch (localError) {
        console.error('Error loading from localStorage:', localError)
        setError('Failed to load blog post from local storage')
      }
    } catch (err) {
      setError('Failed to load blog post')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#441018] mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading blog post...</p>
          </div>
        </div>
      </Layout>
    )
  }

  if (error || !post) {
    return (
      <Layout>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="text-red-600 text-6xl mb-4">❌</div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Post Not Found</h3>
            <p className="text-gray-500 mb-6">{error || 'The blog post you are looking for does not exist.'}</p>
            <Link
              href="/blog"
              className="bg-[#441018] text-white px-6 py-3 rounded-lg hover:bg-[#5a1a2a] transition-colors duration-200"
            >
            Back to Blog
          </Link>
        </div>
      </div>
    </Layout>
    )
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.section 
        className="bg-gradient-to-r from-[#441018] to-[#5a1a2a] text-white pt-[140px] pb-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link 
              href="/blog"
              className="inline-flex items-center text-gray-200 hover:text-white transition-colors duration-200 mb-6"
            >
              ← Back to Blog
            </Link>
            
            {/* Categories */}
            {post.categories && post.categories.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {post.categories.map(category => (
                  <span
                    key={category}
                    className="px-3 py-1 bg-white text-[#441018] text-sm rounded-full font-medium"
                  >
                    {category}
                  </span>
                ))}
              </div>
            )}

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center text-gray-200 text-lg">
              <span>{formatDate(post.publishDate)}</span>
              {post.author && (
                <>
                  <span className="mx-3">•</span>
                  <span>By {post.author}</span>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Article Content */}
            <motion.article 
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {/* Featured Image */}
              {(post.coverImage || post.imageUrl) && (
                <div className="mb-8">
                  <div className="relative h-96 rounded-lg overflow-hidden bg-gray-100">
                    {(() => {
                      const imageSrc = post.coverImage || post.imageUrl!
                      console.log(`🖼️ Rendering featured image for post "${post.title}":`, {
                        coverImage: post.coverImage,
                        imageUrl: post.imageUrl,
                        usingSrc: imageSrc,
                        hasSrc: !!imageSrc,
                        srcLength: imageSrc?.length || 0
                      })
                      
                      // Check if it's a Firebase Storage URL or other allowed domain
                      const isFirebaseUrl = imageSrc.includes('firebasestorage.googleapis.com') || 
                                           imageSrc.includes('storage.googleapis.com')
                      const allowedDomains = [
                        'firebasestorage.googleapis.com',
                        'storage.googleapis.com',
                        'images.unsplash.com',
                        'secure.officite.com',
                        'images.weserv.nl'
                      ]
                      const isAllowedDomain = allowedDomains.some(domain => imageSrc.includes(domain))
                      
                      // Use Next.js Image for Firebase and allowed domains, regular img for others
                      if (isFirebaseUrl || isAllowedDomain || imageSrc.startsWith('data:')) {
                        return (
                          <Image
                            src={imageSrc}
                            alt={post.title}
                            fill
                            className="object-cover"
                            unoptimized={imageSrc.startsWith('data:')}
                            onLoad={() => {
                              console.log(`✅ Featured image loaded successfully for "${post.title}":`, imageSrc)
                            }}
                            onError={(e) => {
                              console.error(`❌ Featured image failed to load for "${post.title}":`, {
                                imageSrc: imageSrc,
                                coverImage: post.coverImage,
                                imageUrl: post.imageUrl,
                                error: e
                              })
                              const target = e.target as HTMLImageElement
                              target.style.display = 'none'
                              const parent = target.parentElement
                              if (parent) {
                                parent.innerHTML = '<div class="flex items-center justify-center h-full text-gray-400"><p>Image failed to load. Please check the URL.</p></div>'
                              }
                            }}
                          />
                        )
                      } else {
                        // Use regular img tag for external URLs
                        return (
                          <img
                            src={imageSrc}
                            alt={post.title}
                            className="w-full h-full object-cover"
                            onLoad={() => {
                              console.log(`✅ Featured image loaded successfully for "${post.title}":`, imageSrc)
                            }}
                            onError={(e) => {
                              console.error(`❌ Featured image failed to load for "${post.title}":`, {
                                imageSrc: imageSrc,
                                coverImage: post.coverImage,
                                imageUrl: post.imageUrl,
                                error: e
                              })
                              const target = e.target as HTMLImageElement
                              target.style.display = 'none'
                              const parent = target.parentElement
                              if (parent) {
                                parent.innerHTML = '<div class="flex items-center justify-center h-full text-gray-400"><p>Image failed to load. Please check the URL.</p></div>'
                              }
                            }}
                          />
                        )
                      }
                    })()}
                  </div>
                </div>
              )}

              {/* Excerpt */}
              {post.excerpt && (
                <div className="mb-8 p-6 bg-gray-50 rounded-lg">
                  <p className="text-xl text-gray-700 italic">
                    {post.excerpt}
                  </p>
                </div>
              )}

              {/* Content */}
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
                style={{
                  wordBreak: 'break-word'
                }}
              />

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors duration-200"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.article>

            {/* Sidebar */}
            <motion.aside 
              className="lg:col-span-1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {/* Author Info */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">About the Author</h3>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#441018] rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    S
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Spreckels Park Dental</p>
                    <p className="text-sm text-gray-500">Professional Dental Care</p>
                  </div>
                </div>
              </div>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Posts</h3>
                  <div className="space-y-4">
                    {relatedPosts.map(relatedPost => (
                      <Link
                        key={relatedPost.id}
                        href={`/blog/${relatedPost.slug}`}
                        className="block group"
                      >
                        <div className="flex items-start space-x-3">
                          {(relatedPost.coverImage || relatedPost.imageUrl) && (
                            <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
                              {(() => {
                                const imageSrc = relatedPost.coverImage || relatedPost.imageUrl!
                                const allowedDomains = [
                                  'firebasestorage.googleapis.com',
                                  'storage.googleapis.com',
                                  'images.unsplash.com',
                                  'secure.officite.com',
                                  'images.weserv.nl'
                                ]
                                const isAllowedDomain = allowedDomains.some(domain => imageSrc.includes(domain))
                                
                                if (isAllowedDomain || imageSrc.startsWith('data:')) {
                                  return (
                                    <Image
                                      src={imageSrc}
                                      alt={relatedPost.title}
                                      fill
                                      className="object-cover group-hover:scale-105 transition-transform duration-200"
                                      unoptimized={imageSrc.startsWith('data:')}
                                    />
                                  )
                                } else {
                                  return (
                                    <img
                                      src={imageSrc}
                                      alt={relatedPost.title}
                                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                                    />
                                  )
                                }
                              })()}
                            </div>
                          )}
                          <div>
                            <h4 className="font-medium text-gray-900 group-hover:text-[#441018] transition-colors duration-200 line-clamp-2">
                              {relatedPost.title}
                            </h4>
                            <p className="text-sm text-gray-500">
                              {formatDate(relatedPost.publishDate)}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}


            </motion.aside>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <motion.section 
        className="bg-white py-16 border-t border-gray-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Smile?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Schedule your consultation today and take the first step towards a healthier, more beautiful smile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/appointment-request"
              className="px-8 py-3 bg-[#441018] text-white font-semibold rounded-lg hover:bg-[#5a1a2a] transition-colors duration-200"
            >
              Book Appointment
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border border-[#441018] text-[#441018] font-semibold rounded-lg hover:bg-[#441018] hover:text-white transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </motion.section>
      </div>
    </Layout>
  )
}
