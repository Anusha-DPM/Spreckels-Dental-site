'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Layout from './Layout'
import { BlogPost } from '../types/blog'

interface BlogListingClientProps {
    initialPosts: BlogPost[]
}

export default function BlogListingClient({ initialPosts }: BlogListingClientProps) {
    const [posts] = useState<BlogPost[]>(initialPosts)
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('')
    const [selectedDates, setSelectedDates] = useState<Record<string, string>>({})

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const dates: Record<string, string> = {}
            posts.forEach(post => {
                const storedDate = localStorage.getItem(`blogDate_${post.slug}`)
                if (storedDate) {
                    dates[post.slug] = storedDate
                }
            })
            setSelectedDates(dates)
        }
    }, [posts])

    const categories = Array.from(new Set(posts.flatMap(post => post.categories || [])))

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

    return (
        <Layout>
            <div className="min-h-screen bg-gray-50">
                <motion.section
                    className="bg-gradient-to-r from-[#441018] to-[#5a1a2a] text-white pt-[180px] pb-20"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <motion.h1
                            className="text-[27px] sm:text-4xl md:text-6xl font-bold mb-6"
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

                <section className="py-8 bg-white border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row gap-4">
                            <input
                                type="text"
                                placeholder="Search blog posts..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#441018]"
                            />
                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="md:w-64 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#441018]"
                            >
                                <option value="">All Categories</option>
                                {categories.map(category => (
                                    <option key={category} value={category}>{category}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </section>

                <section className="py-12 text-center md:text-left">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        {filteredPosts.length === 0 ? (
                            <div className="text-center py-16">
                                <div className="text-gray-400 text-6xl mb-4">📝</div>
                                <h3 className="text-2xl font-semibold mb-2">No posts found</h3>
                                <p className="text-gray-500">Try adjusting your filters.</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {filteredPosts.map((post, index) => (
                                    <motion.article
                                        key={post.id}
                                        className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.1 * index }}
                                    >
                                        {(post.coverImage || post.imageUrl) && (
                                            <div className="relative h-48 bg-gray-100">
                                                <img src={post.coverImage || post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
                                            </div>
                                        )}
                                        <div className="p-6">
                                            <h2 className="text-xl font-semibold mb-3 line-clamp-2">
                                                <Link href={`/blog/${post.slug}`} className="hover:text-[#441018]">{post.title}</Link>
                                            </h2>
                                            {post.excerpt && <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>}
                                            <div className="flex items-center justify-between text-sm text-gray-500">
                                                <span>{formatDate(post.publishDate)}</span>
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
