'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function DentalImplantsFAQSection() {
  const faqs = [
    {
      question: "What are dental implants?",
      answer: "Dental implants are small titanium posts that replace the roots of missing teeth. They are inserted into the jawbone during a minor surgical procedure, and a lifelike porcelain tooth crown is attached to complete the restoration. Implants provide a permanent solution that looks, feels, and functions like natural teeth.",
      hasImage: false,
      icon: "🦷"
    },
    {
      question: "How many teeth can be replaced with dental implants?",
      answer: "Dental implants can replace a single tooth, multiple teeth, or even a full arch of teeth. The number of implants needed depends on your specific situation. A single implant can replace one tooth, while multiple implants can support bridges or dentures for replacing several teeth or an entire arch.",
      hasImage: true,
      image: "/financial-consulting-feature-1.webp",
      icon: "🔢"
    },
    {
      question: "Is dental implant surgery painful?",
      answer: "Dental implant surgery is typically performed under local anesthesia, so you won't feel pain during the procedure. Most patients report minimal discomfort afterward, which can be managed with over-the-counter pain medication. Our team uses advanced techniques to ensure your comfort throughout the process.",
      hasImage: false,
      icon: "😌"
    },
    {
      question: "Are dental implants expensive?",
      answer: "While dental implants may have a higher initial cost compared to other tooth replacement options, they are often more cost-effective in the long run. Implants are designed to last a lifetime with proper care, eliminating the need for frequent replacements that other options require. We offer financing options to make implants more accessible.",
      hasImage: false,
      icon: "💰"
    },
    {
      question: "How do you care for dental implants?",
      answer: "Caring for dental implants is similar to caring for natural teeth. Daily brushing and flossing are essential, along with regular professional cleanings and checkups. Unlike dentures, implants don't require special cleaning solutions or removal for cleaning. With proper care, implants can last a lifetime.",
      hasImage: false,
      icon: "🧼"
    },
    {
      question: "Can my body reject a dental implant?",
      answer: "Dental implants are made from titanium, which is biocompatible and rarely causes rejection. The success rate for dental implants is over 95%. However, proper oral hygiene and following post-operative care instructions are crucial for successful healing and long-term success.",
      hasImage: true,
      image: "/financial-consulting-feature-1.webp",
      icon: "✅"
    },
    {
      question: "Am I a candidate for dental implants?",
      answer: "Most adults in good general health are candidates for dental implants. Factors that may affect candidacy include sufficient jawbone density, good oral health, and overall health status. During your consultation, we'll evaluate your specific situation and determine if implants are the right solution for you.",
      hasImage: false,
      icon: "👤"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to the most commonly asked questions about dental implants and learn how they can transform your smile.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Text Content */}
                  <div className="p-8">
                    <div className="flex items-start mb-4">
                      <div className="text-3xl mr-4">{faq.icon}</div>
                      <h3 className="text-xl font-bold text-gray-900 leading-tight">
                        {faq.question}
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed pl-12">
                      {faq.answer}
                    </p>
                  </div>

                  {/* Image (if applicable) */}
                  {faq.hasImage && faq.image && (
                    <div className="relative h-64 lg:h-full bg-gradient-to-br from-blue-100 to-purple-100">
                      <Image
                        src={faq.image}
                        alt="Dental implant illustration"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-[#441018] to-[#5a1a22] rounded-3xl p-8 lg:p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Interested in replacing one or more teeth with dental implants? Call Spreckels Park Dental today to schedule a consultation!
            </p>
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h4 className="font-semibold mb-2">Manteca, CA Office</h4>
                <a 
                  href="tel:+12098251030" 
                  className="text-2xl font-bold hover:underline transition-colors duration-200"
                >
                  +1 (209) 825-1030
                </a>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h4 className="font-semibold mb-2">Stockton, CA Office</h4>
                <a 
                  href="tel:+12099551800" 
                  className="text-2xl font-bold hover:underline transition-colors duration-200"
                >
                  +1 (209) 955-1800
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 