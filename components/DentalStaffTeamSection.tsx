'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface TeamMember {
  name: string
  role: string
  image: string
  bgColor: string
}

export default function DentalStaffTeamSection() {
  const members = [
    {
      name: "Carolina RDH (Español)",
      role: "Registered Dental Hygienist",
      image: "/Carolina RDH (Español).webp",
      bgColor: "bg-pink-200"
    },
    {
      name: "Donna",
      role: "Office Manager/Treatment Coordinator",
      image: "/Donna.webp",
      bgColor: "bg-green-200"
    },
    {
      name: "Nicolas (Español)",
      role: "Dental Assistant",
      image: "/Nicolas (Español).webp",
      bgColor: "bg-yellow-200"
    },
    {
      name: "Raquel (Español)",
      role: "Dental Assistant",
      image: "/Raquel (Español).webp",
      bgColor: "bg-green-200"
    }
  ]

  return (
    <section className="py-8 sm:py-10 lg:py-12 xl:py-16 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Heading */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center lg:text-left max-w-md"
          >
            <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-4">
              OUR DENTAL TEAM
            </h3>
            <h2 className="text-[27px] sm:text-3xl lg:text-4xl xl:text-5xl font-normal text-gray-900 mb-6">
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
                <h3 className="text-[22px] sm:text-lg font-semibold text-gray-900 mb-1 text-center sm:text-left">{member.name}</h3>
                <p className="text-[16px] sm:text-sm text-gray-600 mb-3 text-center sm:text-left">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
} 