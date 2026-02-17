'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function SimpleTeethWhiteningContent() {
  return (
    <section className="py-8 sm:py-10 lg:py-12 xl:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-blue-50 px-6 py-3 rounded-full mb-6">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-blue-700 font-semibold text-sm">Professional & Safe</span>
          </div>
          <h2 className="text-[27px] sm:text-4xl lg:text-5xl font-normal text-gray-900 mb-6 leading-tight">
            Teeth Whitening in Manteca, CA
          </h2>
          <p className="text-[16px] sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" style={{ color: '#656565' }}>
            Overcome tooth discoloration with our comprehensive whitening options. Experience safe, 
            effective treatments tailored to your specific needs.
          </p>
        </motion.div>

        {/* About Staining Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h3 className="text-[27px] sm:text-3xl font-normal text-gray-900 mb-8">
                Understanding Tooth Discoloration
              </h3>
              <div className="space-y-6 text-[16px] text-gray-600 leading-relaxed" style={{ color: '#656565' }}>
                <p>
                  Over time, the darker tissue of teeth (dentin) can become exposed as enamel wears away due to aging, caffeine, and tobacco. This makes teeth more absorbent and vulnerable to staining.
                </p>
                <p>
                  Food particles are attracted to enamel by protein. Common staining culprits include coffee, tea, berries, and soy sauce. These create external stains that can often be addressed with proper whitening treatments.
                </p>
                <p>
                  Another type of stain originates inside the tooth, caused by traumatic injuries, medications, and fluorosis. These internal stains cannot be removed by brushing or flossing and may require different treatment approaches.
                </p>
              </div>
            </div>
            
            {/* Understanding Tooth Discoloration Image */}
            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/Understanding Tooth Discoloration.jpeg"
                  alt="Spreckels Park Dental - Understanding Tooth Discoloration and Staining"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Treatment Options Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 lg:mb-20"
        >
          <h3 className="text-[27px] sm:text-3xl font-normal text-gray-900 text-center mb-12">
            Professional Whitening Treatments
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* In-Office Whitening */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h4 className="text-[22px] sm:text-2xl font-semibold text-gray-900 mb-4">In-Office Teeth Whitening</h4>
                <p className="text-[16px] text-gray-600 leading-relaxed mb-4" style={{ color: '#656565' }}>
                  Professional in-office treatment where a dental professional applies a whitening gel to your teeth.
                </p>
                <ul className="space-y-2 text-[16px] text-gray-600" style={{ color: '#656565' }}>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    <span>Entire visit takes about 90 minutes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    <span>Results are visible immediately</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    <span>Most effective and safest option</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* At-Home Professional Whitening */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h4 className="text-[22px] sm:text-2xl font-semibold text-gray-900 mb-4">At-Home Professional Whitening</h4>
                <p className="text-[16px] text-gray-600 leading-relaxed mb-4" style={{ color: '#656565' }}>
                  Custom-made trays and whitening gel available only through your Manteca dentist.
                </p>
                <ul className="space-y-2 text-[16px] text-gray-600" style={{ color: '#656565' }}>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">•</span>
                    <span>Perfectly fitted custom trays</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">•</span>
                    <span>Whitens all natural teeth</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">•</span>
                    <span>Results in 10-14 days (initial results in 3-5 days)</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Over the Counter Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 lg:mb-20"
        >
          <h3 className="text-[27px] sm:text-3xl font-normal text-gray-900 text-center mb-12">
            Over the Counter Whitening Solutions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Paint-On Whiteners */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                  </svg>
                </div>
                <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 mb-3">Paint-On Teeth Whiteners</h4>
                <p className="text-[16px] text-gray-600 leading-relaxed" style={{ color: '#656565' }}>
                  Readily accessible, less expensive, and less effective than strips or professional options. Applied with a small brush, hardens into a film that dissolves in the mouth.
                </p>
              </div>
            </motion.div>

            {/* Whitening Strips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 mb-3">Teeth Whitening Strips</h4>
                <p className="text-[16px] text-gray-600 leading-relaxed" style={{ color: '#656565' }}>
                  Thin, flexible plastic strips coated with hydrogen peroxide. Worn for 30 minutes twice daily. Treatment duration varies by product.
                </p>
              </div>
            </motion.div>

            {/* Whitening Toothpaste */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 mb-3">Whitening Toothpaste & Mouthwash</h4>
                <p className="text-[16px] text-gray-600 leading-relaxed" style={{ color: '#656565' }}>
                  Least expensive option. Uses mild abrasives to remove surface stains but doesn't lighten actual tooth shade.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Is Professional Right for Me Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-100">
            <h3 className="text-[27px] sm:text-3xl font-normal text-gray-900 mb-8 text-center">
              Is Professional Teeth Whitening Right for Me?
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 mb-4">Professional Solutions Are Most Effective For:</h4>
                <ul className="space-y-3 text-[16px] text-gray-600" style={{ color: '#656565' }}>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3">✓</span>
                    <span>Yellow or light brown stains</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3">✓</span>
                    <span>Surface stains from food and drinks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3">✓</span>
                    <span>Age-related discoloration</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 mb-4">May Not Be Effective For:</h4>
                <ul className="space-y-3 text-[16px] text-gray-600" style={{ color: '#656565' }}>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-3">✗</span>
                    <span>Brownish or grayish stains</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-3">✗</span>
                    <span>Pitted or badly discolored teeth</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-3">✗</span>
                    <span>Existing restorations (crowns, bridges, bonding)</span>
                  </li>
                </ul>
                <p className="text-gray-600 mt-4" style={{ color: '#656565' }}>
                  For these cases, porcelain veneers or dental bonding may be more appropriate solutions.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          viewport={{ once: true }}
          className="rounded-3xl p-12 text-center text-white"
          style={{ backgroundColor: '#656565' }}
        >
          <h3 className="text-[27px] sm:text-3xl lg:text-4xl font-normal mb-6">
            Do you have bothersome staining and discoloring on your teeth?
          </h3>
          <p className="text-[16px] sm:text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Professional teeth whitening from our dentist in Manteca, CA may be the solution for you! 
            Call Spreckels Park Dental at <strong>(209) 825-1030</strong> to learn more about our teeth whitening treatment or to schedule an appointment!
          </p>
          <a 
            href="/appointment-request"
            className="px-10 py-4 bg-white text-blue-600 border border-white rounded-xl hover:bg-transparent hover:text-white transition-colors duration-200 font-semibold text-[15px] sm:text-lg cursor-pointer inline-block"
          >
            BOOK A CONSULTATION
          </a>
        </motion.div>
      </div>
    </section>
  )
} 
