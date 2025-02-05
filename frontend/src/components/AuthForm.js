import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import socket from "../socket/socket";
import authService from "../services/authService";

const AuthForm = () => {
  const { user, login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      const response = await authService.login({ email, password });
      login(response.token); // Update the context with the new token
      socket.connect(); // Connect socket after successful login
    } catch (err) {
      setError("Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async () => {
    setIsLoading(true);
    try {
      const response = await authService.register({
        username,
        email,
        password,
      });
      login(response.token); // Update the context with the new token
      socket.connect(); // Connect socket after successful registration
    } catch (err) {
      setError("Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {isRegistering ? (
        <>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
          <button onClick={handleRegister} disabled={isLoading}>
            {isLoading ? "Registering..." : "Register"}
          </button>
          <button onClick={() => setIsRegistering(false)}>
            Switch to Login
          </button>
        </>
      ) : (
        <>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
          <button onClick={handleLogin} disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
          </button>
          <button onClick={() => setIsRegistering(true)}>
            Switch to Register
          </button>
        </>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default AuthForm;
