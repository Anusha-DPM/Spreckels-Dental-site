'use client'

import { motion } from 'framer-motion'

export default function SimpleTeethWhiteningCTA() {
  return (
    <section className="py-8 sm:py-10 lg:py-12 xl:py-20" style={{ backgroundColor: '#441018' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-[27px] sm:text-3xl lg:text-4xl font-normal text-white mb-6 leading-tight"
          >
            Ready for a Brighter, Whiter Smile?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-[16px] sm:text-xl text-red-100 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Don't let stained teeth hold you back from showing your best smile.
            Experience professional teeth whitening treatments that deliver real results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <a 
              href="https://spreckels-dental-site.vercel.app/appointment-request"
              className="px-8 py-4 bg-white text-gray-900 border border-white rounded-lg hover:bg-transparent hover:text-white transition-colors duration-200 font-semibold cursor-pointer inline-block text-center text-[15px] sm:text-base"
            >
              BOOK A CONSULTATION
            </a>
            <a 
              href="tel:(209) 825-1030"
              className="px-8 py-4 bg-transparent text-white border border-white rounded-lg hover:bg-white hover:text-red-800 transition-colors duration-200 font-semibold cursor-pointer inline-block text-center text-[15px] sm:text-base"
            >
              Call Us Today
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="bg-white bg-opacity-10 rounded-xl p-6 max-w-2xl mx-auto"
          >
            <h3 className="text-[22px] sm:text-xl font-semibold text-white mb-4">
              Spreckels Park Dental
            </h3>
            <p className="text-red-100 text-[16px] sm:text-lg mb-2">
              Manteca, CA
            </p>
            <p className="text-red-100 text-[22px] sm:text-xl font-semibold mb-4">
              (209) 825-1030
            </p>
            <p className="text-red-100 text-[16px]">
              We provide safe and effective teeth whitening treatments to help you achieve the bright, white smile you deserve.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 