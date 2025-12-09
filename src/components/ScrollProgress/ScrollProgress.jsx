import React from 'react';
import { useScrollProgress } from '../../hooks/useScrollProgress';
import './ScrollProgress.css';

const ScrollProgress = () => {
  const scrollProgress = useScrollProgress();

  return (
    <div className="scroll-progress-container">
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />
    </div>
  );
};

export default ScrollProgress;

