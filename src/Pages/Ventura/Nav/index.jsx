import React from "react";
import { FaBell, FaUser } from "react-icons/fa";
import { PanalNav } from "../../../Components/PanalNav";

export const Nav = () => {
  const notifications = [
    {
      id: 1,
      message:
        "New user registered Server downtime reported Server downtime reported",
      link: "/ventura/notifications/1",
    },
    {
      id: 2,
      message: "Server downtime reported",
      link: "/ventura/notifications/2",
    },
    {
      id: 3,
      message:
        "New message received Server downtime reported Server downtime reported",
      link: "/ventura/notifications/3",
    },
    {
      id: 4,
      message:
        "New message received Server downtime reported Server downtime reported",
      link: "/ventura/notifications/3",
    },
    {
      id: 5,
      message:
        "New message received Server downtime reported Server downtime reported",
      link: "/ventura/notifications/3",
    },
    {
      id: 6,
      message:
        "New message received Server downtime reported Server downtime reported",
      link: "/ventura/notifications/3",
    },
  ];
  return (
    <PanalNav
      username="John"
      notifications={notifications}
      NotificationIcon={FaBell}
      ProfileIcon={FaUser}
      notificationLink="/ventura/notifications"
      profileLink="/ventura/profile"
      settingsLink="/ventura/settings"
    />
  );
};
