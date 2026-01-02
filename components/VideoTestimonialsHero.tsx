'use client'

import { motion } from 'framer-motion'

export default function VideoTestimonialsHero() {
  return (
    <section className="relative pt-[200px] pb-12 sm:pb-16 lg:pb-[53px]" style={{ backgroundColor: '#441018' }}>
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
            Patient Stories
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[27px] sm:text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-6 leading-tight"
          >
            Video Testimonials
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-[16px] sm:text-xl text-red-100 max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            Hear from our patients about their experiences at Spreckels Park Dental. See real stories of transformation and satisfaction.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

