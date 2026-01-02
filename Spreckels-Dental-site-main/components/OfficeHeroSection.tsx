'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function OfficeHeroSection() {
  return (
    <section className="pt-[140px] pb-8 lg:pb-12 sm:pb-16 md:pb-20 border-t border-gray-200" style={{ backgroundColor: '#441018' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          
          {/* Left Column - Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <div className="space-y-4 sm:space-y-6">
              {/* Label */}
              <div className="text-blue-300 text-sm font-semibold uppercase tracking-wide">
                Dental Office in Manteca, CA
              </div>
              
              {/* Main Heading */}
              <h1 className="text-[27px] sm:text-3xl md:text-4xl lg:text-5xl font-normal text-white leading-tight">
                Manteca, CA Dentist - Dental Office
              </h1>
              
              {/* Horizontal Divider */}
              <div className="border-t border-gray-400 my-6"></div>
              
              {/* Description */}
              <p className="text-[16px] sm:text-lg leading-relaxed mb-4 sm:mb-5 text-gray-200">
              Comfort and convenience are the hallmarks of Spreckels Park Dental's office operations. 

To ensure your convenience, below is the information you need about our hours, location, & appointment scheduling.

Parking is provided in front of office & parking lot is located in the rear alley on S Washington Ave., on your first right.
              </p>
              
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a 
                  href="https://spreckels-dental-site.vercel.app/appointment-request"
                  className="bg-white text-[#441018] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 cursor-pointer inline-block text-center text-[15px] sm:text-base"
                >
                  Book Appointment
                </a>
                <a 
                  href="/contact"
                  className="bg-transparent text-white border border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#441018] transition-colors duration-200 cursor-pointer inline-block text-center text-[15px] sm:text-base"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </motion.div>
          
          {/* Right Column - Image */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full"
          >
            <div className="relative rounded-xl overflow-hidden w-full h-[400px] sm:h-[500px] md:h-[600px]">
              <Image
                src="/officehero.jpeg"
                alt="Spreckels Park Dental Office - Modern dental facility"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 