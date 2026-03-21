import React, { Suspense, lazy } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import ColorPicker from './components/ColorPicker';

// Lazy load heavy components
const HeroCanvas = lazy(() => import('./HeroCanvas'));
const ContactSection = lazy(() => import('./ContactSection'));
const Visualizer = lazy(() => import('./Visualizer'));

const App = () => {
  return (
    <ThemeProvider>
      <div className="relative z-0 bg-primary"> 
        <div className="relative">
          <Suspense fallback={<div className="h-screen w-full bg-primary flex items-center justify-center text-white">Loading 3D Experience...</div>}>
            <HeroCanvas />
          </Suspense>
          
          {/* Floating Color Picker UI */}
          <ColorPicker />
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