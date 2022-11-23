import React from "react";

import { NotificationHeader } from "../../components";

import "./styles.scss";

export const Notifications = () => {
  return (
    <div className="notifications-container">
      <NotificationHeader notificationQuantity="3" />
    </div>
  );
};
