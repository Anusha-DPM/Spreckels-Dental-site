'use client'

import { motion } from 'framer-motion'

export default function ContactCard() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="bg-gray-50 rounded-lg p-6 mt-6"
    >
      <h4 className="text-lg font-bold text-gray-900 mb-2">
        If You Need Any Help
      </h4>
      <h5 className="text-base font-bold text-gray-900 mb-3">
        Contact With Us
      </h5>
      <div className="w-12 h-1 bg-blue-600 mb-4"></div>
      <div className="text-2xl font-bold text-blue-600">
        +91 705 2101 786
      </div>
    </motion.div>
  )
} 