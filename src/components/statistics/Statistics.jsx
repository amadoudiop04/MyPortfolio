import React from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import "./Statistics.css";

const Statistics = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  const stats = [
    { number: "2+", label: "Années d'expérience", icon: "💼" },
    { number: "10+", label: "Projets réalisés", icon: "🚀" },
    { number: "5+", label: "Technologies maîtrisées", icon: "⚡" },
    { number: "100%", label: "Passionné", icon: "🔥" },
  ];

  return (
    <section className={`statistics-section scroll-animate ${isVisible ? 'visible' : ''}`} ref={ref}>
      <div className="statistics-container">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className="stat-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-number">{stat.number}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;

