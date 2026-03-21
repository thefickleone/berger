import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Centralized state for the Berger Paint Color
  const [activeColor, setActiveColor] = useState("#2196F3"); // Initial Berger Blue

  return (
    <ThemeContext.Provider value={{ activeColor, setActiveColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook for easy access in any component
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};