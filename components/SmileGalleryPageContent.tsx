'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function SmileGalleryPageContent() {
  const galleryImages = [
    {
      src: '/smile gallery/pristine1-COLLAGE.avif',
      alt: 'Smile Gallery - Pristine Smile Transformation'
    },
    {
      src: '/smile gallery/CopyofCopyofM.avif',
      alt: 'Smile Gallery - Beautiful Smile Makeover'
    },
    {
      src: '/smile gallery/CopyofCopyofJOSUERUIZ1-COLLAGE.avif',
      alt: 'Smile Gallery - Complete Smile Restoration'
    },
    {
      src: '/smile gallery/CopyofCopyofMICAHP1-COLLAGE.avif',
      alt: 'Smile Gallery - Patient Transformation'
    },
    {
      src: '/smile gallery/CopyofCopyofN.avif',
      alt: 'Smile Gallery - Smile Enhancement'
    },
    {
      src: '/smile gallery/CopyofCopyofpristine10-COLLAGE.avif',
      alt: 'Smile Gallery - Dental Transformation'
    },
    {
      src: '/smile gallery/CopyofCopyofSALG1-COLLAGE.avif',
      alt: 'Smile Gallery - Beautiful Results'
    },
    {
      src: '/smile gallery/CopyofCopyofSILVIAC.avif',
      alt: 'Smile Gallery - Patient Success Story'
    },
    {
      src: '/smile gallery/CopyofCopyofSTACIB1-COLLAGE.avif',
      alt: 'Smile Gallery - Smile Makeover'
    },
    {
      src: '/smile gallery/CopyofCopyofSUEHER1-COLLAGE.avif',
      alt: 'Smile Gallery - Complete Smile Design'
    }
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed" style={{ color: '#656565', fontSize: '16px' }}>
            See the amazing transformations we've created for our patients. Each smile represents a journey of confidence, health, and happiness.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full"
            >
              <div className="relative aspect-[3/4] sm:aspect-[4/3] lg:aspect-[4/3] w-full min-h-[400px] sm:min-h-[500px]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

