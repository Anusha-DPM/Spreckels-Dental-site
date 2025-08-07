import Link from 'next/link'

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            🛠️ Admin Dashboard
          </h1>
          
          <p className="text-gray-600 mb-8">
            Welcome to your project management dashboard. Choose an option below to get started.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Blog Management Card */}
            <Link href="/admin/dashboard" className="block">
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-2xl">📝</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Blog Management</h3>
                    <p className="text-sm text-gray-600">Upload and manage blog posts</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500">
                  Create new blog posts, edit existing ones, and manage your content.
                </p>
              </div>
            </Link>

            {/* Firebase Debug Card */}
            <Link href="/debug" className="block">
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-2xl">🔧</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Firebase Debug</h3>
                    <p className="text-sm text-gray-600">Test Firebase connection</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500">
                  Test your Firebase connection and view database contents.
                </p>
              </div>
            </Link>

            {/* Coming Soon Cards */}
            <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">👥</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">User Management</h3>
                  <p className="text-sm text-gray-600">Coming soon</p>
                </div>
              </div>
              <p className="text-sm text-gray-500">
                Manage user accounts and permissions.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">📊</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Analytics</h3>
                  <p className="text-sm text-gray-600">Coming soon</p>
                </div>
              </div>
              <p className="text-sm text-gray-500">
                View website analytics and performance metrics.
              </p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">🚀 Quick Actions</h3>
            <div className="flex flex-wrap gap-2">
              <Link href="/admin/new-post" className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors">
                Create New Blog Post
              </Link>
              <Link href="/admin/dashboard" className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm hover:bg-purple-700 transition-colors">
                View Blog Dashboard
              </Link>
              <Link href="/blog" className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700 transition-colors">
                View Public Blog
              </Link>
              <Link href="/" className="px-4 py-2 bg-gray-600 text-white rounded-lg text-sm hover:bg-gray-700 transition-colors">
                View Website
              </Link>
            </div>
          </div>

          {/* Blog Status */}
          <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
            <h3 className="font-semibold text-green-900 mb-2">📊 Blog System Status</h3>
            <div className="text-sm text-green-800 space-y-1">
              <p>✅ Blog posts are automatically saved to Firebase database</p>
              <p>✅ Published posts appear on the public blog page</p>
              <p>✅ System includes fallback to localStorage if Firebase is unavailable</p>
              <p>✅ Real-time status monitoring in the blog dashboard</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 