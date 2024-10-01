import { Outlet } from "react-router-dom";

// components
import { Sidebar, Navbar } from "../components";

function MainLayout() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="grow bg-softGrayBackground lg:ml-[103px]">
        <Navbar />
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
