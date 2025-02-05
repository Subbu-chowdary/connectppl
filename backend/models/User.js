const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    default:
      "https://res.cloudinary.com/dj7k9b8ps/image/upload/v1618821016/avatar_zd4q9n.png",
  },
});

// Check if the model already exists in mongoose.models, and use it if so
const User = mongoose.models.User || mongoose.model("User", userSchema);

module.exports = User;
