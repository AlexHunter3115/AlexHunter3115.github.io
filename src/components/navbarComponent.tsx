
import React from 'react';
import "../App.css";
import "../styles/navbarStyles.css";

import { toast } from 'react-toastify';

export enum MenuState {
  MAIN,
  ABOUT_ME,
  PROJECTS,
  BEVY
}

interface NavbarProps {
  onMenuChange: (newMenuState: MenuState) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onMenuChange }) => {
  const [menuState, setMenuState] = React.useState(MenuState.MAIN);

  const toggleMenu = (newMenuState: MenuState) => {

    if (newMenuState === menuState) {
      return;
    }

    setMenuState(newMenuState);
    onMenuChange(newMenuState); 
    console.log(newMenuState);
  };

  const notify = (message: string) => toast(message, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });

  return (
    <div className="navbar-main-container">
      <div className='navbar-state-changers-container'>
        <button className={`navbar-button `} onClick={() => toggleMenu(MenuState.MAIN)}>HOME</button>
        <div className="navbar-divider"></div>
        <button className={`navbar-button `} onClick={() => toggleMenu(MenuState.ABOUT_ME)}>ABOUT ME</button>
        <div className="navbar-divider"></div>
        <button className={`navbar-button `} onClick={() => toggleMenu(MenuState.PROJECTS)}>PROJECTS</button>
        <div className="navbar-divider"></div>
        <button className={`navbar-button `} onClick={() => toggleMenu(MenuState.BEVY)}>BEVY</button>
      </div>
      <div className='navbar-blank-space'></div>
      <div className='navbar-grid-container'>
        <div >
          <img className="logo-pic" src="githubIcon.svg" alt="GitHub Logo" onMouseDown={() => { notify("github clicked") }}/>
        </div>
        <div>
          <img className="logo-pic" src="discord.svg" alt="GitHub Logo" onMouseDown={() => { notify("discord clicked") }}/>
        </div>
        <div >
          <img className="logo-pic" src="gmail.svg" alt="GitHub Logo" onMouseDown={() => { notify("gmail clicked") }}/>
        </div>
        <div>
          <img className="logo-pic" src="linkedin.svg" alt="GitHub Logo" onMouseDown={() => { notify("linkein clicked") }}/>
        </div>
        <div>
          {/* <img className="github-logo" src="cv.svg" alt="GitHub Logo" /> */}
        </div>
        <div >
          <img className="logo-pic" src="cv.svg" alt="GitHub Logo" onMouseDown={() => { notify("cv clicked") }}/>
        </div>
      </div>
    </div>
  );
};
