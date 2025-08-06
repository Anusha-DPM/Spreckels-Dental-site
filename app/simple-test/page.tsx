export default function SimpleTestPage() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundColor: '#f3f4f6',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '0.5rem',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        textAlign: 'center'
      }}>
        <h1 style={{ 
          fontSize: '2rem', 
          fontWeight: 'bold', 
          color: '#1f2937',
          marginBottom: '1rem'
        }}>
          🎉 Next.js is Working!
        </h1>
        <p style={{ 
          color: '#6b7280',
          marginBottom: '1rem'
        }}>
          If you can see this page, your Next.js application is running correctly.
        </p>
        <div style={{ 
          fontSize: '0.875rem',
          color: '#374151'
        }}>
          <div>✅ Server: Running on localhost:3000</div>
          <div>✅ Next.js: Working</div>
          <div>✅ Basic Components: Loading</div>
        </div>
        <div style={{ marginTop: '1.5rem' }}>
          <a 
            href="/debug" 
            style={{
              display: 'inline-block',
              backgroundColor: '#2563eb',
              color: 'white',
              padding: '0.5rem 1rem',
              borderRadius: '0.25rem',
              textDecoration: 'none',
              fontWeight: 'bold'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#1d4ed8'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#2563eb'}
          >
            Test Firebase Connection
          </a>
        </div>
      </div>
    </div>
  )
} 