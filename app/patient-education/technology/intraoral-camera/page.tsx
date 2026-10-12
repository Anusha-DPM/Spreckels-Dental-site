'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function IntraoralCamera() {
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
              Intraoral Camera
            </h1>
            <p className="text-[16px] sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-sans">
              Detailed views of your mouth for better diagnosis and treatment
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
                What is an Intraoral Camera?
              </h2>
              
              <p className="text-[16px] text-gray-700 leading-relaxed mb-6 font-sans">
                An intraoral camera is a small, pen-like device with a tiny camera at the tip that allows your dentist to take detailed pictures of the inside of your mouth. These images are displayed on a computer screen, giving both you and your dentist a clear view of your teeth, gums, and other oral structures that might be difficult to see with the naked eye.
              </p>

              <h3 className="text-[22px] sm:text-xl font-semibold text-gray-900 mb-4 font-heading">
                How the Intraoral Camera Works
              </h3>
              
              <p className="text-[16px] text-gray-700 leading-relaxed mb-6 font-sans">
                The intraoral camera uses advanced digital technology to capture high-resolution images of your mouth. The camera is connected to a computer, and the images are displayed in real-time on a monitor. The camera can zoom in to show fine details and can capture images from different angles to provide a comprehensive view of your oral health.
              </p>

              <h3 className="text-[22px] sm:text-xl font-semibold text-gray-900 mb-4 font-heading">
                Benefits of Intraoral Camera Technology
              </h3>
              
              <ul className="list-disc list-inside text-[16px] text-gray-700 leading-relaxed mb-6 space-y-2 font-sans">
                <li>Enhanced diagnostic capabilities</li>
                <li>Better patient education and understanding</li>
                <li>Improved treatment planning</li>
                <li>Documentation of dental conditions</li>
                <li>Ability to show patients exactly what needs treatment</li>
                <li>Better communication between dentist and patient</li>
                <li>Early detection of dental problems</li>
              </ul>

              <h3 className="text-[22px] sm:text-xl font-semibold text-gray-900 mb-4 font-heading">
                When Intraoral Cameras are Used
              </h3>
              
              <p className="text-[16px] text-gray-700 leading-relaxed mb-6 font-sans">
                Intraoral cameras are used during routine dental examinations to provide a detailed view of your teeth and gums. They are particularly useful for detecting early signs of decay, gum disease, and other oral health issues. The camera can also be used to document existing conditions and track changes over time.
              </p>

              <h3 className="text-[22px] sm:text-xl font-semibold text-gray-900 mb-4 font-heading">
                What to Expect During the Process
              </h3>
              
              <p className="text-[16px] text-gray-700 leading-relaxed mb-6 font-sans">
                The intraoral camera examination is completely painless and non-invasive. Your dentist will gently move the small camera around your mouth to capture images of different areas. You'll be able to see the images on a computer screen, and your dentist can explain what they're seeing and what it means for your oral health.
              </p>

              <h3 className="text-[22px] sm:text-xl font-semibold text-gray-900 mb-4 font-heading">
                Patient Education Benefits
              </h3>
              
              <p className="text-[16px] text-gray-700 leading-relaxed mb-6 font-sans">
                One of the biggest advantages of intraoral cameras is that they help patients understand their dental health better. By seeing the actual images of their teeth and gums, patients can better understand what problems exist and why certain treatments are recommended. This visual evidence often helps patients make more informed decisions about their dental care.
              </p>

              <h3 className="text-[22px] sm:text-xl font-semibold text-gray-900 mb-4 font-heading">
                Treatment Planning and Documentation
              </h3>
              
              <p className="text-[16px] text-gray-700 leading-relaxed mb-6 font-sans">
                The detailed images captured by intraoral cameras help dentists develop more precise treatment plans. The images can be stored in your digital dental record and used to track changes over time. This documentation is valuable for monitoring the progression of dental conditions and the effectiveness of treatments.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg mt-8">
                <h4 className="text-[22px] sm:text-lg font-semibold text-blue-900 mb-2 font-heading">
                  Remember
                </h4>
                <p className="text-[16px] text-blue-800 font-sans">
                  Intraoral camera technology enhances the dental examination process by providing clear, detailed views of your oral health. This technology helps ensure that dental problems are detected early and that you fully understand your dental health and treatment options.
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
              <Link href="/patient-education/technology/cone-beam-ct-imaging">
                <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-300 border border-gray-200">
                  <h3 className="text-[22px] sm:text-xl font-semibold text-gray-900 mb-3 font-heading">Cone Beam CT Imaging</h3>
                  <p className="text-[16px] text-gray-600 font-sans">Understanding cone beam CT technology for advanced 3D imaging and precise treatment planning.</p>
                </div>
              </Link>
              <Link href="/patient-education/technology/digital-dental-impressions">
                <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-300 border border-gray-200">
                  <h3 className="text-[22px] sm:text-xl font-semibold text-gray-900 mb-3 font-heading">Digital Dental Impressions</h3>
                  <p className="text-[16px] text-gray-600 font-sans">Learn about digital impression technology that eliminates the need for traditional messy impression materials.</p>
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