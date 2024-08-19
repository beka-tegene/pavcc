import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export const PanalNav = ({
  username,
  notifications = [],
  NotificationIcon,
  ProfileIcon,
  notificationLink,
  profileLink,
  settingsLink,
  link,
}) => {
  const [isNotificationDropdownOpen, setIsNotificationDropdownOpen] =
    useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleNotificationClick = () => {
    setIsNotificationDropdownOpen(!isNotificationDropdownOpen);
    setIsProfileDropdownOpen(false);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
    setIsNotificationDropdownOpen(false);
  };

  return (
    <header className="bg-gray-800 text-white flex justify-between items-center p-4">
      <div className="text-white text-sm">Welcome, {username}!</div>
      <div className="flex items-center space-x-7">
        <div className="relative">
          <button onClick={handleNotificationClick} className="relative">
            <NotificationIcon className="text-xl" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
              {notifications?.length}
            </span>
          </button>
          {isNotificationDropdownOpen && (
            <div className="fixed w-full">
              <div
                className="bg-[#0001] top-0 right-0 left-0 bottom-0 fixed"
                onClick={() => setIsNotificationDropdownOpen(false)}
              ></div>
              <div className="fixed right-10 mt-2 w-72 bg-white text-gray-800 rounded-md shadow-lg z-50 overflow-hidden p-2">
                <ul>
                  {notifications?.slice(0, 5)?.map((notification) => (
                    <NavLink
                      to={link + notification._id}
                      key={notification?._id}
                      className="block p-2 border-b hover:bg-gray-100"
                    >
                      <div className="flex items-center justify-between">
                        <li className="text-sm font-semibold capitalize">
                          Order message for Admin
                        </li>
                        <span className="text-xs text-gray-400">2:00</span>
                      </div>
                      <li className="text-xs">{notification?.message.slice(0 , 50)}...</li>
                    </NavLink>
                  ))}
                  {notifications?.length > 5 && (
                    <li className="flex flex-col items-center p-2">
                      <NavLink
                        to={notificationLink} // using dynamic link prop
                        className="block font-semibold text-sm hover:text-blue-500 text-blue-700 w-fit"
                      >
                        See more...
                      </NavLink>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          )}
        </div>
        <div className="relative">
          <button onClick={handleProfileClick} className="relative">
            <ProfileIcon className="text-xl" />
          </button>
          {isProfileDropdownOpen && (
            <div className="fixed w-full">
              <div
                className="bg-[#0001] top-0 right-0 left-0 bottom-0 fixed"
                onClick={() => setIsProfileDropdownOpen(false)}
              ></div>
              <div className="fixed right-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg z-10 overflow-hidden p-2">
                <ul>
                  <li className="p-2 border-b hover:bg-gray-100">
                    <NavLink to={profileLink} className="block text-sm">
                      View Profile
                    </NavLink>
                  </li>
                  <li className="p-2 hover:bg-gray-100">
                    <NavLink to={settingsLink} className="block text-sm">
                      Settings
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
