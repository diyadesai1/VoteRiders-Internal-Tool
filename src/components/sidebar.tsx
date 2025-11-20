import './sidebar.css'

const mainLinks = [
  { label: "Dashboard", icon: "🏠", active: true },
  { label: "Important Links", icon: "🔗" },
  { label: "Helpline Flow", icon: "📞" },
  { label: "Chat Flow", icon: "💬" },
];

const resourceLinks = [
  { label: "Voter Agreement", icon: "📄" },
  { label: "FAQs", icon: "❓" },
  { label: "Support", icon: "🛟" },
];

export function Sidebar() {
  return (
    <aside className="dashboard-sidebar">
      <div className="sidebar-brand">
        <p className="sidebar-brand__title">VoteRiders</p>
        <p className="sidebar-brand__subtitle">Volunteer Dashboard</p>
      </div>

      <nav className="sidebar-nav">
        <div className="sidebar-section">
          {mainLinks.map((link) => (
            <a
              key={link.label}
              href="#"
              className={`sidebar-link ${
                link.active ? "sidebar-link--active" : ""
              }`}
            >
              <span className="sidebar-link__icon" aria-hidden>
                {link.icon}
              </span>
              {link.label}
            </a>
          ))}
        </div>

        <div className="sidebar-section">
          <span className="sidebar-section__label">Resources</span>
          {resourceLinks.map((link) => (
            <a key={link.label} href="#" className="sidebar-link">
              <span className="sidebar-link__icon" aria-hidden>
                {link.icon}
              </span>
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      <div className="sidebar-footer">
        <p>Version 1.0.0</p>
        <p>© {new Date().getFullYear()} VoteRiders</p>
      </div>
    </aside>
  );
}

