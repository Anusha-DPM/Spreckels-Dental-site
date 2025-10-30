'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

interface Testimonial {
  name: string
  text: string
  avatar: string
  nameColor: string
  avatarPosition: 'left' | 'right'
  fullBio: string
}

export default function DentalStaffJourneySection() {
  const [hoveredDoctor, setHoveredDoctor] = useState<string | null>(null)

  const testimonials: Testimonial[] = [
    {
      name: "Dr. Rujul G. Parikh DDS",
      text: "With over 25 years of experience in dentistry, I've dedicated my career to creating beautiful, healthy smiles. Our commitment to patient care and advanced dental techniques has made Spreckels Park Dental a trusted name in Manteca.",
      avatar: "/Rujul.jpeg",
      nameColor: "text-green-600",
      avatarPosition: 'left',
      fullBio: `Dentist & Implant Dentist in Manteca & Stockton, CA

For more than 25 years, Dr. Rujul G. Parikh DDS has been committed to creating beautiful, healthy smiles. His main priorities are oral health and patient care. He received his education from the highly regarded GDCH in Ahmedabad, India, and from numerous lecturers at Loma Linda University, UCLA, UCSF, UOP, and other institutions. His continual pursuit of better methods, depth of understanding, and breadth of experience make him skilled in numerous dental procedures including Dental Implants, Dental Veneers and Crowns, Dentures and many more.

As a General Dentist, he has invested many hours in continuing education and constantly updated and educated in dentistry. He graduated from the United States Dental Institute with continuous education in orthodontics and for dental implants, he has been trained by many national and international surgeons to become an Associate Fellow of AAID and a Fellow of ICOI and GDIA. He is passionate about achieving excellence in dentistry with a focus on Dental Implants.

He is happily married with three children, and he likes to play table tennis and golf in his free time. He enjoys riding and trekking as well. You will feel at ease in a challenging dental setting thanks to his extensive knowledge and attention to detail.`
    },
    {
      name: "Dr. Shivli Arora DDS",
      text: "Working alongside Dr. Parikh, I bring nearly 10 years of clinical experience with a passion for cosmetic dentistry. We focus on providing personalized care that meets each patient's unique needs.",
      avatar: "/doctor-2.webp",
      nameColor: "text-blue-600",
      avatarPosition: 'right',
      fullBio: `Dentist in Manteca & Stockton, CA

Working under Dr. Parikh, Dr. Shivli Arora has nearly 10 years of hands on clinical experience and has a passion for cosmetic dentistry in providing patients with the beautiful smile they always wanted with procedures such as Fillings, Crowns, Dentures, Teeth Cleanings, and many more.

Having a major in Periodontics from the prestigious Amrita School of Dentistry and an MDS from Rajiv Gandhi University of Health Sciences in India, along with dental credentials from the renowned UCSF. Dr. Arora is certified in Lasers for dental treatment and she strives to further pursue her education for excellence involving Dental Implants, that translates clinical skills and extends to patients emotional well being.

She is happily married with a daughter and loves to spend quality time with her friends and family, cooking, and camping. Offering only the best care, you will feel comfortable receiving treatment from both of our doctors.`
    }
  ]

  return (
    <section className="py-8 sm:py-10 lg:py-12 xl:py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-[27px] sm:text-3xl lg:text-4xl xl:text-5xl font-normal text-gray-900 mb-6">
            Our Doctors
          </h2>
          <p className="text-[16px] sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Meet our experienced dental professionals who are dedicated to providing exceptional care and creating beautiful, healthy smiles for our patients in Manteca, CA.
          </p>
        </motion.div>

        {/* Main Content - Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          {/* Left Column - Testimonials and Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-3xl p-8 lg:p-12 shadow-lg flex flex-col justify-center"
          >
            {/* Top Testimonial */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-md mb-8 cursor-pointer hover:shadow-lg transition-all duration-200"
              onMouseEnter={() => setHoveredDoctor(testimonials[0].name)}
              onMouseLeave={() => setHoveredDoctor(null)}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Image
                    src={testimonials[0].avatar}
                    alt={testimonials[0].name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4 className={`font-semibold text-[22px] sm:text-lg mb-2 ${testimonials[0].nameColor} transition-all duration-200`}>
                    {testimonials[0].name}
                  </h4>
                  <p className="text-[16px] text-gray-700 leading-relaxed">
                    {testimonials[0].text}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Central Logo */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex justify-center mb-8"
            >
              <div className="relative">
                {/* Outer layers */}
                <div className="absolute inset-0 bg-gray-200 rounded-2xl transform scale-110 opacity-30"></div>
                <div className="absolute inset-0 bg-gray-300 rounded-2xl transform scale-105 opacity-50"></div>
                
                {/* Main logo container */}
                <div className="relative bg-white rounded-2xl p-6 shadow-lg w-24 h-24 flex items-center justify-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center shadow-md">
                    <svg 
                      className="w-6 h-6 text-white" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Bottom Testimonial */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-md cursor-pointer hover:shadow-lg transition-all duration-200"
              onMouseEnter={() => setHoveredDoctor(testimonials[1].name)}
              onMouseLeave={() => setHoveredDoctor(null)}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-1">
                  <h4 className={`font-semibold text-[22px] sm:text-lg mb-2 ${testimonials[1].nameColor} transition-all duration-200`}>
                    {testimonials[1].name}
                  </h4>
                  <p className="text-[16px] text-gray-700 leading-relaxed">
                    {testimonials[1].text}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <Image
                    src={testimonials[1].avatar}
                    alt={testimonials[1].name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Dynamic Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative h-96 lg:h-[600px] xl:h-[700px] rounded-2xl overflow-hidden shadow-xl"
          >
            {/* Default Image */}
            <motion.div
              animate={{ 
                opacity: hoveredDoctor ? 0 : 1,
                scale: hoveredDoctor ? 0.95 : 1
              }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0"
            >
              <Image
                src="/Rujul.jpeg"
                alt="Dr. Rujul G. Parikh DDS - Professional dental care"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </motion.div>

            {/* Doctor Bio Text with Image */}
            {hoveredDoctor && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 bg-white p-8 lg:p-12 overflow-y-auto"
              >
                <div className="h-full flex flex-col">
                  {/* Doctor Image and Name Header */}
                  <div className="flex items-center mb-6">
                    <div className="relative w-20 h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden mr-6 flex-shrink-0">
                      <Image
                        src={testimonials.find(t => t.name === hoveredDoctor)?.avatar || ''}
                        alt={hoveredDoctor}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-[22px] sm:text-2xl lg:text-3xl font-semibold text-gray-900">
                      {hoveredDoctor}
                    </h3>
                  </div>
                  
                  {/* Doctor Biography */}
                  <div className="text-[16px] leading-relaxed text-sm lg:text-base space-y-4 flex-1" style={{ color: '#656565' }}>
                    {testimonials.find(t => t.name === hoveredDoctor)?.fullBio.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
} 