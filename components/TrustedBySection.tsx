'use client'

import { motion } from 'framer-motion'

export default function TrustedBySection() {
  return (
    <section className="pt-16 pb-20 bg-white w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Welcome to Our Practice
          </motion.h2>
          
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#441018] leading-relaxed"
          >
            General & Cosmetic Dentistry
          </motion.h3>
        </motion.div>
      </div>
    </section>
  )
} 