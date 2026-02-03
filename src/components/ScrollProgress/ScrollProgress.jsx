import React from 'react';
import { useScrollProgress } from '../../hooks/useScrollProgress';

const ScrollProgress = () => {
  const scrollProgress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-indigo-500 to-pink-500 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />
    </div>
  );
};

export default ScrollProgress;
