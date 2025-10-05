import React from "react";
import "../../css/learn.css"; // CORRECTED: Path is now one level up
import { useNavigate } from "react-router-dom";

const dsaTopics = {
  "Data Structures": [
    { name: "Arrays", route: "/learn/dsa/arrays" },
    { name: "Strings", route: "/learn/dsa/strings" },
    { name: "Linked Lists", route: "/learn/dsa/linked-lists" },
    { name: "Stacks & Queues", route: "/learn/dsa/stacks-queues" },
    { name: "Trees", route: "/learn/dsa/trees" },
    { name: "Graphs", route: "/learn/dsa/graphs" },
    { name: "Hash Tables", route: "/learn/dsa/hash-tables" },
  ],
  Algorithms: [
    { name: "Searching Algorithms", route: "/learn/dsa/searching" },
    { name: "Sorting Algorithms", route: "/learn/dsa/sorting" },
    { name: "Recursion", route: "/learn/dsa/recursion" },
    { name: "Dynamic Programming", route: "/learn/dsa/dp" },
  ],
};

const DSA = () => {
  const navigate = useNavigate();

  return (
    <div className="learn-container">
      <h1 className="title">Data Structures and Algorithms</h1>

      <h2 className="title" style={{ fontSize: "x-large", marginTop: "3rem" }}>
        Data Structures
      </h2>
      <div className="card-grid">
        {dsaTopics["Data Structures"].map((topic, idx) => (
          <div
            className="glass-card"
            key={`ds-${idx}`}
            onClick={() => topic.route && navigate(topic.route)}
          >
            <span>{topic.name}</span>
          </div>
        ))}
      </div>

      <h2 className="title" style={{ fontSize: "x-large", marginTop: "3rem" }}>
        Algorithms
      </h2>
      <div className="card-grid">
        {dsaTopics["Algorithms"].map((topic, idx) => (
          <div
            className="glass-card"
            key={`algo-${idx}`}
            onClick={() => topic.route && navigate(topic.route)}
          >
            <span>{topic.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DSA;
