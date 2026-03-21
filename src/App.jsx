import React, { useState, useEffect, Suspense, lazy } from 'react';
import { ThemeProvider } from './context/ThemeContext';

// Lazy load heavy components
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
      <div className="relative z-0 bg-black"> 
        {/* Changed bg-primary to bg-black until we fix Tailwind config */}
        <div className="relative">
          <Suspense fallback={<div className="h-screen w-full bg-black flex items-center justify-center text-white">Loading 3D Experience...</div>}>
            <HeroCanvas scrolled={scrolled} />
          </Suspense>
        </div>
        
        <Suspense fallback={<div className="h-96 w-full bg-gray-900" />}>
          <Visualizer />
          <ContactSection />
        </Suspense>
      </div>
    </ThemeProvider>
  );
};

export default App;