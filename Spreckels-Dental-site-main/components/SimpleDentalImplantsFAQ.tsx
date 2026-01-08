'use client'

import { motion } from 'framer-motion'

export default function SimpleDentalImplantsFAQ() {
  const faqs = [
    {
      question: "How long do dental implants last?",
      answer: "With proper care and maintenance, dental implants can last a lifetime. They are designed to be a permanent solution for missing teeth."
    },
    {
      question: "Is the implant procedure painful?",
      answer: "The procedure is performed under local anesthesia, so you won't feel pain during the surgery. Some mild discomfort may occur during the healing period, which can be managed with over-the-counter pain medication."
    },
    {
      question: "How long does the entire process take?",
      answer: "The complete process typically takes 3-6 months, including the healing period. This allows time for the implants to properly fuse with your jawbone before placing the final restoration."
    },
    {
      question: "Who is a good candidate for dental implants?",
      answer: "Most adults with good overall health and sufficient jawbone density are good candidates. We'll evaluate your specific situation during the consultation to determine if implants are right for you."
    },
    {
      question: "How do I care for my dental implants?",
      answer: "Dental implants require the same care as natural teeth - regular brushing, flossing, and dental check-ups. No special maintenance is required."
    },
    {
      question: "Are dental implants covered by insurance?",
      answer: "Coverage varies by insurance plan. Many plans provide partial coverage for dental implants. We can help you understand your specific coverage and explore financing options."
    }
  ]

  return (
    <section className="py-8 sm:py-10 lg:py-12 xl:py-20 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <div className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-4">
            Common Questions
          </div>
          <h2 className="text-[27px] sm:text-3xl lg:text-4xl font-normal text-gray-900 mb-4 leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-[16px] sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed" style={{ color: '#656565' }}>
            Get answers to common questions about dental implants
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 text-center lg:text-left"
            >
              <h3 className="text-[22px] sm:text-lg lg:text-xl font-semibold text-gray-900 mb-4 leading-tight">
                {faq.question}
              </h3>
              <p className="text-[16px] text-gray-600 leading-relaxed" style={{ color: '#656565' }}>
                {faq.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 