'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function OralCancerScreeningsAndSurgeryPage() {
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
              Oral Cancer Screenings and Surgery
            </h1>
            <p className="text-[16px] sm:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-sans">
              Understanding oral cancer detection, screening procedures, and surgical treatment options.
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
              What is Oral Cancer?
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Oral cancer refers to cancer that develops in the mouth, including the lips, tongue, 
              cheeks, floor of the mouth, hard and soft palate, sinuses, and throat. Early detection 
              is crucial for successful treatment and improved survival rates.
            </p>

            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6">
              Risk Factors
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Several factors increase the risk of developing oral cancer including tobacco use, 
              heavy alcohol consumption, HPV infection, excessive sun exposure, poor oral hygiene, 
              and age (more common in people over 40).
            </p>

            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6">
              Signs and Symptoms
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Common signs include persistent mouth sores that don't heal, red or white patches 
              in the mouth, lumps or thickening in the cheek, difficulty chewing or swallowing, 
              persistent sore throat, numbness in the mouth or face, and unexplained weight loss.
            </p>

            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6">
              Screening and Diagnosis
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Regular oral cancer screenings examine your mouth, throat, and neck for abnormalities. 
              If suspicious areas are found, biopsies and imaging tests may be performed to confirm 
              the diagnosis.
            </p>

            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6">
              Surgical Treatment
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Surgery is often the primary treatment for oral cancer. Options include tumor resection, 
              neck dissection, reconstructive surgery, and minimally invasive procedures depending on 
              the location and stage of the cancer.
            </p>

            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6">
              Prevention
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Prevention includes avoiding tobacco products, limiting alcohol consumption, practicing 
              good oral hygiene, getting regular dental checkups, protecting lips from sun exposure, 
              and considering HPV vaccination.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Related Articles Section */}
      <section className="py-8 sm:py-10 lg:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading text-center mb-8 sm:mb-12">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link href="/patient-education/oral-surgery/oral-diagnosis-and-biopsies" className="group">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 group-hover:shadow-lg"
                >
                  <h3 className="text-[22px] sm:text-xl font-normal text-gray-900 font-heading mb-3 group-hover:text-blue-600 transition-colors">
                    Oral Diagnosis and Biopsies
                  </h3>
                  <p className="text-[16px] text-gray-600 font-sans">
                    Understanding the diagnostic process and biopsy procedures in oral health care.
                  </p>
                </motion.div>
              </Link>
              <Link href="/patient-education/oral-surgery/oral-surgery-procedures" className="group">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 group-hover:shadow-lg"
                >
                  <h3 className="text-[22px] sm:text-xl font-normal text-gray-900 font-heading mb-3 group-hover:text-blue-600 transition-colors">
                    Oral Surgery Procedures
                  </h3>
                  <p className="text-[16px] text-gray-600 font-sans">
                    An overview of common oral surgery procedures and their applications.
                  </p>
                </motion.div>
              </Link>
              <Link href="/patient-education/oral-surgery/facial-trauma-and-reconstructive-surgery" className="group">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 group-hover:shadow-lg"
                >
                  <h3 className="text-[22px] sm:text-xl font-normal text-gray-900 font-heading mb-3 group-hover:text-blue-600 transition-colors">
                    Facial Trauma and Reconstructive Surgery
                  </h3>
                  <p className="text-[16px] text-gray-600 font-sans">
                    Learn about treatment options for facial injuries and reconstructive procedures.
                  </p>
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 