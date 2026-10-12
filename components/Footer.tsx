'use client'

import Image from 'next/image'
import Link from 'next/link'

const servicesLinks = [
  { name: 'General & Cosmetic Dentistry', href: '/general-cosmetic-dentistry' },
  { name: 'Sedation Dentistry', href: '/services/sedation-dentistry' },
  { name: 'Dental Implants', href: '/dental-implants' },
  { name: 'All-on-4® Implant Dentures', href: '/all-on-4-implant-dentures' },
  { name: 'Platelet Rich Fibrin Therapy', href: '/services/platelet-rich-fibrin-therapy' },
  { name: 'Orthodontics', href: '/services/orthodontics' },
]

const quickLinks = [
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'Disclaimer', href: '/disclaimer' },
  { name: 'Site Map', href: '/sitemap.xml' },
]

function FooterLinkList({
  title,
  links,
}: {
  title: string
  links: { name: string; href: string }[]
}) {
  return (
    <div>
      <h3 className="text-base sm:text-lg font-semibold text-white mb-4 font-heading">{title}</h3>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors duration-200"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#111827' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logo.webp"
                alt="Spreckels Park Dental"
                width={180}
                height={60}
                className="h-12 w-auto sm:h-14 brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-gray-400 mb-5 leading-relaxed max-w-xs">
              Comprehensive dental care for the whole family in Manteca, CA.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/spreckelsparkdental"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#441018] transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/spreckelsparkdental/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#441018] transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          <FooterLinkList title="Services" links={servicesLinks} />
          <FooterLinkList title="Quick Links" links={quickLinks} />

          <div>
            <h3 className="text-base sm:text-lg font-semibold text-white mb-4 font-heading">Address</h3>
            <address className="not-italic text-sm sm:text-base text-gray-300 leading-relaxed mb-6">
              626 E. Yosemite Ave.
              <br />
              Manteca, CA 95336
            </address>

            <h3 className="text-base sm:text-lg font-semibold text-white mb-4 font-heading">Working Hours</h3>
            <ul className="space-y-2 text-sm sm:text-base text-gray-300">
              <li>Monday – Friday: 9 am – 6 pm</li>
              <li>Saturday and Sunday: Closed</li>
            </ul>

            <div className="mt-6">
              <a
                href="tel:+12098251030"
                className="text-sm sm:text-base font-semibold text-white hover:text-gray-300 transition-colors"
              >
                (209) 825-1030
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mt-10 lg:mt-12">
          <p className="text-gray-400 text-xs sm:text-sm text-center leading-relaxed">
            Copyright © 2026 Spreckels Park Dental. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
