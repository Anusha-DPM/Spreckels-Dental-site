'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface Props {
    categories: { name: string, href: string }[]
    relatedArticles: { title: string, description: string, href: string }[]
}

export default function PatientEducationPeriodontalClient({ categories, relatedArticles }: Props) {
    return (
        <>
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
                            Periodontal Therapy
                        </h1>
                        <p className="text-[16px] sm:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-sans">
                            Understanding periodontal therapy procedures and how they can help treat gum disease
                            and restore your oral health.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Standardized Categories */}
            <section className="py-8 sm:py-10 lg:py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mb-0"
                    >
                        <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6 sm:mb-8 text-center">
                            Browse by Category
                        </h2>
                        <div className="flex flex-wrap justify-center gap-4">
                            {categories.map((category, index) => (
                                <motion.div
                                    key={category.name}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <Link href={category.href}>
                                        <button className="px-6 py-3 bg-white border-2 border-gray-200 rounded-lg text-gray-700 hover:border-blue-500 hover:text-blue-600 transition-all duration-200 font-semibold text-[15px] sm:text-base">
                                            {category.name}
                                        </button>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="pt-0 pb-8 sm:pb-10 lg:pb-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="prose prose-lg max-w-none"
                    >
                        <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6">
                            What is Periodontal Therapy?
                        </h2>
                        <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
                            Periodontal therapy is a comprehensive treatment approach designed to address gum disease
                            and restore periodontal health. It encompasses various procedures that target the underlying
                            causes of periodontal disease, including bacterial infection, inflammation, and tissue damage.
                            The goal is to halt the progression of gum disease and promote healing of the supporting
                            structures around your teeth.
                        </p>

                        <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
                            Understanding Periodontal Disease
                        </h2>
                        <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
                            Periodontal disease, commonly known as gum disease, is an inflammatory condition that affects
                            the gums and supporting structures of the teeth. It begins with gingivitis, characterized by
                            red, swollen gums that may bleed easily. If left untreated, it can progress to periodontitis,
                            which involves the destruction of bone and connective tissue that support the teeth, potentially
                            leading to tooth loss.
                        </p>

                        <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
                            Types of Periodontal Therapy Procedures
                        </h2>
                        <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
                            Periodontal therapy includes several types of procedures, each designed to address specific
                            aspects of gum disease. Scaling and root planing is a deep cleaning procedure that removes
                            plaque and tartar from below the gumline. Surgical procedures may be necessary for more
                            advanced cases, including flap surgery, bone grafts, and tissue regeneration techniques.
                        </p>

                        <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
                            Scaling and Root Planing
                        </h2>
                        <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
                            Scaling and root planing is the foundation of periodontal therapy. This non-surgical procedure
                            involves removing plaque and tartar deposits from the tooth surfaces and root surfaces below
                            the gumline. The root surfaces are then smoothed to prevent bacteria from reattaching and to
                            promote healing. This procedure is typically performed under local anesthesia and may require
                            multiple visits depending on the extent of the disease.
                        </p>

                        <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
                            Surgical Periodontal Procedures
                        </h2>
                        <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
                            For advanced periodontal disease, surgical procedures may be necessary. Flap surgery involves
                            lifting the gums to access deeper areas for cleaning and to reduce pocket depth. Bone grafting
                            procedures can help regenerate lost bone tissue, while soft tissue grafts can restore receded
                            gums. These procedures are performed under local anesthesia and require careful post-operative
                            care.
                        </p>

                        <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
                            Laser Periodontal Therapy
                        </h2>
                        <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
                            Laser periodontal therapy is a modern approach that uses specialized dental lasers to treat
                            gum disease. This minimally invasive procedure can remove infected tissue, kill bacteria, and
                            promote healing with less discomfort and faster recovery times compared to traditional surgical
                            methods. Laser therapy may be used alone or in combination with other periodontal procedures.
                        </p>

                        <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
                            Antibiotic Therapy
                        </h2>
                        <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
                            Antibiotic therapy may be used as an adjunct to mechanical periodontal treatment. This can
                            include topical antibiotics applied directly to the periodontal pockets, oral antibiotics for
                            systemic treatment, or antibiotic-impregnated materials placed in the pockets. Antibiotic
                            therapy helps eliminate bacteria that may be resistant to mechanical cleaning alone.
                        </p>

                        <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
                            Maintenance and Follow-up Care
                        </h2>
                        <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
                            Following periodontal therapy, ongoing maintenance is crucial for long-term success. This
                            typically involves more frequent dental cleanings, usually every 3-4 months, to prevent
                            disease recurrence. Your dentist will also monitor your periodontal health and may recommend
                            additional treatments if needed. Good oral hygiene practices at home are essential for
                            maintaining the results of periodontal therapy.
                        </p>

                        <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
                            What to Expect During Treatment
                        </h2>
                        <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
                            Periodontal therapy procedures are typically performed under local anesthesia to ensure your
                            comfort. You may experience some sensitivity and mild discomfort following treatment, which
                            can usually be managed with over-the-counter pain relievers. Your dentist will provide specific
                            instructions for post-treatment care, including dietary restrictions and oral hygiene practices.
                        </p>

                        <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
                            Benefits of Periodontal Therapy
                        </h2>
                        <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
                            Periodontal therapy offers numerous benefits, including halting the progression of gum disease,
                            reducing inflammation and bleeding, preventing tooth loss, improving oral health, and enhancing
                            your overall well-being. Successful periodontal therapy can also improve the appearance of your
                            smile and boost your confidence. Early intervention is key to achieving the best outcomes.
                        </p>

                        <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
                            Prevention and Risk Factors
                        </h2>
                        <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
                            Understanding the risk factors for periodontal disease can help with prevention. These include
                            poor oral hygiene, smoking, diabetes, hormonal changes, certain medications, and genetic
                            predisposition. Regular dental checkups, proper oral hygiene, and lifestyle modifications can
                            significantly reduce your risk of developing periodontal disease.
                        </p>

                        <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
                            Consultation and Treatment Planning
                        </h2>
                        <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
                            If you're experiencing symptoms of gum disease or have been diagnosed with periodontal disease,
                            schedule a consultation with your dentist. During this visit, your dentist will conduct a
                            thorough examination, including periodontal probing and X-rays, to assess the extent of the
                            disease and develop a personalized treatment plan. Early diagnosis and treatment are essential
                            for successful outcomes.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-8 sm:py-10 lg:py-12" style={{ backgroundColor: '#441018' }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <h2 className="text-[27px] sm:text-3xl font-normal text-white font-heading mb-6">
                            Ready to Learn More About Periodontal Therapy?
                        </h2>
                        <p className="text-[16px] sm:text-lg text-gray-200 mb-8 max-w-2xl mx-auto font-sans">
                            Schedule a consultation to discuss periodontal therapy options and determine the best
                            approach for your gum health.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/appointment-request"
                                className="px-8 py-4 bg-[#441018] text-white border-2 border-white rounded-lg hover:bg-[#5a1a2a] transition-colors duration-200 font-semibold cursor-pointer inline-block text-center text-[15px] sm:text-base"
                            >
                                Schedule Consultation
                            </Link>
                            <Link
                                href="/patient-education/periodontal-therapy"
                                className="px-8 py-4 bg-white text-[#441018] border-2 border-[#441018] rounded-lg hover:bg-[#441018] hover:text-white transition-colors duration-200 font-semibold cursor-pointer inline-block text-center text-[15px] sm:text-base"
                            >
                                Learn More About Periodontal Therapy
                            </Link>
                        </div>
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
        </>
    )
}
