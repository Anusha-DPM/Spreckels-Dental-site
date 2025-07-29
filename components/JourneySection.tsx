'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface Testimonial {
  name: string
  text: string
  avatar: string
  nameColor: string
  avatarPosition: 'left' | 'right'
}

export default function JourneySection() {
  const testimonials: Testimonial[] = [
    {
      name: "Sophie Martinez",
      text: "Before partnering with Outgrid, I felt lost in a sea of financial jargon and uncertainty. Their team didn't just provide me with guidance; they equipped me with the tools and knowledge.",
      avatar: "/financial-consulting-testimonial.webp",
      nameColor: "text-green-600",
      avatarPosition: 'left'
    },
    {
      name: "Ethan Park",
      text: "Their approach is personal, understanding, and incredibly efficient. I've seen impressive returns on my investments and gained a wealth of knowledge in the process.",
      avatar: "/financial-consulting-feature-1.webp",
      nameColor: "text-blue-600",
      avatarPosition: 'right'
    }
  ]

  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-normal text-gray-900 mb-6">
            Our journey to financial expertise
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Over the years, we've grown from a small firm to a trusted name in the financial consulting industry, but our core belief remains the same — everyone deserves the right to a secure financial future.
          </p>
        </motion.div>

        {/* Main Content - Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          {/* Left Column - Testimonials and Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-3xl p-8 lg:p-12 shadow-lg flex flex-col justify-center"
          >
            {/* Top Testimonial */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-md mb-8"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Image
                    src={testimonials[0].avatar}
                    alt={testimonials[0].name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4 className={`font-semibold text-lg mb-2 ${testimonials[0].nameColor}`}>
                    {testimonials[0].name}
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {testimonials[0].text}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Central Logo */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex justify-center mb-8"
            >
              <div className="relative">
                {/* Outer layers */}
                <div className="absolute inset-0 bg-gray-200 rounded-2xl transform scale-110 opacity-30"></div>
                <div className="absolute inset-0 bg-gray-300 rounded-2xl transform scale-105 opacity-50"></div>
                
                {/* Main logo container */}
                <div className="relative bg-white rounded-2xl p-6 shadow-lg w-24 h-24 flex items-center justify-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-md">
                    <svg 
                      className="w-6 h-6 text-white" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Bottom Testimonial */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-md"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-1">
                  <h4 className={`font-semibold text-lg mb-2 ${testimonials[1].nameColor}`}>
                    {testimonials[1].name}
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {testimonials[1].text}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <Image
                    src={testimonials[1].avatar}
                    alt={testimonials[1].name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Team Photograph */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative h-96 lg:h-[600px] xl:h-[700px] rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="/mission.webp"
              alt="Team of financial consultants in office"
              fill
              className="object-cover"
            />
            {/* Optional overlay for better text contrast if needed */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 