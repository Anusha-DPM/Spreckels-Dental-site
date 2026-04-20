'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function MissionSection() {
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 sm:gap-12 md:gap-16">
          
          {/* Left Column - Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            {/* Small Heading */}
            <div className="text-[14px] sm:text-xs font-semibold text-indigo-600 uppercase tracking-wide mb-4">
            General & cosmetic Dentist in Manteca, CA
            </div>
            
            {/* Large Heading */}
            <h2 className="text-[27px] sm:text-3xl md:text-4xl lg:text-5xl font-normal text-gray-900 leading-tight mb-4 sm:mb-6">
            Dr. Shivli Arora DDS
            </h2>
            
            {/* Supporting Paragraph */}
            <p className="text-[16px] sm:text-lg leading-relaxed mb-6 sm:mb-8" style={{ color: '#656565' }}>
            Working under Dr. Parikh, Dr. Shivli Arora DDS has nearly 10 years of hands on clinical experience and continues to gain experience as a General Dentist with a passion for cosmetic dentistry in providing patients with the beautiful smile they always wanted with procedures such as Fillings, Crowns, Dentures, Teeth Cleanings, and many more.
            </p>
            
            {/* Learn More Button */}
            <div className="flex justify-center md:justify-start">
              <motion.a 
                href="/dental-staff"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#441018] text-white border border-[#441018] px-8 py-3 rounded-lg hover:bg-white hover:text-[#441018] transition-colors duration-200 font-semibold font-heading cursor-pointer inline-block text-[15px] sm:text-base"
              >
              Learn More
              </motion.a>
            </div>
          </motion.div>
          
          {/* Right Column - Image */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center w-full"
          >
            <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px]">
              <Image
                src="/doctor-2.webp"
                alt="Dr. Shivli Arora DDS - Professional dental care"
                fill
                className="object-cover object-center rounded-xl"
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