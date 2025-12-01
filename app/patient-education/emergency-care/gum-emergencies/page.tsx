'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function GumEmergenciesPage() {
  const relatedArticles = [
    {
      title: 'Tooth Pain',
      description: 'Understanding tooth pain, its causes, and when to seek immediate dental care.',
      href: '/patient-education/emergency-care/tooth-pain'
    },
    {
      title: 'Traumatic Dental Injuries',
      description: 'How to handle traumatic dental injuries and when to seek emergency dental care.',
      href: '/patient-education/emergency-care/traumatic-dental-injuries'
    },
    {
      title: 'Orthodontic Emergencies',
      description: 'Common orthodontic emergencies and how to handle them before seeing your orthodontist.',
      href: '/patient-education/emergency-care/orthodontic-emergencies'
    }
  ]

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
              Gum Emergencies
            </h1>
            <p className="text-[16px] sm:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-sans">
              Gum emergencies can be painful and concerning. Learn about common gum problems, 
              their symptoms, and when to seek immediate dental care.
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
              What Are Gum Emergencies?
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Gum emergencies are acute conditions affecting the gums that require immediate attention. 
              These can range from severe infections to traumatic injuries and can cause significant 
              pain, bleeding, and potential damage to your oral health if not treated promptly.
            </p>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Common Gum Emergencies
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Several conditions can constitute a gum emergency:
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Acute Gingivitis
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Sudden inflammation of the gums characterized by redness, swelling, and bleeding. 
              This can occur due to poor oral hygiene, stress, or hormonal changes.
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Periodontal Abscess
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              A painful infection in the gum tissue that can cause swelling, pus formation, 
              and severe pain. This requires immediate treatment to prevent spread of infection.
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Gum Trauma
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Injuries to the gums from accidents, falls, or sports injuries that cause 
              bleeding, pain, and potential damage to underlying structures.
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Gum Recession
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Sudden exposure of tooth roots due to gum tissue pulling away, which can cause 
              sensitivity and pain.
            </p>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Symptoms of Gum Emergencies
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Watch for these warning signs that indicate a gum emergency:
            </p>
            <ul className="list-disc pl-6 text-[16px] text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li>Severe gum pain that doesn't improve with over-the-counter pain relievers</li>
              <li>Excessive bleeding from the gums</li>
              <li>Swelling or inflammation of the gums</li>
              <li>Pus or discharge from the gums</li>
              <li>Bad taste or odor in the mouth</li>
              <li>Loose teeth or changes in bite</li>
              <li>Fever or general feeling of illness</li>
              <li>Difficulty eating or speaking due to gum pain</li>
            </ul>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Immediate Steps for Gum Emergencies
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              If you're experiencing a gum emergency, take these steps:
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              For Bleeding Gums
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Rinse your mouth with warm salt water, apply gentle pressure with a clean cloth, 
              and avoid aspirin which can increase bleeding. Contact your dentist immediately.
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              For Gum Pain
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Rinse with warm salt water, apply a cold compress to reduce swelling, and take 
              over-the-counter pain relievers as directed. Avoid hot or spicy foods.
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              For Gum Swelling
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Apply a cold compress to the outside of your face, rinse with warm salt water, 
              and elevate your head when sleeping to reduce swelling.
            </p>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              When to Seek Emergency Care
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Seek immediate dental care if you experience:
            </p>
            <ul className="list-disc pl-6 text-[16px] text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li>Severe, persistent gum pain</li>
              <li>Excessive bleeding that doesn't stop</li>
              <li>Signs of infection (pus, fever, swelling)</li>
              <li>Difficulty breathing or swallowing</li>
              <li>Trauma to the gums from an accident</li>
              <li>Sudden gum recession or loose teeth</li>
            </ul>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Prevention of Gum Emergencies
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              To reduce your risk of gum emergencies:
            </p>
            <ul className="list-disc pl-6 text-[16px] text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li>Maintain good oral hygiene with regular brushing and flossing</li>
              <li>Visit your dentist regularly for checkups and cleanings</li>
              <li>Avoid tobacco products which can damage gums</li>
              <li>Eat a balanced diet rich in vitamins and minerals</li>
              <li>Manage stress which can affect gum health</li>
              <li>Wear a mouthguard during sports activities</li>
              <li>Address any gum problems early before they become emergencies</li>
            </ul>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Treatment Options
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Treatment for gum emergencies depends on the specific condition:
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Professional Cleaning
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Deep cleaning to remove plaque and tartar buildup that may be causing inflammation.
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Antibiotics
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Prescribed to treat bacterial infections causing gum problems.
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Surgical Treatment
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              In severe cases, surgical procedures may be needed to repair damaged gum tissue.
            </p>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Recovery and Follow-up
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              After treatment for a gum emergency:
            </p>
            <ul className="list-disc pl-6 text-[16px] text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li>Follow your dentist's instructions for care</li>
              <li>Take prescribed medications as directed</li>
              <li>Maintain gentle oral hygiene practices</li>
              <li>Attend follow-up appointments</li>
              <li>Report any worsening symptoms immediately</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-8 sm:py-10 lg:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-8 text-center">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArticles.map((article, index) => (
                <motion.div
                  key={article.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Link href={article.href}>
                    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 h-full">
                      <h3 className="text-[22px] sm:text-xl font-semibold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-200 font-heading">
                        {article.title}
                      </h3>
                      <p className="text-[16px] text-gray-600 leading-relaxed font-sans">
                        {article.description}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 