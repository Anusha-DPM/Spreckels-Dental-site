'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function HomeAllOnXDentalImplant() {
  return (
    <section
      id="home-All-on-X-Dental-Implant"
      className="relative min-h-[77vh] lg:min-h-screen flex flex-col lg:flex-row"
    >
      {/* Left Side with Background Color */}
      <div
        className="relative w-full lg:w-1/2 flex items-center justify-center min-h-[77vh] lg:min-h-screen"
        style={{ backgroundColor: '#441018' }}
      >
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
              className="text-[20px] sm:text-2xl md:text-3xl lg:text-[32px] xl:text-[36px] font-normal leading-tight mb-4 sm:mb-6 font-heading pt-[50px] sm:pt-[90px]"
            >
              <span className="block text-[26px] sm:text-4xl md:text-[42px] lg:text-[44px] xl:text-[48px] font-semibold mb-2 sm:mb-3">
                All-on-X Dental Implant
              </span>
              in Manteca, CA
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-[16px] sm:text-lg md:text-xl lg:text-[22px] text-red-100 mb-6 sm:mb-8 md:mb-12 leading-relaxed font-sans pr-0 sm:pr-4 lg:pr-[50px]"
            >
              Restore your smile with All-on-X dental implants in Manteca, CA,
              providing a secure, natural-looking solution for extensive tooth
              loss.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="/appointment-request"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-red-800 border border-red-800 rounded-lg hover:bg-[#441018] hover:text-white hover:border-white transition-colors duration-200 font-semibold font-heading text-[15px] sm:text-base cursor-pointer inline-block text-center"
              >
                Book Appointment
              </a>

              <a
                href="/contact"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent text-white border border-white rounded-lg hover:bg-[#441018] hover:text-white hover:border-white transition-colors duration-200 font-semibold font-heading text-[15px] sm:text-base cursor-pointer inline-block text-center"
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
          src="/HomeAllOnXDentalImplant.jpg"
          alt="All-on-X dental implants and smile restoration"
          fill
          className="object-cover object-top"
          priority
          quality={80}
          sizes="(max-width: 1024px) 100vw, 50vw"
          style={{
            objectFit: 'cover',
            objectPosition: 'top center',
          }}
        />
      </motion.div>
    </section>
  )
}