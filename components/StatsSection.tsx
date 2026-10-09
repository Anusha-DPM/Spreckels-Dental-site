'use client'

import { motion } from 'framer-motion'

interface Stat {
  number: string
  label: string
}

interface StatsSectionProps {
  title?: string
  description?: string
  stats?: Stat[]
  className?: string
  bgColor?: string
}

export default function StatsSection({
  title = "Your financial freedom journey starts here",
  description = "We help you achieve your financial goals with confidence and clarity.",
  stats = [
    { number: "10+", label: "Years in business" },
    { number: "$500,000+", label: "Assets Managed" },
    { number: "300+", label: "Workshops conducted" },
    { number: "40,000+", label: "Clients served" }
  ],
  className = "",
  bgColor = "bg-gray-50"
}: StatsSectionProps) {
  return (
    <section className={`py-16 lg:py-24 ${bgColor} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
            {title}
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            {description}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg text-center"
            >
              <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 