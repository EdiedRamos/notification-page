import React from "react";

import "./styles.scss";

export const NotificationCard = ({ notificationContent }) => {
  return (
    <div
      className={`notification-card ${!notificationContent.read && "no-read"}`}
    >
      <img
        src={notificationContent.memberImage}
        alt={`${notificationContent.memberName} picture`}
      />
      <p className={`${!notificationContent.read && "no-read"}`}>
        <span>{`${notificationContent.memberName} `}</span>
        {notificationContent.actionContent}
        {notificationContent.actionContext && (
          <span>{` ${notificationContent.actionContext}`}</span>
        )}
      </p>
    </div>
  );
};
