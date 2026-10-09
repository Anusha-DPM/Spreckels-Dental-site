'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function SimpleLogoCarousel() {
  const logos = [
    { name: 'Network', image: '/Financial-Consulting-Logo-1.webp' },
    { name: 'Penta', image: '/Financial-Consulting-Logo-2.webp' },
    { name: 'NATUSKA', image: '/Financial-Consulting-Logo-3.webp' },
    { name: 'EXEO', image: '/Financial-Consulting-Logo-4.webp' },
    { name: 'un', image: '/Financial-Consulting-Logo-5.webp' },
    { name: 'SAONA', image: '/Financial-Consulting-Logo-9.webp' }
  ]

  return (
    <div className="w-full overflow-hidden">
      <div className="flex items-center justify-center space-x-8 lg:space-x-12">
        {logos.map((logo, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex-shrink-0"
          >
            <div className="h-16 lg:h-20 flex items-center justify-center">
              <Image
                src={logo.image}
                alt={logo.name}
                width={120}
                height={60}
                className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300 max-w-full max-h-full"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
} 