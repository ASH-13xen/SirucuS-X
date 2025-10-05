import React from 'react';
import '../DocPage.css';

const DynamicProgramming = () => {
  return (
    <div className="doc-container">
      <h1 className="doc-title">Dynamic Programming (DP)</h1>

      <p className="doc-paragraph">
        Dynamic Programming is an optimization technique for solving complex problems by breaking them down into simpler sub-problems. It is used when the sub-problems overlap.
      </p>

      <h2 className="doc-subtitle">Key Concepts</h2>
      <ul className="doc-list">
        <li><b>Overlapping Subproblems:</b> A problem has overlapping subproblems if it can be broken down into subproblems that are reused several times. DP solves each subproblem only once.</li>
        <li><b>Optimal Substructure:</b> A problem has optimal substructure if an optimal solution can be constructed from optimal solutions of its subproblems.</li>
      </ul>
       <h2 className="doc-subtitle">Two Common DP Techniques</h2>
       <ul className="doc-list">
        <li><b>Memoization (Top-Down):</b> The function is written recursively, but results of subproblems are stored in a cache (e.g., a hash map or array) to avoid re-computation.</li>
        <li><b>Tabulation (Bottom-Up):</b> The solution is built iteratively from the smallest subproblem up to the main problem, storing results in a table (e.g., an array or matrix).</li>
       </ul>
    </div>
  );
};

export default DynamicProgramming;
