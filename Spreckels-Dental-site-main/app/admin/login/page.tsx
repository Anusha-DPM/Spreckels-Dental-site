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
      alert('Invalid credentials. Please use admin/dental2024')
    }
    
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <Link href="/" className="flex justify-center">
            <Image
              src="/logo.webp"
              alt="Spreckels Park Dental Logo"
              width={200}
              height={80}
              className="h-16 w-auto"
            />
          </Link>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Admin Login
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Access your admin dashboard
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#441018] focus:border-[#441018]"
                placeholder="admin"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#441018] focus:border-[#441018]"
                placeholder="admin"
              />
            </div>
          </div>
          
          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#441018] hover:bg-[#5a1a2a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#441018] disabled:opacity-50"
            >
              {isLoading ? 'Signing in...' : 'Sign in'}
            </button>
          </div>
          
          <div className="text-center space-y-2">
            <p className="text-xs text-gray-500">
              Admin credentials: admin / dental2024
            </p>
            <button
              type="button"
              onClick={() => {
                localStorage.removeItem('adminAuthenticated')
                alert('Logged out successfully. Please refresh the page.')
              }}
              className="text-xs text-red-600 hover:text-red-800 underline"
            >
              Clear Login Session
            </button>
          </div>
        </form>
      </div>
    </div>
  )
} 