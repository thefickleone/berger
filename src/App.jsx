import React, { useState, Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HeroCanvas = lazy(() => import('./HeroCanvas'));
const Visualizer = lazy(() => import('./Visualizer'));
const ProductSection = lazy(() => import('./ProductSection'));
const ContactSection = lazy(() => import('./ContactSection'));

const CanvasLoader = () => (
  <div className="absolute inset-0 flex items-center justify-center bg-brand-dark">
    <div className="w-10 h-10 border-2 border-brand-accent/20 border-t-brand-accent rounded-full animate-spin" />
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="fixed top-0 w-full z-[100] px-4 md:px-8 py-4 backdrop-blur-xl bg-black/40 border-b border-white/5">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-brand-accent rounded-full blur-[1px]" />
          <span className="text-lg font-black tracking-tighter text-white">FIRDOUS</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest text-slate-400">
          {['Home', 'Visualizer', 'Products', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-brand-accent transition-colors">{item}</a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden sm:block px-5 py-2 bg-brand-accent text-black text-[10px] font-black rounded-full uppercase tracking-tighter">
            Get Quote
          </button>
          
          {/* Mobile Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white p-2">
            <div className="w-6 h-0.5 bg-current mb-1.5" />
            <div className="w-6 h-0.5 bg-current" />
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-brand-card border-t border-white/5 mt-4"
          >
            <div className="flex flex-col p-6 gap-6 text-sm font-bold uppercase tracking-widest">
              {['Home', 'Visualizer', 'Products', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)}>{item}</a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

function App() {
  const [activeColor, setActiveColor] = useState('#EAB308');

  return (
    <div className="relative min-h-screen bg-brand-dark overflow-x-hidden">
      <Navbar />

      <main className="relative z-10">
        <section id="home" className="relative h-[90vh] md:h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
          <Suspense fallback={<CanvasLoader />}>
            <HeroCanvas activeColor={activeColor} />
          </Suspense>
          
          <div className="text-center z-20 pointer-events-none">
            <motion.h1 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-5xl sm:text-7xl md:text-9xl font-black tracking-tighter leading-[0.85] text-white"
            >
              PREMIUM <br />
              <span style={{ color: activeColor }} className="transition-colors duration-1000 italic">FINISHES</span>
            </motion.h1>
          </div>

          <div className="absolute bottom-10 flex flex-col items-center gap-4 z-30 w-full px-6">
            <div className="flex gap-3 md:gap-4 p-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md overflow-x-auto max-w-full">
              {['#EAB308', '#991b1b', '#0d9488', '#f8fafc', '#4c1d95'].map((hex) => (
                <button
                  key={hex}
                  onClick={() => setActiveColor(hex)}
                  className={`w-8 h-8 md:w-10 md:h-10 shrink-0 rounded-full transition-all duration-500 ${activeColor === hex ? 'scale-110 ring-2 ring-white ring-offset-4 ring-offset-black' : 'opacity-40'}`}
                  style={{ backgroundColor: hex }}
                />
              ))}
            </div>
          </div>
        </section>

        <Suspense fallback={<div className="h-96" />}>
          <div id="visualizer"><Visualizer activeColor={activeColor} /></div>
          <div id="products"><ProductSection /></div>
          <div id="contact"><ContactSection /></div>
        </Suspense>

        <footer className='py-10 text-center border-t border-white/5'>
          <p className='text-[9px] text-slate-600 uppercase tracking-[0.3em]'>Firdous Gallery • Berger Paints Verified</p>
        </footer>
      </main>
    </div>
  );
}

export default App;