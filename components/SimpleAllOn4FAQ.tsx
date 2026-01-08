'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function SimpleAllOn4FAQ() {
  return (
    <section className="py-8 sm:py-10 lg:py-12 xl:py-20 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* All-on-4® Treatment Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 text-center lg:text-left"
          >
            <div>
              <h2 className="text-[27px] sm:text-3xl lg:text-4xl font-normal text-gray-900 mb-6 leading-tight">
                All-on-4® Implant-Supported Denture Treatment
              </h2>
              <div className="space-y-4 text-[16px] text-gray-600 leading-relaxed" style={{ color: '#656565' }}>
                <p>
                  All-on-4® implant-supported denture treatment is the process of placing a minimum of four dental implants in each jaw to stabilize a non-removable denture. So your teeth are fixed to the jaw.
                </p>
                <p>
                  It combines the best of both worlds: the ability to restore a fully edentulous arch with the stability of dental implants.
                </p>
                <p>
                  Implant-supported dentures provide much stronger support as the implants act as an anchor for the dentures to provide an easier experience for you, our patient.
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
              <h3 className="text-[22px] sm:text-xl font-semibold text-gray-900 mb-4">
                Dental Implants Manteca, CA
              </h3>
              <p className="text-[16px] text-gray-600 mb-6" style={{ color: '#656565' }}>
                Spreckels Park Dental provides All-on-4® implant-supported dentures for greater stability and comfort.
              </p>
              <div className="space-y-3">
                <p className="text-[22px] sm:text-lg font-semibold text-gray-900">
                  Call our Manteca, CA office today at +1 (209) 825-1030
                </p>
                <p className="text-[16px] text-gray-600" style={{ color: '#656565' }}>
                  to schedule a consultation and see if you are a good candidate!
                </p>
              </div>
              <a 
                href="https://spreckels-dental-site.vercel.app/appointment-request"
                className="mt-6 w-full bg-orange-500 text-white py-3 px-6 rounded-lg font-semibold text-[15px] sm:text-sm uppercase tracking-wide hover:bg-orange-600 transition-colors duration-200 inline-block text-center cursor-pointer"
              >
                Schedule Consultation
              </a>
            </div>
          </motion.div>

          {/* Dr. Rujul G Parikh Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                                 {/* Doctor Image */}
                 <div className="w-24 h-24 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden">
                   <Image
                     src="/Rujul.jpeg"
                     alt="Dr. Rujul G Parikh"
                     width={96}
                     height={96}
                     className="w-full h-full object-cover"
                   />
                 </div>
                
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-[22px] sm:text-2xl font-semibold text-gray-900 mb-2">
                    Dr. Rujul G Parikh
                  </h3>
                  <p className="text-[16px] sm:text-lg text-gray-600 mb-4" style={{ color: '#656565' }}>
                    DDS FICOI AFAAID
                  </p>
                  
                  <div className="space-y-3 text-[16px] text-gray-600 leading-relaxed" style={{ color: '#656565' }}>
                    <p>
                      Dr. Parikh has been practicing for more than 25 years and he is passionate about achieving excellence in dentistry with a focus on Dental Implants. He has been trained by many national and international surgeons to become an Associate Fellow of AAID and a Fellow of ICOI and GDIA.
                    </p>
                    <p>
                      Over the years he has invested to advance his knowledge in many phases of dentistry including Dental Implants, Dental Extractions, Cosmetic and Restorative dentistry, Orthodontics, TMD, Sleep Apnea, Endodontics and many others and have treated thousands of patients.
                    </p>
                    <p>
                      He recognizes the importance of ongoing dental education for enhancing the quality of patient care, ensuring patient safety, and staying abreast of the latest developments in techniques, materials, and technology. He actively pursues education across all facets of dentistry to remain well-informed and proficient in his field.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            
          </motion.div>
        </div>

        {/* Trademark Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200"
        >
          <p className="text-[16px] sm:text-sm text-gray-400">
            All-on-4® is a trademark of Nobel Biocare.
          </p>
        </motion.div>
      </div>
    </section>
  )
} 