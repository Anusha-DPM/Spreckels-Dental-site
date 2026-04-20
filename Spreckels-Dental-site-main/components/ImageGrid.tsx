'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ImageGrid() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8"
    >
      <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
        <Image
          src="/financial-consulting-feature-1.webp"
          alt="Dentist working on patient"
          fill
          className="object-cover"
        />
      </div>
      <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
        <Image
          src="/financial-consulting-testimonial.webp"
          alt="Dental assistant with tools"
          fill
          className="object-cover"
        />
      </div>
    </motion.div>
  )
} 