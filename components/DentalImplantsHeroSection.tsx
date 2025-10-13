'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function DentalImplantsHeroSection() {
  return (
    <section className="pt-[140px] lg:pt-[140px] pb-0 lg:pb-0 relative min-h-screen flex items-center">
      <div className="w-full">
        <div className="grid lg:grid-cols-2 min-h-[80vh]">
          {/* Left Side - Content */}
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
              {/* Breadcrumb Navigation */}
              <div className="mb-6">
                <nav className="flex items-center space-x-2 text-sm text-blue-200">
                  <Link href="/" className="hover:text-white transition-colors duration-200">
                    Home
                  </Link>
                  <span>/</span>
                  <Link href="/services" className="hover:text-white transition-colors duration-200">
                    Services
                  </Link>
                  <span>/</span>
                  <span className="text-white">Dental Implants</span>
                </nav>
              </div>
              
              <div className="inline-block mb-6">
                <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                  Permanent Tooth Replacement
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                Dental
                <span className="block text-blue-200">Implants</span>
              </h1>
              
              <p className="text-lg lg:text-xl text-blue-100 mb-8 leading-relaxed">
                Restore your smile with the most advanced tooth replacement technology. 
                Dental implants provide a permanent solution that looks, feels, and functions like natural teeth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-white text-blue-800 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200">
                  Book Free Consultation
                </button>
                <button className="px-8 py-4 bg-transparent text-white border border-white rounded-lg font-semibold hover:bg-white hover:text-blue-800 transition-colors duration-200">
                  Learn More
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="bg-gradient-to-br from-gray-100 to-gray-200 p-12 lg:p-16 flex flex-col justify-center relative overflow-hidden"
          >
            <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/dental implant.jpg"
                alt="Spreckels Park Dental Implants - Advanced Tooth Replacement Technology"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              
              {/* Floating Stats */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-800">95%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 