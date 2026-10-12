'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function SimpleSedationFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "Is sedation dentistry safe?",
      answer: "Yes, sedation dentistry is very safe when administered by trained professionals. Dr. Parikh and Dr. Arora are experienced in providing sedation and monitor patients throughout the entire procedure to ensure safety and comfort."
    },
    {
      question: "Will I be asleep during the procedure?",
      answer: "No, our sedation does NOT put patients to sleep. You will remain awake and conscious throughout the procedure, but you'll feel relaxed and comfortable. This allows you to respond to instructions while eliminating anxiety and discomfort."
    },
    {
      question: "How long does recovery take?",
      answer: "Recovery from nitrous oxide sedation is very quick. After your treatment is complete, you'll only need to breathe pure oxygen for about five minutes to regain normal consciousness. You can typically drive yourself home and resume normal activities immediately."
    },
    {
      question: "Who is a good candidate for sedation dentistry?",
      answer: "Sedation dentistry is ideal for patients with dental anxiety, phobia, or those who have difficulty sitting still for long procedures. It's also great for patients with sensitive gag reflexes or those who need extensive dental work."
    },
    {
      question: "What types of sedation do you offer?",
      answer: "We offer three types of sedation: Inhalation sedation (nitrous oxide/laughing gas), oral sedation (pill form), and IV sedation. The type recommended depends on your level of anxiety and the procedure being performed."
    },
    {
      question: "Is sedation dentistry covered by insurance?",
      answer: "Coverage varies by insurance plan. Some plans cover sedation for certain procedures, while others may require pre-authorization. We recommend contacting your insurance provider to understand your specific coverage."
    }
  ]

  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-normal text-gray-900 mb-4 leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{ color: '#656565' }}>
            Get answers to common questions about sedation dentistry and our services.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-4"
                >
                  <p className="text-gray-600 leading-relaxed" style={{ color: '#656565' }}>
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 