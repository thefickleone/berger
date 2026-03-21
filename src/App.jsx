import React, { Suspense, lazy } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import ColorPicker from './components/ColorPicker';

const HeroCanvas = lazy(() => import('./HeroCanvas'));
const ContactSection = lazy(() => import('./ContactSection'));
const Visualizer = lazy(() => import('./Visualizer'));
const ProductSection = lazy(() => import('./ProductSection'));

const SectionLoader = () => (
  <div className="h-96 w-full bg-primary flex items-center justify-center border-t border-white/5">
    <div className="text-secondary animate-pulse font-medium tracking-widest uppercase text-xs">
      Loading Premium Content...
    </div>
  </div>
);

const App = () => {
  return (
    <ThemeProvider>
      <div className="relative z-0 bg-primary min-h-screen"> 
        <div className="relative">
          <Suspense fallback={<div className="h-screen w-full bg-primary" />}>
            <HeroCanvas />
          </Suspense>
          <ColorPicker />
        </div>
        
        <Suspense fallback={<SectionLoader />}>
          <Visualizer />
          <ProductSection />
          <ContactSection />
        </Suspense>
      </div>
    </ThemeProvider>
  );
};

export default App;