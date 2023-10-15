import React, { useState, useEffect } from 'react';
import "../../styles/pagesStyles/mainPageStyles.css";
import "../../styles/glitchStyleLogo.css"


export const MainPageComponent: React.FC = () => {
  const imageUrls = [
    'cv.svg',
    'discord.svg',
    'gmail.svg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const changeImage = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
      );
    };

    const intervalId = setInterval(changeImage, 10000);

    return () => clearInterval(intervalId);
  }, []);



  return (
    <div className='mainpage-container'>
      <div className='mainepage-text-conatiner'>
        <div className='text-container'>
          <h1>Hi there, I am Alex</h1>
          <h2>Games Technology graduate from UWE</h2>
          <h4>
            I am passionate about game development with my main focus being on
            programming systems to implement in games, with a strong emphasis on
            Procedural Content Generation (PCG) and Artificial Intelligence (AI).
          </h4>
          <h4>
            Check out my featured work, and don't hesitate to get in touch if
            you'd like to collaborate or learn more about me.
          </h4>
        </div>
      </div>
      <div className='mainpage-logo-conatiner'>
        <div className='logo-container'>
          <div className="glitch">
            <img className="" src={imageUrls[currentImageIndex]} alt={`Image ${currentImageIndex}`} />
            <div className="glitch__layers">
              <div className="glitch__layer" style={{ backgroundImage: `url(${imageUrls[currentImageIndex]})` }}></div>
              <div className="glitch__layer" style={{ backgroundImage: `url(${imageUrls[currentImageIndex]})` }}></div>
              <div className="glitch__layer" style={{ backgroundImage: `url(${imageUrls[currentImageIndex]})` }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
