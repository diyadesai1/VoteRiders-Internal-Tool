import './dashboard.css';
import { Header } from "../components/header";
import { Sidebar } from "../components/sidebar";

export default function DashboardPage() {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="dashboard-main">
        <Header pageName="Dashboard" userName="Volunteer User" />
        <section className="dashboard-body">
          <div className="dashboard-content">
            Dashboard content coming soon.
          </div>
        </section>
      </div>
    </div>
  );
}

