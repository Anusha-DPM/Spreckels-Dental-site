'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function TestimonialSection() {
  const testimonials = [
    {
      id: 1,
      author: "Patty Espi",
      position: "Patient",
      quote: "My family and I have been coming here for years, and I love the service. The doctor is attentive and professional, and the front desk staff is always willing to help and schedule appointments based on my schedule. I would recommend this place to my friends and family!."
    },
    {
      id: 2,
      author: "Susan Bower",
      position: "Patient",
      quote: "Everyone at Speckles's Park Dental are so nice! I will only trust my pearly whites with them!!! I got the best front tooth crown ever by Dentist Parikh! No one can tell that I have a crown!!! LOVE, LOVE, LOVE their work!!!"
    },
    {
      id: 3,
      author: "Evette Hess",
      position: "Patient",
      quote: "Spreckels dental is amazing! service is great! everyone is very friendly and made me feel comfortable being here! the front desk lady's are great! very nice and they try their best to work with u as much as possible!."
    },
    {
      id: 4,
      author: "Navi Tiwari",
      position: "Patient",
      quote: "Pain free treatment, I was impressed by the attention to detail and the extra steps taken to ensure my comfort during the procedure. The entire staff was friendly, professional, and made me feel at ease. Best in Area"
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
    <section className="py-8 sm:py-10 lg:py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl p-4 sm:p-6 md:p-8 relative" style={{ backgroundColor: '#441018' }}>
          {/* Centered Testimonial Content */}
          <div className="flex flex-col items-center justify-center text-center min-h-[400px]">
            
            {/* Author Label */}
            <div className="text-sm text-yellow-200 font-medium mb-4 sm:mb-6 transition-opacity duration-300">
              – {currentTestimonial.author}, {currentTestimonial.position}
            </div>
            
            {/* Testimonial Quote */}
            <blockquote className="text-[16px] sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-normal leading-relaxed mb-8 sm:mb-10 transition-opacity duration-300 max-w-4xl text-gray-100">
              "{currentTestimonial.quote}"
            </blockquote>
            
            {/* Centered Navigation Controls */}
            <div className="flex items-center justify-center space-x-4 mt-8">
              {/* Previous Button */}
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-200 flex items-center justify-center"
                aria-label="Previous testimonial"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              {/* Dots Indicator */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentIndex 
                        ? 'bg-white scale-125' 
                        : 'bg-white/40 hover:bg-white/60'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              {/* Next Button */}
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-200 flex items-center justify-center"
                aria-label="Next testimonial"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 