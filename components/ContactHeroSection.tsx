'use client'

import { motion } from 'framer-motion'

export default function ContactHeroSection() {
  return (
    <section className="pt-[140px] lg:pt-[140px] pb-8 sm:pb-12 lg:pb-24" style={{ backgroundColor: '#441018' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 lg:mb-20"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-8">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wide mb-4">
            CONTACT US
          </h3>
          <h1 className="text-[27px] sm:text-4xl lg:text-5xl xl:text-6xl font-normal text-white leading-tight mb-4 sm:mb-6">
            Get in Touch
          </h1>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-[16px] sm:text-xl text-gray-200 max-w-3xl mx-auto">
            We're here to help you achieve your best smile. Contact us today to schedule your appointment.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column - Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex"
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10 w-full flex flex-col">
              <h2 className="text-[22px] sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">Contact Information</h2>
              
              {/* Contact Cards */}
              <div className="space-y-6 flex-grow">
                {/* Phone Contact */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex items-center p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-200"
                >
                  <div className="w-12 h-12 bg-[#441018] rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[22px] sm:text-xl font-semibold text-gray-900 mb-1">Call Us</h3>
                                    <a href="tel:(209) 825-1030" className="text-[#441018] hover:text-[#2d0b12] transition-colors duration-200 font-semibold sm:text-lg">
                  (209) 825-1030
                    </a>
                    <p className="text-[16px] sm:text-sm text-gray-500">Available during business hours</p>
                  </div>
                </motion.div>

                {/* Email Contact */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex items-center p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-200"
                >
                  <div className="w-12 h-12 bg-[#441018] rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[22px] sm:text-xl font-semibold text-gray-900 mb-1">Email Us</h3>
                    <a href="mailto:drrujul@gmail.com" className="text-[#441018] hover:text-[#2d0b12] transition-colors duration-200 font-semibold">
                      drrujul@gmail.com
                    </a>
                    <p className="text-[16px] sm:text-sm text-gray-500">We'll respond within 24 hours</p>
                  </div>
                </motion.div>

                {/* Location */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="flex items-center p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-200"
                >
                  <div className="w-12 h-12 bg-[#441018] rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[22px] sm:text-xl font-semibold text-gray-900 mb-1">Visit Us</h3>
                    <p className="text-[16px] sm:text-base text-gray-700 font-semibold">
                      626 E. Yosemite Ave.<br />
                      Manteca, CA 95336
                    </p>
                    <p className="text-[16px] sm:text-sm text-gray-500">Conveniently located</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Office Hours */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-7 flex"
          >
            {/* Office Hours */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10 w-full flex flex-col">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-[#441018] rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-[22px] sm:text-2xl lg:text-3xl font-bold text-gray-900">Office Hours</h3>
              </div>
              
              <div className="space-y-3 flex-grow">
                <div className="flex justify-between items-center py-3 px-4 bg-gray-50 rounded-xl">
                  <span className="text-[16px] sm:text-base font-semibold text-gray-700">Monday</span>
                  <span className="text-[16px] sm:text-base text-gray-600 font-medium">9:30 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-3 px-4 bg-gray-50 rounded-xl">
                  <span className="text-[16px] sm:text-base font-semibold text-gray-700">Tuesday</span>
                  <span className="text-[16px] sm:text-base text-gray-600 font-medium">9:30 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-3 px-4 bg-gray-50 rounded-xl">
                  <span className="text-[16px] sm:text-base font-semibold text-gray-700">Wednesday</span>
                  <span className="text-[16px] sm:text-base text-gray-600 font-medium">9:30 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-3 px-4 bg-gray-50 rounded-xl">
                  <span className="text-[16px] sm:text-base font-semibold text-gray-700">Thursday</span>
                  <span className="text-[16px] sm:text-base text-gray-600 font-medium">9:30 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-3 px-4 bg-gray-50 rounded-xl">
                  <span className="text-[16px] sm:text-base font-semibold text-gray-700">Friday</span>
                  <span className="text-[16px] sm:text-base text-gray-600 font-medium">9:30 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-3 px-4 bg-red-50 rounded-xl">
                  <span className="text-[16px] sm:text-base font-semibold text-red-700">Saturday - Sunday</span>
                  <span className="text-[16px] sm:text-base text-red-600 font-medium">Closed</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 