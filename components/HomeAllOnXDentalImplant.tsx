'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function HomeAllOnXDentalImplant() {
  return (
    <section
      id="home-All-on-X-Dental-Implant"
      className="relative flex flex-col lg:min-h-screen lg:flex-row"
    >
      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative order-1 h-[85vw] min-h-[380px] max-h-[500px] w-full overflow-hidden bg-white sm:h-[60vw] sm:max-h-[550px] lg:order-2 lg:h-auto lg:min-h-screen lg:max-h-none lg:w-1/2"
      >
        <Image
          src="/HomeAllOnXDentalImplant.jpg"
          alt="All-on-X dental implants and smile restoration"
          width={1200}
          height={900}
          priority
          quality={80}
          sizes="(max-width: 1023px) 100vw, 50vw"
          className="absolute inset-0 h-full w-full object-cover object-center lg:object-top"
        />
      </motion.div>

      {/* Content Section */}
      <div
        className="relative order-2 flex min-h-0 w-full items-center justify-center lg:order-1 lg:min-h-screen lg:w-1/2"
        style={{ backgroundColor: '#441018' }}
      >
        <div className="relative z-10 w-full px-5 py-7 sm:px-6 sm:py-10 lg:px-[80px] lg:py-0">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white lg:text-left"
          >
            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-4 pt-0 font-heading text-[20px] font-normal leading-tight sm:mb-6 sm:text-2xl md:text-3xl lg:mb-6 lg:pt-[90px] lg:text-[32px] xl:text-[36px]"
            >
              <span className="mb-2 block text-[26px] font-semibold sm:mb-3 sm:text-4xl md:text-[42px] lg:text-[44px] xl:text-[48px]">
                All-on-X Dental Implant
              </span>
              in Manteca, CA
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-6 pr-0 font-sans text-[16px] leading-relaxed text-red-100 sm:mb-8 sm:pr-4 sm:text-lg md:mb-12 md:text-xl lg:pr-[50px] lg:text-[22px]"
            >
              Restore your smile with All-on-X dental implants in Manteca, CA,
              providing a secure, natural-looking solution for extensive tooth
              loss.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4 lg:justify-start"
            >
              <a
                href="/appointment-request"
                className="inline-block w-full cursor-pointer rounded-lg border border-red-800 bg-white px-6 py-3 text-center font-heading text-[15px] font-semibold text-red-800 transition-colors duration-200 hover:border-white hover:bg-[#441018] hover:text-white sm:w-auto sm:px-8 sm:py-4 sm:text-base"
              >
                Book Appointment
              </a>

              <a
                href="/contact"
                className="inline-block w-full cursor-pointer rounded-lg border border-white bg-transparent px-6 py-3 text-center font-heading text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-white hover:text-[#441018] sm:w-auto sm:px-8 sm:py-4 sm:text-base"
              >
                Learn More
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
