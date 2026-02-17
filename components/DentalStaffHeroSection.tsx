'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function DentalStaffHeroSection() {
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
              Dental Staff
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[16px] lg:text-xl text-red-100 mb-8 lg:mb-20 pr-0 lg:pr-20 leading-relaxed"
            >
              All professionals at Spreckels Park Dental maintain the highest levels of accreditation and pursue ongoing education to stay abreast of the latest trends in the dental field. Our staff is professionally trained with your comfort and satisfaction in mind and are fluent in a multitude of languages including English, Spanish, Hindi, Gujarati, and Punjabi.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a 
                href="/appointment-request"
                className="px-8 py-3 bg-white text-red-800 border-2 border-white rounded-lg hover:bg-transparent hover:text-white transition-colors duration-200 font-medium cursor-pointer inline-block text-center text-[15px] sm:text-base"
              >
                Book Appointment
              </a>
              <a 
                href="/contact"
                className="px-8 py-3 bg-transparent text-white border-2 border-white rounded-lg hover:bg-white hover:text-red-800 transition-colors duration-200 font-medium cursor-pointer inline-block text-center text-[15px] sm:text-base"
              >
                Contact Us
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
              src="/dentalstaff.jpeg"
              alt="Spreckels Park Dental Staff - Professional Team"
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
