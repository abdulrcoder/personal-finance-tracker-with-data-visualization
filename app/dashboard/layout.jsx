"use client";
import React, { useState } from "react";
import Navbar from "./_components/navbar";
import Sidebar from "./_components/sidebar";

// export const metadata = {
//   title: "Dashboard",
//   description: "User dashboard for managing finances",
// };

const DashboardLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="h-screen grid grid-rows-[auto_1fr] md:grid-cols-[250px_1fr] md:grid-rows-[auto_1fr]">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:relative md:transform-none bg-[#1F1F1F] transition-transform duration-300 ease-in-out`}
      >
        <Sidebar closeSidebar={closeSidebar} />
      </aside>

      {/* Main Content */}
      <div className="relative overflow-auto bg-[#212121]">
        {/* Navbar */}
        <header className="fixed top-0 left-0 right-0 bg-[#212121] z-50 md:left-64 md:w-[calc(100%-250px)]">
          <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
        </header>

        {/* Main Content */}
        <main className="pt-20 px-4 md:pt-10">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
