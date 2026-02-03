import React from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { FaLinkedin, FaEnvelope } from "react-icons/fa"; 

const Infos = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="contact" className="py-20 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div 
          className={`text-center mb-16 transform transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} 
          ref={ref}
        >
          <h2 className="text-xl sm:text-2xl text-slate-400 font-lobster mb-2">
            Get in Touch
          </h2>
          <h1 className="text-3xl sm:text-5xl font-bold font-lobster bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
            Contact Me
          </h1>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {/* Email Card */}
          <a
            href="mailto:amadoudiop.04@outlook.fr"
            className="group"
          >
            <div className="bg-gradient-to-br from-slate-800 to-slate-900/50 border border-slate-700/50 rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 h-full flex items-center gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-500/20 text-indigo-400">
                  <FaEnvelope className="text-2xl" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-slate-400 text-sm font-medium mb-1">Email</p>
                <p className="text-white font-semibold truncate group-hover:text-indigo-400 transition-colors">
                  amadoudiop.04@outlook.fr
                </p>
              </div>
            </div>
          </a>

          {/* LinkedIn Card */}
          <a
            href="https://www.linkedin.com/in/amadou-diop-3a5258316/?trk=opento_sprofile_details"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="bg-gradient-to-br from-slate-800 to-slate-900/50 border border-slate-700/50 rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 h-full flex items-center gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-500/20 text-indigo-400">
                  <FaLinkedin className="text-2xl" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-slate-400 text-sm font-medium mb-1">LinkedIn</p>
                <p className="text-white font-semibold group-hover:text-indigo-400 transition-colors">
                  LinkedIn Profile
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Infos;
