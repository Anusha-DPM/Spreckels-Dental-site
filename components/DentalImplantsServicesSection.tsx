'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function DentalImplantsServicesSection() {
  const implantServices = [
    {
      title: "Single Dental Implant",
      subtitle: "Basic",
      price: null,
      icon: "🦷",
      color: "from-blue-500 to-blue-600",
      description: [
        "Small titanium posts that replace the roots of missing teeth",
        "Inserted into the jawbone during a minor surgical procedure",
        "Lifelike porcelain tooth crown is attached"
      ],
      features: ["Permanent solution", "Natural look & feel", "Preserves jawbone"]
    },
    {
      title: "Implant Denture",
      subtitle: "Stabilized",
      price: "$5,999",
      icon: "😁",
      color: "from-green-500 to-green-600",
      description: [
        "Includes two implants and an Implant retained denture",
        "Book a consultation for more details."
      ],
      features: ["Two implants included", "Stable denture", "Improved comfort"]
    },
    {
      title: "All-on-X Treatment",
      subtitle: "Complete Arch",
      price: "$14,999",
      icon: "👑",
      color: "from-purple-500 to-purple-600",
      description: [
        "Includes all Extraction, Dental Implants & Interim Denture",
        "Does not include Final Restoration",
        "Bone grafts are not included.",
        "Financing is available"
      ],
      features: ["Full arch restoration", "Same-day teeth", "Immediate function"]
    },
    {
      title: "All-on-X Complete",
      subtitle: "Premium",
      price: "$19,999",
      icon: "💎",
      color: "from-pink-500 to-pink-600",
      description: [
        "Includes all Extractions, Dental Implants, Interim Denture & Final Restoration",
        "Bone grafts are not included.",
        "Financing is available"
      ],
      features: ["Complete treatment", "Final restoration", "Lifetime solution"]
    }
  ]

  return (
    <section className="py-20 -mt-10 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Choose Your Implant Solution
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From single tooth replacement to full arch restoration, we offer comprehensive dental implant solutions tailored to your needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {implantServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                {/* Header with Icon and Price */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                      {service.subtitle && (
                        <p className="text-sm text-gray-600 mt-1">{service.subtitle}</p>
                      )}
                    </div>
                  </div>
                  {service.price && (
                    <div className="text-3xl font-bold text-[#441018]">{service.price}</div>
                  )}
                </div>

                {/* Description */}
                <div className="mb-6">
                  {service.description.map((item, itemIndex) => (
                    <p key={itemIndex} className="text-gray-600 mb-3 leading-relaxed">
                      {item}
                    </p>
                  ))}
                </div>

                {/* Features */}
                {service.features.length > 0 && (
                  <div className="mb-6">
                    <div className="grid grid-cols-1 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-[#441018] to-[#5a1a22] hover:from-[#5a1a22] hover:to-[#441018] text-white py-4 px-6 rounded-xl transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
                >
                  BOOK YOUR FREE CONSULTATION TODAY!
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Standalone CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Smile?</h3>
            <p className="text-lg mb-6 opacity-90">
              Schedule your consultation today and discover which implant solution is right for you.
            </p>
            <button className="px-10 py-4 bg-white text-blue-600 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
              BOOK A CONSULTATION
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 