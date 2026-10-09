'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function PregnancyAndChildsDevelopingTeeth() {
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
                                <div className="mb-4">
                      <Link href="/patient-education/pediatric-dentistry" className="text-gray-300 hover:text-white font-semibold">
                        ← Back to Pediatric Dentistry
                      </Link>
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-white font-heading leading-tight mb-6">
                      Pregnancy and Your Child's Developing Teeth
                    </h1>
                    <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-sans">
                      How maternal health and nutrition during pregnancy can affect your child's dental development
                    </p>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 font-heading">
                When Do Teeth Begin to Develop?
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6 font-sans">
                Your child's teeth begin developing long before birth. The development of primary (baby) teeth starts as early as the sixth week of pregnancy, and the development of permanent teeth begins during the fourth month of pregnancy. This means that your health and nutrition during pregnancy can significantly impact your child's dental health.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                The Importance of Maternal Nutrition
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6 font-sans">
                Proper nutrition during pregnancy is crucial for the healthy development of your child's teeth. Essential nutrients like calcium, phosphorus, vitamin D, and protein are building blocks for strong, healthy teeth. A well-balanced diet during pregnancy helps ensure that your child's teeth develop properly.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                Key Nutrients for Dental Development
              </h3>
              
              <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2 font-sans">
                <li><strong>Calcium:</strong> Essential for strong bones and teeth</li>
                <li><strong>Phosphorus:</strong> Works with calcium to build tooth enamel</li>
                <li><strong>Vitamin D:</strong> Helps the body absorb calcium</li>
                <li><strong>Protein:</strong> Important for overall growth and development</li>
                <li><strong>Folate:</strong> Helps prevent birth defects</li>
                <li><strong>Vitamin A:</strong> Important for tooth development</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                Foods to Include in Your Pregnancy Diet
              </h3>
              
              <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2 font-sans">
                <li>Dairy products (milk, cheese, yogurt)</li>
                <li>Leafy green vegetables (spinach, kale)</li>
                <li>Fish rich in omega-3 fatty acids</li>
                <li>Lean meats and poultry</li>
                <li>Eggs</li>
                <li>Nuts and seeds</li>
                <li>Whole grains</li>
                <li>Fruits and vegetables</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                Maternal Oral Health and Its Impact
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6 font-sans">
                Your oral health during pregnancy can also affect your child's dental development. Research has shown that mothers with poor oral health, particularly gum disease, may have a higher risk of delivering preterm or low-birth-weight babies. These conditions can affect the development of your child's teeth and overall health.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                Pregnancy Gingivitis
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6 font-sans">
                Many women experience pregnancy gingivitis, a condition characterized by red, swollen, and bleeding gums. This is caused by hormonal changes that make the gums more sensitive to plaque. Regular dental check-ups and good oral hygiene during pregnancy can help prevent and manage this condition.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                Dental Care During Pregnancy
              </h3>
              
              <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2 font-sans">
                <li>Continue regular dental check-ups and cleanings</li>
                <li>Maintain good oral hygiene (brushing twice daily, flossing)</li>
                <li>Inform your dentist about your pregnancy</li>
                <li>Address any dental problems promptly</li>
                <li>Consider postponing elective dental procedures until after delivery</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                Substances to Avoid During Pregnancy
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6 font-sans">
                Certain substances can negatively impact your child's dental development. Avoid smoking, alcohol, and recreational drugs during pregnancy. Also, be cautious with medications and always consult with your healthcare provider before taking any medications, including over-the-counter drugs.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                The Role of Prenatal Vitamins
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6 font-sans">
                Prenatal vitamins are designed to provide the essential nutrients needed for a healthy pregnancy, including those important for dental development. Take your prenatal vitamins as prescribed by your healthcare provider to ensure you're getting adequate nutrition for both you and your developing baby.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                What to Expect After Birth
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6 font-sans">
                Your child's first teeth typically begin to appear around 6 months of age, though this can vary. The timing and order of tooth eruption are largely determined by genetics, but the health and strength of those teeth can be influenced by your pregnancy nutrition and health.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg mt-8">
                <h4 className="text-lg font-semibold text-blue-900 mb-2 font-heading">
                  Remember
                </h4>
                <p className="text-blue-800 font-sans">
                  Your health and nutrition during pregnancy lay the foundation for your child's dental health. By maintaining good oral hygiene, eating a balanced diet, and receiving regular dental care, you can help ensure your child develops strong, healthy teeth.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-normal text-gray-900 font-heading mb-8 text-center">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link href="/patient-education/pediatric-dentistry/about-pediatric-dentistry">
                <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-300 border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 font-heading">About Pediatric Dentistry</h3>
                  <p className="text-gray-600 font-sans">Learn about specialized dental care for children and adolescents.</p>
                </div>
              </Link>
              <Link href="/patient-education/pediatric-dentistry/fluoride-and-your-child">
                <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-300 border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 font-heading">Fluoride and Your Child</h3>
                  <p className="text-gray-600 font-sans">Understanding the importance of fluoride in preventing tooth decay.</p>
                </div>
              </Link>
              <Link href="/patient-education/oral-hygiene/oral-hygiene-for-kids">
                <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-300 border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 font-heading">Oral Hygiene for Kids</h3>
                  <p className="text-gray-600 font-sans">Essential tips for maintaining good oral hygiene in children.</p>
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 