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

  const categories = Array.from(new Set(articles.map(article => article.category)))

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
              Emergency Care
            </h1>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-sans">
              Dental emergencies can happen at any time. Learn about common dental emergencies, 
              how to handle them, and when to seek immediate professional care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-normal text-gray-900 font-heading mb-8 text-center">
              24/7 Emergency Dental Care
            </h2>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-8 font-sans">
              Dental emergencies require immediate attention. Our team is here to help you 
              when you need it most. If you're experiencing severe pain, bleeding, or trauma, 
              don't wait - contact us immediately.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-3 bg-white border-2 border-gray-200 rounded-lg text-gray-700 hover:border-red-500 hover:text-red-600 transition-all duration-200 font-semibold"
                >
                  {category}
                </motion.button>
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
                        <span className="inline-block px-3 py-1 bg-red-100 text-red-800 text-sm font-semibold rounded-full">
                          {article.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-200 font-heading">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed font-sans mb-4">
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

      {/* Emergency Contact Section */}
      <section className="py-16 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-normal text-gray-900 font-heading mb-6">
              Need Immediate Help?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto font-sans">
              If you're experiencing a dental emergency, don't wait. Contact us immediately 
              for prompt, professional care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-red-600 text-white border-2 border-red-600 rounded-lg hover:bg-red-700 transition-colors duration-200 font-semibold">
                Emergency: (209) 804-2016
              </button>
              <button className="px-8 py-4 bg-white text-red-600 border-2 border-red-600 rounded-lg hover:bg-red-600 hover:text-white transition-colors duration-200 font-semibold">
                Schedule Emergency Visit
              </button>
            </div>
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
              Don't Wait for Dental Emergencies
            </h2>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto font-sans">
              Our experienced dental team is here to provide immediate care when you need it most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-[#441018] text-white border-2 border-white rounded-lg hover:bg-[#5a1a2a] transition-colors duration-200 font-semibold">
                Emergency Contact
              </button>
              <button className="px-8 py-4 bg-white text-[#441018] border-2 border-[#441018] rounded-lg hover:bg-[#441018] hover:text-white transition-colors duration-200 font-semibold">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 