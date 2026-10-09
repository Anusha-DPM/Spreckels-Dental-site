'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function HowToBrushAndFlossPage() {
  const relatedArticles = [
    {
      title: 'How to Prevent Cavities',
      description: 'Essential strategies and tips to prevent cavities and maintain strong, healthy teeth.',
      href: '/patient-education/oral-hygiene/how-to-prevent-cavities'
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
              How to Brush and Floss
            </h1>
            <p className="text-[16px] sm:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-sans">
              Learn the proper techniques for brushing and flossing to maintain optimal oral health 
              and prevent dental problems.
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
              Proper Brushing Technique
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Brushing your teeth properly is the foundation of good oral hygiene. Use a soft-bristled 
              toothbrush and fluoride toothpaste. Hold your toothbrush at a 45-degree angle to your gums 
              and use gentle, circular motions.
            </p>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Brush all surfaces of your teeth: the outer surfaces, inner surfaces, and chewing surfaces. 
              Don't forget to brush your tongue to remove bacteria and freshen your breath. Brush for at 
              least two minutes, twice daily.
            </p>

            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              Effective Flossing Technique
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Flossing removes plaque and food particles from between your teeth where your toothbrush 
              cannot reach. Use about 18 inches of dental floss, winding most of it around your middle 
              fingers and leaving about 1-2 inches to work with.
            </p>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Gently guide the floss between your teeth using a sawing motion. Curve the floss around 
              each tooth in a C-shape and slide it up and down against the tooth surface and under the 
              gumline. Use a fresh section of floss for each tooth.
            </p>

            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              When to Brush and Floss
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Brush your teeth at least twice a day: once in the morning and once before bed. Floss 
              at least once daily, preferably before bedtime. If you can only floss once a day, 
              nighttime is the most important time as it removes the day's accumulation of plaque.
            </p>

            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              Common Mistakes to Avoid
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Avoid brushing too hard, which can damage your gums and tooth enamel. Don't rush through 
              your brushing routine - take your time to clean all surfaces thoroughly. Don't forget to 
              replace your toothbrush every 3-4 months or when the bristles become frayed.
            </p>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              When flossing, avoid snapping the floss between your teeth, which can injure your gums. 
              Be gentle and take your time to clean between each tooth properly.
            </p>

            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              Additional Tips
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Consider using an electric toothbrush, which can be more effective at removing plaque. 
              If you have difficulty with traditional floss, try floss picks, interdental brushes, or 
              water flossers as alternatives.
            </p>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Remember that proper brushing and flossing are essential for preventing cavities, gum 
              disease, and other oral health problems. Make these habits a regular part of your daily 
              routine for a lifetime of healthy teeth and gums.
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