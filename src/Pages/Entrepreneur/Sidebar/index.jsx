import React from "react";
import { FaCog, FaRegLightbulb } from "react-icons/fa";
import { Sidebar } from "../../../Components/Sidebar";
import { MdDashboard } from "react-icons/md";

export const AdminSidebar = () => {
  const sideLinks = [
    { path: "/entrepreneur/dashboard", name: "Dashboard", icon: MdDashboard },
    { path: "/entrepreneur/ideas", name: "Ideas", icon: FaRegLightbulb },
    { path: "/entrepreneur/setting", name: "Settings", icon: FaCog },
  ];
  return (
    <div className="h-full">
      <Sidebar links={sideLinks} />
    </div>
  );
};
