import { io } from "socket.io-client";

// Set the backend URL to connect to
const SOCKET_URL = process.env.REACT_APP_SOCKET_URL || "http://localhost:5004";

// Create a socket connection
const socket = io(SOCKET_URL, {
  transports: ["websocket"], // Use WebSocket for faster and reliable connection
  autoConnect: false, // Connect manually after login (for better control)
});

export default socket;
