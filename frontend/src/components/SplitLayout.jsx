import React from "react";
import "../css/SplitLayout.css";
import Logo from "../assets/Logo.png";
import Navbar from "./Navbar";
import Vid from "./Vid";
import DisplayLevel from "./DisplayLevel";

const SplitLayout = ({ xp }) => {
  return (
    <div className="SplitContainer">
      <div className="SplitLeft">
        <img src={Logo} alt="Logo" className="LogoOnly" />
      </div>

      <div className="SplitRight">
        <Navbar />
        <DisplayLevel xp={xp} />
        <Vid xp={xp} />
      </div>
    </div>
  );
};

export default SplitLayout;
