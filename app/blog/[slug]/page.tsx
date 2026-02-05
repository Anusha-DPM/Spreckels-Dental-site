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

function RedirectToHome({ message }: { message: string }) {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/')
    }, 2000)
    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className="text-center">
      <div className="text-red-600 text-6xl mb-4">❌</div>
      <h3 className="text-2xl font-semibold text-gray-900 mb-2">Post Not Found</h3>
      <p className="text-gray-500">{message}</p>
      <p className="text-gray-500 mt-2">Redirecting to home page...</p>
      <div className="mt-6">
        <Link
          href="/"
          className="bg-[#441018] text-white px-6 py-3 rounded-lg hover:bg-[#5a1a2a] transition-colors duration-200"
        >
          Go to Homepage now
        </Link>
      </div>
    </div>
  )
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

  // Process images in content after render and remove bio paragraph under image
  useEffect(() => {
    if (post && typeof window !== 'undefined') {
      // Find the article element that contains the image and excerpt
      const article = document.querySelector('article.lg\\:col-span-2')
      if (article) {
        // Find the featured image container (the div with mb-8 class that contains the image)
        const imageContainer = article.querySelector('div.mb-8')
        if (imageContainer) {
          // Find the next sibling element after the image container
          let nextElement = imageContainer.nextElementSibling

          // Check if the next element is the excerpt div with the bio text
          if (nextElement) {
            const text = nextElement.textContent || ''
            if (text.includes('Dr. Rujul G. Parikh DDS has dedicated over 25 years') &&
              text.includes('Spreckels Park Dental in Manteca')) {
              nextElement.remove()
            }
          }
        }
      }

      // Also process images in content
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
            coverImageLength: blogPost.coverImage?.length || 0,
            imageUrlType: typeof blogPost.imageUrl,
            imageUrlLength: blogPost.imageUrl?.length || 0,
            allFields: Object.keys(blogPost)
          })

          // Validate coverImage URL
          if (blogPost.coverImage) {
            const isValidUrl = blogPost.coverImage.startsWith('http') || blogPost.coverImage.startsWith('https')
            if (!isValidUrl) {
              console.warn(`⚠️ Invalid coverImage URL for "${blogPost.title}":`, blogPost.coverImage)
            } else {
              console.log(`✅ Valid coverImage URL for "${blogPost.title}":`, blogPost.coverImage.substring(0, 100))
              console.log(`🔗 Full coverImage URL:`, blogPost.coverImage)
            }
          } else {
            console.warn(`⚠️ No coverImage for "${blogPost.title}"`)
          }

          // Validate imageUrl
          if (blogPost.imageUrl) {
            const isValidUrl = blogPost.imageUrl.startsWith('http') || blogPost.imageUrl.startsWith('https')
            if (!isValidUrl) {
              console.warn(`⚠️ Invalid imageUrl for "${blogPost.title}":`, blogPost.imageUrl)
            } else {
              console.log(`✅ Valid imageUrl for "${blogPost.title}":`, blogPost.imageUrl.substring(0, 100))
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

          // Ensure we have at least one image source
          if (!blogPost.coverImage && !blogPost.imageUrl) {
            console.error(`❌ No image source found for post "${blogPost.title}"`)
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
          <RedirectToHome message={error || 'The blog post you are looking for does not exist.'} />
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <style jsx global>{`
        .blog-content {
          font-family: 'Plus Jakarta Sans', sans-serif !important;
        }
        
        .blog-content * {
          font-family: 'Plus Jakarta Sans', sans-serif !important;
        }
        
        .blog-content p,
        .blog-content span,
        .blog-content div,
        .blog-content li,
        .blog-content ul,
        .blog-content ol,
        .blog-content h1,
        .blog-content h2,
        .blog-content h3,
        .blog-content h4,
        .blog-content h5,
        .blog-content h6 {
          font-family: 'Plus Jakarta Sans', sans-serif !important;
        }
        
        .blog-content h1 {
          font-weight: 700 !important;
        }
        
        .blog-content h2 {
          font-weight: 700 !important;
        }
        
        .blog-content h3 {
          font-weight: 600 !important;
        }
        
        .blog-content h4 {
          font-weight: 600 !important;
        }
        
        .blog-content h5,
        .blog-content h6 {
          font-weight: 500 !important;
        }
        
        .blog-content p {
          font-weight: 400 !important;
        }
        
        /* Mobile center alignment */
        @media (max-width: 768px) {
          .blog-content,
          .blog-content p,
          .blog-content h1,
          .blog-content h2,
          .blog-content h3,
          .blog-content h4,
          .blog-content h5,
          .blog-content h6,
          .blog-content li,
          .blog-content div {
            text-align: center !important;
          }
          
          .blog-content ul,
          .blog-content ol {
            display: inline-block !important;
            text-align: left !important;
          }
        }
      `}</style>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <motion.section
          className="bg-gradient-to-r from-[#441018] to-[#5a1a2a] text-white pt-[180px] pb-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center md:text-left"
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
                <div className="flex flex-wrap gap-2 mb-4 justify-center md:justify-start">
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

              <h1 className="text-[27px] md:text-5xl font-bold mb-6 leading-tight">
                {post.title}
              </h1>

              <div className="flex items-center justify-center md:justify-start text-gray-200 text-lg">
                <span>{formatDate(post.publishDate)}</span>
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
                {(() => {
                  // Try coverImage first, then imageUrl, then extract from content
                  let imageSrc = post.coverImage || post.imageUrl || ''

                  // If still no image, try extracting from content
                  if (!imageSrc && post.content) {
                    const extracted = extractFirstImageFromContent(post.content)
                    if (extracted) {
                      imageSrc = extracted
                      console.log(`✅ Using extracted image from content for "${post.title}"`)
                    }
                  }

                  console.log(`🖼️ Rendering featured image for post "${post.title}":`, {
                    coverImage: post.coverImage,
                    imageUrl: post.imageUrl,
                    usingSrc: imageSrc,
                    hasSrc: !!imageSrc,
                    srcLength: imageSrc?.length || 0,
                    srcType: typeof imageSrc,
                    postKeys: Object.keys(post)
                  })

                  // Use the same simple approach as dashboard - just use coverImage directly
                  if (!imageSrc || imageSrc.trim() === '') {
                    console.warn(`⚠️ No image source for post "${post.title}"`)
                    console.warn(`⚠️ Post data:`, { coverImage: post.coverImage, imageUrl: post.imageUrl, hasContent: !!post.content })
                    return (
                      <div className="mb-8">
                        <div className="relative h-96 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                          <div className="text-center text-gray-400">
                            <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                            </svg>
                            <p className="text-sm">No image available</p>
                          </div>
                        </div>
                      </div>
                    )
                  }

                  // Convert relative API URLs to absolute URLs (for Vercel compatibility)
                  let finalImageSrc = imageSrc.trim()
                  if (finalImageSrc.startsWith('/api/')) {
                    finalImageSrc = typeof window !== 'undefined'
                      ? `${window.location.origin}${finalImageSrc}`
                      : finalImageSrc
                  }

                  // Validate URL format
                  if (!finalImageSrc.startsWith('http://') && !finalImageSrc.startsWith('https://') && !finalImageSrc.startsWith('data:')) {
                    console.error(`❌ Invalid image URL format for "${post.title}":`, finalImageSrc)
                    console.error(`❌ Original imageSrc:`, imageSrc)
                    return (
                      <div className="mb-8">
                        <div className="relative h-96 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                          <div className="text-center text-gray-400">
                            <p className="text-sm">Invalid image URL</p>
                            <p className="text-xs mt-1 text-gray-500">Check console for details</p>
                          </div>
                        </div>
                      </div>
                    )
                  }

                  // Use simple img tag like dashboard does - works for all URL types
                  return (
                    <div className="mb-8">
                      <div className="relative h-96 rounded-lg overflow-hidden bg-gray-100">
                        <img
                          src={finalImageSrc}
                          alt={post.title}
                          className="w-full h-full object-cover"
                          loading="eager"
                          style={{ display: 'block' }}
                          onError={(e) => {
                            console.error(`❌ Featured image failed to load for "${post.title}":`, {
                              imageSrc: finalImageSrc,
                              coverImage: post.coverImage,
                              imageUrl: post.imageUrl,
                              imageSrcType: typeof finalImageSrc,
                              imageSrcLength: finalImageSrc?.length || 0,
                              error: 'Image load failed - check URL accessibility and CORS settings',
                              fullUrl: finalImageSrc
                            })

                            // Try to test the URL
                            fetch(finalImageSrc, { method: 'HEAD', mode: 'no-cors' })
                              .then(() => console.log('✅ URL is accessible (no-cors)'))
                              .catch((err) => console.error('❌ URL test failed:', err))

                            const target = e.target as HTMLImageElement
                            // Don't hide immediately - show error message
                            const parent = target.parentElement
                            if (parent) {
                              parent.innerHTML = `
                              <div class="flex flex-col items-center justify-center h-full text-gray-400 p-4">
                                <svg class="w-12 h-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                </svg>
                                <p class="text-sm">Image unavailable</p>
                                <p class="text-xs mt-1 text-gray-500">Check console for details</p>
                              </div>
                            `
                            }
                          }}
                          onLoad={() => {
                            console.log(`✅ Featured image loaded successfully for "${post.title}":`, finalImageSrc.substring(0, 100))
                            console.log(`✅ Full image URL:`, finalImageSrc)
                          }}
                        />
                      </div>
                    </div>
                  )
                })()}

                {/* Excerpt */}
                {post.excerpt && !post.excerpt.includes('Dr. Rujul G. Parikh DDS has dedicated over 25 years') && (
                  <div className="mb-8 p-6 bg-gray-50 rounded-lg">
                    <p className="text-xl text-gray-700 italic text-center md:text-left" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      {post.excerpt}
                    </p>
                  </div>
                )}

                {/* Content */}
                <div
                  className="prose prose-lg max-w-none blog-content"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="mt-8 pt-8 border-t border-gray-200 text-center md:text-left">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
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
                            {(() => {
                              // Use simple approach like dashboard
                              const imageSrc = relatedPost.coverImage || relatedPost.imageUrl

                              if (!imageSrc || imageSrc.trim() === '') {
                                return null
                              }

                              // Convert relative API URLs to absolute URLs
                              let finalImageSrc = imageSrc.trim()
                              if (finalImageSrc.startsWith('/api/')) {
                                finalImageSrc = typeof window !== 'undefined'
                                  ? `${window.location.origin}${finalImageSrc}`
                                  : finalImageSrc
                              }

                              // Validate URL format
                              if (!finalImageSrc.startsWith('http://') && !finalImageSrc.startsWith('https://') && !finalImageSrc.startsWith('data:')) {
                                return null
                              }

                              return (
                                <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
                                  <img
                                    src={finalImageSrc}
                                    alt={relatedPost.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                                    loading="lazy"
                                    onError={(e) => {
                                      const target = e.target as HTMLImageElement
                                      target.style.display = 'none'
                                    }}
                                  />
                                </div>
                              )
                            })()}
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
