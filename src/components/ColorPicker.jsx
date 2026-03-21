import React from 'react';
import { useTheme } from '../context/ThemeContext';

const colors = [
  { name: 'Berger Blue', hex: '#2196F3' },
  { name: 'Classic Red', hex: '#F44336' },
  { name: 'Emerald Green', hex: '#4CAF50' },
  { name: 'Golden Glow', hex: '#FFC107' },
  { name: 'Deep Purple', hex: '#673AB7' },
];

const ColorPicker = () => {
  const { activeColor, setActiveColor } = useTheme();

  return (
    <div className="fixed bottom-10 right-10 z-50 bg-black/40 backdrop-blur-lg p-4 rounded-2xl border border-white/20">
      <p className="text-white text-xs font-bold mb-3 uppercase tracking-widest">Select Shade</p>
      <div className="flex gap-3">
        {colors.map((color) => (
          <button
            key={color.hex}
            onClick={() => setActiveColor(color.hex)}
            className={`w-8 h-8 rounded-full border-2 transition-transform hover:scale-110 ${activeColor === color.hex ? 'border-white scale-125' : 'border-transparent'}`}
            style={{ backgroundColor: color.hex }}
            title={color.name}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;