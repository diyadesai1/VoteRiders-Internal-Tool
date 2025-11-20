import './dashboard.css';
import { Header } from "../components/header";
import { Sidebar } from "../components/sidebar";
import { type User } from 'firebase/auth';

export default function DashboardPage({ user }: { user: User | null }) {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="dashboard-main">
        <Header pageName="Dashboard" userName={user?.displayName ?? 'Volunteer User'} photoURL={user?.photoURL ?? undefined} />
        <section className="dashboard-body">
          <div className="dashboard-content">
            Dashboard content coming soon.
          </div>
        </section>
      </div>
    </div>
  );
}

