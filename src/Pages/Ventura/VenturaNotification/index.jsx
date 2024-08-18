import React from 'react'
import { NotificationsPage } from '../../../Components/NotificationsPage'

export const VenturaNotification = () => {
    const notifications = [
        { id: 1, message: "New user registered", link: "/ventura/notifications/1" },
        { id: 2, message: "Server downtime reported", link: "/ventura/notifications/2" },
        { id: 3, message: "New message received", link: "/ventura/notifications/3" },
        { id: 4, message: "Weekly report available", link: "/ventura/notifications/4" },
        { id: 5, message: "New comment on your post", link: "/ventura/notifications/5" },
        { id: 6, message: "System maintenance scheduled", link: "/ventura/notifications/6" },
      ];
  return (
    <NotificationsPage notifications={notifications} />
  )
}
