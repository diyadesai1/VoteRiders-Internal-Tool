import './dashboard.css';
import { Header } from "../components/header";
import { Sidebar } from "../components/sidebar";
import { type User } from 'firebase/auth';

export default function DashboardPage({ user }: { user: User | null }) {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="dashboard-main">
        <Header pageName="Dashboard" photoURL={user?.photoURL ?? undefined} userName={user?.displayName ?? 'Volunteer User'}  />
        <section className="dashboard-body">
          <div className="dashboard-content">
            Dashboard content coming soon.
          </div>
        </section>
      </div>
    </div>
  );
}

