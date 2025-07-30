'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isGeneralCosmeticOpen, setIsGeneralCosmeticOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Office', href: '/office' },
    { name: 'Dental Staff', href: '/dental-staff' },
    { name: 'Insurance & Billing', href: '/insurance-billing' },
    { name: 'Contact Us', href: '/contact' },
  ]

  const servicesItems = [
    { 
      name: 'General & Cosmetic Dentistry', 
      href: '/general-cosmetic-dentistry',
      hasSubmenu: true,
      subItems: [
        { name: 'Sedation Dentistry', href: '/services/sedation-dentistry' },
        { name: 'Teeth Whitening', href: '/services/teeth-whitening' }
      ]
    },
    { name: 'Dental Implants', href: '/dental-implants' },
    { name: 'All-on-4® Implant Dentures', href: '/all-on-4-implant-dentures' },
    { name: 'Platelet Rich Fibrin Therapy', href: '/services/platelet-rich-fibrin-therapy' },
    { name: 'Orthodontics', href: '/services/orthodontics' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 lg:py-5">
          {/* Logo - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center md:mr-8 lg:mr-12 md:flex-1"
          >
            <Link href="/" className="hover:opacity-80 transition-opacity duration-200">
              <Image
                src="/logo.webp"
                alt="SprekelSpark Dental Logo"
                width={160}
                height={60}
                className="h-12 lg:h-16 w-auto"
              />
            </Link>
          </motion.div>

          {/* Mobile Menu Button - Right Side (Mobile Only) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-3 xl:space-x-4 flex-1 justify-center mr-8 lg:mr-12">
            {/* Home */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Link
                href="/"
                className="text-gray-700 hover:text-[#656565] transition-colors duration-200 font-medium font-heading text-sm xl:text-base whitespace-nowrap px-1"
              >
                Home
              </Link>
            </motion.div>
            
            {/* About Us */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link
                href="/about"
                className="text-gray-700 hover:text-[#656565] transition-colors duration-200 font-medium font-heading text-sm xl:text-base whitespace-nowrap px-1"
              >
                About Us
              </Link>
            </motion.div>
            
            {/* Services Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <Link
                href="/services"
                className="text-gray-700 hover:text-[#656565] transition-colors duration-200 font-medium font-heading text-sm xl:text-base whitespace-nowrap px-1 flex items-center py-2"
              >
                Services
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              
              {isServicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 mt-0 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  {servicesItems.map((item) => (
                    <div key={item.name} className="relative">
                      {item.hasSubmenu ? (
                        <div
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#441018] transition-colors duration-200 font-medium cursor-pointer flex items-center justify-between"
                          onMouseEnter={() => setIsGeneralCosmeticOpen(true)}
                          onMouseLeave={() => setIsGeneralCosmeticOpen(false)}
                        >
                          <Link href={item.href}>{item.name}</Link>
                          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                          {isGeneralCosmeticOpen && (
                            <motion.div
                              initial={{ opacity: 0, x: 10 }}
                              animate={{ opacity: 1, x: 0 }}
                              className="absolute left-full top-0 ml-1 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                            >
                              {item.subItems?.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#441018] transition-colors duration-200 font-medium"
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#441018] transition-colors duration-200 font-medium"
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </motion.div>
              )}
            </motion.div>
            
            {/* Office */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link
                href="/office"
                className="text-gray-700 hover:text-[#656565] transition-colors duration-200 font-medium font-heading text-sm xl:text-base whitespace-nowrap px-1"
              >
                Office
              </Link>
            </motion.div>
            
            {/* Dental Staff */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Link
                href="/dental-staff"
                className="text-gray-700 hover:text-[#656565] transition-colors duration-200 font-medium font-heading text-sm xl:text-base whitespace-nowrap px-1"
              >
                Dental Staff
              </Link>
            </motion.div>
            
            {/* Insurance & Billing */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link
                href="/insurance-billing"
                className="text-gray-700 hover:text-[#656565] transition-colors duration-200 font-medium font-heading text-sm xl:text-base whitespace-nowrap px-1"
              >
                Insurance & Billing
              </Link>
            </motion.div>
            
            {/* Contact Us */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Link
                href="/contact"
                className="text-gray-700 hover:text-[#656565] transition-colors duration-200 font-medium font-heading text-sm xl:text-base whitespace-nowrap px-1"
              >
                Contact Us
              </Link>
            </motion.div>
          </nav>

          {/* Tablet Navigation - Tab View */}
          <nav className="hidden md:flex lg:hidden items-center space-x-1 justify-center flex-1 mr-4">
            {/* Home */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Link
                href="/"
                className="text-gray-700 hover:text-[#656565] transition-colors duration-200 font-medium font-heading text-xs px-1 py-2 rounded-md hover:bg-gray-50 whitespace-nowrap"
              >
                Home
              </Link>
            </motion.div>
            
            {/* About Us */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link
                href="/about"
                className="text-gray-700 hover:text-[#656565] transition-colors duration-200 font-medium font-heading text-xs px-1 py-2 rounded-md hover:bg-gray-50 whitespace-nowrap"
              >
                About Us
              </Link>
            </motion.div>
            
            {/* Services Dropdown for Tablet */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <Link
                href="/services"
                className="text-gray-700 hover:text-[#656565] transition-colors duration-200 font-medium font-heading text-xs px-1 py-2 rounded-md hover:bg-gray-50 whitespace-nowrap flex items-center"
              >
                Services
                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              
              {isServicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 mt-0 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  {servicesItems.map((item) => (
                    <div key={item.name} className="relative">
                      {item.hasSubmenu ? (
                        <div
                          className="block px-3 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#441018] transition-colors duration-200 font-medium text-xs cursor-pointer flex items-center justify-between"
                          onMouseEnter={() => setIsGeneralCosmeticOpen(true)}
                          onMouseLeave={() => setIsGeneralCosmeticOpen(false)}
                        >
                          <Link href={item.href}>{item.name}</Link>
                          <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                          {isGeneralCosmeticOpen && (
                            <motion.div
                              initial={{ opacity: 0, x: 10 }}
                              animate={{ opacity: 1, x: 0 }}
                              className="absolute left-full top-0 ml-1 w-40 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                            >
                              {item.subItems?.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="block px-3 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#441018] transition-colors duration-200 font-medium text-xs"
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          className="block px-3 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#441018] transition-colors duration-200 font-medium text-xs"
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </motion.div>
              )}
            </motion.div>
            
            {/* Office */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link
                href="/office"
                className="text-gray-700 hover:text-[#656565] transition-colors duration-200 font-medium font-heading text-xs px-1 py-2 rounded-md hover:bg-gray-50 whitespace-nowrap"
              >
                Office
              </Link>
            </motion.div>
            
            {/* Dental Staff */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Link
                href="/dental-staff"
                className="text-gray-700 hover:text-[#656565] transition-colors duration-200 font-medium font-heading text-xs px-1 py-2 rounded-md hover:bg-gray-50 whitespace-nowrap"
              >
                Dental Staff
              </Link>
            </motion.div>
            
            {/* Insurance & Billing */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link
                href="/insurance-billing"
                className="text-gray-700 hover:text-[#656565] transition-colors duration-200 font-medium font-heading text-xs px-1 py-2 rounded-md hover:bg-gray-50 whitespace-nowrap"
              >
                Insurance & Billing
              </Link>
            </motion.div>
            
            {/* Contact Us */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Link
                href="/contact"
                className="text-gray-700 hover:text-[#656565] transition-colors duration-200 font-medium font-heading text-xs px-1 py-2 rounded-md hover:bg-gray-50 whitespace-nowrap"
              >
                Contact Us
              </Link>
            </motion.div>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4 ml-auto pl-8 lg:pl-12">
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="px-3 lg:px-4 py-2 text-gray-800 border-2 border-black rounded-lg hover:bg-[#441018] hover:text-white transition-colors duration-200 font-medium font-heading text-sm lg:text-base flex items-center"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (209) 804-2016
            </motion.button>
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="px-3 lg:px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-[#441018] transition-colors duration-200 font-medium font-heading text-sm lg:text-base"
            >
              Contact
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-100"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Home */}
              <Link
                href="/"
                className="block px-3 py-2 text-gray-700 hover:text-[#656565] transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              
              {/* About Us */}
              <Link
                href="/about"
                className="block px-3 py-2 text-gray-700 hover:text-[#656565] transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              
              {/* Office */}
              <Link
                href="/office"
                className="block px-3 py-2 text-gray-700 hover:text-[#656565] transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Office
              </Link>
              
              {/* Dental Staff */}
              <Link
                href="/dental-staff"
                className="block px-3 py-2 text-gray-700 hover:text-[#656565] transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Dental Staff
              </Link>
              
              {/* Insurance & Billing */}
              <Link
                href="/insurance-billing"
                className="block px-3 py-2 text-gray-700 hover:text-[#656565] transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Insurance & Billing
              </Link>
              
              {/* Contact Us */}
              <Link
                href="/contact"
                className="block px-3 py-2 text-gray-700 hover:text-[#656565] transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
              
              {/* Services in Mobile Menu */}
              <div className="border-t border-gray-100 pt-2 mt-2">
                <Link
                  href="/services"
                  className="block px-3 py-2 text-gray-700 font-medium hover:text-[#656565] transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
                {servicesItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-6 py-2 text-gray-600 hover:text-[#656565] transition-colors duration-200 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  )
} 