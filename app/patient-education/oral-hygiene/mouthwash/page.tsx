'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function MouthwashPage() {
  const relatedArticles = [
    {
      title: 'How to Brush and Floss',
      description: 'Learn the proper techniques for brushing and flossing to maintain optimal oral health.',
      href: '/patient-education/oral-hygiene/how-to-brush-and-floss'
    },
    {
      title: 'Interdental Cleaning Devices',
      description: 'Understanding the different types of interdental cleaning devices and how to use them effectively.',
      href: '/patient-education/oral-hygiene/interdental-cleaning-devices'
    },
    {
      title: 'Toothpaste',
      description: 'Understanding different types of toothpaste and how to select the best option for your oral health needs.',
      href: '/patient-education/oral-hygiene/toothpaste'
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
              Mouthwash
            </h1>
            <p className="text-[16px] sm:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-sans">
              The role of mouthwash in oral hygiene and how to choose the right product for your needs.
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
              What is Mouthwash?
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Mouthwash, also known as oral rinse, is a liquid product used to rinse your mouth, teeth, 
              and gums. It is designed to help clean your mouth, freshen your breath, and provide additional 
              oral health benefits beyond brushing and flossing alone.
            </p>

            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              Types of Mouthwash
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              There are several types of mouthwash available, each designed for specific purposes. 
              Cosmetic mouthwashes primarily freshen breath and provide a pleasant taste. Therapeutic 
              mouthwashes contain active ingredients that help control or reduce conditions such as 
              bad breath, gingivitis, plaque, and tooth decay.
            </p>

            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              Active Ingredients
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Common active ingredients in therapeutic mouthwashes include fluoride to prevent cavities, 
              antimicrobial agents like chlorhexidine to reduce bacteria, essential oils for antibacterial 
              properties, and hydrogen peroxide for whitening effects. Some mouthwashes also contain 
              alcohol, which can help kill bacteria but may cause dry mouth in some individuals.
            </p>

            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              Benefits of Using Mouthwash
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Mouthwash can provide several benefits when used as part of a comprehensive oral hygiene 
              routine. It can help reduce plaque and gingivitis, freshen breath, reach areas that may 
              be difficult to clean with brushing and flossing alone, and provide additional protection 
              against cavities when containing fluoride.
            </p>

            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              How to Use Mouthwash Properly
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              To use mouthwash effectively, pour the recommended amount into a cup, swish it around your 
              mouth for 30 seconds to 1 minute, then spit it out. Do not swallow mouthwash, as it may 
              contain ingredients that are not meant to be ingested. Use mouthwash after brushing and 
              flossing for best results.
            </p>

            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              When to Use Mouthwash
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Mouthwash can be used once or twice daily, depending on the product and your oral health 
              needs. Some people use it in the morning to freshen breath, while others prefer to use it 
              at night after their complete oral hygiene routine. Follow the specific instructions on 
              the product label for optimal results.
            </p>

            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              Choosing the Right Mouthwash
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              When selecting a mouthwash, consider your specific oral health needs. If you're prone to 
              cavities, choose a fluoride-containing mouthwash. For gum health, look for antimicrobial 
              mouthwashes. If you have sensitive teeth or dry mouth, consider alcohol-free options. 
              Your dentist can recommend the most appropriate mouthwash for your individual situation.
            </p>

            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              Limitations of Mouthwash
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              While mouthwash can be beneficial, it should not replace brushing and flossing. It is a 
              supplement to, not a substitute for, proper oral hygiene practices. Mouthwash cannot remove 
              plaque that has already hardened into tartar, and it may not reach all areas of the mouth 
              as effectively as mechanical cleaning methods.
            </p>

            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              Special Considerations
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Children under the age of 6 should not use mouthwash unless directed by a dentist, as they 
              may accidentally swallow it. Pregnant women should consult their healthcare provider before 
              using mouthwash, and individuals with certain medical conditions or allergies should check 
              with their doctor or dentist before use.
            </p>

            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              Integrating Mouthwash into Your Routine
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              To get the most benefit from mouthwash, integrate it into your daily oral hygiene routine. 
              Use it after brushing and flossing, and be consistent with your usage. Remember that 
              mouthwash is most effective when used as part of a comprehensive oral care routine that 
              includes proper brushing, flossing, and regular dental checkups.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Related Articles Section */}
      <section className="py-8 sm:py-10 lg:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
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
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Link href={article.href}>
                    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 h-full border border-gray-100">
                      <h3 className="text-[22px] sm:text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#441018] transition-colors duration-200 font-heading">
                        {article.title}
                      </h3>
                      <p className="text-[16px] text-gray-600 leading-relaxed font-sans mb-4">
                        {article.description}
                      </p>
                      <div className="flex items-center text-[#441018] font-medium group-hover:translate-x-1 transition-transform duration-200">
                        Read More
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
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