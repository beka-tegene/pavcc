import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const NotificationDetail = () => {
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
  const { id } = useParams();
  const notification = notifications?.find((notif) => notif?._id === id);

  if (!notification) {
    return <div className="p-4 text-red-500">Notification not found!</div>;
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Notification Detail</h2>
      <div className="mb-4">
        <strong className="block text-gray-700">Title:</strong>
        <p className="text-gray-600">{notification?.type}</p>
      </div>
      <div className="mb-4">
        <strong className="block text-gray-700">Date:</strong>
        <p className="text-gray-600">
          {new Date(notification?.createdAt).toLocaleString()}
        </p>
      </div>
      <div className="mb-4">
        <strong className="block text-gray-700">Message:</strong>
        <p className="text-gray-600">{notification?.message}</p>
      </div>
      <div className="mb-4">
        <strong className="block text-gray-700">Sender Name:</strong>
        <p className="text-gray-600">
          {notification?.sender?.firstName} {notification?.sender?.lastName}{" "}
          {notification?.sender?.middleName}
        </p>
      </div>
      <div className="mb-4">
        <strong className="block text-gray-700">Phone Number:</strong>
        <p className="text-gray-600">{notification?.sender?.phoneNumber}</p>
      </div>
      <div className="mb-4">
        <strong className="block text-gray-700">Email:</strong>
        <span className="text-blue-500 hover:underline">
          {notification?.sender?.email}
        </span>
      </div>
      <div className="mb-4">
        <strong className="block text-gray-700">Type:</strong>
        <span className="hover:underline">{notification?.sender?.role}</span>
      </div>
      <button
        onClick={() => window.history.back()}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Go Back
      </button>
    </div>
  );
};

export default NotificationDetail;
