import React from "react";
import { NavLink } from "react-router-dom";

export const Navigation = ({ links=[], logo, className="" }) => {
    
  return (
    <nav className={` p-4 ${className}`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-lg">
          {logo ? <img src={logo} alt="Logo" className="h-10" /> : "MyApp"}
        </div>
        <ul className="flex space-x-4">
          {links?.map((link, index) => ( 
            <li key={index}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive ? "text-black font-bold" : "text-gray-600"
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
