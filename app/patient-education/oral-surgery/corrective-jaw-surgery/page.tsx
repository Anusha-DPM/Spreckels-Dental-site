'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CorrectiveJawSurgeryPage() {
  const relatedArticles = [
    {
      title: 'Cleft Lip and Palate',
      description: 'Comprehensive information about cleft lip and palate conditions and surgical treatment options.',
      href: '/patient-education/oral-surgery/cleft-lip-and-palate'
    },
    {
      title: 'Facial Trauma and Reconstructive Surgery',
      description: 'Understanding facial trauma treatment and reconstructive surgical procedures.',
      href: '/patient-education/oral-surgery/facial-trauma-and-reconstructive-surgery'
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
              Corrective Jaw Surgery
            </h1>
            <p className="text-[16px] sm:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-sans">
              Understanding orthognathic surgery and how it can improve jaw alignment, function, and 
              overall facial appearance.
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
              What is Corrective Jaw Surgery?
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Corrective jaw surgery, also known as orthognathic surgery, is a procedure that corrects 
              jaw alignment and positioning issues. This surgery can address problems with the upper jaw 
              (maxilla), lower jaw (mandible), or both. It is often performed in conjunction with 
              orthodontic treatment to achieve optimal results.
            </p>

            <h2 className="text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              Common Jaw Alignment Issues
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Jaw alignment problems can manifest in various ways. An overbite occurs when the upper 
              jaw protrudes too far forward, while an underbite happens when the lower jaw extends 
              beyond the upper jaw. Open bite refers to a gap between the upper and lower teeth when 
              the mouth is closed, and crossbite occurs when the upper and lower jaws don't align 
              properly from side to side.
            </p>

            <h2 className="text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              Functional Problems Addressed
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Corrective jaw surgery can resolve various functional issues. These include difficulty 
              chewing or biting, speech problems, breathing difficulties, sleep apnea, and chronic jaw 
              pain or temporomandibular joint (TMJ) disorders. The surgery can also improve the ability 
              to close the lips properly and reduce excessive wear on teeth.
            </p>

            <h2 className="text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              Aesthetic Benefits
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Beyond functional improvements, corrective jaw surgery can significantly enhance facial 
              appearance. It can improve facial symmetry, create a more balanced profile, and enhance 
              the overall harmony of facial features. Many patients report increased self-confidence 
              and satisfaction with their appearance following surgery.
            </p>

            <h2 className="text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              Pre-Surgical Planning
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Comprehensive planning is essential for successful corrective jaw surgery. This typically 
              involves consultation with an oral surgeon and orthodontist, detailed imaging studies 
              including X-rays and 3D scans, and computer modeling to plan the surgical movements. 
              The treatment plan is customized to address each patient's specific needs and goals.
            </p>

            <h2 className="text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              Orthodontic Preparation
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Most patients require orthodontic treatment before and after jaw surgery. Pre-surgical 
              orthodontics helps align the teeth properly within each jaw, preparing them for the 
              surgical repositioning. Post-surgical orthodontics fine-tunes the final alignment and 
              ensures optimal function and appearance.
            </p>

            <h2 className="text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              Surgical Procedure
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Corrective jaw surgery is performed under general anesthesia in a hospital setting. The 
              surgeon makes incisions inside the mouth to access the jawbones, then carefully cuts and 
              repositions the bones according to the treatment plan. Small plates and screws are used 
              to secure the bones in their new position. The procedure typically takes 2-4 hours.
            </p>

            <h2 className="text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              Recovery Process
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Recovery from corrective jaw surgery involves several phases. Initially, patients may 
              experience swelling, bruising, and discomfort. A liquid or soft food diet is required 
              for several weeks. Most patients can return to normal activities within 2-4 weeks, 
              though complete healing and final results may take several months.
            </p>

            <h2 className="text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              Potential Risks and Complications
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              As with any surgery, corrective jaw surgery carries some risks. These can include 
              bleeding, infection, nerve damage, and adverse reactions to anesthesia. There is also 
              a small risk of relapse, where the jaw gradually moves back toward its original position. 
              However, with proper planning and execution, these risks are minimized.
            </p>

            <h2 className="text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              Long-term Results
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              The results of corrective jaw surgery are typically permanent and can significantly 
              improve quality of life. Patients often experience better chewing function, improved 
              speech, enhanced breathing, and increased self-confidence. Regular follow-up care helps 
              ensure the best long-term outcomes.
            </p>

            <h2 className="text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              Candidacy for Surgery
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Ideal candidates for corrective jaw surgery are typically adults whose jaw growth is 
              complete. They should be in good general health and have realistic expectations about 
              the procedure and recovery. A thorough evaluation by an oral surgeon and orthodontist 
              helps determine if surgery is the right option for each individual.
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