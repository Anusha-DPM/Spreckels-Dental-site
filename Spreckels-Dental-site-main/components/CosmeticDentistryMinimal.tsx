'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function CosmeticDentistryMinimal() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-[140px] lg:pt-[140px] pb-16 lg:pb-20" style={{ backgroundColor: '#441018' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-8 leading-tight"
            >
              Cosmetic Dentistry in Manteca, CA
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 text-lg lg:text-xl text-gray-200 leading-relaxed"
            >
              <p>
                Dr. Parikh, Dr. Arora, and the team at Spreckels Park Dental aim to provide patients with their desired beautiful smiles. A smile says it all!
              </p>
              <p>
                A variety of in-house cosmetic treatments are offered at our Manteca office, from repairing chips to brightening teeth, ensuring comfortable care from trusted professionals.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Maintaining Your New Smile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                  Maintaining Your New Smile
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p>
                    After cosmetic dental work, it's important to maintain your new smile with daily brushing and flossing. Avoid smoking and be mindful of colored foods like coffee, ketchup, and fruit juice after teeth whitening, as they can increase the risk of staining.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="relative h-80 lg:h-96 rounded-lg overflow-hidden">
                  <Image
                    src="/financial-consulting-feature-1.webp"
                    alt="Dental team consultation"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Divider */}
          <div className="border-t border-gray-200 my-16"></div>

          {/* Dental Referrals */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20 text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              Dental Referrals
            </h2>
            <div className="text-gray-700 leading-relaxed text-lg max-w-3xl mx-auto">
              <p>
                If you require specialty care outside our scope, such as root canals or orthodontics, we encourage referrals to specialists. We always strive to do what's best for the patient, whether that's in-house care or through a referral.
              </p>
            </div>
          </motion.div>

          {/* Divider */}
          <div className="border-t border-gray-200 my-16"></div>

          {/* Dental Care and Insurance */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              Dental Care and Insurance
            </h2>
            <div className="text-gray-700 leading-relaxed text-lg max-w-3xl mx-auto">
              <p>
                Most services are insurance-covered, except for cosmetic/aesthetic treatments like teeth whitening and veneers. We offer multiple payment plans for affordability and provide complimentary consultations for new and existing patients.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16" style={{ backgroundColor: '#441018' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
              Ready to Transform Your Smile?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Schedule your complimentary consultation today and take the first step towards your dream smile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-[#441018] rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                Book Consultation
              </button>
              <button className="px-8 py-4 bg-transparent text-white border border-white rounded-lg font-semibold hover:bg-white hover:text-[#441018] transition-colors duration-200">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 