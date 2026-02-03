import React, { useEffect, useState } from 'react';

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark' || 
           (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.add('light');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <button 
      className="fixed top-20 right-4 z-40 p-3 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 hover:border-slate-600 transition-all duration-300 transform hover:scale-110"
      onClick={() => setIsDark(!isDark)}
      aria-label="Toggle dark mode"
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? '☀️' : '🌙'}
    </button>
  );
};

export default DarkModeToggle;
