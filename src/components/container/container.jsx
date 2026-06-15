import React from "react";
import { FaGithub, FaLinkedinIn, FaFileDownload } from "react-icons/fa";
import profileImage from "../../Ressources/AMADOU.jpg";

const Container = () => {
  return (
    <main id="home" className="min-h-screen px-4 sm:px-8 py-16 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <section className="grid md:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Profile Image */}
          <div className="flex justify-center md:justify-start order-2 md:order-1">
            <img
              src={profileImage}
              alt="Amadou Diop"
              className="w-72 h-72 sm:w-96 sm:h-96 object-cover"
              loading="lazy"
            />
          </div>

          {/* Profile Info */}
          <div className="flex flex-col gap-6 order-1 md:order-2">
            <div className="space-y-4">
              <p className="text-lg text-slate-500 dark:text-slate-400 font-medium flex items-center gap-2 animate-fade-in">
                <span className="inline-block animate-wave">👋</span> Welcome to my portfolio
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white leading-tight animate-slide-up">
                Amadou{" "}
                <span className="bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 bg-clip-text text-transparent animate-gradient">
                  Diop
                </span>
              </h1>
              <div className="flex items-center gap-3">
                <div className="h-1 w-12 bg-gradient-to-r from-indigo-600 to-violet-500 rounded-full" />
                <p className="text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
                  Junior Developer
                </p>
              </div>
            </div>

            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-lg bg-slate-100/80 dark:bg-slate-800/30 p-4 rounded-xl">
              Passionate developer focused on building modern and performant web experiences.
              Specialized in{" "}
              <span className="text-indigo-600 dark:text-indigo-400 font-semibold">React</span>,{" "}
              <span className="text-violet-600 dark:text-violet-400 font-semibold">Tailwind CSS</span> and modern web technologies.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://docs.google.com/document/d/1qcx6xXyEw_13vPfCigk4zCv9yZUDvGemxZqbR5gUnU8/export?format=pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-7 py-3.5 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:shadow-indigo-600/40 transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 overflow-hidden"
                aria-label="Download my CV"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center gap-2">
                  <FaFileDownload className="text-base" />
                  Download CV
                </span>
              </a>

              <a
                href="https://github.com/amadoudiop04"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my GitHub"
                className="group px-6 py-3.5 rounded-full bg-slate-200/80 dark:bg-slate-800/70 text-slate-700 dark:text-white flex items-center gap-2 transition-all duration-300 hover:bg-slate-300/80 dark:hover:bg-slate-700/70 transform hover:scale-105"
              >
                <FaGithub className="text-lg" />
                <span className="font-semibold">GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/amadou-diop-3a5258316/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my LinkedIn"
                className="group px-6 py-3.5 rounded-full bg-slate-200/80 dark:bg-slate-800/70 text-slate-700 dark:text-white flex items-center gap-2 transition-all duration-300 hover:bg-slate-300/80 dark:hover:bg-slate-700/70 transform hover:scale-105"
              >
                <FaLinkedinIn className="text-lg" />
                <span className="font-semibold">LinkedIn</span>
              </a>
            </div>

            <div className="hidden md:flex items-center gap-2 text-slate-400 dark:text-slate-500 text-sm mt-2">
              <div className="flex flex-col gap-1 items-center">
                <div className="w-px h-8 bg-gradient-to-b from-transparent to-slate-400 dark:to-slate-600" />
                <div className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-600 animate-bounce" />
              </div>
              <span>Scroll to discover</span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Container;
