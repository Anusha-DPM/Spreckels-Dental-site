'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Top Section - Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
                     {/* Column 1 - Company Information */}
           <div className="text-left">
             <div className="flex items-center mb-4">
               <img
                 src="/Logo-Outgrid.webp"
                 alt="Outgrid Logo"
                 className="h-8 w-auto brightness-0 invert"
               />
             </div>
                         <p className="text-gray-400 mb-6">Unlock your finance potential.</p>
             
             <div className="space-y-6 text-gray-400">
               <div className="flex items-center">
                 <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                 </svg>
                 <span>hello@outgrid.com</span>
               </div>
               <div className="flex items-center">
                 <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                 </svg>
                 <span>(239) 555-0108</span>
               </div>
               <div className="flex items-start">
                 <svg className="w-4 h-4 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                 </svg>
                 <span>4140 Parker Rd. Allentown, New Mexico 31134</span>
               </div>
             </div>
          </div>
          
                     {/* Column 2 - Product Links */}
           <div className="text-left">
             <h3 className="font-semibold text-gray-300 mb-6">Product</h3>
             <ul className="space-y-6">
               <li><a href="#" className="text-gray-400 hover:text-white">Overview</a></li>
               <li><a href="#" className="text-gray-400 hover:text-white">Features</a></li>
               <li><a href="#" className="text-gray-400 hover:text-white">Solutions</a></li>
               <li><a href="#" className="text-gray-400 hover:text-white">Tutorials</a></li>
               <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
             </ul>
           </div>
           
           {/* Column 3 - Company Links */}
           <div className="text-left">
             <h3 className="font-semibold text-gray-300 mb-6">Company</h3>
             <ul className="space-y-6">
               <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
               <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
               <li><a href="#" className="text-gray-400 hover:text-white">News</a></li>
               <li><a href="#" className="text-gray-400 hover:text-white">Media Kit</a></li>
               <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
             </ul>
           </div>
           
           {/* Column 4 - Collaborate Links */}
           <div className="text-left">
             <h3 className="font-semibold text-gray-300 mb-6">Collaborate</h3>
             <ul className="space-y-6">
               <li><a href="#" className="text-gray-400 hover:text-white">Partners</a></li>
               <li><a href="#" className="text-gray-400 hover:text-white">Partners Program</a></li>
               <li><a href="#" className="text-gray-400 hover:text-white">Affiliate Program</a></li>
               <li><a href="#" className="text-gray-400 hover:text-white">Community</a></li>
               <li><a href="#" className="text-gray-400 hover:text-white">HR Partner Program</a></li>
             </ul>
           </div>
        </div>
        
        {/* Bottom Section - Copyright and Social Media */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              Copyright: © 2023 Outgrid WordPress theme by UiCore. All Rights Reserved.
            </p>
            
            <div className="flex items-center space-x-4">
                             {/* Social Media Icons */}
               <div className="flex space-x-4">
                 <a href="#" className="text-white">
                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                   </svg>
                 </a>
                 <a href="#" className="text-white">
                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                   </svg>
                 </a>
                 <a href="#" className="text-white">
                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                   </svg>
                 </a>
                 <a href="#" className="text-white">
                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                   </svg>
                 </a>
                 <a href="#" className="text-white">
                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
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