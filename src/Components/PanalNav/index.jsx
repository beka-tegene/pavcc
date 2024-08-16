// components/AdminNavBar.js
import React from "react";
import { NavLink } from "react-router-dom";
import { FaBell, FaUser, FaCog } from "react-icons/fa";

export const PanelNav = ({ username }) => {
  return (
    <header className="bg-gray-800 text-white flex justify-between items-center p-4">
      <div className="text-white text-sm">Welcome, {username}!</div>
      <div className="flex items-center space-x-4">
        <button className="relative">
          <FaBell className="text-xl" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1 ">
            3
          </span>
        </button>
        <NavLink to="/profile">
          <FaUser className="text-xl" />
        </NavLink>
        <button className="ml-4 text-sm text-gray-300">
          <FaCog className="text-xl" />
        </button>
      </div>
    </header>
  );
};
