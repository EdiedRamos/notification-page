import React, { useState, useEffect } from "react";

import { data } from "../../data";
import { NotificationCard } from "../../components";

import "./styles.scss";

export const NotificationCards = ({ read }) => {
  const [notificationData, setNotificationData] = useState(data);

  useEffect(() => {
    if (read) {
      setNotificationData((prev) =>
        prev.map((notification) => {
          notification.read = true;
          return notification;
        })
      );
    }
  }, [read]);

  return (
    <div id="notification-cards">
      {notificationData.map((notification) => (
        <NotificationCard
          key={notification.notificationId}
          notificationContent={notification}
        />
      ))}
    </div>
  );
};
