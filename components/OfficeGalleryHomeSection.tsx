'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { OFFICE_GALLERY_HOME_IMAGES } from './officeGalleryImages'

export default function OfficeGalleryHomeSection() {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: 'snap',
    slides: {
      perView: 4,
      spacing: 24,
    },
    breakpoints: {
      '(max-width: 1024px)': {
        slides: {
          perView: 2,
          spacing: 20,
        },
      },
      '(max-width: 640px)': {
        slides: {
          perView: 1,
          spacing: 16,
        },
      },
    },
  })

  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next()
    }, 4000)

    return () => clearInterval(interval)
  }, [instanceRef])

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
          <h2 className="text-[27px] sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal text-gray-900 mb-4 font-heading leading-tight">
            Our Office Gallery
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Take a virtual tour of our modern dental office and state-of-the-art facilities
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="overflow-hidden"
        >
          <div ref={sliderRef} className="keen-slider">
            {OFFICE_GALLERY_HOME_IMAGES.map((image) => (
              <div key={image.src} className="keen-slider__slide">
                <div className="relative overflow-hidden rounded-xl shadow-lg">
                  <div className="relative aspect-[3/4] w-full min-h-[200px] sm:min-h-[280px] lg:min-h-[320px]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
