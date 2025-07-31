'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function PediatricDentistry() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="mb-4">
              <Link href="/patient-education" className="text-blue-600 hover:text-blue-700 font-semibold">
                ← Back to Patient Education
              </Link>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-gray-900 font-heading leading-tight mb-6">
              About Pediatric Dentistry
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-sans">
              Specialized dental care designed specifically for children and adolescents
            </p>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 font-heading">
                What is Pediatric Dentistry?
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6 font-sans">
                Pediatric dentistry is a specialized branch of dentistry that focuses on the oral health of children from infancy through adolescence. Pediatric dentists are specially trained to care for children's teeth, gums, and mouth throughout the various stages of childhood.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                Why Choose a Pediatric Dentist?
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6 font-sans">
                Pediatric dentists have completed additional training beyond dental school to specialize in treating children. They understand the unique needs of young patients and are skilled in making dental visits comfortable and positive experiences.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                Services Provided by Pediatric Dentists
              </h3>
              
              <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2 font-sans">
                <li>Comprehensive oral health examinations</li>
                <li>Preventive dental care including cleanings and fluoride treatments</li>
                <li>Habit counseling (thumb sucking, pacifier use)</li>
                <li>Early assessment and treatment for straightening teeth</li>
                <li>Repair of tooth cavities or defects</li>
                <li>Diagnosis of oral conditions associated with diseases</li>
                <li>Management of gum diseases and conditions</li>
                <li>Care for dental injuries</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                When Should Your Child First Visit a Dentist?
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6 font-sans">
                The American Academy of Pediatric Dentistry recommends that children should visit a dentist by their first birthday or within six months after their first tooth appears. Early visits help establish good oral hygiene habits and allow the dentist to monitor your child's dental development.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                What to Expect During Your Child's First Visit
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6 font-sans">
                The first visit is usually short and involves very little treatment. It gives your child an opportunity to meet the dentist in a non-threatening and friendly way. The dentist will examine your child's teeth, gums, and jaw, and may perform a gentle cleaning.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                Tips for a Successful Dental Visit
              </h3>
              
              <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2 font-sans">
                <li>Schedule the appointment at a time when your child is well-rested</li>
                <li>Keep a positive attitude about the visit</li>
                <li>Explain what will happen in simple terms</li>
                <li>Bring your child's favorite toy or blanket for comfort</li>
                <li>Allow the dentist to establish a relationship with your child</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                Preventive Care for Children
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6 font-sans">
                Preventive care is crucial for children's oral health. This includes regular dental check-ups, proper brushing and flossing techniques, a balanced diet, and fluoride treatments when necessary. Pediatric dentists work with parents to develop good oral hygiene habits that will last a lifetime.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg mt-8">
                <h4 className="text-lg font-semibold text-blue-900 mb-2 font-heading">
                  Remember
                </h4>
                <p className="text-blue-800 font-sans">
                  Good oral health habits established in childhood can lead to a lifetime of healthy smiles. Regular visits to a pediatric dentist help ensure your child's dental health and development are on the right track.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-normal text-gray-900 font-heading mb-8 text-center">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link href="/patient-education/adult-orthodontic-treatment">
                <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-300 border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 font-heading">Adult Orthodontic Treatment</h3>
                  <p className="text-gray-600 font-sans">Discover orthodontic options available for adults seeking to improve their smile.</p>
                </div>
              </Link>
              <Link href="/patient-education/bite-problems">
                <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-300 border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 font-heading">Bite Problems</h3>
                  <p className="text-gray-600 font-sans">Understanding malocclusion and its impact on oral health.</p>
                </div>
              </Link>
              <Link href="/patient-education/aging-and-oral-health">
                <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-300 border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 font-heading">Aging and Oral Health</h3>
                  <p className="text-gray-600 font-sans">Understanding how aging affects oral health and what you can do about it.</p>
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 