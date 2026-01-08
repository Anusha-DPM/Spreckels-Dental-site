'use client'

import { motion } from 'framer-motion'

export default function CosmeticDentistrySection() {
  return (
    <section className="py-8 sm:py-10 lg:py-12 xl:py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-[27px] sm:text-3xl lg:text-4xl font-normal text-gray-900 mb-8">
            Cosmetic Dentistry in Manteca, CA
          </h2>
          
          <div className="space-y-6 text-[16px] text-gray-700 leading-relaxed text-center">
            <p>
              Dr. Parikh, Dr. Arora, and the team at Spreckels Park Dental aim to provide patients with their desired beautiful smiles. A smile says it all!
            </p>
            
            <p>
              A variety of in-house cosmetic treatments are offered at our Manteca office, from repairing chips to brightening teeth, ensuring comfortable care from trusted professionals.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 