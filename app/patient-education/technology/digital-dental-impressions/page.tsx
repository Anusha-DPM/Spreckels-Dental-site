'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function DigitalDentalImpressions() {
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
              <Link href="/patient-education/technology" className="text-gray-300 hover:text-white font-semibold">
                ← Back to Technology
              </Link>
            </div>
            <h1 className="text-[27px] sm:text-4xl lg:text-6xl font-normal text-white font-heading leading-tight mb-4 sm:mb-6">
              Digital Dental Impressions
            </h1>
            <p className="text-[16px] sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-sans">
              Eliminating the need for traditional messy impression materials
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
                What are Digital Dental Impressions?
              </h2>
              
              <p className="text-[16px] text-gray-700 leading-relaxed mb-6 font-sans">
                Digital dental impressions use advanced scanning technology to create precise 3D models of your teeth and gums, eliminating the need for traditional putty-like impression materials. This technology captures detailed images of your mouth using a small, handheld scanner that creates a digital map of your dental structures.
              </p>

              <h3 className="text-[22px] sm:text-xl font-semibold text-gray-900 mb-4 font-heading">
                How Digital Impressions Work
              </h3>
              
              <p className="text-[16px] text-gray-700 leading-relaxed mb-6 font-sans">
                During a digital impression, your dentist uses a small wand-like scanner to capture thousands of images of your teeth and gums. These images are instantly combined by computer software to create a highly accurate 3D model of your mouth. The scanner is gentle and non-invasive, making the process much more comfortable than traditional impressions.
              </p>

              <h3 className="text-[22px] sm:text-xl font-semibold text-gray-900 mb-4 font-heading">
                Benefits of Digital Impressions
              </h3>
              
              <ul className="list-disc list-inside text-[16px] text-gray-700 leading-relaxed mb-6 space-y-2 font-sans">
                <li>No messy, uncomfortable impression materials</li>
                <li>More accurate than traditional impressions</li>
                <li>Immediate results and instant feedback</li>
                <li>Reduced gag reflex and discomfort</li>
                <li>Faster processing and turnaround times</li>
                <li>Better communication with dental laboratories</li>
                <li>Easier to store and share digital files</li>
              </ul>

              <h3 className="text-[22px] sm:text-xl font-semibold text-gray-900 mb-4 font-heading">
                When Digital Impressions are Used
              </h3>
              
              <p className="text-[16px] text-gray-700 leading-relaxed mb-6 font-sans">
                Digital impressions are used for a wide variety of dental procedures including crowns, bridges, veneers, dental implants, orthodontic appliances, and night guards. They provide the precise measurements needed for creating custom dental restorations that fit perfectly and look natural.
              </p>

              <h3 className="text-[22px] sm:text-xl font-semibold text-gray-900 mb-4 font-heading">
                What to Expect During the Process
              </h3>
              
              <p className="text-[16px] text-gray-700 leading-relaxed mb-6 font-sans">
                The digital impression process is quick and comfortable. Your dentist will gently move the scanner around your mouth to capture all necessary areas. You may be asked to bite down or hold certain positions briefly. The entire process typically takes only a few minutes, and you can see the 3D model being created in real-time on a computer screen.
              </p>

              <h3 className="text-[22px] sm:text-xl font-semibold text-gray-900 mb-4 font-heading">
                Accuracy and Quality
              </h3>
              
              <p className="text-[16px] text-gray-700 leading-relaxed mb-6 font-sans">
                Digital impressions are highly accurate and often more precise than traditional methods. The technology can capture details that might be missed with traditional impressions, leading to better-fitting restorations and fewer adjustments. The digital files can also be easily shared with dental laboratories for faster, more accurate fabrication of dental work.
              </p>

              <h3 className="text-[22px] sm:text-xl font-semibold text-gray-900 mb-4 font-heading">
                After Digital Impressions
              </h3>
              
              <p className="text-[16px] text-gray-700 leading-relaxed mb-6 font-sans">
                Once the digital impression is complete, your dentist can immediately review the 3D model and make any necessary adjustments. The digital file is then sent to the dental laboratory, where technicians use it to create your custom restoration. This digital workflow often results in faster turnaround times and better communication between your dentist and the laboratory.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg mt-8">
                <h4 className="text-[22px] sm:text-lg font-semibold text-blue-900 mb-2 font-heading">
                  Remember
                </h4>
                <p className="text-[16px] text-blue-800 font-sans">
                  Digital dental impressions represent a significant advancement in dental technology, making the impression process more comfortable, accurate, and efficient. This technology helps ensure that your dental restorations fit perfectly and look natural.
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
              <Link href="/patient-education/technology/cone-beam-ct-imaging">
                <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-300 border border-gray-200">
                  <h3 className="text-[22px] sm:text-xl font-semibold text-gray-900 mb-3 font-heading">Cone Beam CT Imaging</h3>
                  <p className="text-[16px] text-gray-600 font-sans">Understanding cone beam CT technology for advanced 3D imaging and precise treatment planning.</p>
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