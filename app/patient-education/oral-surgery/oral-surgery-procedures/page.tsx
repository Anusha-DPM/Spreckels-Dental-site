'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function OralSurgeryProceduresPage() {
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
              Oral Surgery Procedures
            </h1>
            <p className="text-[16px] sm:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-sans">
              An overview of common oral surgery procedures and their applications in dental care, 
              from simple extractions to complex reconstructive surgeries.
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
              What is Oral Surgery?
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Oral surgery encompasses a wide range of surgical procedures performed on the mouth, 
              jaw, and face. Oral surgeons are dental specialists who have completed additional 
              training in surgical techniques and anesthesia administration.
            </p>

            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6">
              Common Oral Surgery Procedures
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Oral surgeons perform various procedures to address different dental and facial conditions:
            </p>
            <ul className="list-disc pl-6 text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              <li className="mb-2">Tooth extractions (simple and surgical)</li>
              <li className="mb-2">Wisdom tooth removal</li>
              <li className="mb-2">Dental implant placement</li>
              <li className="mb-2">Corrective jaw surgery (orthognathic surgery)</li>
              <li className="mb-2">Treatment of facial trauma and injuries</li>
              <li className="mb-2">Cleft lip and palate repair</li>
              <li className="mb-2">Oral cancer treatment and reconstruction</li>
              <li className="mb-2">TMJ disorder treatment</li>
            </ul>

            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6">
              Surgical Extractions
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Surgical extractions are performed when teeth cannot be removed using simple extraction 
              techniques. This may be necessary for impacted teeth, broken teeth, or teeth with 
              complex root structures. The procedure involves making an incision in the gum tissue 
              and may require removing bone to access the tooth.
            </p>

            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6">
              Wisdom Tooth Surgery
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Wisdom tooth removal is one of the most common oral surgery procedures. Impacted 
              wisdom teeth can cause pain, infection, and damage to adjacent teeth. The surgery 
              typically involves removing the wisdom teeth through small incisions in the gum tissue.
            </p>

            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6">
              Dental Implant Surgery
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Dental implant surgery involves placing titanium posts into the jawbone to serve as 
              artificial tooth roots. This procedure requires careful planning and may involve bone 
              grafting if there is insufficient bone density. Implants provide a stable foundation 
              for replacement teeth.
            </p>

            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6">
              Corrective Jaw Surgery
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Orthognathic surgery corrects jaw alignment issues that cannot be resolved with 
              orthodontics alone. This procedure can improve chewing function, speech, breathing, 
              and facial appearance. It is often performed in conjunction with orthodontic treatment.
            </p>

            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6">
              Anesthesia Options
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Oral surgeons are trained in various anesthesia techniques to ensure patient comfort 
              during procedures. Options include local anesthesia, sedation, and general anesthesia, 
              depending on the complexity of the procedure and patient preferences.
            </p>

            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6">
              Recovery and Aftercare
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Recovery time varies depending on the procedure performed. Most patients can return 
              to normal activities within a few days to a week. Follow-up care is essential to 
              monitor healing and address any complications that may arise.
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
              <Link href="/patient-education/oral-surgery/corrective-jaw-surgery" className="group">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 group-hover:shadow-lg"
                >
                  <h3 className="text-[22px] sm:text-xl font-normal text-gray-900 font-heading mb-3 group-hover:text-blue-600 transition-colors">
                    Corrective Jaw Surgery
                  </h3>
                  <p className="text-[16px] text-gray-600 font-sans">
                    Learn about orthognathic surgery and how it can improve jaw function and facial appearance.
                  </p>
                </motion.div>
              </Link>
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
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 