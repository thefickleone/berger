import React, { Suspense } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import ColorPicker from './components/ColorPicker';
import Navbar from './components/Navbar';
import ErrorBoundary from './components/ErrorBoundary';

// 💡 Fix: Direct imports instead of lazy(). This prevents Suspense crashes!
import HeroCanvas from './HeroCanvas';
import Visualizer from './Visualizer';
import ProductSection from './ProductSection';
import ContactSection from './ContactSection';

const App = () => {
  return (
    <ThemeProvider>
      <div className="relative z-0 bg-[#050505] min-h-screen font-sans selection:bg-blue-500/30 text-slate-200"> 
        <Navbar />
        
        {/* 3D gets an ErrorBoundary so it doesn't kill the whole app if WebGL fails */}
        <ErrorBoundary>
          <HeroCanvas />
        </ErrorBoundary>

        <ColorPicker />
        <Visualizer />
        <ProductSection />
        <ContactSection />
      </div>
    </ThemeProvider>
  );
};
export default App;
