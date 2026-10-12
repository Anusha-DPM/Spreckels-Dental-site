
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function TrunkOrTreatSection() {
  return (
    <section className="relative overflow-hidden bg-[#fffaf5] py-8 sm:py-12 lg:py-16">
      {/* Decorative Background Accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-orange-100/60 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-red-100/50 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-12 md:grid-cols-2 md:gap-16">

          {/* Left Column - Portrait Flyer */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex w-full justify-center"
          >
            <div className="relative w-full max-w-[440px] rounded-2xl border border-[#eadbd5] bg-white p-2 shadow-xl shadow-[#441018]/10">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl">
                <Image
                  src="/trunk-or-treat.png"
                  alt="Spreckels Park Dental Trunk or Treat Halloween event flyer"
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column - Event Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center text-center md:text-left"
          >
            {/* Small Heading */}
            <div className="mb-4 flex items-center justify-center gap-2 md:justify-start">
              <span
                aria-hidden="true"
                className="h-1 w-8 rounded-full bg-[#441018]"
              />
              <span className="text-[14px] font-semibold uppercase tracking-wide text-indigo-600 sm:text-xs">
                Spreckels Park Dental
              </span>
              <span
                aria-hidden="true"
                className="h-1 w-8 rounded-full bg-[#441018]"
              />
            </div>

            {/* Large Heading */}
            <h2 className="mb-4 text-[27px] font-normal leading-tight text-gray-900 sm:mb-6 sm:text-3xl md:text-4xl lg:text-4xl">
              Halloween Fun Is Coming to Spreckels Park Dental
            </h2>

            {/* Promotional Copy */}
            <p
              className="mb-6 text-[16px] leading-relaxed sm:text-lg"
              style={{ color: '#656565' }}
            >
              Bring the whole family and join us for a fun-filled Trunk or
              Treat celebration with candy, costumes, decorated trunks, and
              plenty of Halloween fun.
            </p>

            {/* Event Date and Time Card */}
            <div className="mb-6 rounded-xl border border-[#eadbd5] bg-white p-5 shadow-sm sm:mb-8 sm:p-6">
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:gap-5 md:items-start">

                {/* Calendar Icon */}
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#441018]/10 text-[#441018]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="3" y="5" width="18" height="16" rx="2" />
                    <path d="M16 3v4M8 3v4M3 11h18" />
                    <path d="m9 16 2 2 4-4" />
                  </svg>
                </div>

                <div className="text-center sm:text-left">
                  <p className="mb-1 text-[16px] font-semibold text-gray-900 sm:text-lg">
                    Wednesday, October 21, 2026
                  </p>
                  <p
                    className="text-[16px] leading-relaxed sm:text-lg"
                    style={{ color: '#656565' }}
                  >
                    4:30 PM–6:30 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Closing Copy */}
            <p
              className="mb-6 text-[16px] leading-relaxed sm:mb-8 sm:text-lg"
              style={{ color: '#656565' }}
            >
              Come dressed in your Halloween best and enjoy a festive evening
              with the Spreckels Park Dental team.
            </p>

         
          </motion.div>

        </div>
      </div>
    </section>
  )
}