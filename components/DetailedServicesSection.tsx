'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface Service {
  icon: string
  title: string
  description: string
  image: string
  features: string[]
}

export default function DetailedServicesSection() {
  const services: Service[] = [
    {
      icon: "💰",
      title: "Financial Planning",
      description: "Comprehensive financial planning tailored to your unique goals and circumstances. We help you create a roadmap for financial success.",
      image: "/financial-consulting-feature-1.webp",
      features: [
        "Retirement planning",
        "Investment strategy",
        "Tax optimization",
        "Estate planning"
      ]
    },
    {
      icon: "📈",
      title: "Investment Management",
      description: "Professional investment management services designed to maximize returns while managing risk according to your tolerance level.",
      image: "/mission.webp",
      features: [
        "Portfolio diversification",
        "Risk assessment",
        "Market analysis",
        "Performance tracking"
      ]
    },
    {
      icon: "🏢",
      title: "Business Consulting",
      description: "Strategic business consulting to help your company grow, optimize operations, and achieve sustainable financial success.",
      image: "/financial-consulting-testimonial.webp",
      features: [
        "Business strategy",
        "Financial modeling",
        "Growth planning",
        "Operational efficiency"
      ]
    },
    {
      icon: "🛡️",
      title: "Risk Management",
      description: "Comprehensive risk management solutions to protect your assets and ensure financial security for you and your family.",
      image: "/financial-consulting-feature-1.webp",
      features: [
        "Insurance planning",
        "Asset protection",
        "Liability management",
        "Emergency funds"
      ]
    },
    {
      icon: "📊",
      title: "Tax Advisory",
      description: "Expert tax advisory services to minimize your tax burden and ensure compliance with all applicable regulations.",
      image: "/mission.webp",
      features: [
        "Tax planning",
        "Compliance review",
        "Deduction optimization",
        "Tax-efficient investing"
      ]
    },
    {
      icon: "🎯",
      title: "Wealth Management",
      description: "Holistic wealth management services that integrate all aspects of your financial life for optimal results.",
      image: "/financial-consulting-testimonial.webp",
      features: [
        "Asset allocation",
        "Wealth preservation",
        "Legacy planning",
        "Philanthropic giving"
      ]
    }
  ]

  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-4">
            OUR SERVICES
          </h3>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-normal text-gray-900 mb-6">
            Comprehensive Financial Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer a wide range of financial services designed to help you achieve your goals and secure your financial future.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100"
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Service Content */}
              <div className="p-6">
                {/* Icon and Title */}
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="mb-6 space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Read More Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
                >
                  Read More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 