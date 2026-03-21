import React from 'react';
import { motion } from 'framer-motion';

const Visualizer = ({ activeColor }) => {
  return (
    <section className="py-24 px-6 bg-white/5 backdrop-blur-3xl border-y border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Room Preview Side */}
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-tr from-brand-accent/20 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            {/* The "Room" Background - Using a high-end minimalist interior placeholder */}
            <div 
              className="absolute inset-0 bg-gray-800 mix-blend-multiply transition-colors duration-1000"
              style={{ backgroundColor: activeColor, opacity: 0.6 }}
            />
            <img 
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200" 
              alt="Luxury Interior" 
              className="w-full h-full object-cover grayscale"
            />
            
            {/* Gloss Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            
            <div className="absolute bottom-6 left-6">
              <span className="text-[10px] tracking-widest uppercase text-white/50">Live Preview</span>
              <h4 className="text-white font-bold">Modern Minimalist Suite</h4>
            </div>
          </div>
        </div>

        {/* Content Side */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
              SEE IT IN <br />
              <span className="text-brand-accent italic">YOUR SPACE</span>
            </h2>
            <p className="mt-6 text-slate-400 leading-relaxed">
              Our AI-driven visualizer simulates how light interacts with 
              <span className="text-white"> Berger Premium Finishes </span> 
              at different times of the day. Change the palette below to see the atmosphere transform.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <span className="block text-brand-accent font-bold text-xl">99%</span>
              <span className="text-[10px] uppercase text-slate-500 tracking-tighter">Color Accuracy</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <span className="block text-brand-accent font-bold text-xl">4K</span>
              <span className="text-[10px] uppercase text-slate-500 tracking-tighter">Texture Detail</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Visualizer;