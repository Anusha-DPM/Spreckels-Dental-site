'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const GALLERY_IMAGES = Array.from({ length: 11 }, (_, index) => ({
  src: `/${index + 1}.png`,
  alt: `Smile Gallery ${index + 1}`,
}))

function GalleryLabel({
  label,
  className = '',
}: {
  label: 'Before' | 'After'
  className?: string
}) {
  return (
    <span
      className={`absolute z-10 rounded-md bg-[#441018] px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-lg ring-1 ring-white/20 sm:px-3 sm:py-1.5 sm:text-xs md:text-sm ${className}`}
    >
      {label}
    </span>
  )
}

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

        <GalleryLabel label="Before" className="top-3 left-3 sm:top-4 sm:left-4" />
        <GalleryLabel label="After" className="top-3 right-3 sm:top-4 sm:right-4" />
      </div>
    </motion.div>
  )
}

export default function SmileGalleryPageContent() {
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
          <p
            className="text-[16px] sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
            style={{ color: '#656565' }}
          >
            See the amazing transformations we&apos;ve created for our patients. Each smile represents a
            journey of confidence, health, and happiness.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {GALLERY_IMAGES.map((image, index) => (
            <GalleryCard key={image.src} src={image.src} alt={image.alt} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
