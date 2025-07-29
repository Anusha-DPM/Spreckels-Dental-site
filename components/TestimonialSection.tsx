'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function TestimonialSection() {
  const testimonials = [
    {
      id: 1,
      author: "Jackma Kalin",
      position: "CEO of Penta",
      quote: "Outgrid's transformative services revolutionized our financial strategy. Their personalized approach and expert guidance instilled newfound confidence, empowering us to make informed decisions and shape a secure financial future."
    },
    {
      id: 2,
      author: "Sarah Johnson",
      position: "CFO of TechCorp",
      quote: "Working with Outgrid has been a game-changer for our company's financial planning. Their expertise and dedication to our success have exceeded all expectations."
    },
    {
      id: 3,
      author: "Michael Chen",
      position: "Director of Finance",
      quote: "The level of personalized service and strategic insight that Outgrid provides is unmatched. They've helped us navigate complex financial decisions with confidence."
    },
    {
      id: 4,
      author: "Emily Rodriguez",
      position: "VP of Operations",
      quote: "Outgrid's comprehensive approach to financial management has transformed how we think about our business strategy. Their guidance has been invaluable."
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
        <div className="bg-indigo-400 rounded-2xl p-4 sm:p-6 md:p-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 sm:gap-8 md:gap-10 items-center">
            
            {/* Left Column - Testimonial Content (3 columns - 60%) */}
            <div className="text-white md:col-span-3">
              {/* Author Label */}
              <div className="text-sm text-indigo-100 font-medium mb-4 sm:mb-6 transition-opacity duration-300">
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
                  alt="Testimonial"
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
                    index === currentIndex ? 'bg-white' : 'bg-indigo-300'
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