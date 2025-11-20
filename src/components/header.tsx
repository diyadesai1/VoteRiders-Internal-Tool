import { Profile } from "./profile";
import './header.css'
import { useState, useRef, useEffect } from 'react'
import { auth } from '../firebase'
import { signOut } from 'firebase/auth'

interface HeaderProps {
  pageName: string;
  userName?: string;
  photoURL?: string;
}

export function Header({ pageName, userName = "Volunteer User", photoURL }: HeaderProps) {
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!open) return
    function handleOutside(e: MouseEvent) {
      if (!menuRef.current) return
      if (!menuRef.current.contains(e.target as Node)) setOpen(false)
    }
    window.addEventListener('mousedown', handleOutside)
    return () => window.removeEventListener('mousedown', handleOutside)
  }, [open])

  const handleToggle = () => setOpen(o => !o)
  const handleSignOut = async () => { await signOut(auth); setOpen(false) }

  return (
    <header className="dashboard-header">
      <h1 className="dashboard-header__page">{pageName}</h1>
      <div className="header-profile-wrapper" ref={menuRef}>
        <button type="button" className="profile-trigger" onClick={handleToggle} aria-haspopup="true" aria-expanded={open}>
          <Profile name={userName} role="Volunteer" photoURL={photoURL} />
          <span className={`profile-caret ${open ? 'profile-caret--open' : ''}`} aria-hidden>▾</span>
        </button>
        {open && (
          <div className="profile-menu" role="menu">
            <button className="profile-menu__item" role="menuitem" onClick={handleSignOut}>Sign Out</button>
          </div>
        )}
      </div>
    </header>
  );
}
