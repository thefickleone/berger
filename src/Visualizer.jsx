import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from './context/ThemeContext';

const Visualizer = () => {
  // We only pull activeColor from our global ThemeContext
  const { activeColor } = useTheme();

  return (
    <section className="relative w-full h-[600px] mx-auto overflow-hidden bg-gray-900 p-10">
      <div className="flex flex-col items-center justify-center h-full">
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-white text-[40px] font-bold mb-10"
        >
          Color Visualizer
        </motion.h2>

        <div className="relative w-full max-w-4xl h-[400px] rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-700">
          {/* Background Image Placeholder - Replace with your actual room/object image */}
          <div className="absolute inset-0 bg-white">
             <img 
               src="/room-mockup.jpg" 
               alt="Room Visualizer" 
               className="w-full h-full object-cover"
               onError={(e) => { e.target.style.display = 'none'; }}
             />
          </div>

          {/* The Magic: The Paint Overlay */}
          <motion.div 
            animate={{ backgroundColor: activeColor }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 opacity-60"
            style={{ mixBlendMode: 'multiply' }}
          />

          <div className="absolute bottom-5 left-5 bg-black/50 p-4 rounded-lg backdrop-blur-md">
            <p className="text-white font-medium">Selected Berger Shade:</p>
            <div className="flex items-center gap-3 mt-2">
              <div 
                className="w-6 h-6 rounded-full border border-white" 
                style={{ backgroundColor: activeColor }}
              />
              <span className="text-white uppercase tracking-widest">{activeColor}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Visualizer;