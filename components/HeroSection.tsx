'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-[77vh] lg:min-h-screen flex flex-col lg:flex-row">
      {/* Left Side with Background Color */}
      <div className="relative w-full lg:w-1/2 flex items-center justify-center min-h-[77vh] lg:min-h-screen" style={{ backgroundColor: '#441018' }}>
        <div className="relative z-10 px-4 sm:px-6 lg:px-[80px] py-6 sm:py-10 lg:py-0">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[27px] sm:text-4xl md:text-5xl lg:text-6xl xl:text-[68px] font-normal leading-tight mb-4 sm:mb-6 font-heading pt-[50px] sm:pt-[90px]"
            >
              BUILD A BRIGHTER SMILE
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-[16px] sm:text-lg md:text-xl lg:text-[22px] text-red-100 mb-6 sm:mb-8 md:mb-12 leading-relaxed font-sans pr-0 sm:pr-4 lg:pr-[50px]"
            >
              Experience exceptional dental care with our expert team. We provide comprehensive dental services to help you achieve a healthy, beautiful smile that lasts a lifetime.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a 
                href="https://spreckels-dental-site.vercel.app/appointment-request"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-red-800 border border-red-800 rounded-lg hover:bg-[#441018] hover:text-white transition-colors duration-200 font-semibold font-heading text-[15px] sm:text-base cursor-pointer inline-block text-center"
              >
                Book Appointment
              </a>
              <a 
                href="/contact"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent text-white border border-white rounded-lg hover:bg-[#441018] hover:text-white transition-colors duration-200 font-semibold font-heading text-sm sm:text-base cursor-pointer inline-block text-center"
              >
                Learn More
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Right Side - Full Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative w-full lg:w-1/2 min-h-[50vh] lg:min-h-screen overflow-hidden"
      >
        <Image
          src="/hero- home.jpeg"
          alt="Professional dental care and smiling patient"
          fill
          className="object-cover object-top"
          priority
          quality={95}
          sizes="(max-width: 1024px) 100vw, 50vw"
          style={{ objectFit: 'cover', objectPosition: 'center top' }}
        />
      </motion.div>
    </section>
  )
} 