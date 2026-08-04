'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ToothSensitivityPage() {
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
              Tooth Sensitivity
            </h1>
            <p className="text-[16px] sm:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-sans">
              Understanding tooth sensitivity, its causes, and how endodontic treatment can 
              help resolve persistent sensitivity issues and restore your comfort.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-8 sm:py-10 lg:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6">
              Understanding Tooth Sensitivity
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Tooth sensitivity, also known as dentin hypersensitivity, is a common dental 
              problem that affects millions of people worldwide. It occurs when the dentin 
              (the layer beneath the enamel) becomes exposed, causing pain or discomfort 
              when teeth come into contact with hot, cold, sweet, or acidic substances.
            </p>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              What Causes Tooth Sensitivity?
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Tooth sensitivity can result from various factors that expose the dentin, 
              including enamel erosion, gum recession, tooth decay, cracked teeth, 
              recent dental work, and teeth grinding.
            </p>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Treatment Options
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Treatment for tooth sensitivity depends on the underlying cause and may 
              include desensitizing toothpaste, fluoride treatments, dental bonding, 
              gum grafting, or in severe cases, endodontic treatment.
            </p>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Prevention Strategies
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              To prevent tooth sensitivity, practice proper oral hygiene with a soft-bristled 
              toothbrush, limit acidic foods and drinks, attend regular dental checkups, 
              and wear a mouthguard if you grind your teeth.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 