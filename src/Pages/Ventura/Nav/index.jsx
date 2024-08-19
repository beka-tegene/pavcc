import React, { useEffect, useState } from "react";
import { FaBell, FaUser } from "react-icons/fa";
import { PanalNav } from "../../../Components/PanalNav";
import axios from "axios";
import { back_base_url } from "../../../Lib/config";

export const Nav = () => {
  const [notifications, setNotifications] = useState();
  const token = localStorage.getItem("token");
  useEffect(() => {
    fetchIdeaNotifications();
  }, []);
  const fetchIdeaNotifications = async () => {
    try {
      const response = await axios.get(`${back_base_url}/api/v1/not`, {
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
      NotificationIcon={FaBell}
      link="/ventura/notifications/"
      ProfileIcon={FaUser}
      notificationLink="/ventura/notifications"
      profileLink="/ventura/profile"
      settingsLink="/ventura/settings"
    />
  );
};
