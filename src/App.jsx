import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';

// Lazy load heavy components for performance
const HeroCanvas = lazy(() => import('./HeroCanvas'));
const ContactSection = lazy(() => import('./ContactSection'));
const Visualizer = lazy(() => import('./Visualizer'));

const App = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            {/* If Navbar is a separate file, it goes here */}
            <Suspense fallback={<div className="h-screen w-full bg-black" />}>
              <HeroCanvas scrolled={scrolled} />
            </Suspense>
          </div>
          
          <Suspense fallback={<div className="h-96 w-full bg-gray-900" />}>
            <Visualizer />
            <ContactSection />
          </Suspense>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;