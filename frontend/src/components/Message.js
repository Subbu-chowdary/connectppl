import React from "react";

const Message = ({ message, currentUser }) => {
  const isOwnMessage = message.sender.username === currentUser;
  return (
    <div style={{ textAlign: isOwnMessage ? "right" : "left" }}>
      <strong>{message.sender.username}:</strong> {message.content}
    </div>
  );
};

export default Message;
