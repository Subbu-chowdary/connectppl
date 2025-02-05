import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5004/api";

const login = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials);
    localStorage.setItem("token", response.data.token); // Save token
    return response.data;
  } catch (error) {
    throw new Error("Login failed");
  }
};

const register = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/register`, credentials);
    localStorage.setItem("token", response.data.token);
    return response.data;
  } catch (error) {
    throw new Error("Registration failed");
  }
};

const getToken = () => {
  return localStorage.getItem("token");
};

const saveToken = (token) => {
  localStorage.setItem("token", token);
};

const removeToken = () => {
  localStorage.removeItem("token");
};

export default { login, register, getToken, saveToken, removeToken };
