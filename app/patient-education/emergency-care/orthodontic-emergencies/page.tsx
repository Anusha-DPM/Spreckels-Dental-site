'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function OrthodonticEmergenciesPage() {
  const relatedArticles = [
    {
      title: 'Gum Emergencies',
      description: 'Learn about gum emergencies, their causes, symptoms, and immediate treatment options.',
      href: '/patient-education/emergency-care/gum-emergencies'
    },
    {
      title: 'Tooth Pain',
      description: 'Understanding tooth pain, its causes, and when to seek immediate dental care.',
      href: '/patient-education/emergency-care/tooth-pain'
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
              Orthodontic Emergencies
            </h1>
            <p className="text-[16px] sm:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-sans">
              Orthodontic emergencies can be uncomfortable and concerning. Learn about common 
              issues with braces and aligners, and how to handle them before seeing your orthodontist.
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
              What Are Orthodontic Emergencies?
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Orthodontic emergencies are problems with braces, aligners, or other orthodontic 
              appliances that require immediate attention. While most orthodontic issues can wait 
              until your next appointment, some situations require prompt care to prevent damage 
              or discomfort.
            </p>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Common Orthodontic Emergencies
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Several issues can constitute an orthodontic emergency:
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Broken or Loose Brackets
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Brackets that have come loose or broken off can cause discomfort and may affect 
              treatment progress. This can happen from eating hard foods, trauma, or normal wear.
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Poking or Broken Wires
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Wires that have broken or are poking into your cheeks, gums, or tongue can cause 
              significant pain and irritation. This is one of the most common orthodontic emergencies.
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Loose Bands
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Bands around molars that have become loose or fallen off can affect the stability 
              of your braces and treatment progress.
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Severe Pain or Discomfort
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              While some discomfort is normal after adjustments, severe or persistent pain that 
              doesn't improve with over-the-counter pain relievers may indicate a problem.
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Trauma to the Mouth
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Injuries to the mouth that damage braces or cause severe pain require immediate 
              attention to prevent further damage.
            </p>

            <h3 className="text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Immediate Steps for Orthodontic Emergencies
            </h3>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              Here's how to handle common orthodontic emergencies:
            </p>

            <h4 className="text-xl font-semibold text-gray-900 font-heading mb-3">
              For Poking Wires
            </h4>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              Use a pencil eraser to gently push the wire back into place, or cover the end with 
              orthodontic wax. If the wire is too long, you can carefully trim it with nail clippers 
              that have been sterilized with alcohol.
            </p>

            <h4 className="text-xl font-semibold text-gray-900 font-heading mb-3">
              For Loose Brackets
            </h4>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              If a bracket is loose but still attached, leave it in place and cover it with wax 
              to prevent irritation. If it has fallen off completely, save it and bring it to 
              your next appointment.
            </p>

            <h4 className="text-xl font-semibold text-gray-900 font-heading mb-3">
              For Broken Wires
            </h4>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              If a wire has broken, try to remove the broken piece if possible. If you can't 
              remove it safely, cover any sharp ends with wax and contact your orthodontist.
            </p>

            <h4 className="text-xl font-semibold text-gray-900 font-heading mb-3">
              For Loose Bands
            </h4>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              If a band has come loose, save it and bring it to your next appointment. Don't 
              try to reattach it yourself, as this could damage your tooth.
            </p>

            <h3 className="text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              When to Seek Emergency Care
            </h3>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              Contact your orthodontist immediately if you experience:
            </p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li>Severe pain that doesn't improve with pain relievers</li>
              <li>Bleeding from the mouth or gums</li>
              <li>Difficulty breathing or swallowing</li>
              <li>Trauma to the face or mouth</li>
              <li>Signs of infection (swelling, pus, fever)</li>
              <li>Multiple broken or loose brackets</li>
              <li>Wires that are causing severe irritation and can't be fixed at home</li>
            </ul>

            <h3 className="text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Prevention of Orthodontic Emergencies
            </h3>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              To reduce your risk of orthodontic emergencies:
            </p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li>Follow your orthodontist's dietary restrictions</li>
              <li>Avoid hard, sticky, or chewy foods</li>
              <li>Wear a mouthguard during sports activities</li>
              <li>Maintain good oral hygiene</li>
              <li>Attend all scheduled appointments</li>
              <li>Don't use your teeth as tools</li>
              <li>Report any problems early before they become emergencies</li>
            </ul>

            <h3 className="text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Essential Orthodontic Supplies
            </h3>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              Keep these items on hand for orthodontic emergencies:
            </p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li>Orthodontic wax for covering sharp edges</li>
              <li>Sterilized nail clippers for trimming wires</li>
              <li>Pencil eraser for pushing wires back into place</li>
              <li>Over-the-counter pain relievers</li>
              <li>Salt for making saltwater rinses</li>
              <li>Your orthodontist's emergency contact information</li>
            </ul>

            <h3 className="text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              What to Expect at Emergency Appointments
            </h3>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              During an emergency orthodontic appointment:
            </p>

            <h4 className="text-xl font-semibold text-gray-900 font-heading mb-3">
              Assessment
            </h4>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              Your orthodontist will examine your braces and identify the problem.
            </p>

            <h4 className="text-xl font-semibold text-gray-900 font-heading mb-3">
              Immediate Treatment
            </h4>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              They will fix the immediate problem, such as reattaching brackets or trimming wires.
            </p>

            <h4 className="text-xl font-semibold text-gray-900 font-heading mb-3">
              Follow-up Instructions
            </h4>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              You'll receive instructions for care and when to return for your next regular appointment.
            </p>

            <h3 className="text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Non-Emergency Issues
            </h3>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              These issues can typically wait until your next appointment:
            </p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li>Mild discomfort after adjustments</li>
              <li>Minor wire adjustments that don't cause pain</li>
              <li>Questions about treatment progress</li>
              <li>Routine maintenance concerns</li>
              <li>Appliance cleaning questions</li>
            </ul>

            <h3 className="text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              After-Hours Care
            </h3>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              If you experience an orthodontic emergency outside of office hours:
            </p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li>Try the home remedies mentioned above</li>
              <li>Contact your orthodontist's emergency line if available</li>
              <li>For severe emergencies, visit an emergency room</li>
              <li>Document the problem and bring photos to your next appointment</li>
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