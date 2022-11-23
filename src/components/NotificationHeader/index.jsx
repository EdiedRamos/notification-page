import React from "react";

import "./styles.scss";

export const NotificationHeader = ({ notificationQuantity = 0 }) => {
  return (
    <div className="notification-header-container">
      <h1>
        Notifications <span>{notificationQuantity}</span>
      </h1>
      <button>Mark all as read</button>
    </div>
  );
};
