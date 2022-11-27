import React, { useState } from "react";

import { NotificationHeader } from "../../components";
import { NotificationCards } from "../../layouts";

import "./styles.scss";

export const Notifications = () => {
  const [read, setRead] = useState(false);

  return (
    <div className="notifications-container">
      <NotificationHeader notificationQuantity="3" setRead={setRead} />
      <NotificationCards read={read} />
    </div>
  );
};
