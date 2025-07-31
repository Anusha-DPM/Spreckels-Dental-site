'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

export default function OralSurgeryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const articles = [
    {
      title: 'Blood Thinners and Oral Surgery',
      description: 'Understanding how blood thinners affect oral surgery and what precautions need to be taken.',
      category: 'Medications',
      href: '/patient-education/oral-surgery/blood-thinners-and-oral-surgery',
      readTime: '5 min read'
    },
    {
      title: 'Cleft Lip and Palate',
      description: 'Comprehensive information about cleft lip and palate conditions and surgical treatment options.',
      category: 'Congenital',
      href: '/patient-education/oral-surgery/cleft-lip-and-palate',
      readTime: '6 min read'
    },
    {
      title: 'Corrective Jaw Surgery',
      description: 'Understanding orthognathic surgery and how it can improve jaw alignment and function.',
      category: 'Jaw Surgery',
      href: '/patient-education/oral-surgery/corrective-jaw-surgery',
      readTime: '7 min read'
    },
    {
      title: 'Extractions',
      description: 'Information about tooth extractions, including wisdom teeth removal and other extraction procedures.',
      category: 'Procedures',
      href: '/patient-education/oral-surgery/extractions',
      readTime: '5 min read'
    },
    {
      title: 'Facial Trauma and Reconstructive Surgery',
      description: 'Understanding facial trauma treatment and reconstructive surgical procedures.',
      category: 'Trauma',
      href: '/patient-education/oral-surgery/facial-trauma-and-reconstructive-surgery',
      readTime: '6 min read'
    },
    {
      title: 'Oral Cancer Screenings and Surgery',
      description: 'Information about oral cancer detection, screening procedures, and surgical treatment options.',
      category: 'Cancer',
      href: '/patient-education/oral-surgery/oral-cancer-screenings-and-surgery',
      readTime: '7 min read'
    },
    {
      title: 'Oral Diagnosis and Biopsies',
      description: 'Understanding oral diagnosis procedures and when biopsies are necessary for proper treatment.',
      category: 'Diagnosis',
      href: '/patient-education/oral-surgery/oral-diagnosis-and-biopsies',
      readTime: '5 min read'
    },
    {
      title: 'Oral Surgery Procedures',
      description: 'Overview of common oral surgery procedures and what to expect during treatment.',
      category: 'Procedures',
      href: '/patient-education/oral-surgery/oral-surgery-procedures',
      readTime: '6 min read'
    }
  ]

  const categories = ['All', ...Array.from(new Set(articles.map(article => article.category)))]

  const filteredArticles = selectedCategory === 'All' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory)

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 sm:pt-32 sm:pb-20 md:pt-40 md:pb-24" style={{ backgroundColor: '#441018' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-white font-heading leading-tight mb-6">
              Oral Surgery
            </h1>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-sans">
              Comprehensive information about oral surgery procedures, from extractions to complex 
              reconstructive surgeries and everything in between.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-[#441018] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredArticles.map((article, index) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Link href={article.href}>
                  <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 h-full border border-gray-100">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-[#441018] bg-[#441018]/10 px-3 py-1 rounded-full">
                        {article.category}
                      </span>
                      <span className="text-sm text-gray-500 font-sans">
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#441018] transition-colors duration-200 font-heading">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed font-sans">
                      {article.description}
                    </p>
                    <div className="mt-4 flex items-center text-[#441018] font-medium group-hover:translate-x-1 transition-transform duration-200">
                      Read More
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
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
            <h2 className="text-3xl sm:text-4xl font-normal text-white font-heading mb-6">
              Ready to Learn More About Oral Surgery?
            </h2>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto font-sans">
              Schedule a consultation to discuss oral surgery options and determine the best 
              approach for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-[#441018] text-white border-2 border-white rounded-lg hover:bg-[#5a1a2a] transition-colors duration-200 font-semibold">
                Schedule Consultation
              </button>
              <button className="px-8 py-4 bg-white text-[#441018] border-2 border-[#441018] rounded-lg hover:bg-[#441018] hover:text-white transition-colors duration-200 font-semibold">
                Learn More About Oral Surgery
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 