import React, { Suspense, lazy } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import ColorPicker from './components/ColorPicker';
import Navbar from './components/Navbar';
import ErrorBoundary from './components/ErrorBoundary'; // 💡 Fix: Imported Error Boundary

const HeroCanvas = lazy(() => import('./HeroCanvas'));
const Visualizer = lazy(() => import('./Visualizer'));
const ProductSection = lazy(() => import('./ProductSection'));
const ContactSection = lazy(() => import('./ContactSection'));

const App = () => {
  return (
    <ThemeProvider>
      <div className="relative z-0 bg-[#050505] min-h-screen font-sans selection:bg-blue-500/30 text-slate-200"> 
        <Navbar />
        
        {/* 💡 Fix: Wrapping the risky 3D Canvas in the Error Boundary */}
        <ErrorBoundary>
          <Suspense fallback={<div className="h-screen w-full bg-[#050505]" />}>
            <HeroCanvas />
          </Suspense>
        </ErrorBoundary>

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
