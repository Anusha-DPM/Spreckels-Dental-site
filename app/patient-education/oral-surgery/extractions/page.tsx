'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ExtractionsPage() {
  const relatedArticles = [
    {
      title: 'Blood Thinners and Oral Surgery',
      description: 'Understanding how blood thinners affect oral surgery and what precautions need to be taken.',
      href: '/patient-education/oral-surgery/blood-thinners-and-oral-surgery'
    },
    {
      title: 'Oral Surgery Procedures',
      description: 'Overview of common oral surgery procedures and what to expect during treatment.',
      href: '/patient-education/oral-surgery/oral-surgery-procedures'
    },
    {
      title: 'Oral Diagnosis and Biopsies',
      description: 'Understanding oral diagnosis procedures and when biopsies are necessary for proper treatment.',
      href: '/patient-education/oral-surgery/oral-diagnosis-and-biopsies'
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
              Extractions
            </h1>
            <p className="text-[16px] sm:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-sans">
              Information about tooth extractions, including wisdom teeth removal and other extraction 
              procedures to maintain oral health.
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
              What are Tooth Extractions?
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Tooth extraction is a dental procedure that involves removing a tooth from its socket in 
              the jawbone. This procedure may be necessary for various reasons, including severe tooth 
              decay, gum disease, trauma, or to make room for orthodontic treatment. Extractions can 
              be simple or surgical, depending on the complexity of the case.
            </p>

            <h2 className="text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              Common Reasons for Extractions
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              There are several reasons why a tooth extraction might be recommended. Severe tooth decay 
              that has destroyed too much of the tooth structure, advanced gum disease that has loosened 
              the tooth, trauma that has damaged the tooth beyond repair, or overcrowding that requires 
              space for orthodontic treatment are common indications. Wisdom teeth extractions are also 
              very common, especially when they are impacted or causing problems.
            </p>

            <h2 className="text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              Wisdom Teeth Extractions
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Wisdom teeth, or third molars, are the last teeth to develop and often cause problems 
              because there isn't enough space in the jaw for them to erupt properly. Impacted wisdom 
              teeth can cause pain, infection, damage to adjacent teeth, and other complications. 
              Extraction is often recommended to prevent these issues and maintain overall oral health.
            </p>

            <h2 className="text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              Simple vs. Surgical Extractions
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Simple extractions are performed on teeth that are visible in the mouth and can be 
              removed with forceps. Surgical extractions are more complex and are used for teeth that 
              are broken off at the gum line, impacted, or require cutting into the gum tissue to access. 
              Surgical extractions may also involve removing some bone around the tooth or cutting the 
              tooth into smaller pieces for easier removal.
            </p>

            <h2 className="text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              Pre-Extraction Preparation
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Before an extraction, your dentist or oral surgeon will review your medical history and 
              any medications you're taking. X-rays may be taken to assess the tooth's position and 
              plan the extraction. You'll receive instructions about eating and drinking before the 
              procedure, and arrangements may be made for anesthesia or sedation if needed.
            </p>

            <h2 className="text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              The Extraction Procedure
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              During the extraction, local anesthesia is used to numb the area around the tooth. For 
              more complex extractions or anxious patients, sedation may also be used. The dentist or 
              oral surgeon will then loosen the tooth and remove it from the socket. In some cases, 
              stitches may be needed to close the extraction site.
            </p>

            <h2 className="text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              Post-Extraction Care
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Proper care after an extraction is crucial for healing and preventing complications. 
              This includes biting on gauze to control bleeding, applying ice to reduce swelling, 
              taking prescribed medications as directed, and following a soft food diet for the first 
              few days. It's important to avoid smoking, using straws, or vigorous rinsing, as these 
              can dislodge the blood clot and delay healing.
            </p>

            <h2 className="text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              Potential Complications
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              While extractions are generally safe, complications can occur. Dry socket, where the 
              blood clot is lost and the bone is exposed, can cause significant pain and requires 
              treatment. Infection, excessive bleeding, and damage to nearby teeth or nerves are other 
              potential complications. Following post-operative instructions carefully helps minimize 
              these risks.
            </p>

            <h2 className="text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              Recovery Timeline
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Recovery time varies depending on the complexity of the extraction and individual healing 
              factors. Simple extractions typically heal within 1-2 weeks, while surgical extractions 
              may take 2-4 weeks or longer. Pain and swelling usually peak within the first 48 hours 
              and then gradually improve. Complete healing of the bone and gum tissue may take several 
              months.
            </p>

            <h2 className="text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              Replacement Options
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              After an extraction, you may want to consider options for replacing the missing tooth. 
              Dental implants, bridges, and partial dentures are common replacement options. The choice 
              depends on various factors including the location of the missing tooth, your overall oral 
              health, and personal preferences. Your dentist can discuss these options with you.
            </p>

            <h2 className="text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              When to Seek Medical Attention
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Contact your dentist or oral surgeon if you experience severe pain that doesn't improve 
              with medication, excessive bleeding that doesn't stop, signs of infection such as fever 
              or foul taste, or any other concerning symptoms. Prompt attention can help prevent 
              complications and ensure proper healing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Related Articles Section */}
      <section className="py-8 sm:py-10 lg:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
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
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Link href={article.href}>
                    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 h-full border border-gray-100">
                      <h3 className="text-[22px] sm:text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#441018] transition-colors duration-200 font-heading">
                        {article.title}
                      </h3>
                      <p className="text-[16px] text-gray-600 leading-relaxed font-sans mb-4">
                        {article.description}
                      </p>
                      <div className="flex items-center text-[#441018] font-medium group-hover:translate-x-1 transition-transform duration-200">
                        Read More
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
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