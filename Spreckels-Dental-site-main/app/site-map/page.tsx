'use client'

import { motion } from 'framer-motion'
import { Layout } from '../../components'

export default function SiteMap() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-[#441018] pt-24 pb-16 lg:pt-24 lg:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-white mb-6">
              Site Map
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Navigate through all pages and sections of our website
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-8 lg:p-12"
          >
            <div className="prose prose-lg max-w-none">
              <h2>Site Map</h2>
              
              <div className="space-y-8">
                {/* Home */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    <a href="/" className="hover:text-[#441018] transition-colors">Home</a>
                  </h3>
                </div>

                {/* About Us */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    <a href="/about" className="hover:text-[#441018] transition-colors">About Us</a>
                  </h3>
                  <ul className="ml-6 space-y-1">
                    <li><a href="/office" className="text-gray-600 hover:text-[#441018] transition-colors">Office</a></li>
                    <li><a href="/dental-staff" className="text-gray-600 hover:text-[#441018] transition-colors">Dental Staff</a></li>
                  </ul>
                </div>

                {/* Services */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    <a href="/services" className="hover:text-[#441018] transition-colors">Services</a>
                  </h3>
                  <ul className="ml-6 space-y-1">
                    <li><a href="/general-cosmetic-dentistry" className="text-gray-600 hover:text-[#441018] transition-colors">General & Cosmetic Dentistry</a></li>
                    <li><a href="/dental-implants" className="text-gray-600 hover:text-[#441018] transition-colors">Dental Implants</a></li>
                    <li><a href="/all-on-4-implant-dentures" className="text-gray-600 hover:text-[#441018] transition-colors">All-on-4 Implant Dentures</a></li>
                    <li><a href="/services/orthodontics" className="text-gray-600 hover:text-[#441018] transition-colors">Orthodontics</a></li>
                    <li><a href="/services/sedation-dentistry" className="text-gray-600 hover:text-[#441018] transition-colors">Sedation Dentistry</a></li>
                    <li><a href="/services/teeth-whitening" className="text-gray-600 hover:text-[#441018] transition-colors">Teeth Whitening</a></li>
                    <li><a href="/services/platelet-rich-fibrin-therapy" className="text-gray-600 hover:text-[#441018] transition-colors">Platelet Rich Fibrin Therapy</a></li>
                  </ul>
                </div>

                {/* Patient Education */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    <a href="/patient-education" className="hover:text-[#441018] transition-colors">Patient Education</a>
                  </h3>
                  <ul className="ml-6 space-y-1">
                    <li><a href="/patient-education/educational-videos" className="text-gray-600 hover:text-[#441018] transition-colors">Educational Videos</a></li>
                    <li><a href="/patient-education/cosmetic-general-dentistry" className="text-gray-600 hover:text-[#441018] transition-colors">Cosmetic & General Dentistry</a></li>
                    <li><a href="/patient-education/emergency-care" className="text-gray-600 hover:text-[#441018] transition-colors">Emergency Care</a></li>
                    <li><a href="/patient-education/endodontics" className="text-gray-600 hover:text-[#441018] transition-colors">Endodontics</a></li>
                    <li><a href="/patient-education/implant-dentistry" className="text-gray-600 hover:text-[#441018] transition-colors">Implant Dentistry</a></li>
                    <li><a href="/patient-education/oral-health" className="text-gray-600 hover:text-[#441018] transition-colors">Oral Health</a></li>
                    <li><a href="/patient-education/oral-hygiene" className="text-gray-600 hover:text-[#441018] transition-colors">Oral Hygiene</a></li>
                    <li><a href="/patient-education/oral-surgery" className="text-gray-600 hover:text-[#441018] transition-colors">Oral Surgery</a></li>
                    <li><a href="/patient-education/orthodontics" className="text-gray-600 hover:text-[#441018] transition-colors">Orthodontics</a></li>
                    <li><a href="/patient-education/pediatric-dentistry" className="text-gray-600 hover:text-[#441018] transition-colors">Pediatric Dentistry</a></li>
                    <li><a href="/patient-education/periodontal-therapy" className="text-gray-600 hover:text-[#441018] transition-colors">Periodontal Therapy</a></li>
                    <li><a href="/patient-education/technology" className="text-gray-600 hover:text-[#441018] transition-colors">Technology</a></li>
                  </ul>
                </div>

                {/* Insurance & Billing */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    <a href="/insurance-billing" className="hover:text-[#441018] transition-colors">Insurance & Billing</a>
                  </h3>
                </div>

                {/* Appointment Request */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    <a href="/appointment-request" className="hover:text-[#441018] transition-colors">Appointment Request</a>
                  </h3>
                </div>

                {/* Contact */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    <a href="/contact" className="hover:text-[#441018] transition-colors">Contact</a>
                  </h3>
                </div>

                {/* Legal Pages */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Legal Pages</h3>
                  <ul className="ml-6 space-y-1">
                    <li><a href="/privacy-policy" className="text-gray-600 hover:text-[#441018] transition-colors">Privacy Policy</a></li>
                    <li><a href="/disclaimer" className="text-gray-600 hover:text-[#441018] transition-colors">Disclaimer</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
} 
