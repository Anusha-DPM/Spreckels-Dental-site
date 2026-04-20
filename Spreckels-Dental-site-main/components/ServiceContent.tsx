'use client'

import { motion } from 'framer-motion'
import ImageGrid from './ImageGrid'

export default function ServiceContent() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white rounded-lg shadow-sm border border-gray-100 p-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
        We give the best Services
      </h2>
      
      <p className="text-gray-700 leading-relaxed mb-8 text-justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>

      <ImageGrid />

      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
        Why Choose This Service
      </h3>
      
      <p className="text-gray-700 leading-relaxed mb-6 text-justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
      
      <p className="text-gray-700 leading-relaxed text-justify">
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      </p>
    </motion.div>
  )
} 