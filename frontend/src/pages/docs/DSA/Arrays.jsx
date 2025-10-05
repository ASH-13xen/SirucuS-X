import React from "react";
import "../../../css/learn.css"; // Main container styles
import "../DocPage.css"; // NEW: Import dedicated doc page styles

const Arrays = () => {
  // Using a string literal for the code example is perfectly fine.
  const codeExample = `let fruits = ["Apple", "Banana", "Cherry"];

// Accessing elements
console.log(fruits[0]); // Output: Apple

// Adding an element to the end
fruits.push("Date");

// Removing an element from the end
fruits.pop();

// Iterating over an array
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}`;

  return (
    // Combine classes: main container + specific doc container styles
    <div className="doc-container">
      <h1 className="doc-title">Arrays</h1>

      <p className="doc-paragraph">
        An array is a fundamental data structure that stores a collection of
        elements of the same type in a contiguous block of memory. Each element
        is identified by an index or a key. In JavaScript, arrays are
        zero-indexed, meaning the first element is at index 0.
      </p>

      <h2 className="doc-heading">Key Concepts</h2>
      <ul className="doc-list">
        <li className="text">
          <b>Contiguous Memory:</b> Elements are stored next to each other,
          which allows for fast access.
        </li>
        <li className="text">
          <b>Random Access:</b> Any element can be accessed directly using its
          index in O(1) time.
        </li>
        <li className="text">
          <b>Dynamic Size:</b> In languages like JavaScript and Python, arrays
          can grow or shrink in size.
        </li>
      </ul>

      <h2 className="doc-heading">Code Example (JavaScript)</h2>
      <pre className="code-block">
        <code>{codeExample}</code>
      </pre>

      <h2 className="doc-heading">Complexity Analysis</h2>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Operation</th>
            <th>Time Complexity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Access</td>
            <td>O(1)</td>
          </tr>
          <tr>
            <td>Search</td>
            <td>O(n)</td>
          </tr>
          <tr>
            <td>Insertion (at end)</td>
            <td>O(1)</td>
          </tr>
          <tr>
            <td>Insertion (at beginning)</td>
            <td>O(n)</td>
          </tr>
          <tr>
            <td>Deletion</td>
            <td>O(n)</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Arrays;
