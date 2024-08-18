import React from 'react'
import { NotificationsPage } from '../../../Components/NotificationsPage'

export const EntrepreneurNotification = () => {
    const notifications = [
        { id: 1, message: "New user registered", link: "/entrepreneur/notifications/1" },
        { id: 2, message: "Server downtime reported", link: "/entrepreneur/notifications/2" },
        { id: 3, message: "New message received", link: "/entrepreneur/notifications/3" },
        { id: 4, message: "Weekly report available", link: "/entrepreneur/notifications/4" },
        { id: 5, message: "New comment on your post", link: "/entrepreneur/notifications/5" },
        { id: 6, message: "System maintenance scheduled", link: "/entrepreneur/notifications/6" },
      ];
  return (
    <NotificationsPage notifications={notifications} />
  )
}
