import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import authService from "../services/authService";

const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = authService.getToken();
    if (token) {
      // Assuming you have a function to decode the token and get user info
      const userInfo = decodeToken(token);
      setUser(userInfo);
    }
  }, []);

  const login = (token) => {
    const userInfo = decodeToken(token);
    setUser(userInfo);
    authService.saveToken(token);
  };

  const logout = () => {
    setUser(null);
    authService.removeToken();
  };

  return { user, login, logout };
};

export default useAuth;
