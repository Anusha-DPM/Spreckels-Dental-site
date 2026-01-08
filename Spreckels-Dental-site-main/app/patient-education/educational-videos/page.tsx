'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function EducationalVideos() {
  const categories = [
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

  const videoTopics = {
    'Tooth Decay': [
      'What is Tooth Decay?',
      'Crown',
      'Filling',
      'Inlay/Onlay',
      'Root Canal',
      'Extraction'
    ],
    'Gap Fractures': [
      'Crown',
      'Root Canal',
      'Crown Lengthening'
    ],
    'Missing Teeth': [
      'Options for Replacing Missing Teeth',
      'When Missing Teeth Are Not Replaced',
      'Bridge',
      'Full Denture',
      'Partial Denture'
    ],
    'Dental Implants': [
      'About Implants',
      'Implant Procedure',
      'Implant Supported Denture'
    ],
    'Cosmetic Procedures': [
      'Veneers',
      'Home Whitening',
      'Laser Whitening'
    ],
    'Periodontal Disease': [
      'About Periodontal Disease',
      'Scaling',
      'Gingival Grafting'
    ],
    'Wisdom Teeth': [
      'Explained',
      'Extraction'
    ],
    'Preventative': [
      'Brushing',
      'Flossing',
      'Brushing with an Electric Toothbrush',
      'Sealants',
      'Regular Dental Visits'
    ],
    'Patient Health and Safety': [
      'Instrument Sterilization',
      'Personal Protective Equipment',
      'Office Disinfecting'
    ],
    'FAQ': [
      'Periodontal Disease in Men',
      'Oral and Overall Health',
      'Inside a Dental Lab',
      'Denture Repair',
      'Why Should I Floss Every Day?',
      'Does Diet Cola Cause Cavities?',
      'Should I Brush Before or After Breakfast',
      'What Should I Eat After Wisdom Teeth Removal?',
      'What Causes Sensitive Teeth?',
      'What Can I Expect From Teeth Whitening?',
      'Can I Brush Too Hard?',
      'What is Pregnancy Gingivitis?',
      'How Long Do Veneers Last?'
    ]
  }

  const featuredVideos = [
    {
      id: 'tooth-decay',
      title: 'What is Tooth Decay?',
      thumbnail: '/video-thumbnail-tooth-decay.jpg',
      duration: '1:37'
    },
    {
      id: 'crown',
      title: 'Crown',
      thumbnail: '/video-thumbnail-crown.jpg',
      duration: '2:15'
    },
    {
      id: 'about-implants',
      title: 'About Implants',
      thumbnail: '/video-thumbnail-implants.jpg',
      duration: '3:42'
    }
  ]

  const navigationTabs = ['DENTISTRY', 'COSMETIC', 'ORTHODONTICS', 'KIDS']

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-[140px] pb-12 sm:pb-16 lg:pb-20" style={{ backgroundColor: '#441018' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-[27px] sm:text-4xl lg:text-6xl font-normal text-white font-heading leading-tight mb-4 sm:mb-6">
              Educational Videos
            </h1>
            <p className="text-[16px] sm:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-sans">
              Take a few minutes to watch our educational videos and learn more about different dental treatments and procedures. 
              Video topics include general & cosmetic dentistry, implants, oral health and hygiene, orthodontics, and preventative dentistry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 sm:py-10 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* Main Content Area */}
            <div className="lg:col-span-3">
              
              {/* Main Video Player */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-6 sm:mb-8"
              >
                <div className="bg-gray-100 rounded-xl overflow-hidden aspect-video relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      <svg className="w-10 h-10 text-blue-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/70 text-white p-4 rounded-lg">
                      <h3 className="text-lg font-semibold mb-1">Tooth Decay</h3>
                      <p className="text-sm text-gray-300">What is Tooth Decay?</p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-sm">-1:37 / 1:37</span>
                        <div className="flex items-center space-x-2">
                          <button className="text-white hover:text-blue-400">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                            </svg>
                          </button>
                          <button className="text-white hover:text-blue-400">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"/>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Navigation Tabs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-6 sm:mb-8"
              >
                <div className="flex flex-wrap items-center justify-between border-b border-gray-200">
                  <div className="flex space-x-8">
                    {navigationTabs.map((tab, index) => (
                      <button
                        key={tab}
                        className={`py-3 px-1 border-b-2 font-semibold text-[15px] sm:text-sm transition-colors duration-200 ${
                          index === 0 
                            ? 'border-blue-500 text-blue-600' 
                            : 'border-transparent text-gray-500 hover:text-gray-700'
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 text-[15px] sm:text-sm font-medium">
                    Share by email
                  </button>
                </div>
              </motion.div>

              {/* Featured Videos */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-10 sm:mb-12"
              >
                <h2 className="text-[22px] sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6 font-heading">Featured Videos</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {featuredVideos.map((video, index) => (
                    <div key={video.id} className="group cursor-pointer">
                      <div className="bg-gray-100 rounded-lg overflow-hidden aspect-video relative mb-3">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 flex items-center justify-center">
                          <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                            <svg className="w-6 h-6 text-blue-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z"/>
                            </svg>
                          </div>
                        </div>
                        <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                          {video.duration}
                        </div>
                      </div>
                      <h3 className="text-[16px] sm:text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                        {video.title}
                      </h3>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Educational Topics */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {Object.entries(videoTopics).map(([category, topics], categoryIndex) => (
                    <div key={category} className="space-y-4">
                      <h3 className="text-[22px] sm:text-lg font-semibold text-gray-900 font-heading">{category}</h3>
                      <ul className="space-y-2">
                        {topics.map((topic, topicIndex) => (
                          <li key={topicIndex}>
                            <button className="text-left text-blue-600 hover:text-blue-700 hover:underline text-[15px] sm:text-sm transition-colors duration-200">
                              {topic}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-gray-50 rounded-xl p-6 sticky top-24"
              >
                <h2 className="text-[22px] sm:text-lg font-semibold text-gray-900 mb-2 font-heading">CATEGORIES</h2>
                <h3 className="text-[16px] sm:text-sm text-gray-600 mb-6">Educational Videos</h3>
                <ul className="space-y-3">
                  {categories.map((category, index) => (
                    <li key={category.name}>
                      <Link href={category.href}>
                        <button className="text-left text-blue-600 hover:text-blue-700 hover:underline text-[15px] sm:text-sm transition-colors duration-200">
                          {category.name}
                        </button>
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-6 sm:py-8 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
            <p className="text-[16px]">Dental videos by Optio Publishing © 2003-2005 Terms of use</p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <button className="text-[15px] sm:text-sm hover:text-blue-600 transition-colors duration-200">EN</button>
              <button className="text-[15px] sm:text-sm hover:text-blue-600 transition-colors duration-200">FR</button>
              <button className="text-[15px] sm:text-sm hover:text-blue-600 transition-colors duration-200">HE</button>
              <button className="text-[15px] sm:text-sm hover:text-blue-600 transition-colors duration-200">ES</button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 