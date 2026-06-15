import React from "react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { FaLinkedinIn, FaEnvelope, FaPaperPlane } from "react-icons/fa";

const Infos = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="contact" className="py-20 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div
          ref={ref}
          className={`text-center mb-16 fall-item ${isVisible ? "fall-in" : ""}`}
        >
          <h2 className="text-xl sm:text-2xl text-slate-400 font-lobster mb-2">Get in Touch</h2>
          <h3 className="text-3xl sm:text-5xl font-bold font-lobster bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
            Contact Me
          </h3>
        </div>

        {/* Contact Cards */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10 fall-item ${isVisible ? "fall-in" : ""}`}
          style={{ transitionDelay: "130ms" }}
        >
          <a href="mailto:amadoudiop.04@outlook.fr" className="group">
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-900/50 border border-slate-300 dark:border-slate-700/50 rounded-2xl p-8 shadow-md hover:shadow-xl hover:shadow-indigo-600/10 hover:border-indigo-300 dark:hover:border-indigo-600/30 transform hover:-translate-y-1 transition-all duration-300 h-full flex items-center gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-indigo-500/20 text-indigo-500 dark:text-indigo-400 group-hover:bg-indigo-500/30 group-hover:scale-110 transition-all duration-300">
                  <FaEnvelope className="text-xl" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">Email</p>
                <p className="text-slate-900 dark:text-white font-semibold truncate group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                  amadoudiop.04@outlook.fr
                </p>
              </div>
            </div>
          </a>

          <a href="https://www.linkedin.com/in/amadou-diop-3a5258316/" target="_blank" rel="noopener noreferrer" className="group">
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-900/50 border border-slate-300 dark:border-slate-700/50 rounded-2xl p-8 shadow-md hover:shadow-xl hover:shadow-violet-500/10 hover:border-violet-300 dark:hover:border-violet-500/30 transform hover:-translate-y-1 transition-all duration-300 h-full flex items-center gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-violet-500/20 text-violet-500 dark:text-violet-400 group-hover:bg-violet-500/30 group-hover:scale-110 transition-all duration-300">
                  <FaLinkedinIn className="text-xl" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">LinkedIn</p>
                <p className="text-slate-900 dark:text-white font-semibold group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-300">
                  Amadou Diop
                </p>
              </div>
            </div>
          </a>
        </div>

        {/* CTA Form */}
        <div
          className={`text-center fall-item ${isVisible ? "fall-in" : ""}`}
          style={{ transitionDelay: "260ms" }}
        >
          <p className="text-slate-500 dark:text-slate-400 mb-6">Prefer to send me a direct message?</p>
          <Link
            to="/forms"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white font-semibold rounded-full shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:-translate-y-1 transition-all duration-300"
          >
            <FaPaperPlane className="text-sm" />
            Send a Message
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Infos;
