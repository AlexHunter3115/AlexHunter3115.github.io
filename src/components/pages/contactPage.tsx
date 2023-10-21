import React from "react";
import "../../styles/pagesStyles/contactPageStyles.css";
import "../../styles/pagesStyles/mainPageStyles.css";

import { fileNamesDictionary } from "../../data/constants";

export const ContactPageComponent: React.FC = () => {
  return (
    <div className="contact-container">
      <div className="text-section">
        <div className="text-box-container">
          <div className="text-box-title">About Me</div>
          <div className="text-box-text ">
            Hi, I'm Alex, a Games Technology graduate from UWE. I am passionate
            about game development and have extensive experience working with
            Unity. My main focus is on programming systems to implement in
            games, with a strong emphasis on Procedural Content Generation (PCG)
            and Artificial Intelligence (AI).
          </div>
          <div className="text-box-text ">
            During my time at UWE, I have worked on various game projects,
            honing my skills in Unity, C#, C++, and game design principles. I'm
            excited to bring my expertise to the industry and contribute to the
            development of innovative and engaging gaming experiences. Check out
            my featured work, and don't hesitate to get in touch if you'd like
            to collaborate or learn more about me.
          </div>

          <div className="text-box-text ">currently working at: <span className="highlighted-word">SOMEWHERE</span></div>
        </div>

        <div className='intro-links-container'>
          <img src={fileNamesDictionary.github} alt="github" />
          <img className="unique-animation" src={fileNamesDictionary.cv} alt="github" />
          <img src={fileNamesDictionary.linkedin} alt="github" />
          <img src={fileNamesDictionary.discord} alt="github" />
          <img src={fileNamesDictionary.gmail} alt="github" />
        </div>
      </div>
      <div className="logos-section">
        <div className="logo-boxes-container">
          <div className="logo-box-container">
            <div className="logo-box-title">Languages</div>
            <div className="logo-box-grid">
              <img src={fileNamesDictionary.cpp} title="cpp.svg"></img>
              <img src={fileNamesDictionary.csharp} title="csharp.svg"></img>
              <img src={fileNamesDictionary.rust} title="rust.svg"></img>
              <img src={fileNamesDictionary.python} title="python.svg"></img>
              <img src={fileNamesDictionary.css} title="css.svg"></img>
              <img src={fileNamesDictionary.html} title="html.svg"></img>
              <img src={fileNamesDictionary.typescript} title="typescript.svg"></img>
              <img src={fileNamesDictionary.cairo} title="cairo.svg"></img>
            </div>
          </div>

          <div className="logo-box-container">
            <div className="logo-box-title">Softwares</div>
            <div className="logo-box-grid">
              <img src={fileNamesDictionary.unity} title="unity.svg"></img>
              <img src={fileNamesDictionary.unreal} title="unreal.svg"></img>
              <img src={fileNamesDictionary.blender} title="blender.svg"></img>
              <img src={fileNamesDictionary.figma} title="figma.svg"></img>
              <img src={fileNamesDictionary.obs} title="obs.svg"></img>
              <img src={fileNamesDictionary.shotcut} title="shotcut.svg"></img>
            </div>
          </div>

          <div className="logo-box-container">
            <div className="logo-box-title">Libraries</div>
            <div className="logo-box-grid">
              <img src={fileNamesDictionary.react} title="react.svg"></img>
              <img src={fileNamesDictionary.bevy} title="bevy.svg"></img>
              <img src={fileNamesDictionary.raylib} title="raylib.svg"></img>
              <img src={fileNamesDictionary.dojo} title="dojo.svg"></img>
              <img src={fileNamesDictionary.p5js} title="p5.svg"></img>
              <img src={fileNamesDictionary.phaser} title="phaser.svg"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
