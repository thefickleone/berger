import { useTheme } from './context/ThemeContext';\nimport React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Visualizer = ({ activeColor }) => {
  const { activeColor } = useTheme();
  return (
    <section className="py-24 px-6 bg-brand-dark relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute inset-0 z-10 top-0 left-1/4 w-96 h-96 bg-brand-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Room Preview Side */}
        <div className="relative group">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative aspect-[4/3] rounded-[40px] overflow-hidden border border-white/10 shadow-2xl bg-black"
          >
            {/* 1. Base Texture Layer (The Real Room) */}
            <img 
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200" 
              alt="Luxury Interior" 
              className="absolute inset-0 z-10 inset-0 w-full h-full object-cover opacity-80 grayscale contrast-125"
            />
            
            {/* 2. The "Smart" Paint Layer */}
            <motion.div 
              initial={false}
              animate={{ backgroundColor: activeColor }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 z-10 inset-0 mix-blend-multiply opacity-70"
              style={{ 
                // Using a mask-gradient to simulate light coming from a window
                maskImage: 'linear-gradient(to right, black 70%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to right, black 70%, transparent 100%)'
              }}
            />

            {/* 3. Highlight/Glow Layer - Simulates paint sheen */}
            <motion.div 
              animate={{ backgroundColor: activeColor }}
              className="absolute inset-0 z-10 inset-0 mix-blend-soft-light opacity-30 pointer-events-none"
            />
            
            {/* UI Overlays */}
            <div className="absolute inset-0 z-10 top-6 left-6 flex gap-2">
              <div className="px-3 py-1 bg-black/50 backdrop-blur-md rounded-full border border-white/10 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: activeColor, mixBlendMode: "multiply", opacity: 0.8 }} />
                <span className="text-[10px] font-bold text-white uppercase tracking-tighter">Live Engine</span>
              </div>
            </div>

            <div className="absolute inset-0 z-10 bottom-8 left-8 right-8 p-6 bg-black/20 backdrop-blur-xl border border-white/5 rounded-2xl">
              <p className="text-[10px] text-brand-accent font-black uppercase tracking-[0.2em] mb-1">Current Selection</p>
              <h4 className="text-xl font-bold text-white tracking-tight">Silk Glamour Luxury Emulsion</h4>
            </div>
          </motion.div>
        </div>

        {/* Content Side */}
        <div className="space-y-10">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
              VIRTUAL <br />
              <span className="text-brand-accent italic font-serif">sampling</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-md">
              Don't guess. See how <span className="text-white font-medium">Berger's</span> premium pigments react to the architecture of your space.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-brand-accent/50 transition-colors group">
              <div className="text-brand-accent font-black text-3xl mb-1 group-hover:scale-110 transition-transform origin-left">99%</div>
              <div className="text-[10px] uppercase text-slate-500 font-bold tracking-widest">Chromatic Accuracy</div>
            </div>
            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-brand-accent/50 transition-colors group">
              <div className="text-brand-accent font-black text-3xl mb-1 group-hover:scale-110 transition-transform origin-left">8K</div>
              <div className="text-[10px] uppercase text-slate-500 font-bold tracking-widest">Texture Mapping</div>
            </div>
          </div>

          <button className="group flex items-center gap-4 px-8 py-4 bg-white text-black rounded-full font-bold text-sm hover:bg-brand-accent transition-all">
            UPLOAD YOUR ROOM
            <div className="w-6 h-6 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-1 transition-transform">
              →
            </div>
          </button>
        </div>

      </div>
    </section>
  );
};

export default Visualizer;