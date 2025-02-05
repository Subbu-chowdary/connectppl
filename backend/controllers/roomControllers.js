const Room = require("../models/Room");
const User = require("../models/User");

// Create a new room for audio/video call
const createRoom = async (req, res) => {
  const { roomName } = req.body;
  const users = req.body.users || [];

  try {
    // Check if room already exists
    const existingRoom = await Room.findOne({ roomName });
    if (existingRoom) {
      return res.status(400).json({ message: "Room already exists" });
    }

    const newRoom = new Room({ roomName, users });
    await newRoom.save();

    res
      .status(200)
      .json({ message: "Room created successfully", room: newRoom });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error creating room", error: err.message });
  }
};

// Get all users in a room
const getRoomUsers = async (req, res) => {
  const { roomId } = req.params;

  try {
    const room = await Room.findById(roomId).populate("users", "username");
    if (!room) {
      return res.status(404).json({ message: "Room not found" });
    }

    // Format output with only _id and username
    const formattedUsers = room.users.map((user) => {
      return {
        _id: user._id,
        username: user.username,
      };
    });

    res.status(200).json(formattedUsers);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching room users", error: err.message });
  }
};

// Join an existing room
const joinRoom = async (req, res) => {
  const { roomId, userId } = req.body;

  try {
    const room = await Room.findById(roomId);
    if (!room) return res.status(404).json({ message: "Room not found" });

    if (room.users.includes(userId)) {
      return res.status(400).json({ message: "User is already in the room" });
    }

    room.users.push(userId);
    await room.save();

    res.status(200).json({ message: "User joined room", room });
  } catch (err) {
    res.status(500).json({ message: "Error joining room", error: err.message });
  }
};

// Leave a room
const leaveRoom = async (req, res) => {
  const { roomId, userId } = req.body;

  try {
    const room = await Room.findById(roomId);
    if (!room) return res.status(404).json({ message: "Room not found" });

    room.users = room.users.filter((user) => user.toString() !== userId);
    await room.save();

    res.status(200).json({ message: "User left room", room });
  } catch (err) {
    res.status(500).json({ message: "Error leaving room", error: err.message });
  }
};

// Delete a room
const deleteRoom = async (req, res) => {
  const { roomId } = req.params;

  try {
    const room = await Room.findByIdAndDelete(roomId);
    if (!room) return res.status(404).json({ message: "Room not found" });

    res.status(200).json({ message: "Room deleted successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error deleting room", error: err.message });
  }
};

// Update room details
const updateRoom = async (req, res) => {
  const { roomId } = req.params;
  const { roomName, users } = req.body;

  try {
    const room = await Room.findById(roomId);
    if (!room) return res.status(404).json({ message: "Room not found" });

    if (roomName) room.roomName = roomName;
    if (users) room.users = users;

    await room.save();

    res.status(200).json({ message: "Room updated successfully", room });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error updating room", error: err.message });
  }
};

// Get all rooms
const getAllRooms = async (req, res) => {
  try {
    const rooms = await Room.find();
    res.status(200).json(rooms);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching rooms", error: err.message });
  }
};

module.exports = {
  createRoom,
  getRoomUsers,
  joinRoom,
  leaveRoom,
  deleteRoom,
  updateRoom,
  getAllRooms,
};
