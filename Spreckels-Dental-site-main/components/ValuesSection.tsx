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
  title = "Building healthy smiles with care and compassion",
  subtitle = "OUR VALUES",
  description = "Our core values guide everything we do, ensuring we provide the highest quality dental care while maintaining the trust and confidence of our patients.",
  values = [
    {
      icon: "👁️",
      title: "Accessibility",
      description: "We ensure easy access to dental care with flexible scheduling and a welcoming environment for all patients."
    },
    {
      icon: "⭐",
      title: "Patient-Centered",
      description: "Your comfort and needs come first — we tailor every dental treatment to fit your unique smile and preferences."
    },
    {
      icon: "🤝",
      title: "Integrity",
      description: "We provide honest diagnoses, transparent pricing, and trustworthy care in every step of your dental journey."
    }
  ],
  className = ""
}: ValuesSectionProps) {
  return (
    <section className={`py-8 sm:py-10 lg:py-12 xl:py-24 ${className}`}>
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
          <h2 className="text-[27px] sm:text-3xl lg:text-4xl xl:text-5xl font-normal text-gray-900 mb-6">
            {title}
          </h2>
          <p className="text-[16px] sm:text-lg text-gray-600 max-w-3xl mx-auto">
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
              <h3 className="text-[22px] sm:text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-[16px] text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 