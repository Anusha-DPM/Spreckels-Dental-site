'use client'

import { motion } from 'framer-motion'

export default function CosmeticServicesSection() {
  const services = [
    { name: 'Bonding', description: 'to repair small chips or cracks' },
    { name: 'Teeth Whitening', description: 'to brighten a faded or discolored smile' },
    { name: 'Veneers', description: 'for repairing larger chips and cracks, and reshaping teeth' }
  ]

  return (
    <section className="py-8 sm:py-10 lg:py-12 xl:py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-[27px] sm:text-3xl lg:text-4xl font-normal text-gray-900 mb-6">
            Our Cosmetic Services Include
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-[#441018] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-[22px] sm:text-xl font-semibold text-gray-900 mb-4">
                {service.name}
              </h3>
              <p className="text-[16px] text-gray-700 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 