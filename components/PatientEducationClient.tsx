'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface Article {
    id: string
    title: string
    description: string
    category: string
    href?: string
}

interface Category {
    name: string
    href: string
}

interface Props {
    articles: Article[]
    categories: Category[]
}

export default function PatientEducationClient({ articles, categories }: Props) {
    return (
        <>
            {/* Hero Section */}
            <section className="pt-32 pb-16 sm:pt-32 sm:pb-20 md:pt-40 md:pb-24" style={{ backgroundColor: '#441018' }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <h1 className="text-[27px] sm:text-5xl lg:text-6xl font-normal text-white font-heading leading-tight mb-6">
                            Patient Education
                        </h1>
                        <p className="text-[16px] sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-sans">
                            Empowering you with knowledge about dental health, procedures, and oral care.
                            Explore our comprehensive library of educational articles to make informed decisions about your dental care.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Articles Grid */}
            <section className="py-16 sm:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Category Filter */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mb-12"
                    >
                        <h2 className="text-[20px] sm:text-3xl font-normal text-gray-900 font-heading mb-8 text-center">
                            Browse by Category
                        </h2>
                        <div className="flex flex-wrap justify-center gap-4">
                            {categories.map((category, index) => (
                                <motion.div
                                    key={category.name}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <Link href={category.href}>
                                        <button className="px-6 py-3 bg-white border-2 border-gray-200 rounded-lg text-gray-700 hover:border-blue-500 hover:text-blue-600 transition-all duration-200 font-semibold">
                                            {category.name}
                                        </button>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Articles Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {articles.map((article, index) => (
                            <motion.div
                                key={article.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="group"
                            >
                                <Link href={article.href || `/patient-education/${article.id}`}>
                                    <div className="bg-white border border-gray-200 rounded-xl p-6 h-full hover:shadow-lg transition-all duration-300 hover:border-blue-300">
                                        <div className="mb-4">
                                            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full">
                                                {article.category}
                                            </span>
                                        </div>
                                        <h3 className="text-[20px] sm:text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200 font-heading">
                                            {article.title}
                                        </h3>
                                        <p className="text-[16px] text-gray-600 leading-relaxed font-sans">
                                            {article.description}
                                        </p>
                                        <div className="mt-4 flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors duration-200">
                                            Read More
                                            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16" style={{ backgroundColor: '#441018' }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <h2 className="text-[27px] sm:text-4xl font-normal text-white font-heading mb-6">
                            Have Questions About Your Dental Health?
                        </h2>
                        <p className="text-[16px] sm:text-lg text-gray-200 mb-8 max-w-2xl mx-auto font-sans">
                            Our team is here to help you understand your dental care options and answer any questions you may have.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/appointment-request"
                                className="px-8 py-4 bg-[#441018] text-white border-2 border-white rounded-lg hover:bg-[#5a1a2a] transition-colors duration-200 font-semibold cursor-pointer inline-block text-center"
                            >
                                Schedule Consultation
                            </Link>
                            <Link
                                href="/contact"
                                className="px-8 py-4 bg-white text-[#441018] border-2 border-[#441018] rounded-lg hover:bg-[#441018] hover:text-white transition-colors duration-200 font-semibold cursor-pointer inline-block text-center"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    )
}
