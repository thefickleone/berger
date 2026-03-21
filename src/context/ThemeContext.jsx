
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [activeColor, setActiveColor] = useState("#2196F3"); // Default Berger Blue

  return (
    <ThemeContext.Provider value={{ activeColor, setActiveColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
