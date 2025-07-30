'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function TestimonialSection() {
  const testimonials = [
    {
      id: 1,
      author: "Sarah Johnson",
      position: "Patient",
      quote: "Dr. Parikh and his team at Spreckels Park Dental are absolutely amazing! They made my dental implant procedure comfortable and stress-free. The results are incredible - I can smile with confidence again."
    },
    {
      id: 2,
      author: "Michael Chen",
      position: "Patient",
      quote: "After years of dental anxiety, I finally found a dentist I trust. Dr. Arora's gentle approach and modern technology made my treatment experience exceptional. Highly recommend!"
    },
    {
      id: 3,
      author: "Emily Rodriguez",
      position: "Patient",
      quote: "The entire team at Spreckels Park Dental is professional and caring. They took the time to explain my treatment options and made sure I was comfortable throughout the process."
    },
    {
      id: 4,
      author: "David Thompson",
      position: "Patient",
      quote: "I've been a patient here for over 5 years and couldn't be happier. The quality of care is outstanding, and they truly care about their patients' comfort and satisfaction."
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
  }

  // Auto-carousel functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 5000) // Change testimonial every 5 seconds

    return () => clearInterval(interval)
  }, [currentIndex])

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-10 sm:py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl p-4 sm:p-6 md:p-8 relative" style={{ backgroundColor: '#441018' }}>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 sm:gap-8 md:gap-10 items-center">
            
            {/* Left Column - Testimonial Content (3 columns - 60%) */}
            <div className="text-white md:col-span-3">
              {/* Author Label */}
              <div className="text-sm text-red-100 font-medium mb-4 sm:mb-6 transition-opacity duration-300">
                – {currentTestimonial.author}, {currentTestimonial.position}
              </div>
              
              {/* Testimonial Quote */}
              <blockquote className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-normal leading-relaxed mb-6 sm:mb-8 transition-opacity duration-300">
                "{currentTestimonial.quote}"
              </blockquote>
            </div>
            
            {/* Right Column - Fixed Image (2 columns - 40%) */}
            <div className="flex justify-center md:col-span-2">
              <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden border-2 border-white/20 p-2">
                <Image
                  src="/financial-consulting-testimonial.webp"
                  alt="Happy dental patient"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
          
          {/* Fixed Navigation Controls - Positioned at bottom left */}
          <div className="flex items-center space-x-4 mt-8">
            {/* Left Arrow */}
            <button 
              onClick={prevTestimonial}
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center"
            >
              <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {/* Pagination Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-white' : 'bg-red-300'
                  }`}
                />
              ))}
            </div>
            
            {/* Right Arrow */}
            <button 
              onClick={nextTestimonial}
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center"
            >
              <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
} 