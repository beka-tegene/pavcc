import React from "react";
import { useParams } from "react-router-dom";
const notifications = [
  {
    id: "1",
    title: "New Update Available",
    date: "2024-08-18T12:34:56Z",
    message: "A new update is available for your application.",
    category: "Update",
    link: "/updates",
  },
  {
    id: "2",
    title: "System Maintenance Scheduled",
    date: "2024-08-17T10:00:00Z",
    message: "The system will be down for maintenance on 2024-08-20.",
    category: "Maintenance",
    link: "/maintenance",
  },
];

const NotificationDetail = () => {
  const { id } = useParams();
  const notification = notifications.find((notif) => notif.id === id);

  if (!notification) {
    return <div className="p-4 text-red-500">Notification not found!</div>;
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Notification Detail</h2>
      <div className="mb-4">
        <strong className="block text-gray-700">Title:</strong>
        <p className="text-gray-600">{notification.title}</p>
      </div>
      <div className="mb-4">
        <strong className="block text-gray-700">Date:</strong>
        <p className="text-gray-600">
          {new Date(notification.date).toLocaleString()}
        </p>
      </div>
      <div className="mb-4">
        <strong className="block text-gray-700">Message:</strong>
        <p className="text-gray-600">{notification.message}</p>
      </div>
      <div className="mb-4">
        <strong className="block text-gray-700">Category:</strong>
        <p className="text-gray-600">{notification.category}</p>
      </div>
      <div className="mb-4">
        <strong className="block text-gray-700">Link:</strong>
        <a href={notification.link} className="text-blue-500 hover:underline">
          {notification.link}
        </a>
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
