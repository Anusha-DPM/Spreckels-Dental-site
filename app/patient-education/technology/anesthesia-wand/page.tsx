'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function AnesthesiaWand() {
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
              Anesthesia Wand
            </h1>
            <p className="text-[16px] sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-sans">
              More comfortable and precise local anesthesia delivery
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
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 font-heading">
                What is the Anesthesia Wand?
              </h2>
              
              <p className="text-[16px] text-gray-700 leading-relaxed mb-6 font-sans">
                The anesthesia wand is a computer-controlled local anesthesia delivery system that provides a more comfortable and precise way to administer local anesthesia. Unlike traditional syringes, the wand delivers anesthesia at a controlled rate and pressure, making the injection process much more comfortable for patients.
              </p>

              <h3 className="text-[22px] sm:text-xl font-semibold text-gray-900 mb-4 font-heading">
                How the Anesthesia Wand Works
              </h3>
              
              <p className="text-[16px] text-gray-700 leading-relaxed mb-6 font-sans">
                The anesthesia wand uses a computer-controlled system to deliver local anesthesia at a slow, steady rate. This controlled delivery helps minimize the pressure and discomfort typically associated with traditional syringe injections. The wand also provides tactile feedback to the dentist, allowing for more precise placement of the anesthetic.
              </p>

              <h3 className="text-[22px] sm:text-xl font-semibold text-gray-900 mb-4 font-heading">
                Benefits of the Anesthesia Wand
              </h3>
              
              <ul className="list-disc list-inside text-[16px] text-gray-700 leading-relaxed mb-6 space-y-2 font-sans">
                <li>More comfortable injection experience</li>
                <li>Reduced anxiety and fear associated with needles</li>
                <li>Controlled delivery rate prevents tissue damage</li>
                <li>More precise placement of anesthetic</li>
                <li>Reduced post-injection discomfort</li>
                <li>Better patient experience overall</li>
              </ul>

              <h3 className="text-[22px] sm:text-xl font-semibold text-gray-900 mb-4 font-heading">
                What to Expect During Treatment
              </h3>
              
              <p className="text-[16px] text-gray-700 leading-relaxed mb-6 font-sans">
                When using the anesthesia wand, you'll notice that the injection feels different from traditional methods. The anesthetic is delivered slowly and steadily, which typically results in less discomfort. The wand itself looks different from a traditional syringe - it's more like a pen-like device that the dentist holds and controls.
              </p>

              <h3 className="text-[22px] sm:text-xl font-semibold text-gray-900 mb-4 font-heading">
                Who Can Benefit from the Anesthesia Wand
              </h3>
              
              <p className="text-[16px] text-gray-700 leading-relaxed mb-6 font-sans">
                The anesthesia wand is beneficial for all patients, but it's particularly helpful for those who experience anxiety about dental injections or have had uncomfortable experiences with traditional anesthesia delivery. It's especially useful for children and patients with needle phobias.
              </p>

              <h3 className="text-[22px] sm:text-xl font-semibold text-gray-900 mb-4 font-heading">
                Safety and Effectiveness
              </h3>
              
              <p className="text-[16px] text-gray-700 leading-relaxed mb-6 font-sans">
                The anesthesia wand is designed with safety in mind. The computer-controlled delivery system ensures that the anesthetic is administered at the correct rate and pressure, reducing the risk of tissue damage or other complications. The system also provides feedback to the dentist, ensuring proper placement and delivery.
              </p>

              <h3 className="text-[22px] sm:text-xl font-semibold text-gray-900 mb-4 font-heading">
                After Treatment
              </h3>
              
              <p className="text-[16px] text-gray-700 leading-relaxed mb-6 font-sans">
                Recovery from anesthesia administered with the wand is typically the same as with traditional methods. However, many patients report less post-injection discomfort and a more positive overall experience. The numbness will wear off gradually, and you can resume normal activities once the anesthetic has completely worn off.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg mt-8">
                <h4 className="text-[22px] sm:text-lg font-semibold text-blue-900 mb-2 font-heading">
                  Remember
                </h4>
                <p className="text-[16px] text-blue-800 font-sans">
                  The anesthesia wand is just one example of how modern dental technology is making dental procedures more comfortable and less anxiety-provoking. If you're concerned about dental injections, talk to your dentist about this option.
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
              <Link href="/patient-education/technology/air-abrasion">
                <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-300 border border-gray-200">
                  <h3 className="text-[22px] sm:text-xl font-semibold text-gray-900 mb-3 font-heading">Air Abrasion</h3>
                  <p className="text-[16px] text-gray-600 font-sans">Learn about air abrasion technology, a minimally invasive alternative to traditional drilling for cavity preparation.</p>
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