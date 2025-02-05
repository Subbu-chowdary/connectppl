const socketServer = (io) => {
  io.on("connection", (socket) => {
    console.log(`✅ A user connected: ${socket.id}`);

    // Handle room joining
    socket.on("join-room", (roomId, userId) => {
      socket.join(roomId);
      console.log(`User ${userId} joined room ${roomId}`);
      socket.to(roomId).emit("user-connected", userId); // Notify other users in the room
    });

    // Handle sending offers for WebRTC
    socket.on("offer", (offer, roomId) => {
      socket.to(roomId).emit("offer", offer);
    });

    // Handle answering offers for WebRTC
    socket.on("answer", (answer, roomId) => {
      socket.to(roomId).emit("answer", answer);
    });

    // Handle ICE candidate for WebRTC
    socket.on("ice-candidate", (candidate, roomId) => {
      socket.to(roomId).emit("ice-candidate", candidate);
    });

    // Handle disconnection
    socket.on("disconnect", () => {
      console.log(`❌ A user disconnected: ${socket.id}`);
    });
  });
};

module.exports = socketServer;
