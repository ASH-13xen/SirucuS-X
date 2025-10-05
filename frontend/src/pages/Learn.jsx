import React from "react";
import "../css/learn.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const subjects = [
  { name: "Data Structures and Algorithms", route: "/learn/dsa" },
  { name: "Web Development", route: "/learn/WebDev" },
  { name: "Cyber Security", route: "/learn/cyber" },
  { name: "AIML", route: "/learn/aiml" },
  { name: "Aptitude", route: "/learn/aptitude" },
  { name: "", route: "" }, // Empty card for future
];

const Learn = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div style={{ position: "sticky", top: 0, zIndex: 1000 }}></div>
      <div className="learn-container">
        <div className="card-grid">
          {subjects.map((subject, idx) => (
            <div
              className="glass-card"
              key={idx}
              style={{ cursor: subject.name ? "pointer" : "default" }}
              onClick={() => subject.route && navigate(subject.route)}
            >
              {subject.name ? (
                <span>{subject.name}</span>
              ) : (
                <span style={{ opacity: 0.5 }}>Coming Soon</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Learn;
