'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

export default function AdminLogin() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Check if already authenticated
    const isAuthenticated = localStorage.getItem('adminAuthenticated')
    if (isAuthenticated) {
      router.push('/admin/dashboard')
    }
  }, [router])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Admin authentication
    if (username === 'admin' && password === 'dental2024') {
      localStorage.setItem('adminAuthenticated', 'true')
      router.push('/admin/dashboard')
    } else {
      alert('Invalid credentials')
    }
    
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
      <div className="max-w-md w-full space-y-5 sm:space-y-6 lg:space-y-8">
        <div className="text-center">
          <Link href="/" className="flex justify-center">
            <Image
              src="/logo.webp"
              alt="Spreckels Park Dental Logo"
              width={200}
              height={80}
              className="h-10 sm:h-14 lg:h-16 w-auto"
            />
          </Link>
          <h2 className="mt-3 sm:mt-4 lg:mt-6 text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
            Admin Login
          </h2>
          <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-gray-600">
            Access your admin dashboard
          </p>
        </div>
        
        <form className="mt-4 sm:mt-6 lg:mt-8 space-y-4 sm:space-y-5 lg:space-y-6" onSubmit={handleLogin}>
          <div className="space-y-4 sm:space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-1">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 block w-full px-4 py-3 sm:py-2.5 text-base sm:text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#441018] focus:border-[#441018] transition-colors"
                placeholder="Enter username"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-1">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-4 py-3 sm:py-2.5 text-base sm:text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#441018] focus:border-[#441018] transition-colors"
                placeholder="Enter password"
              />
            </div>
          </div>
          
          <div className="pt-2">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center py-3 sm:py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-base sm:text-sm font-medium text-white bg-[#441018] hover:bg-[#5a1a2a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#441018] disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            >
              {isLoading ? 'Signing in...' : 'Sign in'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
} 