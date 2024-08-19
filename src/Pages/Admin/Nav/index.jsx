import React, { useEffect, useState } from "react";
import { FaBell, FaUser } from "react-icons/fa";
import { PanalNav } from "../../../Components/PanalNav";
import axios from "axios";

export const Nav = () => {
  // const notifications = [
  //   {
  //     id: 1,
  //     message:
  //       "New user registered Server downtime reported Server downtime reported",
  //     link: "/admin/notifications/1",
  //   },
  //   {
  //     id: 2,
  //     message: "Server downtime reported",
  //     link: "/admin/notifications/2",
  //   },
  //   {
  //     id: 3,
  //     message:
  //       "New message received Server downtime reported Server downtime reported",
  //     link: "/admin/notifications/3",
  //   },
  //   {
  //     id: 4,
  //     message:
  //       "New message received Server downtime reported Server downtime reported",
  //     link: "/admin/notifications/3",
  //   },
  //   {
  //     id: 5,
  //     message:
  //       "New message received Server downtime reported Server downtime reported",
  //     link: "/admin/notifications/3",
  //   },
  //   {
  //     id: 6,
  //     message:
  //       "New message received Server downtime reported Server downtime reported",
  //     link: "/admin/notifications/3",
  //   },
  // ];
  const [notifications, setNotifications] = useState();
  const token = localStorage.getItem("token");
  useEffect(() => {
    fetchIdeaNotifications();
  }, []);
  const fetchIdeaNotifications = async () => {
    try {
      const response = await axios.get(`http://localhost:4500/api/v1/not`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setNotifications(response.data);
    } catch (error) {
      console.log({ error });
    }
  };
  return (
    <PanalNav
      username="John"
      notifications={notifications}
      NotificationIcon={FaBell}
      ProfileIcon={FaUser}
      notificationLink="/admin/notifications"
      profileLink="/admin/profile"
      settingsLink="/admin/settings"
    />
  );
};
