'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import { useEffect, useState } from 'react'

export default function Footer() {
  const [scriptLoaded, setScriptLoaded] = useState(false)

  useEffect(() => {
    // Check if script is already loaded
    if (document.querySelector('script[src="https://link.digitalpresencematters.com/js/form_embed.js"]')) {
      setScriptLoaded(true)
    }
  }, [])

  return (
    <>
      <Script
        src="https://link.digitalpresencematters.com/js/form_embed.js"
        strategy="lazyOnload"
        onLoad={() => setScriptLoaded(true)}
      />
      <footer style={{ backgroundColor: '#111827' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          {/* Main Content - Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-8">
            
            {/* Left Column - Contact Us */}
            <div className="text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
                Contact Us
              </h2>
              
              <div className="space-y-6">
                {/* Address */}
                <div>
                  <div className="text-base font-semibold text-white mb-2">Address</div>
                  <div className="text-base text-white">
                    626 E. Yosemite Ave., Manteca, CA
                  </div>
                </div>
                
                {/* Phone */}
                <div>
                  <div className="text-base font-semibold text-white mb-2">Phone</div>
                  <a href="tel:+12098251030" className="text-base text-white hover:text-gray-300 transition-colors">
                    (209) 825-1030
                  </a>
                </div>
                
                {/* Office Hours */}
                <div>
                  <div className="text-base font-semibold text-white mb-3">Office Hours</div>
                  <ul className="space-y-2">
                    <li className="flex justify-between items-center text-base">
                      <span className="font-semibold text-white">Monday</span>
                      <span className="text-white">9:30 am - 6:00 pm</span>
                    </li>
                    <li className="flex justify-between items-center text-base">
                      <span className="font-semibold text-white">Tuesday</span>
                      <span className="text-white">9:30 am - 5:00 pm</span>
                    </li>
                    <li className="flex justify-between items-center text-base">
                      <span className="font-semibold text-white">Wednesday</span>
                      <span className="text-white">9:30 am - 6:00 pm</span>
                    </li>
                    <li className="flex justify-between items-center text-base">
                      <span className="font-semibold text-white">Thursday</span>
                      <span className="text-white">9:30 am - 6:00 pm</span>
                    </li>
                    <li className="flex justify-between items-center text-base">
                      <span className="font-semibold text-white">Friday</span>
                      <span className="text-white">9:30 am - 6:00 pm</span>
                    </li>
                    <li className="flex justify-between items-center text-base">
                      <span className="font-semibold text-white">Saturday</span>
                      <span className="text-white">Closed</span>
                    </li>
                    <li className="flex justify-between items-center text-base">
                      <span className="font-semibold text-white">Sunday</span>
                      <span className="text-white">Closed</span>
                    </li>
                  </ul>
                </div>
                
                {/* Follow Us */}
                <div>
                  <div className="text-base font-semibold text-white mb-3">FOLLOW US</div>
                  <div className="flex space-x-4">
                    <a href="https://www.facebook.com/spreckelsparkdental" className="text-white hover:text-gray-300 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                    <a href="https://www.instagram.com/spreckelsparkdental/" className="text-white hover:text-gray-300 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Request An Appointment Form */}
            <div className="text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
                Request An Appointment
              </h2>
              
              <div className="w-full rounded-lg" style={{ height: '700px', minHeight: '700px' }}>
                <iframe
                  src="https://link.digitalpresencematters.com/widget/form/PPE5tyRGLABGSWtnGQQf"
                  style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px', display: 'block' }}
                  id="inline-PPE5tyRGLABGSWtnGQQf"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="website footer form "
                  data-height="700"
                  data-layout-iframe-id="inline-PPE5tyRGLABGSWtnGQQf"
                  data-form-id="PPE5tyRGLABGSWtnGQQf"
                  title="website footer form "
                  allow="forms"
                  loading="lazy"
                  scrolling="yes"
                />
              </div>
            </div>
          </div>
        
        {/* Bottom Section - Copyright */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <p className="text-white text-sm text-center">
            Copyright: © 2026 Spreckels Park Dental. All Rights Reserved. |{' '}
            <Link href="/privacy-policy" className="text-white hover:text-gray-300 transition-colors">Privacy Policy</Link>
            {' | '}
            <Link href="/disclaimer" className="text-white hover:text-gray-300 transition-colors">Disclaimer</Link>
            {' | '}
            <Link href="/site-map" className="text-white hover:text-gray-300 transition-colors">Site Map</Link>
          </p>
        </div>
        </div>
      </footer>
    </>
  )
}
