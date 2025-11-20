import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Splash from './pages/splash'
import Login from './pages/login'
import DashboardPage from './pages/dashboard'

function AppContent() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    </>
  )
}

function App() {
  const [showSplash, setShowSplash] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 4500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <BrowserRouter>
      {showSplash ? (
        <Splash />
      ) : !isLoggedIn ? (
        <Login onLogin={() => setIsLoggedIn(true)} />
      ) : (
        <AppContent />
      )}
    </BrowserRouter>
  )
}

export default App
