'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function GeneralCosmeticHeroSection() {
  return (
    <section className="pt-[140px] lg:pt-[140px] pb-8 lg:pb-12 xl:pb-20" style={{ backgroundColor: '#441018' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-[27px] sm:text-4xl lg:text-5xl xl:text-6xl font-normal text-white mb-6 leading-tight">
              General & Cosmetic Dentistry
            </h1>
            <p className="text-[16px] sm:text-lg lg:text-xl text-gray-200 mb-8 leading-relaxed">
              Experience comprehensive dental care with our expert team. From routine checkups to advanced cosmetic procedures, we provide the highest quality dental services to help you achieve your healthiest, most beautiful smile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/appointment-request"
                className="px-8 py-4 bg-white text-[#441018] border border-white rounded-lg font-semibold hover:bg-transparent hover:text-white hover:border-white transition-colors duration-200 cursor-pointer inline-block text-center text-[15px] sm:text-base"
              >
                Book Appointment
              </a>
              <a 
                href="/contact"
                className="px-8 py-4 bg-transparent text-white border border-white rounded-lg font-semibold hover:bg-white hover:text-[#441018] hover:border-white transition-colors duration-200 cursor-pointer inline-block text-center text-[15px] sm:text-base"
              >
                Learn More
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
                src="/General & Cosmetic.jpeg"
                alt="Spreckels Park Dental General & Cosmetic Dentistry Services"
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
