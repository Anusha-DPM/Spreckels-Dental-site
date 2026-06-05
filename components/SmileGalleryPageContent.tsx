'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const GALLERY_IMAGES = Array.from({ length: 11 }, (_, index) => ({
  src: `/${index + 1}.png`,
  alt: `Smile Gallery Before & After ${index + 1}`,
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

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-6 transition-transform duration-500">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-white/90 text-xs font-medium uppercase tracking-wider mb-1">
              Before & After
            </p>
            <p className="text-white text-[22px] sm:text-lg font-semibold font-heading">
              Smile Transformation
            </p>
          </div>
          <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
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
