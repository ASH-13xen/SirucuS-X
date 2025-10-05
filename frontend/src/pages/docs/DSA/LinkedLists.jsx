import React from 'react';
import '../DocPage.css';

const LinkedLists = () => {
  return (
    <div className="doc-container">
      <h1 className="doc-title">Linked Lists</h1>

      <p className="doc-paragraph">
        A linked list is a linear data structure where elements are not stored at contiguous memory locations. Each element (a "node") contains its data and a pointer to the next node in the sequence.
      </p>

      <h2 className="doc-subtitle">Key Concepts</h2>
      <ul className="doc-list">
        <li><b>Node:</b> An object containing data and a reference (pointer) to the next node.</li>
        <li><b>Head:</b> The first node in the list.</li>
        <li><b>Tail:</b> The last node in the list, which points to null.</li>
        <li><b>Singly vs. Doubly:</b> A singly linked list has pointers to the next node, while a doubly linked list also has pointers to the previous node.</li>
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
            <td>Access / Search</td>
            <td>O(n)</td>
          </tr>
          <tr>
            <td>Insertion (at beginning)</td>
            <td>O(1)</td>
          </tr>
          <tr>
            <td>Insertion (at end)</td>
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

export default LinkedLists;