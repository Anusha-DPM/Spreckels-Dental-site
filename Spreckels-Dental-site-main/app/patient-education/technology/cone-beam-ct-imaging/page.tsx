'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function ConeBeamCTImaging() {
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
              Cone Beam CT Imaging
            </h1>
            <p className="text-[16px] sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-sans">
              Advanced 3D imaging for precise treatment planning
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
                What is Cone Beam CT Imaging?
              </h2>
              
              <p className="text-[16px] text-gray-700 leading-relaxed mb-6 font-sans">
                Cone Beam Computed Tomography (CBCT) is an advanced imaging technology that provides three-dimensional views of the teeth, jaw, and surrounding structures. Unlike traditional two-dimensional X-rays, CBCT creates detailed 3D images that allow dentists to see the exact position and condition of teeth, bone, and soft tissues.
              </p>

              <h3 className="text-[22px] sm:text-xl font-semibold text-gray-900 mb-4 font-heading">
                How Cone Beam CT Works
              </h3>
              
              <p className="text-[16px] text-gray-700 leading-relaxed mb-6 font-sans">
                During a CBCT scan, a cone-shaped X-ray beam rotates around your head, capturing multiple images from different angles. A computer then combines these images to create a detailed 3D model of your oral structures. The entire process takes only a few seconds and provides comprehensive information about your dental anatomy.
              </p>

              <h3 className="text-[22px] sm:text-xl font-semibold text-gray-900 mb-4 font-heading">
                Benefits of Cone Beam CT Imaging
              </h3>
              
              <ul className="list-disc list-inside text-[16px] text-gray-700 leading-relaxed mb-6 space-y-2 font-sans">
                <li>Detailed 3D visualization of dental structures</li>
                <li>More accurate diagnosis and treatment planning</li>
                <li>Reduced radiation exposure compared to medical CT scans</li>
                <li>Better visualization for complex procedures</li>
                <li>Improved precision for implant placement</li>
                <li>Enhanced ability to detect hidden problems</li>
              </ul>

              <h3 className="text-[22px] sm:text-xl font-semibold text-gray-900 mb-4 font-heading">
                When Cone Beam CT is Used
              </h3>
              
              <p className="text-[16px] text-gray-700 leading-relaxed mb-6 font-sans">
                CBCT imaging is particularly valuable for complex dental procedures such as dental implant placement, orthodontic treatment planning, root canal therapy, and oral surgery. It's also useful for diagnosing TMJ disorders, evaluating impacted teeth, and planning treatment for sleep apnea.
              </p>

              <h3 className="text-[22px] sm:text-xl font-semibold text-gray-900 mb-4 font-heading">
                What to Expect During the Scan
              </h3>
              
              <p className="text-[16px] text-gray-700 leading-relaxed mb-6 font-sans">
                The CBCT scan is quick and painless. You'll be positioned in the scanner, and you'll need to remain still for about 10-30 seconds while the machine rotates around your head. The scanner is open, so you won't feel claustrophobic. No special preparation is required, and you can return to normal activities immediately after the scan.
              </p>

              <h3 className="text-[22px] sm:text-xl font-semibold text-gray-900 mb-4 font-heading">
                Safety and Radiation Exposure
              </h3>
              
              <p className="text-[16px] text-gray-700 leading-relaxed mb-6 font-sans">
                CBCT uses significantly less radiation than traditional medical CT scans. The radiation exposure is comparable to a few traditional dental X-rays. The technology is designed with safety in mind, and the benefits of the detailed information it provides often outweigh the minimal radiation exposure.
              </p>

              <h3 className="text-[22px] sm:text-xl font-semibold text-gray-900 mb-4 font-heading">
                How Results Are Used
              </h3>
              
              <p className="text-[16px] text-gray-700 leading-relaxed mb-6 font-sans">
                The 3D images from CBCT allow your dentist to see your dental structures from any angle and make precise measurements. This information is invaluable for planning complex treatments, ensuring optimal results, and avoiding potential complications. The detailed images can also be shared with specialists if needed.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg mt-8">
                <h4 className="text-[22px] sm:text-lg font-semibold text-blue-900 mb-2 font-heading">
                  Remember
                </h4>
                <p className="text-[16px] text-blue-800 font-sans">
                  Cone Beam CT imaging represents the cutting edge of dental diagnostic technology. While not needed for every dental visit, it provides invaluable information for complex treatments and helps ensure the best possible outcomes.
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
              <Link href="/patient-education/technology/digital-x-rays">
                <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-300 border border-gray-200">
                  <h3 className="text-[22px] sm:text-xl font-semibold text-gray-900 mb-3 font-heading">Digital X-Rays</h3>
                  <p className="text-[16px] text-gray-600 font-sans">Discover the benefits of digital X-ray technology for safer, faster, and more detailed imaging.</p>
                </div>
              </Link>
              <Link href="/patient-education/technology/digital-dental-impressions">
                <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-300 border border-gray-200">
                  <h3 className="text-[22px] sm:text-xl font-semibold text-gray-900 mb-3 font-heading">Digital Dental Impressions</h3>
                  <p className="text-[16px] text-gray-600 font-sans">Learn about digital impression technology that eliminates the need for traditional messy impression materials.</p>
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