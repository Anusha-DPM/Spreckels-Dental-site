'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function SidebarTabs() {
  const [activeTab, setActiveTab] = useState('Alignment Teeth')

  const serviceItems = [
    'Root Canal',
    'Cosmetic Teeth', 
    'Oral Hygiene',
    'Alignment Teeth',
    'Live Advisory',
    'Cavity Inspection'
  ]

  return (
    <motion.div 
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white rounded-lg shadow-sm border border-gray-100"
    >
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Service Categories</h3>
        <div className="space-y-0">
          {serviceItems.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <button
                onClick={() => setActiveTab(item)}
                className={`w-full text-left px-4 py-3 flex items-center justify-between transition-all duration-200 ${
                  activeTab === item
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <span className="font-medium">{item}</span>
                <svg 
                  className="w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              {index < serviceItems.length - 1 && (
                <div className="border-b border-gray-200"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
} 