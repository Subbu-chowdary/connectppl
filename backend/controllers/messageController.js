const Message = require("../models/Message");
const User = require("../models/User");

// Send a message
const sendMessage = async (req, res) => {
  const { content, roomId } = req.body;
  const sender = req.userId;

  try {
    const message = new Message({
      sender,
      room: roomId,
      content,
    });

    await message.save();

    res.status(200).json({ message: "Message sent", message });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error sending message", error: err.message });
  }
};

// Retrieve all messages in a room
const getMessages = async (req, res) => {
  const { roomId } = req.params;

  try {
    const messages = await Message.find({ room: roomId }).populate(
      "sender",
      "username"
    );
    res.status(200).json(messages);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching messages", error: err.message });
  }
};

module.exports = { sendMessage, getMessages };
