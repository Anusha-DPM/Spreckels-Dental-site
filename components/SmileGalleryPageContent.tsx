'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function SmileGalleryPageContent() {
  const categories = [
    {
      title: 'Cosmetic Dentistry',
      cases: [
        {
          src: '/smile gallery/CopyofCopyofSALG1-COLLAGE.avif',
          alt: 'Cosmetic Dentistry Before & After'
        },
        {
          src: '/smile gallery/CopyofCopyofSILVIAC.avif',
          alt: 'Cosmetic Dentistry Before & After'
        },
        {
          src: '/smile gallery/CopyofCopyofSTACIB1-COLLAGE.avif',
          alt: 'Cosmetic Dentistry Before & After'
        },
        {
          src: '/smile gallery/CopyofCopyofSUEHER1-COLLAGE.avif',
          alt: 'Cosmetic Dentistry Before & After'
        },
        {
          src: '/smile gallery/pristine1-COLLAGE.avif',
          alt: 'Cosmetic Dentistry Before & After'
        },
        {
          src: '/smile gallery/CopyofCopyofM.avif',
          alt: 'Cosmetic Dentistry Before & After'
        },
        {
          src: '/smile gallery/CopyofCopyofN.avif',
          alt: 'Cosmetic Dentistry Before & After'
        }
      ]
    },
    {
      title: 'Dental Implants',
      cases: [
        {
          src: '/smile gallery/CopyofCopyofJOSUERUIZ1-COLLAGE.avif',
          alt: 'Dental Implants Before & After'
        },
        {
          src: '/smile gallery/CopyofCopyofMICAHP1-COLLAGE.avif',
          alt: 'Dental Implants Before & After'
        },
        {
          src: '/smile gallery/CopyofCopyofpristine10-COLLAGE.avif',
          alt: 'Dental Implants Before & After'
        }
      ]
    }
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <p className="text-[16px] sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed" style={{ color: '#656565' }}>
            See the amazing transformations we've created for our patients. Each smile represents a journey of confidence, health, and happiness.
          </p>
        </motion.div>

        {/* Categories with Modern Card Design */}
        {categories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: categoryIndex * 0.2 }}
            viewport={{ once: true }}
            className="mb-16 sm:mb-20 lg:mb-24"
          >
            {/* Category Header */}
            <div className="mb-8 sm:mb-12">
              <div className="flex items-center gap-4">
                <div className="h-1 w-12" style={{ backgroundColor: '#441018' }}></div>
                <h2 className="text-[27px] sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 font-heading">
                  {category.title}
                </h2>
              </div>
            </div>

            {/* Cases Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {category.cases.map((caseItem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.15 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 bg-white"
                >
                  {/* Image Container */}
                  <div className="relative aspect-[3/4] w-full min-h-[450px] sm:min-h-[500px] overflow-hidden">
                    <Image
                      src={caseItem.src}
                      alt={caseItem.alt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  {/* Bottom Info Card */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-6 transform translate-y-0 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white/90 text-xs font-medium uppercase tracking-wider mb-1">Before & After</p>
                        <p className="text-white text-[22px] sm:text-lg font-semibold font-heading">{category.title}</p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
