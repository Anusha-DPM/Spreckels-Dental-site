'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function FacialTraumaAndReconstructiveSurgeryPage() {
  const relatedArticles = [
    {
      title: 'Cleft Lip and Palate',
      description: 'Comprehensive information about cleft lip and palate conditions and surgical treatment options.',
      href: '/patient-education/oral-surgery/cleft-lip-and-palate'
    },
    {
      title: 'Corrective Jaw Surgery',
      description: 'Understanding orthognathic surgery and how it can improve jaw alignment and function.',
      href: '/patient-education/oral-surgery/corrective-jaw-surgery'
    },
    {
      title: 'Oral Surgery Procedures',
      description: 'Overview of common oral surgery procedures and what to expect during treatment.',
      href: '/patient-education/oral-surgery/oral-surgery-procedures'
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
              Facial Trauma and Reconstructive Surgery
            </h1>
            <p className="text-[16px] sm:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-sans">
              Understanding facial trauma treatment and reconstructive surgical procedures to restore 
              function and appearance.
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
              What is Facial Trauma?
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Facial trauma refers to any injury to the face, including the bones, soft tissues, and 
              teeth. This can result from various causes such as motor vehicle accidents, sports injuries, 
              falls, assaults, or workplace accidents. Facial trauma can range from minor cuts and 
              bruises to severe fractures and tissue damage that require immediate medical attention.
            </p>

            <h2 className="text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              Types of Facial Trauma
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Facial trauma can be categorized into several types. Soft tissue injuries include cuts, 
              lacerations, and bruises to the skin and underlying tissues. Bone fractures can affect 
              the jaw, cheekbones, nose, or other facial bones. Dental trauma may involve broken, 
              dislodged, or lost teeth. Nerve injuries can affect facial movement and sensation.
            </p>

            <h2 className="text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              Emergency Assessment and Treatment
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              When facial trauma occurs, immediate assessment is crucial to determine the severity and 
              type of injury. This typically involves a thorough physical examination, imaging studies 
              such as X-rays or CT scans, and evaluation of vital functions like breathing and vision. 
              Emergency treatment focuses on stabilizing the patient and addressing life-threatening 
              conditions first.
            </p>

            <h2 className="text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              Jaw Fracture Treatment
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Jaw fractures are common in facial trauma and require specialized treatment. The approach 
              depends on the location and severity of the fracture. Simple fractures may be treated 
              with wiring the jaws together, while complex fractures often require surgical repair 
              with plates and screws. The goal is to restore proper jaw alignment and function.
            </p>

            <h2 className="text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              Soft Tissue Reconstruction
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Soft tissue injuries may require surgical repair to restore appearance and function. 
              This can involve suturing lacerations, repairing damaged muscles or nerves, and 
              reconstructing missing tissue using grafts or flaps. The timing of reconstruction 
              depends on the extent of injury and the patient's overall condition.
            </p>

            <h2 className="text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              Dental Trauma Management
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Dental injuries often accompany facial trauma and require immediate attention. Dislodged 
              teeth may be repositioned and stabilized, while broken teeth may need restoration or 
              extraction. In cases where teeth are completely knocked out, prompt reimplantation can 
              sometimes save the tooth if done quickly.
            </p>

            <h2 className="text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              Reconstructive Surgery Options
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Reconstructive surgery aims to restore both function and appearance after facial trauma. 
              This may involve bone grafting to replace missing bone, tissue expansion to create 
              additional skin for reconstruction, or microsurgical techniques to reattach severed 
              parts. The specific approach depends on the nature and extent of the injury.
            </p>

            <h2 className="text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              Timing of Reconstruction
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              The timing of reconstructive surgery depends on various factors. Immediate reconstruction 
              may be performed for certain injuries, while delayed reconstruction allows for healing 
              and assessment of the final defect. Staged reconstruction may be necessary for complex 
              injuries that require multiple procedures over time.
            </p>

            <h2 className="text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              Recovery and Rehabilitation
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Recovery from facial trauma and reconstructive surgery can be lengthy and complex. 
              Patients may require physical therapy to restore movement and function, speech therapy 
              if communication is affected, and psychological support to cope with changes in 
              appearance. Regular follow-up care is essential to monitor healing and address any 
              complications.
            </p>

            <h2 className="text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              Long-term Outcomes
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              The long-term outcomes of facial trauma treatment depend on the severity of the injury, 
              the quality of initial treatment, and the patient's overall health. Many patients 
              achieve excellent functional and cosmetic results, though some may require additional 
              procedures or ongoing care. Advances in surgical techniques continue to improve outcomes.
            </p>

            <h2 className="text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              Prevention and Safety
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              While not all facial trauma can be prevented, many injuries can be avoided through 
              safety measures. Wearing seat belts, using protective equipment during sports, 
              maintaining safe work environments, and avoiding risky behaviors can significantly 
              reduce the risk of facial trauma. Regular dental care also helps maintain oral health 
              and can prevent some dental injuries.
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