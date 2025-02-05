import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { fetchMessages, sendMessage } from "../services/messageService";
import Message from "./Message";

const Chat = ({ roomId }) => {
  const { user } = useContext(AuthContext);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const getMessages = async () => {
      try {
        const messages = await fetchMessages(roomId);
        setMessages(messages);
      } catch (err) {
        setError("Failed to fetch messages");
      }
    };

    if (user && roomId) {
      getMessages();
    }
  }, [roomId, user]);

  const handleSendMessage = async () => {
    try {
      const message = await sendMessage(newMessage, roomId);
      setMessages([...messages, message]);
      setNewMessage("");
    } catch (err) {
      setError("Failed to send message");
    }
  };

  return (
    <div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {messages.map((message) => (
          <Message
            key={message._id}
            message={message}
            currentUser={user.username}
          />
        ))}
      </ul>
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Enter your message"
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default Chat;
