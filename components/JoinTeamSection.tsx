'use client'

import { motion } from 'framer-motion'

export default function JoinTeamSection() {
  return (
    <section className="py-8 sm:py-10 lg:py-12 xl:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Icon */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center mb-8"
          >
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center shadow-lg">
              <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center shadow-md">
                <svg 
                  className="w-6 h-6 text-white" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  <path d="M16 8h2v2h2v-2h2V6h-2V4h-2v2h-2z"/>
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-4"
          >
            Join Our Dental Team
          </motion.h3>

          {/* Main Heading */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-[27px] sm:text-3xl lg:text-4xl xl:text-5xl font-normal text-gray-900 mb-6"
          >
            Want to work with us?
          </motion.h2>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-[16px] sm:text-lg text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Join our dedicated team of dental professionals committed to providing exceptional patient care. We offer a supportive environment where you can grow your skills and make a difference in patients' lives.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
} 