'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function EmergencyCare() {
  const articles = [
    {
      id: 'gum-emergencies',
      title: 'Gum Emergencies',
      description: 'Learn about gum emergencies, their causes, symptoms, and immediate treatment options.',
      category: 'Periodontal Emergencies',
      href: '/patient-education/emergency-care/gum-emergencies'
    },
    {
      id: 'orthodontic-emergencies',
      title: 'Orthodontic Emergencies',
      description: 'Common orthodontic emergencies and how to handle them before seeing your orthodontist.',
      category: 'Orthodontic Care',
      href: '/patient-education/emergency-care/orthodontic-emergencies'
    },
    {
      id: 'tooth-pain',
      title: 'Tooth Pain',
      description: 'Understanding tooth pain, its causes, and when to seek immediate dental care.',
      category: 'Pain Management',
      href: '/patient-education/emergency-care/tooth-pain'
    },
    {
      id: 'traumatic-dental-injuries',
      title: 'Traumatic Dental Injuries',
      description: 'How to handle traumatic dental injuries and when to seek emergency dental care.',
      category: 'Dental Trauma',
      href: '/patient-education/emergency-care/traumatic-dental-injuries'
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
            <h1 className="text-[27px] sm:text-4xl lg:text-6xl font-normal text-white font-heading leading-tight mb-4 sm:mb-6">
              Emergency Care
            </h1>
            <p className="text-[16px] sm:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-sans">
              Dental emergencies can happen at any time. Learn about common dental emergencies, 
              how to handle them, and when to seek immediate professional care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 sm:py-10 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 sm:mb-12"
          >
            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6 sm:mb-8 text-center">
              24/7 Emergency Dental Care
            </h2>
            <p className="text-[16px] sm:text-lg text-gray-600 text-center max-w-3xl mx-auto mb-6 sm:mb-8 font-sans">
              Dental emergencies require immediate attention. Our team is here to help you 
              when you need it most. If you're experiencing severe pain, bleeding, or trauma, 
              don't wait - contact us immediately.
            </p>
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
                    <button className="px-6 py-3 bg-white border-2 border-gray-200 rounded-lg text-gray-700 hover:border-red-500 hover:text-red-600 transition-all duration-200 font-semibold text-[15px] sm:text-base">
                      {category.name}
                    </button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {articles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Link href={article.href}>
                  <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-red-300 h-full">
                    <div className="p-6">
                      <div className="mb-4">
                        <span className="inline-block px-3 py-1 bg-red-100 text-red-800 text-[15px] sm:text-sm font-semibold rounded-full">
                          {article.category}
                        </span>
                      </div>
                      <h3 className="text-[22px] sm:text-xl font-semibold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-200 font-heading">
                        {article.title}
                      </h3>
                      <p className="text-[16px] text-gray-600 leading-relaxed font-sans mb-4">
                        {article.description}
                      </p>
                      <div className="flex items-center text-red-600 font-semibold group-hover:text-red-700 transition-colors duration-200">
                        Read More
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
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
              Don't Wait for Dental Emergencies
            </h2>
            <p className="text-[16px] sm:text-lg text-gray-200 mb-8 max-w-2xl mx-auto font-sans">
              Our experienced dental team is here to provide immediate care when you need it most.
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
