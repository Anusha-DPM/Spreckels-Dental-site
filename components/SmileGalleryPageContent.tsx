'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { SMILE_GALLERY_IMAGES } from './smileGalleryImages'

function GalleryCard({
  src,
  alt,
  index,
}: {
  src: string
  alt: string
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 bg-white"
    >
      <div className="relative aspect-[3/4] w-full min-h-[450px] sm:min-h-[500px] overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
    </motion.div>
  )
}

export default function SmileGalleryPageContent() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SMILE_GALLERY_IMAGES.map((image, index) => (
            <GalleryCard key={image.src} src={image.src} alt={image.alt} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
