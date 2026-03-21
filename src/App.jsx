import React, { Suspense, lazy } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import ColorPicker from './components/ColorPicker';
import Navbar from './components/Navbar';

const HeroCanvas = lazy(() => import('./HeroCanvas'));
const Visualizer = lazy(() => import('./Visualizer'));
const ProductSection = lazy(() => import('./ProductSection'));
const ContactSection = lazy(() => import('./ContactSection'));

const App = () => {
  return (
    <ThemeProvider>
      <div className="relative z-0 bg-[#050505] min-h-screen font-sans selection:bg-blue-500/30 text-slate-200"> 
        <Navbar />
        <Suspense fallback={<div className="h-screen w-full bg-[#050505]" />}>
          <HeroCanvas />
        </Suspense>
        <ColorPicker />
        <Suspense fallback={<div className="h-96 w-full bg-[#050505]" />}>
          <Visualizer />
          <ProductSection />
          <ContactSection />
        </Suspense>
      </div>
    </ThemeProvider>
  );
};
export default App;