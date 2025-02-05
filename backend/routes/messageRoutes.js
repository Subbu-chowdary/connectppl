const express = require("express");
const {
  sendMessage,
  getMessages,
} = require("../controllers/messageController");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

// Send a message
router.post("/send", authMiddleware, sendMessage);

// Get messages in a room
router.get("/:roomId/messages", authMiddleware, getMessages);

module.exports = router;
