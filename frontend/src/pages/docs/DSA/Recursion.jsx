import React from 'react';
import '../DocPage.css';

const Recursion = () => {
  return (
    <div className="doc-container">
      <h1 className="doc-title">Recursion</h1>

      <p className="doc-paragraph">
        Recursion is a programming technique where a function calls itself to solve a problem. It breaks down a problem into smaller, identical sub-problems until it reaches a simple case that can be solved directly.
      </p>

      <h2 className="doc-subtitle">Key Concepts</h2>
      <ul className="doc-list">
        <li><b>Base Case:</b> The condition that stops the recursion. Without a base case, a recursive function would call itself indefinitely, causing a stack overflow.</li>
        <li><b>Recursive Step:</b> The part of the function where it calls itself, but with a modified input that moves it closer to the base case.</li>
        <li><b>Call Stack:</b> Each function call is placed on the call stack, and memory is consumed for each call.</li>
      </ul>
    </div>
  );
};

export default Recursion;