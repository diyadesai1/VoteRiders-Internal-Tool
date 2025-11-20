import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { auth } from './firebase'
import { onAuthStateChanged, type User } from 'firebase/auth'
import Splash from './pages/splash'
import Login from './pages/login'
import DashboardPage from './pages/dashboard'

function AppContent({ user }: { user: User | null }) {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/dashboard" element={<DashboardPage user={user} />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

function App() {
  const [showSplash, setShowSplash] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 4500)
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
      setIsLoggedIn(!!user)
    })
    return () => {
      clearTimeout(timer)
      unsubscribe()
    }
  }, [])

  return (
    <BrowserRouter>
      {showSplash ? (
        <Splash />
      ) : !isLoggedIn ? (
        <Login onLogin={() => setIsLoggedIn(true)} />
      ) : (
        <AppContent user={currentUser} />
      )}
    </BrowserRouter>
  )
}

export default App
