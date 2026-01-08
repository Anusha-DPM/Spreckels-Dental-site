'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ToothpastePage() {
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
      title: 'Oral Hygiene for Kids',
      description: 'Teaching children proper oral hygiene habits and making dental care fun and engaging.',
      href: '/patient-education/oral-hygiene/oral-hygiene-for-kids'
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
              Toothpaste
            </h1>
            <p className="text-[16px] sm:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-sans">
              Understanding different types of toothpaste and how to select the best option for your oral health needs.
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
              What is Toothpaste?
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Toothpaste is a gel or paste used with a toothbrush to clean and maintain the health of teeth. 
              It contains various ingredients that help remove plaque, prevent cavities, freshen breath, and 
              promote overall oral health. Modern toothpaste formulations are designed to address specific 
              oral health concerns and preferences.
            </p>

            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              Key Ingredients in Toothpaste
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Most toothpastes contain several essential ingredients. Fluoride is the most important active 
              ingredient, helping to strengthen tooth enamel and prevent cavities. Abrasives like calcium 
              carbonate or silica help remove plaque and surface stains. Humectants like glycerin keep the 
              paste moist, while detergents create foam and help spread the paste throughout the mouth.
            </p>

            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              Types of Toothpaste
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              There are many types of toothpaste available to address different oral health needs. Fluoride 
              toothpaste is the most common and essential for cavity prevention. Whitening toothpaste contains 
              mild abrasives or bleaching agents to remove surface stains. Sensitive toothpaste includes 
              ingredients like potassium nitrate to reduce tooth sensitivity. Natural toothpaste uses 
              plant-based ingredients and may be fluoride-free.
            </p>

            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              Fluoride Toothpaste
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Fluoride toothpaste is recommended by dental professionals for most people. Fluoride helps 
              remineralize tooth enamel, making it more resistant to acid attacks from bacteria and sugary 
              foods. It can also reverse early signs of tooth decay. Look for toothpaste with the American 
              Dental Association (ADA) seal of approval, which ensures the product meets safety and 
              effectiveness standards.
            </p>

            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              Whitening Toothpaste
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Whitening toothpaste can help remove surface stains and brighten your smile. These products 
              typically contain mild abrasives or chemical agents like hydrogen peroxide. While they can 
              improve the appearance of your teeth, they won't change the natural color of your teeth or 
              remove deep stains. For significant whitening, professional treatments may be necessary.
            </p>

            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              Sensitive Toothpaste
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              If you experience tooth sensitivity to hot, cold, sweet, or acidic foods, sensitive toothpaste 
              may help. These products contain ingredients like potassium nitrate or strontium acetate that 
              block pain signals from reaching the nerve. It may take several weeks of consistent use to 
              notice improvement in sensitivity.
            </p>

            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              Natural Toothpaste
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Natural toothpaste uses plant-based ingredients and avoids synthetic chemicals. Common natural 
              ingredients include baking soda, coconut oil, essential oils, and herbal extracts. Some natural 
              toothpastes are fluoride-free, so check the label if you want fluoride protection. Natural 
              options may be appealing to those with sensitivities or environmental concerns.
            </p>

            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              Choosing the Right Toothpaste
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              When selecting toothpaste, consider your specific oral health needs. If you have no special 
              concerns, a fluoride toothpaste with the ADA seal is a good choice. For specific issues like 
              sensitivity, staining, or gum disease, look for toothpaste formulated to address those concerns. 
              Your dentist can recommend the most appropriate toothpaste for your individual situation.
            </p>

            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              How Much Toothpaste to Use
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              For adults, use a pea-sized amount of toothpaste, which is sufficient for effective cleaning. 
              Children under 3 should use only a smear of toothpaste about the size of a grain of rice, while 
              children 3-6 should use a pea-sized amount. Using more toothpaste than necessary doesn't improve 
              cleaning effectiveness and may increase the risk of swallowing excess fluoride.
            </p>

            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              When to Replace Toothpaste
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Toothpaste typically has a shelf life of 2-3 years when stored properly. Check the expiration 
              date on the tube, as expired toothpaste may lose effectiveness. Store toothpaste in a cool, 
              dry place and avoid exposing it to extreme temperatures. If the toothpaste changes color, 
              texture, or smell, it should be replaced.
            </p>

            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              Special Considerations
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Some people may have allergies or sensitivities to certain toothpaste ingredients. If you 
              experience irritation, burning, or other adverse reactions, try a different brand or consult 
              your dentist. Children should use age-appropriate toothpaste, and those with specific health 
              conditions should discuss toothpaste choices with their healthcare provider.
            </p>

            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              The Role of Toothpaste in Oral Health
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              While toothpaste is an important part of oral hygiene, it works best when combined with proper 
              brushing technique, regular flossing, and professional dental care. The mechanical action of 
              brushing is essential for removing plaque, and toothpaste provides additional benefits like 
              fluoride protection and fresh breath. Choose a toothpaste that meets your needs and use it 
              consistently as part of your daily oral care routine.
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