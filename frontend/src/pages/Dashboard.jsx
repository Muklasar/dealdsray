import { Outlet, useNavigate } from "react-router-dom";
import DashboardFooter from "../components/footer/DashboardFooter";
import DashboardHeader from "../components/nav/DashboardHeader";
import Sidebar from "../components/nav/Sidebar";

const Dashboard = () => {
  const user = localStorage.getItem('email')
  const navigate = useNavigate()
  console.log('email', user)
  if(user===null){
    navigate('/login')
  }
  return (
    <div class="">
      <Sidebar />
      <DashboardHeader />
      <Outlet />
    </div>
  );
};

export default Dashboard;
