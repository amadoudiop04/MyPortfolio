import React from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const ContainerCard = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <main id="about" className="flex justify-center mx-auto px-4 sm:px-8 py-12 sm:py-20" role="main">
      <section className="w-full max-w-6xl" aria-labelledby="about-heading">

        {/* Section Header */}
        <header
          className={`mb-12 fall-item ${isVisible ? "fall-in" : ""}`}
          ref={ref}
        >
          <h2 className="text-xl sm:text-2xl text-center font-lobster text-slate-400 dark:text-slate-400 mb-2">
            Get to Know More
          </h2>
          <h3
            id="about-heading"
            className="text-3xl sm:text-5xl text-center font-lobster font-bold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent"
          >
            About Me
          </h3>
        </header>

        <div
          className={`flex flex-col gap-8 fall-item ${isVisible ? "fall-in" : ""}`}
          style={{ transitionDelay: "120ms" }}
        >
          <div className="flex flex-col gap-6 w-full max-w-4xl mx-auto">

            {/* Experience & Education Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <article className="bg-white dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-6 shadow-md hover:shadow-xl hover:shadow-indigo-500/10 transform hover:scale-105 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-600 to-violet-500 flex items-center justify-center text-lg group-hover:scale-110 transition-transform">🚀</div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">Experience</h4>
                </div>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  2+ years learning full stack development with hands-on projects
                </p>
              </article>

              <article className="bg-white dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-6 shadow-md hover:shadow-xl hover:shadow-indigo-500/10 transform hover:scale-105 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-600 to-violet-500 flex items-center justify-center text-lg group-hover:scale-110 transition-transform">🎓</div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">Education</h4>
                </div>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  Bachelor's in Computer Science – Ynov Lyon
                </p>
              </article>
            </div>

            {/* Biography */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-800/60 dark:to-slate-900/60 border border-slate-300 dark:border-slate-700 rounded-xl p-6 shadow-md hover:shadow-lg dark:hover:border-slate-600 transition-all duration-300">
              <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-4">
                Amadou Diop is a passionate web developer from Senegal. Fascinated by technology since childhood, he continuously learns to excel in web development and software engineering.
              </p>
              <div className="space-y-2">
                <p className="text-slate-800 dark:text-slate-200 font-semibold">
                  <span className="text-indigo-600 dark:text-indigo-400">📋 Looking for:</span>
                </p>
                <ul className="text-slate-600 dark:text-slate-300 text-sm space-y-1 ml-4">
                  <li>✓ Work-study position (2 weeks company / 1 week school) starting September 2026</li>
                </ul>
              </div>
            </div>

            {/* Professional Experience Timeline */}
            <div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <div className="w-2 h-7 bg-gradient-to-b from-indigo-600 to-violet-500 rounded" />
                Professional Experience
              </h4>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-600/60 to-violet-500/20" />

                {/* Entry */}
                <div className="relative pl-12">
                  {/* Dot */}
                  <div className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full bg-indigo-500 ring-4 ring-indigo-500/20" />

                  <div className="bg-white dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-900/80 border border-slate-300 dark:border-slate-700/50 rounded-xl p-6 shadow-md hover:border-indigo-300 dark:hover:border-indigo-600/30 hover:shadow-lg hover:shadow-indigo-600/5 transition-all duration-300">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <div>
                        <h5 className="text-slate-900 dark:text-white font-bold text-base">Fullstack Developer Intern</h5>
                        <p className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm">NancyImmo</p>
                      </div>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 rounded-full text-xs font-medium whitespace-nowrap w-fit">
                        📅 August – September 2025
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">
                      Development of a real estate management application
                    </p>

                    {/* Tasks */}
                    <ul className="space-y-1.5 mb-4">
                      {[
                        "Built a REST API using Spring Boot (Java)",
                        "Developed a frontend with Angular and Tailwind CSS",
                        "Wrote automation scripts with Node.js",
                      ].map((task, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-600 dark:text-slate-300 text-sm">
                          <span className="text-indigo-500 dark:text-indigo-400 mt-0.5 flex-shrink-0">●</span>
                          {task}
                        </li>
                      ))}
                    </ul>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-1.5">
                      {["Angular", "Node.js", "Tailwind CSS", "Java", "Spring Boot"].map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 bg-slate-100 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default ContainerCard;
