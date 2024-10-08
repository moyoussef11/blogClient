import { Outlet } from "react-router-dom";
import SideBar from "../components/Dashboard/SideBar";

const Dashboard = () => {
  return (
    <div className="px-3 md:px-10 py-3 flex">
      <div className="hidden md:block flex-[2]">
        <SideBar />
      </div>
      <div className="w-full flex-[10]">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
