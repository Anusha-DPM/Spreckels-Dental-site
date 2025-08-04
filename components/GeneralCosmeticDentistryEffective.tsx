'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function GeneralCosmeticDentistryEffective() {
  const generalServices = [
    'Dental Implants', 'Dentures', 'Sealants', 'Fillings', 
    'Crowns & Bridgework', 'Root Canal Treatment', 'Tooth Extractions',
    'Bone Grafts', 'Professional Teeth Cleanings', 'Periodontal Therapy',
    'Oral Cancer Screenings', 'TMJ/TMD Treatment'
  ]

  const cosmeticServices = [
    'Teeth Whitening', 'Dental Bonding', 'Porcelain Veneers',
    'Smile Makeovers', 'Cosmetic Contouring', 'Gum Reshaping'
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-[140px] lg:pt-[140px] pb-20 lg:pb-24 relative overflow-hidden" style={{ backgroundColor: '#441018' }}>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <div className="inline-block mb-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 border border-white/20">
                  <span className="text-white text-sm font-medium">Comprehensive Dental Care</span>
                </div>
              </div>
              
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-8 leading-tight">
                General & Cosmetic
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                  Dentistry
                </span>
              </h1>
              
              <p className="text-lg lg:text-xl text-gray-200 mb-8 leading-relaxed">
                Experience comprehensive dental care with our expert team. From routine checkups to advanced cosmetic procedures, we provide the highest quality dental services to help you achieve your healthiest, most beautiful smile.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://spreckels-dental-site.vercel.app/appointment-request"
                  className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-lg font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer inline-block"
                >
                  Book Appointment
                </a>
                <button className="px-8 py-4 bg-transparent text-white border border-white rounded-lg font-semibold hover:bg-white hover:text-[#441018] transition-colors duration-200">
                  Learn More
                </button>
              </div>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/financial-consulting-feature-1.webp"
                  alt="General and cosmetic dentistry services"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Our Practice Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/financial-consulting-feature-1.webp"
                  alt="Dental practice in Manteca"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                General Dentistry in Manteca, CA
              </h2>
              
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Dentistry is both an art and a science, covering everything from emergency situations to aesthetic needs, all under the umbrella of general dentistry. This challenging and inspiring work is what drives our team at Spreckels Park Dental.
                </p>
                
                <p>
                  Dr. Parikh and Dr. Arora are general dentists who offer comprehensive services and specialize in full mouth restoration. They have the ability to restore a patient's bite and aesthetics, ensuring both function and beauty.
                </p>
                
                <p>
                  Dr. Parikh and Dr. Arora maintain continuous dental education, staying updated with the latest technology including 3D scanning and digital imagery. They maintain their credentials to ensure patient comfort and the highest quality of care.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Comprehensive Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From essential dental care to smile transformations, we provide a full range of dental services to meet all your oral health needs.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* General Dentistry Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">General Dentistry</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Essential dental care for maintaining your oral health and treating dental issues.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {generalServices.map((service, index) => (
                  <div key={index} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {service}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Cosmetic Dentistry Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 border border-pink-100"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-pink-600 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Cosmetic Dentistry</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Advanced procedures to enhance your smile and boost your confidence.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {cosmeticServices.map((service, index) => (
                  <div key={index} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-pink-600 rounded-full mr-3"></div>
                    {service}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Spreckels Park Dental?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🦷",
                title: "Expert Care",
                description: "Experienced dentists with continuous education and latest technology"
              },
              {
                icon: "💎",
                title: "Comprehensive Services",
                description: "From routine checkups to advanced cosmetic procedures"
              },
              {
                icon: "❤️",
                title: "Patient-Focused",
                description: "Personalized care with your comfort and satisfaction as our priority"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-700 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#441018' }}>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
              Ready to Transform Your Smile?
            </h2>
            <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
              Schedule your consultation today and discover how our comprehensive dental services can help you achieve the smile you've always wanted.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-10 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-xl font-semibold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Book Consultation
              </button>
              <button className="px-10 py-4 bg-transparent text-white border-2 border-white rounded-xl font-semibold text-lg hover:bg-white hover:text-[#441018] transition-all duration-300">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 