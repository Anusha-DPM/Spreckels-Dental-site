'use client'

import { motion } from 'framer-motion'

export default function TrustedBySection() {
  return (
    <section className="pt-8 pb-10 lg:pt-16 lg:pb-20 bg-white w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-blue-500 text-sm font-semibold uppercase tracking-wide mb-4"
          >
            About us
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-[27px] sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Welcome to Our Practice
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-[16px] sm:text-lg md:text-xl leading-relaxed px-4 sm:px-6 md:px-8 max-w-4xl mx-auto"
            style={{ color: '#656565' }}
          >
            At Spreckels Park Dental, Manteca patients can see a dentist in Manteca for cleanings, implants, cosmetic dentistry, and family care. We blend advanced treatment with a gentle, personalized approach so neighbors across Manteca, CA can keep their smiles healthy and bright.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
