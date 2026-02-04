'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ServicesDetailsHero() {
  return (
    <section className="relative pt-[140px] lg:pt-[140px] pb-20 lg:pb-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/financial-consulting-testimonial.webp"
          alt="Dental Service Background"
          fill
          className="object-cover object-center"
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-4">
            Services Details
          </h1>
          <div className="text-white text-lg">
            <span>Home</span>
            <span className="mx-2">|</span>
            <span>Services Details</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 