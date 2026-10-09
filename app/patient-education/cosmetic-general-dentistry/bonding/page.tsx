'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Bonding() {
  const relatedArticles = [
    {
      title: 'Crowns',
      href: '/patient-education/cosmetic-general-dentistry/crowns',
      description: 'Dental crowns are tooth-shaped caps that are placed over teeth to restore their shape, size, strength, and appearance.'
    },
    {
      title: 'Fillings',
      href: '/patient-education/cosmetic-general-dentistry/fillings',
      description: 'Dental fillings are used to repair teeth that have been damaged by decay or trauma.'
    },
    {
      title: 'Bridges',
      href: '/patient-education/cosmetic-general-dentistry/bridges',
      description: 'Dental bridges are used to replace missing teeth and restore your smile and ability to properly chew and speak.'
    }
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
              Dental Bonding
            </h1>
            <p className="text-[16px] sm:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-sans">
              A cosmetic dental procedure that uses a tooth-colored composite resin material to enhance your smile and improve the appearance of your teeth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-8 sm:py-10 lg:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-[27px] sm:text-3xl font-semibold text-gray-900 mb-6 font-heading">What is Dental Bonding?</h2>
            <p className="text-[16px] text-gray-700 leading-relaxed mb-6 font-sans">
              Dental bonding is a cosmetic dental procedure that uses a tooth-colored composite resin material to enhance your smile. This procedure can be used to repair chipped, cracked, or discolored teeth, as well as to close gaps between teeth and make teeth appear longer.
            </p>

            <h3 className="text-[22px] sm:text-2xl font-semibold text-gray-900 mb-4 font-heading">The Bonding Process</h3>
            <p className="text-[16px] text-gray-700 leading-relaxed mb-6 font-sans">
              The dental bonding process is relatively simple and typically requires only one visit to your dentist. Here's what you can expect:
            </p>
            <ul className="list-disc pl-6 mb-6 text-[16px] text-gray-700 font-sans">
              <li className="mb-2">Your dentist will first select a composite resin color that matches your natural teeth</li>
              <li className="mb-2">The surface of your tooth will be prepared and a conditioning liquid applied</li>
              <li className="mb-2">The composite resin is applied, molded, and smoothed to the desired shape</li>
              <li className="mb-2">An ultraviolet light or laser is used to harden the material</li>
              <li className="mb-2">The bonded tooth is trimmed, shaped, and polished to match the rest of your teeth</li>
            </ul>

            <h3 className="text-[22px] sm:text-2xl font-semibold text-gray-900 mb-4 font-heading">Benefits of Dental Bonding</h3>
            <p className="text-[16px] text-gray-700 leading-relaxed mb-6 font-sans">
              Dental bonding offers several advantages as a cosmetic dental procedure:
            </p>
            <ul className="list-disc pl-6 mb-6 text-[16px] text-gray-700 font-sans">
              <li className="mb-2">Improves the appearance of chipped, cracked, or discolored teeth</li>
              <li className="mb-2">Closes gaps between teeth</li>
              <li className="mb-2">Makes teeth appear longer</li>
              <li className="mb-2">Changes the shape of teeth</li>
              <li className="mb-2">Protects a portion of the tooth's root that has been exposed when gums recede</li>
              <li className="mb-2">Less expensive than other cosmetic dental procedures</li>
              <li className="mb-2">Usually requires only one office visit</li>
            </ul>

            <h3 className="text-[22px] sm:text-2xl font-semibold text-gray-900 mb-4 font-heading">Caring for Bonded Teeth</h3>
            <p className="text-[16px] text-gray-700 leading-relaxed mb-6 font-sans">
              To keep your bonded teeth looking their best, follow these care tips:
            </p>
            <ul className="list-disc pl-6 mb-6 text-[16px] text-gray-700 font-sans">
              <li className="mb-2">Practice good oral hygiene by brushing twice daily and flossing regularly</li>
              <li className="mb-2">Avoid biting on hard objects like pens, ice, or fingernails</li>
              <li className="mb-2">Limit consumption of coffee, tea, and other staining beverages</li>
              <li className="mb-2">Visit your dentist regularly for check-ups and cleanings</li>
              <li className="mb-2">Consider quitting smoking, as it can stain the bonding material</li>
            </ul>

            <h3 className="text-[22px] sm:text-2xl font-semibold text-gray-900 mb-4 font-heading">How Long Does Dental Bonding Last?</h3>
            <p className="text-[16px] text-gray-700 leading-relaxed mb-6 font-sans">
              Dental bonding typically lasts between 3 to 10 years before it needs to be touched up or replaced. The lifespan depends on how much bonding was done and your oral habits. With proper care and maintenance, your bonded teeth can look great for many years.
            </p>

            <h3 className="text-[22px] sm:text-2xl font-semibold text-gray-900 mb-4 font-heading">Is Dental Bonding Right for You?</h3>
            <p className="text-[16px] text-gray-700 leading-relaxed mb-6 font-sans">
              Dental bonding is an excellent option for minor cosmetic improvements. However, it may not be the best choice for more extensive dental work. Your dentist can help you determine if bonding is the right solution for your specific dental concerns.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-8 sm:py-10 lg:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[27px] sm:text-3xl font-semibold text-gray-900 mb-8 text-center font-heading">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArticles.map((article, index) => (
                <motion.div
                  key={article.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Link href={article.href}>
                    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-blue-300 h-full">
                      <div className="p-6">
                        <h3 className="text-[22px] sm:text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200 font-heading">
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
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 