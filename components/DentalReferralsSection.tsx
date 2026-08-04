'use client'

import { motion } from 'framer-motion'

export default function DentalReferralsSection() {
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
            Dental Referrals
          </h2>
          
          <div className="space-y-6 text-[16px] text-gray-700 leading-relaxed">
            <p>
              If you require specialty care outside our scope, such as root canals or orthodontics, we encourage referrals to specialists. We always strive to do what's best for the patient, whether that's in-house care or through a referral.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 