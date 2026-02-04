'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function SimpleDentalImplantsContent() {
  const implantServices = [
    {
      price: "",
      title: "Dental Implants",
      image: "/dental implant.jpg",
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
      image: "/hybrid denture.jpg",
      description: [
        "Includes two implants and an implant retained denture"
      ],
      details: "Book a consultation for more details.",
      buttonText: "BOOK YOUR FREE CONSULTATION TODAY"
    },
    {
      price: "$14,999",
      title: "all on x per arch",
      image: "/all on x per arch1.jpeg",
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
      image: "/all on x per arch2.jpeg",
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
    <section className="py-8 sm:py-10 lg:py-12 xl:py-20 bg-white border-t border-gray-200">
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
                  <div className="text-[27px] sm:text-3xl font-bold text-orange-500 mb-2">
                    {service.price}
                  </div>
                )}
                <div className={`font-semibold text-[22px] sm:text-lg ${service.price ? 'text-gray-900' : 'text-orange-500'}`}>
                  {service.title}
                </div>
              </div>

              {/* Service Image */}
              <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden">
                <Image
                  src={service.image}
                  alt={`${service.title} - Spreckels Park Dental`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Description */}
              <div className="p-6 text-center">
                <div className="space-y-2 mb-4">
                  {service.description.map((desc, descIndex) => (
                    <p key={descIndex} className="text-[16px] text-gray-600 leading-relaxed" style={{ color: '#656565' }}>
                      {desc}
                    </p>
                  ))}
                </div>
                
                {service.details && (
                  <div className="mb-6">
                    {Array.isArray(service.details) ? (
                      <div className="space-y-1">
                        {service.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-[16px] text-gray-500" style={{ color: '#656565' }}>
                            {detail}
                          </p>
                        ))}
                      </div>
                    ) : (
                      <p className="text-[16px] text-gray-500" style={{ color: '#656565' }}>
                        {service.details}
                      </p>
                    )}
                  </div>
                )}

                {/* CTA Button */}
                <a 
                  href="https://spreckels-dental-site.vercel.app/appointment-request"
                  className="w-full bg-orange-500 text-white py-3 px-4 rounded-lg font-semibold text-[15px] sm:text-sm uppercase tracking-wide hover:bg-orange-600 transition-colors duration-200 inline-block text-center cursor-pointer"
                  style={{ backgroundColor: '#f97316' }}
                >
                  {service.buttonText}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 