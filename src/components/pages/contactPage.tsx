import React from "react";
import "../../styles/pagesStyles/contactPageStyles.css";

export const ContactPageComponent: React.FC = () => {
  return (
    <div className="contact-container">
      <div className="text-section">
        <div className="text-box-container">
          <h2 className="text-box-title">ABOUNT ME</h2>
          <h4>
            Hi, I'm Alex, a Games Technology graduate from UWE. I am passionate
            about game development and have extensive experience working with
            Unity. My main focus is on programming systems to implement in
            games, with a strong emphasis on Procedural Content Generation (PCG)
            and Artificial Intelligence (AI).{" "}
          </h4>
          <h4>
            During my time at UWE, I have worked on various game projects,
            honing my skills in Unity, C#, C++, and game design principles. I'm
            excited to bring my expertise to the industry and contribute to the
            development of innovative and engaging gaming experiences. Check out
            my featured work, and don't hesitate to get in touch if you'd like
            to collaborate or learn more about me.{" "}
          </h4>
          <h4>currently working at</h4>
        </div>
      </div>
      <div className="logos-section">
        <div className="logo-boxes-container">
          <div className="logo-box-container">
            <div className="logo-box-title">NAME</div>
            <div className="logo-box-grid">
              <img src="discord.svg"></img>
              <img src="discord.svg"></img>
              <img src="discord.svg"></img>
              <img src="discord.svg"></img>
              <img src="discord.svg"></img>
              <img src="discord.svg"></img>
              <img src="discord.svg"></img>
              <img src="discord.svg"></img>
              <img src="discord.svg"></img>
            </div>
          </div>

          <div className="logo-box-container">
            <div className="logo-box-title">NAME</div>
            <div className="logo-box-grid">
              <img src="discord.svg"></img>
              <img src="discord.svg"></img>
              <img src="discord.svg"></img>
              <img src="discord.svg"></img>
              <img src="discord.svg"></img>
              <img src="discord.svg"></img>
              <img src="discord.svg"></img>
              <img src="discord.svg"></img>
              <img src="discord.svg"></img>
            </div>
          </div>

          <div className="logo-box-container">
            <div className="logo-box-title">NAME</div>
            <div className="logo-box-grid">
              <img src="discord.svg"></img>
              <img src="discord.svg"></img>
              <img src="discord.svg"></img>
              <img src="discord.svg"></img>
              <img src="discord.svg"></img>
              <img src="discord.svg"></img>
              <img src="discord.svg"></img>
              <img src="discord.svg"></img>
              <img src="discord.svg"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
