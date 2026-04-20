'use client'

import { useKeenSlider } from 'keen-slider/react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import 'keen-slider/keen-slider.min.css'

export default function VideoTestimonialsPageContent() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const videos = [
    {
      src: '/video 1.MOV',
      title: 'Patient Testimonial',
      description: 'Watch this patient share their experience with our dental care'
    },
    {
      src: '/video 2.MOV',
      title: 'Patient Testimonial',
      description: 'Learn about this patient\'s journey to a better smile'
    },
    {
      src: '/video 2.MOV',
      title: 'Patient Testimonial',
      description: 'Discover how we helped improve this patient\'s oral health'
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

  const goToSlide = (index: number) => {
    instanceRef.current?.moveToIdx(index)
  }

  const reviews = [
    {
      id: 1,
      author: 'Allison P.',
      quote: 'Great dentist office! I\'ve been coming to Spreckels Park Dental for a couple years now. Great staff and Sondra office manager will work with you on payments. Highly recommend'
    },
    {
      id: 2,
      author: 'Arthur S.',
      quote: 'This has been the best dentist ive been at, very fast & efficient. The workers are really nice, honest & straight forward. Definitely will recommend this to my family & friends!!'
    },
    {
      id: 3,
      author: 'Gerardo A.',
      quote: 'Thank you for my teeth cleaning i will see y\'all next appointment have to get my teeth right and looking good'
    },
    {
      id: 4,
      author: 'Bryan M.',
      quote: 'Great Dentist at this location , staff is very friendly and both the front desk and the dental assistants are very knowledgeable with their work. . Recently moved here from San Jose and I believe this is one of the best dentist in the area :)'
    },
    {
      id: 5,
      author: 'Phillip S.',
      quote: 'Been coming here for 3 years, very professional and make you feel at home. Front desk was very friendly especially jasmine.'
    }
  ]

  return (
    <>
      {/* Videos Section */}
      <section className="py-8 sm:py-10 lg:py-12 xl:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <h2 className="text-[27px] sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal text-gray-900 mb-4 lg:mb-6 font-heading leading-tight">
              Patient Video Testimonials
            </h2>
            <p className="text-[16px] sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed" style={{ color: '#656565' }}>
              Watch real patients share their stories and experiences with our dental care services.
            </p>
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
                    className="flex flex-col items-center px-2"
                  >
                    <div className="relative w-full rounded-xl overflow-hidden shadow-lg bg-black hover:shadow-2xl transition-shadow duration-300 mb-4">
                      <video
                        controls
                        className="w-full h-auto max-h-[400px] sm:max-h-[450px] lg:max-h-[500px]"
                        preload="metadata"
                      >
                        <source src={video.src} type="video/quicktime" />
                        <source src={video.src} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                    <div className="text-center">
                      <h3 className="text-[22px] sm:text-lg font-semibold text-gray-900 mb-2 font-heading">
                        {video.title}
                      </h3>
                      <p className="text-[16px] text-gray-600" style={{ color: '#656565' }}>
                        {video.description}
                      </p>
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

      {/* Reviews Section */}
      <section className="py-8 sm:py-10 lg:py-12 xl:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <h2 className="text-[27px] sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal text-gray-900 mb-4 lg:mb-6 font-heading leading-tight">
              Patient Reviews
            </h2>
            <p className="text-[16px] sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed" style={{ color: '#656565' }}>
              Read what our patients have to say about their experiences at Spreckels Park Dental.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <svg className="w-5 h-5 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="w-5 h-5 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="w-5 h-5 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="w-5 h-5 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <blockquote className="text-gray-700 mb-4 leading-relaxed" style={{ color: '#656565', fontSize: '16px' }}>
                  "{review.quote}"
                </blockquote>
                <div className="text-gray-900 font-semibold font-heading">
                  – {review.author}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

