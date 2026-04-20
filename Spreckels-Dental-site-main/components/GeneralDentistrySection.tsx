'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function GeneralDentistrySection() {
  return (
    <section className="py-8 sm:py-10 lg:py-12 xl:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <h2 className="text-[27px] sm:text-3xl lg:text-4xl font-normal text-gray-900 mb-8">
              General Dentistry in Manteca, CA
            </h2>
            
            <div className="space-y-6 text-[16px] text-gray-700 leading-relaxed">
              <p>
                Dentistry is both an art and a science, covering everything from emergency situations to aesthetic needs, all under the umbrella of general dentistry. This challenging and inspiring work is what drives our team at Spreckels Park Dental.
              </p>
              
              <p>
                Dr. Parikh and Dr. Arora are general dentists who offer comprehensive services and specialize in full mouth restoration. They have the ability to restore a patient's bite and aesthetics, ensuring both function and beauty.
              </p>
              
              <p>
                Dr. Parikh and Dr. Arora maintain continuous dental education, staying updated with the latest technology including 3D scanning and digital imagery. They maintain their credentials to ensure patient comfort and the highest quality of care.
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
                src="/General Dentistry in Manteca.jpeg"
                alt="Spreckels Park Dental General Dentistry Services in Manteca, CA"
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