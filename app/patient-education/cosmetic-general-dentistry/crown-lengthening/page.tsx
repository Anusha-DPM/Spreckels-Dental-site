'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CrownLengthening() {
  const relatedArticles = [
    {
      title: 'Crowns',
      href: '/patient-education/cosmetic-general-dentistry/crowns',
      description: 'Dental crowns are tooth-shaped caps that are placed over teeth to restore their shape, size, strength, and appearance.'
    },
    {
      title: 'Bonding',
      href: '/patient-education/cosmetic-general-dentistry/bonding',
      description: 'Dental bonding is a cosmetic procedure that uses a tooth-colored composite resin material to enhance your smile.'
    },
    {
      title: 'Common Dental Procedures',
      href: '/patient-education/cosmetic-general-dentistry/common-dental-procedures',
      description: 'Learn about the most common dental procedures and what to expect during your treatment.'
    }
  ]

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
              Crown Lengthening
            </h1>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-sans">
              Crown lengthening is a surgical procedure that reshapes gum tissue and bone to expose more of a tooth, creating a better foundation for restorative or cosmetic dental work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl font-semibold text-gray-900 mb-6 font-heading">What is Crown Lengthening?</h2>
            <p className="text-gray-700 leading-relaxed mb-6 font-sans">
              Crown lengthening is a surgical procedure that removes excess gum tissue and, in some cases, bone to expose more of a tooth's surface. This procedure is often performed to prepare a tooth for a crown or other restoration, or for cosmetic reasons to improve the appearance of a "gummy smile."
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-heading">When is Crown Lengthening Needed?</h3>
            <p className="text-gray-700 leading-relaxed mb-6 font-sans">
              Crown lengthening may be recommended in several situations:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 font-sans">
              <li className="mb-2">When a tooth is broken off at the gum line and there isn't enough tooth structure to support a crown</li>
              <li className="mb-2">When decay extends below the gum line and needs to be accessed for treatment</li>
              <li className="mb-2">For cosmetic reasons to reduce excessive gum tissue and create a more balanced smile</li>
              <li className="mb-2">When preparing a tooth for a dental crown or bridge</li>
              <li className="mb-2">To improve the appearance of teeth that appear too short</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-heading">The Crown Lengthening Procedure</h3>
            <p className="text-gray-700 leading-relaxed mb-6 font-sans">
              The crown lengthening procedure typically involves the following steps:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 font-sans">
              <li className="mb-2">Local anesthesia is administered to numb the area</li>
              <li className="mb-2">The periodontist makes small incisions in the gum tissue to separate it from the tooth</li>
              <li className="mb-2">Excess gum tissue is removed to expose more of the tooth</li>
              <li className="mb-2">In some cases, a small amount of bone may also be removed</li>
              <li className="mb-2">The gum tissue is repositioned and sutured in place</li>
              <li className="mb-2">A protective dressing may be placed over the surgical site</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-heading">Recovery and Healing</h3>
            <p className="text-gray-700 leading-relaxed mb-6 font-sans">
              After crown lengthening surgery, you can expect:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 font-sans">
              <li className="mb-2">Some discomfort and swelling for the first few days</li>
              <li className="mb-2">The need to avoid chewing on the treated area</li>
              <li className="mb-2">Special oral hygiene instructions to follow</li>
              <li className="mb-2">A follow-up appointment to remove sutures if needed</li>
              <li className="mb-2">Complete healing typically takes 2-3 months</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-heading">Post-Surgical Care</h3>
            <p className="text-gray-700 leading-relaxed mb-6 font-sans">
              To ensure proper healing after crown lengthening:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 font-sans">
              <li className="mb-2">Take prescribed pain medications as directed</li>
              <li className="mb-2">Apply ice packs to reduce swelling</li>
              <li className="mb-2">Avoid brushing the surgical area for the first few days</li>
              <li className="mb-2">Use a saltwater rinse as recommended by your dentist</li>
              <li className="mb-2">Avoid hard, crunchy, or spicy foods</li>
              <li className="mb-2">Don't smoke or use tobacco products</li>
              <li className="mb-2">Attend all follow-up appointments</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-heading">Benefits of Crown Lengthening</h3>
            <p className="text-gray-700 leading-relaxed mb-6 font-sans">
              Crown lengthening offers several advantages:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 font-sans">
              <li className="mb-2">Creates adequate tooth structure for dental restorations</li>
              <li className="mb-2">Improves the appearance of teeth that appear too short</li>
              <li className="mb-2">Reduces excessive gum tissue for a more balanced smile</li>
              <li className="mb-2">Allows for better access to decay below the gum line</li>
              <li className="mb-2">Provides a better foundation for crowns, bridges, or veneers</li>
              <li className="mb-2">Can improve overall oral health by making teeth easier to clean</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-heading">Risks and Considerations</h3>
            <p className="text-gray-700 leading-relaxed mb-6 font-sans">
              As with any surgical procedure, crown lengthening carries some risks:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 font-sans">
              <li className="mb-2">Infection at the surgical site</li>
              <li className="mb-2">Excessive bleeding</li>
              <li className="mb-2">Sensitivity to hot and cold temperatures</li>
              <li className="mb-2">Root exposure leading to increased sensitivity</li>
              <li className="mb-2">Changes in tooth appearance</li>
              <li className="mb-2">Need for additional procedures in some cases</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-heading">When to Consider Crown Lengthening</h3>
            <p className="text-gray-700 leading-relaxed mb-6 font-sans">
              You should consider crown lengthening if:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 font-sans">
              <li className="mb-2">Your dentist recommends it to prepare a tooth for a crown</li>
              <li className="mb-2">You have a "gummy smile" that you'd like to improve</li>
              <li className="mb-2">You have teeth that appear too short</li>
              <li className="mb-2">You have decay that extends below the gum line</li>
              <li className="mb-2">You need better access to a tooth for restorative work</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-heading">Consultation and Planning</h3>
            <p className="text-gray-700 leading-relaxed mb-6 font-sans">
              Before undergoing crown lengthening, your dentist or periodontist will:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 font-sans">
              <li className="mb-2">Conduct a thorough examination of your teeth and gums</li>
              <li className="mb-2">Take X-rays to assess bone structure</li>
              <li className="mb-2">Discuss your treatment goals and expectations</li>
              <li className="mb-2">Explain the procedure and recovery process</li>
              <li className="mb-2">Address any concerns or questions you may have</li>
              <li className="mb-2">Create a treatment plan tailored to your needs</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center font-heading">Related Articles</h2>
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
                        <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200 font-heading">
                          {article.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed font-sans mb-4">
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