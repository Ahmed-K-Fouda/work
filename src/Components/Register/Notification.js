import React from "react";
import "./CircularProgress.css";
const Notification = ({ message }) => {
  return (
    <div className="notification">
      <span>&#10003;</span>
      <p>{message}</p>
    </div>
  );
};

export default Notification;
