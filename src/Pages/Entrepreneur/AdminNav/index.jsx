import React, { useEffect, useState } from "react";
import { FaBell, FaUser } from "react-icons/fa";
import { PanalNav } from "../../../Components/PanalNav";
import axios from "axios";

export const AdminNavBar = () => {
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
      setNotifications(response.data.notifications);
    } catch (error) {
      console.log({ error });
    }
  };
  return (
    <PanalNav
      username="John"
      notifications={notifications}
      link="/entrepreneur/notifications/"
      NotificationIcon={FaBell}
      ProfileIcon={FaUser}
      notificationLink="/entrepreneur/notifications"
      profileLink="/entrepreneur/profile"
      settingsLink="/entrepreneur/settings"
    />
  );
};
