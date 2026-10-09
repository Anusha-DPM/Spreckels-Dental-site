'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function HowToPreventCavitiesPage() {
  const relatedArticles = [
    {
      title: 'How to Brush and Floss',
      description: 'Learn the proper techniques for brushing and flossing to maintain optimal oral health.',
      href: '/patient-education/oral-hygiene/how-to-brush-and-floss'
    },
    {
      title: 'Toothpaste',
      description: 'Understanding different types of toothpaste and how to select the best option for your oral health needs.',
      href: '/patient-education/oral-hygiene/toothpaste'
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
              How to Prevent Cavities
            </h1>
            <p className="text-[16px] sm:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-sans">
              Essential strategies and tips to prevent cavities and maintain strong, healthy teeth 
              for a lifetime of good oral health.
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
              Understanding Cavities
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Cavities, also known as dental caries, are permanently damaged areas in the hard surface 
              of your teeth that develop into tiny openings or holes. They are caused by a combination 
              of factors, including bacteria in your mouth, frequent snacking, sipping sugary drinks, 
              and not cleaning your teeth well.
            </p>

            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              Proper Oral Hygiene
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              The foundation of cavity prevention is maintaining excellent oral hygiene. Brush your 
              teeth at least twice daily with fluoride toothpaste, and floss daily to remove plaque 
              and food particles from between your teeth. Use proper brushing technique and replace 
              your toothbrush every 3-4 months.
            </p>

            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              Fluoride Protection
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Fluoride is a natural mineral that helps prevent cavities by making your tooth enamel 
              more resistant to acid attacks from plaque bacteria and sugars in your mouth. Use 
              fluoride toothpaste and consider fluoride treatments from your dentist if you're at 
              high risk for cavities.
            </p>

            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              Diet and Nutrition
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Limit sugary and acidic foods and beverages, as they can contribute to cavity formation. 
              Choose healthy snacks like fruits, vegetables, and dairy products. Drink plenty of water, 
              especially fluoridated water, to help wash away food particles and bacteria.
            </p>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Avoid frequent snacking throughout the day, as this gives bacteria more opportunities 
              to produce acids that attack your teeth. If you do snack, choose tooth-friendly options 
              and rinse your mouth with water afterward.
            </p>

            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              Regular Dental Checkups
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Visit your dentist regularly for professional cleanings and checkups. Your dentist can 
              detect early signs of cavities and provide preventive treatments like dental sealants 
              or fluoride varnishes. Professional cleanings remove tartar that cannot be removed by 
              brushing alone.
            </p>

            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              Dental Sealants
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Dental sealants are thin, protective coatings applied to the chewing surfaces of your 
              back teeth. They seal off grooves and depressions that are difficult to clean with a 
              toothbrush, providing an extra layer of protection against cavities.
            </p>

            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              Additional Prevention Tips
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Consider using an antimicrobial mouthwash to reduce bacteria in your mouth. Chew sugar-free 
              gum after meals to stimulate saliva production, which helps neutralize acids and wash away 
              food particles. If you have dry mouth, talk to your dentist about treatments to increase 
              saliva flow.
            </p>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Remember that prevention is always better than treatment. By following these guidelines 
              and maintaining good oral hygiene habits, you can significantly reduce your risk of 
              developing cavities and maintain a healthy, beautiful smile.
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