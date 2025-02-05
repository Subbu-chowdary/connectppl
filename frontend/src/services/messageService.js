import axios from "axios";
import authService from "./authService";

const API_URL =
  process.env.REACT_APP_API_URL || "http://localhost:5004/api/messages";

export const fetchMessages = async (roomId) => {
  const token = authService.getToken();
  try {
    const response = await axios.get(`${API_URL}/${roomId}/messages`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch messages");
  }
};

export const sendMessage = async (content, roomId) => {
  const token = authService.getToken();
  const response = await axios.post(
    `${API_URL}/send`,
    { content, roomId },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return response.data.message;
};
