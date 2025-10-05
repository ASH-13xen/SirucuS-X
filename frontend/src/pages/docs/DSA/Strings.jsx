import React from 'react';
import '../DocPage.css'; // Reuse the documentation page styles

const Strings = () => {
  return (
    <div className="doc-container">
      <h1 className="doc-title">Strings</h1>

      <p className="doc-paragraph">
        A string is a sequence of characters, used to represent text. In most programming languages, strings are immutable, meaning they cannot be changed after creation. Operations that appear to modify a string actually create a new one.
      </p>

      <h2 className="doc-subtitle">Key Concepts</h2>
      <ul className="doc-list">
        <li><b>Character Sequence:</b> An ordered collection of characters.</li>
        <li><b>Immutability:</b> Once a string is created, its contents cannot be altered.</li>
        <li><b>Encoding:</b> Characters are stored using a standard like ASCII or Unicode.</li>
      </ul>

      <h2 className="doc-subtitle">Complexity Analysis</h2>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Operation</th>
            <th>Time Complexity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Access (by index)</td>
            <td>O(1)</td>
          </tr>
          <tr>
            <td>Search (substring)</td>
            <td>O(n * m)</td>
          </tr>
          <tr>
            <td>Concatenation</td>
            <td>O(n + m)</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Strings;