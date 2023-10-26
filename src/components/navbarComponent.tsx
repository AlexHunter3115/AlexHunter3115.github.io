
import React from 'react';
import "../App.css";
import "../styles/navbarStyles.css";

import { toast } from 'react-toastify';

import { fileNamesDictionary } from '../data/constants';

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

  const toggleMenu = (newMenuState: MenuState) => {
    onMenuChange(newMenuState); 
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
        <div className="navbar-contact-containter">
          <img className='navbar-logo-img' src={fileNamesDictionary.cv} alt="CV" onMouseDown={() => { notify("Downloading CV") }}/>
          <img className='navbar-logo-img' src={fileNamesDictionary.github} alt="Github" onMouseDown={() => { notify("Github Redirect") }}/>
          <img className='navbar-logo-img' src={fileNamesDictionary.linkedin} alt="LinkedIn" onMouseDown={() => { notify("LinkedIn Redirect") }}/>
        </div>
        <div className="navbar-spacer"></div>
        <div className="navbar-home-button-container">
          <button className="navbar-button" onClick={() => toggleMenu(MenuState.MAIN)}>Home</button>
        </div>
    </div>
  );
};