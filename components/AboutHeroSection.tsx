'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutHeroSection() {
  return (
    <section className="pt-[140px] lg:pt-[140px] pb-8 lg:pb-16" style={{ backgroundColor: '#441018' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Side - Text Content */}
          <div className="text-white">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[27px] lg:text-5xl xl:text-6xl font-normal leading-tight mb-2.5"
            >
              About Us
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[16px] lg:text-xl text-red-100 mb-8 lg:mb-20 pr-0 lg:pr-20 leading-relaxed"
            >
              We are a trusted dental practice dedicated to providing exceptional oral care and creating beautiful smiles through advanced technology, personalized treatment plans, and compassionate care for every patient.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a 
                href="/appointment-request"
                className="px-8 py-3 bg-white text-gray-900 border-2 border-white rounded-lg hover:bg-transparent hover:text-white transition-colors duration-200 font-medium text-center text-[15px] sm:text-base"
              >
                Schedule Consultation
              </a>
              <a 
                href="/dental-staff"
                className="px-8 py-3 bg-transparent text-white border-2 border-white rounded-lg hover:bg-white hover:text-red-800 transition-colors duration-200 font-medium text-center text-[15px] sm:text-base"
              >
                Meet Our Team
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
              src="/About us.jpeg"
              alt="Spreckels Park Dental - About Our Practice"
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
