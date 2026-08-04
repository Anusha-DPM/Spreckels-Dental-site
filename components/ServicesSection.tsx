'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ServicesSection() {
  const services = [
    {
      // Users/Person icon
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
        </svg>
      ),
      title: 'All-on-4® or Hybrid Dentures',
      description: 'If you have lost an entire arch of teeth (top and/or bottom), or are soon to have your remaining teeth removed because they are too unhealthy to save, you may be able to replace them with fixed dentures supported by dental implants.',
      href: '/all-on-4-implant-dentures'
    },
    {
      // Bar chart icon
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
        </svg>
      ),
      title: 'Dental Implants',
      description: 'Before the development of dental implants, dentures were the only alternative to replacing a missing tooth or teeth. ',
      href: '/dental-implants'
    },
    {
      // Document/File icon
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" />
        </svg>
      ),
      title: 'General Dentistry',
      description: 'General Dentistry, to help you to preserve your natural teeth.',
      href: '/general-cosmetic-dentistry'
    }
  ]

  return (
    <section id="services" className="py-8 sm:py-10 lg:py-12 xl:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <div className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-4">
            Services
          </div>
          <h2 className="text-[27px] sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal text-gray-900 mb-4 lg:mb-6 font-heading leading-tight">
            Dental Services We Offer
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Link href={service.href} className="block text-center p-4 sm:p-6 lg:p-8 rounded-xl hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white" style={{ backgroundColor: '#441018' }}>
                  {service.icon}
                </div>
                <h3 className="text-[22px] sm:text-lg lg:text-xl font-normal text-gray-900 mb-2 sm:mb-3 lg:mb-4 font-heading">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-sans text-[16px] sm:text-base lg:text-base">
                  {service.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}