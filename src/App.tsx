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
        {menuState === MenuState.MAIN && <MainPageComponent onMenuChange={handleMenuChange}/>}
        {menuState === MenuState.PROJECTS && <ShowcasePageComponent />}
        {menuState === MenuState.ABOUT_ME && <ContactPageComponent />}
        {menuState === MenuState.BEVY && <BevyPageComponent />}
      </div>
      <ToastContainer />
    </div>
    
  );
}

export default App;
