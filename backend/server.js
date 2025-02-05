const express = require("express");
const http = require("http");
const cors = require("cors");
const socketIo = require("socket.io");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const roomRoutes = require("./routes/roomRoutes");
const messageRoutes = require("./routes/messageRoutes");
const connectDB = require("./config/db");
const socketServer = require("./socket/socketServer"); // Import socketServer

// Load env
dotenv.config();

// Create an express app
const app = express();

// Middleware setup
app.use(cors());
app.use(express.json());

// Connect to the database
connectDB();

// Routes
app.use("/api", authRoutes);
app.use("/api/rooms", roomRoutes);
app.use("/api/messages", messageRoutes);

const server = http.createServer(app); // app is your Express app
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3000", // Adjust this to match your client URL
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`✅ A user connected: ${socket.id}`);

  socket.on("disconnect", () => {
    console.log(`❌ A user disconnected: ${socket.id}`);
  });
});

// Socket.io connection
socketServer(io);

// Start the server
const PORT = process.env.PORT || 5004;
server.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
