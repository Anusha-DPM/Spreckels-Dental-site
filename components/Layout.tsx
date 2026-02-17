'use client'

import Header from './Header'
import Footer from './Footer'

interface LayoutProps {
  children: React.ReactNode
  showHeader?: boolean
  showFooter?: boolean
}

export default function Layout({ 
  children, 
  showHeader = true, 
  showFooter = true 
}: LayoutProps) {
  return (
    <main className="min-h-screen">
      {showHeader && <Header />}
      {children}
      {showFooter && <Footer />}
    </main>
  )
} 