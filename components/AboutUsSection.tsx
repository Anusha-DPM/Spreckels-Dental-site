<<<<<<< HEAD
'use client'

import React from 'react'
=======
>>>>>>> e6d365c4cff9a738f97526f8c151f1f4a468b62a
import Image from 'next/image'

export default function AboutUsSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          
          {/* Left Column - Image with Overlay Card */}
          <div className="relative w-full">
            <div className="relative rounded-xl overflow-hidden w-full h-[400px] sm:h-[500px] md:h-[600px]">
              <Image
                src="/Rujul.jpeg"
                alt="Dr. Rujul G Parikh DDS - Professional dental care"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              
<<<<<<< HEAD
              {/* Floating Dental Summary Card - Commented out for now
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-white rounded-xl shadow-lg p-4 sm:p-6 max-w-[280px] sm:max-w-xs">
                <div className="space-y-3">
=======
              {/* Floating Dental Summary Card */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-white rounded-xl shadow-lg p-4 sm:p-6 max-w-[280px] sm:max-w-xs">
                <div className="space-y-3">
                  {/* Years of Experience */}
>>>>>>> e6d365c4cff9a738f97526f8c151f1f4a468b62a
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm">Years of Experience</span>
                    <span className="text-gray-900 font-semibold">23+</span>
                  </div>
<<<<<<< HEAD
=======
                  
                  {/* Patients Served */}
>>>>>>> e6d365c4cff9a738f97526f8c151f1f4a468b62a
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm">Patients Served</span>
                    <span className="text-gray-900 font-semibold">10,000+</span>
                  </div>
<<<<<<< HEAD
=======
                  
                  {/* Specializations */}
>>>>>>> e6d365c4cff9a738f97526f8c151f1f4a468b62a
                  <div className="bg-gray-50 rounded-lg p-3 mt-4">
                    <div className="text-gray-600 text-sm mb-2">Specializations</div>
                    <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-center font-semibold text-sm">
                      Implants & General
                    </div>
                  </div>
                </div>
              </div>
<<<<<<< HEAD
              */}
=======
>>>>>>> e6d365c4cff9a738f97526f8c151f1f4a468b62a
            </div>
          </div>
          
          {/* Right Column - Text Content */}
          <div className="text-left">
            <div className="space-y-4 sm:space-y-6">
              {/* About Us Label */}
              <div className="text-blue-500 text-sm font-semibold uppercase tracking-wide">
<<<<<<< HEAD
                General & implant dentist in manteca, ca
=======
              General & implant dentist in manteca, ca
>>>>>>> e6d365c4cff9a738f97526f8c151f1f4a468b62a
              </div>
              
              {/* Main Heading */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-gray-900 leading-tight">
<<<<<<< HEAD
                Dr. Rujul G Parikh DDS
=======
              Dr. Rujul G Parikh DDS
>>>>>>> e6d365c4cff9a738f97526f8c151f1f4a468b62a
              </h2>
              
              {/* Horizontal Divider */}
              <div className="border-t border-gray-300 my-6"></div>
              
              {/* Description Paragraph */}
              <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-5" style={{ color: '#656565' }}>
<<<<<<< HEAD
                For more than 23 years, Dr. Rujul G. Parikh DDS has been committed to creating beautiful, healthy smiles. His main priorities are oral health and patient care. As a General Dentist, he has invested many hours in continuing education and constantly updated and educated in dentistry. His continual pursuit of better methods, depth of understanding, and range of experience make him skilled in numerous dental procedures including Dental Implants, Root Canals and Crowns, Dentures and many more.
=======
              For more than 23 years, Dr. Rujul G. Parikh DDS has been committed to creating beautiful, healthy smiles. His main priorities are oral health and patient care. As a General Dentist, he has invested many hours in continuing education and constantly updated and educated in dentistry. His continual pursuit of better methods, depth of understanding, and range of experience make him skilled in numerous dental procedures including Dental Implants, Root Canals and Crowns, Dentures and many more.
>>>>>>> e6d365c4cff9a738f97526f8c151f1f4a468b62a
              </p>
              
              {/* Learn More Button */}
              <a 
                href="/dental-staff"
                className="bg-gray-100 text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-[#441018] hover:text-white transition-colors duration-200 cursor-pointer inline-block"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
<<<<<<< HEAD
}
=======
} 
>>>>>>> e6d365c4cff9a738f97526f8c151f1f4a468b62a
