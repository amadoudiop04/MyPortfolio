import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const isFormsPage = location.pathname === "/forms";

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-slate-950 to-slate-900 border-b border-slate-700/50 backdrop-blur-md shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo/Title */}
        <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
          Amadou Diop
        </h1>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-8">
          <ul className="flex gap-8 list-none m-0 p-0">
            <li>
              <a 
                href="/" 
                onClick={handleLinkClick}
                className="text-slate-300 hover:text-white font-medium transition-colors duration-300 relative group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-pink-500 group-hover:w-full transition-all duration-300" />
              </a>
            </li>

            {!isFormsPage && (
              <>
                <li>
                  <a 
                    href="#about" 
                    onClick={handleLinkClick}
                    className="text-slate-300 hover:text-white font-medium transition-colors duration-300 relative group"
                  >
                    About
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-pink-500 group-hover:w-full transition-all duration-300" />
                  </a>
                </li>
                <li>
                  <a 
                    href="#experience" 
                    onClick={handleLinkClick}
                    className="text-slate-300 hover:text-white font-medium transition-colors duration-300 relative group"
                  >
                    Experience
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-pink-500 group-hover:w-full transition-all duration-300" />
                  </a>
                </li>
                <li>
                  <a 
                    href="#projects" 
                    onClick={handleLinkClick}
                    className="text-slate-300 hover:text-white font-medium transition-colors duration-300 relative group"
                  >
                    Projets
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-pink-500 group-hover:w-full transition-all duration-300" />
                  </a>
                </li>
                <li>
                  <a 
                    href="#contact" 
                    onClick={handleLinkClick}
                    className="text-slate-300 hover:text-white font-medium transition-colors duration-300 relative group"
                  >
                    Contact
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-pink-500 group-hover:w-full transition-all duration-300" />
                  </a>
                </li>
                <li>
                  <a 
                    href="/forms" 
                    onClick={handleLinkClick}
                    className="text-slate-300 hover:text-white font-medium transition-colors duration-300 relative group"
                  >
                    Forms
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-pink-500 group-hover:w-full transition-all duration-300" />
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          className="md:hidden flex flex-col gap-1.5 p-2 hover:bg-slate-800 rounded-lg transition-colors duration-300"
        >
          <div className={`w-6 h-0.5 bg-gradient-to-r from-indigo-500 to-pink-500 transition-all duration-300 ${isOpen ? 'transform rotate-45 translate-y-2' : ''}`} />
          <div className={`w-6 h-0.5 bg-gradient-to-r from-indigo-500 to-pink-500 transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`} />
          <div className={`w-6 h-0.5 bg-gradient-to-r from-indigo-500 to-pink-500 transition-all duration-300 ${isOpen ? 'transform -rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-700/50 backdrop-blur-md">
          <ul className="flex flex-col gap-0 list-none m-0 p-4">
            <li>
              <a 
                href="/" 
                onClick={handleLinkClick}
                className="block px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-800 font-medium transition-all duration-300 rounded-lg"
              >
                Home
              </a>
            </li>

            {!isFormsPage && (
              <>
                <li>
                  <a 
                    href="#about" 
                    onClick={handleLinkClick}
                    className="block px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-800 font-medium transition-all duration-300 rounded-lg"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a 
                    href="#experience" 
                    onClick={handleLinkClick}
                    className="block px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-800 font-medium transition-all duration-300 rounded-lg"
                  >
                    Experience
                  </a>
                </li>
                <li>
                  <a 
                    href="#projects" 
                    onClick={handleLinkClick}
                    className="block px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-800 font-medium transition-all duration-300 rounded-lg"
                  >
                    Projets
                  </a>
                </li>
                <li>
                  <a 
                    href="#contact" 
                    onClick={handleLinkClick}
                    className="block px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-800 font-medium transition-all duration-300 rounded-lg"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a 
                    href="/forms" 
                    onClick={handleLinkClick}
                    className="block px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-800 font-medium transition-all duration-300 rounded-lg"
                  >
                    Forms
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
