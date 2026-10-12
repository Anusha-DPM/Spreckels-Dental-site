'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function GeneralServicesSection() {
  const services = [
    {
      name: 'Dental Implants',
      description: 'for the longest-lasting tooth replacement available today',
      image: '/DentalImplants-gc.jpeg',
    },
    {
      name: 'Dentures',
      description: 'to help you eat & smile again',
      image: '/Dentures-gc.jpeg',
    },
    {
      name: 'Sealants',
      description: "to protect children's teeth from decay",
      image: '/Sealants-gc.jpeg',
    },
    {
      name: 'Fillings',
      description: 'to remove cavities & make your teeth strong and healthy again',
      image: '/Fillings-gc.jpeg',
    },
    {
      name: 'Crowns & Bridgework',
      description: 'to replace large amounts of lost tooth structure & or missing teeth',
      image: '/CrownsBridgework-gc.jpeg',
    },
    {
      name: 'Root Canal Treatment',
      description: 'to save an infected tooth',
      image: '/RootCanalTreatment-gc.jpeg',
    },
    {
      name: 'Tooth Extractions',
      description: 'when a tooth is damaged or decayed beyond repair',
      image: '/ToothExtractions-gc.jpeg',
    },
    {
      name: 'Bone Grafts',
      description: 'to resolve natural bone loss in the jaw',
      image: '/BoneGrafts-gc.jpeg',
    },
    {
      name: 'Professional Teeth Cleanings',
      description: 'to maintain good oral health',
      image: '/ProfessionalTeethCleanings-gc.jpeg',
    },
    {
      name: 'Periodontal (Gum) Disease Therapy',
      description: 'to prevent tooth loss',
      image: '/PeriodontalGumDiseaseTherapy-gc.jpeg',
    },
    {
      name: 'Oral Cancer Screenings',
      description: 'to detect disease at a curable stage',
      image: '/OralCancerScreenings-gc.jpeg',
    },
    {
      name: 'TMJ/TMD Treatment',
      description: 'for chronic jaw pain',
      image: '/TMJTMDTreatment-gc.jpeg',
    },
  ]

  return (
    <section className="py-8 sm:py-10 lg:py-12 xl:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-[27px] sm:text-3xl lg:text-4xl font-normal text-gray-900 mb-6">
            Our General Dentistry Services Include
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-lg min-h-[220px] sm:min-h-[260px] shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src={service.image}
                alt={service.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div
                className="absolute inset-0 bg-black/60"
                aria-hidden="true"
              />
              <div className="relative z-10 flex flex-col items-center justify-center text-center h-full min-h-[220px] sm:min-h-[260px] p-5 sm:p-6">
                <h3 className="text-[22px] sm:text-lg font-semibold text-white mb-2 drop-shadow-sm">
                  {service.name}
                </h3>
                <p className="text-[16px] sm:text-base text-white/95 leading-relaxed max-w-sm drop-shadow-sm">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
