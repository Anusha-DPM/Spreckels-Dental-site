'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function AgingAndOralHealthPage() {
  const relatedArticles = [
    {
      title: 'Antibiotic Premedication',
      description: 'Learn about when and why antibiotic premedication is necessary before dental procedures.',
      href: '/patient-education/oral-health/antibiotic-premedication'
    },
    {
      title: 'Bad Breath',
      description: 'Understanding the causes of bad breath and effective strategies for maintaining fresh breath.',
      href: '/patient-education/oral-health/bad-breath'
    },
    {
      title: 'Blood Pressure Medications and Your Oral Health',
      description: 'How blood pressure medications can affect your oral health and what you should know.',
      href: '/patient-education/oral-health/blood-pressure-medications-and-your-oral-health'
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
              Aging and Oral Health
            </h1>
            <p className="text-[16px] sm:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-sans">
              Understanding how aging affects oral health and what you can do to maintain a healthy smile 
              as you get older.
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
              How Aging Affects Oral Health
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              As we age, our bodies undergo various changes that can impact oral health. Understanding 
              these changes and taking proactive steps can help maintain a healthy smile throughout 
              your golden years.
            </p>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Common Oral Health Changes with Age
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Several factors contribute to oral health changes as we age:
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Natural Wear and Tear
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Years of chewing, grinding, and general use can cause teeth to wear down, become more 
              sensitive, or develop cracks. Enamel naturally thins with age, making teeth more 
              susceptible to decay and sensitivity.
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Gum Recession
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Gum tissue naturally recedes with age, exposing more of the tooth root. This can lead 
              to increased sensitivity and a higher risk of root decay. Gum recession can also make 
              teeth appear longer and affect the overall appearance of your smile.
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Dry Mouth
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Many medications commonly prescribed to older adults can cause dry mouth (xerostomia). 
              Reduced saliva production increases the risk of tooth decay, gum disease, and oral 
              infections. Saliva helps neutralize acids and wash away food particles and bacteria.
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Changes in Taste and Smell
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Aging can affect taste buds and sense of smell, potentially leading to changes in 
              eating habits. This might result in consuming more sugary foods or neglecting proper 
              nutrition, both of which can impact oral health.
            </p>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Age-Related Oral Health Conditions
            </h3>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Periodontal Disease
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Gum disease becomes more common with age and can lead to tooth loss if left untreated. 
              Regular dental checkups and proper oral hygiene are crucial for preventing and managing 
              periodontal disease.
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Root Decay
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              As gums recede, the root surface becomes exposed and vulnerable to decay. Root decay 
              can progress quickly and may require more extensive treatment than regular cavities.
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Oral Cancer
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              The risk of oral cancer increases with age. Regular dental checkups include oral cancer 
              screenings, which are essential for early detection and successful treatment.
            </p>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Maintaining Oral Health as You Age
            </h3>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Regular Dental Checkups
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Maintain regular dental visits, typically every six months, or as recommended by your 
              dentist. These visits allow for early detection and treatment of oral health issues 
              before they become more serious.
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Proper Oral Hygiene
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Continue with thorough brushing twice daily and daily flossing. Consider using an 
              electric toothbrush if manual dexterity becomes an issue. Your dentist can recommend 
              products specifically designed for sensitive teeth or dry mouth.
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Address Dry Mouth
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              If you experience dry mouth, discuss it with both your dentist and physician. Stay 
              hydrated, use sugar-free gum or lozenges to stimulate saliva production, and consider 
              using a humidifier at night.
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Maintain a Healthy Diet
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              A balanced diet rich in vitamins and minerals supports overall health, including oral 
              health. Limit sugary and acidic foods and beverages that can contribute to tooth decay.
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Quit Smoking
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Smoking significantly increases the risk of oral cancer, gum disease, and tooth loss. 
              It's never too late to quit, and your dentist can provide resources and support.
            </p>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Special Considerations for Older Adults
            </h3>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Medication Management
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Keep your dentist informed about all medications you're taking, as many can affect 
              oral health. Some medications may require special precautions before dental procedures.
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Accessibility and Comfort
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              If mobility or dexterity issues make oral hygiene challenging, consider adaptive 
              devices or ask your dentist for recommendations. Many dental offices are equipped 
              to accommodate patients with special needs.
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Financial Planning
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Dental care is an important investment in your overall health. Many dental offices 
              offer payment plans or can help you understand your insurance coverage for various 
              treatments.
            </p>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              The Connection Between Oral and Overall Health
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Research continues to show strong connections between oral health and overall health. 
              Poor oral health has been linked to various systemic conditions including heart disease, 
              diabetes, and respiratory infections. Maintaining good oral hygiene and regular dental 
              care becomes even more important as we age.
            </p>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              When to Seek Professional Care
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Don't hesitate to contact your dentist if you experience:
            </p>
            <ul className="list-disc pl-6 text-[16px] text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li>Persistent tooth pain or sensitivity</li>
              <li>Bleeding or swollen gums</li>
              <li>Loose teeth</li>
              <li>Changes in the way your teeth fit together</li>
              <li>Sores or lumps in your mouth that don't heal</li>
              <li>Difficulty chewing or swallowing</li>
              <li>Persistent bad breath</li>
            </ul>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Conclusion
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Aging doesn't have to mean declining oral health. With proper care, regular dental 
              visits, and attention to changing needs, you can maintain a healthy, functional smile 
              throughout your life. Your dental team is here to support you in achieving and 
              maintaining optimal oral health at every stage of life.
            </p>
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