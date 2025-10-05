import React from "react";
import parrotvid from "../assets/parrot.gif";
import sealvid from "../assets/seal.gif";
import monkeyvid from "../assets/monkey.gif";
import bearvid from "../assets/bear.gif";
import elephantvid from "../assets/elephant.gif";
import lionvid from "../assets/lion.gif";
import "../css/Vid.css";

const Vid = ({ xp }) => {
  let currentAnimalGif;
  let altText;

  if (xp >= 1500) {
    currentAnimalGif = lionvid;
    altText = "Animated lion showing dominance";
  } else if (xp >= 1200) {
    currentAnimalGif = elephantvid;
    altText = "Animated elephant walking majestically";
  } else if (xp >= 900) {
    currentAnimalGif = bearvid;
    altText = "Animated bear standing tall";
  } else if (xp >= 700) {
    currentAnimalGif = monkeyvid;
    altText = "Animated monkey being playful";
  } else if (xp >= 500) {
    currentAnimalGif = sealvid;
    altText = "Animated seal clapping happily";
  } else {
    currentAnimalGif = parrotvid;
    altText = "Animated parrot gracefully flying";
  }

  return (
    <div>
      <img
        className="animal-gif-display"
        src={currentAnimalGif}
        alt={altText}
      />
    </div>
  );
};

export default Vid;
