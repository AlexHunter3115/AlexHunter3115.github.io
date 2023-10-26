

import { useState } from 'react';
import "../../App.css";

import { BevyPageComponent } from './BevySimulationPage';
import { ShowcasePageComponent } from './ProjectsShowcasePages';
import { ContactPageComponent } from './AboutMePage';
import { IntroPageComponent } from './LandingPage';


import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { MenuState,Navbar } from '../navbarComponent';

export const MainPageComponent: React.FC = () => {
  
    const [menuState, setMenuState] = useState(MenuState.MAIN);
    const [isTransitioning, setIsTransitioning] = useState(false);
  
    const handleMenuChange = (newMenuState: MenuState) => {
  
      if (menuState === newMenuState) {
        return;
      }
      setIsTransitioning(true);
  
      setTimeout(() => {
        setIsTransitioning(false);
        setMenuState(newMenuState);
      }, 500); // Adjust the duration of the transition as needed (in milliseconds)
    };
  
  return (
    <div className='main-page-container'>
      <Navbar onMenuChange={handleMenuChange} />

      <div className={`page-content-container ${isTransitioning ? 'transition-out' : 'transition-in'}`}>
        {menuState === MenuState.MAIN && <IntroPageComponent onMenuChange={handleMenuChange}/>}
        {menuState === MenuState.PROJECTS && <ShowcasePageComponent />}
        {menuState === MenuState.ABOUT_ME && <ContactPageComponent />}
        {menuState === MenuState.BEVY && <BevyPageComponent />}
      </div>
      <ToastContainer />
    </div>
  );
};
