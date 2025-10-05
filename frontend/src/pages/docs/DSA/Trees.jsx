import React from 'react';
import '../DocPage.css';

const Trees = () => {
  return (
    <div className="doc-container">
      <h1 className="doc-title">Trees</h1>

      <p className="doc-paragraph">
        A tree is a hierarchical data structure consisting of nodes connected by edges. It is a non-linear structure, unlike arrays or linked lists. A common type is the Binary Search Tree (BST).
      </p>

      <h2 className="doc-subtitle">Key Concepts</h2>
      <ul className="doc-list">
        <li><b>Node:</b> Contains data and pointers to its children.</li>
        <li><b>Root:</b> The topmost node in the tree.</li>
        <li><b>Parent/Child:</b> A node that points to another node is its parent.</li>
        <li><b>Leaf:</b> A node with no children.</li>
        <li><b>Binary Search Tree (BST):</b> A binary tree where the left child is less than the parent, and the right child is greater.</li>
      </ul>

      <h2 className="doc-subtitle">Complexity Analysis (Balanced BST)</h2>
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
            <td>O(log n)</td>
          </tr>
          <tr>
            <td>Insertion</td>
            <td>O(log n)</td>
          </tr>
          <tr>
            <td>Deletion</td>
            <td>O(log n)</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Trees;