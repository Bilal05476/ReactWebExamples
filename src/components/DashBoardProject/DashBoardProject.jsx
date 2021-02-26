import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";
import AppNavbar from "./AppNavbar";
import "./css/dashpro.css";
import BottomNav from "./BottomNavigations";

const DashBoardProject = () => {
  return (
    <>
      <AppNavbar />
      <div className="dash">
        <div className="sidebarComp">
          <Sidebar />
        </div>
        <div className="dashComp">
          <Dashboard />
        </div>
      </div>
      <div className="bottomNavComp">
        <BottomNav />
      </div>
    </>
  );
};

export default DashBoardProject;
