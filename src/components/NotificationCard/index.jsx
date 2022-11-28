import React from "react";

import { ACTIONS } from "../../data/actions";

import "./styles.scss";

export const NotificationCard = ({ notificationContent }) => {
  return (
    <div
      className={`notification-card ${!notificationContent.read && "no-read"}`}
    >
      <img
        className="member-image"
        src={notificationContent.memberImage}
        alt={`${notificationContent.memberName} picture`}
      />
      <div style={{ width: "100%" }}>
        <div className="notification-group">
          <div>
            <p className={`${!notificationContent.read && "no-read"}`}>
              <span className="member-name">{`${notificationContent.memberName} `}</span>
              <span className="action-content">
                {notificationContent.actionContent}
              </span>
              {notificationContent.actionContext &&
                notificationContent.action !== ACTIONS.MESSAGE &&
                notificationContent.action !== ACTIONS.COMMENT && (
                  <span className="action-context">{` ${notificationContent.actionContext}`}</span>
                )}
            </p>
            <p className="action-time">{notificationContent.actionTime}</p>
          </div>
          {notificationContent.action === ACTIONS.COMMENT && (
            <img
              className="image"
              src={notificationContent.actionContext}
              alt="image"
            />
          )}
        </div>
        {notificationContent.action === ACTIONS.MESSAGE && (
          <div className="message">{notificationContent.actionContext}</div>
        )}
      </div>
    </div>
  );
};
