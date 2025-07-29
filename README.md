# Outgrid Financial Consulting Website

A modern, responsive financial consulting website built with Next.js, Tailwind CSS, and Framer Motion. This project recreates the Outgrid financial consulting website with pixel-perfect accuracy.

## Features

- **Responsive Design**: Fully responsive across mobile, tablet, and desktop devices
- **Modern Animations**: Smooth scroll animations and transitions using Framer Motion
- **Professional UI**: Clean, modern design with gradient backgrounds and professional typography
- **Interactive Components**: FAQ accordion, testimonial carousel, and animated statistics
- **Optimized Images**: Next.js Image optimization for better performance
- **Accessibility**: Semantic HTML and proper ARIA labels

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Font**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd sprekelspark-dental
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
sprekelspark-dental/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page component
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── HeroSection.tsx      # Hero section with CTA
│   ├── TrustedBySection.tsx # Company logos section
│   ├── StatsSection.tsx     # Statistics and metrics
│   ├── ServicesSection.tsx  # Services overview
│   ├── TestimonialSection.tsx # Customer testimonials
│   ├── FAQSection.tsx       # FAQ accordion
│   ├── CTASection.tsx       # Call-to-action section
│   └── Footer.tsx           # Footer with links and social
├── public/                  # Static assets
├── tailwind.config.js       # Tailwind configuration
├── next.config.js          # Next.js configuration
└── package.json            # Dependencies and scripts
```

## Sections

### 1. Header
- Fixed navigation with logo and menu items
- Mobile-responsive hamburger menu
- Call-to-action buttons

### 2. Hero Section
- Gradient background with compelling headline
- Professional team image
- Dual call-to-action buttons

### 3. Trusted By Section
- Company logos grid
- Subtle animations on scroll

### 4. Stats Section
- Key metrics in card format
- Animated counters (can be enhanced)

### 5. Services Section
- Three service cards with icons
- Hover effects and animations

### 6. Testimonial Section
- Customer quote with attribution
- Carousel navigation indicators
- Professional headshot

### 7. FAQ Section
- Expandable accordion
- Smooth animations
- Common questions and answers

### 8. CTA Section
- Gradient background
- Compelling copy and buttons

### 9. Footer
- Company information
- Navigation links
- Social media icons
- Copyright notice

## Customization

### Colors
The color scheme is defined in `tailwind.config.js`:
- Primary blues: `#3b82f6` to `#1e3a8a`
- Grays: `#f9fafb` to `#111827`

### Typography
- Font: Inter (Google Fonts)
- Weights: 300, 400, 500, 600, 700, 800, 900

### Animations
- Scroll-triggered animations using Framer Motion
- Hover effects and transitions
- Custom keyframes in `globals.css`

## Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## Performance Optimizations

- Next.js Image component for optimized images
- Lazy loading for components
- Efficient animations with Framer Motion
- Tailwind CSS for minimal bundle size

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support or questions, please open an issue in the repository. 