'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../../components/Layout'
import { getPublishedBlogPosts } from '../../lib/blogDatabase'

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

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')

  useEffect(() => {
    loadPosts()
  }, [])

  const loadPosts = async () => {
    try {
      setLoading(true)
      
      // Try to get posts from Firebase first
      try {
        const fetchedPosts = await getPublishedBlogPosts()
        setPosts(fetchedPosts.map(post => post as BlogPost))
        return
      } catch (firebaseError) {
        console.warn('Firebase not available, checking localStorage:', firebaseError)
      }
      
             // Fallback to localStorage if Firebase fails
       try {
         const localPosts = JSON.parse(localStorage.getItem('tempBlogPosts') || '[]')
         console.log('Found local posts:', localPosts)
         
         const publishedPosts = localPosts.filter((post: any) => post.published)
         console.log('Published posts:', publishedPosts)
         
         setPosts(publishedPosts.map((post: any) => post as BlogPost))
         
         if (publishedPosts.length === 0) {
           setError('No published blog posts found. Please create and publish some posts in the admin dashboard.')
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

  // Get unique categories
  const categories = Array.from(new Set(posts.flatMap(post => post.categories || [])))

  // Filter posts based on search and category
  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesCategory = !selectedCategory || post.categories?.includes(selectedCategory)
    
    return matchesSearch && matchesCategory
  })

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
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
    <Layout>
      <div className="min-h-screen bg-gray-50">
             {/* Hero Section */}
      <motion.section 
        className="bg-gradient-to-r from-[#441018] to-[#5a1a2a] text-white pt-[140px] pb-12 sm:pb-16 lg:pb-20"
         initial={{ opacity: 0, y: -20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.6 }}
       >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-[27px] sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our Blog
          </motion.h1>
          <motion.p 
            className="text-[16px] sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Stay informed about dental health, latest treatments, and tips for maintaining your beautiful smile
          </motion.p>
        </div>
      </motion.section>

      {/* Search and Filter Section */}
      <motion.section 
        className="py-8 bg-white border-b border-gray-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search blog posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#441018] focus:border-transparent"
              />
            </div>
            
            {/* Category Filter */}
            <div className="md:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#441018] focus:border-transparent"
              >
                <option value="">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Blog Posts */}
      <section className="py-8 sm:py-10 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                     {error && (
             <motion.div 
               className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-8"
               initial={{ opacity: 0, y: -10 }}
               animate={{ opacity: 1, y: 0 }}
             >
               {error}
               <div className="mt-4 flex gap-4">
                 <button
                   onClick={() => {
                     const localPosts = JSON.parse(localStorage.getItem('tempBlogPosts') || '[]')
                     console.log('All localStorage posts:', localPosts)
                     alert(`Found ${localPosts.length} posts in localStorage. Check console for details.`)
                   }}
                   className="text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                 >
                   Debug: Check localStorage
                 </button>
                 <button
                   onClick={() => {
                     // Create a test post
                     const testPost = {
                       id: Date.now().toString(),
                       title: 'Test Blog Post',
                       content: '<p>This is a test blog post content.</p>',
                       excerpt: 'This is a test excerpt for the blog post.',
                       coverImage: '',
                       imageUrl: '',
                       tags: ['test', 'demo'],
                       categories: ['General'],
                       metaTitle: 'Test Blog Post',
                       metaDescription: 'A test blog post for demonstration',
                       slug: 'test-blog-post',
                       published: true,
                       publishDate: new Date().toISOString(),
                       createdAt: new Date().toISOString(),
                       updatedAt: new Date().toISOString(),
                       author: 'Admin'
                     }
                     const existingPosts = JSON.parse(localStorage.getItem('tempBlogPosts') || '[]')
                     existingPosts.unshift(testPost)
                     localStorage.setItem('tempBlogPosts', JSON.stringify(existingPosts))
                     alert('Test post created! Refresh the page to see it.')
                     window.location.reload()
                   }}
                   className="text-sm bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                 >
                   Create Test Post
                 </button>
               </div>
             </motion.div>
           )}

          {filteredPosts.length === 0 ? (
                <motion.div 
              className="text-center py-12 sm:py-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="text-gray-400 text-6xl mb-4">📝</div>
                  <h3 className="text-[22px] sm:text-2xl font-semibold text-gray-900 mb-2">
                {posts.length === 0 ? 'No blog posts yet' : 'No posts found'}
              </h3>
                  <p className="text-[16px] text-gray-500">
                {posts.length === 0 
                  ? 'Check back soon for our latest articles and dental health tips.'
                  : 'Try adjusting your search terms or category filter.'
                }
              </p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
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
                    <h2 className="text-[22px] sm:text-lg lg:text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="hover:text-[#441018] transition-colors duration-200"
                      >
                        {post.title}
                      </Link>
                    </h2>

                    {/* Excerpt */}
                    {post.excerpt && (
                      <p className="text-[16px] text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                    )}

                    {/* Meta */}
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{formatDate(post.publishDate)}</span>
                      {post.author && (
                        <span>By {post.author}</span>
                      )}
                    </div>

                    {/* Tags */}
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-3">
                        {post.tags.slice(0, 3).map(tag => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Read More */}
                    <div className="mt-4">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-[#441018] font-medium hover:text-[#5a1a2a] transition-colors duration-200"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

       </div>
     </Layout>
   )
 }
