'use client'

import { motion } from 'framer-motion'

export default function SimplePRFFAQ() {
  const faqs = [
    {
      question: "What is PRF therapy and how does it work?",
      answer: "PRF (Platelet Rich Fibrin) therapy uses your body's natural healing compounds from blood plasma to create a membrane that enhances healing after oral surgery. It contains white blood cells, platelets, fibrin, and stem cells that promote natural healing."
    },
    {
      question: "What procedures can benefit from PRF therapy?",
      answer: "PRF therapy is commonly used with extractions, bone grafts, and dental implants to enhance the healing process and improve outcomes."
    },
    {
      question: "Is PRF therapy safe?",
      answer: "Yes, PRF therapy is very safe as it uses your own blood components. There's no risk of rejection or allergic reactions since it's derived from your own blood."
    },
    {
      question: "How long does the PRF procedure take?",
      answer: "The PRF procedure is quick and takes place in-office. A small amount of blood is drawn before your treatment begins, and the PRF membrane is created and applied during your procedure."
    },
    {
      question: "What are the main benefits of PRF therapy?",
      answer: "PRF therapy provides faster healing, reduced swelling, lower risk of infection, better blood flow to the treatment site, and reduced risk of dry socket."
    },
    {
      question: "How experienced is Spreckels Park Dental with PRF?",
      answer: "Spreckels Park Dental has been practicing PRF therapy since 2015 and is one of the first offices in the Central Valley area to offer this advanced treatment. We have performed hundreds of successful PRF procedures."
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
Get answers to common questions about PRF therapy
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