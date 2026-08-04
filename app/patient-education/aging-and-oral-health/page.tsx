'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function AgingAndOralHealth() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="mb-4">
              <Link href="/patient-education" className="text-blue-600 hover:text-blue-700 font-semibold">
                ← Back to Patient Education
              </Link>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-gray-900 font-heading leading-tight mb-6">
              Aging and Oral Health
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-sans">
              Understanding how aging affects oral health and what you can do to maintain a healthy smile
            </p>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 font-heading">
                How Aging Affects Oral Health
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6 font-sans">
                As we age, our bodies undergo various changes, and our oral health is no exception. Understanding these changes and taking proactive steps can help maintain good oral health throughout your golden years.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                Common Oral Health Changes with Age
              </h3>
              
              <div className="space-y-6 mb-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 font-heading">Tooth Wear and Sensitivity</h4>
                  <p className="text-gray-700 leading-relaxed font-sans">
                    Years of chewing, grinding, and exposure to acidic foods can wear down tooth enamel, leading to increased sensitivity and a higher risk of cavities.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 font-heading">Gum Disease</h4>
                  <p className="text-gray-700 leading-relaxed font-sans">
                    The risk of gum disease increases with age, especially if proper oral hygiene hasn't been maintained throughout life.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 font-heading">Dry Mouth</h4>
                  <p className="text-gray-700 leading-relaxed font-sans">
                    Many medications taken by older adults can cause dry mouth, which increases the risk of tooth decay and gum disease.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 font-heading">Root Decay</h4>
                  <p className="text-gray-700 leading-relaxed font-sans">
                    As gums recede with age, tooth roots become exposed and are more susceptible to decay since they lack protective enamel.
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                Medications and Oral Health
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6 font-sans">
                Many medications commonly prescribed to older adults can affect oral health. Blood pressure medications, antidepressants, and pain medications can cause dry mouth, while others may increase the risk of bleeding during dental procedures.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                Maintaining Good Oral Health as You Age
              </h3>
              
              <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2 font-sans">
                <li>Brush twice daily with fluoride toothpaste</li>
                <li>Floss daily to remove plaque between teeth</li>
                <li>Use an antimicrobial mouthwash if recommended by your dentist</li>
                <li>Stay hydrated to combat dry mouth</li>
                <li>Limit sugary and acidic foods and beverages</li>
                <li>Visit your dentist regularly for check-ups and cleanings</li>
                <li>Consider using an electric toothbrush for better cleaning</li>
                <li>If you have dentures, clean them daily and remove them at night</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                Special Considerations for Seniors
              </h3>
              
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 font-heading">Dental Implants</h4>
                  <p className="text-gray-700 leading-relaxed font-sans">
                    Dental implants can be an excellent option for seniors who have lost teeth, providing stability and preventing bone loss in the jaw.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 font-heading">Dentures</h4>
                  <p className="text-gray-700 leading-relaxed font-sans">
                    Proper care and maintenance of dentures is crucial for oral health and comfort. Regular adjustments may be needed as the mouth changes with age.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 font-heading">Oral Cancer Screening</h4>
                  <p className="text-gray-700 leading-relaxed font-sans">
                    Regular oral cancer screenings become increasingly important with age, as the risk of oral cancer increases in older adults.
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                Nutrition and Oral Health
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6 font-sans">
                A balanced diet rich in vitamins and minerals is essential for maintaining oral health. Calcium and vitamin D are particularly important for strong teeth and bones, while vitamin C helps maintain healthy gums.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg mt-8">
                <h4 className="text-lg font-semibold text-blue-900 mb-2 font-heading">
                  Proactive Care
                </h4>
                <p className="text-blue-800 font-sans">
                  Don't wait for problems to arise. Regular dental check-ups and preventive care are even more important as you age. Early detection and treatment of oral health issues can prevent more serious problems down the road.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-normal text-gray-900 font-heading mb-8 text-center">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link href="/patient-education/blood-pressure-medications">
                <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-300 border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 font-heading">Blood Pressure Medications and Your Oral Health</h3>
                  <p className="text-gray-600 font-sans">How blood pressure medications can affect your dental health.</p>
                </div>
              </Link>
              <Link href="/patient-education/bad-breath">
                <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-300 border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 font-heading">Bad Breath</h3>
                  <p className="text-gray-600 font-sans">Causes, prevention, and treatment of halitosis.</p>
                </div>
              </Link>
              <Link href="/patient-education/adult-orthodontic-treatment">
                <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-300 border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 font-heading">Adult Orthodontic Treatment</h3>
                  <p className="text-gray-600 font-sans">Modern orthodontic solutions for adults seeking to improve their smile.</p>
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 