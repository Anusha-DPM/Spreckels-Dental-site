
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function HomeAllOnXDentalImplant() {
  return (
    <section
      id="home-All-on-X-Dental-Implant"
      className="relative flex flex-col overflow-hidden lg:min-h-[700px] lg:flex-row"
      style={{ backgroundColor: '#441018' }}
    >
      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative order-1 w-full shrink-0 overflow-hidden bg-black lg:order-2 lg:min-h-[550px] lg:w-1/2 lg:flex-none"
      >
        {/* Mobile Image - centered, full image visible */}
       {/* Mobile Image - Full Image Visible */}
<div className="relative h-[400px] w-full overflow-hidden lg:hidden">
  <div
    className="absolute left-0 top-1/2 w-full"
    style={{
      height: '117%',
      transform: 'translateY(-44%)',
    }}
  >
    <Image
      src="/all-on-x-hero.jpg"
      alt="All-on-X dental implants and smile restoration"
      fill
      priority
      quality={90}
      sizes="100vw"
      className="object-contain object-center"
    />
  </div>
</div>

{/* Desktop Image - Full Image Visible */}
<div className="absolute inset-0 hidden overflow-hidden lg:block">
  <div
    className="absolute left-0 top-1/2 w-full"
    style={{
      height: '117%',
      transform: 'translateY(-44%)',
    }}
  >
    <Image
      src="/all-on-x-hero.jpg"
      alt="All-on-X dental implants and smile restoration"
      fill
      priority
      quality={90}
      sizes="50vw"
      className="object-contain object-center"
    />
  </div>
</div>
      </motion.div>

      {/* Content Section */}
      <div
        className="relative order-2 flex w-full items-center justify-center px-0 py-0 lg:order-1 lg:min-h-[650px] lg:w-1/2 lg:flex-none"
        style={{ backgroundColor: '#441018' }}
      >
        <div className="relative z-10 w-full px-5 py-7 pb-24 sm:px-8 sm:py-10 sm:pb-24 lg:px-10 lg:py-12 lg:pb-16 xl:px-[60px] 2xl:px-[80px]">
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
              className="mb-4 font-heading text-[20px] font-normal leading-tight sm:mb-6 sm:text-2xl md:text-3xl lg:mb-5 lg:text-[32px] xl:text-[36px]"
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
              className="mb-6 font-sans text-[16px] leading-relaxed text-red-100 sm:mb-8 sm:text-lg md:text-xl lg:mb-10 lg:pr-4 lg:text-[22px] xl:pr-[30px]"
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
                href="/all-on-x-dental-implants"
                className="inline-flex min-h-[48px] w-full items-center justify-center rounded-lg border border-white bg-transparent px-6 py-3 text-center font-heading text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-white hover:text-[#441018] sm:w-auto sm:px-8 sm:py-4 sm:text-base"
              >
                Learn More
              </a>

              <a
                href="/contact"
                className="inline-flex min-h-[48px] w-full items-center justify-center rounded-lg border border-red-800 bg-white px-6 py-3 text-center font-heading text-[15px] font-semibold text-red-800 transition-colors duration-200 hover:border-white hover:bg-[#441018] hover:text-white sm:w-auto sm:px-8 sm:py-4 sm:text-base"
              >
                Book Appointment
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
