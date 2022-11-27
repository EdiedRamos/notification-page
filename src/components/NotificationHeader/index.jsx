import React from "react";

import "./styles.scss";

export const NotificationHeader = ({ notificationQuantity = 0, setRead }) => {
  const handleRead = () => setRead(true);

  return (
    <div className="notification-header-container">
      <h1>
        Notifications <span>{notificationQuantity}</span>
      </h1>
      <button onClick={handleRead}>Mark all as read</button>
    </div>
  );
};
