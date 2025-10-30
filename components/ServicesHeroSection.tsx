'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ServicesHeroSection() {
  return (
    <section className="pt-[140px] lg:pt-[140px] pb-8 lg:pb-12 xl:pb-16" style={{ backgroundColor: '#441018' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Side - Text Content */}
          <div className="text-white">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[27px] sm:text-4xl lg:text-5xl xl:text-6xl font-normal leading-tight mb-2.5"
            >
              Our Services
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[16px] sm:text-lg lg:text-xl text-blue-100 mb-12 sm:mb-16 lg:mb-20 pr-0 lg:pr-20 leading-relaxed"
            >
              Discover our comprehensive range of dental services designed to help you achieve a healthy, beautiful smile and maintain optimal oral health for life.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a 
                href="https://spreckels-dental-site.vercel.app/appointment-request"
                className="px-8 py-3 bg-white text-gray-900 border-2 border-white rounded-lg hover:bg-transparent hover:text-white transition-colors duration-200 font-medium text-center text-[15px] sm:text-base"
              >
                Get Started
              </a>
              <a 
                href="https://spreckels-dental-site.vercel.app/appointment-request"
                className="px-8 py-3 bg-transparent text-white border-2 border-white rounded-lg hover:bg-white hover:text-gray-900 transition-colors duration-200 font-medium text-center text-[15px] sm:text-base"
              >
                Let's Talk
              </a>
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
              src="/services.jpeg"
              alt="Spreckels Park Dental Services - Comprehensive Care"
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