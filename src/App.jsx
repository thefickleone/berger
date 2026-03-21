import { ThemeProvider } from './context/ThemeContext';\nimport React, { useState, useEffect, Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ColorProvider, useColor } from './context/ColorContext';

const HeroCanvas = lazy(() => import('./HeroCanvas')    </ThemeProvider>\n  );
const Visualizer = lazy(() => import('./Visualizer')    </ThemeProvider>\n  );
const ProductSection = lazy(() => import('./ProductSection')    </ThemeProvider>\n  );
const ContactSection = lazy(() => import('./ContactSection')    </ThemeProvider>\n  );

// Reuse previous Navbar and Loader components...
const CanvasLoader = () => (
  <div className="absolute inset-0 flex items-center justify-center bg-brand-dark z-50">
    <div className="relative">
      <div className="w-20 h-20 border-t-2 border-brand-accent rounded-full animate-spin opacity-20" />
      <div className="absolute inset-0 flex items-center justify-center"><div className="w-2 h-2 bg-brand-accent rounded-full animate-pulse" /></div>
    </div>
  </div>
    </ThemeProvider>\n  );

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false    </ThemeProvider>\n  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100    </ThemeProvider>\n  );
    };

    window.addEventListener("scroll", handleScroll    </ThemeProvider>\n  );
    return (\n    <ThemeProvider>) => window.removeEventListener("scroll", handleScroll    </ThemeProvider>\n  );
  }, []    </ThemeProvider>\n  );

  const [isOpen, setIsOpen] = useState(false    </ThemeProvider>\n  );
  return (\n    <ThemeProvider>
    <nav className="fixed top-0 w-full z-[100] px-4 md:px-8 py-4 backdrop-blur-xl bg-black/40 border-b border-white/5">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-brand-accent rounded-full blur-[1px]" />
          <span className="text-lg font-black tracking-tighter text-white uppercase">Firdous</span>
        </div>
        <div className="hidden md:flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
          {['Home', 'Visualizer', 'Products', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors">{item}</a>
          ))}
        </div>
        <button className="hidden sm:block px-6 py-2 bg-brand-accent text-black text-[10px] font-black rounded-full uppercase">Get Quote</button>
      </div>
    </nav>
      </ThemeProvider>\n  );
};

const MainContent = () => {
  const { activeColor, updateColor } = useColor(    </ThemeProvider>\n  );

  return (\n    <ThemeProvider>
    <main className="relative z-10">
      <section id="home" className="relative h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        <Suspense fallback={<CanvasLoader />}>
          <HeroCanvas />
        </Suspense>
        
        <div className="text-center z-20 pointer-events-none">
          <motion.h1 className="text-6xl sm:text-8xl md:text-[10rem] font-black tracking-tighter leading-[0.8] text-white uppercase">
            PREMIUM <br />
            <span style={{ color: activeColor }} className="transition-colors duration-1000 font-serif italic lowercase">finishes</span>
          </motion.h1>
        </div>

        <div className="absolute bottom-12 flex flex-col items-center gap-4 z-30 w-full px-6">
          <div className="flex gap-4 p-4 rounded-full bg-black/40 border border-white/10 backdrop-blur-2xl">
            {['#EAB308', '#991b1b', '#0d9488', '#f8fafc', '#4c1d95'].map((hex) => (
              <button 
                key={hex} 
                onClick={() => updateColor(hex)} 
                className={`w-10 h-10 shrink-0 rounded-full transition-all duration-500 ${activeColor === hex ? 'scale-125 ring-2 ring-white' : 'opacity-40'}`} 
                style={{ backgroundColor: hex }} 
              />
            ))}
          </div>
        </div>
      </section>

      <Suspense fallback={<div className="h-96" />}><Visualizer /></Suspense>
      <Suspense fallback={<div className="h-96" />}><ProductSection /></Suspense>
      <Suspense fallback={<div className="h-96" />}><ContactSection /></Suspense>
    </main>
      </ThemeProvider>\n  );
};

function App() {
  return (\n    <ThemeProvider>
    <ColorProvider>
      <div className="relative min-h-screen bg-brand-dark selection:bg-brand-accent selection:text-black">
        <Navbar />
        <MainContent />
      </div>
    </ColorProvider>
      </ThemeProvider>\n  );
}

export default App;