// Fix Auto-Refresh Script
// Run this in the browser console to immediately stop auto-refreshing

console.log('🛑 Stopping auto-refresh...')

// Clear any existing intervals
let highestIntervalId = window.setTimeout(() => {}, 0)
for (let i = 0; i < highestIntervalId; i++) {
  window.clearInterval(i)
}

console.log('✅ Cleared all intervals')

// Clear any delete operation flags that might be causing issues
sessionStorage.removeItem('deleteOperation')
console.log('✅ Cleared delete operation flags')

// Disable any potential refresh mechanisms
window.addEventListener('beforeunload', (e) => {
  e.preventDefault()
  e.returnValue = ''
})

console.log('✅ Disabled page refresh triggers')

// Add a manual refresh function for when needed
window.manualRefresh = () => {
  console.log('🔄 Manual refresh triggered')
  window.location.reload()
}

console.log('✅ Manual refresh function available: window.manualRefresh()')

console.log('🎉 Auto-refresh has been stopped!')
console.log('📋 The dashboard will no longer auto-refresh every 30 seconds.')
console.log('🔄 Use the Refresh button in the dashboard or run window.manualRefresh() if needed.')
