'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface Props {
    categories: { name: string, href: string }[]
    relatedArticles: { title: string, description: string, href: string }[]
}

export default function PatientEducationImplantClient({ categories, relatedArticles }: Props) {
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
                            Implant Dentistry
                        </h1>
                        <p className="text-[16px] sm:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-sans">
                            Discover how dental implants can restore your smile, confidence, and oral function
                            with the most advanced tooth replacement solution available today.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Category Filter */}
            <section className="py-8 sm:py-10 lg:py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mb-8 sm:mb-12"
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
                            Understanding Dental Implants
                        </h2>
                        <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
                            Dental implants are the gold standard for replacing missing teeth. They provide
                            a permanent solution that looks, feels, and functions like your natural teeth.
                            Unlike traditional dentures or bridges, dental implants are surgically placed
                            into your jawbone, creating a stable foundation for replacement teeth.
                        </p>

                        <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
                            What Are Dental Implants?
                        </h3>
                        <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
                            Dental implants are small titanium posts that serve as artificial tooth roots.
                            They are surgically placed into your jawbone where teeth are missing. The bone
                            bonds with the titanium, creating a strong foundation for artificial teeth.
                            Implants also help preserve facial structure, preventing the bone deterioration
                            that occurs when teeth are missing.
                        </p>

                        <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
                            Benefits of Dental Implants
                        </h3>
                        <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
                            Dental implants offer numerous advantages over other tooth replacement options:
                        </p>
                        <ul className="list-disc pl-6 text-[16px] text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
                            <li>Natural appearance and feel</li>
                            <li>Improved speech and chewing ability</li>
                            <li>Enhanced comfort and confidence</li>
                            <li>Long-term durability and reliability</li>
                            <li>Preservation of jawbone structure</li>
                            <li>No need to modify adjacent healthy teeth</li>
                            <li>Easy maintenance and care</li>
                            <li>Prevention of facial sagging</li>
                        </ul>

                        <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
                            Who Is a Good Candidate for Dental Implants?
                        </h3>
                        <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
                            Most people who are missing one or more teeth are good candidates for dental
                            implants. Ideal candidates have:
                        </p>
                        <ul className="list-disc pl-6 text-[16px] text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
                            <li>Good general and oral health</li>
                            <li>Adequate bone density in the jaw</li>
                            <li>Healthy gum tissue</li>
                            <li>Commitment to proper oral hygiene</li>
                            <li>Realistic expectations about the procedure</li>
                        </ul>

                        <h3 className="text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
                            The Dental Implant Process
                        </h3>
                        <p className="text-gray-700 leading-relaxed font-sans mb-6">
                            The dental implant process typically involves several stages:
                        </p>

                        <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
                            Initial Consultation and Planning
                        </h4>
                        <p className="text-gray-700 leading-relaxed font-sans mb-6">
                            During your first visit, we'll conduct a comprehensive examination including
                            X-rays and 3D imaging to assess your bone structure and plan the implant
                            placement. We'll discuss your treatment options and create a personalized
                            treatment plan.
                        </p>

                        <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
                            Implant Placement Surgery
                        </h4>
                        <p className="text-gray-700 leading-relaxed font-sans mb-6">
                            The implant placement is performed under local anesthesia or sedation. A
                            small incision is made in the gum tissue, and the implant is carefully
                            placed into the jawbone. The gum is then sutured closed over the implant.
                        </p>

                        <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
                            Osseointegration Period
                        </h4>
                        <p className="text-gray-700 leading-relaxed font-sans mb-6">
                            Over the next 3-6 months, the implant fuses with your jawbone through a
                            process called osseointegration. During this time, you may wear a temporary
                            restoration while the implant heals.
                        </p>

                        <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
                            Abutment Placement
                        </h4>
                        <p className="text-gray-700 leading-relaxed font-sans mb-6">
                            Once osseointegration is complete, a small connector piece called an abutment
                            is attached to the implant. This serves as the foundation for your new tooth.
                        </p>

                        <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
                            Final Restoration
                        </h4>
                        <p className="text-gray-700 leading-relaxed font-sans mb-6">
                            Finally, your custom-made crown, bridge, or denture is attached to the
                            abutment, completing your new smile.
                        </p>

                        <h3 className="text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
                            Types of Dental Implants
                        </h3>
                        <p className="text-gray-700 leading-relaxed font-sans mb-6">
                            There are several types of dental implants available:
                        </p>

                        <h4 className="text-xl font-semibold text-gray-900 font-heading mb-3">
                            Single Tooth Implants
                        </h4>
                        <p className="text-gray-700 leading-relaxed font-sans mb-6">
                            Used to replace one missing tooth. A single implant is placed in the jawbone
                            and topped with a crown that matches your natural teeth.
                        </p>

                        <h4 className="text-xl font-semibold text-gray-900 font-heading mb-3">
                            Multiple Tooth Implants
                        </h4>
                        <p className="text-gray-700 leading-relaxed font-sans mb-6">
                            When several teeth are missing, multiple implants can support a bridge,
                            eliminating the need for a removable partial denture.
                        </p>

                        <h4 className="text-xl font-semibold text-gray-900 font-heading mb-3">
                            Full Arch Implants
                        </h4>
                        <p className="text-gray-700 leading-relaxed font-sans mb-6">
                            For patients missing all teeth in an arch, multiple implants can support
                            a full set of replacement teeth, providing stability and function similar
                            to natural teeth.
                        </p>

                        <h4 className="text-xl font-semibold text-gray-900 font-heading mb-3">
                            All-on-4® Implant Dentures
                        </h4>
                        <p className="text-gray-700 leading-relaxed font-sans mb-6">
                            A revolutionary technique that uses just four strategically placed implants
                            to support a full arch of replacement teeth, often allowing for immediate
                            function.
                        </p>

                        <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
                            Advanced Technology in Implant Dentistry
                        </h3>
                        <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
                            Modern implant dentistry utilizes cutting-edge technology for optimal results:
                        </p>

                        <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
                            3D Cone Beam CT Scanning
                        </h4>
                        <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
                            Advanced imaging technology provides detailed 3D views of your jawbone,
                            allowing for precise implant placement planning and avoiding vital structures.
                        </p>

                        <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
                            Computer-Guided Implant Surgery
                        </h4>
                        <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
                            Computer-guided surgery uses 3D planning to create surgical guides that
                            ensure implants are placed with maximum precision and minimal invasiveness.
                        </p>

                        <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
                            Digital Impressions
                        </h4>
                        <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
                            Digital scanning technology creates precise digital models of your mouth,
                            eliminating the need for messy traditional impressions and improving accuracy.
                        </p>

                        <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
                            Recovery and Aftercare
                        </h3>
                        <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
                            Proper care after implant surgery is essential for successful healing:
                        </p>

                        <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
                            Immediate Post-Surgery Care
                        </h4>
                        <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
                            Follow your dentist's instructions for pain management, oral hygiene, and
                            dietary restrictions. Avoid smoking and strenuous activities during the
                            initial healing period.
                        </p>

                        <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
                            Long-term Maintenance
                        </h4>
                        <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
                            Maintain excellent oral hygiene with regular brushing, flossing, and
                            professional cleanings. Dental implants require the same care as natural
                            teeth to ensure their longevity.
                        </p>

                        <h3 className="text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
                            Success Rate and Longevity
                        </h3>
                        <p className="text-gray-700 leading-relaxed font-sans mb-6">
                            Dental implants have an excellent success rate of over 95% when properly
                            placed and maintained. With good oral hygiene and regular dental care,
                            implants can last a lifetime. Success depends on:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
                            <li>Quality and quantity of jawbone</li>
                            <li>Patient's overall health</li>
                            <li>Proper oral hygiene maintenance</li>
                            <li>Regular dental checkups</li>
                            <li>Avoiding harmful habits like smoking</li>
                        </ul>

                        <h3 className="text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
                            Cost and Insurance
                        </h3>
                        <p className="text-gray-700 leading-relaxed font-sans mb-6">
                            While dental implants may have a higher initial cost than other tooth
                            replacement options, they are often more cost-effective in the long run
                            due to their durability and low maintenance requirements. Many dental
                            insurance plans now cover a portion of implant treatment, and we offer
                            various financing options to make treatment affordable.
                        </p>

                        <h3 className="text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
                            Why Choose Implant Dentistry?
                        </h3>
                        <p className="text-gray-700 leading-relaxed font-sans mb-6">
                            Dental implants represent the most advanced and effective solution for
                            replacing missing teeth. They provide:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
                            <li>Natural appearance and function</li>
                            <li>Improved quality of life</li>
                            <li>Long-term oral health benefits</li>
                            <li>Preservation of facial structure</li>
                            <li>Enhanced confidence and self-esteem</li>
                            <li>Better chewing and speaking ability</li>
                            <li>No dietary restrictions</li>
                            <li>Minimal maintenance requirements</li>
                        </ul>

                        <h3 className="text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
                            Consultation and Next Steps
                        </h3>
                        <p className="text-gray-700 leading-relaxed font-sans mb-6">
                            If you're considering dental implants, the first step is a comprehensive
                            consultation. We'll evaluate your oral health, discuss your goals, and
                            create a personalized treatment plan. Contact us today to schedule your
                            consultation and take the first step toward restoring your smile with
                            dental implants.
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
                            Ready to Restore Your Smile?
                        </h2>
                        <p className="text-[16px] sm:text-lg text-gray-200 mb-8 max-w-2xl mx-auto font-sans">
                            Schedule a consultation to learn how dental implants can transform your
                            smile and improve your quality of life.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/appointment-request"
                                className="px-8 py-4 bg-[#441018] text-white border-2 border-white rounded-lg hover:bg-[#5a1a2a] transition-colors duration-200 font-semibold cursor-pointer inline-block text-center text-[15px] sm:text-base"
                            >
                                Schedule Consultation
                            </Link>
                            <Link
                                href="/dental-implants"
                                className="px-8 py-4 bg-white text-[#441018] border-2 border-[#441018] rounded-lg hover:bg-[#441018] hover:text-white transition-colors duration-200 font-semibold cursor-pointer inline-block text-center text-[15px] sm:text-base"
                            >
                                Learn More About Implants
                            </Link>
                        </div>
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
                        <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-8 sm:mb-12 text-center">
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
        </>
    )
}
