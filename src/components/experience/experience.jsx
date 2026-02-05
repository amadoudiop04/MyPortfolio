import React from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const skills = [
  {
    title: "Web development",
    items: [
      { name: "Golang", icon: "go/go-original.svg", level: 70 },
      { name: "JavaScript", icon: "javascript/javascript-original.svg", level: 80 },
      { name: "Git", icon: "git/git-original.svg", level: 75 },
      { name: "Node.js", icon: "nodejs/nodejs-original.svg", level: 70 },
      { name: "HTML", icon: "html5/html5-original.svg", level: 90 },
      { name: "CSS", icon: "css3/css3-original.svg", level: 85 },
      { name: "React", icon: "react/react-original.svg", level: 80 },
      { name: "Java", icon: "java/java-original.svg", level: 60 },
      { name: "Csharp", icon: "csharp/csharp-original.svg", level: 65 },
    ],
  },
  {
    title: "Tools & Databases",
    items: [
      { name: "Jira", icon: "jira/jira-original.svg", level: 70 },
      { name: "Docker", icon: "docker/docker-original.svg", level: 60 },
      { name: "Figma", icon: "figma/figma-original.svg", level: 75 },
      { name: "SQL", icon: "mysql/mysql-original.svg", level: 70 },
      { name: "Sqlite", icon: "sqlite/sqlite-original.svg", level: 75 },
      {
        name: "Outil No-code",
        icon: "https://www.logoai.com/uploads/output/2025/02/17/340ef059721362bf72cc43085038428b.jpg",
        isExternal: true,
        level: 80,
      },
      { name: "Linux", icon: "linux/linux-original.svg", level: 65 },
    ],
  },
];

const certifications = [
  { name: "Opquast - Maîtrise de la qualité en projet web", year: 2025, issuer: "Opquast" },
];

const getLevelLabel = (level) => {
  if (level >= 80) return "Avancé";
  if (level >= 60) return "Intermédiaire";
  return "Débutant";
};

const Experience = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="experience" className="py-20 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div 
          className={`flex flex-col lg:flex-row justify-between items-center gap-12 mb-16 transform transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} 
          ref={ref}
        >
          <div className="text-center lg:text-left flex-1">
            <h2 className="text-xl sm:text-2xl text-slate-400 font-lobster mb-2">
              Explore My
            </h2>
            <h3 className="text-3xl sm:text-5xl font-bold font-lobster bg-gradient-to-r from-red-500 to-pink-400 bg-clip-text text-transparent">
              Experience
            </h3>
          </div>
          
          {/* Animated IT Orbit */}
          <div className="relative w-32 h-32 lg:w-40 lg:h-40" aria-hidden="true">
            {/* Rotating circle background */}
            <div className="absolute inset-0 border-2 border-slate-700 rounded-full animate-spin" style={{animationDuration: '20s'}} />
            <div className="absolute inset-2 border border-slate-600 rounded-full animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}} />
            
            {/* Animated dots */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-red-600 rounded-full animate-pulse" />
            <div className="absolute bottom-4 right-2 w-3 h-3 bg-pink-500 rounded-full animate-pulse" style={{animationDelay: '0.3s'}} />
            <div className="absolute bottom-4 left-2 w-3 h-3 bg-red-600 rounded-full animate-pulse" style={{animationDelay: '0.6s'}} />
            
            {/* Center text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-red-600 to-pink-500 bg-clip-text text-transparent">
                IT
              </span>
            </div>
          </div>
        </div>

        {/* Skills Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {skills.map((section, index) => (
            <div
              className={`bg-gradient-to-br from-slate-800 to-slate-900/50 border border-slate-700/50 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:shadow-red-600/10 transform hover:-translate-y-1 transition-all duration-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              key={index}
              style={{transitionDelay: `${index * 0.1}s`}}
            >
              <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <div className="w-2 h-8 bg-gradient-to-b from-red-600 to-pink-500 rounded" />
                {section.title}
              </h4>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {section.items.map((item, i) => (
                  <div 
                    key={i}
                    className="flex flex-col items-center gap-3 p-4 bg-slate-900/50 rounded-lg hover:bg-slate-800/50 transition-all duration-300"
                  >
                    <img
                      src={
                        item.isExternal
                          ? item.icon
                          : `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${item.icon}`
                      }
                      alt={`${item.name} logo`}
                      className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                      loading="lazy"
                    />
                    <div className="text-center">
                      <p className="text-xs sm:text-sm font-semibold text-white">{item.name}</p>
                      <span className="text-xs px-2 py-1 bg-red-600/20 text-red-400 rounded-full inline-block mt-1">
                        {getLevelLabel(item.level)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className={`bg-gradient-to-br from-slate-800 to-slate-900/50 border border-slate-700/50 rounded-2xl p-8 shadow-lg hover:shadow-red-600/10 transform transition-all duration-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <div className="w-2 h-8 bg-gradient-to-b from-red-600 to-pink-500 rounded" />
            Certifications
          </h4>
          
          <ul className="space-y-4">
            {certifications.map((cert, idx) => (
              <li 
                key={idx}
                className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-4 bg-slate-900/50 rounded-lg hover:bg-slate-800/50 transition-all duration-300 border-l-2 border-red-600"
              >
                <div>
                  <p className="text-white font-semibold">{cert.name}</p>
                  <p className="text-slate-400 text-sm mt-1">{cert.issuer}</p>
                </div>
                <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm font-medium whitespace-nowrap">
                  {cert.year}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
