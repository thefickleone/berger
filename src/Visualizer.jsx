import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from './context/ThemeContext';
import { UploadCloud } from 'lucide-react';

const Visualizer = () => {
  const { activeColor } = useTheme();
  const [roomImage, setRoomImage] = useState("/room-mockup.jpg");
  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) setRoomImage(URL.createObjectURL(file));
  };

  return (
    <section id="visualizer" className="relative w-full py-24 mx-auto overflow-hidden bg-[#050505] px-6">
      <div className="text-center mb-10 max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4">Interactive <span className="text-blue-500">Visualizer</span></h2>
        <p className="text-slate-400">Upload a photo of your space and see how Berger premium shades transform your walls instantly.</p>
      </div>

      <div className="relative w-full max-w-5xl mx-auto h-[400px] md:h-[600px] rounded-3xl overflow-hidden border border-white/10 group shadow-2xl">
        <img src={roomImage} alt="Room" loading="lazy" className="absolute inset-0 w-full h-full object-cover" onError={(e) => { e.target.src = "/fallback-room.jpg"; }} />
        <motion.div animate={{ backgroundColor: activeColor }} transition={{ duration: 0.5 }} className="absolute inset-0 opacity-60 mix-blend-multiply pointer-events-none" />
        
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-sm">
          <input type="file" accept="image/*" ref={fileInputRef} onChange={handleImageUpload} className="hidden" />
          <button onClick={() => fileInputRef.current?.click()} className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold backdrop-blur-md transition-all shadow-xl border border-white/20">
            <UploadCloud size={24} /> Upload Your Room
          </button>
        </div>
      </div>
    </section>
  );
};
export default Visualizer;