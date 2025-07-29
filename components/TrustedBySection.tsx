'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function TrustedBySection() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

  const logos = [
    { name: 'Network', image: '/Financial-Consulting-Logo-1.webp' },
    { name: 'Penta', image: '/Financial-Consulting-Logo-2.webp' },
    { name: 'NATUSKA', image: '/Financial-Consulting-Logo-3.webp' },
    { name: 'EXEO', image: '/Financial-Consulting-Logo-4.webp' },
    { name: 'un', image: '/Financial-Consulting-Logo-5.webp' },
    { name: 'SAONA', image: '/Financial-Consulting-Logo-9.webp' }
  ]

  // Handle responsive breakpoints
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Infinite scroll functionality - moves one logo at a time
  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prevPosition) => {
        // Move one logo width at a time (responsive based on screen size)
        const moveAmount = isMobile ? 50 : isTablet ? 33.333 : 16.666
        const newPosition = prevPosition + moveAmount
        // Reset to 0 when we've scrolled through all logos
        return newPosition >= 100 ? 0 : newPosition
      })
    }, 2000) // Change every 2 seconds for smoother effect

    return () => clearInterval(interval)
  }, [isMobile, isTablet])

  return (
    <section className="pt-12 pb-6 bg-white w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-8">
            TRUSTED BY COMPANIES ALL OVER THE WORLD
          </h2>
          
          {/* Infinite Scroll Carousel Container */}
          <div className="relative overflow-hidden">
            <div className="flex transition-transform duration-1000 ease-in-out"
                 style={{ 
                   transform: `translateX(-${scrollPosition}%)`
                 }}>
              {/* Duplicate logos for seamless infinite scroll */}
              {[...logos, ...logos].map((logo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex-shrink-0 px-2 sm:px-4 ${
                    isMobile ? 'w-1/2' : isTablet ? 'w-1/3' : 'w-1/6'
                  }`}
                >
                  <div className="h-20 sm:h-24 md:h-32 lg:h-36 flex items-center justify-center">
                    <Image
                      src={logo.image}
                      alt={logo.name}
                      width={200}
                      height={100}
                      className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300 max-w-full max-h-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>


        </motion.div>
      </div>
    </section>
  )
} 