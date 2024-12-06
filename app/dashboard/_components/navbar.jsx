import React from "react";
import { Bell, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <div className="flex items-center justify-between px-6 py-3 bg-[#171717]">
      {/* Hamburger/Cross Menu */}
      <button
        onClick={toggleSidebar}
        className="text-gray-300 text-2xl md:hidden"
        aria-label="Toggle Sidebar"
      >
        {isSidebarOpen ? "×" : "☰"}
      </button>

      {/* Search Bar */}
      <div className="hidden md:flex items-center w-full max-w-lg mx-6 rounded-full shadow-lg bg-[#1F1F1F] px-4 py-2">
        <input
          type="text"
          placeholder="Search..."
          className="ml-2 focus:outline-none bg-transparent border-none text-sm w-full text-white"
        />
        <Search className="text-gray-500 w-5 h-5 cursor-pointer" />
      </div>

      {/* User Actions */}
      <div className="flex items-center gap-4">
        <div className="relative">
          <Button className="p-2 text-gray-600 rounded-full hover:bg-[#1F1F1F]">
            <Bell size={30} />
          </Button>
          {/* Notification Count Badge */}
          <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
            3
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
