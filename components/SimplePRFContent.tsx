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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6 text-center lg:text-left"
          >
            <div>
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
            </div>

            {/* Call to Action */}
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 text-center">
              <h3 className="text-[22px] sm:text-xl font-semibold text-gray-900 mb-4">
                Experience Advanced Healing
              </h3>
              <p className="text-[16px] text-gray-600 mb-6" style={{ color: '#656565' }}>
                Join hundreds of satisfied patients who have benefited from our PRF therapy procedures.
              </p>
              <a 
                href="https://spreckels-dental-site.vercel.app/appointment-request"
                className="block w-full bg-orange-500 text-white py-3 px-6 rounded-lg font-semibold text-[15px] sm:text-sm uppercase tracking-wide hover:bg-orange-600 transition-colors duration-200 text-center cursor-pointer"
              >
                Schedule Your PRF Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 