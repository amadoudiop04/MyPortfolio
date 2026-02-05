import React from "react";
import image from "../../Ressources/github.png";
import profileImage from "../../Ressources/AMADOU.jpg";

const Container = () => {

  return (
    <main className="min-h-screen px-4 sm:px-8 py-16 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Hero Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Profile Image */}
          <div className="flex justify-center md:justify-start order-2 md:order-1">
            <div className="relative group">
              {/* Multiple layered glows */}
              <div className="absolute -inset-4 bg-gradient-to-r from-red-600 to-pink-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
              <div className="absolute -inset-2 bg-gradient-to-r from-red-500 to-pink-400 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
              <img 
                src={profileImage}
                alt="Amadou Diop Profile"
                className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-3xl object-cover shadow-2xl border-4 border-slate-700/50 group-hover:border-red-600/70 transition-all duration-500 group-hover:scale-105"
                loading="lazy"
              />
              {/* Decorative corner elements */}
              <div className="absolute -top-2 -right-2 w-20 h-20 border-t-4 border-r-4 border-red-600 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -bottom-2 -left-2 w-20 h-20 border-b-4 border-l-4 border-pink-500 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>

          {/* Profile Info */}
          <div className="flex flex-col gap-6 order-1 md:order-2">
            <div className="space-y-4">
              <p className="text-lg text-slate-400 font-medium flex items-center gap-2 animate-fade-in">
                <span className="inline-block animate-wave">👋</span> Bienvenue sur mon portfolio
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight animate-slide-up">
                Amadou{' '}
                <span className="bg-gradient-to-r from-red-500 via-red-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                  Diop
                </span>
              </h1>
              <div className="flex items-center gap-3">
                <div className="h-1 w-12 bg-gradient-to-r from-red-600 to-pink-500 rounded-full animate-pulse" />
                <p className="text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-red-500 to-pink-400 bg-clip-text text-transparent">
                  Junior Developer
                </p>
              </div>
            </div>

            <p className="text-lg text-slate-300 leading-relaxed max-w-lg backdrop-blur-sm bg-slate-800/30 p-4 rounded-xl border border-slate-700/50">
              Développeur passionné par la création d'expériences web modernes et performantes. 
              Spécialisé en <span className="text-red-500 font-semibold">React</span>, <span className="text-pink-400 font-semibold">Tailwind CSS</span> et technologies du web.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://docs.google.com/document/d/1qcx6xXyEw_13vPfCigk4zCv9yZUDvGemxZqbR5gUnU8/edit?usp=sharing"
                download="CV_Amadou_Diop.pdf"
                className="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl hover:shadow-red-600/50 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto overflow-hidden"
                aria-label="Download my CV"
                title="Download CV as PDF"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center gap-2">
                  <span className="text-xl">📄</span> Télécharger CV
                </span>
              </a>

              {/* Social Links */}
              <div className="flex gap-4">
                <a
                  href="https://github.com/amadoudiop04"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit my GitHub profile"
                  title="GitHub"
                  className="group relative px-6 py-4 rounded-full bg-slate-800/70 backdrop-blur-sm border-2 border-slate-600/50 hover:border-red-600 text-white flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-red-600/30 transform hover:scale-110 overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-red-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative flex items-center gap-2">
                    <img className="w-5 h-5" src={image} alt="GitHub" loading="lazy" />
                    <span className="font-semibold">GitHub</span>
                  </span>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit my LinkedIn profile"
                  title="LinkedIn"
                  className="group relative px-6 py-4 rounded-full bg-slate-800/70 backdrop-blur-sm border-2 border-slate-600/50 hover:border-pink-500 text-white flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-pink-500/30 transform hover:scale-110 overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative font-semibold">LinkedIn</span>
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
              className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700/50 text-center hover:border-red-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-600/10"
            >
              <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-red-500 to-pink-400 bg-clip-text text-transparent mb-2">
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
