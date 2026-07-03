import { useState, useMemo, useEffect } from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import InkReveal from "../InkReveal/InkReveal";
import image1 from "../../Ressources/gameTalk.png";
import image2 from "../../Ressources/PokemonLike.png";
import image3 from "../../Ressources/Hackaton48H.png";
import image4 from "../../Ressources/Raoding.png";
import image5 from "../../Ressources/ecommerce.png";
import image6 from "../../Ressources/blog.png";
import image7 from "../../Ressources/TechCorpAI.svg";

const techLogos = {
  HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  Go: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
  SQLite: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
  "C#": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  EntityFramework: "",
  React: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  Node: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  express: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  TailwindCSS: "https://cdn.worldvectorlogo.com/logos/tailwind-css-1.svg",
  MYSQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  PHP: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  FastAPI: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  Docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  Ollama: "",
};

const AnimatedProjectCards = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });
  const [isDark, setIsDark] = useState(
    () => document.documentElement.classList.contains("dark")
  );
  useEffect(() => {
    const obs = new MutationObserver(() =>
      setIsDark(document.documentElement.classList.contains("dark"))
    );
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);
  const maskColor = isDark ? [15, 23, 42] : [248, 250, 252];
  const maskOpacity = isDark ? 0.6 : 0.4;

  const projects = useMemo(
    () => [
      {
        id: 1,
        name: "GameTalk Forum",
        image: image1,
        github: "https://github.com/B1-Info-23-24/projet-forum-gametalk",
        demo: "",
        technologies: ["HTML", "CSS", "JavaScript", "Go", "SQLite"],
        description: "Community forum for video game discussions and sharing gaming experiences.",
        status: "Available",
      },
      {
        id: 2,
        name: "Boxxle Game",
        image: "https://image.jeuxvideo.com/images/gb/b/o/boxxgb0f.jpg",
        github: "https://github.com/amadoudiop04/Boxxle-B1",
        demo: "",
        technologies: ["Go", "HTML", "CSS"],
        description: "Puzzle game inspired by the classic box-pushing mechanics.",
        status: "Available",
      },
      {
        id: 3,
        name: "Pokemon Like",
        image: image2,
        github: "https://github.com/amadoudiop04/PokemonLikeCsharp",
        demo: "",
        technologies: ["C#", "EntityFramework"],
        description: "Pokemon-inspired fighting game with a turn-based combat system.",
        status: "Available",
      },
      {
        id: 4,
        name: "Hackathon 48H",
        image: image3,
        github: "https://github.com/amadoudiop04/challenge-48H-B2",
        demo: "",
        technologies: ["React", "Node", "express", "TailwindCSS", "MYSQL"],
        description: "Project built in 48 hours during a hackathon event.",
        status: "Available",
      },
      {
        id: 5,
        name: "Raodjing",
        image: image4,
        github: "",
        demo: "",
        technologies: ["React", "Node", "express", "TailwindCSS", "MongoDB"],
        description: "Platform for a League of Legends e-sport team.",
        status: "Available",
      },
      {
        id: 6,
        name: "E-commerce",
        image: image5,
        github: "https://github.com/amadoudiop04/Projet-PHP-B2",
        demo: "",
        technologies: ["PHP", "HTML", "CSS", "MYSQL"],
        description: "Online book selling platform.",
        status: "Available",
      },
      {
        id: 7,
        name: "Internship Blog 25-26",
        image: image6,
        github: "",
        demo: "https://blogamadoudiop25-26.netlify.app",
        technologies: ["React", "TailwindCSS"],
        description: "Personal blog to share my internship experiences.",
        status: "Available",
      },
      {
        id: 8,
        name: "TechCorp AI Chat",
        image: image7,
        github: "https://github.com/amadoudiop04/hackaton-ia-info-26-27",
        demo: "",
        technologies: ["Python", "FastAPI", "React", "Ollama", "Docker"],
        description: "AI financial assistant built during an AI hackathon with a team of 16. Real-time chat powered by the Phi-3.5-Financial model.",
        status: "Available",
      },
    ],
    []
  );

  const allTechnologies = useMemo(() => {
    const techs = new Set();
    projects.forEach((p) => p.technologies.forEach((t) => techs.add(t)));
    return ["All", ...Array.from(techs).sort()];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (selectedFilter === "All") return projects;
    return projects.filter((p) => p.technologies.includes(selectedFilter));
  }, [selectedFilter, projects]);

  return (
    <section id="projects" className="w-full py-20 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div
          ref={ref}
          className={`text-center mb-12 fall-item ${isVisible ? "fall-in" : ""}`}
        >
          <h2 className="text-xl sm:text-2xl text-slate-400 font-lobster mb-2">Discover My</h2>
          <h3 className="text-3xl sm:text-5xl font-bold font-lobster bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
            Projects
          </h3>
        </div>

        {/* Filter buttons */}
        <div
          className={`flex flex-wrap justify-center gap-2 mb-10 fall-item ${isVisible ? "fall-in" : ""}`}
          style={{ transitionDelay: "130ms" }}
        >
          {allTechnologies.map((tech) => (
            <button
              key={tech}
              onClick={() => setSelectedFilter(tech)}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                selectedFilter === tech
                  ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-600/30 scale-105"
                  : "bg-slate-100 dark:bg-slate-800/70 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600"
              }`}
            >
              {tech}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-slate-500 dark:text-slate-400 text-lg">No projects found for this technology.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`leaf-card ${isVisible ? "leaf-in" : ""} group flex flex-col bg-white dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-900 border border-slate-300 dark:border-slate-700/50 rounded-2xl overflow-hidden shadow-md hover:border-indigo-300 dark:hover:border-indigo-600/40 transition-colors duration-300 hover:shadow-xl hover:shadow-indigo-600/10 hover:-translate-y-1`}
                style={{
                  "--ld": `${index * 100}ms`,
                  "--lx": index % 2 === 0 ? "-22px" : "22px",
                  "--lr": index % 2 === 0 ? "-6deg" : "6deg",
                }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden flex-shrink-0">
                  <img
                    loading="lazy"
                    src={project.image}
                    alt={`Preview ${project.name}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 brightness-90 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                  <span
                    className={`absolute bottom-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold backdrop-blur-sm z-[3] ${
                      project.status === "Available"
                        ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                        : "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                    }`}
                  >
                    {project.status}
                  </span>
                  <InkReveal maskColor={maskColor} maskOpacity={maskOpacity} />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5 gap-3">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{project.name}</h3>

                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed line-clamp-2 flex-1">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="flex items-center gap-1 px-2 py-1 bg-slate-100 dark:bg-slate-700/50 border border-slate-300 dark:border-slate-700/50 rounded-full text-xs text-slate-600 dark:text-slate-300"
                      >
                        {techLogos[tech] && (
                          <img
                            src={techLogos[tech]}
                            alt={tech}
                            className="w-3.5 h-3.5 object-contain"
                          />
                        )}
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  {(project.github || project.demo) && (
                    <div className="flex gap-2 pt-3 border-t border-slate-300 dark:border-slate-700/50 mt-auto">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2 text-sm font-semibold bg-slate-100 dark:bg-slate-700/50 hover:bg-slate-200 dark:hover:bg-slate-600/50 text-slate-800 dark:text-white rounded-lg transition-all duration-300"
                          aria-label={`Code source de ${project.name}`}
                        >
                          <FaGithub className="text-base" />
                          Code
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2 text-sm font-semibold bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white rounded-lg transition-all duration-300 shadow-md"
                          aria-label={`Live demo of ${project.name}`}
                        >
                          <FaExternalLinkAlt className="text-xs" />
                          Live Demo
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AnimatedProjectCards;
