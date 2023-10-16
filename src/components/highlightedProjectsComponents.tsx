import React, { useState } from 'react';
import "../App.css";
import "../styles/cardStyle.css";
import "../styles/highligthProjectStyle.css";
import "../styles/wholeFilterDatabaseStyles.css";

const maxIndex = 4;


interface HighlightProps {
    onStateChange: (newState: number) => void;
  }

export const HighlightedProjectsComponents: React.FC<HighlightProps> = ({ onStateChange }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const updateIndex = (change: number) => {
    let newIndex = currentIndex + change;

    if (newIndex < 0) {
      newIndex = maxIndex;
    } else if (newIndex > maxIndex) {
      newIndex = 0;
    }

    console.log(newIndex);
    setCurrentIndex(newIndex);
  };

  return (
    <>
      <div className='upper-container'>
        <div className='button-upper-container' onMouseDown={() => onStateChange(1)}>test button</div>
      </div>
      <div className='lower-container'>
        <div className='arrow-container'>
          <img src="discord.svg" alt="GitHub Logo" onMouseDown={() => updateIndex(-1)}/>
        </div>
        <div className='image-container'>
            <img src="discord.svg" alt="GitHub Logo" />
        </div>
        <div className='info-container'>
            <h1>Title</h1>
            <h2>Information</h2>
            <div className='info-tools-grid'>
                <img src="discord.svg" alt="GitHub Logo" onMouseDown={() => updateIndex(-1)}/>
                <img src="discord.svg" alt="GitHub Logo" onMouseDown={() => updateIndex(-1)} />
                <img src="discord.svg" alt="GitHub Logo" onMouseDown={() => updateIndex(-1)} />
                
            </div>
            <div className='button-grid'>
            <button className="navbar-button" onClick={() => {}}>test</button>
            <button className="navbar-button" onClick={() => {}}>test</button>
            <button className="navbar-button" onClick={() => {}}>test</button>
            <button className="navbar-button" onClick={() => {}}>test</button>
            <button className="navbar-button" onClick={() => {}}>test</button>
            <button className="navbar-button" onClick={() => {}}>test</button>
            </div>
        </div>
        <div className='arrow-container'>
          <img src="discord.svg" alt="GitHub Logo" onMouseDown={() => updateIndex(1)} />
        </div>
      </div>
    </>
  );
};

