'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ApicoectomyPage() {
  const relatedArticles = [
    {
      title: 'Root Canal Treatment',
      description: 'Comprehensive guide to root canal treatment, including the procedure, benefits, and what to expect during recovery.',
      href: '/patient-education/endodontics/root-canal-treatment'
    },
    {
      title: 'Root Canal Retreatment',
      description: 'When a previously treated root canal needs additional treatment due to persistent infection or new problems.',
      href: '/patient-education/endodontics/root-canal-retreatment'
    },
    {
      title: 'Combined Root and Gum Problems',
      description: 'When endodontic and periodontal problems occur together, requiring comprehensive treatment approaches.',
      href: '/patient-education/endodontics/combined-root-and-gum-problems'
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
              Apicoectomy
            </h1>
            <p className="text-[16px] sm:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-sans">
              A surgical procedure to treat persistent root canal infections when conventional 
              root canal treatment is not sufficient to resolve the problem.
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
            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6">
              What is an Apicoectomy?
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              An apicoectomy, also known as root-end resection, is a surgical procedure performed 
              when a conventional root canal treatment has not been successful in eliminating 
              infection from the root tip of a tooth. This procedure involves removing the tip 
              of the tooth's root and the surrounding infected tissue, then sealing the root 
              end to prevent further infection.
            </p>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              When is an Apicoectomy Needed?
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              An apicoectomy may be recommended in the following situations:
            </p>
            <ul className="list-disc pl-6 text-[16px] text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li>Persistent infection after root canal treatment</li>
              <li>Inability to access the root canal through the crown</li>
              <li>Complex root canal anatomy that prevents complete cleaning</li>
              <li>Presence of a cyst or granuloma at the root tip</li>
              <li>Need to preserve a tooth that has a crown or bridge</li>
              <li>When retreatment of the root canal is not feasible</li>
            </ul>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              The Apicoectomy Procedure
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              The apicoectomy procedure typically involves the following steps:
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Preparation and Anesthesia
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Local anesthesia is administered to numb the area. The procedure is performed 
              under a surgical microscope to ensure precision and accuracy.
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Access and Exposure
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              A small incision is made in the gum tissue to expose the root tip and surrounding 
              bone. The infected tissue and any cysts or granulomas are removed.
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Root Tip Removal
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              The tip of the root (usually 2-3mm) is removed using specialized instruments. 
              This eliminates the infected portion of the root.
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Root End Filling
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              The root end is sealed with a biocompatible material to prevent bacteria from 
              re-entering the root canal system.
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Closure
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              The gum tissue is sutured back into place. The sutures are typically removed 
              within a week.
            </p>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Benefits of Apicoectomy
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Apicoectomy offers several advantages:
            </p>
            <ul className="list-disc pl-6 text-[16px] text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li>Preserves the natural tooth structure</li>
              <li>Eliminates persistent infection</li>
              <li>Relieves pain and discomfort</li>
              <li>Prevents the need for tooth extraction</li>
              <li>Maintains proper chewing function</li>
              <li>Preserves the jawbone structure</li>
              <li>Cost-effective compared to tooth replacement options</li>
            </ul>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Recovery and Aftercare
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Following an apicoectomy, proper care is essential for successful healing:
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Immediate Post-Procedure Care
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Apply ice packs to reduce swelling, take prescribed medications as directed, 
              and avoid touching or disturbing the surgical site.
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Oral Hygiene
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Maintain gentle oral hygiene practices. Avoid brushing the surgical area for 
              the first few days, and use a saltwater rinse as recommended by your dentist.
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Diet Modifications
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Stick to soft foods for the first few days and avoid hot, spicy, or crunchy 
              foods that could irritate the surgical site.
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Activity Restrictions
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Avoid strenuous physical activity for the first 24-48 hours to prevent 
              bleeding and promote healing.
            </p>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Success Rate and Prognosis
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              The success rate of apicoectomy procedures is generally high, ranging from 
              85% to 95% depending on various factors:
            </p>
            <ul className="list-disc pl-6 text-[16px] text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li>Location of the tooth in the mouth</li>
              <li>Extent of the infection</li>
              <li>Patient's overall health</li>
              <li>Quality of the original root canal treatment</li>
              <li>Patient's compliance with aftercare instructions</li>
            </ul>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              When to Contact Your Dentist
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Contact your dentist immediately if you experience:
            </p>
            <ul className="list-disc pl-6 text-[16px] text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li>Severe or increasing pain</li>
              <li>Excessive bleeding</li>
              <li>Signs of infection (fever, swelling, pus)</li>
              <li>Difficulty breathing or swallowing</li>
              <li>Numbness that persists beyond the expected time</li>
              <li>Sutures that come loose or fall out</li>
            </ul>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Alternative Treatment Options
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              If apicoectomy is not suitable, alternative treatments may include:
            </p>
            <ul className="list-disc pl-6 text-[16px] text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li>Root canal retreatment</li>
              <li>Tooth extraction followed by replacement (implant, bridge, or denture)</li>
              <li>Antibiotic therapy for minor infections</li>
              <li>Monitoring the condition if symptoms are mild</li>
            </ul>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Prevention of Future Problems
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              To prevent the need for future apicoectomy procedures:
            </p>
            <ul className="list-disc pl-6 text-[16px] text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li>Maintain excellent oral hygiene</li>
              <li>Attend regular dental checkups</li>
              <li>Address dental problems early</li>
              <li>Follow your dentist's recommendations for treatment</li>
              <li>Avoid using your teeth as tools</li>
              <li>Wear protective gear during sports activities</li>
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
            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-8 text-center">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArticles.map((article, index) => (
                <motion.div
                  key={article.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Link href={article.href}>
                    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 h-full">
                      <h3 className="text-[22px] sm:text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200 font-heading">
                        {article.title}
                      </h3>
                      <p className="text-[16px] text-gray-600 leading-relaxed font-sans">
                        {article.description}
                      </p>
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