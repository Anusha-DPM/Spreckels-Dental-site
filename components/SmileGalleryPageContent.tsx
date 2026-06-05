'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

type CollageCase = {
  kind: 'collage'
  src: string
  alt: string
}

type ComparisonCase = {
  kind: 'comparison'
  title: string
  beforeSrc: string
  afterSrc: string
  thumbnailSrc: string
  alt: string
}

type GalleryCase = CollageCase | ComparisonCase

type GalleryCategory = {
  title: string
  cases: GalleryCase[]
}

function GalleryLabel({
  children,
  className = '',
}: {
  children: 'Before' | 'After'
  className?: string
}) {
  return (
    <span
      className={`absolute z-10 rounded-md bg-[#441018] px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-lg ring-1 ring-white/20 sm:px-3 sm:py-1.5 sm:text-xs md:text-sm ${className}`}
    >
      {children}
    </span>
  )
}

function CollageGalleryCard({
  caseItem,
  categoryTitle,
  categoryIndex,
  index,
}: {
  caseItem: CollageCase
  categoryTitle: string
  categoryIndex: number
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: categoryIndex * 0.15 + index * 0.1 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 bg-white"
    >
      <div className="relative aspect-[3/4] w-full min-h-[450px] sm:min-h-[500px] overflow-hidden">
        <Image
          src={caseItem.src}
          alt={caseItem.alt}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        <GalleryLabel className="top-3 left-3 sm:top-4 sm:left-4">Before</GalleryLabel>
        <GalleryLabel className="top-3 right-3 sm:top-4 sm:right-4">After</GalleryLabel>

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-6 transform translate-y-0 group-hover:translate-y-0 transition-transform duration-500">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-white/90 text-xs font-medium uppercase tracking-wider mb-1">
              Before & After
            </p>
            <p className="text-white text-[22px] sm:text-lg font-semibold font-heading">
              {categoryTitle}
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

function ComparisonGalleryCard({
  caseItem,
  categoryIndex,
  index,
}: {
  caseItem: ComparisonCase
  categoryIndex: number
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: categoryIndex * 0.15 + index * 0.1 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 bg-white"
    >
      <div className="relative aspect-[3/4] w-full min-h-[450px] sm:min-h-[500px] overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-2">
          <div className="relative h-full overflow-hidden border-r border-white/30">
            <Image
              src={caseItem.beforeSrc}
              alt={`${caseItem.alt} - Before`}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
            />
            <GalleryLabel className="top-3 left-3 sm:top-4 sm:left-4">Before</GalleryLabel>
          </div>
          <div className="relative h-full overflow-hidden">
            <Image
              src={caseItem.afterSrc}
              alt={`${caseItem.alt} - After`}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
            />
            <GalleryLabel className="top-3 left-3 sm:top-4 sm:left-4">After</GalleryLabel>
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-6 transition-transform duration-500">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg ring-2 ring-white/30 sm:h-16 sm:w-16">
              <Image
                src={caseItem.thumbnailSrc}
                alt={`${caseItem.title} featured result`}
                fill
                className="object-cover"
                sizes="64px"
              />
            </div>
            <div className="min-w-0">
              <p className="text-white/90 text-xs font-medium uppercase tracking-wider mb-1">
                Before & After
              </p>
              <p className="text-white text-[22px] sm:text-lg font-semibold font-heading truncate">
                {caseItem.title}
              </p>
            </div>
          </div>
          <div className="w-10 h-10 shrink-0 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
  const categories: GalleryCategory[] = [
    {
      title: 'Cosmetic Dentistry',
      cases: [
        {
          kind: 'collage',
          src: '/smile gallery/CopyofCopyofSALG1-COLLAGE.avif',
          alt: 'Cosmetic Dentistry Before & After',
        },
        {
          kind: 'collage',
          src: '/smile gallery/CopyofCopyofSILVIAC.avif',
          alt: 'Cosmetic Dentistry Before & After',
        },
        {
          kind: 'collage',
          src: '/smile gallery/CopyofCopyofSTACIB1-COLLAGE.avif',
          alt: 'Cosmetic Dentistry Before & After',
        },
        {
          kind: 'collage',
          src: '/smile gallery/CopyofCopyofSUEHER1-COLLAGE.avif',
          alt: 'Cosmetic Dentistry Before & After',
        },
        {
          kind: 'collage',
          src: '/smile gallery/pristine1-COLLAGE.avif',
          alt: 'Cosmetic Dentistry Before & After',
        },
        {
          kind: 'collage',
          src: '/smile gallery/CopyofCopyofM.avif',
          alt: 'Cosmetic Dentistry Before & After',
        },
        {
          kind: 'collage',
          src: '/smile gallery/CopyofCopyofN.avif',
          alt: 'Cosmetic Dentistry Before & After',
        },
      ],
    },
    {
      title: 'Dental Implants',
      cases: [
        {
          kind: 'collage',
          src: '/smile gallery/CopyofCopyofMICAHP1-COLLAGE.avif',
          alt: 'Dental Implants Before & After',
        },
        {
          kind: 'collage',
          src: '/smile gallery/CopyofCopyofpristine10-COLLAGE.avif',
          alt: 'Dental Implants Before & After',
        },
      ],
    },
    {
      title: 'Full Mouth Restoration',
      cases: [
        {
          kind: 'comparison',
          title: 'Full Mouth Restoration',
          beforeSrc: '/FullMouthRestoration-before.jpg',
          afterSrc: '/FullMouthRestoration-after.jpg',
          thumbnailSrc: '/FullMouthRestoration.jpg',
          alt: 'Full Mouth Restoration Before & After',
        },
      ],
    },
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
          <p
            className="text-[16px] sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
            style={{ color: '#656565' }}
          >
            See the amazing transformations we&apos;ve created for our patients. Each smile represents a
            journey of confidence, health, and happiness.
          </p>
        </motion.div>

        {categories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: categoryIndex * 0.2 }}
            viewport={{ once: true }}
            className="mb-16 sm:mb-20 lg:mb-24"
          >
            <div className="mb-8 sm:mb-12">
              <div className="flex items-center gap-4">
                <div className="h-1 w-12" style={{ backgroundColor: '#441018' }} />
                <h2 className="text-[27px] sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 font-heading">
                  {category.title}
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {category.cases.map((caseItem, index) =>
                caseItem.kind === 'comparison' ? (
                  <ComparisonGalleryCard
                    key={`${category.title}-${index}`}
                    caseItem={caseItem}
                    categoryIndex={categoryIndex}
                    index={index}
                  />
                ) : (
                  <CollageGalleryCard
                    key={`${category.title}-${index}`}
                    caseItem={caseItem}
                    categoryTitle={category.title}
                    categoryIndex={categoryIndex}
                    index={index}
                  />
                )
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
