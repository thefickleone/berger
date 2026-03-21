import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from './context/ThemeContext';
import { UploadCloud } from 'lucide-react'; // Using lucide-react from your package.json

const Visualizer = () => {
  const { activeColor } = useTheme();
  const [roomImage, setRoomImage] = useState("/room-mockup.jpg");
  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Create a temporary local URL for the uploaded image
      const imageUrl = URL.createObjectURL(file);
      setRoomImage(imageUrl);
    }
  };

  return (
    <section className="relative w-full min-h-[700px] mx-auto overflow-hidden bg-primary p-6 md:p-10 flex flex-col items-center justify-center">
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h2 className="text-white text-[40px] md:text-[50px] font-black tracking-tight mb-4">
          Interactive <span className="text-brand-accent">Visualizer</span>
        </h2>
        <p className="text-secondary max-w-xl mx-auto">
          Upload a photo of your space and see how Berger premium shades transform your walls instantly.
        </p>
      </motion.div>

      <div className="relative w-full max-w-5xl h-[400px] md:h-[600px] rounded-3xl overflow-hidden shadow-card border border-white/10 group">
        
        {/* Background Room Image */}
        <div className="absolute inset-0 bg-black">
           <img 
             src={roomImage} 
             alt="Your Room" 
             loading="lazy"
             className="w-full h-full object-cover transition-opacity duration-500"
             onError={(e) => { e.target.src = "/fallback-room.jpg"; }}
           />
        </div>

        {/* The Magic: Paint Overlay */}
        <motion.div 
          animate={{ backgroundColor: activeColor }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 opacity-60 pointer-events-none"
          style={{ mixBlendMode: 'multiply' }}
        />

        {/* Interactive Upload UI (Visible on hover/mobile) */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-sm">
          <input 
            type="file" 
            accept="image/*" 
            ref={fileInputRef} 
            onChange={handleImageUpload} 
            className="hidden" 
          />
          <button 
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-full font-bold backdrop-blur-md transition-all transform hover:scale-105 shadow-xl"
          >
            <UploadCloud size={24} />
            Upload Your Room
          </button>
        </div>

        {/* Active Color HUD */}
        <div className="absolute bottom-6 left-6 bg-black/70 p-4 rounded-2xl backdrop-blur-xl border border-white/10 shadow-2xl">
          <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest mb-2">Active Berger Shade</p>
          <div className="flex items-center gap-3">
            <div 
              className="w-8 h-8 rounded-full border-2 border-white shadow-lg" 
              style={{ backgroundColor: activeColor }}
            />
            <span className="text-white font-mono font-medium text-lg">{activeColor}</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Visualizer;