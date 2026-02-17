'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function OrthodonticsPage() {
  const categories = [
    { name: 'Educational Videos', href: '/patient-education/educational-videos' },
    { name: 'Cosmetic & General Dentistry', href: '/patient-education/cosmetic-general-dentistry' },
    { name: 'Emergency Care', href: '/patient-education/emergency-care' },
    { name: 'Endodontics', href: '/patient-education/endodontics' },
    { name: 'Implant Dentistry', href: '/patient-education/implant-dentistry' },
    { name: 'Oral Health', href: '/patient-education/oral-health' },
    { name: 'Oral Hygiene', href: '/patient-education/oral-hygiene' },
    { name: 'Oral Surgery', href: '/patient-education/oral-surgery' },
    { name: 'Orthodontics', href: '/patient-education/orthodontics' },
    { name: 'Pediatric Dentistry', href: '/patient-education/pediatric-dentistry' },
    { name: 'Periodontal Therapy', href: '/patient-education/periodontal-therapy' },
    { name: 'Technology', href: '/patient-education/technology' }
  ]

  const relatedArticles = [
    {
      title: 'Endodontics',
      description: 'Understanding root canal treatments and other endodontic procedures.',
      href: '/patient-education/endodontics'
    },
    {
      title: 'Implant Dentistry',
      description: 'Comprehensive information about dental implants and their benefits.',
      href: '/patient-education/implant-dentistry'
    },
    {
      title: 'Oral Health',
      description: 'Essential information about maintaining optimal oral health.',
      href: '/patient-education/oral-health'
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
              Orthodontics
            </h1>
            <p className="text-[16px] sm:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-sans">
              Understanding early orthodontic treatment and how it can benefit your child's dental development 
              and overall oral health.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Standardized Categories */}
      <section className="py-8 sm:py-10 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-0"
          >
            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6 sm:mb-8 text-center">
              Browse by Category
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Link href={category.href}>
                    <button className="px-6 py-3 bg-white border-2 border-gray-200 rounded-lg text-gray-700 hover:border-blue-500 hover:text-blue-600 transition-all duration-200 font-semibold text-[15px] sm:text-base">
                      {category.name}
                    </button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="pt-0 pb-8 sm:pb-10 lg:pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6">
              What is Early Orthodontic Treatment?
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Early orthodontic treatment, also known as interceptive orthodontics, is designed to address 
              dental and jaw alignment issues while a child is still growing. This proactive approach can 
              prevent more serious orthodontic problems from developing later and may reduce the need for 
              more extensive treatment in the future.
            </p>

            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              When Should Early Treatment Begin?
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              The American Association of Orthodontists recommends that children have their first orthodontic 
              evaluation by age 7. At this age, the first permanent molars and incisors have typically erupted, 
              allowing orthodontists to assess the relationship between the upper and lower jaws and identify 
              any developing problems.
            </p>

            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              Common Issues Treated with Early Orthodontics
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Early orthodontic treatment can address various issues including crossbites, where the upper 
              and lower jaws don't align properly; severe crowding or spacing problems; protruding front 
              teeth that are at risk of injury; and habits like thumb sucking that can affect jaw development. 
              Treatment may also help guide jaw growth and create space for permanent teeth.
            </p>

            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              Benefits of Early Treatment
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Early orthodontic treatment offers several advantages. It can prevent more serious problems 
              from developing, reduce the need for tooth extractions later, improve facial symmetry and 
              appearance, enhance self-esteem, and make future orthodontic treatment shorter and less 
              complex. Early intervention can also address speech problems and improve chewing function.
            </p>

            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              Types of Early Orthodontic Appliances
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Various appliances may be used in early orthodontic treatment. Palatal expanders can widen 
              the upper jaw to create more space for teeth. Space maintainers preserve space for permanent 
              teeth when baby teeth are lost prematurely. Partial braces may be used to correct specific 
              alignment issues, while habit appliances can help break thumb sucking or tongue thrusting habits.
            </p>

            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              Treatment Duration and Process
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Early orthodontic treatment typically lasts 6-18 months, depending on the specific issues 
              being addressed. After the active phase of early treatment, there is usually a rest period 
              during which the remaining permanent teeth erupt. A second phase of treatment may be needed 
              during adolescence to complete the alignment process.
            </p>

            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              What to Expect During Treatment
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              During early orthodontic treatment, regular visits to the orthodontist are necessary to 
              monitor progress and make adjustments. Children may experience some initial discomfort when 
              appliances are first placed or adjusted, but this typically subsides quickly. Good oral 
              hygiene is especially important during treatment to prevent cavities and gum problems.
            </p>

            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              Parental Involvement
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Parents play a crucial role in the success of early orthodontic treatment. They should ensure 
              their child follows the orthodontist's instructions regarding appliance wear and care, maintain 
              good oral hygiene habits, and attend all scheduled appointments. Encouragement and positive 
              reinforcement can help children adapt to their orthodontic appliances.
            </p>

            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              When Early Treatment May Not Be Necessary
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Not all children need early orthodontic treatment. Some orthodontic issues are best addressed 
              after all permanent teeth have erupted. Your orthodontist will evaluate your child's specific 
              situation and recommend the most appropriate timing for treatment. In some cases, monitoring 
              growth and development may be the best approach.
            </p>

            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              Long-term Benefits
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              The benefits of early orthodontic treatment extend well beyond childhood. Proper jaw alignment 
              and tooth positioning contribute to better oral health throughout life, reducing the risk of 
              cavities, gum disease, and jaw problems. A properly aligned smile can also boost confidence 
              and improve overall quality of life.
            </p>

            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              Consultation and Evaluation
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              If you're considering early orthodontic treatment for your child, schedule a consultation 
              with an orthodontist. During this visit, the orthodontist will conduct a thorough examination, 
              take X-rays and photographs, and discuss treatment options and timing. This evaluation will 
              help determine if early treatment is beneficial for your child's specific situation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 sm:py-10 lg:py-12" style={{ backgroundColor: '#441018' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-[27px] sm:text-3xl font-normal text-white font-heading mb-6">
              Ready to Learn More About Orthodontics?
            </h2>
            <p className="text-[16px] sm:text-lg text-gray-200 mb-8 max-w-2xl mx-auto font-sans">
              Schedule a consultation to discuss orthodontic treatment options and determine the best 
              approach for your child's dental development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/appointment-request"
                className="px-8 py-4 bg-[#441018] text-white border-2 border-white rounded-lg hover:bg-[#5a1a2a] transition-colors duration-200 font-semibold cursor-pointer inline-block text-center text-[15px] sm:text-base"
              >
                Schedule Consultation
              </a>
              <a 
                href="/contact"
                className="px-8 py-4 bg-white text-[#441018] border-2 border-[#441018] rounded-lg hover:bg-[#441018] hover:text-white transition-colors duration-200 font-semibold cursor-pointer inline-block text-center text-[15px] sm:text-base"
              >
                Learn More About Orthodontics
              </a>
            </div>
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
