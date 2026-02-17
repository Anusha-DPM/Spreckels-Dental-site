'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function Technology() {
  const articles = [
    {
      id: 'air-abrasion',
      title: 'Air Abrasion',
      description: 'Learn about air abrasion technology, a minimally invasive alternative to traditional drilling for cavity preparation.',
      category: 'Minimally Invasive Technology'
    },
    {
      id: 'anesthesia-wand',
      title: 'Anesthesia Wand',
      description: 'Discover how the anesthesia wand provides more comfortable and precise local anesthesia delivery.',
      category: 'Comfort Technology'
    },
    {
      id: 'cone-beam-ct-imaging',
      title: 'Cone Beam CT Imaging',
      description: 'Understanding cone beam CT technology for advanced 3D imaging and precise treatment planning.',
      category: 'Advanced Imaging'
    },
    {
      id: 'digital-dental-impressions',
      title: 'Digital Dental Impressions',
      description: 'Learn about digital impression technology that eliminates the need for traditional messy impression materials.',
      category: 'Digital Technology'
    },
    {
      id: 'digital-x-rays',
      title: 'Digital X-Rays',
      description: 'Discover the benefits of digital X-ray technology for safer, faster, and more detailed imaging.',
      category: 'Digital Imaging'
    },
    {
      id: 'intraoral-camera',
      title: 'Intraoral Camera',
      description: 'Understanding how intraoral cameras provide detailed views of your mouth for better diagnosis and treatment.',
      category: 'Diagnostic Technology'
    }
  ]

  const categories = [
    { name: 'Educational Videos', href: '/patient-education/educational-videos' },
    { name: 'Cosmetic & General Dentistry', href: '/patient-education/cosmetic-general-dentistry' },
    { name: 'Emergency Care', href: '/patient-education/emergency-care' },
    { name: 'Endodontics', href: '/patient-education/endodontics' },
    { name: 'Implant Dentistry', href: '/patient-education/implant-dentistry' },
    { name: 'Oral Health', href: '/patient-education/oral-health' },
    { name: 'Oral Hygiene', href: '/patient-education/oral-hygiene' },
    { name: 'Oral Surgery', href: '/patient-education/oral-surgery' },
    { name: 'Orthodontics', href: '/patient-education/orthodontics' },
    { name: 'Pediatric Dentistry', href: '/patient-education/pediatric-dentistry' },
    { name: 'Periodontal Therapy', href: '/patient-education/periodontal-therapy' },
    { name: 'Technology', href: '/patient-education/technology' }
  ]

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-[140px] pb-12 sm:pb-16 lg:pb-20" style={{ backgroundColor: '#441018' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="mb-4">
              <Link href="/patient-education" className="text-gray-300 hover:text-white font-semibold">
                ← Back to Patient Education
              </Link>
            </div>
            <h1 className="text-[27px] sm:text-4xl lg:text-6xl font-normal text-white font-heading leading-tight mb-4 sm:mb-6">
              Technology
            </h1>
            <p className="text-[16px] sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-sans">
              Advanced dental technology that enhances patient comfort, improves treatment precision, and provides better diagnostic capabilities. Learn about the cutting-edge tools and techniques used in modern dentistry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-8 sm:py-10 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6 sm:mb-8 text-center">
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
                    <button className="px-6 py-3 bg-white border-2 border-gray-200 rounded-lg text-gray-700 hover:border-blue-500 hover:text-blue-600 transition-all duration-200 font-semibold text-[15px] sm:text-base">
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
                <Link href={`/patient-education/technology/${article.id}`}>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 h-full hover:shadow-lg transition-all duration-300 hover:border-blue-300">
                    <div className="mb-4">
                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-[15px] sm:text-sm font-semibold rounded-full">
                        {article.category}
                      </span>
                    </div>
                      <h3 className="text-[22px] sm:text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200 font-heading">
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
      <section className="py-8 sm:py-10 lg:py-12" style={{ backgroundColor: '#441018' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-[27px] sm:text-3xl font-normal text-white font-heading mb-6">
              Experience Advanced Dental Technology
            </h2>
            <p className="text-[16px] sm:text-lg text-gray-200 mb-8 max-w-2xl mx-auto font-sans">
              Our practice uses the latest dental technology to provide you with the most comfortable, precise, and effective treatment possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/appointment-request"
                className="px-8 py-4 bg-[#441018] text-white border-2 border-white rounded-lg hover:bg-[#5a1a2a] transition-colors duration-200 font-semibold cursor-pointer inline-block text-center text-[15px] sm:text-base"
              >
                Schedule Consultation
              </a>
              <a 
                href="/contact"
                className="px-8 py-4 bg-white text-[#441018] border-2 border-[#441018] rounded-lg hover:bg-[#441018] hover:text-white transition-colors duration-200 font-semibold cursor-pointer inline-block text-center text-[15px] sm:text-base"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 
