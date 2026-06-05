'use client'

import { motion } from 'framer-motion'
import AppointmentRequestForm from './AppointmentRequestForm'

export default function ContactFormSection() {
  return (
    <section className="py-10 sm:py-14 lg:py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10 ring-1 ring-gray-100"
        >
          <AppointmentRequestForm variant="contact" />
        </motion.div>
      </div>
    </section>
  )
}
