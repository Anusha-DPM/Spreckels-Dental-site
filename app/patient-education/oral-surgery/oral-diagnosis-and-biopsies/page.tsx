'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function OralDiagnosisAndBiopsiesPage() {
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
              Oral Diagnosis and Biopsies
            </h1>
            <p className="text-[16px] sm:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-sans">
              Understanding the diagnostic process and biopsy procedures used in oral health care 
              to identify and treat various conditions.
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
              What is Oral Diagnosis?
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Oral diagnosis involves the systematic examination and evaluation of the mouth, teeth, 
              gums, and surrounding structures to identify diseases, conditions, or abnormalities. 
              This process is essential for developing appropriate treatment plans.
            </p>

            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6">
              Diagnostic Process
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              The diagnostic process typically includes:
            </p>
            <ul className="list-disc pl-6 text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              <li className="mb-2">Medical history review</li>
              <li className="mb-2">Clinical examination of oral tissues</li>
              <li className="mb-2">Dental examination and X-rays</li>
              <li className="mb-2">Laboratory tests when necessary</li>
              <li className="mb-2">Specialized imaging if required</li>
            </ul>

            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6">
              When is a Biopsy Needed?
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              A biopsy may be recommended when there are suspicious lesions, persistent sores, 
              unusual growths, or when the cause of oral symptoms cannot be determined through 
              other diagnostic methods. Biopsies help confirm or rule out serious conditions 
              like oral cancer.
            </p>

            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6">
              Types of Biopsies
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Several types of biopsies may be performed depending on the location and nature 
              of the suspicious tissue:
            </p>
            <ul className="list-disc pl-6 text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              <li className="mb-2">Incisional biopsy: Removal of a portion of the suspicious tissue</li>
              <li className="mb-2">Excisional biopsy: Complete removal of the lesion</li>
              <li className="mb-2">Brush biopsy: Collection of surface cells for analysis</li>
              <li className="mb-2">Fine needle aspiration: For deeper tissue sampling</li>
            </ul>

            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6">
              The Biopsy Procedure
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              During a biopsy procedure, the area is numbed with local anesthesia, and a small 
              sample of tissue is removed. The procedure is typically quick and causes minimal 
              discomfort. The tissue sample is then sent to a laboratory for microscopic analysis.
            </p>

            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6">
              Recovery and Results
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Recovery from a biopsy is usually straightforward with minimal discomfort. Results 
              typically take 1-2 weeks to process. Your oral surgeon will discuss the findings 
              and recommend appropriate treatment if necessary.
            </p>

            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6">
              Follow-up Care
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              After a biopsy, follow-up care may include monitoring the biopsy site, additional 
              testing if needed, and regular checkups to ensure proper healing and detect any 
              recurrence of suspicious tissue.
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
              <Link href="/patient-education/oral-surgery/oral-cancer-screenings-and-surgery" className="group">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 group-hover:shadow-lg"
                >
                  <h3 className="text-[22px] sm:text-xl font-normal text-gray-900 font-heading mb-3 group-hover:text-blue-600 transition-colors">
                    Oral Cancer Screenings and Surgery
                  </h3>
                  <p className="text-[16px] text-gray-600 font-sans">
                    Understanding oral cancer detection, screening procedures, and surgical treatment options.
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
                    An overview of common oral surgery procedures and their applications in dental care.
                  </p>
                </motion.div>
              </Link>
              <Link href="/patient-education/oral-surgery/extractions" className="group">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 group-hover:shadow-lg"
                >
                  <h3 className="text-[22px] sm:text-xl font-normal text-gray-900 font-heading mb-3 group-hover:text-blue-600 transition-colors">
                    Extractions
                  </h3>
                  <p className="text-[16px] text-gray-600 font-sans">
                    Understanding when tooth extractions are necessary and what to expect during the procedure.
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