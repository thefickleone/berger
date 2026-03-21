import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroCanvas from './HeroCanvas';

const colors = [
  { name: 'Berger Gold', hex: '#EAB308' },
  { name: 'Royal Crimson', hex: '#991b1b' },
  { name: 'Deep Teal', hex: '#0d9488' },
  { name: 'Premium Silk', hex: '#f8fafc' },
  { name: 'Midnight Violet', hex: '#4c1d95' },
];

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-md bg-black/20 border-b border-white/5">
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-brand-accent rounded-full blur-[2px] animate-pulse-slow" />
      <span className="text-xl font-bold tracking-tighter text-white">FIRDOUS GALLERY</span>
    </div>
    <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
      <a href="#" className="hover:text-brand-accent transition-colors">Home</a>
      <a href="#" className="hover:text-brand-accent transition-colors">Visualizer</a>
      <a href="#" className="hover:text-brand-accent transition-colors">Products</a>
      <a href="#" className="hover:text-brand-accent transition-colors">Contact</a>
    </div>
    <button className="px-5 py-2 bg-brand-accent text-black text-xs font-bold rounded-full hover:scale-105 transition-transform">
      GET QUOTE
    </button>
  </nav>
);

function App() {
  const [activeColor, setActiveColor] = useState(colors[0].hex);

  return (
    <div className="relative min-h-screen bg-brand-dark overflow-x-hidden transition-colors duration-1000" style={{ backgroundColor: `${activeColor}05` }}>
      {/* Dynamic Ambient Light */}
      <div 
        className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full blur-[120px] pointer-events-none transition-colors duration-1000" 
        style={{ backgroundColor: `${activeColor}20` }}
      />
      
      <Navbar />

      <main className="relative z-10">
        <section className="relative h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
          <HeroCanvas activeColor={activeColor} />
          
          <div className="text-center z-20 pointer-events-none">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-black tracking-tighter leading-none"
            >
              EXPERIENCE <br />
              <span style={{ color: activeColor }} className="transition-colors duration-500">COLOR LUXURY</span>
            </motion.h1>
          </div>

          {/* Premium Floating Color Picker */}
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="absolute bottom-12 flex gap-4 p-4 rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10 z-30"
          >
            {colors.map((c) => (
              <button
                key={c.hex}
                onClick={() => setActiveColor(c.hex)}
                className={`w-10 h-10 rounded-full border-2 transition-all duration-300 ${activeColor === c.hex ? 'scale-125 border-white' : 'border-transparent opacity-50'}`}
                style={{ backgroundColor: c.hex }}
                title={c.name}
              />
            ))}
          </motion.div>
        </section>
      </main>
    </div>
  );
}

export default App;