import "../styles/dashboard.css";
import { Header } from "../components/header";
import { Sidebar } from "../components/sidebar";

export default function DashboardPage() {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="dashboard-main">
        <Header pageName="Dashboard" />

        <div className="dashboard-content">
          Dashboard content coming soon.
        </div>
      </div>
    </div>
  );
}

