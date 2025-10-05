import React from 'react';
import '../DocPage.css';

const HashTables = () => {
  return (
    <div className="doc-container">
      <h1 className="doc-title">Hash Tables</h1>

      <p className="doc-paragraph">
        A Hash Table is a data structure that maps keys to values for highly efficient lookup. It uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found.
      </p>

      <h2 className="doc-subtitle">Key Concepts</h2>
      <ul className="doc-list">
        <li><b>Key-Value Pairs:</b> Data is stored as pairs, where a unique key maps to a value.</li>
        <li><b>Hash Function:</b> A function that takes a key and computes a consistent index (a "hash") in the underlying array.</li>
        <li><b>Collision:</b> Occurs when two different keys hash to the same index. This is handled using techniques like Chaining or Open Addressing.</li>
      </ul>

      <h2 className="doc-subtitle">Complexity Analysis (Average Case)</h2>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Operation</th>
            <th>Time Complexity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Search</td>
            <td>O(1)</td>
          </tr>
          <tr>
            <td>Insertion</td>
            <td>O(1)</td>
          </tr>
          <tr>
            <td>Deletion</td>
            <td>O(1)</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HashTables;