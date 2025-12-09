import React from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import "./experience.css";

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
    <section id="experience" className="experience-section">
      <div className={`experience-header scroll-animate ${isVisible ? "visible" : ""}`} ref={ref}>
        <div className="header-text">
          <h2 className="title">Explore My</h2>
          <h3 className="title-2">Experience</h3>
        </div>
        <div className="tech-orbit" aria-hidden="true">
          <span className="orbit-dot dot-1" />
          <span className="orbit-dot dot-2" />
          <span className="orbit-dot dot-3" />
          <span className="orbit-core">IT</span>
        </div>
      </div>

      <div className="card-container">
        {skills.map((section, index) => (
          <div
            className={`card scroll-animate ${isVisible ? "visible" : ""}`}
            key={index}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <h4 className="card-title">{section.title}</h4>
            <div className="skills-grid">
              {section.items.map((item, i) => (
                <div className="skill-item" key={i}>
                  <div className="skill-header">
                    <img
                      src={
                        item.isExternal
                          ? item.icon
                          : `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${item.icon}`
                      }
                      alt={`${item.name} logo`}
                      className="skill-icon"
                      loading="lazy"
                    />
                    <div className="skill-info">
                      <span className="skill-name">{item.name}</span>
                      <span className="skill-level-chip">{getLevelLabel(item.level)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className={`certifications scroll-animate ${isVisible ? "visible" : ""}`}>
        <h4 className="card-title">Certifications</h4>
        <ul className="cert-list">
          {certifications.map((cert, idx) => (
            <li key={idx} className="cert-item">
              <div className="cert-left">
                <span className="cert-name">{cert.name}</span>
                <span className="cert-issuer">{cert.issuer}</span>
              </div>
              <span className="cert-year">{cert.year}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
