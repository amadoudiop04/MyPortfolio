import React from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const Statistics = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  const stats = [
    { number: "2+", label: "Années d'expérience", icon: "💼", gradient: "from-blue-500 to-cyan-500" },
    { number: "10+", label: "Projets réalisés", icon: "🚀", gradient: "from-red-600 to-red-500" },
    { number: "5+", label: "Technologies maîtrisées", icon: "⚡", gradient: "from-red-500 to-pink-500" },
    { number: "100%", label: "Passionné", icon: "🔥", gradient: "from-pink-500 to-red-500" },
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
              className="group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-lg border border-slate-700/50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 text-center overflow-hidden"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} blur-xl opacity-30`} />
              </div>

              <div className="relative z-10">
                <div className="text-5xl sm:text-6xl mb-4 group-hover:scale-125 transition-transform duration-300 animate-float">
                  {stat.icon}
                </div>
                <div className={`text-4xl sm:text-5xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-3`}>
                  {stat.number}
                </div>
                <div className="text-slate-300 font-medium text-sm">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;

