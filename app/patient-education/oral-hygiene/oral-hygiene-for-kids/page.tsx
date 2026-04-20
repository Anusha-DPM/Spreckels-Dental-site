'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function OralHygieneForKidsPage() {
  const relatedArticles = [
    {
      title: 'How to Brush and Floss',
      description: 'Learn the proper techniques for brushing and flossing to maintain optimal oral health.',
      href: '/patient-education/oral-hygiene/how-to-brush-and-floss'
    },
    {
      title: 'How to Prevent Cavities',
      description: 'Essential strategies and tips to prevent cavities and maintain strong, healthy teeth.',
      href: '/patient-education/oral-hygiene/how-to-prevent-cavities'
    },
    {
      title: 'Toothpaste',
      description: 'Understanding different types of toothpaste and how to select the best option for your oral health needs.',
      href: '/patient-education/oral-hygiene/toothpaste'
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
              Oral Hygiene for Kids
            </h1>
            <p className="text-[16px] sm:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-sans">
              Teaching children proper oral hygiene habits and making dental care fun and engaging.
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
              When to Start Oral Hygiene
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Oral hygiene should begin even before your child's first tooth appears. Clean your baby's 
              gums with a soft, damp cloth after feedings to remove bacteria and get them accustomed to 
              oral care. Once the first tooth emerges, usually around 6 months, you can begin using a 
              small, soft-bristled toothbrush designed for infants.
            </p>

            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              Choosing the Right Toothbrush
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Select a toothbrush that is appropriate for your child's age and size. For infants and 
              toddlers, choose a small brush with soft bristles and a large handle that's easy for 
              parents to grip. As children grow, they can graduate to larger brushes with age-appropriate 
              features like colorful designs or favorite characters to make brushing more appealing.
            </p>

            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              Selecting Toothpaste
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Use fluoride toothpaste approved by the American Dental Association. For children under 3, 
              use a smear of toothpaste about the size of a grain of rice. For children 3-6, use a 
              pea-sized amount. Choose toothpaste with flavors that appeal to children, but avoid 
              overly sweet flavors that might encourage swallowing.
            </p>

            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              Teaching Proper Brushing Technique
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Show your child how to brush in small, circular motions, covering all surfaces of the teeth. 
              For young children, you'll need to help with brushing until they develop the coordination 
              to do it effectively themselves, usually around age 6-8. Make sure they brush for at least 
              two minutes, twice daily.
            </p>

            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              Making Brushing Fun
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Turn oral hygiene into an enjoyable activity by playing music, using a timer with fun sounds, 
              or creating a brushing song. Let your child choose their toothbrush and toothpaste flavor. 
              Use positive reinforcement and praise for good brushing habits. Consider using apps or videos 
              designed to make brushing time more engaging for children.
            </p>

            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              Introducing Flossing
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Begin flossing when your child has two teeth that touch, usually around age 2-3. Use floss 
              picks designed for children, which are easier to handle than traditional floss. Demonstrate 
              the technique and help your child until they can floss independently, typically around age 10.
            </p>

            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              Establishing a Routine
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Create a consistent oral hygiene routine that fits into your family's schedule. Brush teeth 
              in the morning and before bedtime. Make it a family activity by brushing together, which 
              allows you to model good habits and supervise your child's technique. Consistency is key 
              to developing lifelong healthy habits.
            </p>

            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              Diet and Oral Health
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Teach your child about the connection between food choices and oral health. Limit sugary 
              snacks and drinks, especially between meals. Encourage healthy snacks like fruits, vegetables, 
              and dairy products. Explain how certain foods can help keep teeth strong and healthy.
            </p>

            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              Regular Dental Visits
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Schedule your child's first dental visit by their first birthday or within 6 months of 
              their first tooth appearing. Regular checkups help prevent dental problems and familiarize 
              your child with the dental office environment. Choose a dentist who specializes in pediatric 
              dentistry and creates a positive experience for children.
            </p>

            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              Handling Resistance
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              If your child resists brushing or flossing, stay patient and positive. Try different 
              approaches like letting them brush your teeth first, using a favorite stuffed animal 
              as a "patient," or creating a reward system for consistent oral hygiene. Never use 
              oral hygiene as a punishment, as this can create negative associations.
            </p>

            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              Special Considerations
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Children with special needs may require additional support and adaptations for oral hygiene. 
              Consult with your dentist or healthcare provider for specific recommendations. Some children 
              may benefit from electric toothbrushes, specialized tools, or modified techniques to ensure 
              effective oral care.
            </p>

            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              Building Lifelong Habits
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              The oral hygiene habits children develop early in life often persist into adulthood. By 
              making oral care a positive, regular part of your child's routine, you're setting them up 
              for a lifetime of good oral health. Remember that your own oral hygiene habits serve as a 
              powerful example for your children to follow.
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