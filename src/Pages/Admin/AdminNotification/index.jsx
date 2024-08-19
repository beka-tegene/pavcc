import React, { useEffect, useState } from "react";
import { NotificationsPage } from "../../../Components/NotificationsPage";
import axios from "axios";

export const AdminNotification = () => {
  // const notifications = [
  //   { id: 1, message: "New user registered", link: "/admin/notifications/1" },
  //   {
  //     id: 2,
  //     message: "Server downtime reported",
  //     link: "/admin/notifications/2",
  //   },
  //   { id: 3, message: "New message received", link: "/admin/notifications/3" },
  //   {
  //     id: 4,
  //     message: "Weekly report available",
  //     link: "/admin/notifications/4",
  //   },
  //   {
  //     id: 5,
  //     message: "New comment on your post",
  //     link: "/admin/notifications/5",
  //   },
  //   {
  //     id: 6,
  //     message: "System maintenance scheduled",
  //     link: "/admin/notifications/6",
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
  return <NotificationsPage notifications={notifications} />;
};
