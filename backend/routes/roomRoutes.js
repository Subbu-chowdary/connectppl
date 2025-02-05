const express = require("express");
const {
  createRoom,
  getRoomUsers,
  joinRoom,
  leaveRoom,
  deleteRoom,
  updateRoom,
  getAllRooms,
} = require("../controllers/roomControllers");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

// Route to create a new room
router.post("/create", authMiddleware, createRoom);

// Route to get all users in a room
router.get("/:roomId/users", authMiddleware, getRoomUsers);

// Route to join a room
router.post("/join", authMiddleware, joinRoom);

// Route to leave a room
router.post("/leave", authMiddleware, leaveRoom);

// Route to delete a room
router.delete("/:roomId", authMiddleware, deleteRoom);

// Route to update room details
router.put("/:roomId", authMiddleware, updateRoom);

// Route to get all rooms
router.get("/", authMiddleware, getAllRooms);

module.exports = router;
