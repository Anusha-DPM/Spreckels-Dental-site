'use client'

import { motion } from 'framer-motion'

export default function SimplePRFHero() {
  return (
    <section className="relative pt-[140px] pb-12 sm:pb-16 lg:pb-20 xl:pb-32" style={{ backgroundColor: '#441018' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white text-sm font-semibold uppercase tracking-wide mb-4"
          >
            Advanced Healing Therapy
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[27px] sm:text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-6 leading-tight"
          >
            Platelet Rich Fibrin Therapy
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-[16px] sm:text-xl text-red-100 max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            Enhance your healing process with our advanced PRF therapy.
            Utilizing your body's natural healing compounds for faster recovery and better results.
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
