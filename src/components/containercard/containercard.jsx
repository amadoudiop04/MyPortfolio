import React from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import profileImage from "../../Ressources/AMADOU.jpg";

const ContainerCard = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <main id="about" className="flex justify-center mx-auto px-4 sm:px-8 py-12 sm:py-20" role="main">
      <section className="w-full max-w-6xl" aria-labelledby="about-heading">
        <div>
          {/* Section Header */}
          <header 
            className={`mb-12 transform transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} 
            ref={ref}
          >
            <h1 className="text-xl sm:text-2xl text-center font-lobster text-slate-400 mb-2">
              Get to Know More
            </h1>
            <h2 
              id="about-heading" 
              className="text-3xl sm:text-5xl text-center font-lobster font-bold bg-gradient-to-r from-red-500 to-pink-400 bg-clip-text text-transparent"
            >
              About Me
            </h2>
          </header>

          {/* About Content */}
          <div className={`flex flex-col gap-8 transform transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {/* Info Cards & Bio */}
            <div className="flex flex-col gap-6 w-full max-w-4xl mx-auto">
              {/* Experience & Education Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Experience Card */}
                <article className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-6 shadow-lg hover:shadow-xl hover:shadow-indigo-500/10 transform hover:scale-105 transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-red-600 to-pink-500 flex items-center justify-center text-lg group-hover:scale-110 transition-transform">🚀</div>
                    <h3 className="text-lg font-bold text-white">
                      Experience
                    </h3>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    2+ years learning full stack development with hands-on projects
                  </p>
                </article>

                {/* Education Card */}
                <article className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-6 shadow-lg hover:shadow-xl hover:shadow-indigo-500/10 transform hover:scale-105 transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-red-600 to-pink-500 flex items-center justify-center text-lg group-hover:scale-110 transition-transform">🎓</div>
                    <h3 className="text-lg font-bold text-white">
                      Education
                    </h3>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Bachelor's in Computer Science – Ynov Lyon
                  </p>
                </article>
              </div>

              {/* Biography */}
              <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-700 rounded-xl p-6 backdrop-blur-sm hover:border-slate-600 transition-all duration-300">
                <p className="text-slate-300 text-base leading-relaxed mb-4">
                  Amadou Diop is a young computer apprentice from Senegal, passionate about technology since childhood. He's pursuing knowledge to excel professionally in web development and software engineering.
                </p>
                <div className="space-y-2">
                  <p className="text-slate-200 font-semibold">
                    <span className="text-red-500">📋 Looking for:</span>
                  </p>
                  <ul className="text-slate-300 text-sm space-y-1 ml-4">
                    <li>✓ 2.5-month internship starting June 2025</li>
                    <li>✓ Work-study position (2 weeks company / 1 week school) starting October 2025</li>
                  </ul>
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
