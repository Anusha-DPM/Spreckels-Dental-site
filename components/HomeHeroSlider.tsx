'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import HeroSection from './HeroSection';
import HomeAllOnXDentalImplant from './HomeAllOnXDentalImplant';

const slides = [
  {
    id: 'all-on-x',
    component: HomeAllOnXDentalImplant,
    label: 'All-on-X Dental Implants',
  },
  {
    id: 'hero',
    component: HeroSection,
    label: 'Home',
  },
];

export default function HomeHeroSlider() {
  const [activeSlide, setActiveSlide] = useState(0);

  // Navigate to the next slide
  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % slides.length);
  };

  // Navigate to the previous slide
  const previousSlide = () => {
    setActiveSlide(
      (current) => (current - 1 + slides.length) % slides.length
    );
  };

  const CurrentSlide = slides[activeSlide].component;

  return (
    <div
      className="relative w-full overflow-hidden bg-[#441018]"
      aria-roledescription="carousel"
      aria-label="Dental services"
    >
      <AnimatePresence initial={false} mode="sync">
        <motion.div
          key={slides[activeSlide].id}
          className="relative w-full min-w-0"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '-100%' }}
          transition={{
            duration: 0.65,
            ease: 'easeInOut',
          }}
          style={{
            gridArea: '1 / 1',
          }}
          aria-roledescription="slide"
          aria-label={`${activeSlide + 1} of ${slides.length}: ${slides[activeSlide].label}`}
        >
          <CurrentSlide />
        </motion.div>
      </AnimatePresence>

      {/* Slider Controls */}
      <div className="absolute bottom-5 left-0 right-0 z-30 flex items-center justify-center gap-4 sm:bottom-7">

        {/* Previous Button */}
        <button
          type="button"
          onClick={previousSlide}
          aria-label="Previous slide"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/70 bg-[#441018]/90 text-white shadow-md transition-colors hover:bg-white hover:text-[#441018] sm:h-11 sm:w-11"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="block shrink-0"
            aria-hidden="true"
          >
            <path d="M19 12H5" />
            <path d="m12 19-7-7 7-7" />
          </svg>
        </button>

        {/* Navigation Dots */}
        <div
          className="flex items-center gap-2"
          aria-label="Choose slide"
        >
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => setActiveSlide(index)}
              aria-label={`Go to ${slide.label} slide`}
              aria-current={activeSlide === index ? 'true' : undefined}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeSlide === index
                  ? 'w-8 bg-white'
                  : 'w-2.5 bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/70 bg-[#441018]/90 text-white shadow-md transition-colors hover:bg-white hover:text-[#441018] sm:h-11 sm:w-11"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="block shrink-0"
            aria-hidden="true"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </button>

      </div>
    </div>
  );
}