'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

interface Testimonial {
  name: string;
  text: string;
  avatar: string;
  nameColor: string;
  fullBio: string;
}

export default function DentalStaffJourneySection() {
  const [hoveredDoctor, setHoveredDoctor] = useState<string | null>(null);

  const testimonial: Testimonial = {
    name: 'Dr. Rujul G. Parikh DDS',
    text: "With over 25 years of experience in dentistry, I've dedicated my career to creating beautiful, healthy smiles. Our commitment to patient care and advanced dental techniques has made Spreckels Park Dental a trusted name in Manteca.",
    avatar: '/Rujul.jpeg',
    nameColor: 'text-green-600',
    fullBio: `Dentist & Implant Dentist in Manteca & Stockton, CA

For more than 25 years, Dr. Rujul G. Parikh DDS has been committed to creating beautiful, healthy smiles. His main priorities are oral health and patient care. He received his education from the highly regarded GDCH in Ahmedabad, India, and from numerous lecturers at Loma Linda University, UCLA, UCSF, UOP, and other institutions. His continual pursuit of better methods, depth of understanding, and breadth of experience make him skilled in numerous dental procedures including Dental Implants, Dental Veneers and Crowns, Dentures and many more.

As a General Dentist, he has invested many hours in continuing education and constantly updated and educated in dentistry. He graduated from the United States Dental Institute with continuous education in orthodontics and for dental implants, he has been trained by many national and international surgeons to become an Associate Fellow of AAID and a Fellow of ICOI and GDIA. He is passionate about achieving excellence in dentistry with a focus on Dental Implants.

He is happily married with three children, and he likes to play table tennis and golf in his free time. He enjoys riding and trekking as well. You will feel at ease in a challenging dental setting thanks to his extensive knowledge and attention to detail.`,
  };

  return (
    <section className="bg-white py-8 sm:py-10 lg:py-12 xl:py-16">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-10 text-center sm:mb-14"
        >
          <h2 className="mb-5 text-[27px] font-normal text-gray-900 sm:text-3xl lg:text-4xl xl:text-5xl">
            Our Doctor
          </h2>

          <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
            Meet our experienced dental professional who is dedicated to
            providing exceptional care and creating beautiful, healthy smiles
            for our patients in Manteca, CA.
          </p>
        </motion.div>

        {/* Main Content: Shared Hover Area */}
        <div
          className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-12"
          onMouseEnter={() => setHoveredDoctor(testimonial.name)}
          onMouseLeave={() => setHoveredDoctor(null)}
        >

          {/* Left Column: Testimonial and Experience */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center gap-6 rounded-3xl bg-gray-50 p-5 sm:gap-8 sm:p-8 lg:p-10"
          >

            {/* Doctor Testimonial Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-gray-100 bg-white p-5 shadow-md transition-shadow duration-300 hover:shadow-lg sm:p-6"
              tabIndex={0}
              onFocus={() => setHoveredDoctor(testimonial.name)}
            >
              <div className="flex items-start gap-4">

                {/* Doctor Avatar */}
                <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full ring-2 ring-green-100">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>

                {/* Testimonial Content */}
                <div className="min-w-0 flex-1">
                  <h3
                    className={`mb-2 text-lg font-semibold sm:text-xl ${testimonial.nameColor}`}
                  >
                    {testimonial.name}
                  </h3>

                  <p className="text-[15px] leading-7 text-gray-700 sm:text-base">
                    {testimonial.text}
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-sm font-medium text-green-700">
                    <svg
                      className="h-5 w-5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>

                    <span>Dedicated to Patient Care</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Experience Highlight Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-8"
            >
              <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:text-left">

                {/* Experience Icon */}
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-green-50 text-green-700">
                  <svg
                    className="h-9 w-9"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.7}
                      d="M12 15l-2 5-1-3-3-1 5-2m1 1l2 5 1-3 3-1-5-2M12 3l2.2 1.2 2.5-.1 1.1 2.3 2.1 1.4-.5 2.5.5 2.5-2.1 1.4-1.1 2.3-2.5-.1L12 17l-2.2-1.2-2.5.1-1.1-2.3-2.1-1.4.5-2.5-.5-2.5 2.1-1.4 1.1-2.3 2.5.1L12 3z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.7}
                      d="M9 10l2 2 4-4"
                    />
                  </svg>
                </div>

                {/* Experience Text */}
                <div>
                  <p className="text-3xl font-bold text-green-700 sm:text-4xl">
                    25+ Years
                  </p>

                  <h3 className="mt-1 text-lg font-semibold text-gray-900">
                    Experience in Dentistry
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-gray-600 sm:text-base">
                    Dedicated to personalized dental care, advanced techniques,
                    and creating beautiful, healthy smiles for patients in
                    Manteca and Stockton, CA.
                  </p>
                </div>
              </div>

              {/* Decorative Accent */}
              <div className="mt-6 h-1 w-full overflow-hidden rounded-full bg-gray-100">
                <div className="h-full w-2/3 rounded-full bg-green-600" />
              </div>
            </motion.div>

          </motion.div>

          {/* Right Column: Doctor Image and Biography */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative min-h-[600px] overflow-hidden rounded-2xl bg-white shadow-xl sm:min-h-[700px] lg:min-h-[750px]"
          >

            {/* Default Doctor Image */}
            <motion.div
              animate={{
                opacity: hoveredDoctor ? 0 : 1,
                scale: hoveredDoctor ? 0.98 : 1,
              }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              <Image
                src="/Rujul.jpeg"
                alt="Dr. Rujul G. Parikh DDS"
                fill
                priority
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              {/* Image Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <div className="inline-block rounded-xl border border-white/30 bg-white/95 px-5 py-4 shadow-lg">
                  <p className="text-lg font-bold text-gray-900 sm:text-xl">
                    Dr. Rujul G. Parikh DDS
                  </p>

                  <p className="mt-1 text-sm text-gray-600">
                    General &amp; Implant Dentist
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Full Biography Overlay */}
            <AnimatePresence>
              {hoveredDoctor === testimonial.name && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 z-10 overflow-y-auto overscroll-contain bg-white p-5 sm:p-8 lg:p-10"
                >
                  <div className="mx-auto w-full max-w-2xl">

                    {/* Biography Heading Only */}
                    <div className="mb-5">
                      <h4 className="text-lg font-semibold text-gray-900 sm:text-xl">
                        About Dr. Parikh
                      </h4>

                      <div className="mt-2 h-1 w-16 rounded-full bg-green-600" />
                    </div>

                    {/* Complete Biography */}
                    <div className="space-y-4 pb-6 text-sm leading-7 text-gray-600 sm:text-base">
                      {testimonial.fullBio
                        .split('\n\n')
                        .map((paragraph, index) => (
                          <p key={index}>{paragraph}</p>
                        ))}
                    </div>

                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </motion.div>

        </div>
      </div>
    </section>
  );
}