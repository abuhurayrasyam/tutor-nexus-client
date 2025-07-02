import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import Sidebar from "../features/dashboard/components/Sidebar";
import Topbar from "../features/dashboard/components/Topbar";

const DashboardLayout = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
      if (location.pathname === "/dashboard") {
        navigate("/dashboard");
      }
    }, [location.pathname, navigate]);

  return (
    <div className="flex h-screen bg-accent overflow-hidden">
      {isSidebarOpen && (
        <div className="fixed inset-0 z-30 bg-black/40 md:hidden" onClick={() => setIsSidebarOpen(false)}></div>
      )}

      <Sidebar isSidebarOpen={isSidebarOpen}></Sidebar>

      <div className="flex-1 flex flex-col w-full">
        <Topbar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}></Topbar>
        <main className="flex-1 overflow-y-auto bg-base-100">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;