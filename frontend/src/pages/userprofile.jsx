import React from "react";

//modified user data
const mockUserData = {
  photoUrl: "https://placehold.co/150x150/5B21B6/FFFFFF?text=BP",
  username: "Boss Patel",
  gmail: "boss.patel@example.com",
  contactNo: "+91 98765 43210",
  collegeDetails: {
    year: "3rd Year",
    branch: "Computer Science & Engineering",
    rollNo: "CS21B007",
  },
  overallRating: 4.5,
  individualRatings: {
    'Data Structures & Algos (DSA)': 4.8,
    'Web Development': 4.2,
    'Cybersecurity': 3.5,
    'AI/ML': 4.6,
    'Aptitude': 4.9,
  },
};


const Userprofile = () => {
  return (
    <div style={{ backgroundColor: "#000000ff", width: "100%", height: "100vh", overflowY: "auto" }}>
      <div>
      </div>
      <h1 style={{ color: "#ffffff", textAlign: "center", padding: "20px", fontWeight: "bold", fontSize: "2rem" }}>
        WELCOME TO USER PROFILE PAGE
      </h1>
    </div>
  );
};

export default Userprofile;
