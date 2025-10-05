import React from 'react';

const Jstopics = [
  // Welcome and Introduction
  "Welcome to Learn JavaScript!",
  "Introduction to JavaScript",
  // Variables and Core Concepts
  "Variables",
  "Comparison operators",
  "Control flow",
  // Data Types and Structures
  "Data types and structures",
  "Numbers",
  "Strings",
  "Booleans",
  "Null and undefined values",
  "BigInt",
  "Symbols",
  // Functions
  "Introduction to functions",
  "Function expressions",
  "The \"new\" keyword",
  "The \"return\" keyword",
  "The \"this\" keyword",
  // Objects and Prototypes
  "Introduction to objects",
  "Property accessors",
  "Prototypal inheritance",
  "Property descriptors",
  // Collections
  "Indexed collections",
  "Keyed collections",
  // Classes
  "Introduction to classes",
  "Extend classes",
  "Class fields and methods",
  "Static initialization blocks",
  // Wrap-up
  "Appendix"
];

const JstopicContent = {
  // Welcome and Introduction
  "Welcome to Learn JavaScript!": [
    <p>"We're excited to have you on this journey to master JavaScript! This course covers everything from basic syntax to advanced object-oriented programming."</p>,
  ],
  "Introduction to JavaScript": [
    <p>"JavaScript is a versatile programming language primarily used for creating interactive and dynamic content on the web. It's the 'behavior' layer of the internet."</p>,
    <p>"It's essential for web development, enabling responsive user interfaces and powerful web applications on both the client (browser) and server (Node.js) sides."</p>,
  ],
  // Variables and Core Concepts
  "Variables": [
    <p>"A **variable** is a named storage location for data. In JavaScript, you declare variables using `let`, `const`, or the older `var` keywords."</p>,
    <p>"Learning how to properly declare and scope variables is fundamental to writing reliable JavaScript code."</p>,
  ],
  "Comparison operators": [
    <p>"**Comparison operators** are used to compare two values and return a boolean result (`true` or `false`). </p>,
    <p>"It's crucial to understand the difference between the **equality operator (`==`)** and the **strict equality operator (`===`)** to avoid unexpected behavior."</p>,
  ],
  "Control flow": [
    <p>"**Control flow** structures determine the order in which statements are executed. The main structures are `if...else`, `switch` statements, and loops (`for`, `while`, `do...while`)."</p>,
    <p>"These structures allow your program to make decisions and repeat actions based on different conditions."</p>,
  ],
  // Data Types and Structures
  "Data types and structures": [
    <p>"JavaScript has seven primitive data types: String, Number, BigInt, Boolean, Undefined, Symbol, and Null, plus one complex type: Object."</p>,
  ],
  "Numbers": [
    <p>"The **Number** type is used for both integers and floating-point numbers. Special numerical values include `Infinity`, `-Infinity`, and `NaN` (Not a Number)."</p>,
  ],
  "Strings": [
    <p>"A **String** is a sequence of characters used to represent text. Strings are immutable and can be created with single quotes, double quotes, or backticks (for template literals)."</p>,
  ],
  "Booleans": [
    <p>"The **Boolean** type represents a logical entity and can only have two values: `true` or `false`."</p>,
  ],
  "Null and undefined values": [
    <p>"**`null`** is an intentional absence of any object value. **`undefined`** means a variable has been declared but has not yet been assigned a value."</p>,
  ],
  "BigInt": [
    <p>"**`BigInt`** is a primitive data type that can represent integers with arbitrary precision, which is useful for numbers larger than `Number.MAX_SAFE_INTEGER`."</p>,
  ],
  "Symbols": [
    <p>"A **Symbol** is a unique and immutable primitive value that may be used as the key of an object property. They are often used to create 'hidden' properties."</p>,
  ],
  // Functions
  "Introduction to functions": [
    <p>"A **function** is a block of code designed to perform a particular task. They are essential for organizing and reusing code."</p>,
  ],
  "Function expressions": [
    <p>"A **function expression** defines a function inside an expression (e.g., assigning it to a variable), unlike a function declaration, which is a standalone statement."</p>,
  ],
  "The \"new\" keyword": [
    <p>"The **`new` keyword** is used to create an instance of a user-defined object type or a built-in object type that has a constructor function."</p>,
  ],
  "The \"return\" keyword": [
    <p>"The **`return` keyword** stops the execution of a function and returns a value from that function. If omitted, the function returns `undefined`."</p>,
  ],
  "The \"this\" keyword": [
    <p>"The value of **`this`** depends on the context where it is used. In a simple function call, it often defaults to the global object (or `undefined` in strict mode), but in a method, it refers to the object itself."</p>,
  ],
  // Objects and Prototypes
  "Introduction to objects": [
    <p>"An **object** is a collection of related data and/or functionality (which are usually variables and functions, respectively) and are the most important data type in JavaScript."</p>,
  ],
  "Property accessors": [
    <p>"**Property accessors** are methods used to get (getter) or set (setter) the value of an object's private property, giving you control over data access."</p>,
  ],
  "Prototypal inheritance": [
    <p>"**Prototypal inheritance** is a mechanism where objects can inherit properties and methods from other objects, often referred to as their prototype."</p>,
  ],
  "Property descriptors": [
    <p>"A **property descriptor** is a record that holds attributes of a property (e.g., its value, whether it is writable, enumerable, or configurable). This is managed by the `Object.defineProperty()` method."</p>,
  ],
  // Collections
  "Indexed collections": [
    <p>"**Indexed collections** store data in a specific order with numerical indexes, the primary example being the **Array**."</p>,
  ],
  "Keyed collections": [
    <p>"**Keyed collections** store data with keys, such as **Map** (key/value pairs) and **Set** (unique values), providing more powerful and optimized data structures than generic objects."</p>,
  ],
  // Classes
  "Introduction to classes": [
    <p>"**Classes** are a template for creating objects. They encapsulate data with code to work on that data, providing a more structured way to implement object-oriented programming."</p>,
  ],
  "Extend classes": [
    <p>"The **`extends` keyword** is used in class declarations or class expressions to create a new class that is a child of another class, facilitating inheritance."</p>,
  ],
  "Class fields and methods": [
    <p>"**Class fields** are properties defined directly on the class body, while **methods** are functions that perform actions related to the object."</p>,
  ],
  "Static initialization blocks": [
    <p>"**Static initialization blocks** allow flexible initialization of static properties during the class definition, running once when the class is loaded."</p>,
  ],
  // Wrap-up
  "Appendix": [
    <p>"The **Appendix** provides a reference of useful tools, documentation links, and advanced topics to continue your learning journey."</p>,
  ]
};


// Helper to create valid HTML id from topic
const toId = (str) =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const Jscontent = () => {
  return (
    <div

      style={{
        display: "flex",
        minHeight: "100vh",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor: "#000000ff",
        color: "#000000ff",
      }}
    >

      {/* Side Panel */}
      <nav
        style={{
          width: "260px",
          height: "90vh",      // Full viewport height
          position: "fixed",    // Fix it to viewport
          top: 60,
          left: 0,
          borderRight: "1px solid #ddd",
          padding: "24px 16px",
          background: "#000000ff",
          overflowY: "auto",
        }}
      >
        <h2 style={{
          marginBottom: "16px",
          fontWeight: "bold",
          fontSize: "1.5em",
          color: "#93b9b2",
          textAlign: "center",
          textDecoration: "underline"
        }}>
          Contents
        </h2>
        <ul style={{
          listStyle: "none",
          margin: 0,
          padding: 0,
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}>
          {Jstopics.map((topic) => (
            <li key={topic}>
              <a
                href={`#${toId(topic)}`}
                style={{
                  textDecoration: "none",
                  color: "#0366d6",
                  fontSize: "16px",
                  transition: "color 0.2s",
                  cursor: "pointer",
                }}
                onMouseOver={(e) => (e.currentTarget.style.color = "#024b9a")}
                onMouseOut={(e) => (e.currentTarget.style.color = "#0366d6")}
              >
                {topic}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Main Content */}
      <main
        style={{
          flex: 1,
          paddingLeft: "430px",
          paddingRight: "120px", // To avoid overlap with side panel
          overflowY: "auto",
          color: "#93b9b2",
          fontSize: "26px",
          paddingTop: "10px",
          width: "100%",
          background: "#000000ff",
        }}
      >
        {Jstopics.map((topic) => (
          <section
            key={topic}
            id={toId(topic)}
            style={{
              marginBottom: "48px",
              scrollMarginTop: "130px", // Adjust this if you have a fixed header
            }}
          >
            <h2>{topic}</h2>
            <p style={{ color: "#ffffffff", fontSize: "16px", width: "81%", lineHeight: "1.6", padding: "1em" }}>
              {JstopicContent[topic]}
            </p>
          </section>
        ))}
      </main>
    </div>
  );
};

export default Jscontent;
