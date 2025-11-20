import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Splash from './pages/splash'
import Login from './pages/login'
import DashboardPage from './pages/dashboard'

function App() {
  const [showSplash, setShowSplash] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 4500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <BrowserRouter>
      {showSplash ? (
        <Splash />
      ) : (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      )}
    </BrowserRouter>
  )
}

export default App
