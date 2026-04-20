'use client'

import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Layout from './Layout'
import { BlogPost } from '../types/blog'

interface BlogPostClientProps {
    post: BlogPost
    relatedPosts: BlogPost[]
}

export default function BlogPostClient({ post, relatedPosts }: BlogPostClientProps) {
    // Process images in content after render and remove bio paragraph under image
    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Find the article element that contains the image and excerpt
            const article = document.querySelector('article.lg\\:col-span-2')
            if (article) {
                // Find the featured image container
                const imageContainer = article.querySelector('div.mb-8')
                if (imageContainer) {
                    let nextElement = imageContainer.nextElementSibling
                    if (nextElement) {
                        const text = nextElement.textContent || ''
                        if (text.includes('Dr. Rujul G. Parikh DDS has dedicated over 25 years') &&
                            text.includes('Spreckels Park Dental in Manteca') &&
                            !nextElement.classList.contains('prose')) { // Check to ensure we don't remove the content div
                            nextElement.remove()
                        }
                    }
                }
            }

            // Process images in content
            const contentDiv = document.querySelector('.prose.prose-lg')
            if (contentDiv) {
                const images = contentDiv.querySelectorAll('img')
                images.forEach((img) => {
                    img.onerror = () => {
                        img.style.display = 'none'
                    }
                    if (!img.classList.contains('blog-content-image')) {
                        img.classList.add('blog-content-image')
                    }
                })
            }
        }
    }, [post])

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    }

    const extractFirstImageFromContent = (content: string): string | null => {
        if (!content || typeof window === 'undefined') return null
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

    return (
        <Layout>
            <style jsx global>{`
        .blog-content {
          font-family: 'Plus Jakarta Sans', sans-serif !important;
        }
        .blog-content * {
          font-family: 'Plus Jakarta Sans', sans-serif !important;
        }
        @media (max-width: 768px) {
          .blog-content, .blog-content p, .blog-content h1, .blog-content h2, .blog-content h3, .blog-content h4, .blog-content li {
            text-align: center !important;
          }
          .blog-content ul, .blog-content ol {
            display: inline-block !important;
            text-align: left !important;
          }
        }
      `}</style>
            <div className="min-h-screen bg-gray-50">
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
                            <Link href="/blog" className="inline-flex items-center text-gray-200 hover:text-white transition-colors duration-200 mb-6">
                                ← Back to Blog
                            </Link>
                            {post.categories && post.categories.length > 0 && (
                                <div className="flex flex-wrap gap-2 mb-4 justify-center md:justify-start">
                                    {post.categories.map(category => (
                                        <span key={category} className="px-3 py-1 bg-white text-[#441018] text-sm rounded-full font-medium">
                                            {category}
                                        </span>
                                    ))}
                                </div>
                            )}
                            <h1 className="text-[27px] md:text-5xl font-bold mb-6 leading-tight">{post.title}</h1>
                            <div className="flex items-center justify-center md:justify-start text-gray-200 text-lg">
                                <span>{formatDate(post.publishDate)}</span>
                            </div>
                        </motion.div>
                    </div>
                </motion.section>

                <section className="py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                            <motion.article
                                className="lg:col-span-2"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                {/* Featured Image */}
                                {(() => {
                                    let imageSrc = post.coverImage || post.imageUrl || ''
                                    if (!imageSrc && post.content) {
                                        const extracted = extractFirstImageFromContent(post.content)
                                        if (extracted) imageSrc = extracted
                                    }

                                    if (!imageSrc || imageSrc.trim() === '') {
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

                                    return (
                                        <div className="mb-8">
                                            <div className="relative h-96 rounded-lg overflow-hidden bg-gray-100">
                                                <img
                                                    src={imageSrc}
                                                    alt={post.title}
                                                    className="w-full h-full object-cover"
                                                    loading="eager"
                                                />
                                            </div>
                                        </div>
                                    )
                                })()}

                                {post.excerpt && !post.excerpt.includes('Dr. Rujul G. Parikh DDS has dedicated over 25 years') && (
                                    <div className="mb-8 p-6 bg-gray-50 rounded-lg">
                                        <p className="text-xl text-gray-700 italic text-center md:text-left">{post.excerpt}</p>
                                    </div>
                                )}

                                <div className="prose prose-lg max-w-none blog-content" dangerouslySetInnerHTML={{ __html: post.content }} />

                                {post.tags && post.tags.length > 0 && (
                                    <div className="mt-8 pt-8 border-t border-gray-200 text-center md:text-left">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
                                        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                                            {post.tags.map(tag => (
                                                <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">#{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </motion.article>

                            <motion.aside
                                className="lg:col-span-1"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                            >
                                <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-4">About the Author</h3>
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 bg-[#441018] rounded-full flex items-center justify-center text-white font-semibold mr-4">S</div>
                                        <div>
                                            <p className="font-medium text-gray-900">Spreckels Park Dental</p>
                                            <p className="text-sm text-gray-500">Professional Dental Care</p>
                                        </div>
                                    </div>
                                </div>

                                {relatedPosts.length > 0 && (
                                    <div className="bg-white rounded-lg shadow-sm p-6">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Posts</h3>
                                        <div className="space-y-4">
                                            {relatedPosts.map(relatedPost => (
                                                <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`} className="block group">
                                                    <div className="flex items-start space-x-3">
                                                        {(relatedPost.coverImage || relatedPost.imageUrl) && (
                                                            <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
                                                                <img
                                                                    src={relatedPost.coverImage || relatedPost.imageUrl}
                                                                    alt={relatedPost.title}
                                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                                                                />
                                                            </div>
                                                        )}
                                                        <div>
                                                            <h4 className="font-medium text-gray-900 group-hover:text-[#441018] transition-colors duration-200 line-clamp-2">{relatedPost.title}</h4>
                                                            <p className="text-sm text-gray-500">{formatDate(relatedPost.publishDate)}</p>
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

                <motion.section
                    className="bg-white py-16 border-t border-gray-200"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your Smile?</h2>
                        <p className="text-xl text-gray-600 mb-8">Schedule your consultation today and take the first step towards a healthier, more beautiful smile.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/appointment-request" className="px-8 py-3 bg-[#441018] text-white font-semibold rounded-lg hover:bg-[#5a1a2a] transition-colors duration-200">Book Appointment</Link>
                            <Link href="/contact" className="px-8 py-3 border border-[#441018] text-[#441018] font-semibold rounded-lg hover:bg-[#441018] hover:text-white transition-colors duration-200">Contact Us</Link>
                        </div>
                    </div>
                </motion.section>
            </div>
        </Layout>
    )
}
