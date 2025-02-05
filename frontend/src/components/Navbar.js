import React from "react";

const Navbar = ({ onLogout }) => {
  return (
    <nav>
      <button onClick={onLogout}>Logout</button>
    </nav>
  );
};

export default Navbar;
