import React from "react";
import PropTypes from "prop-types";

const Notification = ({ messageNotification }) => {
  return <p>{messageNotification}</p>;
};

Notification.prototype = {
  messageNotification: PropTypes.string.isRequired
};

export default Notification;
