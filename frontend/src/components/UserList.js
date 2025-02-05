import React from "react";

const UserList = ({ users }) => {
  return (
    <div>
      <h3>Users in Room:</h3>
      <ul>
        {users.map((user) => (
          <li key={user._id}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
