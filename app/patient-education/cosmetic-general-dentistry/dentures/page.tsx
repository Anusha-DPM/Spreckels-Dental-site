'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function DenturesPage() {
  const relatedArticles = [
    {
      title: 'Bridges',
      description: 'Dental bridges are used to replace missing teeth and restore your smile.',
      href: '/patient-education/cosmetic-general-dentistry/bridges'
    },
    {
      title: 'Crowns',
      description: 'Dental crowns are tooth-shaped caps that restore teeth shape, size, and strength.',
      href: '/patient-education/cosmetic-general-dentistry/crowns'
    },
    {
      title: 'Common Dental Procedures',
      description: 'Learn about the most common dental procedures and what to expect.',
      href: '/patient-education/cosmetic-general-dentistry/common-dental-procedures'
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
              Dentures
            </h1>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-sans">
              Dentures are removable appliances that can replace missing teeth and help restore your smile. 
              Learn about the different types of dentures and how they can improve your oral health and appearance.
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
            <h2 className="text-3xl font-normal text-gray-900 font-heading mb-6">
              What Are Dentures?
            </h2>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              Dentures are removable replacements for missing teeth and surrounding tissues. They are made 
              from acrylic resin, sometimes combined with metal attachments. Complete dentures replace all 
              the teeth, while partial dentures fill in the spaces created by missing teeth and prevent 
              other teeth from changing position.
            </p>

            <h3 className="text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Types of Dentures
            </h3>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              There are several types of dentures available, each designed for specific situations:
            </p>

            <h4 className="text-xl font-semibold text-gray-900 font-heading mb-3">
              Complete Dentures
            </h4>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              Complete dentures are used when all the teeth are missing. They can be either "conventional" 
              or "immediate." Conventional dentures are made after the teeth have been removed and the gum 
              tissue has healed, usually taking 8-12 weeks. Immediate dentures are made in advance and can 
              be positioned as soon as the teeth are removed.
            </p>

            <h4 className="text-xl font-semibold text-gray-900 font-heading mb-3">
              Partial Dentures
            </h4>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              Partial dentures are used when some natural teeth remain. A partial denture consists of 
              replacement teeth attached to a pink or gum-colored plastic base, which is sometimes connected 
              by a metal framework that holds the denture in place in the mouth.
            </p>

            <h4 className="text-xl font-semibold text-gray-900 font-heading mb-3">
              Implant-Supported Dentures
            </h4>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              These dentures are attached to dental implants that are surgically placed in the jawbone. 
              Implant-supported dentures provide better stability and chewing efficiency compared to 
              traditional removable dentures.
            </p>

            <h3 className="text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              When Are Dentures Needed?
            </h3>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              Dentures may be recommended in the following situations:
            </p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li>When all teeth are missing (complete dentures)</li>
              <li>When several teeth are missing (partial dentures)</li>
              <li>To improve chewing ability and speech</li>
              <li>To enhance facial appearance and smile</li>
              <li>To prevent remaining teeth from shifting</li>
              <li>To support facial muscles and prevent sagging</li>
            </ul>

            <h3 className="text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              The Denture Process
            </h3>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              Getting dentures typically involves several steps:
            </p>

            <h4 className="text-xl font-semibold text-gray-900 font-heading mb-3">
              Initial Consultation
            </h4>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              Your dentist will examine your mouth, take X-rays, and discuss your options. They will also 
              explain the different types of dentures available and help you choose the best option for your needs.
            </p>

            <h4 className="text-xl font-semibold text-gray-900 font-heading mb-3">
              Tooth Extraction (if needed)
            </h4>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              If you have remaining teeth that need to be removed, this will be done first. Your gums 
              will need time to heal before conventional dentures can be fitted.
            </p>

            <h4 className="text-xl font-semibold text-gray-900 font-heading mb-3">
              Impressions and Measurements
            </h4>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              Your dentist will take detailed impressions and measurements of your mouth to ensure your 
              dentures fit properly and look natural.
            </p>

            <h4 className="text-xl font-semibold text-gray-900 font-heading mb-3">
              Fitting and Adjustments
            </h4>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              Once your dentures are made, you'll have a fitting appointment. Your dentist will make any 
              necessary adjustments to ensure comfort and proper function.
            </p>

            <h3 className="text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Caring for Your Dentures
            </h3>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              Proper care is essential to keep your dentures in good condition:
            </p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li>Remove and rinse dentures after eating</li>
              <li>Clean your mouth after removing dentures</li>
              <li>Brush dentures daily with a soft-bristled brush and denture cleaner</li>
              <li>Soak dentures overnight in a denture cleaning solution</li>
              <li>Handle dentures carefully to avoid dropping them</li>
              <li>Visit your dentist regularly for checkups and adjustments</li>
            </ul>

            <h3 className="text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Adjusting to Dentures
            </h3>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              It may take some time to get used to wearing dentures. Here are some tips for the adjustment period:
            </p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li>Start with soft foods cut into small pieces</li>
              <li>Chew slowly and use both sides of your mouth</li>
              <li>Practice speaking to get used to the feel</li>
              <li>Be patient - it may take several weeks to feel comfortable</li>
              <li>Contact your dentist if you experience persistent discomfort</li>
            </ul>

            <h3 className="text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              How Long Do Dentures Last?
            </h3>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              With proper care, dentures typically last 5-10 years. However, your mouth naturally changes 
              over time, so your dentures may need to be relined, rebased, or remade to ensure a proper fit. 
              Regular dental checkups will help determine when adjustments or replacements are needed.
            </p>
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
            <h2 className="text-3xl font-normal text-gray-900 font-heading mb-12 text-center">
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
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200 font-heading">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed font-sans">
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