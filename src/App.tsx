// app.tsx

import { useEffect, useState } from 'react';
import './App.css';

import { Navbar, MenuState } from './components/navbarComponent';

import { BevyPageComponent } from './components/pages/bevyPage';
import { ShowcasePageComponent } from './components/pages/showcasePage';
import { ContactPageComponent } from './components/pages/contactPage';
import { MainPageComponent } from './components/pages/mainPage';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [menuState, setMenuState] = useState(MenuState.MAIN);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Ensure that if the menu state changes to itself, it goes to the main menu state
  const handleMenuChange = (newMenuState: MenuState) => {
    setIsTransitioning(true);

    // Wait for the transition to complete before updating the menu state
    setTimeout(() => {
      setIsTransitioning(false);
      setMenuState(newMenuState);
    }, 500); // Adjust the duration of the transition as needed (in milliseconds)
  };

  return (
    <div className='main-page-container'>
      <Navbar onMenuChange={handleMenuChange} />

      <div className={`page-content-container ${isTransitioning ? 'transition-out' : 'transition-in'}`}>
        {menuState === MenuState.MAIN && <MainPageComponent />}
        {menuState === MenuState.ABOUT_ME && <ShowcasePageComponent />}
        {menuState === MenuState.PROJECTS && <ContactPageComponent />}
        {menuState === MenuState.BEVY && <BevyPageComponent />}
      </div>
      <ToastContainer />
    </div>
    
  );
}

export default App;
