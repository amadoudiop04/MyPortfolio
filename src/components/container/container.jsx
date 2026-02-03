import React from "react";
import image from "../../Ressources/github.png";
import profileImage from "../../Ressources/AMADOU.jpg";

const Container = () => {

  return (
    <main className="min-h-screen px-4 sm:px-8 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center mb-20 bg-transparent">
          {/* Profile Image */}
          <div className="flex justify-center md:justify-start order-2 md:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-pink-400 rounded-3xl blur-2xl opacity-30" />
              <img 
                src={profileImage}
                alt="Amadou Diop Profile"
                className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-3xl object-cover shadow-2xl border-4 border-slate-700 hover:border-indigo-500/50 transition-all duration-300"
                loading="lazy"
              />
            </div>
          </div>

          {/* Profile Info */}
          <div className="flex flex-col gap-6 order-1 md:order-2">
            <div className="space-y-2">
              <p className="text-lg text-slate-400 font-medium">Bienvenue 👋</p>
              <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight">
                Amadou <span className="bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">Diop</span>
              </h1>
              <p className="text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
                Junior Developer
              </p>
            </div>

            <p className="text-lg text-slate-300 leading-relaxed max-w-lg">
              Développeur passionné par la création d'expériences web modernes et performantes. 
              Spécialisé en React, Tailwind CSS et technologies du web.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://docs.google.com/document/d/1qcx6xXyEw_13vPfCigk4zCv9yZUDvGemxZqbR5gUnU8/edit?usp=sharing"
                download="CV_Amadou_Diop.pdf"
                className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-pink-600 hover:from-indigo-700 hover:to-pink-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto"
                aria-label="Download my CV"
                title="Download CV as PDF"
              >
                📄 Télécharger CV
              </a>

              {/* Social Links */}
              <div className="flex gap-4">
                <a
                  href="https://github.com/amadoudiop04"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit my GitHub profile"
                  title="GitHub"
                  className="px-6 py-3 rounded-full bg-slate-800/50 border-2 border-slate-600 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-pink-600 hover:border-transparent text-white flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  <img className="w-5 h-5" src={image} alt="GitHub" loading="lazy" />
                  <span className="font-semibold">GitHub</span>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit my LinkedIn profile"
                  title="LinkedIn"
                  className="px-6 py-3 rounded-full bg-slate-800/50 border-2 border-slate-600 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-pink-600 hover:border-transparent text-white flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  <span className="font-semibold">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            { label: 'Projets', value: '7+' },
            { label: 'Technos', value: '10+' },
            { label: 'Expérience', value: '2+ ans' },
            { label: 'En ligne', value: '24/7' }
          ].map((stat, index) => (
            <div 
              key={index}
              className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700/50 text-center hover:border-indigo-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10"
            >
              <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </p>
              <p className="text-slate-300 font-medium">{stat.label}</p>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
};

export default Container;
