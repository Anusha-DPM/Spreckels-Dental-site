'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Top Section - Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          
                     {/* Column 1 - Company Information */}
           <div className="text-left">
             <div className="flex items-center mb-4">
               <Link href="/" className="hover:opacity-80 transition-opacity duration-200">
                 <Image
                   src="/logo.webp"
                   alt="Sprekels Park Dental Logo"
                   width={200}
                   height={80}
                   className="h-16 w-auto brightness-0 invert"
                 />
               </Link>
             </div>
                         <p className="text-gray-400 mb-6">Professional dental care for your smile.</p>
             
             <div className="space-y-6 text-gray-400">
               <div className="flex items-center">
                 <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                 </svg>
                 <span>drrujul@gmail.com</span>
               </div>
               <div className="flex items-center">
                 <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                 </svg>
                 <span>(209) 825-1030</span>
               </div>
               <div className="flex items-start">
                 <svg className="w-4 h-4 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                 </svg>
                 <span>626 E. Yosemite Ave.<br />Manteca, CA</span>
               </div>
             </div>
          </div>
          
                     {/* Column 2 - Information Links */}
           <div className="text-left" style={{ paddingLeft: '90px' }}>
             <h3 className="font-semibold text-white mb-6">INFORMATION</h3>
             <ul className="space-y-6">
               <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
               <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
               <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
               <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
               <li><Link href="/insurance-billing" className="text-gray-400 hover:text-white transition-colors">Insurance & Billing</Link></li>
             </ul>
           </div>
           
           {/* Column 3 - Company Links */}
           <div className="text-left" style={{ paddingLeft: '90px' }}>
             <div>
               <h3 className="text-white font-semibold mb-4">QUICK LINKS</h3>
               <ul className="space-y-2">
                 <li><Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
                                   <li><Link href="/disclaimer" className="text-gray-400 hover:text-white transition-colors">Disclaimer</Link></li>
                 <li><Link href="/site-map" className="text-gray-400 hover:text-white transition-colors">Site Map</Link></li>
               </ul>
             </div>
           </div>
           
           {/* Column 4 - Hours of Operation */}
           <div className="text-left">
             <h3 className="font-semibold text-white mb-6">HOURS OF OPERATION</h3>
             <ul className="space-y-2">
               <li className="text-gray-400">Monday 9:30 am - 6:00 pm</li>
               <li className="text-gray-400">Tuesday 9:30 am - 5:00 pm</li>
               <li className="text-gray-400">Wednesday 9:30 am - 6:00 pm</li>
               <li className="text-gray-400">Thursday 9:30 am - 6:00 pm</li>
               <li className="text-gray-400">Friday 9:30 am - 6:00 pm</li>
               <li className="text-gray-400">Saturday Closed</li>
               <li className="text-gray-400">Sunday Closed</li>
             </ul>
           </div>
        </div>
        
        {/* Bottom Section - Copyright and Social Media */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              Copyright: © 2025 Sprekels Park Dental. All Rights Reserved.
            </p>
            
            <div className="flex items-center space-x-4">
                             {/* Social Media Icons */}
               <div className="flex space-x-4">
                 <a href="https://x.com/centralvalleydn" className="text-white">
                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                   </svg>
                 </a>
                 <a href="https://www.facebook.com/spreckelsparkdental" className="text-white">
                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                   </svg>
                 </a>
               </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 