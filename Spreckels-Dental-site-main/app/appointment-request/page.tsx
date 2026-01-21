'use client'

import { motion } from 'framer-motion'
import Layout from '../../components/Layout'

export default function AppointmentRequest() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#441018] to-[#6b1f2a] text-white pt-[190px] pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading mb-6">
              Schedule Your Appointment
            </h1>
            <p className="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Take the first step towards a healthier, more beautiful smile. Request your appointment today and our team will get back to you promptly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Appointment Form Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-8 lg:p-12"
          >
            {/* Embedded Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full"
            >
              <iframe
                src="https://link.digitalpresencematters.com/widget/form/pgNkKPxHTPWEiTCG0cdO"
                style={{width:'100%',height:'656px',border:'none',borderRadius:'4px'}}
                id="inline-pgNkKPxHTPWEiTCG0cdO" 
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Spreckels website form"
                data-height="656"
                data-layout-iframe-id="inline-pgNkKPxHTPWEiTCG0cdO"
                data-form-id="pgNkKPxHTPWEiTCG0cdO"
                title="Spreckels website form"
              >
              </iframe>
              <script src="https://link.digitalpresencematters.com/js/form_embed.js"></script>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-gray-900 mb-6">
              Need Immediate Assistance?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              For urgent dental care or immediate questions, please don't hesitate to contact us directly.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-200">
              <div className="w-16 h-16 bg-[#441018] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold font-heading text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 mb-2">
                <a 
                  href="tel:(209) 825-1030" 
                  className="hover:text-[#441018] transition-colors duration-200 cursor-pointer"
                >
                  (209) 825-1030
                </a>
              </p>
              <p className="text-sm text-gray-500">Available during business hours</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-200">
              <div className="w-16 h-16 bg-[#441018] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold font-heading text-gray-900 mb-2">Office Hours</h3>
              <p className="text-gray-600 mb-2">Monday - Friday</p>
              <p className="text-sm text-gray-500">8:00 AM - 6:00 PM</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-200">
              <div className="w-16 h-16 bg-[#441018] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold font-heading text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600 mb-2">Central Valley</p>
              <p className="text-sm text-gray-500">California</p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
} 