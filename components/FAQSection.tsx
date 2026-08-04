'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0) // Start with first item open

  const faqs = [
    {
      question: 'What does Outgrid do?',
      answer: 'Tincidunt condimentum vivamus urna velit praesent vulputate at a viverra. Sed viverra lectus nullam est sagittis sed. Accumsan neque faucibus mattis facilisis a.'
    },
    {
      question: 'Varius porttitor nisl diam non. Turpis mauris augue tincidunt?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      question: 'Nisi cursus proin ultricies elit pharetra in ac enim morbi?',
      answer: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      question: 'Amet turpis diam sapien ut varius. In id ut non quis lectu?',
      answer: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    {
      question: 'Sed vitae non ut quam ullamcorper malesuada aliquam?',
      answer: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  ]

  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-4">
            FREQUENTLY ASKED QUESTIONS
          </h3>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-normal text-gray-900 mb-6">
            Got any questions?<br />We got you covered
          </h2>
        </motion.div>

        {/* FAQ Content Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-2xl shadow-lg p-8 lg:p-12"
        >
          <div className="space-y-0">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 last:border-b-0">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex justify-between items-center py-6 text-left focus:outline-none group"
                >
                  <span className={`font-semibold text-lg ${
                    openIndex === index 
                      ? 'text-gray-900' 
                      : index === 1 
                        ? 'text-blue-600' 
                        : 'text-gray-900'
                  }`}>
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0 ml-4">
                    {openIndex === index ? (
                      <svg
                        className="w-6 h-6 text-gray-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      </svg>
                    ) : (
                      <svg
                        className="w-6 h-6 text-gray-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    )}
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 