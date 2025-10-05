import React from "react";
import "../css/learn.css"; // Reuse the same CSS as the Learn page for consistency

const Practice = () => {
  return (
    // Use the same container class to get the same layout and styling
    <div className="learn-container">
      <h1 className="title">CHOOSE A SKILL TO PRACTICE</h1>

      {/* You can add your practice topic cards here later */}
      <div className="card-grid">
        <div className="glass-card">
          <span>Data Structures & Algorithms</span>
        </div>
        <div className="glass-card">
          <span>Web Development</span>
        </div>
        <div className="glass-card">
          <span style={{ opacity: 0.5 }}>More Coming Soon...</span>
        </div>
      </div>
    </div>
  );
};

export default Practice;
