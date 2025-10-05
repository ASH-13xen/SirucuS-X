import React from 'react';
import '../DocPage.css';

const Searching = () => {
  return (
    <div className="doc-container">
      <h1 className="doc-title">Searching Algorithms</h1>

      <p className="doc-paragraph">
        Searching algorithms are used to find a specific item within a collection of items. The choice of algorithm depends on the structure of the data.
      </p>

      <h2 className="doc-subtitle">Linear Search</h2>
      <p className="doc-paragraph">Checks every element in the collection one by one until the target is found or the end is reached. Works on unsorted data.</p>
      <p><b>Time Complexity: O(n)</b></p>

      <h2 className="doc-subtitle">Binary Search</h2>
      <p className="doc-paragraph">A highly efficient algorithm that repeatedly divides the search interval in half. It requires the collection to be sorted.</p>
      <p><b>Time Complexity: O(log n)</b></p>
    </div>
  );
};

export default Searching;