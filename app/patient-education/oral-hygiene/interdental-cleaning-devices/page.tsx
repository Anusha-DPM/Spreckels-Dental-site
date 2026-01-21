'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function InterdentalCleaningDevicesPage() {
  const relatedArticles = [
    {
      title: 'How to Brush and Floss',
      description: 'Learn the proper techniques for brushing and flossing to maintain optimal oral health.',
      href: '/patient-education/oral-hygiene/how-to-brush-and-floss'
    },
    {
      title: 'How to Prevent Cavities',
      description: 'Essential strategies and tips to prevent cavities and maintain strong, healthy teeth.',
      href: '/patient-education/oral-hygiene/how-to-prevent-cavities'
    },
    {
      title: 'Mouthwash',
      description: 'The role of mouthwash in oral hygiene and how to choose the right product for your needs.',
      href: '/patient-education/oral-hygiene/mouthwash'
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
              Interdental Cleaning Devices
            </h1>
            <p className="text-[16px] sm:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-sans">
              Understanding the different types of interdental cleaning devices and how to use them 
              effectively for optimal oral hygiene.
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
              Types of Interdental Cleaning Devices
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Interdental cleaning devices are designed to clean between your teeth where your toothbrush 
              cannot reach. These devices help remove plaque and food particles from the spaces between 
              your teeth, reducing your risk of cavities and gum disease.
            </p>

            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              Dental Floss
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Traditional dental floss is the most common interdental cleaning device. It comes in various 
              forms including waxed, unwaxed, flavored, and tape floss. Waxed floss slides more easily 
              between teeth, while unwaxed floss may provide better cleaning action. Choose the type that 
              works best for your teeth spacing and personal preference.
            </p>

            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              Floss Picks
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Floss picks are convenient alternatives to traditional floss. They consist of a small piece 
              of floss stretched between two prongs on a plastic handle. Floss picks are easy to use and 
              can be particularly helpful for people with limited dexterity or those who find traditional 
              flossing difficult.
            </p>

            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              Interdental Brushes
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Interdental brushes are small, cone-shaped brushes designed to clean between teeth. They come 
              in various sizes to fit different spaces between teeth. These brushes are especially useful 
              for people with larger gaps between their teeth, dental bridges, or braces. They can be more 
              effective than floss for cleaning around dental work.
            </p>

            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              Water Flossers
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Water flossers use a stream of pressurized water to remove plaque and food particles from 
              between teeth and along the gumline. They are particularly beneficial for people with braces, 
              dental implants, or those who have difficulty using traditional floss. Water flossers can also 
              help reduce gingivitis and improve gum health.
            </p>

            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              How to Choose the Right Device
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              The best interdental cleaning device depends on your individual needs. Consider factors such 
              as the spacing between your teeth, any dental work you have, your dexterity, and personal 
              preference. Your dentist or dental hygienist can recommend the most appropriate device for 
              your specific situation.
            </p>

            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              Proper Usage Techniques
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Regardless of which device you choose, proper technique is essential for effective cleaning. 
              Be gentle to avoid damaging your gums, and make sure to clean between all teeth, including 
              the back teeth. Use the device at least once daily, preferably before bedtime, to remove 
              the day's accumulation of plaque and food particles.
            </p>

            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              When to Replace Your Device
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Replace interdental brushes when the bristles become worn or bent. For water flossers, 
              replace the tip every 3-6 months or as recommended by the manufacturer. Traditional floss 
              and floss picks are disposable and should be used only once. Regular replacement ensures 
              optimal cleaning effectiveness and prevents the spread of bacteria.
            </p>

            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              Benefits of Interdental Cleaning
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Regular use of interdental cleaning devices can significantly improve your oral health by 
              reducing plaque buildup, preventing cavities between teeth, and reducing the risk of gum 
              disease. These devices complement your regular brushing routine and help maintain a healthy, 
              beautiful smile.
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