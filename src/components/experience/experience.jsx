import React from "react";
import "./experience.css";

const skills = [
  {
    title: "Web development",
    items: [
      { name: "Golang", icon: "go/go-original.svg" },
      { name: "JavaScript", icon: "javascript/javascript-original.svg" },
      { name: "Git", icon: "git/git-original.svg" },
      { name: "Node.js", icon: "nodejs/nodejs-original.svg" },
      { name: "HTML", icon: "html5/html5-original.svg" },
      { name: "CSS", icon: "css3/css3-original.svg" },
      { name: "React", icon: "react/react-original.svg" },
      { name: "Java", icon: "java/java-original.svg" },
      { name: "Csharp", icon: "csharp/csharp-original.svg" },
    ],
  },
  {
    title: "Tools & Databases",
    items: [
      { name: "Jira", icon: "jira/jira-original.svg" },
      { name: "Docker", icon: "docker/docker-original.svg" },
      { name: "Figma", icon: "figma/figma-original.svg" },
      { name: "SQL", icon: "mysql/mysql-original.svg" },
      { name: "Sqlite", icon: "sqlite/sqlite-original.svg" },
      {
        name: "Outil No-code",
        icon: "https://www.logoai.com/uploads/output/2025/02/17/340ef059721362bf72cc43085038428b.jpg",
        isExternal: true,
      },
      { name: "Linux", icon: "linux/linux-original.svg" },
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience">
      <div className="experience-header">
        <h2 className="title">Explore My</h2>
        <h3 className="title-2">Experience</h3>
      </div>

      <div className="card-container">
        {skills.map((section, index) => (
          <div className="card" key={index}>
            <h4 className="card-title">{section.title}</h4>
            <div className="skills-grid">
              {section.items.map((item, i) => (
                <div className="skill-item" key={i}>
                  <img
                    src={
                      item.isExternal
                        ? item.icon
                        : `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${item.icon}`
                    }
                    alt={`${item.name} logo`}
                    className="skill-icon"
                  />
                  <span>{item.name} : Basic</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
