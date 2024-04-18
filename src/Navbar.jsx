import React from "react";
import "./Navbar.css";

const Navbar = ({ links }) => {
  return (
    <nav className="Navbar">
      <ul>
        {links.map((link) => {
          return <li key={link}> {link}</li>;
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
