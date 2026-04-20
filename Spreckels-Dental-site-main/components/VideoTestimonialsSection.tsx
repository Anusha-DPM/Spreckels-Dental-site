'use client'

import { useKeenSlider } from 'keen-slider/react'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import 'keen-slider/keen-slider.min.css'

export default function VideoTestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)

  const videos = [
    {
      src: '/video 1.MOV',
      title: 'Patient Testimonial'
    },
    {
      src: '/video 2.MOV',
      title: 'Patient Testimonial'
    },
    {
      src: '/video 1.MOV',
      title: 'Patient Testimonial - Placeholder'
    }
  ]

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: true,
    mode: 'snap',
    slides: {
      perView: 3,
      spacing: 20,
    },
    breakpoints: {
      '(max-width: 1024px)': {
        slides: {
          perView: 2,
          spacing: 15,
        },
      },
      '(max-width: 768px)': {
        slides: {
          perView: 1,
          spacing: 15,
        },
      },
    },
    created() {
      setLoaded(true)
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
  })

  // Autoplay functionality - pause videos when sliding
  useEffect(() => {
    if (instanceRef.current) {
      const interval = setInterval(() => {
        const videos = document.querySelectorAll('video')
        videos.forEach((video) => {
          if (!video.paused) {
            video.pause()
          }
        })
        instanceRef.current?.next()
      }, 8000) // Change slide every 8 seconds

      return () => clearInterval(interval)
    }
  }, [instanceRef])

  const goToSlide = (index: number) => {
    instanceRef.current?.moveToIdx(index)
  }

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
            Testimonials
          </div>
          <h2 className="text-[27px] sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal text-gray-900 mb-4 lg:mb-6 font-heading leading-tight">
            Video Testimonials
          </h2>
          <p className="text-[16px] sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8" style={{ color: '#656565' }}>
            Hear from our patients about their experiences at Spreckels Park Dental. See real stories of transformation and satisfaction.
          </p>
          <Link 
            href="/video-testimonials"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-[#441018] text-white border border-[#441018] rounded-lg hover:bg-white hover:text-[#441018] transition-colors duration-200 font-semibold font-heading text-[15px] sm:text-base"
          >
            View All Testimonials
          </Link>
        </motion.div>

        <div className="relative">
          {/* Navigation Arrows */}
          {loaded && instanceRef.current && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  instanceRef.current?.prev()
                }}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-2 sm:p-3 shadow-lg transition-all duration-300 hover:scale-110"
                aria-label="Previous video"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  instanceRef.current?.next()
                }}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-2 sm:p-3 shadow-lg transition-all duration-300 hover:scale-110"
                aria-label="Next video"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Carousel Container */}
          <div ref={sliderRef} className="keen-slider">
            {videos.map((video, index) => (
              <div key={index} className="keen-slider__slide">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex justify-center"
                >
                  <div className="relative w-full rounded-xl overflow-hidden shadow-lg bg-black">
                    <video
                      controls
                      className="w-full h-auto max-h-[300px] sm:max-h-[350px] lg:max-h-[400px]"
                      preload="metadata"
                    >
                      <source src={video.src} type="video/quicktime" />
                      <source src={video.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          {loaded && instanceRef.current && (
            <div className="flex justify-center mt-6 sm:mt-8 gap-2">
              {videos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 sm:h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'w-8 sm:w-10 bg-[#441018]' : 'w-2 sm:w-3 bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

