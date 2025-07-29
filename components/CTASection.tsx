'use client'

import { motion } from 'framer-motion'

export default function CTASection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            
            {/* Left Column - Heading */}
            <div className="text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-white leading-tight">
                Start your journey towards financial success today!
              </h2>
            </div>
            
            {/* Right Column - Paragraph and Buttons */}
            <div className="text-left">
              <p className="text-base sm:text-lg text-white leading-relaxed mb-6 sm:mb-8">
                Unleash your financial possibilities by tapping into untapped opportunities and employing strategic planning, enabling you to maximize growth and achieve financial success.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-white text-black rounded-lg font-semibold hover:bg-black hover:text-white transition-colors duration-200">
                  Get Started
                </button>
                <button className="px-8 py-4 bg-transparent text-white border border-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200">
                  Let's Talk
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 