'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function AnesthesiaWand() {
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
              Anesthesia Wand
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-sans">
              Innovative pain-free injection technology for comfortable dental procedures
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
                What is the Anesthesia Wand?
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6 font-sans">
                The Anesthesia Wand is a revolutionary computer-controlled local anesthesia delivery system that provides a more comfortable and precise injection experience. This innovative technology helps reduce dental anxiety by making the injection process virtually painless.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                How the Anesthesia Wand Works
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6 font-sans">
                The Anesthesia Wand uses computer-controlled flow rate technology to deliver anesthetic at a slow, steady pace. This controlled delivery helps minimize the pressure and discomfort typically associated with traditional syringe injections. The wand also features a vibrating tip that helps distract from the injection sensation.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                Benefits of the Anesthesia Wand
              </h3>
              
              <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2 font-sans">
                <li>Virtually painless injections</li>
                <li>Computer-controlled flow rate for consistent delivery</li>
                <li>Vibrating tip helps distract from injection sensation</li>
                <li>More precise anesthetic placement</li>
                <li>Reduces dental anxiety and fear</li>
                <li>Faster onset of anesthesia</li>
                <li>More predictable results</li>
                <li>Comfortable for patients of all ages</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                Who Can Benefit from the Anesthesia Wand?
              </h3>
              
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 font-heading">Patients with Dental Anxiety</h4>
                  <p className="text-gray-700 leading-relaxed font-sans">
                    The painless injection experience helps reduce fear and anxiety about dental procedures.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 font-heading">Children</h4>
                  <p className="text-gray-700 leading-relaxed font-sans">
                    Kids often fear needles, and the Anesthesia Wand makes dental visits much more comfortable for them.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 font-heading">Patients with Sensitive Gums</h4>
                  <p className="text-gray-700 leading-relaxed font-sans">
                    The gentle delivery system is ideal for patients with sensitive oral tissues.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 font-heading">Complex Procedures</h4>
                  <p className="text-gray-700 leading-relaxed font-sans">
                    For procedures requiring multiple injections, the Anesthesia Wand provides consistent comfort.
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                What to Expect During Treatment
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6 font-sans">
                When using the Anesthesia Wand, you'll feel a gentle vibration and a slow, steady flow of anesthetic. The injection typically feels like a light pressure rather than a sharp pinch. The anesthetic takes effect quickly, and you'll be ready for your dental procedure in just a few minutes.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                Safety and Effectiveness
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6 font-sans">
                The Anesthesia Wand is FDA-approved and has been extensively tested for safety and effectiveness. It uses the same anesthetic medications as traditional injections but delivers them in a more controlled and comfortable manner. The system also includes safety features to prevent over-delivery of anesthetic.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                Availability
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6 font-sans">
                Not all dental offices have the Anesthesia Wand technology. If you're interested in experiencing this pain-free injection method, ask your dentist if they offer this option. Many modern dental practices are adopting this technology to improve patient comfort.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg mt-8">
                <h4 className="text-lg font-semibold text-blue-900 mb-2 font-heading">
                  Experience the Difference
                </h4>
                <p className="text-blue-800 font-sans">
                  The Anesthesia Wand represents a significant advancement in dental comfort technology. If you've been avoiding dental treatment due to fear of injections, this innovative system may be the solution you've been looking for.
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
              <Link href="/patient-education/air-abrasion">
                <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-300 border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 font-heading">Air Abrasion</h3>
                  <p className="text-gray-600 font-sans">A modern, minimally invasive alternative to traditional dental drilling.</p>
                </div>
              </Link>
              <Link href="/patient-education/antibiotic-premedication">
                <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-300 border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 font-heading">Antibiotic Premedication</h3>
                  <p className="text-gray-600 font-sans">Understanding when and why antibiotics are needed before dental procedures.</p>
                </div>
              </Link>
              <Link href="/patient-education/apicoectomy">
                <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-300 border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 font-heading">Apicoectomy</h3>
                  <p className="text-gray-600 font-sans">A surgical procedure to treat persistent root canal infections.</p>
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