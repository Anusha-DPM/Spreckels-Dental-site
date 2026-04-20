'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function AirAbrasion() {
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
              Air Abrasion
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-sans">
              A modern, minimally invasive alternative to traditional dental drilling
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
                What is Air Abrasion?
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6 font-sans">
                Air abrasion is a modern dental technique that uses a stream of fine aluminum oxide particles propelled by compressed air to remove decay and prepare teeth for fillings. This technology offers a more comfortable alternative to traditional dental drilling for many patients.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                How Air Abrasion Works
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6 font-sans">
                The air abrasion system works by directing a focused stream of tiny aluminum oxide particles at the tooth surface. These particles gently remove decayed tooth structure without the heat, vibration, and noise associated with traditional dental drills.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                Benefits of Air Abrasion
              </h3>
              
              <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2 font-sans">
                <li>No heat, vibration, or noise like traditional drilling</li>
                <li>More comfortable for patients with dental anxiety</li>
                <li>Preserves more healthy tooth structure</li>
                <li>Often eliminates the need for local anesthesia</li>
                <li>Faster treatment time for small cavities</li>
                <li>Reduces the risk of micro-cracks in teeth</li>
                <li>Can be used for removing old fillings and sealants</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                When Air Abrasion is Used
              </h3>
              
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 font-heading">Small Cavities</h4>
                  <p className="text-gray-700 leading-relaxed font-sans">
                    Air abrasion is most effective for treating small cavities that haven't reached the deeper layers of the tooth.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 font-heading">Removing Old Fillings</h4>
                  <p className="text-gray-700 leading-relaxed font-sans">
                    It can be used to remove old composite fillings or sealants without damaging the surrounding tooth structure.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 font-heading">Tooth Preparation</h4>
                  <p className="text-gray-700 leading-relaxed font-sans">
                    Preparing teeth for bonding procedures or other cosmetic treatments.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 font-heading">Diagnostic Tool</h4>
                  <p className="text-gray-700 leading-relaxed font-sans">
                    Sometimes used to help diagnose hidden cavities by removing surface stains and revealing underlying decay.
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                Limitations of Air Abrasion
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6 font-sans">
                While air abrasion is an excellent tool for many dental procedures, it's not suitable for all cases. Deep cavities, large fillings, or procedures requiring extensive tooth preparation may still require traditional drilling. Your dentist will determine if air abrasion is appropriate for your specific situation.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                What to Expect During Treatment
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6 font-sans">
                During air abrasion treatment, you'll feel a gentle stream of air and particles on your tooth. The sensation is similar to having your teeth cleaned with a water pick. Most patients find it much more comfortable than traditional drilling, and local anesthesia is usually not necessary.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                Safety and Precautions
              </h3>
              
              <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2 font-sans">
                <li>Protective eyewear is worn to prevent particles from entering the eyes</li>
                <li>A rubber dam or other isolation technique may be used to protect surrounding teeth</li>
                <li>The procedure is performed with precision to avoid removing healthy tooth structure</li>
                <li>Air abrasion is not suitable for patients with certain respiratory conditions</li>
              </ul>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg mt-8">
                <h4 className="text-lg font-semibold text-blue-900 mb-2 font-heading">
                  Consultation
                </h4>
                <p className="text-blue-800 font-sans">
                  If you're interested in air abrasion treatment, discuss it with your dentist. They can evaluate your specific dental needs and determine if this modern technique is right for you.
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
              <Link href="/patient-education/anesthesia-wand">
                <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-300 border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 font-heading">Anesthesia Wand</h3>
                  <p className="text-gray-600 font-sans">Learn about this innovative pain-free injection technology.</p>
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