import { Profile } from "./profile";

interface HeaderProps {
  pageName: string;
  welcomeMessage?: string;
  userName?: string;
}

export function Header({ pageName, welcomeMessage, userName }: HeaderProps) {
  const barStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '1rem',
    padding: '0.85rem 1.5rem',
    background: '#ffffff',
    borderBottom: '1px solid #e5e5e5',
    boxShadow: '0 2px 4px rgba(0,0,0,0.04)',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  }
  const titleWrapStyle: React.CSSProperties = { display: 'flex', flexDirection: 'column' }
  const titleStyle: React.CSSProperties = { margin: 0, fontSize: '1.25rem', fontWeight: 600 }
  const welcomeStyle: React.CSSProperties = { margin: 0, fontSize: '.75rem', color: '#666' }

  return (
    <header className="dashboard-header" style={barStyle}>
      <div className="dashboard-header__title" style={titleWrapStyle}>
        <h2 style={titleStyle}>{pageName}</h2>
        {welcomeMessage && <p style={welcomeStyle}>{welcomeMessage}</p>}
      </div>
      <Profile name={userName || ''} role="Volunteer" />
    </header>
  )
}
