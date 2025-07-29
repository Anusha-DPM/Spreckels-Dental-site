'use client'

import { motion } from 'framer-motion'

interface Value {
  icon: string
  title: string
  description: string
}

interface ValuesSectionProps {
  title?: string
  subtitle?: string
  description?: string
  values?: Value[]
  className?: string
}

export default function ValuesSection({
  title = "Shaping futures, one decision at a time",
  subtitle = "OUR VALUES",
  description = "Our core values guide everything we do, ensuring we provide the highest quality financial services while maintaining the trust and confidence of our clients.",
  values = [
    {
      icon: "👁️",
      title: "Accessibility",
      description: "We believe in easy access to financial knowledge and user-friendly interaction with our services."
    },
    {
      icon: "⭐",
      title: "Client-Centered",
      description: "Our approach prioritizes client needs, ensuring personalized solutions that work for you."
    },
    {
      icon: "🤝",
      title: "Integrity",
      description: "We uphold honesty and transparency in all our dealings, building trust with every interaction."
    }
  ],
  className = ""
}: ValuesSectionProps) {
  return (
    <section className={`py-16 lg:py-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-4">
            {subtitle}
          </h3>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-8 rounded-xl hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 