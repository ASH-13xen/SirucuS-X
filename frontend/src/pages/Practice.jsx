import React, { useState } from 'react';

// --- COLOR AND STYLE CONSTANTS ---
const COLORS = {
  accent: '#93b9b2',
  primaryBg: '#000000',
  primaryText: '#ffffffff',
};

const styles = {
  // Global Styles for the App Container
  appContainer: {
    minHeight: '100vh',
    backgroundColor: COLORS.primaryBg,
    fontFamily: 'Inter, sans-serif',
    padding: '1rem', // Mobile padding (p-4)
  },
  // Header Section
  header: {
    textAlign: 'center',
    marginBottom: '3rem', // mb-12
  },
  h1: {
    fontSize: '2.5rem', // 4xl
    fontWeight: '800', // font-extrabold
    color: COLORS.primaryText,
    marginBottom: '0.5rem', // mb-2
    letterSpacing: '0.05em', // tracking-wide
  },
  subtitle: {
    fontSize: '1.25rem', // text-xl
    color: COLORS.accent,
  },
  // Main Content Container
  main: {
    maxWidth: '80rem', // max-w-7xl
    margin: '0 auto',
  },
  // Section Container
  section: {
    marginBottom: '4rem', // mb-16
  },
  // Section Title (h2)
  h2: {
    fontSize: '1.875rem', // 3xl
    fontWeight: 'bold',
    color: COLORS.accent,
    marginBottom: '2rem', // mb-8
    borderBottom: `4px solid ${COLORS.accent}`,
    paddingBottom: '1rem', // pb-4
    display: 'inline-block',
    paddingRight: '1.5rem', // pr-6
    userSelect: 'none',
  },
  // Quiz Grid (simulates responsive grid with auto-fit)
  quizGrid: {
    display: 'grid',
    // Simulates grid-cols-1, md:grid-cols-2, lg:grid-cols-3
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1.5rem', // gap-6
  },
  // Footer
  footer: {
    textAlign: 'center',
    marginTop: '4rem', // mt-16
    paddingBottom: '1rem', // pb-4
    fontSize: '0.875rem', // text-sm
    color: COLORS.primaryText,
    opacity: 0.5,
  }
};

// --- MOCK QUIZ DATA ---
const QUIZ_SECTIONS = [
  {
    title: "Data Struuctures & Algorithms",
    quizzes: [
      { id: 101, name: "DSA Set 1", questions: 25, duration: "35 min", marks: 0 },
      { id: 102, name: "DSA Set 2", questions: 20, duration: "30 min", marks: 0 },
      { id: 103, name: "DSA Set 3", questions: 15, duration: "20 min", marks: 0},
    ],
  },
  {
    title: "Cyber Security",
    quizzes: [
      { id: 201, name: "Cybersecurity Set 1", questions: 18, duration: "25 min", marks: 0},
      { id: 202, name: "Cybersecurity Set 2", questions: 12, duration: "15 min", marks: 0},
      { id: 203, name: "Cybersecurity Set 3", questions: 22, duration: "30 min", marks: 0 },
    ],
  },
  {
    title: "AI & ML",
    quizzes: [
      { id: 301, name: "AI Set 1", questions: 20, duration: "30 min", marks: 0 },
      { id: 302, name: "AI Set 2", questions: 15, duration: "20 min", marks: 0},
    ],
  },
  {
    title: "Aptitude",
    quizzes: [
      { id: 401, name: "Aptitude Set 1", questions: 30, duration: "40 min", marks: 0 },
      { id: 402, name: "Aptitude Set 2", questions: 20, duration: "25 min", marks: 0 },
      { id: 403, name: "Aptitude Set 3", questions: 15, duration: "20 min", marks: 0},
      { id: 404, name: "Aptitude Set 4", questions: 10, duration: "15 min", marks: 0},
    ],
  },
  {
    title: "Comin soon...",
    quizzes: [
      { id: 501, name: "Coming soon...", questions: 0, duration: "00 min", marks: 0 },
      { id: 502, name: "Coming soon...", questions: 0, duration: "00 min", marks: 0 },
    ],
  },
];

/**
 * QuizCard component displays individual quiz details and acts as a button,
 * using pure CSS-in-JS for styling.
 */
const QuizCard = ({ quiz }) => {
  const [clicked, setClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Common styles for the card to be merged with state-dependent styles
  const baseCardStyle = {
    width: '100%',
    padding: '1.5rem',
    textAlign: 'left',
    borderRadius: '0.75rem',
    boxShadow: `0 4px 6px -1px rgba(0, 0, 0, 0.5), 0 2px 4px -2px rgba(0, 0, 0, 0.5)`,
    transition: 'all 0.2s ease-in-out',
    border: `2px solid ${COLORS.accent}`,
    cursor: 'pointer',
    boxSizing: 'border-box',
    transform: clicked ? 'scale(0.98)' : 'scale(1)',
    outline: 'none',
  };

  // State-dependent styles (Hover/Focus/Clicked)
  const dynamicCardStyle = isHovered
    ? {
        backgroundColor: COLORS.accent,
        color: COLORS.primaryBg,
        boxShadow: `0 0 0 4px ${COLORS.accent}`,
      }
    : {
        backgroundColor: COLORS.primaryBg,
        color: COLORS.primaryText,
        // Add ring for clicked state even if not hovered
        ...(clicked ? { boxShadow: `0 0 0 4px ${COLORS.accent}` } : {}),
      };

  const currentCardStyle = { ...baseCardStyle, ...dynamicCardStyle };

  const detailLabelStyle = {
    fontWeight: '500',
    fontSize: '0.75rem', // text-xs
    color: isHovered ? COLORS.primaryBg : COLORS.accent,
    transition: 'color 0.2s',
  };

  const detailValueStyle = {
    fontSize: '1.125rem', // text-lg
    fontWeight: '800',
    color: isHovered ? COLORS.primaryBg : COLORS.primaryText,
  };

  const handleClick = () => {
    setClicked(true);
    console.log(`Starting Quiz: ${quiz.name}`);
    setTimeout(() => setClicked(false), 500);
  };
  
  // Use event handlers to simulate Tailwind's hover/focus classes
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const handleFocus = () => setIsHovered(true);
  const handleBlur = () => setIsHovered(false);

  return (
    <button
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      style={currentCardStyle}
      aria-label={`Start ${quiz.name} quiz`}
    >
      <h3 style={{
        fontSize: '1.25rem',
        fontWeight: 'bold',
        marginBottom: '0.75rem',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
      }}>
        {quiz.name}
      </h3>
      
      {/* Quiz Details Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '0.5rem',
        fontSize: '0.875rem',
      }}>
        
        {/* Questions */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={detailLabelStyle}>Questions</span>
          <span style={detailValueStyle}>{quiz.questions}</span>
        </div>
        
        {/* Duration */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={detailLabelStyle}>Duration</span>
          <span style={detailValueStyle}>{quiz.duration}</span>
        </div>
        
        {/* Max Marks */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={detailLabelStyle}>Max Marks</span>
          <span style={detailValueStyle}>{quiz.marks}</span>
        </div>
      </div>
    </button>
  );
};

/**
 * App component - Main dashboard layout.
 */
const App = () => {
  // Simple function to adjust padding for desktop screens
  const getAppPadding = () => {
    // This is a common pattern for JS responsive styling
    const isLargeScreen = window.innerWidth >= 1024;
    const isMediumScreen = window.innerWidth >= 640 && window.innerWidth < 1024;
    
    if (isLargeScreen) return '3rem'; // lg:p-12
    if (isMediumScreen) return '2rem'; // sm:p-8
    return '1rem'; // p-4
  };

  return (
    <div style={{...styles.appContainer, padding: getAppPadding() }}>
      
      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.h1}>
          Practice 
        </h1>
        <p style={styles.subtitle}>
          Select a quiz section to begin your assessment.
        </p>
      </header>

      {/* Sections Grid */}
      <main style={styles.main}>
        {QUIZ_SECTIONS.map((section, index) => (
          <section key={index} style={styles.section}>
            
            {/* Section Title */}
            <h2 style={styles.h2}>
              {section.title}
            </h2>

            {/* Quizzes Grid (Responsive Columns) */}
            <div style={styles.quizGrid}>
              {section.quizzes.map((quiz) => (
                <QuizCard key={quiz.id} quiz={quiz} />
              ))}
            </div>
          </section>
        ))}
      </main>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Study Metrics. Designed with Black, White, and #93b9b2.</p>
      </footer>
    </div>
  );
};

export default App;