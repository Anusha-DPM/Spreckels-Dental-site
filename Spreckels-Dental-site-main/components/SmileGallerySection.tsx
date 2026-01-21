'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function SmileGallerySection() {
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
    }
  ]

  return (
    <section className="py-8 sm:py-10 lg:py-12 xl:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <div className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-4">
            Gallery
          </div>
          <h2 className="text-[27px] sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal text-gray-900 mb-4 lg:mb-6 font-heading leading-tight">
            Smile Gallery
          </h2>
          <p className="text-[16px] sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8" style={{ color: '#656565' }}>
            See the amazing transformations we've created for our patients. Each smile tells a story of confidence, health, and happiness.
          </p>
          <Link 
            href="/smile-gallery"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-[#441018] text-white border border-[#441018] rounded-lg hover:bg-white hover:text-[#441018] transition-colors duration-200 font-semibold font-heading text-[15px] sm:text-base"
          >
            View Full Gallery
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
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

