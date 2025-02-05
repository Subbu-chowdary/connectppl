import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AuthForm from "./components/AuthForm";
import Chat from "./components/Chat";
import Room from "./components/Room";
import RoomList from "./components/RoomList";
import Navbar from "./components/Navbar";
import useAuth from "./hooks/useAuth";

const App = () => {
  const { user, logout } = useAuth();

  return (
    <Router>
      {user && <Navbar onLogout={logout} />}
      <Routes>
        <Route
          path="/"
          element={
            user ? <Navigate to="/rooms" /> : <AuthForm onAuthSuccess={user} />
          }
        />
        <Route
          path="/rooms"
          element={user ? <RoomList /> : <Navigate to="/" />}
        />
        <Route path="/chat" element={user ? <Chat /> : <Navigate to="/" />} />
        <Route
          path="/room/:id"
          element={user ? <Room /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
