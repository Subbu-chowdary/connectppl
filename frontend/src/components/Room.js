import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRoomUsers } from "../services/roomService";

const Room = () => {
  const { id } = useParams();
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const users = await getRoomUsers(id);
        setUsers(users);
      } catch (err) {
        setError("Failed to fetch users");
      }
    };

    fetchUsers();
  }, [id]);

  return (
    <div>
      <h1>Room {id}</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user._id}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default Room;
