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
  <motion.nav 
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ type: "spring", stiffness: 100, damping: 20 }}
    className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-md bg-black/20 border-b border-white/5"
  >
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-brand-accent rounded-full blur-[2px] animate-pulse-slow" />
      <span className="text-xl font-bold tracking-tighter text-white">FIRDOUS GALLERY</span>
    </div>
    <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
      {['Home', 'Visualizer', 'Products', 'Contact'].map((item) => (
        <a key={item} href="#" className="hover:text-brand-accent transition-colors relative group">
          {item}
          <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-accent transition-all group-hover:w-full" />
        </a>
      ))}
    </div>
    <motion.button 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-5 py-2 bg-brand-accent text-black text-xs font-bold rounded-full shadow-[0_0_20px_rgba(234,179,8,0.3)]"
    >
      GET QUOTE
    </motion.button>
  </motion.nav>
);

function App() {
  const [activeColor, setActiveColor] = useState(colors[0].hex);

  return (
    <div className="relative min-h-[200vh] bg-brand-dark overflow-x-hidden transition-colors duration-1000">
      <div 
        className="fixed inset-0 opacity-20 pointer-events-none transition-colors duration-1000" 
        style={{ background: `radial-gradient(circle at 50% 50%, ${activeColor} 0%, transparent 70%)` }}
      />
      
      <Navbar />

      <main className="relative z-10">
        <section className="relative h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
          <HeroCanvas activeColor={activeColor} />
          
          <div className="text-center z-20">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
              }}
            >
              <motion.h1 
                variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.9]"
              >
                THE NEW <br />
                <span style={{ color: activeColor }} className="transition-colors duration-500 italic">STANDARD</span>
              </motion.h1>
              
              <motion.p 
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                className="mt-8 text-slate-400 text-sm md:text-base tracking-[0.2em] uppercase"
              >
                Berger Verified Gallery • Jatra, West Bengal
              </motion.p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-12 flex flex-col items-center gap-4"
          >
            <span className="text-[10px] text-slate-500 uppercase tracking-widest">Select Finish</span>
            <div className="flex gap-4 p-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              {colors.map((c) => (
                <button
                  key={c.hex}
                  onClick={() => setActiveColor(c.hex)}
                  className={`w-8 h-8 rounded-full transition-all duration-500 ${activeColor === c.hex ? 'scale-125 ring-2 ring-white ring-offset-4 ring-offset-black' : 'opacity-40 hover:opacity-100'}`}
                  style={{ backgroundColor: c.hex }}
                />
              ))}
            </div>
          </motion.div>
        </section>

        {/* New Scroll-Triggered Section Preview */}
        <section className="py-32 px-10 max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center"
          >
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Unmatched Durability.</h2>
              <p className="text-slate-400 leading-relaxed">
                Using the latest Italian technology from Berger, we provide finishes that 
                don't just look premium but stay premium for decades.
              </p>
            </div>
            <div className="aspect-video bg-white/5 rounded-3xl border border-white/10 animate-pulse" />
          </motion.div>
        </section>
      </main>
    </div>
  );
}

export default App;