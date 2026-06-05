'use client'

import { motion } from 'framer-motion'
import AppointmentRequestForm from './AppointmentRequestForm'

export default function ContactHeroSection() {
  return (
    <section className="pt-[140px] lg:pt-[140px] pb-8 sm:pb-12 lg:pb-24" style={{ backgroundColor: '#441018' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-8">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </div>
          <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wide mb-4">
            CONTACT US
          </h3>
          <h1 className="text-[27px] sm:text-4xl lg:text-5xl xl:text-6xl font-normal text-white leading-tight mb-4 sm:mb-6 font-heading">
            Get in Touch
          </h1>
          <div className="w-24 h-1 bg-white mx-auto mb-6" />
          <p className="text-[16px] sm:text-xl text-gray-200 max-w-3xl mx-auto">
            We&apos;re here to help you achieve your best smile. Contact us today to schedule your appointment.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10">
            <AppointmentRequestForm variant="contact" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
