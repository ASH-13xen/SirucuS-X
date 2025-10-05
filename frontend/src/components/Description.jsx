import React from "react";

// Reusable component for the SircuS platform description
const Description = () => {
  // 1. Define custom CSS for global styles, variables, and animations.
  // NOTE: This large style block is included here to ensure the fonts,
  // variables, and @keyframes are always loaded whenever this component
  // is used (even multiple times).
  const customStyles = `
        /* Load custom fonts */
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;600&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');

        /* CSS Variables based on your palette */
        :root {
            --color-primary: #93b9b2;
            --color-black: #ffffffff;
            --color-white: #000000ff;
        }

       

        /* The main container for the text block */
        .text-container {
            max-width: 1350px;
            padding: 40px;
            border-radius: 12px;
            text-align: center;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            background-color: var(--color-white);
        }

        /* Animation Keyframes: Subtle fade-in and scale */
        @keyframes fadeInUp {
            0% {
                opacity: 0;
                transform: translateY(20px) scale(0.95);
            }
            100% {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
        }

        /* Class for animated text blocks */
        .animated-text {
            opacity: 0;
            animation: fadeInUp 1s ease-out forwards;
        }

        /* Specific classes for easier inline referencing of the loaded fonts */
        .font-title { font-family: 'Playfair Display', serif; }
        .font-body { font-family: 'Inter', sans-serif; }
        .font-domains { font-family: 'Inter', sans-serif; font-weight: 600; }
        .accent-color { color: var(--color-primary); }
    `;

  return (
    <>
      {/* Inject the CSS styles and animations */}
      <style>{customStyles}</style>

      <div className="text-container">
        {/* Main Title */}
        <div
          className="animated-text font-title"
          style={{
            fontSize: "3.5rem",
            color: "var(--color-black)",
            marginBottom: "20px",
            animationDelay: "0.2s",
            fontWeight: 700,
            // color: "#93b9b2",
          }}
        >
          SircuS (Skill Circus)
        </div>

        {/* First descriptive paragraph */}
        <div
          className="animated-text font-body"
          style={{
            fontSize: "1.8rem",
            lineHeight: 1.4,
            color: "var(--color-black)",
            marginBottom: "30px",
            animationDelay: "0.6s",
          }}
        >
          is a web-based platform developed to address this gap. It enables
          {/* IIIT-NR students */}
          <div
            style={{
              color: "var(--color-primary)",
              display: "inline",
              fontWeight: 600,
            }}
          >
            <span> IIIT-NR students </span>
          </div>
          to
          {/* learn, practice, and test their knowledge */}
          <div style={{ fontStyle: "italic", display: "inline" }}>
            <span> learn, practice, and test their knowledge </span>
          </div>
          across key technical domains.
        </div>

        {/* Domains List */}
        <div
          className="animated-text font-domains"
          style={{
            fontSize: "1.6rem",
            lineHeight: 1.4,
            color: "var(--color-black)",
            animationDelay: "1.0s",
          }}
        >
          Domains include:
          {/* DSA */}
          <div
            className="accent-color"
            style={{ marginLeft: "10px", display: "inline" }}
          >
            Data Structures & Algorithms (DSA)
          </div>
          ,{/* Web Development */}
          <div className="accent-color" style={{ display: "inline" }}>
            <span> Web Development, </span>
          </div>
          {/* AIML */}
          <div className="accent-color" style={{ display: "inline" }}>
            <span> Artificial Intelligence & Machine Learning (AIML), </span>
          </div>
          {/* Cybersecurity */}
          <div className="accent-color" style={{ display: "inline" }}>
            Cybersecurity
          </div>
          , and
          {/* Aptitude */}
          <div className="accent-color" style={{ display: "inline" }}>
            <span> Aptitude.</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Description;
