'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ToothPainPage() {
  const relatedArticles = [
    {
      title: 'Gum Emergencies',
      description: 'Learn about gum emergencies, their causes, symptoms, and immediate treatment options.',
      href: '/patient-education/emergency-care/gum-emergencies'
    },
    {
      title: 'Orthodontic Emergencies',
      description: 'Common orthodontic emergencies and how to handle them before seeing your orthodontist.',
      href: '/patient-education/emergency-care/orthodontic-emergencies'
    },
    {
      title: 'Traumatic Dental Injuries',
      description: 'How to handle traumatic dental injuries and when to seek emergency dental care.',
      href: '/patient-education/emergency-care/traumatic-dental-injuries'
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
              Tooth Pain
            </h1>
            <p className="text-[16px] sm:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-sans">
              Tooth pain can range from mild discomfort to severe agony. Understanding the causes 
              and knowing when to seek immediate care is crucial for your oral health.
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
              Understanding Tooth Pain
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Tooth pain is your body's way of signaling that something is wrong with your oral health. 
              It can be caused by various factors, from minor sensitivity to serious dental problems 
              requiring immediate attention. Understanding the type and severity of your tooth pain 
              can help determine the appropriate course of action.
            </p>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Common Causes of Tooth Pain
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Tooth pain can stem from various dental and non-dental causes:
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Dental Decay (Cavities)
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              The most common cause of tooth pain, cavities occur when bacteria break down tooth 
              enamel. Pain typically worsens with hot, cold, or sweet foods and may become constant 
              as the decay progresses.
            </p>

            <h4 className="text-xl font-semibold text-gray-900 font-heading mb-3">
              Gum Disease
            </h4>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              Inflammation and infection of the gums can cause pain, especially when eating or 
              brushing. Advanced gum disease can lead to tooth sensitivity and pain.
            </p>

            <h4 className="text-xl font-semibold text-gray-900 font-heading mb-3">
              Tooth Sensitivity
            </h4>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              Exposed tooth roots or worn enamel can cause sharp pain when consuming hot, cold, 
              sweet, or acidic foods and beverages.
            </p>

            <h4 className="text-xl font-semibold text-gray-900 font-heading mb-3">
              Dental Abscess
            </h4>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              A serious infection at the root of a tooth or between the gum and tooth. This causes 
              severe, throbbing pain and requires immediate treatment.
            </p>

            <h4 className="text-xl font-semibold text-gray-900 font-heading mb-3">
              Cracked or Broken Teeth
            </h4>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              Trauma or biting on hard objects can cause teeth to crack or break, leading to 
              sharp pain when chewing or biting.
            </p>

            <h4 className="text-xl font-semibold text-gray-900 font-heading mb-3">
              Impacted Wisdom Teeth
            </h4>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              Wisdom teeth that don't have enough room to emerge properly can cause pain, swelling, 
              and infection in the surrounding area.
            </p>

            <h3 className="text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Types of Tooth Pain
            </h3>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              Different types of pain can indicate different problems:
            </p>

            <h4 className="text-xl font-semibold text-gray-900 font-heading mb-3">
              Sharp, Sudden Pain
            </h4>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              Often indicates a cracked tooth, cavity, or exposed root. This type of pain typically 
              occurs when biting or chewing.
            </p>

            <h4 className="text-xl font-semibold text-gray-900 font-heading mb-3">
              Throbbing Pain
            </h4>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              Usually a sign of infection or abscess. This pain may be constant and worsen at night.
            </p>

            <h4 className="text-xl font-semibold text-gray-900 font-heading mb-3">
              Sensitivity to Temperature
            </h4>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              Pain when consuming hot or cold foods often indicates tooth decay, gum recession, 
              or worn enamel.
            </p>

            <h4 className="text-xl font-semibold text-gray-900 font-heading mb-3">
              Dull, Aching Pain
            </h4>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              May indicate gum disease, grinding teeth, or referred pain from other areas like 
              the jaw or sinuses.
            </p>

            <h3 className="text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Immediate Relief for Tooth Pain
            </h3>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              While waiting to see your dentist, try these home remedies:
            </p>

            <h4 className="text-xl font-semibold text-gray-900 font-heading mb-3">
              Over-the-Counter Pain Relievers
            </h4>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              Ibuprofen or acetaminophen can help reduce pain and inflammation. Follow the 
              recommended dosage on the package.
            </p>

            <h4 className="text-xl font-semibold text-gray-900 font-heading mb-3">
              Saltwater Rinse
            </h4>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              Mix 1/2 teaspoon of salt in 8 ounces of warm water and rinse your mouth for 30 seconds. 
              This can help reduce inflammation and kill bacteria.
            </p>

            <h4 className="text-xl font-semibold text-gray-900 font-heading mb-3">
              Cold Compress
            </h4>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              Apply a cold compress to the outside of your cheek for 15-20 minutes to reduce 
              swelling and numb the area.
            </p>

            <h4 className="text-xl font-semibold text-gray-900 font-heading mb-3">
              Clove Oil
            </h4>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              Apply a small amount of clove oil to the affected area using a cotton ball. 
              Clove oil has natural anesthetic properties.
            </p>

            <h3 className="text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              When to Seek Emergency Care
            </h3>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              Seek immediate dental care if you experience:
            </p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li>Severe, persistent pain that doesn't improve with pain relievers</li>
              <li>Pain accompanied by fever or swelling</li>
              <li>Difficulty breathing or swallowing</li>
              <li>Pain after a recent dental procedure that worsens</li>
              <li>Pain that radiates to your ear, jaw, or neck</li>
              <li>Signs of infection (pus, bad taste, swollen glands)</li>
              <li>Pain that prevents you from eating or sleeping</li>
            </ul>

            <h3 className="text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Prevention of Tooth Pain
            </h3>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              To reduce your risk of tooth pain:
            </p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li>Brush your teeth twice daily with fluoride toothpaste</li>
              <li>Floss daily to remove plaque between teeth</li>
              <li>Visit your dentist regularly for checkups and cleanings</li>
              <li>Limit sugary foods and drinks</li>
              <li>Wear a mouthguard if you grind your teeth</li>
              <li>Don't use your teeth as tools</li>
              <li>Address dental problems early before they become painful</li>
            </ul>

            <h3 className="text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              What to Expect at the Dentist
            </h3>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              When you visit your dentist for tooth pain:
            </p>

            <h4 className="text-xl font-semibold text-gray-900 font-heading mb-3">
              Examination
            </h4>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              Your dentist will examine your teeth, gums, and may take X-rays to identify the cause.
            </p>

            <h4 className="text-xl font-semibold text-gray-900 font-heading mb-3">
              Diagnosis
            </h4>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              Based on the examination, your dentist will determine the cause and recommend treatment.
            </p>

            <h4 className="text-xl font-semibold text-gray-900 font-heading mb-3">
              Treatment Options
            </h4>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              Treatment may include fillings, root canals, extractions, or other procedures depending 
              on the diagnosis.
            </p>

            <h3 className="text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Long-term Care
            </h3>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              After treatment for tooth pain:
            </p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li>Follow your dentist's post-treatment instructions</li>
              <li>Take prescribed medications as directed</li>
              <li>Maintain good oral hygiene practices</li>
              <li>Attend follow-up appointments</li>
              <li>Report any new or worsening symptoms</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-normal text-gray-900 font-heading mb-12 text-center">
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
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-200 font-heading">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed font-sans">
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