import React from 'react';
import '../DocPage.css';

const Sorting = () => {
  return (
    <div className="doc-container">
      <h1 className="doc-title">Sorting Algorithms</h1>

      <p className="doc-paragraph">
        Sorting algorithms are used to rearrange elements of a list in a specific order (e.g., ascending or descending). Different algorithms have different performance characteristics.
      </p>

      <h2 className="doc-subtitle">Common Sorting Algorithms</h2>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Algorithm</th>
            <th>Best/Avg Time</th>
            <th>Worst Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bubble Sort</td>
            <td>O(n²)</td>
            <td>O(n²)</td>
          </tr>
          <tr>
            <td>Selection Sort</td>
            <td>O(n²)</td>
            <td>O(n²)</td>
          </tr>
          <tr>
            <td>Insertion Sort</td>
            <td>O(n) / O(n²)</td>
            <td>O(n²)</td>
          </tr>
          <tr>
            <td>Merge Sort</td>
            <td>O(n log n)</td>
            <td>O(n log n)</td>
          </tr>
          <tr>
            <td>Quick Sort</td>
            <td>O(n log n)</td>
            <td>O(n²)</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Sorting;