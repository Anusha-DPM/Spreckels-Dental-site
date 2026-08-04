'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function BrokenTeethPage() {
  const relatedArticles = [
    {
      title: 'Root Canal Treatment',
      description: 'Comprehensive guide to root canal treatment, including the procedure, benefits, and what to expect during recovery.',
      href: '/patient-education/endodontics/root-canal-treatment'
    },
    {
      title: 'Tooth Sensitivity',
      description: 'Understanding tooth sensitivity, its causes, and how endodontic treatment can help resolve persistent sensitivity issues.',
      href: '/patient-education/endodontics/tooth-sensitivity'
    },
    {
      title: 'Combined Root and Gum Problems',
      description: 'When endodontic and periodontal problems occur together, requiring comprehensive treatment approaches.',
      href: '/patient-education/endodontics/combined-root-and-gum-problems'
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
              Broken Teeth
            </h1>
            <p className="text-[16px] sm:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-sans">
              Understanding the causes, types, and treatment options for broken teeth and how 
              endodontics can help restore damaged teeth to their full function and appearance.
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
              Understanding Broken Teeth
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              A broken tooth can occur due to various reasons including trauma, decay, or biting 
              on hard objects. The severity of the break can range from minor chips to complete 
              fractures that extend into the root. Understanding the type and extent of the damage 
              is crucial for determining the appropriate treatment approach.
            </p>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Types of Tooth Fractures
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Tooth fractures can be classified into several categories based on their location 
              and severity:
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Craze Lines
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              These are tiny cracks that only affect the outer enamel layer. They are typically 
              cosmetic concerns and may not require immediate treatment, though they can be 
              monitored for progression.
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Fractured Cusp
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              This occurs when a piece of the chewing surface breaks off, usually around a 
              filling. The break typically doesn't extend into the pulp and can often be 
              restored with a crown or onlay.
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Cracked Tooth
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              A crack extends from the chewing surface vertically toward the root. The crack 
              may extend into the pulp, requiring root canal treatment to save the tooth.
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Split Tooth
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              This is a cracked tooth that has been left untreated and has split into two 
              distinct segments. Treatment options are limited and often involve extraction.
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Vertical Root Fracture
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              This crack begins in the root and extends toward the chewing surface. These 
              fractures are often difficult to detect and may require extraction.
            </p>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Common Causes of Broken Teeth
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Understanding what causes teeth to break can help in prevention:
            </p>
            <ul className="list-disc pl-6 text-[16px] text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li>Trauma from accidents, falls, or sports injuries</li>
              <li>Biting on hard objects like ice, nuts, or hard candies</li>
              <li>Large fillings that weaken the tooth structure</li>
              <li>Teeth grinding (bruxism) that puts excessive pressure on teeth</li>
              <li>Age-related wear and tear</li>
              <li>Untreated cavities that weaken the tooth</li>
              <li>Temperature changes causing expansion and contraction</li>
            </ul>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Symptoms of a Broken Tooth
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              The symptoms of a broken tooth can vary depending on the severity and location 
              of the fracture:
            </p>
            <ul className="list-disc pl-6 text-[16px] text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li>Sharp pain when biting or chewing</li>
              <li>Pain that comes and goes, especially when eating</li>
              <li>Sensitivity to hot, cold, or sweet foods</li>
              <li>Swelling around the affected tooth</li>
              <li>Visible crack or chip in the tooth</li>
              <li>Rough or sharp edge that can irritate the tongue</li>
              <li>Difficulty chewing on one side of the mouth</li>
            </ul>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Emergency Steps for a Broken Tooth
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              If you experience a broken tooth, take these immediate steps:
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Immediate Actions
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Rinse your mouth with warm water to clean the area. If there's bleeding, apply 
              gentle pressure with a clean gauze pad. Save any broken pieces if possible, as 
              they may be able to be reattached.
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Pain Management
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Take over-the-counter pain relievers as directed. Apply a cold compress to the 
              outside of your mouth to reduce swelling and pain.
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Temporary Protection
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              If the broken tooth has a sharp edge, cover it with dental wax or sugarless 
              gum to prevent injury to your tongue or cheek.
            </p>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Endodontic Treatment Options
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              The treatment approach depends on the extent of the damage and whether the 
              pulp (nerve) is affected:
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Root Canal Treatment
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              If the fracture extends into the pulp, root canal treatment may be necessary 
              to remove the damaged nerve tissue and prevent infection. This procedure can 
              save the tooth and eliminate pain.
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Apicoectomy
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              For fractures that extend into the root tip, an apicoectomy (surgical root 
              canal) may be performed to remove the damaged portion and seal the root end.
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Crown Restoration
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              After endodontic treatment, a crown is typically placed to restore the tooth's 
              strength, function, and appearance. The crown protects the weakened tooth from 
              further damage.
            </p>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              When Extraction is Necessary
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              In some cases, the damage may be too severe to save the tooth:
            </p>
            <ul className="list-disc pl-6 text-[16px] text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li>Vertical root fractures that extend deep into the root</li>
              <li>Split teeth that cannot be restored</li>
              <li>Severe damage that compromises the tooth's structural integrity</li>
              <li>When the cost of restoration exceeds the long-term prognosis</li>
            </ul>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Prevention Strategies
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              While not all broken teeth can be prevented, these strategies can reduce your risk:
            </p>
            <ul className="list-disc pl-6 text-[16px] text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li>Wear a mouthguard during sports activities</li>
              <li>Avoid chewing on hard objects like ice, pens, or fingernails</li>
              <li>Treat teeth grinding with a night guard</li>
              <li>Maintain good oral hygiene to prevent decay</li>
              <li>Address large fillings before they weaken the tooth</li>
              <li>Regular dental checkups to catch problems early</li>
              <li>Use scissors to cut things instead of your teeth</li>
            </ul>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Recovery and Aftercare
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              After treatment for a broken tooth, proper care is essential:
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Post-Treatment Care
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Follow your dentist's instructions for pain management and oral hygiene. Avoid 
              chewing on the treated tooth until it's fully restored with a permanent crown.
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Long-term Maintenance
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Maintain regular dental visits to monitor the treated tooth. Practice good oral 
              hygiene and avoid habits that could cause future damage.
            </p>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              When to Seek Immediate Care
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Contact your dentist immediately if you experience:
            </p>
            <ul className="list-disc pl-6 text-[16px] text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li>Severe pain that doesn't respond to over-the-counter medication</li>
              <li>Signs of infection (fever, swelling, pus)</li>
              <li>Difficulty breathing or swallowing</li>
              <li>Bleeding that doesn't stop</li>
              <li>Loose or completely dislodged tooth</li>
              <li>Numbness in the affected area</li>
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
                      <h3 className="text-[22px] sm:text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200 font-heading">
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