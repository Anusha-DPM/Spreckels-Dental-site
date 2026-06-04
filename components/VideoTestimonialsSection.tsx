'use client'

import VideoTestimonialFeature from './VideoTestimonialFeature'
import { VIDEO_TESTIMONIAL_HEADING } from './videoTestimonialsShared'

export default function VideoTestimonialsSection() {
  return (
    <VideoTestimonialFeature
      title={VIDEO_TESTIMONIAL_HEADING}
      showViewAllButton
    />
  )
}
