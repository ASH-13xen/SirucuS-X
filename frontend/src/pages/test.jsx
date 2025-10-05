import React from "react";
import "../css/Test.css";
const Test = ({ xp, setXp }) => {
  const addXp = (amount) => {
    setXp((prevXp) => prevXp + amount);
  };

  const resetXp = () => {
    setXp(0);
  };

  return (
    <div >
      <div style={{ position: "sticky", top: 0, zIndex: 1000 }}>
      </div>
      <div className="test-page-container">
      <h1 className="test-page-title">Test Page - XP Control</h1>
      <p className="current-xp-display">
        Current Global XP: <span className="xp-value-highlight">{xp}</span>
      </p>

      <div className="xp-controls-test-page">
        <button onClick={() => addXp(50)} className="xp-button add-xp">
          +50 XP
        </button>
        <button onClick={() => addXp(100)} className="xp-button add-xp">
          +100 XP
        </button>
        <button onClick={() => addXp(200)} className="xp-button add-xp">
          +200 XP
        </button>
        <button onClick={() => addXp(500)} className="xp-button add-xp">
          +500 XP
        </button>
        <button onClick={resetXp} className="xp-button reset-xp">
          Reset XP
        </button>
      </div>

      <p className="navigation-hint">
        Navigate back to the home page (or other pages) to see the GIF update!
      </p>
    </div>
    </div>
  );
};

export default Test;
