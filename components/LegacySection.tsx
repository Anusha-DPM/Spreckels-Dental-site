'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function LegacySection() {
  return (
    <section className="py-10 sm:py-12 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 sm:gap-12 md:gap-16">
          
          {/* Left Column - Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-left"
          >
            {/* Small Heading */}
            <div className="text-xs font-semibold text-indigo-600 uppercase tracking-wide mb-4">
              Legacy
            </div>
            
            {/* Large Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-gray-900 leading-tight mb-4 sm:mb-6">
            We’re building a legacy of excellence
            </h2>
            
            {/* Horizontal Divider */}
            <div className="border-t border-gray-300 my-4 sm:my-6"></div>
            
            {/* Supporting Paragraph */}
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
              We are committed to providing exceptional financial guidance that empowers individuals and businesses to make informed decisions. Our team of experts combines deep industry knowledge with personalized service to help you achieve your financial goals.
            </p>
            
            {/* Learn More Button */}
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-100 text-black px-6 py-3 rounded-md font-medium hover:bg-[#441018] hover:text-white transition-colors duration-200 text-[15px] sm:text-base"
            >
              Learn More
            </motion.button>
          </motion.div>
          
          {/* Right Column - Image */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-lg">
              <Image
                src="/mission.webp"
                alt="Team collaboration in office setting"
                width={500}
                height={400}
                className="w-full h-auto rounded-xl object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 