'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function DigitalXRays() {
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
              Digital X-Rays
            </h1>
            <p className="text-[16px] sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-sans">
              Safer, faster, and more detailed imaging technology
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
                What are Digital X-Rays?
              </h2>
              
              <p className="text-[16px] text-gray-700 leading-relaxed mb-6 font-sans">
                Digital X-rays use electronic sensors instead of traditional film to capture images of your teeth and jaw. This technology provides immediate, high-quality images that can be viewed on a computer screen, enhanced, and stored electronically. Digital X-rays offer significant advantages over traditional film X-rays in terms of safety, speed, and image quality.
              </p>

              <h3 className="text-[22px] sm:text-xl font-semibold text-gray-900 mb-4 font-heading">
                How Digital X-Rays Work
              </h3>
              
              <p className="text-[16px] text-gray-700 leading-relaxed mb-6 font-sans">
                Digital X-rays use a small sensor that is placed in your mouth to capture the image. The sensor is connected to a computer, and the X-ray image appears instantly on the screen. The technology uses much less radiation than traditional film X-rays while providing clearer, more detailed images that can be easily manipulated and enhanced for better diagnosis.
              </p>

              <h3 className="text-[22px] sm:text-xl font-semibold text-gray-900 mb-4 font-heading">
                Benefits of Digital X-Rays
              </h3>
              
              <ul className="list-disc list-inside text-[16px] text-gray-700 leading-relaxed mb-6 space-y-2 font-sans">
                <li>Reduced radiation exposure (up to 90% less than traditional X-rays)</li>
                <li>Immediate results - no waiting for film development</li>
                <li>Higher quality images with better detail</li>
                <li>Ability to enhance and zoom images for better diagnosis</li>
                <li>Easy storage and sharing of images</li>
                <li>No need for chemical processing</li>
                <li>Environmentally friendly - no film or chemicals</li>
              </ul>

              <h3 className="text-[22px] sm:text-xl font-semibold text-gray-900 mb-4 font-heading">
                When Digital X-Rays are Used
              </h3>
              
              <p className="text-[16px] text-gray-700 leading-relaxed mb-6 font-sans">
                Digital X-rays are used for the same diagnostic purposes as traditional X-rays, including detecting cavities, evaluating bone health, checking for impacted teeth, and monitoring dental development. They are particularly valuable for detecting problems in their earliest stages when treatment is most effective.
              </p>

              <h3 className="text-[22px] sm:text-xl font-semibold text-gray-900 mb-4 font-heading">
                What to Expect During the Process
              </h3>
              
              <p className="text-[16px] text-gray-700 leading-relaxed mb-6 font-sans">
                The digital X-ray process is similar to traditional X-rays but faster and more comfortable. A small sensor is placed in your mouth, and the X-ray is taken. The image appears immediately on a computer screen, allowing your dentist to review it right away. The sensor is smaller and more comfortable than traditional film holders.
              </p>

              <h3 className="text-[22px] sm:text-xl font-semibold text-gray-900 mb-4 font-heading">
                Safety and Radiation Exposure
              </h3>
              
              <p className="text-[16px] text-gray-700 leading-relaxed mb-6 font-sans">
                Digital X-rays use significantly less radiation than traditional film X-rays, making them much safer for patients. The reduced radiation exposure is especially beneficial for children and patients who need frequent X-rays. The technology also eliminates the need for chemical processing, making it safer for the environment as well.
              </p>

              <h3 className="text-[22px] sm:text-xl font-semibold text-gray-900 mb-4 font-heading">
                Image Quality and Diagnosis
              </h3>
              
              <p className="text-[16px] text-gray-700 leading-relaxed mb-6 font-sans">
                Digital X-rays provide superior image quality compared to traditional film. The images can be enhanced, zoomed, and adjusted for better visibility of specific areas. This improved image quality helps dentists detect problems earlier and make more accurate diagnoses, leading to better treatment outcomes.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg mt-8">
                <h4 className="text-[22px] sm:text-lg font-semibold text-blue-900 mb-2 font-heading">
                  Remember
                </h4>
                <p className="text-[16px] text-blue-800 font-sans">
                  Digital X-rays represent a significant advancement in dental imaging technology, providing safer, faster, and more detailed diagnostic information. This technology helps ensure that dental problems are detected early and treated effectively.
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