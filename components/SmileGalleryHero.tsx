'use client'

import { motion } from 'framer-motion'

export default function SmileGalleryHero() {
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
            Patient Transformations
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-6 leading-tight"
          >
            Smile Gallery
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-red-100 max-w-3xl mx-auto mb-8 leading-relaxed"
            style={{ fontSize: '16px' }}
          >
            Explore real patient transformations and see the beautiful results we create. 
            Each smile tells a story of confidence, health, and happiness.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

