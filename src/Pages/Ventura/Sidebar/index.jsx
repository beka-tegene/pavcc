import React from "react";
import { Sidebar } from "../../../Components/Sidebar";
import { MdDashboard } from "react-icons/md";
import { FaChartLine, FaCog, FaRegLightbulb } from "react-icons/fa";

export const AdminSidebar = () => {
  const sideLinks = [
    { path: "/ventura/dashboard", name: "Dashboard", icon: MdDashboard },
    { path: "/ventura/all-ideas", name: "Ideas", icon: FaRegLightbulb },
    { path: "/ventura/start-process", name: "Started Process", icon: FaChartLine },
    { path: "/ventura/setting", name: "Settings", icon: FaCog },
  ];
  return (
    <div className="h-full">
      <Sidebar links={sideLinks} />
    </div>
  );
};
