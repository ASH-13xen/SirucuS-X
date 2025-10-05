import React from "react";
import Description from "../components/Description.jsx";
import Navbar from "../components/Navbar.jsx";
import Logo from "../components/Logo.jsx";

const primarycolor = "#93b9b2";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
</style>;

const homestyles = `
    .image-group {
        /* This container groups the box and the text name */
        display: flex;
        flex-direction: column; /* Stack image-box and text vertically */
        align-items: center; /* Center them horizontally */
        margin: 10px;
        text-align: center;
        width: 150px; /* Set a fixed width for alignment */
    }
    .box {
        width: 150px;
        height: 150px;
        background-color: #93b9b2;
        border-radius: 12px;
        display: flex; /* Keep this to center the image inside the box */
        justify-content: center;
        align-items: center;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        margin-bottom: 5px; /* Space between box and text */
    }
    .boxes {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px; /* Gap between the image-groups */
        position: absolute;
        top: 70vh;
        left: 19%;
    }
    .videos {
        height: 100px; /* Assuming this is the image height */
        max-width: 100%;
    } 
    .image-name {
        color: #93b9b2; /* Use your primary color for the text */
        font-weight: bold;
        padding-top: 5px;
        font-size: 1.5em;
    }
`;

const HomePage = () => {
  return (
    <div
      style={{backgroundColor: "#000000ff", height: "100vh", width: "100vw" }}
    >
      {/* <div>
        <Navbar />
      </div> */}

      <div style={{ position: "absolute", top: "55px", zIndex: 20 }}>
        <Logo />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "60vh",
          paddingTop: "90px",
          position: "absolute",
          width: "100%",
          top: "0px",
        }}
      >
        <Description />
      </div>

      <div
        style={{
          textAlign: "center",
          color: "white",
          fontWeight: "bold",
          padding: "20px",
          fontSize: "2em",
          position: "absolute",
          top: "60vh",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        Ratings Hierarchy On Our Platform
      </div>

      <style>{homestyles}</style>
      <div class="boxes">
        <div class="image-group">
          <div class="box">
            <img
              class="videos"
              src="\src\assets\parrot.gif"
              alt="A gif of a parrot"
            ></img>
          </div>
          <div class="image-name">1. Parrot</div>
        </div>

        <div class="image-group">
          <div class="box">
            <img
              class="videos"
              src="\src\assets\seal.gif"
              alt="A gif of a seal"
            ></img>
          </div>
          <div class="image-name">2. Seal</div>
        </div>

        <div class="image-group">
          <div class="box">
            <img
              class="videos"
              src="\src\assets\monkey.gif"
              alt="A gif of a monkey"
            ></img>
          </div>
          <div class="image-name">3. Monkey</div>
        </div>

        <div class="image-group">
          <div class="box">
            <img
              class="videos"
              src="\src\assets\bear.gif"
              alt="A gif of a bear"
            ></img>
          </div>
          <div class="image-name">4. Bear</div>
        </div>

        <div class="image-group">
          <div class="box">
            <img
              class="videos"
              src="\src\assets\elephant.gif"
              alt="A gif of an elephant"
            ></img>
          </div>
          <div class="image-name">5. Elephant</div>
        </div>

        <div class="image-group">
          <div class="box">
            <img
              class="videos"
              src="\src\assets\lion.gif"
              alt="A gif of a lion"
            ></img>
          </div>
          <div class="image-name">6. Lion</div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "0",
          color: "black",
          fontFamily: "'Playfair Display', serif",
          width: "100%",
          textAlign: "center",
          padding: "10px 0",
          backgroundColor: primarycolor,
          fontWeight: "bolder",
        }}
      >
        <p>
          -- Dr. Shyama Prashad Mukherjee International Institute of Technology
          --
        </p>
      </div>
    </div>
  );
};

export default HomePage;
