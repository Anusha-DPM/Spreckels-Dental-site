'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface TeamMember {
  name: string
  role: string
  image: string
  bgColor: string
}

export default function OfficeTeamSection() {
  const members = [
    {
      name: "Dr. Rujul G. Parikh DDS",
      role: "General Dentist",
      image: "/Rujul.jpeg",
      bgColor: "bg-pink-200"
    },
    {
      name: "Dr. Shivli Arora DDS",
      role: "General Dentist",
      image: "/doctor-2.webp",
      bgColor: "bg-green-200"
    },
    {
      name: "Sarah Johnson",
      role: "Dental Hygienist",
      image: "/financial-consulting-testimonial.webp",
      bgColor: "bg-blue-200"
    },
    {
      name: "Maria Rodriguez",
      role: "Dental Assistant",
      image: "/financial-consulting-feature-1.webp",
      bgColor: "bg-yellow-200"
    },
    {
      name: "Jennifer Smith",
      role: "Office Manager",
      image: "/mission.webp",
      bgColor: "bg-green-200"
    },
    {
      name: "Lisa Chen",
      role: "Patient Coordinator",
      image: "/financial-consulting-testimonial.webp",
      bgColor: "bg-purple-200"
    }
  ]

  return (
    <section className="py-12 lg:py-16 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Heading */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-left max-w-md"
          >
            <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-4">
              OUR DENTAL TEAM
            </h3>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-normal text-gray-900 mb-6">
              Meet our experienced dental professionals
            </h2>
          </motion.div>

          {/* Right Column - Team Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 flex-1"
          >
            {members.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                {/* Team Member Image with Colored Background */}
                <div className={`relative h-40 w-40 sm:h-48 sm:w-48 mx-auto mb-4 ${member.bgColor} rounded-lg flex items-center justify-center overflow-hidden`}>
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={160}
                    height={160}
                    className="object-cover w-full h-full"
                  />
                </div>
                
                {/* Team Member Info */}
                <h3 className="text-lg font-bold text-gray-900 mb-1 text-left">{member.name}</h3>
                <p className="text-sm text-gray-600 mb-3 text-left">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
} 