'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function FillingsPage() {
  const relatedArticles = [
    {
      title: 'Crowns',
      description: 'Dental crowns are tooth-shaped caps that restore teeth shape, size, and strength.',
      href: '/patient-education/cosmetic-general-dentistry/crowns'
    },
    {
      title: 'Bridges',
      description: 'Dental bridges are used to replace missing teeth and restore your smile.',
      href: '/patient-education/cosmetic-general-dentistry/bridges'
    },
    {
      title: 'Common Dental Procedures',
      description: 'Learn about the most common dental procedures and what to expect.',
      href: '/patient-education/cosmetic-general-dentistry/common-dental-procedures'
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 sm:pt-32 sm:pb-20 md:pt-40 md:pb-24" style={{ backgroundColor: '#441018' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-white font-heading leading-tight mb-6">
              Dental Fillings
            </h1>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-sans">
              Dental fillings are used to repair teeth that have been damaged by decay or trauma. 
              Learn about the different types of fillings and how they can restore your teeth to health.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl font-normal text-gray-900 font-heading mb-6">
              What Are Dental Fillings?
            </h2>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              Dental fillings are materials used to fill cavities or repair damaged teeth. They restore 
              the tooth's function and shape while preventing further decay. Fillings can also be used 
              to repair cracked or broken teeth and teeth that have been worn down from misuse.
            </p>

            <h3 className="text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              When Are Fillings Needed?
            </h3>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              Dental fillings may be recommended in the following situations:
            </p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li>To treat cavities caused by tooth decay</li>
              <li>To repair cracked or broken teeth</li>
              <li>To restore teeth that have been worn down</li>
              <li>To fix teeth that have been damaged by nail biting or tooth grinding</li>
              <li>To replace old fillings that have worn out or fallen out</li>
            </ul>

            <h3 className="text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Types of Dental Fillings
            </h3>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              There are several types of dental fillings available, each with its own advantages:
            </p>

            <h4 className="text-xl font-semibold text-gray-900 font-heading mb-3">
              Composite Fillings
            </h4>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              Composite fillings are made of a resin material that can be matched to the color of your 
              natural teeth. They are popular for their aesthetic appeal and are often used for front 
              teeth or visible areas. Composite fillings bond directly to the tooth, providing good support.
            </p>

            <h4 className="text-xl font-semibold text-gray-900 font-heading mb-3">
              Amalgam Fillings
            </h4>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              Amalgam fillings are made from a mixture of metals including silver, mercury, copper, and tin. 
              They are very durable and cost-effective, making them a good choice for back teeth where 
              chewing forces are greatest. They are silver in color and more noticeable than composite fillings.
            </p>

            <h4 className="text-xl font-semibold text-gray-900 font-heading mb-3">
              Gold Fillings
            </h4>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              Gold fillings are made from gold alloy and are very durable, lasting 10-15 years or longer. 
              They are well-tolerated by gum tissues and may last longer than amalgam fillings. However, 
              they are more expensive and require multiple visits to place.
            </p>

            <h4 className="text-xl font-semibold text-gray-900 font-heading mb-3">
              Ceramic Fillings
            </h4>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              Ceramic fillings are made of porcelain and are very durable and aesthetically pleasing. 
              They can be matched to the color of your teeth and are resistant to staining. They are 
              more expensive than composite fillings and may require multiple visits.
            </p>

            <h3 className="text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              The Filling Procedure
            </h3>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              Getting a dental filling typically involves the following steps:
            </p>

            <h4 className="text-xl font-semibold text-gray-900 font-heading mb-3">
              Numbing the Area
            </h4>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              Your dentist will first numb the area around the tooth to be filled using a local anesthetic. 
              This ensures you won't feel any pain during the procedure.
            </p>

            <h4 className="text-xl font-semibold text-gray-900 font-heading mb-3">
              Removing Decay
            </h4>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              Using a drill or laser, your dentist will remove the decayed portion of the tooth. The area 
              will be cleaned to remove bacteria and debris.
            </p>

            <h4 className="text-xl font-semibold text-gray-900 font-heading mb-3">
              Placing the Filling
            </h4>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              The filling material will be placed in the prepared cavity. For composite fillings, the 
              material is applied in layers and hardened with a special light. For amalgam fillings, 
              the material is packed into the cavity and shaped.
            </p>

            <h4 className="text-xl font-semibold text-gray-900 font-heading mb-3">
              Finishing
            </h4>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              Your dentist will trim and polish the filling to ensure it fits properly and feels comfortable. 
              They will also check your bite to make sure the filling doesn't interfere with chewing.
            </p>

            <h3 className="text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Caring for Your Fillings
            </h3>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              To keep your fillings in good condition and prevent future cavities:
            </p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li>Brush your teeth at least twice a day with fluoride toothpaste</li>
              <li>Floss daily to remove plaque between teeth</li>
              <li>Limit sugary foods and drinks</li>
              <li>Visit your dentist regularly for checkups and cleanings</li>
              <li>Avoid chewing hard foods or ice that could damage the filling</li>
            </ul>

            <h3 className="text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              How Long Do Fillings Last?
            </h3>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              The lifespan of a dental filling depends on the type of material used and how well you care 
              for your teeth. On average:
            </p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li>Composite fillings: 5-10 years</li>
              <li>Amalgam fillings: 10-15 years</li>
              <li>Gold fillings: 15-20 years</li>
              <li>Ceramic fillings: 15+ years</li>
            </ul>

            <h3 className="text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              When to Replace Fillings
            </h3>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              Fillings may need to be replaced if they:
            </p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li>Show signs of wear or damage</li>
              <li>Have developed new decay around the edges</li>
              <li>Are causing pain or sensitivity</li>
              <li>Have fallen out or become loose</li>
              <li>Are cracked or broken</li>
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
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200 font-heading">
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