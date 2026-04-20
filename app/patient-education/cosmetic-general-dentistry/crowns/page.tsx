'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CrownsPage() {
  const relatedArticles = [
    {
      title: 'Bridges',
      description: 'Dental bridges are used to replace missing teeth and restore your smile.',
      href: '/patient-education/cosmetic-general-dentistry/bridges'
    },
    {
      title: 'Fillings',
      description: 'Dental fillings are used to repair teeth that have been damaged by decay.',
      href: '/patient-education/cosmetic-general-dentistry/fillings'
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
              Dental Crowns
            </h1>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-sans">
              Dental crowns are tooth-shaped caps that are placed over teeth to restore their shape, 
              size, strength, and appearance. Learn about the different types of crowns and when they're needed.
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
              What Are Dental Crowns?
            </h2>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              Dental crowns, also known as caps, are custom-made restorations that cover the entire visible 
              portion of a tooth. They are designed to match the shape, size, and color of your natural teeth, 
              providing both functional and aesthetic benefits.
            </p>

            <h3 className="text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              When Are Dental Crowns Needed?
            </h3>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              Dental crowns may be recommended in the following situations:
            </p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li>To protect a weak tooth from breaking or to hold together parts of a cracked tooth</li>
              <li>To restore an already broken tooth or a tooth that has been severely worn down</li>
              <li>To cover and support a tooth with a large filling when there isn't a lot of tooth left</li>
              <li>To hold a dental bridge in place</li>
              <li>To cover misshapen or severely discolored teeth</li>
              <li>To cover a dental implant</li>
              <li>To make a cosmetic modification</li>
            </ul>

            <h3 className="text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Types of Dental Crowns
            </h3>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              There are several types of dental crowns available, each with its own advantages:
            </p>

            <h4 className="text-xl font-semibold text-gray-900 font-heading mb-3">
              Porcelain Crowns
            </h4>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              Porcelain crowns provide the best natural color match compared to any other crown type. 
              They are a good choice for front teeth and are often used when metal allergies are a concern.
            </p>

            <h4 className="text-xl font-semibold text-gray-900 font-heading mb-3">
              Porcelain-Fused-to-Metal Crowns
            </h4>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              These crowns provide a stronger bond than regular porcelain because they are connected to a 
              metal structure. They are durable and can be a good choice for both front and back teeth.
            </p>

            <h4 className="text-xl font-semibold text-gray-900 font-heading mb-3">
              Gold Alloy Crowns
            </h4>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              Gold crowns are a mix of gold, copper, and other metals. They provide a strong bond to the 
              tooth, don't wear away the tooth itself, and rarely chip or break. They are often used for 
              back teeth where strength is important.
            </p>

            <h4 className="text-xl font-semibold text-gray-900 font-heading mb-3">
              All-Ceramic Crowns
            </h4>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              All-ceramic crowns provide the best natural color match of any crown type and may be more 
              suitable for people with metal allergies. They can be used for front and back teeth.
            </p>

            <h3 className="text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              The Crown Procedure
            </h3>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              Getting a dental crown typically requires two visits to your dentist:
            </p>

            <h4 className="text-xl font-semibold text-gray-900 font-heading mb-3">
              First Visit: Preparation
            </h4>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              During the first visit, your dentist will examine the tooth and may take X-rays. The tooth 
              will be numbed, and then reshaped to make room for the crown. An impression will be made 
              of the tooth and surrounding teeth, and a temporary crown will be placed to protect the tooth.
            </p>

            <h4 className="text-xl font-semibold text-gray-900 font-heading mb-3">
              Second Visit: Placement
            </h4>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              At the second visit, the temporary crown will be removed, and the permanent crown will be 
              checked for fit and color. Once approved, it will be cemented into place.
            </p>

            <h3 className="text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Caring for Your Crown
            </h3>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              While crowns don't require special care, it's important to maintain good oral hygiene:
            </p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li>Brush your teeth at least twice a day and floss daily</li>
              <li>Use an antibacterial mouthwash to help prevent gum disease</li>
              <li>Avoid chewing hard foods, ice, or other hard objects</li>
              <li>Visit your dentist regularly for checkups and professional cleanings</li>
            </ul>

            <h3 className="text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              How Long Do Crowns Last?
            </h3>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              On average, dental crowns last between 5 and 15 years. The lifespan of a crown depends on 
              the amount of wear and tear the crown is exposed to, how well you follow good oral hygiene 
              practices, and your personal mouth-related habits (such as grinding or clenching your teeth).
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