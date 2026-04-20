'use client'

import { motion } from 'framer-motion'

export default function SimpleOrthoCTA() {
  return (
    <section className="py-8 sm:py-10 lg:py-12 xl:py-20" style={{ backgroundColor: '#441018' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-[27px] sm:text-3xl lg:text-4xl font-normal text-white mb-6 leading-tight"
          >
            Ready to Transform Your Smile?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-[16px] sm:text-xl text-red-100 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Whether you choose Invisalign or traditional braces, we're here to help you achieve 
            the beautiful, straight smile you deserve.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <a 
              href="/appointment-request"
              className="px-8 py-4 bg-white text-gray-900 border border-white rounded-lg hover:bg-transparent hover:text-white transition-colors duration-200 font-semibold cursor-pointer inline-block text-center text-[15px] sm:text-base"
            >
              BOOK A CONSULTATION
            </a>
            <a 
              href="tel:(209) 825-1030"
              className="px-8 py-4 bg-transparent text-white border border-white rounded-lg hover:bg白色 hover:text-red-800 transition-colors duration-200 font-semibold cursor-pointer inline-block text-center text-[15px] sm:text-base"
            >
              Call Us Today
            </a>
          </motion.div>
          

        </motion.div>
      </div>
    </section>
  )
} 
