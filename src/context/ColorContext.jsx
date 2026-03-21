import React, { createContext, useContext, useState } from 'react';

const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
  const [activeColor, setActiveColor] = useState('#EAB308'); // Berger Gold Default

  const updateColor = (color) => {
    setActiveColor(color);
  };

  return (
    <ColorContext.Provider value={{ activeColor, updateColor }}>
      {children}
    </ColorContext.Provider>
  );
};

export const useColor = () => {
  const context = useContext(ColorContext);
  if (!context) {
    throw new Error('useColor must be used within a ColorProvider');
  }
  return context;
};