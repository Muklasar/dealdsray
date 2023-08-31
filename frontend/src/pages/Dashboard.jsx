import { Outlet } from "react-router-dom";
import DashboardFooter from "../components/footer/DashboardFooter";
import DashboardHeader from "../components/nav/DashboardHeader";
import Sidebar from "../components/nav/Sidebar";

const Dashboard = () => {
  return (
    <div class="">
      <Sidebar />
      <DashboardHeader />
      <Outlet />
    </div>
  );
};

export default Dashboard;
