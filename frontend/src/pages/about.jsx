import React, { useEffect, useRef } from 'react';
import './docs/DocPage.css';
import '../css/About.css';
import varshilProfileImage from '../assets/images/varshil.jpg';
import dauooProfileImage from '../assets/images/dauoo.jpg';
import ashankProfileImage from '../assets/images/ashank.png';

// --- Custom Hook for Scroll Animations ---
const useScrollAnimation = () => {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('scroll-visible');
        } else {
          entry.target.classList.remove('scroll-visible');
        }
      },
      { root: null, rootMargin: '0px', threshold: 0.1 }
    );
    if (ref.current) { observer.observe(ref.current); }
    return () => { if (ref.current) { observer.unobserve(ref.current); } };
  }, []);
  return ref;
};


const About = () => {
  const philosophyRef = useScrollAnimation();
  const teamRef = useScrollAnimation();
  const callToActionRef = useScrollAnimation();

  return (
    <div className="doc-container">
      <h1 className="doc-title scroll-hidden" ref={useScrollAnimation()}>Where Skills Take the Stage</h1>

      <p className="doc-paragraph scroll-hidden" ref={useScrollAnimation()}>
        Welcome to Sircus, the platform where aspiring tech professionals come to train, practice, and perfect their craft. We believe that learning technical skills shouldn't be a dry, academic exercise. It should be an engaging performance where you build the confidence and competence to shine in the spotlight of interviews and your career.
      </p>

      {/* Section 2: Our Philosophy */}
      <div className="scroll-hidden" ref={philosophyRef}>
        <h2 className="doc-subtitle">Our Philosophy: The Three Rings of Mastery</h2>
        <p className="doc-paragraph">
          Just like a grand circus, mastering a skill involves distinct stages. Our platform is built around this principle, guiding you through each ring of development.
        </p>
        <ul className="doc-list">
          <li><b>The Training Ring (Learn):</b> This is where you master the fundamentals. Our curated learning paths provide clear, concise content on everything from Data Structures to Web Development.</li>
          <li><b>The Rehearsal Stage (Practice):</b> True mastery comes from repetition. Our practice section provides a vast array of problems and exercises to drill your skills.</li>
          <li><b>The Spotlight Performance (Test):</b> It's time to show what you've learned. Our skill tests simulate the pressure of a real technical interview to get you ready for the main event.</li>
        </ul>
      </div>

      {/* Section 3: The Team */}
      <div className="scroll-hidden" ref={teamRef}>
        <h2 className="doc-subtitle">Meet the Ringmasters</h2>
        <p className="doc-paragraph">
          Sircus was founded by a team of students from IIIT Naya Raipur, passionate about creating a platform that is not only effective but also motivating and fun to use.
        </p>
        <div className="team-section">
          {/* Varshil's Card */}
          <div className="team-member-card">
            <img src={varshilProfileImage} alt="Varshil Pandey" />
            <h3>Varshil Pandey</h3>
            <p className="role">Full-Stack Developer & Team Lead</p>
            <p>Driving the full-stack development and system architecture.<br/>B.Tech CSE (2024-2028)<br />IIIT Naya Raipur</p>
          </div>
          {/* Dauoo Bhaiya's Card */}
          <div className="team-member-card">
            <img src={dauooProfileImage} alt="Dauoo Bhaiya" />
            <h3>Dauoo Bhaiya</h3>
            <p className="role">Frontend Designer & UI/UX Enthusiast</p>
            <p>Crafting the user experience and visual identity of the platform.<br/>B.Tech CSE (2024-2028)<br />IIIT Naya Raipur</p>
          </div>
          {/* Ashank's Card */}
          <div className="team-member-card">
            <img src={ashankProfileImage} alt="Ashank Mishra" />
            <h3>Ashank Mishra</h3>
            <p className="role">Backend & Database Architect</p>
            <p>Building the robust server-side logic and managing the data infrastructure.<br/>B.Tech CSE (2024-2028)<br />IIIT Naya Raipur</p>
          </div>
        </div>
      </div>

      {/* Section 4: Call to Action */}
      <div className="scroll-hidden" ref={callToActionRef}>
        <h2 className="doc-subtitle">Ready to Join the Show?</h2>
        <p className="doc-paragraph">
          Your journey to technical mastery starts here. Whether you're a student just starting out or a professional looking to sharpen your skills, Sircus provides the tools you need to succeed. Pick a skill, start learning, and prepare to take the stage.
        </p>
      </div>
    </div>
  );
};

export default About;