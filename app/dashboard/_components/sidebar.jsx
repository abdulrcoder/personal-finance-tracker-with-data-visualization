"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebarLinks = [
  { name: "Dashboard", path: "/dashboard", icon: "🏠" },
  { name: "Transactions", path: "/dashboard/transactions", icon: "💳" },
  { name: "Analytics", path: "/dashboard/analytics", icon: "📊" },
  { name: "Settings", path: "/dashboard/settings", icon: "⚙️" },
  { name: "Help", path: "/dashboard/help", icon: "❓" },
];

const Sidebar = ({ closeSidebar }) => {
  const pathname = usePathname();

  return (
    <div className="p-8 bg-[#171717] h-full">
      <h2 className="text-2xl font-bold text-whitesmoke mb-6">
        Finance Tracker
      </h2>
      <nav>
        <ul className="space-y-4">
          {sidebarLinks.map((link, index) => {
            const isActive = pathname === link.path;

            return (
              <li key={index}>
                <Link
                  href={link.path}
                  onClick={closeSidebar} // Close sidebar on link click
                  className={`flex items-center space-x-4 p-2 rounded-lg transition duration-200 ${
                    isActive
                      ? "bg-blue-600 text-whitesmoke font-bold"
                      : "text-white hover:bg-blue-600 hover:text-whitesmoke"
                  }`}
                >
                  <span className="text-lg">{link.icon}</span>
                  <span className="text-lg">{link.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
