'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function InsuranceBillingHeroSection() {
  return (
    <section className="pt-[140px] lg:pt-[140px] pb-8 sm:pb-12 lg:pb-16" style={{ backgroundColor: '#441018' }}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-[27px] sm:text-4xl lg:text-5xl xl:text-6xl font-normal text-white mb-4 sm:mb-6 leading-tight">
              Insurance & Billing
            </h1>
            <p className="text-[16px] sm:text-lg lg:text-xl text-gray-200 mb-6 sm:mb-8 leading-relaxed">
              We accept PPO - Out of network insurances. contact our office to verify acceptance of your plan. Spreckels Park Dental does NOT participate in Health Management Organizations (HMO)(Medi-cal/Medicare); however, we will be happy to file your insurance claims for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/contact"
                className="px-8 py-4 bg-white text-[#441018] rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 cursor-pointer inline-block text-center text-[15px] sm:text-base"
              >
                Check Coverage
              </a>
              <a 
                href="/contact"
                className="px-8 py-4 bg-transparent text-white border border-white rounded-lg font-semibold hover:bg白色 hover:text-[#441018] transition-colors duration-200 cursor-pointer inline-block text-center text-[15px] sm:text-base"
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
                src="/Insurance & Billing.jpeg"
                alt="Spreckels Park Dental Insurance & Billing Services"
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