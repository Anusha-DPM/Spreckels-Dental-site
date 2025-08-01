'use client'

import { motion } from 'framer-motion'

export default function CTASection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12" style={{ backgroundColor: '#441018' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            
            {/* Left Column - Heading */}
            <div className="text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-white leading-tight">
                Start your journey towards a brighter smile today!
              </h2>
            </div>
            
            {/* Right Column - Paragraph and Buttons */}
            <div className="text-left">
              <p className="text-base sm:text-lg text-white leading-relaxed mb-6 sm:mb-8">
                Experience exceptional dental care with our expert team. We provide comprehensive dental services to help you achieve your healthiest, most beautiful smile that lasts a lifetime.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:(209) 825-1030"
                  className="px-8 py-4 bg-white text-red-800 rounded-lg font-semibold hover:bg-red-800 hover:text-white transition-colors duration-200 cursor-pointer inline-block text-center"
                >
                  Book Appointment
                </a>
                <a 
                  href="/contact"
                  className="px-8 py-4 bg-transparent text-white border border-white rounded-lg font-semibold hover:bg-[#441018] hover:text-white transition-colors duration-200 cursor-pointer inline-block text-center"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 