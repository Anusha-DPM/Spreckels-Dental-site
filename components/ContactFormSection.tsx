'use client'

import { motion } from 'framer-motion'
import AppointmentRequestForm from './AppointmentRequestForm'

export default function ContactFormSection() {
  return (
    <section className="py-8 sm:py-14 lg:py-16 bg-gradient-to-b from-gray-50 to-white overflow-x-hidden">
      <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-10 w-full min-w-0"
        >
          <AppointmentRequestForm variant="contact" />
        </motion.div>
      </div>
    </section>
  )
}
