import "../css/Navbar2.css"; // Adjust the path as necessary
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="NavbarMain2" style={{ backgroundColor: "#93b9b2" }}>
      <div className="NavbarLeft">
        <Link to="/">  {/* Clicking logo takes users to home page */}
          <img style={{ width: "50px", height: "50px" , borderRadius: "200px", border: "3px solid black"}} // Adjust size as needed
            src="../src/assets/Ologo.jpeg"  // Adjust the path relative to public folder or source folder
            alt="Logo" 
            className="navbar-logo"
          />
        </Link>
        <ul className="ul2">
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
      <div className="NavbarRight2">
        <button className="userbutton2" >
          <Link to="/userprofile2"> 👤 </Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
