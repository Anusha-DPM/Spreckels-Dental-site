'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Bridges() {
  const relatedArticles = [
    {
      title: 'Crowns',
      href: '/patient-education/cosmetic-general-dentistry/crowns',
      description: 'Dental crowns are tooth-shaped caps that are placed over teeth to restore their shape, size, strength, and appearance.'
    },
    {
      title: 'Dentures',
      href: '/patient-education/cosmetic-general-dentistry/dentures',
      description: 'Dentures are removable appliances that can replace missing teeth and help restore your smile.'
    },
    {
      title: 'Fillings',
      href: '/patient-education/cosmetic-general-dentistry/fillings',
      description: 'Dental fillings are used to repair teeth that have been damaged by decay or trauma.'
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
              Dental Bridges
            </h1>
            <p className="text-[16px] sm:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-sans">
              Dental bridges are used to replace missing teeth and restore your smile and ability to properly chew and speak.
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
            <h2 className="text-[27px] sm:text-3xl font-semibold text-gray-900 mb-6 font-heading">What are Dental Bridges?</h2>
            <p className="text-[16px] text-gray-700 leading-relaxed mb-6 font-sans">
              A dental bridge is a fixed dental restoration used to replace one or more missing teeth by joining an artificial tooth definitively to adjacent teeth or dental implants. Bridges are cemented onto natural teeth or implants surrounding the space where teeth are missing.
            </p>

            <h3 className="text-[22px] sm:text-2xl font-semibold text-gray-900 mb-4 font-heading">Types of Dental Bridges</h3>
            <p className="text-[16px] text-gray-700 leading-relaxed mb-6 font-sans">
              There are several types of dental bridges available, each designed for specific situations:
            </p>
            <ul className="list-disc pl-6 mb-6 text-[16px] text-gray-700 font-sans">
              <li className="mb-2"><strong>Traditional bridges:</strong> The most common type, consisting of a false tooth or teeth held in place by dental crowns cemented onto the adjacent teeth</li>
              <li className="mb-2"><strong>Cantilever bridges:</strong> Used when there are adjacent teeth on only one side of the missing tooth or teeth</li>
              <li className="mb-2"><strong>Maryland bonded bridges:</strong> Made of porcelain fused to metal or porcelain teeth supported by a framework</li>
              <li className="mb-2"><strong>Implant-supported bridges:</strong> Supported by dental implants rather than crowns or frameworks</li>
            </ul>

            <h3 className="text-[22px] sm:text-2xl font-semibold text-gray-900 mb-4 font-heading">The Bridge Procedure</h3>
            <p className="text-[16px] text-gray-700 leading-relaxed mb-6 font-sans">
              Getting a dental bridge typically requires two or more visits to your dentist:
            </p>
            <ul className="list-disc pl-6 mb-6 text-[16px] text-gray-700 font-sans">
              <li className="mb-2">During the first visit, your dentist will prepare the abutment teeth by removing a portion of enamel to allow room for a crown</li>
              <li className="mb-2">Impressions of your teeth are made, which serve as a model from which the bridge, pontic, and crowns will be made</li>
              <li className="mb-2">Your dentist will make a temporary bridge to wear to protect the exposed teeth and gums while the bridge is being made</li>
              <li className="mb-2">During the second visit, your temporary bridge will be removed and the new porcelain or metal bridge will be checked and adjusted, as necessary, to achieve a proper fit</li>
              <li className="mb-2">The bridge is then cemented in place</li>
            </ul>

            <h3 className="text-[22px] sm:text-2xl font-semibold text-gray-900 mb-4 font-heading">Benefits of Dental Bridges</h3>
            <p className="text-[16px] text-gray-700 leading-relaxed mb-6 font-sans">
              Dental bridges offer numerous advantages for patients with missing teeth:
            </p>
            <ul className="list-disc pl-6 mb-6 text-[16px] text-gray-700 font-sans">
              <li className="mb-2">Restore your smile and facial tissues</li>
              <li className="mb-2">Maintain the ability to speak and chew properly</li>
              <li className="mb-2">Distribute the forces in your bite properly by replacing missing teeth</li>
              <li className="mb-2">Prevent remaining teeth from drifting out of position</li>
              <li className="mb-2">Restore chewing and speaking ability</li>
              <li className="mb-2">Maintain the shape of your face</li>
            </ul>

            <h3 className="text-[22px] sm:text-2xl font-semibold text-gray-900 mb-4 font-heading">Caring for Your Dental Bridge</h3>
            <p className="text-[16px] text-gray-700 leading-relaxed mb-6 font-sans">
              Proper care and maintenance are essential for the longevity of your dental bridge:
            </p>
            <ul className="list-disc pl-6 mb-6 text-[16px] text-gray-700 font-sans">
              <li className="mb-2">Practice good oral hygiene by brushing twice daily and flossing regularly</li>
              <li className="mb-2">Use a floss threader or special floss to clean under your bridge</li>
              <li className="mb-2">Visit your dentist regularly for check-ups and professional cleanings</li>
              <li className="mb-2">Avoid chewing on hard foods, ice, or other hard objects</li>
              <li className="mb-2">Consider using an antiseptic mouthwash to help prevent tooth decay and gum disease</li>
            </ul>

            <h3 className="text-[22px] sm:text-2xl font-semibold text-gray-900 mb-4 font-heading">How Long Do Dental Bridges Last?</h3>
            <p className="text-[16px] text-gray-700 leading-relaxed mb-6 font-sans">
              Dental bridges can last 5 to 15 years and even longer. With good oral hygiene and regular checkups, it is not unusual for the life span of a fixed bridge to be over 10 years. The lifespan of your bridge depends on the health of the supporting teeth and gums, as well as your oral hygiene habits.
            </p>

            <h3 className="text-[22px] sm:text-2xl font-semibold text-gray-900 mb-4 font-heading">Are Dental Bridges Right for You?</h3>
            <p className="text-[16px] text-gray-700 leading-relaxed mb-6 font-sans">
              Dental bridges are an excellent option for replacing missing teeth, especially when you have healthy teeth on both sides of the gap. Your dentist will evaluate your specific situation and recommend the best type of bridge for your needs. Factors to consider include the number of missing teeth, the health of adjacent teeth, and your overall oral health.
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