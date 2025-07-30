'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function SimpleDentalImplantsContent() {
  const implantServices = [
    {
      price: "",
      title: "Dental Implants",
      image: "/dental-implants.webp",
      description: [
        "Small titanium posts that replace the roots of missing teeth",
        "Inserted into the jawbone during a minor surgical procedure",
        "Lifelike porcelain tooth crown is attached"
      ],
      details: "",
      buttonText: "BOOK YOUR FREE CONSULTATION TODAY"
    },
    {
      price: "$5,999",
      title: "Implant Denture",
      image: "/implant-denture.webp",
      description: [
        "Includes two implants and an implant retained denture"
      ],
      details: "Book a consultation for more details.",
      buttonText: "BOOK YOUR FREE CONSULTATION TODAY"
    },
    {
      price: "$14,999",
      title: "all on x per arch",
      image: "/all-on-x.webp",
      description: [
        "Includes all Extraction, Dental Implants & Interim Denture"
      ],
      details: [
        "Does not include Final Restoration",
        "Bone grafts are not included.",
        "Financing is available"
      ],
      buttonText: "BOOK YOUR FREE CONSULTATION TODAY"
    },
    {
      price: "$19,999",
      title: "all on x per arch",
      image: "/all-on-x-final.webp",
      description: [
        "Includes all Extractions, Dental Implants, Interim Denture & Final Restoration"
      ],
      details: [
        "Bone grafts are not included.",
        "Financing is available"
      ],
      buttonText: "BOOK YOUR FREE CONSULTATION TODAY"
    }
  ]

  return (
    <section className="py-16 lg:py-20 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {implantServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Price and Title */}
              <div className="p-6 text-center border-b border-gray-100">
                {service.price && (
                  <div className="text-3xl font-bold text-orange-500 mb-2">
                    {service.price}
                  </div>
                )}
                <div className={`font-semibold text-lg ${service.price ? 'text-gray-900' : 'text-orange-500'}`}>
                  {service.title}
                </div>
              </div>

              {/* Image Placeholder */}
              <div className="relative h-48 bg-gray-100 flex items-center justify-center">
                <div className="text-gray-400 text-center">
                  <div className="w-16 h-16 mx-auto mb-2 bg-gray-200 rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm">Service Image</p>
                </div>
              </div>

              {/* Description */}
              <div className="p-6">
                <div className="space-y-2 mb-4">
                  {service.description.map((desc, descIndex) => (
                    <p key={descIndex} className="text-gray-600 leading-relaxed" style={{ color: '#656565' }}>
                      {desc}
                    </p>
                  ))}
                </div>
                
                {service.details && (
                  <div className="mb-6">
                    {Array.isArray(service.details) ? (
                      <div className="space-y-1">
                        {service.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-500 text-sm" style={{ color: '#656565' }}>
                            {detail}
                          </p>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-500 text-sm" style={{ color: '#656565' }}>
                        {service.details}
                      </p>
                    )}
                  </div>
                )}

                {/* CTA Button */}
                <button 
                  className="w-full bg-orange-500 text-white py-3 px-4 rounded-lg font-semibold text-sm uppercase tracking-wide hover:bg-orange-600 transition-colors duration-200"
                  style={{ backgroundColor: '#f97316' }}
                >
                  {service.buttonText}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 