'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function SimpleSedationContent() {
  return (
    <section className="py-8 sm:py-10 lg:py-12 xl:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-blue-50 px-6 py-3 rounded-full mb-6">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-blue-700 font-semibold text-sm">Safe & Effective</span>
          </div>
          <h2 className="text-[27px] sm:text-4xl lg:text-5xl font-normal text-gray-900 mb-6 leading-tight">
            Dental Sedation in Manteca, CA
          </h2>
          <p className="text-[16px] sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" style={{ color: '#656565' }}>
            Overcome dental anxiety with our comprehensive sedation options. Experience comfortable, 
            stress-free dental care tailored to your needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 lg:mb-20"
        >
          <h3 className="text-[27px] sm:text-3xl font-normal text-gray-900 text-center mb-12">
            Services Offered
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Inhalation Sedation */}
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-[22px] sm:text-2xl font-semibold text-gray-900 mb-3">Inhalation Sedation</h4>
                <p className="text-blue-600 font-semibold mb-4">(Laughing Gas)</p>
                <p className="text-[16px] text-gray-600 leading-relaxed" style={{ color: '#656565' }}>
                  Quick-acting nitrous oxide that provides immediate relaxation while keeping you fully conscious and responsive.
                </p>
              </div>
            </motion.div>

            {/* Oral Sedation */}
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h4 className="text-[22px] sm:text-2xl font-semibold text-gray-900 mb-3">Oral Sedation</h4>
                <p className="text-green-600 font-semibold mb-4">(Pill Form)</p>
                <p className="text-[16px] text-gray-600 leading-relaxed" style={{ color: '#656565' }}>
                  Prescription medication taken before your appointment for deeper relaxation and anxiety relief.
                </p>
              </div>
            </motion.div>

            {/* IV Sedation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                  </svg>
                </div>
                <h4 className="text-[22px] sm:text-2xl font-semibold text-gray-900 mb-3">IV Sedation</h4>
                <p className="text-purple-600 font-semibold mb-4">(IV Administered)</p>
                <p className="text-[16px] text-gray-600 leading-relaxed" style={{ color: '#656565' }}>
                  Intravenous sedation for maximum comfort during complex procedures with controlled sedation levels.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
            <div className="flex flex-col">
              <h3 className="text-[27px] sm:text-3xl font-normal text-gray-900 mb-8">
                About Our Sedation Services
              </h3>
              <div className="space-y-6 text-gray-600 leading-relaxed flex-grow" style={{ color: '#656565' }}>
                <p className="text-[16px]">
                  Dr. Parikh and Dr. Arora offer inhalation sedation, commonly known as nitrous oxide or 'laughing gas,' for both children and adults who experience dental phobia or anxiety. Please note, that our sedation does <strong>NOT</strong> put patients to sleep.
                </p>
                <p className="text-[16px]">
                  The nitrous oxide delivery system provides a precise mixture of nitrous oxide and oxygen gases. The gas is inhaled through a facemask and begins to work immediately, while <strong>the patient stays awake</strong>. The level of sedation is monitored throughout the procedure to make sure you stay relaxed and free from pain.
                </p>
                <p className="text-[16px]">
                  The best part of receiving nitrous oxide sedation is the quick recovery time. When your treatment is complete, you will only need to sit and breathe solely oxygen for five minutes to regain normal consciousness.
                </p>
                <p className="text-[16px]">
                  Here at Spreckels Park Dental in Manteca, CA, we believe that your dental experience should be as relaxing and stress-free as possible. If you have mild to moderate levels of anxiety, wish to remain awake and relaxed throughout your visit, and prefer a rapid recovery period, nitrous oxide could be the ideal sedation choice for you.
                </p>
              </div>
            </div>
            
            {/* About Our Sedation Services Image */}
            <div className="relative flex flex-col h-full">
              <div className="relative flex-1 min-h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/About Our Sedation Services.jpeg"
                  alt="Spreckels Park Dental Sedation Services - Comfortable Care for Anxious Patients"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </motion.div>

                 {/* Call to Action Section */}
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.6 }}
           viewport={{ once: true }}
           className="rounded-3xl p-12 text-center text-white"
           style={{ backgroundColor: '#656565' }}
         >
          <h3 className="text-[27px] sm:text-3xl lg:text-4xl font-normal mb-6">
            Don't let anxiety keep you from getting the dental care and procedures you need!
          </h3>
          <p className="text-[16px] sm:text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Take advantage of sedation dentistry at Spreckels Park Dental and be calm and relaxed during treatment. 
            Call our Manteca, CA dental office at <strong>(209) 825-1030</strong> to learn more or schedule your next appointment!
          </p>
          <a 
            href="https://spreckels-dental-site.vercel.app/appointment-request"
            className="px-10 py-4 bg-white text-blue-600 border border-white rounded-xl hover:bg-transparent hover:text-white transition-colors duration-200 font-semibold text-[15px] sm:text-lg cursor-pointer inline-block"
          >
            BOOK A CONSULTATION
          </a>
        </motion.div>
      </div>
    </section>
  )
} 