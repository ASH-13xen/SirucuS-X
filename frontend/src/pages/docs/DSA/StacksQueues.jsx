import React from 'react';
import '../DocPage.css';

const StacksQueues = () => {
  return (
    <div className="doc-container">
      <h1 className="doc-title">Stacks & Queues</h1>

      <p className="doc-paragraph">
        Stacks and Queues are linear data structures that restrict how elements can be added and removed. They are often implemented using Arrays or Linked Lists.
      </p>

      <h2 className="doc-subtitle">Stack (LIFO)</h2>
      <p className="doc-paragraph">A stack follows a <strong>Last-In, First-Out (LIFO)</strong> principle. The last element added is the first one to be removed. Think of a stack of plates.</p>
      <ul className="doc-list">
        <li><b>Push:</b> Add an element to the top of the stack.</li>
        <li><b>Pop:</b> Remove the element from the top of the stack.</li>
      </ul>

      <h2 className="doc-subtitle">Queue (FIFO)</h2>
      <p className="doc-paragraph">A queue follows a <strong>First-In, First-Out (FIFO)</strong> principle. The first element added is the first one to be removed. Think of a checkout line.</p>
      <ul className="doc-list">
          <li><b>Enqueue:</b> Add an element to the back of the queue.</li>
          <li><b>Dequeue:</b> Remove the element from the front of the queue.</li>
      </ul>

      <h2 className="doc-subtitle">Complexity Analysis (for both)</h2>
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
            <td>Insertion (Push / Enqueue)</td>
            <td>O(1)</td>
          </tr>
          <tr>
            <td>Deletion (Pop / Dequeue)</td>
            <td>O(1)</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StacksQueues;
