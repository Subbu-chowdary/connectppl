import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getRooms } from "../services/roomService";

const RoomList = () => {
  const [rooms, setRooms] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const rooms = await getRooms();
        setRooms(rooms);
      } catch (err) {
        setError("Failed to fetch rooms");
      }
    };

    fetchRooms();
  }, []);

  return (
    <div>
      <h1>Available Rooms</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {rooms.map((room) => (
          <li key={room._id}>
            <Link to={`/room/${room._id}`}>{room.roomName}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoomList;
