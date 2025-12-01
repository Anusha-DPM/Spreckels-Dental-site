'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function MaintainingSmileSection() {
  return (
    <section className="py-8 sm:py-10 lg:py-12 xl:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[27px] sm:text-3xl lg:text-4xl font-normal text-gray-900 mb-8">
              Maintaining Your New Smile
            </h2>
            
            <div className="space-y-6 text-[16px] text-gray-700 leading-relaxed">
              <p>
                After cosmetic dental work, it's important to maintain your new smile with daily brushing and flossing. Avoid smoking and be mindful of colored foods like coffee, ketchup, and fruit juice after teeth whitening, as they can increase the risk of staining.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/Maintaining Your New Smile.jpeg"
                alt="Spreckels Park Dental - Maintaining Your Beautiful New Smile"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 