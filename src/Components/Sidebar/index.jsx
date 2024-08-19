import React from "react";
import { LuLogOut } from "react-icons/lu";
import { NavLink } from "react-router-dom";

export const Sidebar = ({ links = [] }) => {
  return (
    <nav className="w-full h-full bg-gray-800 text-white flex flex-col p-4">
      <h2 className="text-xl font-semibold mb-4">Navigation</h2>
      <div className="flex flex-col justify-between h-full py-4">
        <ul className="flex flex-col gap-4">
          {links.map(({ path, name, icon: Icon }, index) => (
            <li key={index}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-3 p-2 bg-gray-700 rounded"
                    : "flex items-center gap-3 p-2 hover:bg-gray-700 rounded"
                }
              >
                {Icon && <Icon />}
                <span>{name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
        <NavLink
          to={"/"}
          className={"flex items-center gap-3 p-2 hover:bg-gray-700 rounded"}
        >
          <LuLogOut />
          <span>Logout</span>
        </NavLink>
      </div>
    </nav>
  );
};
