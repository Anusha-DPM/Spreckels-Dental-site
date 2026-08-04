'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function GeneralCosmeticDentistryAlternative() {
  const generalServices = [
    { name: 'Dental Implants', icon: '🦷', description: 'Permanent tooth replacement' },
    { name: 'Dentures', icon: '😁', description: 'Removable tooth replacement' },
    { name: 'Fillings', icon: '⚡', description: 'Cavity treatment' },
    { name: 'Root Canal', icon: '🔧', description: 'Infected tooth treatment' },
    { name: 'Crowns', icon: '👑', description: 'Tooth restoration' },
    { name: 'Cleanings', icon: '✨', description: 'Professional hygiene' }
  ]

  const cosmeticServices = [
    { name: 'Teeth Whitening', icon: '💎', description: 'Brighten your smile' },
    { name: 'Veneers', icon: '🌟', description: 'Perfect smile makeover' },
    { name: 'Bonding', icon: '🔨', description: 'Chip and crack repair' },
    { name: 'Contouring', icon: '📐', description: 'Reshape teeth' },
    { name: 'Gum Reshaping', icon: '🌿', description: 'Gum line correction' },
    { name: 'Smile Design', icon: '🎨', description: 'Complete smile transformation' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section - Split Layout */}
      <section className="pt-[140px] lg:pt-[140px] pb-0 lg:pb-0 relative min-h-screen flex items-center">
        <div className="w-full">
          <div className="grid lg:grid-cols-2 min-h-[80vh]">
            {/* Left Side - General Dentistry */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="bg-gradient-to-br from-blue-600 to-blue-800 p-12 lg:p-16 flex flex-col justify-center relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
              </div>
              
              <div className="relative z-10 text-white">
                <div className="inline-block mb-6">
                  <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                    Essential Care
                  </span>
                </div>
                
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                  General
                  <span className="block text-blue-200">Dentistry</span>
                </h1>
                
                <p className="text-lg lg:text-xl text-blue-100 mb-8 leading-relaxed">
                  Comprehensive dental care for your entire family. From routine checkups to advanced treatments, we ensure your oral health is in expert hands.
                </p>
                
                <button className="px-8 py-4 bg-white text-blue-800 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 text-[15px] sm:text-base">
                  Learn More
                </button>
              </div>
            </motion.div>

            {/* Right Side - Cosmetic Dentistry */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="bg-gradient-to-br from-purple-600 to-pink-600 p-12 lg:p-16 flex flex-col justify-center relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
              </div>
              
              <div className="relative z-10 text-white">
                <div className="inline-block mb-6">
                  <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                    Smile Enhancement
                  </span>
                </div>
                
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                  Cosmetic
                  <span className="block text-purple-200">Dentistry</span>
                </h1>
                
                <p className="text-lg lg:text-xl text-purple-100 mb-8 leading-relaxed">
                  Transform your smile with advanced cosmetic procedures. Achieve the beautiful, confident smile you've always dreamed of with our expert team.
                </p>
                
                <button className="px-8 py-4 bg-white text-purple-800 rounded-lg font-semibold hover:bg-purple-50 transition-colors duration-200 text-[15px] sm:text-base">
                  Learn More
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section - Diagonal Layout */}
      <section className="py-20 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-white"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dr. Parikh and Dr. Arora bring years of experience and advanced technology to provide you with the highest quality dental care in Manteca, CA.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6 text-gray-700 leading-relaxed"
            >
              <p>
                Dentistry is both an art and a science, covering everything from emergency situations to aesthetic needs, all under the umbrella of general dentistry. This challenging and inspiring work is what drives our team at Spreckels Park Dental.
              </p>
              
              <p>
                Dr. Parikh and Dr. Arora are general dentists who offer comprehensive services and specialize in full mouth restoration. They have the ability to restore a patient's bite and aesthetics, ensuring both function and beauty.
              </p>
              
              <p>
                Dr. Parikh and Dr. Arora maintain continuous dental education, staying updated with the latest technology including 3D scanning and digital imagery. They maintain their credentials to ensure patient comfort and the highest quality of care.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/financial-consulting-feature-1.webp"
                  alt="Dental team at work"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Complete Service Menu
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of dental services designed to meet all your oral health and cosmetic needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* General Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-xl"
            >
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🦷</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">General Dentistry</h3>
                <p className="text-gray-600 mt-2">Essential care for your oral health</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {generalServices.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-blue-50 rounded-xl p-4 text-center hover:bg-blue-100 transition-colors duration-200"
                  >
                    <div className="text-2xl mb-2">{service.icon}</div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">{service.name}</h4>
                    <p className="text-xs text-gray-600">{service.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Cosmetic Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-xl"
            >
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💎</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Cosmetic Dentistry</h3>
                <p className="text-gray-600 mt-2">Transform your smile</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {cosmeticServices.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-purple-50 rounded-xl p-4 text-center hover:bg-purple-100 transition-colors duration-200"
                  >
                    <div className="text-2xl mb-2">{service.icon}</div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">{service.name}</h4>
                    <p className="text-xs text-gray-600">{service.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '15+', label: 'Years Experience' },
              { number: '1000+', label: 'Happy Patients' },
              { number: '50+', label: 'Dental Services' },
              { number: '100%', label: 'Patient Satisfaction' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold text-[#441018] mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Gradient Background */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#441018] via-purple-800 to-[#441018]"></div>
        <div className="absolute inset-0 opacity-10">
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
              Join thousands of satisfied patients who have trusted us with their dental care. Schedule your consultation today!
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-10 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-xl font-semibold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Book Consultation
              </button>
              <button className="px-10 py-4 bg-transparent text-white border-2 border-white rounded-xl font-semibold text-lg hover:bg-white hover:text-[#441018] transition-all duration-300">
                Call Now
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 