'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CleftLipAndPalatePage() {
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
              Cleft Lip and Palate
            </h1>
            <p className="text-[16px] sm:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-sans">
              Understanding cleft lip and palate conditions, treatment options, and the role of oral surgery 
              in providing comprehensive care for affected patients.
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
              What is Cleft Lip and Palate?
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Cleft lip and palate are birth defects that occur when the lip and/or roof of the mouth 
              don't form properly during fetal development. A cleft lip is a physical split or separation 
              of the two sides of the upper lip, while a cleft palate is an opening in the roof of the mouth.
            </p>

            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6">
              Causes and Risk Factors
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              The exact cause of cleft lip and palate is not fully understood, but it's believed to result 
              from a combination of genetic and environmental factors. Risk factors may include family history, 
              maternal smoking or alcohol use during pregnancy, certain medications, and nutritional deficiencies.
            </p>

            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6">
              Treatment Timeline
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Treatment for cleft lip and palate typically involves a series of surgeries and ongoing care:
            </p>
            <ul className="list-disc pl-6 text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              <li className="mb-2">Cleft lip repair: Usually performed between 3-6 months of age</li>
              <li className="mb-2">Cleft palate repair: Typically done between 9-18 months of age</li>
              <li className="mb-2">Additional surgeries may be needed as the child grows</li>
              <li className="mb-2">Ongoing dental and orthodontic care</li>
            </ul>

            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6">
              Surgical Procedures
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Oral surgeons work as part of a multidisciplinary team that may include plastic surgeons, 
              pediatricians, speech therapists, and orthodontists. The surgical procedures aim to:
            </p>
            <ul className="list-disc pl-6 text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              <li className="mb-2">Close the cleft and restore normal function</li>
              <li className="mb-2">Improve speech and feeding abilities</li>
              <li className="mb-2">Enhance facial appearance and symmetry</li>
              <li className="mb-2">Prevent complications such as ear infections</li>
            </ul>

            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6">
              Long-term Care
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Children with cleft lip and palate require ongoing care throughout their development, 
              including regular dental checkups, orthodontic treatment, speech therapy, and potential 
              additional surgeries during adolescence or adulthood.
            </p>

            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6">
              Support and Resources
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Families affected by cleft lip and palate can benefit from support groups, educational 
              resources, and specialized care teams. Early intervention and comprehensive treatment 
              planning are essential for optimal outcomes.
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
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 