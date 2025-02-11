import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light-mode');

  const toggleTheme = () => {
    const newTheme = theme === 'light-mode' ? 'dark-mode' : 'light-mode';
    setTheme(newTheme);
    // localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    // const localTheme = localStorage.getItem('theme');
    // localTheme && setTheme(localTheme);
    let currentTime=new Date();
    const currentHour = currentTime.getHours();
    (currentHour<6 || currentHour>=18) &&  setTheme('dark-mode')
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
