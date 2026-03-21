import React, { useState, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';

// Lazy load heavy components
const HeroCanvas = lazy(() => import('./HeroCanvas'));
const Visualizer = lazy(() => import('./Visualizer'));
const ProductSection = lazy(() => import('./ProductSection'));
const ContactSection = lazy(() => import('./ContactSection'));

// Elegant Loading State
const CanvasLoader = () => (
  <div className="absolute inset-0 flex items-center justify-center bg-brand-dark">
    <div className="w-10 h-10 border-2 border-brand-accent/20 border-t-brand-accent rounded-full animate-spin" />
  </div>
);

const Navbar = () => (
  <motion.nav 
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-md bg-black/20 border-b border-white/5"
  >
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-brand-accent rounded-full blur-[2px] animate-pulse-slow" />
      <span className="text-xl font-bold tracking-tighter text-white uppercase">Firdous</span>
    </div>
    <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
      {['Home', 'Visualizer', 'Products', 'Contact'].map((item) => (
        <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-brand-accent transition-colors relative group">
          {item}
        </a>
      ))}
    </div>
    <button className="px-5 py-2 bg-brand-accent text-black text-xs font-bold rounded-full shadow-lg active:scale-95 transition-transform">
      GET QUOTE
    </button>
  </motion.nav>
);

function App() {
  const [activeColor, setActiveColor] = useState('#EAB308');

  return (
    <div className="relative min-h-screen bg-brand-dark overflow-x-hidden selection:bg-brand-accent selection:text-black">
      <Navbar />

      <main className="relative z-10">
        {/* Hero Section */}
        <section id="home" className="relative h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
          <Suspense fallback={<CanvasLoader />}>
            <HeroCanvas activeColor={activeColor} />
          </Suspense>
          
          <div className="text-center z-20 pointer-events-none">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.9] text-white">
                THE NEW <br />
                <span style={{ color: activeColor }} className="transition-colors duration-1000 italic">STANDARD</span>
              </h1>
            </motion.div>
          </div>

          <div className="absolute bottom-12 flex flex-col items-center gap-4 z-30">
            <div className="flex gap-4 p-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              {['#EAB308', '#991b1b', '#0d9488', '#f8fafc', '#4c1d95'].map((hex) => (
                <button
                  key={hex}
                  onClick={() => setActiveColor(hex)}
                  className={`w-8 h-8 rounded-full transition-all duration-500 ${activeColor === hex ? 'scale-125 ring-2 ring-white ring-offset-4 ring-offset-black' : 'opacity-40 hover:opacity-100'}`}
                  style={{ backgroundColor: hex }}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Deferred Sections */}
        <Suspense fallback={<div className="h-96 bg-brand-dark" />}>
          <div id="visualizer"><Visualizer activeColor={activeColor} /></div>
          <div id="products"><ProductSection /></div>
          <div id="contact"><ContactSection /></div>
        </Suspense>

        <footer className='py-10 text-center border-t border-white/5'>
          <p className='text-[10px] text-slate-600 uppercase tracking-widest'>© 2026 Firdous Gallery • Berger Verified</p>
        </footer>
      </main>
    </div>
  );
}

export default App;