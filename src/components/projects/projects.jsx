import { useState, useMemo } from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import image1 from "../../Ressources/gameTalk.png";
import image2 from "../../Ressources/PokemonLike.png";
import image3 from "../../Ressources/Hackaton48H.png";
import image4 from "../../Ressources/Raoding.png"
import image5 from "../../Ressources/ecommerce.png";
import image6 from "../../Ressources/blog.png"


const techLogos = {
  HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  JavaScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  Go: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
  SQLite:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
  "C#": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  EntityFramework: "",
  React:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  Node: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  express:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  TailwindCSS:
    "https://cdn.worldvectorlogo.com/logos/tailwind-css-1.svg",
  MYSQL:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  MongoDB:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    PHP:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
    
};

const AnimatedProjectCards = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  const projects = useMemo(() => [
    {
      id: 1,
      name: "GameTalk Forum",
      image: image1,
      github: "https://github.com/B1-Info-23-24/projet-forum-gametalk",
      demo: "https://drive.google.com/file/d/1XGejp93b8dftmdbapPYz30h7SUMEyek3/view?usp=drive_link",
      technologies: ["HTML", "CSS", "JavaScript", "Go", "SQLite"],
      description: "A forum for game discussions and community interaction",
      status: "Disponible",
    },
    {
      id: 2,
      name: "Boxxle Game",
      image: "https://image.jeuxvideo.com/images/gb/b/o/boxxgb0f.jpg",
      github: "", 
      demo: "https://drive.google.com/file/d/1ZCSgfiJKvdrcILDy3_tvjq6vUwX4zevo/view?usp=drive_link",
      technologies: ["Go", "HTML", "CSS"],
      description: "A puzzle game inspired by classic box-pushing mechanics",
      status: "Disponible",
    },
    {
      id: 3,
      name: "Pokemon Like",
      image: image2,
      github: "https://github.com/amadoudiop04/PokemonLikeCsharp",
      demo: "https://drive.google.com/file/d/1y6u-q3-0pe6XMo1KW_RzMEeoG-1Ac10i/view?usp=sharing",
      technologies: ["C#", "EntityFramework"],
      description: "A Pokemon-inspired game with battle mechanics",
      status: "Disponible",
    },
    {
      id: 4,
      name: "Hackathon 48H",
      image: image3,
      github: "",
      demo: "",
      technologies: ["React", "Node", "express", "TailwindCSS", "MYSQL"],
      description: "Project developed during a 48-hour hackathon event",
      status: "Coming Soon",
    },
    {
      id: 5,
      name: "Raodjing",
      image: image4,
      github: "",
      demo: "",
      technologies: ["React", "Node", "express", "TailwindCSS", "MongoDB"],
      description: "Développement d'une plateforme pour une equipe e-sport de ligues of legends",
      status: "Coming Soon",
    },
    {
      id: 6,
      name: "ecommerce",
      image: image5,
      github: "",
      demo: "",
      technologies: ["PHP", "HTML", "CSS", "MYSQL"],
      description: "Développement d'une plateforme de mise en vente de livre",
      status: "Coming Soon",
    },
    {
      id: 7,
      name: "Blog de stage 25-26",
      image: image6,
      github: "",
      demo: "https://blogamadoudiop25-26.netlify.app",
      technologies: ["React", "TailwindCSS"],
      description: "Blog personnel pour partager mes expériences de stage",
      status: "Disponible",
    }
  ], []);

  const [hoveredProject, setHoveredProject] = useState(null);

  // Get all unique technologies for filter
  const allTechnologies = useMemo(() => {
    const techs = new Set();
    projects.forEach(project => {
      project.technologies.forEach(tech => techs.add(tech));
    });
    return ["All", ...Array.from(techs).sort()];
  }, [projects]);

  // Filter projects
  const filteredProjects = useMemo(() => {
    if (selectedFilter === "All") return projects;
    return projects.filter(project => 
      project.technologies.includes(selectedFilter)
    );
  }, [selectedFilter, projects]);

  return (
    <section className="w-full py-20 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div 
          id="projects" 
          className={`text-center mb-12 transform transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          ref={ref}
        >
          <h2 className="text-3xl sm:text-5xl font-bold font-lobster bg-gradient-to-r from-red-500 to-pink-400 bg-clip-text text-transparent">
            Mes Projets
          </h2>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 pb-8">
          {allTechnologies.map((tech) => (
            <button
              key={tech}
              onClick={() => setSelectedFilter(tech)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                selectedFilter === tech
                  ? "bg-gradient-to-r from-red-600 to-pink-600 text-white shadow-lg scale-105"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700 hover:border-slate-600"
              }`}
            >
              {tech}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-slate-400 text-lg">Aucun projet trouvé pour cette technologie.</p>
            </div>
          ) : (
            filteredProjects.map((project) => {
              const isHovered = hoveredProject === project.id;

              return (
                <div
                  key={project.id}
                  className="flex flex-col lg:flex-row gap-8 items-center lg:items-start"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {/* Project Image Section */}
                  <div className="w-full lg:w-80 flex-shrink-0">
                    <div className="relative overflow-hidden rounded-2xl shadow-xl h-64 w-full group">
                      <img
                        loading="lazy"
                        src={project.image}
                        alt={`Projet ${project.name}`}
                        className="w-full h-full object-cover transition-all duration-500"
                        style={{
                          transform: isHovered ? "scale(1.1)" : "scale(1)",
                          filter: isHovered ? "brightness(1.15)" : "brightness(0.9)",
                        }}
                      />
                      {/* Status Badge Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            project.status === "Disponible"
                              ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                              : "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                          }`}
                        >
                          {project.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Project Info Section */}
                  <div className="flex-1">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                      {project.name}
                    </h3>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-slate-800/50 border border-slate-700 rounded-full px-3 py-1 text-xs text-slate-300 flex items-center gap-2 transition-all duration-300 hover:bg-slate-700/50 hover:border-red-600/30"
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

                    {/* Description */}
                    {project.description && (
                      <p className="text-slate-300 mb-6 leading-relaxed">
                        {project.description}
                      </p>
                    )}

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block"
                        >
                          <button className="px-6 py-2 rounded-lg text-sm font-semibold bg-slate-800 text-white border border-slate-600 hover:bg-red-600 hover:border-red-600 transition-all duration-300 transform hover:-translate-y-1">
                            GitHub
                          </button>
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block"
                        >
                          <button
                            className="px-6 py-2 rounded-lg text-sm font-semibold bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                            aria-label={`Voir la démonstration de ${project.name}`}
                          >
                            Live Demo
                          </button>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};

export default AnimatedProjectCards;
