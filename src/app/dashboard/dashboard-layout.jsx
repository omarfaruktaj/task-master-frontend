import { Outlet } from "react-router-dom";
import Header from "../../components/layout/header";
import Sidebar from "../../components/layout/Sidebar";

export default function DashboardLayout() {
  return (
    <div className="flex h-screen ">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-4 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
