import React from 'react';
import '../DocPage.css';

const Graphs = () => {
  return (
    <div className="doc-container">
      <h1 className="doc-title">Graphs</h1>

      <p className="doc-paragraph">
        A graph is a non-linear data structure consisting of a set of vertices (or nodes) and a set of edges connecting these vertices. Graphs are used to model networks, like social networks or road maps.
      </p>

      <h2 className="doc-subtitle">Key Concepts</h2>
      <ul className="doc-list">
        <li><b>Vertex (Node):</b> A data point in the graph.</li>
        <li><b>Edge:</b> A connection between two vertices.</li>
        <li><b>Directed vs. Undirected:</b> Edges in a directed graph have a direction (A -&gt; B), while edges in an undirected graph do not (A - B).</li>
        <li><b>Weighted vs. Unweighted:</b> Edges can have a "cost" or "weight" associated with them.</li>
        <li><b>Adjacency List/Matrix:</b> Two common ways to represent the connections in a graph.</li>
      </ul>
    </div>
  );
};

export default Graphs;