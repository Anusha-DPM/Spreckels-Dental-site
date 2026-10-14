'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface Testimonial {
  name: string;
  text: string;
  avatar: string;
  nameColor: string;
}

export default function JourneySection() {
  const testimonial: Testimonial = {
    name: 'Dr. Rujul G. Parikh DDS',
    text: "With over 25 years of experience in dentistry, I've dedicated my career to creating beautiful, healthy smiles. Our commitment to patient care and advanced dental techniques has made Spreckels Park Dental a trusted name in Manteca.",
    avatar: '/Rujul.jpeg',
    nameColor: 'text-green-600',
  };

  return (
    <section className="bg-white py-8 sm:py-10 lg:py-12 xl:py-16">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-10 text-center sm:mb-12 lg:mb-16"
        >
          <h2 className="mb-6 text-[27px] font-normal text-gray-900 sm:text-3xl lg:text-4xl xl:text-5xl">
            Our journey to dental excellence
          </h2>

          <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg lg:text-xl">
            Over the years, we&apos;ve grown from a small practice to a trusted
            name in dental care, but our core belief remains the same —
            everyone deserves the right to a healthy, beautiful smile.
          </p>
        </motion.div>

        {/* Main Content - Two Column Layout */}
        <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">

          {/* Left Column - Doctor Testimonial */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center rounded-3xl bg-gray-50 p-5 sm:p-8 lg:p-10 xl:p-12"
          >
            {/* Doctor Testimonial Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-gray-100 bg-white p-5 shadow-md transition-shadow duration-300 hover:shadow-lg sm:p-6"
            >
              <div className="flex items-start gap-4">

                {/* Doctor Avatar */}
                <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full ring-2 ring-green-100">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                </div>

                {/* Testimonial Content */}
                <div className="min-w-0 flex-1">
                  <h3
                    className={`mb-2 text-lg font-semibold sm:text-xl ${testimonial.nameColor}`}
                  >
                    {testimonial.name}
                  </h3>

                  <p className="text-[15px] leading-relaxed text-gray-700 sm:text-base">
                    {testimonial.text}
                  </p>

                  {/* Patient Care Highlight */}
                  <div className="mt-5 flex items-center gap-2 text-sm font-medium text-green-700">
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
              className="mt-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:mt-8 sm:p-8"
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

                {/* Experience Content */}
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

          {/* Right Column - Team Photograph */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative h-[400px] overflow-hidden rounded-2xl shadow-xl sm:h-[500px] lg:h-[600px] xl:h-[700px]"
          >
            <Image
              src="/office2.webp"
              alt="Dental team providing exceptional care"
              fill
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="object-cover object-center"
            />

            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}