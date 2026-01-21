'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function PaymentFinancingSection() {
  return (
    <section className="py-8 sm:py-10 lg:py-12 xl:py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-[27px] sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Payment & Financing Options
          </h2>
          <p className="text-[16px] sm:text-lg text-gray-600 max-w-2xl mx-auto">
            We offer flexible payment methods and financing solutions to make your dental care accessible and affordable.
          </p>
        </motion.div>

        {/* Payment Options */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-lg p-8 sm:p-10 mb-8 sm:mb-12"
        >
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-[#441018] rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <h3 className="text-[22px] sm:text-2xl font-bold text-gray-900">Payment Options</h3>
          </div>
          <p className="text-[16px] sm:text-lg text-gray-700 leading-relaxed">
            We accept <strong>checks</strong>, <strong>cash</strong> or <strong>debit cards</strong>. We also offer flexible payment plans.
          </p>
        </motion.div>

        {/* Financing Options */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-lg p-8 sm:p-10 mb-8 sm:mb-12"
        >
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-[#441018] rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <h3 className="text-[22px] sm:text-2xl font-bold text-gray-900">Financing Options</h3>
          </div>
          
          <p className="text-[16px] sm:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
            We currently offer 2 different financing options to select from such as <strong>Sunbit</strong> and <strong>CareCredit</strong>. We encourage you to apply prior to your appointment. Should you need assistance or further questions, please give us a call.
          </p>

          {/* Financing Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Sunbit Card */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900">Sunbit</h4>
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
              </div>
              <p className="text-[16px] text-gray-700 mb-4 leading-relaxed">
                Sunbit offers a next-generation, no-fee credit card that can be managed through a powerful mobile app, as well as a point-of-sale lending option available at over 18,000 service locations.
              </p>
              <a href="https://sunbit.com" target="_blank" rel="noopener noreferrer" className="text-[#441018] hover:underline font-medium text-[15px] sm:text-base">
                Learn more at sunbit.com →
              </a>
            </div>

            {/* CareCredit Card */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="border-2 border-green-600 rounded px-3 py-1 bg-white">
                  <span className="text-green-600 font-bold">CareCredit</span>
                </div>
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
              </div>
              <p className="text-[16px] text-gray-700 mb-4 leading-relaxed">
                CareCredit is here to help you pay for treatments and procedures your insurance doesn't cover. We offer No Interest* financing or low minimum monthly payment options.
              </p>
              <a href="https://carecredit.com" target="_blank" rel="noopener noreferrer" className="text-[#441018] hover:underline font-medium text-[15px] sm:text-base">
                Apply at carecredit.com →
              </a>
            </div>
          </div>

          {/* Additional CareCredit Info */}
          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 mb-3">More About CareCredit</h4>
            <div className="space-y-3 text-gray-700">
              <p className="text-[16px] leading-relaxed">
                With three simple steps, including an instant approval process, it's easy to apply for CareCredit. After you're approved, you're free to use CareCredit for the services you choose including LASIK, veterinary, dentistry, cosmetic, hearing aids and more.
              </p>
              <p className="text-[16px] leading-relaxed">
                Now you don't have to worry about saving up for the procedures you want and need. With CareCredit, the decision's in your hands to get what you want, when you want it.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-[#441018] rounded-xl p-6 sm:p-8 max-w-2xl mx-auto">
            <h3 className="text-[27px] sm:text-xl font-bold text-white mb-3">
              Need Help Understanding Your Options?
            </h3>
            <p className="text-[16px] text-gray-200 mb-6">
              Our team is here to help you understand your payment and financing options. Contact us today for personalized assistance.
            </p>
            <a 
              href="/contact"
              className="px-8 py-3 bg-white text-[#441018] border border-white rounded-lg font-bold hover:bg-transparent hover:text-white hover:border-white transition-colors duration-200 cursor-pointer inline-block text-center text-[15px] sm:text-base"
            >
              Contact Our Office
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 