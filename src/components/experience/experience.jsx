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
        name: "No-code Tool",
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
  if (level >= 80) return "Advanced";
  if (level >= 60) return "Intermediate";
  return "Beginner";
};

const Experience = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="experience" className="py-20 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div
          className={`flex flex-col lg:flex-row justify-between items-center gap-12 mb-16 fall-item ${isVisible ? "fall-in" : ""}`}
          ref={ref}
        >
          <div className="text-center lg:text-left flex-1">
            <h2 className="text-xl sm:text-2xl text-slate-400 font-lobster mb-2">Explore My</h2>
            <h3 className="text-3xl sm:text-5xl font-bold font-lobster bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Skills
            </h3>
          </div>
        </div>

        {/* Skills Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {skills.map((section, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-900/50 border border-slate-300 dark:border-slate-700/50 rounded-2xl p-8 shadow-md hover:shadow-xl hover:shadow-indigo-600/10 hover:-translate-y-1 transition-[box-shadow,transform] duration-300 fall-item ${isVisible ? "fall-in" : ""}`}
              style={{ transitionDelay: `${120 + index * 110}ms` }}
            >
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <div className="w-2 h-8 bg-gradient-to-b from-indigo-600 to-violet-500 rounded" />
                {section.title}
              </h4>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {section.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center gap-3 p-4 bg-slate-100/50 dark:bg-slate-900/50 rounded-lg hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-all duration-300"
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
                      <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">{item.name}</p>
                      <span className="text-xs px-2 py-1 bg-indigo-600/20 text-indigo-600 dark:text-indigo-400 rounded-full inline-block mt-1">
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
        <div
          className={`bg-white dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-900/50 border border-slate-300 dark:border-slate-700/50 rounded-2xl p-8 shadow-md hover:shadow-lg hover:shadow-indigo-600/10 fall-item ${isVisible ? "fall-in" : ""}`}
          style={{ transitionDelay: "340ms" }}
        >
          <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <div className="w-2 h-8 bg-gradient-to-b from-indigo-600 to-violet-500 rounded" />
            Certifications
          </h4>

          <ul className="space-y-4">
            {certifications.map((cert, idx) => (
              <li
                key={idx}
                className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-4 bg-slate-100/50 dark:bg-slate-900/50 rounded-lg hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-all duration-300 border-l-2 border-indigo-600"
              >
                <div>
                  <p className="text-slate-900 dark:text-white font-semibold">{cert.name}</p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{cert.issuer}</p>
                </div>
                <span className="px-3 py-1 bg-violet-500/20 text-violet-600 dark:text-violet-300 rounded-full text-sm font-medium whitespace-nowrap">
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
