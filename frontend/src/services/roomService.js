import axios from "axios";
import authService from "./authService";

const API_URL =
  process.env.REACT_APP_API_URL || "http://localhost:5004/api/rooms";

const createRoom = async (roomName) => {
  const token = authService.getToken();
  const response = await axios.post(
    `${API_URL}`,
    { roomName },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return response.data.room;
};

const joinRoom = async (roomId, userId) => {
  const token = authService.getToken();
  const response = await axios.post(
    `${API_URL}/join`,
    { roomId, userId },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return response.data.room;
};

const getRoomUsers = async (roomId) => {
  const token = authService.getToken();
  const response = await axios.get(`${API_URL}/${roomId}/users`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

const getRooms = async () => {
  const token = authService.getToken();
  const response = await axios.get(API_URL, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export default { createRoom, joinRoom, getRoomUsers, getRooms };
