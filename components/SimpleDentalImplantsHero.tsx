'use client'

import { motion } from 'framer-motion'

export default function SimpleDentalImplantsHero() {
  return (
    <section className="relative pt-[200px] pb-20 lg:pb-32" style={{ backgroundColor: '#441018' }}>
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
            Advanced Dental Implant Solutions
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-6 leading-tight"
          >
            Dental Implants
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-red-100 max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            Restore your smile with permanent, natural-looking dental implants. 
            Our advanced technology and experienced team ensure the best results for a confident, beautiful smile.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a 
                              href="https://spreckels-dental-site.vercel.app/appointment-request"
              className="px-8 py-4 bg-white text-red-800 border border-red-800 rounded-lg hover:bg-[#441018] hover:text-white transition-colors duration-200 font-semibold cursor-pointer inline-block text-center"
            >
              Schedule Consultation
            </a>
            <a 
              href="/contact"
              className="px-8 py-4 bg-transparent text-white border border-white rounded-lg hover:bg-white hover:text-red-800 transition-colors duration-200 font-semibold cursor-pointer inline-block text-center"
            >
              Learn More
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 