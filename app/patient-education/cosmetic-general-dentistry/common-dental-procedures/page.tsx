'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CommonDentalProcedures() {
  const relatedArticles = [
    {
      title: 'Fillings',
      href: '/patient-education/cosmetic-general-dentistry/fillings',
      description: 'Dental fillings are used to repair teeth that have been damaged by decay or trauma.'
    },
    {
      title: 'Crowns',
      href: '/patient-education/cosmetic-general-dentistry/crowns',
      description: 'Dental crowns are tooth-shaped caps that are placed over teeth to restore their shape, size, strength, and appearance.'
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
              Common Dental Procedures
            </h1>
            <p className="text-[16px] sm:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-sans">
              Learn about the most common dental procedures and what to expect during your treatment. Understanding these procedures can help you feel more comfortable and prepared for your dental visits.
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
            <h2 className="text-[27px] sm:text-3xl font-semibold text-gray-900 mb-6 font-heading">Understanding Common Dental Procedures</h2>
            <p className="text-[16px] text-gray-700 leading-relaxed mb-6 font-sans">
              Regular dental checkups and treatments are essential for maintaining good oral health. Understanding common dental procedures can help you feel more comfortable and prepared for your dental visits. Here are some of the most common dental procedures and what you can expect.
            </p>

            <h3 className="text-[22px] sm:text-2xl font-semibold text-gray-900 mb-4 font-heading">Dental Cleanings</h3>
            <p className="text-[16px] text-gray-700 leading-relaxed mb-6 font-sans">
              Professional dental cleanings are typically performed every six months and are essential for maintaining good oral health. During a cleaning, your dental hygienist will:
            </p>
            <ul className="list-disc pl-6 mb-6 text-[16px] text-gray-700 font-sans">
              <li className="mb-2">Remove plaque and tartar from your teeth</li>
              <li className="mb-2">Polish your teeth to remove surface stains</li>
              <li className="mb-2">Floss between your teeth</li>
              <li className="mb-2">Apply fluoride treatment if recommended</li>
              <li className="mb-2">Check for signs of gum disease or other oral health issues</li>
            </ul>

            <h3 className="text-[22px] sm:text-2xl font-semibold text-gray-900 mb-4 font-heading">Dental Fillings</h3>
            <p className="text-[16px] text-gray-700 leading-relaxed mb-6 font-sans">
              Dental fillings are used to repair teeth that have been damaged by decay or trauma. The procedure involves:
            </p>
            <ul className="list-disc pl-6 mb-6 text-[16px] text-gray-700 font-sans">
              <li className="mb-2">Numbing the area with local anesthesia</li>
              <li className="mb-2">Removing the decayed portion of the tooth</li>
              <li className="mb-2">Cleaning the cavity to remove bacteria</li>
              <li className="mb-2">Filling the cavity with composite resin, amalgam, or other materials</li>
              <li className="mb-2">Shaping and polishing the filling to match your natural teeth</li>
            </ul>

            <h3 className="text-[22px] sm:text-2xl font-semibold text-gray-900 mb-4 font-heading">Root Canal Therapy</h3>
            <p className="text-[16px] text-gray-700 leading-relaxed mb-6 font-sans">
              Root canal therapy is performed when the pulp (nerve) of a tooth becomes infected or damaged. The procedure involves:
            </p>
            <ul className="list-disc pl-6 mb-6 text-[16px] text-gray-700 font-sans">
              <li className="mb-2">Numbing the tooth and surrounding area</li>
              <li className="mb-2">Creating an opening in the crown of the tooth</li>
              <li className="mb-2">Removing the infected or damaged pulp</li>
              <li className="mb-2">Cleaning and disinfecting the root canals</li>
              <li className="mb-2">Filling the canals with a rubber-like material</li>
              <li className="mb-2">Sealing the tooth with a filling or crown</li>
            </ul>

            <h3 className="text-[22px] sm:text-2xl font-semibold text-gray-900 mb-4 font-heading">Dental Crowns</h3>
            <p className="text-[16px] text-gray-700 leading-relaxed mb-6 font-sans">
              Dental crowns are tooth-shaped caps that are placed over teeth to restore their shape, size, strength, and appearance. The process typically involves:
            </p>
            <ul className="list-disc pl-6 mb-6 text-[16px] text-gray-700 font-sans">
              <li className="mb-2">Preparing the tooth by removing decay and shaping it</li>
              <li className="mb-2">Taking impressions of your teeth</li>
              <li className="mb-2">Placing a temporary crown while the permanent one is made</li>
              <li className="mb-2">Cementing the permanent crown in place</li>
            </ul>

            <h3 className="text-[22px] sm:text-2xl font-semibold text-gray-900 mb-4 font-heading">Dental Bridges</h3>
            <p className="text-[16px] text-gray-700 leading-relaxed mb-6 font-sans">
              Dental bridges are used to replace missing teeth by anchoring artificial teeth to adjacent natural teeth. The procedure involves:
            </p>
            <ul className="list-disc pl-6 mb-6 text-[16px] text-gray-700 font-sans">
              <li className="mb-2">Preparing the adjacent teeth (abutments) by removing some enamel</li>
              <li className="mb-2">Taking impressions of your teeth</li>
              <li className="mb-2">Creating a temporary bridge</li>
              <li className="mb-2">Fitting and cementing the permanent bridge</li>
            </ul>

            <h3 className="text-[22px] sm:text-2xl font-semibold text-gray-900 mb-4 font-heading">Dental Implants</h3>
            <p className="text-[16px] text-gray-700 leading-relaxed mb-6 font-sans">
              Dental implants are artificial tooth roots that are surgically placed into your jawbone. The process typically involves:
            </p>
            <ul className="list-disc pl-6 mb-6 text-[16px] text-gray-700 font-sans">
              <li className="mb-2">Surgical placement of the implant into the jawbone</li>
              <li className="mb-2">A healing period of several months for osseointegration</li>
              <li className="mb-2">Attachment of an abutment to the implant</li>
              <li className="mb-2">Placement of the artificial tooth (crown)</li>
            </ul>

            <h3 className="text-[22px] sm:text-2xl font-semibold text-gray-900 mb-4 font-heading">Tooth Extractions</h3>
            <p className="text-[16px] text-gray-700 leading-relaxed mb-6 font-sans">
              Tooth extractions are performed when a tooth is severely damaged or cannot be saved. The procedure involves:
            </p>
            <ul className="list-disc pl-6 mb-6 text-[16px] text-gray-700 font-sans">
              <li className="mb-2">Numbing the area with local anesthesia</li>
              <li className="mb-2">Loosening the tooth from the gum and bone</li>
              <li className="mb-2">Removing the tooth</li>
              <li className="mb-2">Cleaning the extraction site</li>
              <li className="mb-2">Placing gauze to control bleeding</li>
            </ul>

            <h3 className="text-[22px] sm:text-2xl font-semibold text-gray-900 mb-4 font-heading">What to Expect During Dental Procedures</h3>
            <p className="text-[16px] text-gray-700 leading-relaxed mb-6 font-sans">
              Most dental procedures follow a similar pattern:
            </p>
            <ul className="list-disc pl-6 mb-6 text-[16px] text-gray-700 font-sans">
              <li className="mb-2">Consultation and treatment planning</li>
              <li className="mb-2">Administration of local anesthesia if needed</li>
              <li className="mb-2">Performance of the procedure</li>
              <li className="mb-2">Post-procedure instructions and care</li>
              <li className="mb-2">Follow-up appointments as needed</li>
            </ul>

            <h3 className="text-[22px] sm:text-2xl font-semibold text-gray-900 mb-4 font-heading">Preparing for Your Dental Visit</h3>
            <p className="text-[16px] text-gray-700 leading-relaxed mb-6 font-sans">
              To make your dental visit as comfortable as possible:
            </p>
            <ul className="list-disc pl-6 mb-6 text-[16px] text-gray-700 font-sans">
              <li className="mb-2">Maintain good oral hygiene before your appointment</li>
              <li className="mb-2">Arrive on time and bring any relevant medical information</li>
              <li className="mb-2">Communicate any concerns or questions with your dentist</li>
              <li className="mb-2">Follow any pre-procedure instructions provided by your dentist</li>
              <li className="mb-2">Arrange for transportation if you'll be receiving sedation</li>
            </ul>
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