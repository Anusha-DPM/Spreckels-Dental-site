'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { SMILE_GALLERY_PREVIEW_IMAGES } from './smileGalleryImages'

export default function SmileGallerySection() {
  return (
    <section className="py-8 sm:py-10 lg:py-12 xl:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10 lg:mb-12"
        >
          <h2 className="text-[27px] sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal text-gray-900 mb-3 font-heading leading-tight">
            Smile Gallery
          </h2>
          <div className="w-16 h-0.5 bg-gray-300 mx-auto mb-3" />
          <p className="text-sm sm:text-base text-gray-500 uppercase tracking-wide">
            Before and After
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10">
          {SMILE_GALLERY_PREVIEW_IMAGES.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full"
            >
              <div className="relative aspect-[3/4] sm:aspect-[4/3] lg:aspect-[4/3] w-full min-h-[280px] sm:min-h-[400px] lg:min-h-[500px]">
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/smile-gallery"
            className="inline-block px-8 sm:px-10 py-3.5 sm:py-4 bg-[#441018] text-white border border-[#441018] rounded-lg hover:bg-white hover:text-[#441018] transition-colors duration-200 font-semibold font-heading text-sm sm:text-base uppercase tracking-wide"
          >
            View Full Gallery
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
