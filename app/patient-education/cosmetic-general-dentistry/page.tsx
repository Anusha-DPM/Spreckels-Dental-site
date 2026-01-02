'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CosmeticGeneralDentistry() {
  const articles = [
    {
      id: 'bonding',
      title: 'Bonding',
      description: 'Dental bonding is a cosmetic procedure that uses a tooth-colored composite resin material to enhance your smile.',
      category: 'Cosmetic Dentistry',
      href: '/patient-education/cosmetic-general-dentistry/bonding'
    },
    {
      id: 'bridges',
      title: 'Bridges',
      description: 'Dental bridges are used to replace missing teeth and restore your smile and ability to properly chew and speak.',
      category: 'Restorative Dentistry',
      href: '/patient-education/cosmetic-general-dentistry/bridges'
    },
    {
      id: 'bruxism',
      title: 'Bruxism',
      description: 'Bruxism is the medical term for grinding, gnashing or clenching your teeth, often during sleep.',
      category: 'Oral Health',
      href: '/patient-education/cosmetic-general-dentistry/bruxism'
    },
    {
      id: 'common-dental-procedures',
      title: 'Common Dental Procedures',
      description: 'Learn about the most common dental procedures and what to expect during your treatment.',
      category: 'General Dentistry',
      href: '/patient-education/cosmetic-general-dentistry/common-dental-procedures'
    },
    {
      id: 'crown-lengthening',
      title: 'Crown Lengthening',
      description: 'Crown lengthening is a surgical procedure that reshapes gum tissue and bone to expose more of a tooth.',
      category: 'Periodontal Surgery',
      href: '/patient-education/cosmetic-general-dentistry/crown-lengthening'
    },
    {
      id: 'crowns',
      title: 'Crowns',
      description: 'Dental crowns are tooth-shaped caps that are placed over teeth to restore their shape, size, strength, and appearance.',
      category: 'Restorative Dentistry',
      href: '/patient-education/cosmetic-general-dentistry/crowns'
    },
    {
      id: 'dentures',
      title: 'Dentures',
      description: 'Dentures are removable appliances that can replace missing teeth and help restore your smile.',
      category: 'Prosthodontics',
      href: '/patient-education/cosmetic-general-dentistry/dentures'
    },
    {
      id: 'fillings',
      title: 'Fillings',
      description: 'Dental fillings are used to repair teeth that have been damaged by decay or trauma.',
      category: 'Restorative Dentistry',
      href: '/patient-education/cosmetic-general-dentistry/fillings'
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
      <section className="pt-32 pb-16 sm:pt-32 sm:pb-20 md:pt-40 md:pb-24" style={{ backgroundColor: '#441018' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-[27px] sm:text-5xl lg:text-6xl font-normal text-white font-heading leading-tight mb-6">
              Cosmetic & General Dentistry
            </h1>
            <p className="text-[16px] sm:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-sans">
              Discover comprehensive information about cosmetic and general dental procedures. 
              From routine cleanings to advanced cosmetic treatments, learn about the procedures 
              that can help you achieve a healthy, beautiful smile.
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
                <Link href={article.href}>
                  <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-blue-300 h-full">
                    <div className="p-6">
                      <div className="mb-4">
                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full">
                          {article.category}
                        </span>
                      </div>
                      <h3 className="text-[20px] sm:text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200 font-heading">
                        {article.title}
                      </h3>
                      <p className="text-[16px] text-gray-600 leading-relaxed font-sans mb-4">
                        {article.description}
                      </p>
                      <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors duration-200">
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
              Ready to Transform Your Smile?
            </h2>
            <p className="text-[16px] sm:text-lg text-gray-200 mb-8 max-w-2xl mx-auto font-sans">
              Our team of experienced dental professionals is here to help you achieve the smile you've always wanted.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://spreckels-dental-site.vercel.app/appointment-request"
                className="px-8 py-4 bg-[#441018] text-white border-2 border-white rounded-lg hover:bg-[#5a1a2a] transition-colors duration-200 font-semibold cursor-pointer inline-block text-center"
              >
                Schedule Consultation
              </a>
              <a 
                href="/contact"
                className="px-8 py-4 bg-white text-[#441018] border-2 border-[#441018] rounded-lg hover:bg-[#441018] hover:text-white transition-colors duration-200 font-semibold cursor-pointer inline-block text-center"
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