'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function DentalImplantsMantecaCAFAQSPage() {

  const faqSections = [
    {
      title: 'Dental Implant Basics',
      faqs: [
        {
          question: 'What are dental implants?',
          answer: 'Dental implants are small titanium posts that replace missing tooth roots. They are surgically placed into the jawbone and topped with a natural-looking porcelain crown, restoring both function and appearance.'
        },
        {
          question: 'How do dental implants feel compared to natural teeth?',
          answer: 'Dental implants feel very similar to natural teeth. Because they are anchored into the jawbone, they provide excellent stability for chewing, speaking, and smiling.'
        },
        {
          question: 'How long do dental implants last?',
          answer: 'With proper oral hygiene and regular dental visits, dental implants can last a lifetime, making them one of the most durable tooth-replacement options available.'
        }
      ]
    },
    {
      title: 'Candidacy & Evaluation',
      faqs: [
        {
          question: 'Am I a candidate for dental implants?',
          answer: 'Most adults are candidates for dental implants. A consultation with dental X-rays or 3D imaging is needed to evaluate bone health, gum condition, and overall oral health.'
        },
        {
          question: 'What if I have bone loss?',
          answer: 'Even if you\'ve experienced bone loss, you may still qualify. Treatments such as bone grafting or All-on-4® implants, which often require less bone, may be recommended.'
        },
        {
          question: 'Do health conditions affect implant eligibility?',
          answer: 'Certain medical conditions, such as uncontrolled diabetes or smoking habits, may impact healing. We review your full medical history to ensure safe and successful treatment.'
        }
      ]
    },
    {
      title: 'All-on-4® Implant Dentures',
      faqs: [
        {
          question: 'What are All-on-4® implant-supported dentures?',
          answer: 'All-on-4® treatment uses four or more implants to support a non-removable, full-arch denture, providing a stable and permanent alternative to traditional dentures.'
        },
        {
          question: 'Can I get teeth the same day with All-on-4®?',
          answer: 'In many cases, patients receive temporary teeth on the same day as implant placement, allowing you to leave the office with a complete smile.'
        },
        {
          question: 'How are All-on-4® dentures different from traditional dentures?',
          answer: 'All-on-4® dentures are fixed in place, do not slip, and offer stronger biting power compared to removable dentures.'
        }
      ]
    },
    {
      title: 'Procedure & Comfort',
      faqs: [
        {
          question: 'Is dental implant surgery painful?',
          answer: 'Most patients report minimal discomfort. Any post-procedure soreness is usually manageable with over-the-counter pain relievers and ice packs.'
        },
        {
          question: 'How long does the implant process take?',
          answer: 'The full process may take several months, allowing time for implants to fuse with the jawbone. However, temporary restorations are often provided during healing.'
        },
        {
          question: 'What happens after implants heal?',
          answer: 'Once healing is complete, we take precise impressions to create your final custom restoration, ensuring comfort, function, and a natural appearance.'
        }
      ]
    },
    {
      title: 'Cost & Value',
      faqs: [
        {
          question: 'Are dental implants expensive?',
          answer: 'While implants cost more upfront than dentures or bridges, they often last much longer, making them a cost-effective long-term investment.'
        },
        {
          question: 'What factors affect the cost of implants?',
          answer: (
            <>
              Costs depend on:
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Number of implants needed</li>
                <li>Type of restoration</li>
                <li>Additional procedures (extractions or bone grafts)</li>
                <li>Whether interim or final restorations are included</li>
              </ul>
            </>
          )
        },
        {
          question: 'Do you offer free implant consultations?',
          answer: 'Yes, Spreckels Park Dental offers free consultations to discuss your needs, options, and estimated costs.'
        }
      ]
    },
    {
      title: 'Insurance & Financing',
      faqs: [
        {
          question: 'Does dental insurance cover implants?',
          answer: 'Coverage varies by plan. We accept PPO out-of-network insurance plans and are happy to file claims on your behalf. We do not participate in HMO, Medi-Cal, or Medicare plans.'
        },
        {
          question: 'What payment options are available?',
          answer: 'We accept cash, checks, and debit cards, and we offer flexible payment arrangements to make treatment manageable.'
        },
        {
          question: 'What financing options do you offer?',
          answer: (
            <>
              We currently offer Sunbit and CareCredit financing:
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong>Sunbit:</strong> No-fee credit options with an easy-to-use mobile app</li>
                <li><strong>CareCredit:</strong> No-interest* or low monthly payment plans for dental care</li>
              </ul>
              <p className="mt-2">We encourage patients to apply prior to their appointment.</p>
            </>
          )
        }
      ]
    },
    {
      title: 'Aftercare & Long-Term Success',
      faqs: [
        {
          question: 'How do I care for my dental implants?',
          answer: 'Care for implants just like natural teeth—brush, floss daily, and maintain regular professional cleanings.'
        },
        {
          question: 'Can my body reject a dental implant?',
          answer: 'Implants are made of biocompatible titanium and cannot be "rejected." Implant failure is rare and usually related to infection or poor oral hygiene.'
        },
        {
          question: 'What is the success rate of dental implants?',
          answer: 'Dental implants have a success rate exceeding 95% when properly placed and maintained.'
        }
      ]
    }
  ]

  // Calculate total FAQs for index tracking
  const getGlobalIndex = (sectionIndex: number, faqIndex: number) => {
    let index = 0
    for (let i = 0; i < sectionIndex; i++) {
      index += faqSections[i].faqs.length
    }
    return index + faqIndex
  }

  // Initialize with first item of each section open
  const [openIndices, setOpenIndices] = useState<Set<number>>(() => {
    const indices = new Set<number>()
    faqSections.forEach((section, sectionIndex) => {
      if (section.faqs.length > 0) {
        let index = 0
        for (let i = 0; i < sectionIndex; i++) {
          index += faqSections[i].faqs.length
        }
        indices.add(index)
      }
    })
    return indices
  })

  const toggleFAQ = (index: number) => {
    setOpenIndices(prev => {
      const newSet = new Set(prev)
      if (newSet.has(index)) {
        newSet.delete(index)
      } else {
        newSet.add(index)
      }
      return newSet
    })
  }
  const relatedArticles = [
    {
      title: 'Dental Implants',
      description: 'Comprehensive guide to dental implants, including the procedure, benefits, and what to expect during your treatment journey.',
      href: '/dental-implants'
    },
    {
      title: 'All-on-4 Implant Dentures',
      description: 'Learn about All-on-4® implant-supported dentures for full arch tooth replacement with just four implants.',
      href: '/all-on-4-implant-dentures'
    },
    {
      title: 'Implant Dentistry',
      description: 'Explore our advanced implant dentistry services and how we can restore your smile with permanent solutions.',
      href: '/patient-education/implant-dentistry'
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-[120px] sm:pt-[160px] md:pt-[180px] lg:pt-[200px] pb-12 sm:pb-16 lg:pb-20" style={{ backgroundColor: '#441018' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-[27px] sm:text-4xl lg:text-6xl font-normal text-white font-heading leading-tight mb-4 sm:mb-6">
              Dental Implants FAQs
            </h1>
            <div className="flex justify-center mb-4 sm:mb-6 px-2 sm:px-4">
              <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-lg w-full sm:w-auto max-w-[95%] sm:max-w-full" style={{ backgroundColor: 'rgba(139, 92, 104, 0.4)' }}>
                <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full border-2 flex items-center justify-center" style={{ borderColor: '#3b82f6', backgroundColor: '#3b82f6' }}>
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 rounded-full bg-white"></div>
                </div>
                <p className="text-[12px] sm:text-[14px] md:text-base font-sans font-medium break-words" style={{ color: '#93c5fd' }}>
                  Spreckels Park Dental – Manteca, CA
                </p>
              </div>
            </div>
            <p className="text-[14px] sm:text-[16px] md:text-lg text-gray-200 max-w-4xl mx-auto leading-relaxed font-sans mt-4 px-4">
            Replacing missing teeth is a big decision, and it's natural to have questions. At Spreckels Park Dental, we believe informed patients make confident decisions. Below, you'll find answers to the most frequently asked questions about dental implants and All-on-4® implant-supported dentures, including treatment, recovery, costs, insurance, and financing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Doctor Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/Rujul.jpeg"
                alt="Dr. Rujul G. Parikh - Expert Implant Dentist"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </motion.div>

            {/* Right Side - Doctor Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-[24px] sm:text-[28px] md:text-3xl font-normal text-gray-900 font-heading mb-3 sm:mb-4">
                  Why Choose Spreckels Park Dental for Dental Implants?
                </h2>
              
              </div>
              
              <div>
                <p className="text-[15px] sm:text-[16px] text-gray-700 leading-relaxed font-sans">
                  Spreckels Park Dental is led by <strong>Dr. Rujul G. Parikh, DDS, FICOI, AFAAID</strong>, 
                  a dentist with more than <strong>24 years of experience</strong> and advanced training in implant dentistry. 
                  Our office offers:
                </p>
                <br></br>
                <ul className="space-y-3 sm:space-y-4">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[15px] sm:text-[16px] text-gray-700 font-sans">Advanced implant technology and 3D imaging</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[15px] sm:text-[16px] text-gray-700 font-sans">Comprehensive care from extractions to final restoration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[15px] sm:text-[16px] text-gray-700 font-sans">Flexible financing options</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[15px] sm:text-[16px] text-gray-700 font-sans">A patient-focused, transparent approach to treatment planning</span>
                  </li>
                </ul>
                <br></br>
                <p className="text-[16px] sm:text-lg text-gray-700 leading-relaxed font-sans mb-5">
                  Our goal is to restore your smile with comfort, stability, and long-term success.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-8 sm:pb-10 lg:pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Render FAQs by Section */}
            {faqSections.map((section, sectionIndex) => (
              <div key={sectionIndex} className={sectionIndex > 0 ? 'mt-8 sm:mt-10 md:mt-12' : 'pt-0'}>
                <h2 className="text-[22px] sm:text-[27px] md:text-3xl font-normal text-gray-900 font-heading mb-4 sm:mb-6">
                  {section.title}
                </h2>
                
                <div className="space-y-4">
                  {section.faqs.map((faq, faqIndex) => {
                    const globalIndex = getGlobalIndex(sectionIndex, faqIndex)
                    const isOpen = openIndices.has(globalIndex)
                    
                    return (
                      <motion.div
                        key={faqIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: faqIndex * 0.05 }}
                        className={`relative overflow-hidden rounded-xl transition-all duration-300 ${
                          isOpen 
                            ? 'bg-white border-2 shadow-lg' 
                            : 'bg-white border border-gray-200 hover:shadow-md'
                        }`}
                        style={isOpen ? { 
                          borderColor: '#441018'
                        } : {}}
                        onMouseEnter={(e) => {
                          if (!isOpen) {
                            e.currentTarget.style.borderColor = '#441018'
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!isOpen) {
                            e.currentTarget.style.borderColor = ''
                          }
                        }}
                      >
                        <button
                          onClick={() => toggleFAQ(globalIndex)}
                          className="w-full px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-left flex items-start justify-between gap-3 sm:gap-4 focus:outline-none rounded-xl transition-all duration-200"
                          onFocus={(e) => {
                            e.currentTarget.style.boxShadow = '0 0 0 2px #441018'
                          }}
                          onBlur={(e) => {
                            e.currentTarget.style.boxShadow = ''
                          }}
                        >
                          <div className="flex-1">
                            <div className="flex items-start gap-2 sm:gap-3">
                              <div 
                                className={`flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold transition-all duration-300 mt-0.5 ${
                                  isOpen ? 'text-white' : 'bg-gray-100 text-gray-600'
                                }`}
                                style={isOpen ? { backgroundColor: '#441018' } : {}}
                              >
                                {globalIndex + 1}
                              </div>
                              <h3 
                                className={`text-[16px] sm:text-[18px] md:text-[20px] font-semibold leading-tight transition-colors duration-300 flex-1 ${
                                  isOpen ? '' : 'text-gray-900'
                                }`}
                                style={isOpen ? { color: '#441018' } : {}}
                              >
                                {faq.question}
                              </h3>
                            </div>
                          </div>
                          <div 
                            className={`flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-300 mt-0.5 ${
                              isOpen ? 'text-white rotate-180' : 'bg-gray-100 text-gray-600'
                            }`}
                            style={isOpen ? { backgroundColor: '#441018' } : {}}
                          >
                            <svg
                              className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </button>
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: 'easeInOut' }}
                              className="overflow-hidden"
                            >
                              <div 
                                className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-6 md:pb-8 pt-0 border-t"
                                style={{ borderColor: 'rgba(68, 16, 24, 0.2)' }}
                              >
                                <div className="pt-3 sm:pt-4 text-[14px] sm:text-[16px] text-gray-700 leading-relaxed font-sans" style={{ color: '#656565' }}>
                                  {typeof faq.answer === 'string' ? (
                                    <p>{faq.answer}</p>
                                  ) : (
                                    faq.answer
                                  )}
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            ))}

            {/* Final Words */}
            <div className="bg-gray-50 rounded-lg p-5 sm:p-6 md:p-8 mt-10 sm:mt-12 mb-6 sm:mb-8">
              <h2 className="text-[22px] sm:text-[27px] md:text-3xl font-normal text-gray-900 font-heading mb-4 sm:mb-6">
                Final Words: Restore Your Smile with Confidence
              </h2>
              <p className="text-[14px] sm:text-[16px] text-gray-700 leading-relaxed font-sans mb-4 sm:mb-6">
                Dental implants and All-on-4® implant dentures offer a reliable, long-lasting solution 
                for missing teeth. At Spreckels Park Dental, we combine experience, technology, and 
                compassionate care to help you smile with confidence again.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reach Out Section */}
      <section className="py-8 sm:py-10 lg:py-12 bg-primary-600" style={{ backgroundColor: '#441018' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[27px] sm:text-3xl font-normal text-white font-heading mb-6">
              Reach Out Today
            </h2>
            <div className="space-y-3 sm:space-y-4 text-[14px] sm:text-[16px] md:text-lg text-white leading-relaxed font-sans">
              <p className="break-words">
                📞 Call Spreckels Park Dental at <a href="tel:+12098251030" className="underline hover:text-red-200 whitespace-nowrap">(209) 825-1030</a>
              </p>
              <p className="break-words">
                📍 626 E. Yosemite Ave., Manteca, CA
              </p>
            </div>
            <a 
              href="/appointment-request"
              className="mt-4 sm:mt-6 inline-block px-6 sm:px-8 py-3 sm:py-4 bg-white text-red-800 border border-red-800 rounded-lg hover:bg-red-50 transition-colors duration-200 font-semibold cursor-pointer text-center text-[14px] sm:text-[15px] md:text-base w-full sm:w-auto"
            >
              Schedule Your Free Consultation
            </a>
            <p className="text-[12px] sm:text-[14px] md:text-base text-red-100 mt-3 sm:mt-4 px-4">
              Schedule your free dental implant consultation today and take the first step toward a healthier, more confident smile.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-8 sm:py-10 lg:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-8 text-center">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArticles.map((article, index) => (
                <motion.div
                  key={article.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Link href={article.href}>
                    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-5 sm:p-6 h-full">
                      <h3 className="text-[18px] sm:text-[20px] md:text-xl font-semibold text-gray-900 mb-2 sm:mb-3 group-hover:text-primary-600 transition-colors duration-200 font-heading">
                        {article.title}
                      </h3>
                      <p className="text-[14px] sm:text-[16px] text-gray-600 leading-relaxed font-sans">
                        {article.description}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

