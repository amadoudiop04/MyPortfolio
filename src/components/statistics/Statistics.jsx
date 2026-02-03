import React from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const Statistics = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  const stats = [
    { number: "2+", label: "Années d'expérience", icon: "💼" },
    { number: "10+", label: "Projets réalisés", icon: "🚀" },
    { number: "5+", label: "Technologies maîtrisées", icon: "⚡" },
    { number: "100%", label: "Passionné", icon: "🔥" },
  ];

  return (
    <section 
      className={`py-16 px-4 sm:px-8 transform transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`} 
      ref={ref}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-slate-800 to-slate-900/50 border border-slate-700/50 rounded-xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-center group"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl sm:text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-slate-300 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;

