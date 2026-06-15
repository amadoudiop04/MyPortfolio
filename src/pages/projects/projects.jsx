import React, { useState, useMemo } from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import image1 from "../../Ressources/gameTalk.png";
import image2 from "../../Ressources/PokemonLike.png";
import image3 from "../../Ressources/Hackaton48H.png";
import image4 from "../../Ressources/Raoding.png";
import image5 from "../../Ressources/ecommerce.png";
import image6 from "../../Ressources/blog.png";

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
};

const ProjectsPage = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = useMemo(() => [
    {
      id: 1,
      name: "GameTalk Forum",
      image: image1,
      github: "https://github.com/B1-Info-23-24/projet-forum-gametalk",
      demo: "https://drive.google.com/file/d/1XGejp93b8dftmdbapPYz30h7SUMEyek3/view?usp=drive_link",
      technologies: ["HTML", "CSS", "JavaScript", "Go", "SQLite"],
      description: "A forum for game discussions and community interaction. Users can create topics, participate in discussions, and share their gaming experiences with a vibrant community.",
      status: "Available",
    },
    {
      id: 2,
      name: "Pokemon Like",
      image: image2,
      github: "https://github.com/amadoudiop04/PokemonLikeCsharp",
      demo: "https://drive.google.com/file/d/1y6u-q3-0pe6XMo1KW_RzMEeoG-1Ac10i/view?usp=sharing",
      technologies: ["C#", "EntityFramework"],
      description: "A Pokemon-inspired game with comprehensive battle mechanics. Catch, train, and battle creatures in an immersive gaming experience.",
      status: "Available",
    },
    {
      id: 4,
      name: "Hackathon 48H",
      image: image3,
      github: "",
      demo: "",
      technologies: ["React", "Node", "express", "TailwindCSS", "MYSQL"],
      description: "Project developed during a 48-hour hackathon event. Showcasing rapid development and innovative problem-solving under time constraints.",
      status: "Coming Soon",
    },
    {
      id: 5,
      name: "Raodjing",
      image: image4,
      github: "",
      demo: "",
      technologies: ["React", "Node", "express", "TailwindCSS", "MongoDB"],
      description: "Platform for a League of Legends e-sport team. Tournament, match and ranking management.",
      status: "Coming Soon",
    },
    {
      id: 6,
      name: "Ecommerce",
      image: image5,
      github: "",
      demo: "",
      technologies: ["PHP", "HTML", "CSS", "MYSQL"],
      description: "Online book selling platform with a full catalogue, shopping cart and payment system.",
      status: "Coming Soon",
    },
    {
      id: 7,
      name: "Internship Blog 25-26",
      image: image6,
      github: "",
      demo: "https://blogamadoudiop25-26.netlify.app",
      technologies: ["React", "TailwindCSS"],
      description: "Personal blog to share my internship experiences and professional learnings.",
      status: "Available",
    },
  ], []);

  const allTechnologies = useMemo(() => {
    const techs = new Set();
    projects.forEach((project) => {
      project.technologies.forEach((tech) => techs.add(tech));
    });
    return ["All", ...Array.from(techs).sort()];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (selectedFilter === "All") return projects;
    return projects.filter((project) =>
      project.technologies.includes(selectedFilter)
    );
  }, [selectedFilter, projects]);

  return (
    <div className="min-h-screen py-20 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div
          className={`text-center mb-16 transform transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          ref={ref}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-lobster bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent mb-4">
            All My Projects
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg">Explore my complete portfolio of work</p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-16 pb-8">
          {allTechnologies.map((tech) => (
            <button
              key={tech}
              onClick={() => setSelectedFilter(tech)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                selectedFilter === tech
                  ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-600/30 scale-105"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600"
              }`}
            >
              {tech}
            </button>
          ))}
        </div>

        {/* Projects - Vertical Layout */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-slate-500 dark:text-slate-400 text-lg">
              No projects found for this technology.
            </p>
          </div>
        ) : (
          <div className="space-y-8 max-w-6xl mx-auto">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative rounded-2xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700/50 hover:border-indigo-300 dark:hover:border-indigo-600/50 shadow-md hover:shadow-2xl hover:shadow-indigo-600/10 transition-all duration-300 flex flex-col"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden h-72 sm:h-80 md:h-96 w-full">
                  <img
                    loading="lazy"
                    src={project.image}
                    alt={`Projet ${project.name}`}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                    style={{
                      filter: hoveredProject === project.id ? "brightness(1.1)" : "brightness(0.85)",
                    }}
                  />
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-4 py-2 rounded-full text-sm font-semibold ${
                        project.status === "Available"
                          ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/50"
                          : "bg-amber-500/20 text-amber-300 border border-amber-500/50"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                </div>

                {/* Project Info */}
                <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col justify-between">
                    <div>
                      <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-violet-400 group-hover:bg-clip-text transition-all duration-300">
                        {project.name}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="bg-slate-100 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700 rounded-full px-3 py-1.5 text-sm text-slate-600 dark:text-slate-300 flex items-center gap-2 transition-all duration-300 hover:bg-slate-200 dark:hover:bg-slate-700/50 hover:border-indigo-300 dark:hover:border-indigo-600/30"
                          >
                            {techLogos[tech] && (
                              <img
                                aria-label={`Logo ${tech}`}
                                src={techLogos[tech]}
                                alt={tech}
                                className="w-4 h-4 object-contain"
                              />
                            )}
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between">
                    <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-6">
                      {project.description}
                    </p>
                    <div className="flex gap-4 flex-wrap">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <button className="px-6 py-2.5 rounded-lg text-sm font-semibold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white border border-slate-300 dark:border-slate-600 hover:bg-indigo-600 hover:border-indigo-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                            GitHub
                          </button>
                        </a>
                      )}
                      {project.demo && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <button className="px-6 py-2.5 rounded-lg text-sm font-semibold bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                            Live Demo
                          </button>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;
