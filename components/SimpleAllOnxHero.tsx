'use client'

import { motion } from 'framer-motion'

export default function SimpleAllOnxHero() {
  return (
    <section className="relative pt-[140px] lg:pt-[169px] pb-12 sm:pb-16 lg:pb-[73px]" style={{ backgroundColor: '#441018' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[27px] sm:text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-6 leading-tight"
          >
            All-on-X Dental Implants in Manteca, CA
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-[16px] sm:text-xl text-red-100 max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            A full arch of fixed, natural-looking teeth, planned with care by Dr. Rujul G. Parikh, DDS at Spreckels Park Dental.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="/appointment-request"
              className="px-8 py-4 bg-white text-red-800 border border-red-800 rounded-lg hover:bg-[#441018] hover:text-white transition-colors duration-200 font-semibold cursor-pointer inline-block text-center text-[15px] sm:text-base"
            >
              Schedule Consultation
            </a>
            <a
              href="/contact"
              className="px-8 py-4 bg-transparent text-white border border-white rounded-lg hover:bg-white hover:text-red-800 transition-colors duration-200 font-semibold cursor-pointer inline-block text-center text-[15px] sm:text-base"
            >
              Learn More
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 