'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function SimplePRFContent() {
  return (
    <section className="py-8 sm:py-10 lg:py-12 xl:py-20 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* What is PRF Therapy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 text-center lg:text-left"
          >
            <div>
              <h2 className="text-[27px] sm:text-3xl lg:text-4xl font-normal text-gray-900 mb-6 leading-tight">
                What is Platelet Rich Fibrin Therapy (PRF)?
              </h2>
              <div className="space-y-4 text-[16px] text-gray-600 leading-relaxed" style={{ color: '#656565' }}>
                <p>
                  Platelet Rich Fibrin therapy is the practice of utilizing the multiple healing compounds naturally found in our blood plasma to create a membrane that is used to enhance the healing process of a socket site from oral surgery. Treatments that may use PRF therapy include <span className="font-semibold text-blue-600">Extractions</span>, <span className="font-semibold text-blue-600">Bone Grafts</span>, & <span className="font-semibold text-blue-600">Dental Implants</span>.
                </p>
                <p>
                  Blood plasma is made up of White Blood Cells (Leukocytes), Platelets, Fibrin, & Stem Cells that all promote healing in the human body. The therapy takes place in office and uses a small amount of the patient's blood by blood draw before treatment begins.
                </p>
              </div>
            </div>
          </motion.div>

          {/* PRF Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative w-full h-[400px] sm:h-[500px] lg:h-full min-h-[400px] rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="/PRF.jpeg"
              alt="Platelet Rich Fibrin Therapy"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </motion.div>
        </div>

        {/* Benefits of PRF */}
        <div className="mt-12 lg:mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: PRF2 Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1"
            >
              <Image
                src="/prf2.jpeg"
                alt="Platelet Rich Fibrin Therapy Process"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </motion.div>

            {/* Right: Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6 text-center lg:text-left order-1 lg:order-2"
            >
              <h2 className="text-[27px] sm:text-3xl lg:text-4xl font-normal text-gray-900 mb-6 leading-tight">
                What are the benefits of PRF?
              </h2>
              <div className="space-y-4 text-[16px] text-gray-600 leading-relaxed" style={{ color: '#656565' }}>
                <p>
                  <span className="font-bold text-blue-600">Spreckels Park Dental</span> is one of the first offices in the Central Valley area practicing in PRF Therapy during oral surgery since 2015 with hundreds of procedures with excellent end results.
                </p>
                <p>
                  Thanks to the healing factors in blood plasma, there are plenty of benefits to the therapy such as an easier and quicker healing process, less swelling, less chances of rejection, protects the site from infection, & provides good blood flow to the socket site to reduce risks of a dry socket.
                </p>
              </div>

              {/* Benefits List */}
              <div className="mt-8 space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-[16px] text-gray-700" style={{ color: '#656565' }}>
                    <span className="font-semibold">Faster Healing:</span> Accelerated recovery time compared to traditional methods
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-[16px] text-gray-700" style={{ color: '#656565' }}>
                    <span className="font-semibold">Reduced Swelling:</span> Natural anti-inflammatory properties minimize post-surgical swelling
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-[16px] text-gray-700" style={{ color: '#656565' }}>
                    <span className="font-semibold">Lower Rejection Risk:</span> Uses your own blood, eliminating rejection concerns
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-[16px] text-gray-700" style={{ color: '#656565' }}>
                    <span className="font-semibold">Infection Protection:</span> Natural barrier protects the surgical site from infection
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-[16px] text-gray-700" style={{ color: '#656565' }}>
                    <span className="font-semibold">Prevents Dry Socket:</span> Enhanced blood flow reduces the risk of dry socket complications
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#441018] to-[#5a1a2a] p-8 sm:p-10 rounded-2xl border border-gray-200 text-center mt-12 lg:mt-16 shadow-xl"
          >
            <h3 className="text-[27px] sm:text-2xl lg:text-3xl font-semibold text-white mb-4">
              Experience Advanced Healing
            </h3>
            <p className="text-[16px] sm:text-lg text-gray-100 mb-6 max-w-2xl mx-auto">
              Join hundreds of satisfied patients who have benefited from our PRF therapy procedures. Schedule your consultation today.
            </p>
            <a 
              href="https://spreckels-dental-site.vercel.app/appointment-request"
              className="inline-block bg-white text-[#441018] border border-white px-8 py-4 rounded-lg font-semibold text-[15px] sm:text-base uppercase tracking-wide hover:bg-gray-100 hover:border-white transition-colors duration-200 cursor-pointer shadow-lg"
            >
              Schedule Your PRF Consultation
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 