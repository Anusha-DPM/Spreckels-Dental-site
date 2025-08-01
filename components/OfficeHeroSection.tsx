'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function OfficeHeroSection() {
  return (
    <section className="pt-[140px] lg:pt-[140px] pb-12 lg:pb-16" style={{ backgroundColor: '#441018' }}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-normal text-white mb-6 leading-tight">
              Manteca, CA Dentist - Dental Office
            </h1>
            <p className="text-lg lg:text-xl text-gray-200 mb-8 leading-relaxed">
            Comfort and convenience are the hallmarks of Spreckels Park Dental's office operations. 

To ensure your convenience, below is the information you need about our hours, location, & appointment scheduling.

Parking is provided in front of office & parking lot is located in the rear alley on S Washington Ave., on your first right.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:(209) 825-1030"
                className="px-8 py-4 bg-white text-[#441018] rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 cursor-pointer inline-block text-center"
              >
                Book Appointment
              </a>
              <a 
                href="/contact"
                className="px-8 py-4 bg-transparent text-white border border-white rounded-lg font-semibold hover:bg-white hover:text-[#441018] transition-colors duration-200 cursor-pointer inline-block text-center"
              >
                Contact Us
              </a>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/financial-consulting-feature-1.webp"
                alt="Modern dental office"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 