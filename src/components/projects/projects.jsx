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
  EntityFramework: "", // Pas de logo, on affiche juste le texte
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

  const projects = [
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
  ];

  const [hoveredProject, setHoveredProject] = useState(null);

  // Get all unique technologies for filter
  const allTechnologies = useMemo(() => {
    const techs = new Set();
    projects.forEach(project => {
      project.technologies.forEach(tech => techs.add(tech));
    });
    return ["All", ...Array.from(techs).sort()];
  }, []);

  // Filter projects
  const filteredProjects = useMemo(() => {
    if (selectedFilter === "All") return projects;
    return projects.filter(project => 
      project.technologies.includes(selectedFilter)
    );
  }, [selectedFilter]);

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div 
        id="projects" 
        className={`text-center text-3xl font-bold my-8 scroll-animate ${isVisible ? 'visible' : ''}`}
        ref={ref}
      >
        Projects
      </div>

      {/* Filter buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-8 px-4">
        {allTechnologies.map((tech) => (
          <button
            key={tech}
            onClick={() => setSelectedFilter(tech)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
              selectedFilter === tech
                ? "bg-blue-600 text-white shadow-lg scale-105"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {tech}
          </button>
        ))}
      </div>

      <div className="flex flex-col space-y-12 mx-4 md:mx-8">
        {filteredProjects.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            <p>Aucun projet trouvé pour cette technologie.</p>
          </div>
        ) : (
          filteredProjects.map((project) => {
          const isHovered = hoveredProject === project.id;

          return (
            <div
              key={project.id}
              className="flex flex-col md:flex-row items-center gap-8"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Left Side - Image and Status */}
              <div className="w-full md:w-80 flex flex-col">
                <div className="relative overflow-hidden rounded-xl shadow-lg h-48 md:h-65 w-full">
                  <img
                    loading="lazy"
                    src={project.image}
                    alt={`Projet ${project.name}`}
                    className="w-full h-full object-cover transition-transform duration-500"
                    style={{
                      transform: isHovered ? "scale(1.05)" : "scale(1)",
                      filter: isHovered
                        ? "brightness(1.1)"
                        : "brightness(0.95)",
                    }}
                  />
                </div>

                <div className="text-center mt-2">
                  <span
                    className={`px-3 py-1 rounded-full text-sm cursor-pointer ${
                      project.status === "Disponible"
                        ? "bg-green-900/40 text-green-800 border border-green-500/30"
                        : "bg-yellow-900/40 text-orange-900 border border-yellow-500/30"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Right Side - Project Info */}
              <div className="flex-1">
                <h3
                  className="text-2xl font-bold tracking-wide mb-3 transition-all duration-300 text-red-900"
                >
                  {project.name}
                </h3>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-white/10 border border-white/15 rounded-full px-3 py-1 text-xs text-black flex items-center gap-2 transition-all duration-300 hover:bg-white/20 hover:-translate-y-1"
                    >
                      {techLogos[tech] && (
                        <img
                          aria-label={`Logo ${tech}`}
                          src={techLogos[tech]}
                          alt={tech}
                          className="w-10 h-10"
                          style={{ animation: "float 4s ease-in-out infinite" }}
                        />
                      )}
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Description */}
                {project.description && (
                  <p className="text-sm text-gray-500 mb-6">
                    {project.description}
                  </p>
                )}

                {/* Action Buttons */}
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="px-5 py-2 rounded-lg text-sm font-semibold bg-gray-800 text-white border border-gray-600 hover:bg-cyan-700 hover:border-cyan-600 transition-all">
                        GitHub
                      </button>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="flex items-center justify-center gap-2 px-5 py-2 rounded-lg text-sm font-semibold bg-white/10 backdrop-blur text-black border border-white/20 shadow-md transition-all duration-300 hover:bg-blue-200 hover:-translate-y-1 hover:shadow-lg"
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
        }))}
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-2px);
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedProjectCards;
