import { Profile } from "./profile";
import './header.css'

interface HeaderProps {
  pageName: string;
  userName?: string;
}

export function Header({ pageName, userName = "Volunteer User" }: HeaderProps) {
  return (
    <header className="dashboard-header">
      <h1 className="dashboard-header__page">{pageName}</h1>
      <Profile name={userName} role="Volunteer" />
    </header>
  );
}
