import React, { useState } from "react";
import "./projects.css";
import image1 from "../../Ressources/gameTalk.png";
import image2 from "../../Ressources/PokemonLike.png";

const techLogos = {
  HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  Go: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
  SQLite: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
  "C#": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  EntityFramework: ""
};

const AnimatedProjectCards = () => {
  const projects = [
    {
      id: 1,
      name: "GameTalk Forum",
      image: image1,
      github: "https://github.com/B1-Info-23-24/projet-forum-gametalk",
      demo: "https://drive.google.com/file/d/1XGejp93b8dftmdbapPYz30h7SUMEyek3/view?usp=drive_link",
      technologies: ["HTML", "CSS", "JavaScript", "Go", "SQLite"]
    },
    {
      id: 2,
      name: "Boxxle Game",
      image: "https://cdn.supersoluce.com/file/docs/docid_516552f28f152f8d5a000079/elemid_4ee9d6ec0a2fe93f0e00000c/boxxle-gb.jpg",
      github: "https://ytrack.learn.ynov.com/git/damadou/Boxxle",
      demo: "https://drive.google.com/file/d/1ZCSgfiJKvdrcILDy3_tvjq6vUwX4zevo/view?usp=drive_link",
      technologies: ["Go", "HTML", "CSS"]
    },
    {
      id: 3,
      name: "Pokemon Like",
      image: image2,
      github: "https://github.com/amadoudiop04/PokemonLikeCsharp",
      demo: "https://drive.google.com/file/d/1y6u-q3-0pe6XMo1KW_RzMEeoG-1Ac10i/view?usp=sharing",
      technologies: ["C#", "EntityFramework"]
    }
  ];

  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <>
      <div id="projects" className="title-2">
        Projects
      </div>

      <div className="animated-cardcontainer">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-card"
            onMouseEnter={() => setHoveredCard(project.id)}
            onMouseLeave={() => setHoveredCard(null)}
            style={{
              transform: hoveredCard === project.id ? "translateY(-10px)" : "translateY(0)",
              boxShadow: hoveredCard === project.id
                ? "0 10px 20px rgba(0,0,0,0.6)"
                : "5px 5px 15px rgba(0,0,0,0.3)",
            }}
          >
            <div className="project-image-container">
              <img
                aria-label="project"
                src={project.image}
                alt={project.name}
                className="project-image"
              />
            </div>

            <div className="project-info">
              <h3 className="project-title">{project.name}</h3>

              <div className="project-tech">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-badge">
                    {techLogos[tech] && (
                      <img aria-label="logo" src={techLogos[tech]} alt={tech} style={{ width: "16px", height: "16px" }} />
                    )}
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-buttons">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <button className="project-btn github-btn">
                    GitHub
                  </button>
                </a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <button className="project-btn demo-btn">
                    Live Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AnimatedProjectCards;
