import React, { useState, useEffect, useRef } from 'react';
import "../../styles/pagesStyles/mainPageStyles.css";
import "../../styles/glitchStyleLogo.css";


import { MenuState } from '../navbarComponent';

interface MainPageProps {
  onMenuChange: (newMenuState: MenuState) => void;
}



export const MainPageComponent: React.FC<MainPageProps> = ({ onMenuChange }) => {
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
        <div className='intro-text-container'></div>
        <div className='intro-links-container'></div>
      </div>

      <div className='mainpage-info-container'>
        <div className='info-boxes-container'>
          <div className='info-box-container' onMouseDown={() => {onMenuChange(MenuState.ABOUT_ME )}}></div>
          <div className='info-box-container' onMouseDown={() => {onMenuChange(MenuState.PROJECTS )}}></div>
          <div className='info-box-container' onMouseDown={() => {onMenuChange(MenuState.BEVY )}}></div>
        </div>
      </div>
    </div>
  );
};
