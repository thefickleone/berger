import HeroCanvas from './HeroCanvas';\nimport React from 'react';
import { motion } from 'framer-motion';

// Simple Navbar Component with Glassmorphism
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
  return (
    <div className="relative min-h-screen bg-brand-dark overflow-x-hidden">
      {/* Background Ambient Light Effects */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-accent/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      
      <Navbar />

      <main>
        {/* Hero Section Placeholder (Next Step) */}
        <section className="relative h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">\n          <HeroCanvas />
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black text-center tracking-tighter leading-none"
          >
            THE ART OF <br />
            <span className="text-brand-accent">PREMIUM PAINT</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-slate-400 text-lg max-w-lg text-center"
          >
            Verified Berger Paint shop in Jatra, Birbhum. Bringing futuristic 
            digital visualization to your home.
          </motion.p>
        </section>
      </main>
    </div>
  );
}

export default App;