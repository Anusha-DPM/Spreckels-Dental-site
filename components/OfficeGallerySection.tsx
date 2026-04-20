'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

export default function OfficeGallerySection() {
  const [activeImage, setActiveImage] = useState(0)

  const officeImages = [
    {
      src: "/office3.webp",
      alt: "Dental office consultation area",
      title: "Consultation Space",
      subtitle: "Personalized Care Planning",
      description: "Private consultation areas where we discuss your treatment plans, answer questions, and ensure you're fully informed about your dental care journey.",
      features: ["Private consultations", "Treatment planning", "Digital displays", "Comfortable seating"]
    },
    {
      src: "/office5.jpeg",
      alt: "Dental office interior",
      title: "Comfortable Interior",
      subtitle: "Patient-Focused Design",
      description: "Every detail of our office interior is designed with patient comfort and relaxation in mind.",
      features: ["Comfortable seating", "Relaxing atmosphere", "Modern decor", "Patient amenities"]
    },
    {
      src: "/office6.jpg",
      alt: "Dental treatment area",
      title: "Treatment Area",
      subtitle: "Advanced Care Spaces",
      description: "Our treatment areas are equipped with the latest dental technology to ensure precise and comfortable procedures.",
      features: ["Advanced equipment", "Comfortable chairs", "Modern technology", "Sterile environment"]
    },
    {
      src: "/office7.jpg",
      alt: "Dental office space",
      title: "Professional Space",
      subtitle: "Excellence in Design",
      description: "Experience our professionally designed office space that reflects our commitment to excellence in dental care.",
      features: ["Professional design", "Modern facilities", "Comfortable environment", "Quality care"]
    },
    {
      src: "/office8.jpg",
      alt: "Dental office environment",
      title: "Welcoming Environment",
      subtitle: "Comfort & Care",
      description: "Our office environment is designed to make every visit comfortable, relaxing, and stress-free for our patients.",
      features: ["Welcoming atmosphere", "Comfortable spaces", "Modern amenities", "Patient care"]
    }
  ]

  return (
    <section className="py-8 sm:py-12 lg:py-16 xl:py-28 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="mb-6">
            <span className="text-[#441018] font-semibold text-sm">Our Facility</span>
          </div>
          <h2 className="text-[27px] sm:text-4xl lg:text-5xl xl:text-6xl font-normal text-gray-900 mb-6">
            Experience Our
            <span className="text-[#441018]"> Modern Office</span>
          </h2>
          <p className="text-[16px] sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover a dental experience that combines cutting-edge technology with warm, personalized care in our thoughtfully designed facility.
          </p>
        </motion.div>

        {/* Main Gallery Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-12 sm:mb-16 lg:mb-20">
          {/* Left: Large Image Display */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl bg-gray-100">
              <Image
                src={officeImages[activeImage].src}
                alt={officeImages[activeImage].alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={activeImage < 2}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              
              {/* Image Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-[22px] sm:text-2xl lg:text-3xl font-semibold mb-2">{officeImages[activeImage].title}</h3>
                <p className="text-[16px] sm:text-lg text-gray-200 mb-4">{officeImages[activeImage].subtitle}</p>
                <p className="text-[16px] text-gray-200 leading-relaxed">{officeImages[activeImage].description}</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Image Navigation */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6 max-h-[500px] lg:max-h-[600px] overflow-y-auto pr-2"
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: '#441018 #f3f4f6'
            }}
          >
            {officeImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group cursor-pointer transition-all duration-300 ${
                  activeImage === index ? 'ring-4 ring-[#441018] ring-opacity-50' : ''
                }`}
                onClick={() => setActiveImage(index)}
              >
                <div className="flex items-center space-x-4 p-4 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                  {/* Thumbnail */}
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h4 className="font-semibold text-[22px] sm:text-base text-gray-900 mb-1">{image.title}</h4>
                    <p className="text-[16px] sm:text-sm text-gray-600">{image.subtitle}</p>
                  </div>
                  
                  {/* Arrow */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    activeImage === index ? 'bg-[#441018] text-white' : 'bg-gray-100 text-gray-400'
                  }`}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Additional Office Images Gallery */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-[27px] sm:text-3xl lg:text-4xl font-normal text-gray-900 mb-4">
              Explore Our <span className="text-[#441018]">Complete Facility</span>
            </h3>
            <p className="text-[16px] sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Take a virtual tour of our entire office space, from reception to treatment rooms
            </p>
          </div>
          
          {/* Responsive Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {officeImages.slice(1).map((image, index) => (
              <motion.div
                key={index + 1}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => setActiveImage(index + 1)}
              >
                <div className="relative aspect-square w-full bg-gray-100">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Overlay Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h4 className="text-white text-[18px] sm:text-xl font-semibold mb-2">{image.title}</h4>
                    <p className="text-gray-200 text-[14px] sm:text-base">{image.subtitle}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* Feature 1 */}
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-br from-[#441018] to-[#441018]/80 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-[22px] sm:text-xl font-semibold text-gray-900 mb-3">Convenient Hours</h3>
            <p className="text-[16px] text-gray-600 leading-relaxed">Flexible scheduling options to accommodate your busy lifestyle and work commitments.</p>
          </div>

          {/* Feature 2 */}
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-br from-[#441018] to-[#441018]/80 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-[22px] sm:text-xl font-semibold text-gray-900 mb-3">Easy Parking</h3>
            <p className="text-[16px] text-gray-600 leading-relaxed">Free parking available both in front of our office and in the rear lot for your convenience.</p>
          </div>

          {/* Feature 3 */}
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-br from-[#441018] to-[#441018]/80 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-[22px] sm:text-xl font-semibold text-gray-900 mb-3">Modern Technology</h3>
            <p className="text-[16px] text-gray-600 leading-relaxed">State-of-the-art dental equipment and technology for precise, comfortable, and efficient treatments.</p>
          </div>

          {/* Feature 4 */}
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-br from-[#441018] to-[#441018]/80 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-[22px] sm:text-xl font-semibold text-gray-900 mb-3">Comfortable Environment</h3>
            <p className="text-[16px] text-gray-600 leading-relaxed">Relaxing atmosphere designed to reduce anxiety and make your dental visits as pleasant as possible.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 