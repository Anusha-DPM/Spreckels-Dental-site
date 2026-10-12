'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import type { DentalImplantCostPageConfig } from '@/lib/dentalImplantCostPageData'

interface DentalImplantCostPageContentProps {
  config: DentalImplantCostPageConfig
}

function CheckListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <svg
        className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0"
        fill="currentColor"
        viewBox="0 0 20 20"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </svg>
      <span className="text-[15px] sm:text-[16px] text-gray-700 font-sans leading-relaxed">{children}</span>
    </li>
  )
}

function ContentSection({
  title,
  children,
  className = '',
}: {
  title: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`mb-10 sm:mb-12 lg:mb-14 ${className}`}
    >
      <h2 className="text-[22px] sm:text-[27px] md:text-3xl font-normal text-gray-900 font-heading mb-4 sm:mb-6">
        {title}
      </h2>
      {children}
    </motion.div>
  )
}

function BodyText({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`text-[15px] sm:text-[16px] text-gray-700 leading-relaxed font-sans mb-4 sm:mb-6 ${className}`}>
      {children}
    </p>
  )
}

function ContentImageGrid({
  children,
  imageSrc,
  imageAlt,
  className = '',
  imageSize = 'default',
}: {
  children: React.ReactNode
  imageSrc: string
  imageAlt: string
  className?: string
  imageSize?: 'default' | 'large'
}) {
  const isLarge = imageSize === 'large'

  return (
    <div className={`flex flex-col md:flex-row gap-6 lg:gap-8 md:items-stretch ${className}`}>
      <div className={`md:flex md:flex-col md:justify-center ${isLarge ? 'md:flex-[0.82]' : 'md:flex-1'}`}>
        {children}
      </div>
      <div
        className={`relative w-full rounded-xl overflow-hidden shadow-lg md:min-h-0 ${
          isLarge
            ? 'min-h-[260px] sm:min-h-[300px] md:flex-[1.18]'
            : 'min-h-[220px] sm:min-h-[260px] md:flex-1'
        }`}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes={isLarge ? '(max-width: 768px) 100vw, 48vw' : '(max-width: 768px) 100vw, 40vw'}
        />
      </div>
    </div>
  )
}

export default function DentalImplantCostPageContent({ config }: DentalImplantCostPageContentProps) {
  const { city, cityDisplay, whyChooseImage, benefitsImage, introBoldPractice, consultationAboutLink, faqBoldPractice } = config

  const whyChoosePoints = [
    'Replace one or more missing teeth',
    'Restore your ability to chew and speak comfortably',
    'Prevent bone loss in the jaw',
    'Maintain your natural facial appearance',
    'Improve confidence with a natural-looking smile',
  ]

  const costFactors = [
    'The number of dental implants needed',
    'The complexity of your case',
    'Whether bone grafting or tooth extraction is required',
    'The type of implant restoration needed (crown, bridge, or denture)',
    'Any additional procedures required before implant placement',
  ]

  const paymentOptions = [
    'Monthly payment plans that break the total cost into manageable installments',
    'Low or no-interest financing options for qualifying patients',
    'The ability to use Health Savings Account (HSA) or Flexible Spending Account (FSA) funds toward treatment',
    'Family plan discounts for households with more than one patient receiving treatment',
  ]

  const insuranceHelpPoints = [
    'Review your insurance benefits',
    'Understand what portion of treatment may be covered',
    'Submit claims on your behalf whenever possible',
  ]

  const benefits = [
    {
      label: 'Natural appearance:',
      text: 'Dental implants are designed to look, feel, and function like natural teeth.',
    },
    {
      label: 'Long-lasting solution:',
      text: 'With proper care, dental implants can last for many years.',
    },
    {
      label: 'Improved chewing ability:',
      text: 'Enjoy your favorite foods with greater comfort and confidence.',
    },
    {
      label: 'Preserves jawbone health:',
      text: 'Implants help stimulate the jawbone and reduce bone loss after tooth loss.',
    },
    {
      label: 'Stable and secure:',
      text: 'Unlike removable dentures, implants stay firmly in place without slipping.',
    },
    {
      label: 'Supports oral health:',
      text: 'Dental implants do not require altering adjacent healthy teeth like traditional bridges.',
    },
  ]

  const faqs = [
    {
      question: `How much do dental implants cost in ${cityDisplay}?`,
      answer: faqBoldPractice ? (
        <>
          The cost of dental implants depends on the complexity of your case, the number of implants needed, and
          whether additional procedures are required. Schedule a consultation at{' '}
          <strong>Spreckels Park Dental</strong> for a personalized cost estimate.
        </>
      ) : (
        `The cost of dental implants depends on the complexity of your case, the number of implants needed, and whether additional procedures are required. Schedule a consultation at Spreckels Park Dental for a personalized cost estimate.`
      ),
    },
    {
      question: 'How long does dental implant treatment take?',
      answer:
        'Treatment time varies depending on your individual needs. Some patients complete treatment within a few months, while others may require additional healing time if bone grafting or other procedures are needed.',
    },
    {
      question: 'Are dental implants worth the investment?',
      answer:
        'Yes. Dental implants provide a durable, natural-looking solution for missing teeth and offer long-term benefits for your oral health, comfort, and confidence.',
    },
    {
      question: 'Does insurance cover the cost of dental implants?',
      answer:
        'Some dental insurance plans may cover portions of implant treatment. Our team can help review your benefits and estimate your out-of-pocket cost.',
    },
    {
      question: 'How do I know if I am a candidate for dental implants?',
      answer:
        'The best way to find out is through a consultation. Our team will evaluate your oral health, jawbone, and overall dental condition to determine whether dental implants are right for you.',
    },
  ]

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0)

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index))
  }

  return (
    <>
      {/* Hero Section */}
      <section
        className="pt-[120px] sm:pt-[160px] md:pt-[180px] lg:pt-[200px] pb-12 sm:pb-16 lg:pb-20"
        style={{ backgroundColor: '#441018' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-[27px] sm:text-4xl lg:text-6xl font-normal text-white font-heading leading-tight mb-4 sm:mb-6">
              Cost of Dental Implants in {cityDisplay}
            </h1>
            <div className="flex justify-center mb-4 sm:mb-6 px-2 sm:px-4">
              <div
                className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-lg w-full sm:w-auto max-w-[95%] sm:max-w-full"
                style={{ backgroundColor: 'rgba(139, 92, 104, 0.4)' }}
              >
                <div
                  className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full border-2 flex items-center justify-center"
                  style={{ borderColor: '#3b82f6', backgroundColor: '#3b82f6' }}
                >
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 rounded-full bg-white" />
                </div>
                <p className="text-[12px] sm:text-[14px] md:text-base font-sans font-medium break-words" style={{ color: '#93c5fd' }}>
                  Spreckels Park Dental – Serving {city}, CA
                </p>
              </div>
            </div>
            <p className="text-[14px] sm:text-[16px] md:text-lg text-gray-200 max-w-4xl mx-auto leading-relaxed font-sans px-4">
              Choosing the right tooth replacement option is a big decision, and it should feel like an easy one.
              At{' '}
              {introBoldPractice ? <strong className="text-white">Spreckels Park Dental</strong> : 'Spreckels Park Dental'}
              , we offer high-quality dental implant solutions in{' '}
              <Link href="/dental-implants-manteca-ca" className="underline hover:text-red-200">
                {cityDisplay}
              </Link>{' '}
              to help restore your smile, confidence, and oral health. Whether you are replacing a single missing
              tooth or multiple teeth, our team is here to guide you through every step, from your first consultation
              to your fully restored smile.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-10 lg:pb-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContentSection title="Why Choose Dental Implants?">
            <BodyText>
              Dental implants are considered the gold standard for replacing missing teeth. Unlike removable dentures or
              traditional bridges, implants are surgically placed into the jawbone where they function like natural
              tooth roots. Once healed, they provide a secure foundation for a custom-made crown, bridge, or denture.
            </BodyText>
            <BodyText>Dental implants can help:</BodyText>
            <ContentImageGrid
              imageSrc={whyChooseImage}
              imageAlt={`Why choose dental implants in ${cityDisplay}`}
              imageSize="large"
              className="mb-4 sm:mb-6"
            >
              <ul className="space-y-3 sm:space-y-4">
                {whyChoosePoints.map((point) => (
                  <CheckListItem key={point}>{point}</CheckListItem>
                ))}
              </ul>
            </ContentImageGrid>
            <BodyText className="mb-0">
              During your consultation, our team at{' '}
              {consultationAboutLink ? (
                <Link href="/about" className="text-[#441018] underline hover:text-red-800">
                  Spreckels Park Dental
                </Link>
              ) : (
                'Spreckels Park Dental'
              )}{' '}
              will evaluate your oral health and recommend the treatment option best suited to your needs and long-term
              goals.
            </BodyText>
          </ContentSection>

          <ContentSection title={`How Much Do Dental Implants Cost in ${cityDisplay}?`}>
            <BodyText>
              The cost of dental implants varies from patient to patient. Pricing depends on factors such as:
            </BodyText>
            <ul className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
              {costFactors.map((factor) => (
                <CheckListItem key={factor}>{factor}</CheckListItem>
              ))}
            </ul>
            <BodyText className="mb-0">
              Because every smile is different, there is no one size fits all price. The most accurate way to find out
              what dental implants will cost for your specific situation is to schedule a consultation with our team.
              During your visit, we will evaluate your smile and provide a personalized treatment plan along with a clear
              breakdown of costs.
            </BodyText>
          </ContentSection>

          <ContentSection title="Payment Plans and Financing Options">
            <ContentImageGrid
              imageSrc="/Insurance & Billing.jpeg"
              imageAlt="Dental implant payment and financing options"
              className="mb-4 sm:mb-6"
            >
              <BodyText className="md:mb-4">
                We believe cost should never stand in the way of restoring your smile. That is why we offer a range
                of flexible payment options designed to fit different budgets and needs.
              </BodyText>
              <ul className="space-y-3 sm:space-y-4">
                {paymentOptions.map((option) => (
                  <CheckListItem key={option}>{option}</CheckListItem>
                ))}
              </ul>
            </ContentImageGrid>
            <BodyText className="mb-0">
              Our team will walk you through all available options during your consultation so you can choose the plan
              that works best for you.
            </BodyText>
          </ContentSection>

          <ContentSection title="Does Insurance Cover Dental Implants?">
            <BodyText>
              Many{' '}
              <Link href="/insurance-billing" className="text-[#441018] underline hover:text-red-800">
                dental insurance
              </Link>{' '}
              plans may provide coverage for certain portions of dental implant treatment, such as examinations,
              extractions, crowns, or other restorative procedures. Coverage amounts and eligibility vary widely
              depending on your specific plan.
            </BodyText>
            <BodyText>Our team is happy to help you:</BodyText>
            <ul className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
              {insuranceHelpPoints.map((point) => (
                <CheckListItem key={point}>{point}</CheckListItem>
              ))}
            </ul>
            <BodyText className="mb-0">
              We recommend bringing your insurance information to your consultation so we can give you the clearest
              picture of your coverage and out-of-pocket costs.
            </BodyText>
          </ContentSection>

          <ContentSection title="Benefits of Dental Implants">
            <BodyText>
              Dental implants offer a range of advantages that make them one of the most reliable tooth replacement
              options available:
            </BodyText>
            <ContentImageGrid
              imageSrc={benefitsImage}
              imageAlt={`Benefits of dental implants in ${cityDisplay}`}
            >
              <ul className="space-y-3 sm:space-y-4">
                {benefits.map((benefit) => (
                  <CheckListItem key={benefit.label}>
                    <strong>{benefit.label}</strong> {benefit.text}
                  </CheckListItem>
                ))}
              </ul>
            </ContentImageGrid>
          </ContentSection>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-8 sm:py-10 lg:py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-10"
          >
            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index

              return (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className={`relative overflow-hidden rounded-xl transition-all duration-300 ${
                    isOpen ? 'bg-white border-2 shadow-lg' : 'bg-white border border-gray-200 hover:shadow-md'
                  }`}
                  style={isOpen ? { borderColor: '#441018' } : {}}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-left flex items-start justify-between gap-3 sm:gap-4 focus:outline-none rounded-xl transition-all duration-200"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start gap-2 sm:gap-3 flex-1">
                      <div
                        className={`flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold transition-all duration-300 mt-0.5 ${
                          isOpen ? 'text-white' : 'bg-gray-100 text-gray-600'
                        }`}
                        style={isOpen ? { backgroundColor: '#441018' } : {}}
                      >
                        {index + 1}
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
                    <div
                      className={`flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-300 mt-0.5 ${
                        isOpen ? 'text-white rotate-180' : 'bg-gray-100 text-gray-600'
                      }`}
                      style={isOpen ? { backgroundColor: '#441018' } : {}}
                    >
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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
                        <div className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-6 md:pb-8 pt-0 border-t" style={{ borderColor: 'rgba(68, 16, 24, 0.2)' }}>
                          <div className="pt-3 sm:pt-4 text-[14px] sm:text-[16px] text-gray-700 leading-relaxed font-sans" style={{ color: '#656565' }}>
                            {typeof faq.answer === 'string' ? <p>{faq.answer}</p> : faq.answer}
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
      </section>

      {/* CTA Section */}
      <section className="py-8 sm:py-10 lg:py-12 bg-primary-600" style={{ backgroundColor: '#441018' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[27px] sm:text-3xl font-normal text-white font-heading mb-4 sm:mb-6">
              Ready to Find Out Your Dental Implant Cost?
            </h2>
            <p className="text-[14px] sm:text-[16px] md:text-lg text-white leading-relaxed font-sans mb-6 sm:mb-8 px-2">
              Your best smile is closer than you think.{' '}
              <Link href="/contact" className="underline hover:text-red-200">
                Schedule your consultation
              </Link>{' '}
              with <strong>Spreckels Park Dental</strong> today and get a personalized breakdown of your dental implant
              cost and treatment options. Our experienced team is ready to guide you through every step with honest
              guidance and flexible payment options.
            </p>
            <Link
              href="/appointment-request"
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-white text-red-800 border border-red-800 rounded-lg hover:bg-red-50 transition-colors duration-200 font-semibold cursor-pointer text-center text-[14px] sm:text-[15px] md:text-base w-full sm:w-auto"
            >
              Schedule Your Free Consultation
            </Link>
            <div className="mt-5 sm:mt-6 space-y-2 text-[14px] sm:text-[16px] text-red-100 font-sans">
              <p>
                <a href="tel:+12098251030" className="underline hover:text-white whitespace-nowrap">
                  (209) 825-1030
                </a>
              </p>
              <p>626 E. Yosemite Ave., Manteca, CA 95336</p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
