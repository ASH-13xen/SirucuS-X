import React from "react";
import "../css/DisplayLevel.CSS";


const DisplayLevel = ({ xp }) => {
  let currentLevelName;

  if (xp >= 1500) {
    currentLevelName = "Lion";
  } else if (xp >= 1200) {
    currentLevelName = "Elephant";
  } else if (xp >= 900) {
    currentLevelName = "Bear";
  } else if (xp >= 700) {
    currentLevelName = "Monkey";
  } else if (xp >= 500) {
    currentLevelName = "Seal";
  } else {
    currentLevelName = "Parrot";
  }
  return (
    <div className="level-display-box">
      <p className="level-text">
        Current Level: <strong>{currentLevelName}</strong>
      </p>
    </div>
  );
};

export default DisplayLevel;
