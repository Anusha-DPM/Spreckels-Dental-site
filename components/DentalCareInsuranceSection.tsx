'use client'

import { motion } from 'framer-motion'

export default function DentalCareInsuranceSection() {
  return (
    <section className="py-8 sm:py-10 lg:py-12 xl:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-[27px] sm:text-3xl lg:text-4xl font-normal text-gray-900 mb-8">
            Dental Care and Insurance
          </h2>
          
          <div className="space-y-6 text-[16px] text-gray-700 leading-relaxed mb-12">
            <p>
              Most services are insurance-covered, except for cosmetic/aesthetic treatments like teeth whitening and veneers. We offer multiple payment plans for affordability and provide complimentary consultations for new and existing patients.
            </p>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-[#441018] rounded-xl p-8 max-w-3xl mx-auto"
          >
            <h3 className="text-[27px] sm:text-2xl font-normal text-white mb-4">
              Start Your Journey Towards a Brighter Smile Today!
            </h3>
            <p className="text-[16px] text-gray-200 mb-6">
              Choosing a dentist doesn't have to be hard! Spreckels Park Dental offers a full range of general dentistry services and cosmetic treatments for all your oral health needs. Call our Manteca, CA office today at +1 (209) 825-1030 to schedule an appointment!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/appointment-request"
                className="px-8 py-3 bg-white text-[#441018] border border-white rounded-lg font-semibold hover:bg-transparent hover:text-white hover:border-white transition-colors duration-200 cursor-pointer inline-block text-center text-[15px] sm:text-base"
              >
                Book Appointment
              </a>
              <a 
                href="/contact"
                className="px-8 py-3 bg-transparent text-white border border-white rounded-lg font-semibold hover:bg-white hover:text-[#441018] hover:border-white transition-colors duration-200 cursor-pointer inline-block text-center text-[15px] sm:text-base"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 
