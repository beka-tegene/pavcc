import React from "react";
import { NavLink } from "react-router-dom";

export const NotificationsPage = ({ notifications }) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Notifications</h1>
      <ul className="bg-white shadow rounded-md divide-y divide-gray-200">
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <NavLink
              key={notification.id}
              to={notification.link}
              className="block p-4 hover:bg-gray-100"
            >
              <li className="">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-800">
                    {notification.message}
                  </span>
                  <span className="text-xs text-gray-400">2:00</span>
                </div>
                <span className="block text-sm text-gray-600">
                  Click to view details
                </span>
              </li>
            </NavLink>
          ))
        ) : (
          <li className="p-4 text-gray-500 text-center">
            No notifications available.
          </li>
        )}
      </ul>
    </div>
  );
};
