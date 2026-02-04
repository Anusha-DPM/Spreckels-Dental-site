'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isGeneralCosmeticOpen, setIsGeneralCosmeticOpen] = useState(false)
  const [isAboutOpen, setIsAboutOpen] = useState(false)
  const [isMoreOpen, setIsMoreOpen] = useState(false)
  const [isPatientEducationOpen, setIsPatientEducationOpen] = useState(false)
  const [isDentalImplantsOpen, setIsDentalImplantsOpen] = useState(false)
  const [expandedItems, setExpandedItems] = useState<string[]>([])

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact Us', href: '/contact' },
  ]

  const aboutItems = [
    { name: 'Dental Staff', href: '/dental-staff' },
    { name: 'Office', href: '/office' },
    { name: 'Smile Gallery', href: '/smile-gallery' },
    { name: 'Video Testimonials', href: '/video-testimonials' },
  ]

  const servicesItems = [
    { name: 'General & Cosmetic Dentistry', href: '/general-cosmetic-dentistry' },
    { name: 'Sedation Dentistry', href: '/services/sedation-dentistry' },
    {
      name: 'Dental Implants',
      href: '/dental-implants',
      hasSubmenu: true,
      subItems: [
        { name: 'Dental Implants in Manteca', href: '/dental-implants-manteca-ca' }
      ]
    },
    { name: 'All-on-4® Implant Dentures', href: '/all-on-4-implant-dentures' },
    { name: 'Platelet Rich Fibrin Therapy', href: '/services/platelet-rich-fibrin-therapy' },
    { name: 'Orthodontics', href: '/services/orthodontics' },
  ]

  const moreItems = [
    {
      name: 'Patient Education',
      href: '/patient-education',
      hasSubmenu: true,
      subItems: [
        { name: 'Educational Videos', href: '/patient-education/educational-videos' },
        { name: 'Cosmetic & General Dentistry', href: '/patient-education/cosmetic-general-dentistry' },
        { name: 'Emergency Care', href: '/patient-education/emergency-care' },
        { name: 'Endodontics', href: '/patient-education/endodontics' },
        { name: 'Implant Dentistry', href: '/patient-education/implant-dentistry' },
        { name: 'Oral Health', href: '/patient-education/oral-health' },
        { name: 'Oral Hygiene', href: '/patient-education/oral-hygiene' },
        { name: 'Oral Surgery', href: '/patient-education/oral-surgery' },
        { name: 'Orthodontics', href: '/patient-education/orthodontics' },
        { name: 'Pediatric Dentistry', href: '/patient-education/pediatric-dentistry' },
        { name: 'Periodontal Therapy', href: '/patient-education/periodontal-therapy' },
        { name: 'Technology', href: '/patient-education/technology' }
      ]
    },
    { name: 'Insurance & Billing', href: '/insurance-billing' }
  ]

  const toggleDropdown = (itemName: string) => {
    setExpandedItems(prev => {
      // Define top-level dropdowns that are mutually exclusive
      const topLevelDropdowns = ['About Us', 'Services', 'Resources']

      // If the clicked item is already open, close it
      if (prev.includes(itemName)) {
        // If closing Resources, also close Patient Education (nested item)
        if (itemName === 'Resources') {
          return prev.filter(item => item !== itemName && item !== 'Patient Education')
        }
        // If closing any other item, just remove it
        return prev.filter(item => item !== itemName)
      }

      // If clicking a top-level dropdown, close all other top-level dropdowns
      if (topLevelDropdowns.includes(itemName)) {
        // Close all top-level dropdowns, then open the clicked one
        // Patient Education should close when opening About Us or Services
        return [itemName]
      }

      // If clicking Patient Education (nested under Resources), close other top-levels but keep Resources
      if (itemName === 'Patient Education') {
        // Remove all top-level dropdowns except Resources, then add Patient Education
        // Resources must be open for Patient Education to be open
        return ['Resources', itemName]
      }

      // Default: just add the item
      return [...prev, itemName]
    })
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    setExpandedItems([])
  }

  const handleKeyDown = (event: React.KeyboardEvent, action: () => void) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      action()
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] bg-white border-b border-gray-100">
      <div className="w-full px-4 sm:px-6 lg:px-8">
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
                alt="Spreckels Park Dental Logo"
                width={160}
                height={60}
                className="h-12 lg:h-16 w-auto"
              />
            </Link>
          </motion.div>

          {/* Mobile Menu Button - Right Side (Mobile Only) */}
          <div className="md:hidden relative z-[101]">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 p-2 -mr-2"
              aria-label="Toggle mobile menu"
              aria-expanded={isMenuOpen}
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

            {/* About Us Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
              onMouseEnter={() => setIsAboutOpen(true)}
              onMouseLeave={() => setIsAboutOpen(false)}
            >
              <Link
                href="/about"
                className="text-gray-700 hover:text-[#656565] transition-colors duration-200 font-medium font-heading text-sm xl:text-base whitespace-nowrap px-1 flex items-center py-2"
              >
                About Us
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>

              {isAboutOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 mt-0 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                  onMouseEnter={() => setIsAboutOpen(true)}
                  onMouseLeave={() => setIsAboutOpen(false)}
                >
                  {aboutItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#441018] transition-colors duration-200 font-medium"
                    >
                      {item.name}
                    </Link>
                  ))}
                </motion.div>
              )}
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
                      {/* @ts-ignore - Adding hasSubmenu property gracefully */}
                      {item.hasSubmenu ? (
                        <div
                          className="relative"
                          onMouseEnter={() => setIsDentalImplantsOpen(true)}
                          onMouseLeave={() => setIsDentalImplantsOpen(false)}
                        >
                          <div className="flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#441018] transition-colors duration-200 font-medium">
                            <Link href={item.href} className="flex-1">
                              {item.name}
                            </Link>
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                          {/* @ts-ignore */}
                          {isDentalImplantsOpen && item.subItems && (
                            <motion.div
                              initial={{ opacity: 0, x: 10 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: 10 }}
                              className="absolute left-full top-0 ml-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                              onMouseEnter={() => setIsDentalImplantsOpen(true)}
                              onMouseLeave={() => setIsDentalImplantsOpen(false)}
                            >
                              {/* @ts-ignore */}
                              {item.subItems.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#441018] transition-colors duration-200 font-medium text-sm"
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



            {/* Blog */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link
                href="/blog"
                className="text-gray-700 hover:text-[#656565] transition-colors duration-200 font-medium font-heading text-sm xl:text-base whitespace-nowrap px-1"
              >
                Blog
              </Link>
            </motion.div>

            {/* Resources Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="relative"
              onMouseEnter={() => setIsMoreOpen(true)}
              onMouseLeave={() => setIsMoreOpen(false)}
            >
              <Link
                href="#"
                className="text-gray-700 hover:text-[#656565] transition-colors duration-200 font-medium font-heading text-sm xl:text-base whitespace-nowrap px-1 flex items-center py-2"
              >
                Resources
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>

              {isMoreOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 mt-0 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                  onMouseEnter={() => setIsMoreOpen(true)}
                  onMouseLeave={() => setIsMoreOpen(false)}
                >
                  {moreItems.map((item) => (
                    <div key={item.name} className="relative">
                      {item.hasSubmenu ? (
                        <div
                          className="relative"
                          onMouseEnter={() => setIsPatientEducationOpen(true)}
                          onMouseLeave={() => setIsPatientEducationOpen(false)}
                        >
                          <div className="flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#441018] transition-colors duration-200 font-medium">
                            <Link href={item.href} className="flex-1">
                              {item.name}
                            </Link>
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                          {isPatientEducationOpen && item.subItems && (
                            <motion.div
                              initial={{ opacity: 0, x: 10 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: 10 }}
                              className="absolute left-full top-0 ml-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                              onMouseEnter={() => setIsPatientEducationOpen(true)}
                              onMouseLeave={() => setIsPatientEducationOpen(false)}
                            >
                              {item.subItems.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#441018] transition-colors duration-200 font-medium text-sm"
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

            {/* About Us Dropdown for Tablet */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
              onMouseEnter={() => setIsAboutOpen(true)}
              onMouseLeave={() => setIsAboutOpen(false)}
            >
              <Link
                href="/about"
                className="text-gray-700 hover:text-[#656565] transition-colors duration-200 font-medium font-heading text-xs px-1 py-2 rounded-md hover:bg-gray-50 whitespace-nowrap flex items-center"
              >
                About Us
                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>

              {isAboutOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 mt-0 w-40 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                  onMouseEnter={() => setIsAboutOpen(true)}
                  onMouseLeave={() => setIsAboutOpen(false)}
                >
                  {aboutItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#441018] transition-colors duration-200 font-medium text-xs"
                    >
                      {item.name}
                    </Link>
                  ))}
                </motion.div>
              )}
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
                      {/* @ts-ignore */}
                      {item.hasSubmenu ? (
                        <div
                          className="relative"
                          onMouseEnter={() => setIsDentalImplantsOpen(true)}
                          onMouseLeave={() => setIsDentalImplantsOpen(false)}
                        >
                          <div className="flex items-center justify-between px-3 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#441018] transition-colors duration-200 font-medium text-xs">
                            <Link href={item.href} className="flex-1">
                              {item.name}
                            </Link>
                            <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                          {/* @ts-ignore */}
                          {isDentalImplantsOpen && item.subItems && (
                            <motion.div
                              initial={{ opacity: 0, x: 10 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: 10 }}
                              className="absolute left-full top-0 ml-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                              onMouseEnter={() => setIsDentalImplantsOpen(true)}
                              onMouseLeave={() => setIsDentalImplantsOpen(false)}
                            >
                              {/* @ts-ignore */}
                              {item.subItems.map((subItem) => (
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



            {/* Blog */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link
                href="/blog"
                className="text-gray-700 hover:text-[#656565] transition-colors duration-200 font-medium font-heading text-xs px-1 py-2 rounded-md hover:bg-gray-50 whitespace-nowrap"
              >
                Blog
              </Link>
            </motion.div>

            {/* Resources Dropdown for Tablet */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="relative"
              onMouseEnter={() => setIsMoreOpen(true)}
              onMouseLeave={() => setIsMoreOpen(false)}
            >
              <Link
                href="#"
                className="text-gray-700 hover:text-[#656565] transition-colors duration-200 font-medium font-heading text-xs px-1 py-2 rounded-md hover:bg-gray-50 whitespace-nowrap flex items-center"
              >
                Resources
                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>

              {isMoreOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 mt-0 w-40 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                  onMouseEnter={() => setIsMoreOpen(true)}
                  onMouseLeave={() => setIsMoreOpen(false)}
                >
                  {moreItems.map((item) => (
                    <div key={item.name} className="relative">
                      {item.hasSubmenu ? (
                        <div
                          className="relative block px-3 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#441018] transition-colors duration-200 font-medium text-xs cursor-pointer"
                          onMouseEnter={() => setIsPatientEducationOpen(true)}
                          onMouseLeave={() => setIsPatientEducationOpen(false)}
                        >
                          <div className="flex items-center justify-between">
                            <span>{item.name}</span>
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                          {isPatientEducationOpen && item.subItems && (
                            <motion.div
                              initial={{ opacity: 0, x: 10 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: 10 }}
                              className="absolute left-full top-0 ml-1 w-40 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                              onMouseEnter={() => setIsPatientEducationOpen(true)}
                              onMouseLeave={() => setIsPatientEducationOpen(false)}
                            >
                              {item.subItems.map((subItem) => (
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

            {/* Contact Us */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
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
            <motion.a
              href="tel:+12098251030"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="px-3 lg:px-4 py-2 text-gray-800 border-2 border-black rounded-lg hover:bg-[#441018] hover:text-white transition-colors duration-200 font-medium font-heading text-sm lg:text-base flex items-center cursor-pointer"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (209) 825-1030
            </motion.a>
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="px-3 lg:px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-[#441018] transition-colors duration-200 font-medium font-heading text-sm lg:text-base"
            >
              <Link href="https://spreckels-dental-site.vercel.app/appointment-request" className="text-white hover:text-white">
                Appointment Request
              </Link>
            </motion.button>
          </div>
        </div>

        {/* Mobile Side Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black bg-opacity-50 z-[105] md:hidden"
                onClick={closeMenu}
              />

              {/* Side Menu */}
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
                className="fixed top-0 left-0 w-80 max-w-[85vw] h-full bg-[#441018] z-[110] md:hidden shadow-2xl"
              >
                {/* Close Button */}
                <div className="flex justify-end p-4">
                  <button
                    onClick={closeMenu}
                    className="text-white hover:text-gray-300 transition-colors duration-200"
                    aria-label="Close mobile menu"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Menu Items */}
                <nav className="px-4 pb-6" role="navigation" aria-label="Mobile navigation">
                  <ul className="space-y-1">
                    {/* Home */}
                    <li>
                      <Link
                        href="/"
                        className="block px-3 py-4 text-white hover:text-gray-200 transition-colors duration-200 font-semibold text-base tracking-wide"
                        onClick={closeMenu}
                      >
                        HOME
                      </Link>
                    </li>

                    {/* About Us */}
                    <li>
                      <div className="relative">
                        <div className="w-full flex items-center justify-between">
                          <Link
                            href="/about"
                            className="flex-1 px-3 py-4 text-white hover:text-gray-200 transition-colors duration-200 font-semibold text-base tracking-wide"
                            onClick={closeMenu}
                          >
                            ABOUT US
                          </Link>
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              toggleDropdown('About Us')
                            }}
                            onKeyDown={(e) => handleKeyDown(e, () => toggleDropdown('About Us'))}
                            className="px-3 py-4 text-white hover:text-gray-200 transition-colors duration-200"
                            aria-expanded={expandedItems.includes('About Us')}
                            aria-controls="about-dropdown"
                            aria-label="Toggle About Us submenu"
                          >
                            <motion.svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              animate={{ rotate: expandedItems.includes('About Us') ? 90 : 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </motion.svg>
                          </button>
                        </div>
                        <AnimatePresence>
                          {expandedItems.includes('About Us') && (
                            <motion.ul
                              id="about-dropdown"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              {aboutItems.map((item) => (
                                <li key={item.name}>
                                  <Link
                                    href={item.href}
                                    className="block px-6 py-2 text-gray-300 hover:text-white transition-colors duration-200 font-medium text-sm"
                                    onClick={closeMenu}
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </div>
                    </li>

                    {/* Services */}
                    <li>
                      <div className="relative">
                        <div className="w-full flex items-center justify-between">
                          <Link
                            href="/services"
                            className="flex-1 px-3 py-4 text-white hover:text-gray-200 transition-colors duration-200 font-semibold text-base tracking-wide"
                            onClick={closeMenu}
                          >
                            SERVICES
                          </Link>
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              toggleDropdown('Services')
                            }}
                            onKeyDown={(e) => handleKeyDown(e, () => toggleDropdown('Services'))}
                            className="px-3 py-4 text-white hover:text-gray-200 transition-colors duration-200"
                            aria-expanded={expandedItems.includes('Services')}
                            aria-controls="services-dropdown"
                            aria-label="Toggle Services submenu"
                          >
                            <motion.svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              animate={{ rotate: expandedItems.includes('Services') ? 90 : 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </motion.svg>
                          </button>
                        </div>
                        <AnimatePresence>
                          {expandedItems.includes('Services') && (
                            <motion.ul
                              id="services-dropdown"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              {servicesItems.map((item) => (
                                <li key={item.name}>
                                  {/* @ts-ignore */}
                                  {item.hasSubmenu ? (
                                    <div className="relative">
                                      <div className="w-full flex items-center justify-between">
                                        <Link
                                          href={item.href}
                                          className="flex-1 block px-6 py-2 text-gray-300 hover:text-white transition-colors duration-200 font-medium text-sm"
                                          onClick={closeMenu}
                                        >
                                          {item.name}
                                        </Link>
                                        <button
                                          onClick={(e) => {
                                            e.stopPropagation()
                                            // Handling inner dropdown for mobile - simplified for now by just toggling
                                            // Since the state is global, using isDentalImplantsOpen might clash if used improperly in mobile context
                                            // But for now, we'll assume simple toggle logic or just make it expanded.
                                            setIsDentalImplantsOpen(!isDentalImplantsOpen)
                                          }}
                                          className="px-2 py-2 text-gray-300 hover:text-white"
                                        >
                                          <motion.svg
                                            className="w-4 h-4"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            animate={{ rotate: isDentalImplantsOpen ? 180 : 0 }} // Simplified rotation
                                          >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                          </motion.svg>
                                        </button>
                                      </div>

                                      <AnimatePresence>
                                        {/* @ts-ignore */}
                                        {isDentalImplantsOpen && item.subItems && (
                                          <motion.ul
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="bg-[#3a0d14] overflow-hidden" // Slightly darker background for nested
                                          >
                                            {/* @ts-ignore */}
                                            {item.subItems.map((subItem) => (
                                              <li key={subItem.name}>
                                                <Link
                                                  href={subItem.href}
                                                  className="block px-10 py-2 text-gray-400 hover:text-white transition-colors duration-200 font-medium text-sm"
                                                  onClick={closeMenu}
                                                >
                                                  {subItem.name}
                                                </Link>
                                              </li>
                                            ))}
                                          </motion.ul>
                                        )}
                                      </AnimatePresence>
                                    </div>
                                  ) : (
                                    <Link
                                      href={item.href}
                                      className="block px-6 py-2 text-gray-300 hover:text-white transition-colors duration-200 font-medium text-sm"
                                      onClick={closeMenu}
                                    >
                                      {item.name}
                                    </Link>
                                  )}
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </div>
                    </li>

                    {/* Blog */}
                    <li>
                      <Link
                        href="/blog"
                        className="block px-3 py-4 text-white hover:text-gray-200 transition-colors duration-200 font-semibold text-base tracking-wide"
                        onClick={closeMenu}
                      >
                        BLOG
                      </Link>
                    </li>

                    {/* Contact Us */}
                    <li>
                      <Link
                        href="/contact"
                        className="block px-3 py-4 text-white hover:text-gray-200 transition-colors duration-200 font-semibold text-base tracking-wide"
                        onClick={closeMenu}
                      >
                        CONTACT US
                      </Link>
                    </li>

                    {/* Resources */}
                    <li>
                      <div className="relative">
                        <button
                          onClick={() => toggleDropdown('Resources')}
                          onKeyDown={(e) => handleKeyDown(e, () => toggleDropdown('Resources'))}
                          className="w-full flex items-center justify-between px-3 py-4 text-white hover:text-gray-200 transition-colors duration-200 font-semibold text-base tracking-wide"
                          aria-expanded={expandedItems.includes('Resources')}
                          aria-controls="resources-dropdown"
                        >
                          RESOURCES
                          <motion.svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            animate={{ rotate: expandedItems.includes('Resources') ? 90 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </motion.svg>
                        </button>
                        <AnimatePresence>
                          {expandedItems.includes('Resources') && (
                            <motion.ul
                              id="resources-dropdown"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              {/* Patient Education */}
                              <li>
                                <div className="relative">
                                  <div className="w-full flex items-center justify-between">
                                    <Link
                                      href="/patient-education"
                                      className="flex-1 px-6 py-2 text-gray-300 hover:text-white transition-colors duration-200 font-medium text-sm"
                                      onClick={closeMenu}
                                    >
                                      Patient Education
                                    </Link>
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation()
                                        toggleDropdown('Patient Education')
                                      }}
                                      onKeyDown={(e) => handleKeyDown(e, () => toggleDropdown('Patient Education'))}
                                      className="px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200"
                                      aria-expanded={expandedItems.includes('Patient Education')}
                                      aria-controls="patient-education-dropdown"
                                      aria-label="Toggle Patient Education submenu"
                                    >
                                      <motion.svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        animate={{ rotate: expandedItems.includes('Patient Education') ? 90 : 0 }}
                                        transition={{ duration: 0.2 }}
                                      >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                      </motion.svg>
                                    </button>
                                  </div>
                                  <AnimatePresence>
                                    {expandedItems.includes('Patient Education') && (
                                      <motion.ul
                                        id="patient-education-dropdown"
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="overflow-hidden"
                                      >
                                        {moreItems[0]?.subItems?.map((subItem) => (
                                          <li key={subItem.name}>
                                            <Link
                                              href={subItem.href}
                                              className="block px-9 py-2 text-gray-400 hover:text-white transition-colors duration-200 font-medium text-xs"
                                              onClick={closeMenu}
                                            >
                                              {subItem.name}
                                            </Link>
                                          </li>
                                        ))}
                                      </motion.ul>
                                    )}
                                  </AnimatePresence>
                                </div>
                              </li>
                              {/* Insurance & Billing */}
                              <li>
                                <Link
                                  href="/insurance-billing"
                                  className="block px-6 py-2 text-gray-300 hover:text-white transition-colors duration-200 font-medium text-sm"
                                  onClick={closeMenu}
                                >
                                  Insurance & Billing
                                </Link>
                              </li>
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </div>
                    </li>
                  </ul>
                </nav>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
} 