'use client'

import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import 'keen-slider/keen-slider.min.css'

export default function LogoCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)

  const logos = [
    { name: 'Network', image: '/Financial-Consulting-Logo-1.webp' },
    { name: 'Penta', image: '/Financial-Consulting-Logo-2.webp' },
    { name: 'NATUSKA', image: '/Financial-Consulting-Logo-3.webp' },
    { name: 'EXEO', image: '/Financial-Consulting-Logo-4.webp' },
    { name: 'un', image: '/Financial-Consulting-Logo-5.webp' },
    { name: 'SAONA', image: '/Financial-Consulting-Logo-9.webp' }
  ]

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: true,
    mode: 'free-snap',
    slides: {
      perView: 6,
      spacing: 30,
    },
    breakpoints: {
      '(max-width: 768px)': {
        slides: {
          perView: 3,
          spacing: 20,
        },
      },
      '(max-width: 480px)': {
        slides: {
          perView: 2,
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

  // Autoplay functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (instanceRef.current) {
        instanceRef.current.next()
      }
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(interval)
  }, [instanceRef])

  return (
    <div className="w-full">
      <div className="relative">
        {/* Carousel Container */}
        <div ref={sliderRef} className="keen-slider">
          {logos.map((logo, index) => (
            <div key={index} className="keen-slider__slide">
              <div className="flex items-center justify-center h-28 px-6">
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={logo.image}
                    alt={logo.name}
                    width={180}
                    height={90}
                    className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300 max-w-full max-h-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 