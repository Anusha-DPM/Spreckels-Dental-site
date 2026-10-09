'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import DentalBenefitsSection from './DentalBenefitsSection'
import TrunkOrTreatSection from './TrunkOrTreatSection'

const AUTO_SLIDE_INTERVAL = 6000

const slides = [
  {
    id: 'benefits',
    component: DentalBenefitsSection,
  },
  {
    id: 'trunk-or-treat',
    component: TrunkOrTreatSection,
  },
]

export default function HomeSectionsSlider() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length)
    }, AUTO_SLIDE_INTERVAL)

    return () => clearInterval(interval)
  }, [])

  return (
    <section
      className="relative w-full overflow-hidden"
      aria-label="Featured dental sections"
    >
      {/* Grid keeps the slides overlapping without a blank gap */}
      <div className="grid w-full overflow-hidden">
        <AnimatePresence initial={false} mode="sync">
          {slides.map((slide, index) => {
            if (index !== activeSlide) return null

            const SlideComponent = slide.component

            return (
              <motion.div
                key={slide.id}
                className="col-start-1 row-start-1 w-full min-w-0"
                initial={{ x: '100%' }}
                animate={{ x: '0%' }}
                exit={{ x: '-100%' }}
                transition={{
                  duration: 0.85,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <SlideComponent />
              </motion.div>
            )
          })}

          {/*
            Keep the outgoing slide mounted during its exit animation.
            AnimatePresence handles the overlap automatically.
          */}
        </AnimatePresence>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2 rounded-full bg-white/90 px-3 py-2 shadow-md backdrop-blur-sm sm:bottom-5">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => setActiveSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={activeSlide === index ? 'true' : undefined}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              activeSlide === index
                ? 'w-7 bg-[#441018]'
                : 'w-2.5 bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </section>
  )
}