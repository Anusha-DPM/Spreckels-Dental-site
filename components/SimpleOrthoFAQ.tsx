'use client'

import { motion } from 'framer-motion'

export default function SimpleOrthoFAQ() {
  const faqs = [
    {
      question: "What is the difference between Invisalign and traditional braces?",
      answer: "Invisalign uses clear, removable aligners that are virtually invisible, while traditional braces use metal brackets and wires. Invisalign aligners can be removed for eating and cleaning, while braces are fixed and require special care."
    },
    {
      question: "How long does Invisalign treatment take?",
      answer: "Invisalign treatment typically takes 9-15 months on average, with most patients using 18-30 aligners. Treatment time varies based on individual case complexity and compliance with wearing the aligners."
    },
    {
      question: "Can I eat normally with Invisalign?",
      answer: "Yes! One of the biggest advantages of Invisalign is that you can remove the aligners to eat and drink normally. You don't have to avoid any foods like you would with traditional braces."
    },
    {
      question: "How often do I need to visit the dentist during orthodontic treatment?",
      answer: "With Invisalign, you typically visit every 6 weeks for progress checks. With traditional braces, visits are usually every 4-8 weeks for adjustments and monitoring."
    },
    {
      question: "What foods should I avoid with traditional braces?",
      answer: "Avoid hard foods like corn on the cob, apples, and hard fruits unless cut into smaller pieces. Also avoid sticky foods like chewing gum and caramel that can damage brackets and wires."
    },
    {
      question: "How do I care for my teeth during orthodontic treatment?",
      answer: "Brush and floss twice daily, especially after meals. With Invisalign, clean your aligners regularly. With braces, use special tools like interdental brushes and consider a water flosser for better cleaning."
    },
    {
      question: "Is orthodontic treatment only for cosmetic purposes?",
      answer: "No, orthodontic treatment provides both aesthetic and health benefits. Properly aligned teeth improve oral health, make cleaning easier, reduce risk of decay and gum disease, and can improve bite function."
    },
    {
      question: "What should I do if my braces are causing discomfort?",
      answer: "Use orthodontic wax on any irritating wires or brackets. This provides temporary relief. Contact Dr. Parikh or Dr. Arora if you experience persistent discomfort or broken brackets."
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
            Get answers to common questions about orthodontic treatment
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