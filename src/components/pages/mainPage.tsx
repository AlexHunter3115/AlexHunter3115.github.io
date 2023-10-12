import React from 'react';
import "../../styles/pagesStyles/mainPageStyles.css";

export const MainPageComponent: React.FC = () => {
  const videoId = 'Uai4vKiphKI'; 

  return (
    <div className='mainpage-container'>
      <div className='mainpage-video-container'>
        <div className='tv'>
          <iframe
            className='screen'
            title='YouTube Video'
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&mute=1&controls=0`}
            frameBorder='0'
            allow='autoplay; encrypted-media'
          />
          <div className="scanlines-two"></div>
          <div className="scanlines-one"></div>
        </div>
      </div>
      <div className='mainpage-text-container'>j</div>
    </div>
  );
};
