import React from "react";

// (Recommended) Import the image to let the build tool handle the path
// import Ologo from '../assets/Ologo.jpeg';
// NOTE: I'll use the original string path for now, but keep the import in mind, boss!

const Logo = () => {
  // Define a style object for the subtitle to clean up the JSX
  const subtitleStyle = {
    color: "white",
    fontSize: "16px", // Set the final size here
    fontFamily: "'Playfair Display', serif",
    // Position the subtitle relative to the entire Logo component container
    // We use relative positioning to shift it slightly under the main logo.
    position: "relative",
    top: "-39px", // Nudge it up to sit closer to the title
    marginLeft: "120px", // Align it under the text
  };

  return (
    // The outer div acts as the container for the entire logo+subtitle block
    <div style={{ padding: "10px" }}>
      {/* 1. Main Logo and Title */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          style={{ width: "100px", margin: "10px" }}
          src="src/assets/Ologo.jpeg"
          alt="Sircus Logo"
        />
        <h1
          style={{
            color: "white",
            fontSize: "50px",
            fontFamily: "'Playfair Display', serif",
            margin: 0, // Remove default h1 margin for cleaner layout
          }}
        >
          SircuS
        </h1>
      </div>

      {/* 2. Subtitle */}
      <div>
        <h3 style={subtitleStyle}>"Where Skill takes The Stage"</h3>
      </div>
    </div>
  );
};

export default Logo;
