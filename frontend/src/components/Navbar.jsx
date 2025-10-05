import React from "react";
import "../css/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="NavbarMain">
      <div className="NavbarLeft">
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/learn">Learn</Link>
          </li>
          <li>
            <Link to="/practice">Practice</Link>
          </li>
          <li>
            <Link to="/test">Test</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
      <div className="NavbarRight">
        <button className="userbutton">
          <Link to="/userprofile"> 👤 </Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
