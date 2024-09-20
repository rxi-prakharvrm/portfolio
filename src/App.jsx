import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './utils/Navigation';
import About from './components/About';
import Projects from './components/Projects';
import Technologies from './components/Technologies';
import Footer from './components/Footer';

const App = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1000);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1000);
    };

    window.addEventListener('resize', handleResize);
    
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="main-section">
      {isSmallScreen ? (
        <>
          <About />
          <Projects />
          <Technologies />
          <Footer />
        </>
      ) : (
        <>
          <Navigation />
          <Outlet />
        </>
      )}
    </div>
  );
};

export default App;
