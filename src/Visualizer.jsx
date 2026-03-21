import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from './context/ThemeContext';
import { Upload } from 'lucide-react';

const Visualizer = () => {
  const { activeColor } = useTheme();
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Create a local temporary URL for the uploaded image
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  return (
    <section className="relative w-full min-h-[700px] flex items-center justify-center bg-primary p-6 md:p-10 border-t border-white/5 z-10">
      <div className="flex flex-col items-center w-full max-w-5xl">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4"
          >
            Live Color <span className="text-brand-accent italic font-serif">Visualizer</span>
          </motion.h2>
          <p className="text-slate-400">Upload a photo of your room to see how our premium finishes look in your space.</p>
        </div>

        <div className="relative w-full aspect-video md:h-[500px] bg-tertiary rounded-3xl overflow-hidden shadow-2xl border border-white/10 group flex items-center justify-center">
          
          {/* Conditional Rendering: Show Upload Prompt or The Image */}
          {!image ? (
            <label className="flex flex-col items-center justify-center w-full h-full cursor-pointer hover:bg-white/5 transition-colors">
              <Upload className="w-12 h-12 text-slate-400 mb-4 group-hover:text-brand-accent transition-colors" />
              <span className="text-slate-300 font-medium">Click to upload your room photo</span>
              <span className="text-slate-500 text-sm mt-2">JPG, PNG (Max 5MB)</span>
              <input 
                type="file" 
                accept="image/*" 
                className="hidden" 
                onChange={handleImageUpload} 
              />
            </label>
          ) : (
            <>
              {/* Base Uploaded Image */}
              <img 
                src={image} 
                alt="Your Room" 
                className="w-full h-full object-cover"
              />

              {/* The Paint Overlay Layer */}
              <motion.div 
                animate={{ backgroundColor: activeColor }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0 opacity-50 mix-blend-multiply pointer-events-none"
              />

              {/* Reset/Change Image Button */}
              <label className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full cursor-pointer border border-white/10 hover:bg-white/10 transition-colors">
                <span className="text-xs text-white font-bold tracking-wider uppercase">Change Photo</span>
                <input 
                  type="file" 
                  accept="image/*" 
                  className="hidden" 
                  onChange={handleImageUpload} 
                />
              </label>
            </>
          )}

          {/* Color Indicator Pill */}
          <div className="absolute bottom-6 left-6 bg-black/60 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/10 flex items-center gap-4">
            <div 
              className="w-8 h-8 rounded-full border-2 border-white shadow-lg" 
              style={{ backgroundColor: activeColor }}
            />
            <div>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mb-0.5">Active Shade</p>
              <p className="text-sm text-white font-medium uppercase tracking-wider">{activeColor}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Visualizer;
