'use client'

import { motion } from 'framer-motion'

export default function GeneralServicesSection() {
  const services = [
    { name: 'Dental Implants', description: 'for the longest-lasting tooth replacement available today' },
    { name: 'Dentures', description: 'to help you eat & smile again' },
    { name: 'Sealants', description: 'to protect children\'s teeth from decay' },
    { name: 'Fillings', description: 'to remove cavities & make your teeth strong and healthy again' },
    { name: 'Crowns & Bridgework', description: 'to replace large amounts of lost tooth structure & or missing teeth' },
    { name: 'Root Canal Treatment', description: 'to save an infected tooth' },
    { name: 'Tooth Extractions', description: 'when a tooth is damaged or decayed beyond repair' },
    { name: 'Bone Grafts', description: 'to resolve natural bone loss in the jaw' },
    { name: 'Professional Teeth Cleanings', description: 'to maintain good oral health' },
    { name: 'Periodontal (Gum) Disease Therapy', description: 'to prevent tooth loss' },
    { name: 'Oral Cancer Screenings', description: 'to detect disease at a curable stage' },
    { name: 'TMJ/TMD Treatment', description: 'for chronic jaw pain' }
  ]

  return (
    <section className="py-8 sm:py-10 lg:py-12 xl:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-[27px] sm:text-3xl lg:text-4xl font-normal text-gray-900 mb-6">
            Our General Dentistry Services Include
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-[22px] sm:text-lg font-semibold text-gray-900 mb-2">
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