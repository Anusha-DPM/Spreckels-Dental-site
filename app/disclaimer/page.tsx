'use client'

import { motion } from 'framer-motion'
import Layout from '../../components/Layout'

export default function Disclaimer() {
  return (
    <Layout>
      {/* Main Content Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-[#441018]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-white mb-6">
              Disclaimer
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              Important information about the use of our website and services.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
                         <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
               <div className="space-y-8">
                 {/* Disclaimer Content */}
                 <motion.div
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.6, delay: 0.3 }}
                 >
                   <h2 className="text-2xl font-bold font-heading text-gray-900 mb-4">
                     DISCLAIMER OF Rujal Parikh and OFFICITE
                   </h2>
                   <p className="text-gray-700 leading-relaxed">
                     Rujal Parikh and <span className="text-blue-600 font-semibold">OFFICITE</span> expressly disclaims all warranties and responsibilities of any kind, whether express or implied, for the accuracy or reliability of the content of any information contained in this Web Site, and for the suitability, results, effectiveness or fitness for any particular purpose of the services, procedures, advice or treatments referred to herein, such content and suitability, etc., being the sole responsibility of parties other than Rujal Parikh and <span className="text-blue-600 font-semibold">OFFICITE</span>, and the reliance upon or use of same by you is at your own independent discretion and risk.
                   </p>
                 </motion.div>
               </div>
             </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
} 