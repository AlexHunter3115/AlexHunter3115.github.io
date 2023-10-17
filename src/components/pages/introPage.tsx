import React, { useState, useEffect, useRef } from 'react';
import "../../styles/pagesStyles/mainPageStyles.css";
import "../../styles/glitchStyleLogo.css";


import { MenuState } from '../navbarComponent';

interface MainPageProps {
  onMenuChange: (newMenuState: MenuState) => void;
}



export const IntroPageComponent: React.FC<MainPageProps> = ({ onMenuChange }) => {
  const imageUrls = [
    'cv.svg',
    'discord.svg',
    'gmail.svg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const glitchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const changeImage = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
      );

      // Randomly set the position of the glitch class
      const glitchElement = glitchRef.current;
      if (glitchElement) {
        const parentWidth = glitchElement.parentElement?.offsetWidth || 0;
        const parentHeight = glitchElement.parentElement?.offsetHeight || 0;

        const glitchWidth = glitchElement.offsetWidth;
        const glitchHeight = glitchElement.offsetHeight;

        const randomLeft = Math.random() * (parentWidth - glitchWidth);
        const randomTop = Math.random() * (parentHeight - glitchHeight);

        glitchElement.style.left = `${randomLeft}px`;
        glitchElement.style.top = `${randomTop}px`;
      }
    };

    const intervalId = setInterval(changeImage, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='mainpage-container'>
      <div className='mainepage-spacer'></div>

      <div className='mainepage-intro-container'>
        <div className='intro-logo-container'>
          <div className="glitch" ref={glitchRef}>
            <img className="" src={imageUrls[currentImageIndex]} alt={`Image ${currentImageIndex}`} />
            <div className="glitch__layers">
              <div className="glitch__layer" style={{ backgroundImage: `url(${imageUrls[currentImageIndex]})` }}></div>
              <div className="glitch__layer" style={{ backgroundImage: `url(${imageUrls[currentImageIndex]})` }}></div>
              <div className="glitch__layer" style={{ backgroundImage: `url(${imageUrls[currentImageIndex]})` }}></div>
            </div>
          </div>
        </div>
        <div className='intro-text-container'>
          <h1>Hey, I'm Alex, a Game Developer</h1>
        </div>
        <div className='intro-links-container'>
          <img src="discord.svg" alt="github" />
          <img src="discord.svg" alt="github" />
          <img src="discord.svg" alt="github" />

        </div>
      </div>

      <div className='mainpage-info-container'>
        <div className='info-boxes-container'>
          <div className='info-box-container' onMouseDown={() => {onMenuChange(MenuState.ABOUT_ME )}}>
            <div className='info-box-title-container'>
              <h1 style={{color: "rgb(113, 113, 113)"}}>01.</h1>
              <h1 style={{color: "white"}}>About Me</h1>
            </div>
            <div className='info-box-text'>I am a game developer based in the UK. I am currently working freelance</div>
          </div>

          <div className='info-box-container' onMouseDown={() => {onMenuChange(MenuState.PROJECTS )}}>
          <div className='info-box-title-container'>
              <h1 style={{color: "rgb(113, 113, 113)"}}>02.</h1>
              <h1 style={{color: "white"}}>Projects</h1>
            </div>
            <div className='info-box-text'>Check out my best projects</div>
          </div>

          <div className='info-box-container' onMouseDown={() => {onMenuChange(MenuState.BEVY )}}>
          <div className='info-box-title-container'>
              <h1 style={{color: "rgb(113, 113, 113)"}}>03.</h1>
              <h1 style={{color: "white"}}>Bevy</h1>
            </div>
            <div className='info-box-text'>Run the bevy simulation (Upcoming)</div>
          </div>
        </div>
      </div>
    </div>
  );
};
