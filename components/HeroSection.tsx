'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section id="home" className="relative h-screen flex flex-col lg:flex-row">
      {/* Left Side with Gradient Background */}
      <div className="relative w-full lg:w-1/2 flex items-center justify-center h-screen">
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="relative z-10 px-4 sm:px-6 lg:px-[80px] py-8 lg:py-0">
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
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[68px] font-normal leading-tight mb-4 sm:mb-6 font-heading"
            >
              Unlock your financial potential
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl lg:text-[22px] text-blue-100 mb-6 sm:mb-8 md:mb-12 leading-relaxed font-sans pr-0 sm:pr-4 lg:pr-[50px]"
            >
              Unleash your financial possibilities by tapping into untapped opportunities and employing strategic planning, enabling you to maximize growth and achieve financial success.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-black hover:text-white transition-colors duration-200 font-semibold font-heading text-sm sm:text-base">
                Get Started
              </button>
              <button className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent text-white border border-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200 font-semibold font-heading text-sm sm:text-base">
                Let's Talk
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Right Side - Full Image Cover */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="hidden lg:block relative w-1/2 h-screen"
      >
        <Image
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Financial consulting team meeting"
          fill
          className="object-cover"
          priority
        />
      </motion.div>
    </section>
  )
} 