'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function AirAbrasion() {
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
            <div className="mb-4">
              <Link href="/patient-education/technology" className="text-[15px] sm:text-base text-gray-300 hover:text-white font-semibold">
                ← Back to Technology
              </Link>
            </div>
            <h1 className="text-[27px] sm:text-4xl lg:text-6xl font-normal text-white font-heading leading-tight mb-4 sm:mb-6">
              Air Abrasion
            </h1>
            <p className="text-[16px] sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-sans">
              A minimally invasive alternative to traditional drilling for cavity preparation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-8 sm:py-10 lg:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <h2 className="text-[27px] sm:text-2xl font-semibold text-gray-900 mb-6 font-heading">
                What is Air Abrasion?
              </h2>
              
              <p className="text-[16px] text-gray-700 leading-relaxed mb-6 font-sans">
                Air abrasion is a drill-less technique that uses a stream of tiny aluminum oxide particles propelled by compressed air to remove decay and prepare teeth for fillings. This technology allows for more conservative treatment by removing only the decayed portion of the tooth while preserving healthy tooth structure.
              </p>

              <h3 className="text-[22px] sm:text-xl font-semibold text-gray-900 mb-4 font-heading">
                How Air Abrasion Works
              </h3>
              
              <p className="text-[16px] text-gray-700 leading-relaxed mb-6 font-sans">
                The air abrasion system works by directing a fine stream of particles at the tooth surface. These particles gently remove decay and prepare the tooth for restoration. The process is precise and can be controlled to remove only the affected areas, leaving healthy tooth structure intact.
              </p>

              <h3 className="text-[22px] sm:text-xl font-semibold text-gray-900 mb-4 font-heading">
                Benefits of Air Abrasion
              </h3>
              
              <ul className="list-disc list-inside text-[16px] text-gray-700 leading-relaxed mb-6 space-y-2 font-sans">
                <li>Minimally invasive - removes less healthy tooth structure</li>
                <li>No heat, pressure, or vibration like traditional drilling</li>
                <li>Often requires no anesthesia for small cavities</li>
                <li>Reduces patient anxiety and discomfort</li>
                <li>Quieter than traditional dental drills</li>
                <li>Can be used for small cavities and surface preparation</li>
              </ul>

              <h3 className="text-[22px] sm:text-xl font-semibold text-gray-900 mb-4 font-heading">
                When Air Abrasion is Used
              </h3>
              
              <p className="text-[16px] text-gray-700 leading-relaxed mb-6 font-sans">
                Air abrasion is most effective for small to medium-sized cavities, particularly those on the chewing surfaces of teeth. It can also be used to remove old fillings, prepare teeth for sealants, and remove surface stains. However, it may not be suitable for deep cavities or those that require extensive preparation.
              </p>

              <h3 className="text-[22px] sm:text-xl font-semibold text-gray-900 mb-4 font-heading">
                What to Expect During Treatment
              </h3>
              
              <p className="text-[16px] text-gray-700 leading-relaxed mb-6 font-sans">
                During air abrasion treatment, you may feel a gentle spray of particles, similar to a fine sand. The procedure is typically painless and often requires no anesthesia. Your dentist will use a protective shield to keep the particles contained and may use a vacuum to remove the particles from your mouth.
              </p>

              <h3 className="text-[22px] sm:text-xl font-semibold text-gray-900 mb-4 font-heading">
                Limitations of Air Abrasion
              </h3>
              
              <ul className="list-disc list-inside text-[16px] text-gray-700 leading-relaxed mb-6 space-y-2 font-sans">
                <li>Not suitable for deep cavities that require extensive preparation</li>
                <li>May not be effective for removing old metal fillings</li>
                <li>Requires proper isolation to prevent particles from affecting other areas</li>
                <li>May not be covered by all dental insurance plans</li>
              </ul>

              <h3 className="text-[22px] sm:text-xl font-semibold text-gray-900 mb-4 font-heading">
                After Air Abrasion Treatment
              </h3>
              
              <p className="text-[16px] text-gray-700 leading-relaxed mb-6 font-sans">
                Recovery from air abrasion is typically quick and uneventful. Since the procedure is minimally invasive, there is usually little to no discomfort afterward. Your dentist will place a filling or other restoration to protect the prepared area and restore the tooth's function and appearance.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg mt-8">
                <h4 className="text-[22px] sm:text-lg font-semibold text-blue-900 mb-2 font-heading">
                  Remember
                </h4>
                <p className="text-[16px] text-blue-800 font-sans">
                  Air abrasion is just one of many modern dental technologies that can make your dental experience more comfortable. Your dentist will determine if this treatment is appropriate for your specific dental needs.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Articles */}
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link href="/patient-education/technology/anesthesia-wand">
                <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-300 border border-gray-200">
                  <h3 className="text-[22px] sm:text-xl font-semibold text-gray-900 mb-3 font-heading">Anesthesia Wand</h3>
                  <p className="text-[16px] text-gray-600 font-sans">Discover how the anesthesia wand provides more comfortable and precise local anesthesia delivery.</p>
                </div>
              </Link>
              <Link href="/patient-education/technology/digital-x-rays">
                <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-300 border border-gray-200">
                  <h3 className="text-[22px] sm:text-xl font-semibold text-gray-900 mb-3 font-heading">Digital X-Rays</h3>
                  <p className="text-[16px] text-gray-600 font-sans">Discover the benefits of digital X-ray technology for safer, faster, and more detailed imaging.</p>
                </div>
              </Link>
              <Link href="/patient-education/technology/intraoral-camera">
                <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-300 border border-gray-200">
                  <h3 className="text-[22px] sm:text-xl font-semibold text-gray-900 mb-3 font-heading">Intraoral Camera</h3>
                  <p className="text-[16px] text-gray-600 font-sans">Understanding how intraoral cameras provide detailed views of your mouth for better diagnosis and treatment.</p>
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