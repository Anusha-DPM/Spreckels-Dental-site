'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutHeroSection() {
  return (
    <section className="pt-[140px] lg:pt-[140px] pb-12 lg:pb-16 bg-gradient-to-br from-blue-600 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Side - Text Content */}
          <div className="text-white">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl lg:text-5xl xl:text-6xl font-normal leading-tight mb-2.5"
            >
              About Outgrid
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg lg:text-xl text-blue-100 mb-20 pr-0 lg:pr-20 leading-relaxed"
            >
              We are a leading financial consulting firm dedicated to helping individuals and businesses unlock their financial potential through strategic planning, personalized guidance, and innovative solutions.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="px-8 py-3 bg-white text-blue-600 border-2 border-white rounded-lg hover:bg-transparent hover:text-white transition-colors duration-200 font-medium">
                Get Started
              </button>
              <button className="px-8 py-3 bg-transparent text-white border-2 border-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200 font-medium">
                Let's Talk
              </button>
            </motion.div>
          </div>
          
          {/* Right Side - Image */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <Image
              src="/financial-consulting-feature-1.webp"
              alt="Financial Consulting Team"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
} 