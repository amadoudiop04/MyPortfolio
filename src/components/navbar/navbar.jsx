import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5 flex justify-center items-center relative">
        
        {/* Logo/Title with Icon */}
        <div className="flex items-center gap-3 relative z-10">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-red-600 via-red-500 to-pink-500 flex items-center justify-center font-bold text-white text-lg shadow-lg shadow-red-500/50 hover:scale-110 transition-transform duration-300 cursor-pointer">
            <span className="text-xl">AD</span>
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-red-500 via-red-400 to-pink-400 bg-clip-text text-transparent">
              Amadou Diop
            </h1>
            <p className="text-xs text-slate-500 font-medium">Full Stack Developer</p>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-2 relative z-10 ml-8">
          <ul className="flex gap-2 list-none m-0 p-0 bg-slate-900/50 backdrop-blur-sm rounded-full px-2 py-2 border border-slate-800/50">
            <li>
              <a 
                href="/" 
                onClick={handleLinkClick}
                className="px-4 py-2 rounded-full text-slate-300 hover:text-white hover:bg-gradient-to-r hover:from-red-600/20 hover:to-pink-500/20 font-medium transition-all duration-300 relative group inline-block"
              >
                <span className="relative z-10">Home</span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-600 to-pink-500 opacity-0 group-hover:opacity-10 blur transition-opacity duration-300" />
              </a>
            </li>

            <li>
              <a 
                href="#about" 
                onClick={handleLinkClick}
                className="px-4 py-2 rounded-full text-slate-300 hover:text-white hover:bg-gradient-to-r hover:from-red-600/20 hover:to-pink-500/20 font-medium transition-all duration-300 relative group inline-block"
              >
                <span className="relative z-10">About</span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-600 to-pink-500 opacity-0 group-hover:opacity-10 blur transition-opacity duration-300" />
              </a>
            </li>
            <li>
              <a 
                href="#experience" 
                onClick={handleLinkClick}
                className="px-4 py-2 rounded-full text-slate-300 hover:text-white hover:bg-gradient-to-r hover:from-red-600/20 hover:to-pink-500/20 font-medium transition-all duration-300 relative group inline-block"
              >
                <span className="relative z-10">Experience</span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-600 to-pink-500 opacity-0 group-hover:opacity-10 blur transition-opacity duration-300" />
              </a>
            </li>
            <li>
              <a 
                href="/projects" 
                onClick={handleLinkClick}
                className="px-4 py-2 rounded-full text-slate-300 hover:text-white hover:bg-gradient-to-r hover:from-red-600/20 hover:to-pink-500/20 font-medium transition-all duration-300 relative group inline-block"
              >
                <span className="relative z-10">Projets</span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-600 to-pink-500 opacity-0 group-hover:opacity-10 blur transition-opacity duration-300" />
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                onClick={handleLinkClick}
                className="px-4 py-2 rounded-full text-slate-300 hover:text-white hover:bg-gradient-to-r hover:from-red-600/20 hover:to-pink-500/20 font-medium transition-all duration-300 relative group inline-block"
              >
                <span className="relative z-10">Contact</span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-600 to-pink-500 opacity-0 group-hover:opacity-10 blur transition-opacity duration-300" />
              </a>
            </li>
            <li>
              <a 
                href="/forms" 
                onClick={handleLinkClick}
                className="px-4 py-2 rounded-full text-slate-300 hover:text-white hover:bg-gradient-to-r hover:from-red-600/20 hover:to-pink-500/20 font-medium transition-all duration-300 relative group inline-block"
              >
                <span className="relative z-10">Forms</span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-600 to-pink-500 opacity-0 group-hover:opacity-10 blur transition-opacity duration-300" />
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          className="md:hidden flex flex-col gap-1.5 p-2 hover:bg-slate-800/50 rounded-lg transition-all duration-300"
        >
          <div className={`w-6 h-1 bg-gradient-to-r from-red-600 to-pink-500 transition-all duration-300 ${isOpen ? 'transform rotate-45 translate-y-2' : ''}`} />
          <div className={`w-6 h-1 bg-gradient-to-r from-red-600 to-pink-500 transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`} />
          <div className={`w-6 h-1 bg-gradient-to-r from-red-600 to-pink-500 transition-all duration-300 ${isOpen ? 'transform -rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-b from-slate-900 to-slate-950 border-t border-red-500/20 backdrop-blur-lg">
          <ul className="flex flex-col gap-1 list-none m-0 p-4">
            <li>
              <a 
                href="/" 
                onClick={handleLinkClick}
                className="block px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-800/70 font-medium transition-all duration-300 rounded-lg"
              >
                Home
              </a>
            </li>

            <li>
              <a 
                href="#about" 
                onClick={handleLinkClick}
                className="block px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-800/70 font-medium transition-all duration-300 rounded-lg"
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#experience" 
                onClick={handleLinkClick}
                className="block px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-800/70 font-medium transition-all duration-300 rounded-lg"
              >
                Experience
              </a>
            </li>
            <li>
              <a 
                href="/projects" 
                onClick={handleLinkClick}
                className="block px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-800/70 font-medium transition-all duration-300 rounded-lg"
              >
                Projets
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                onClick={handleLinkClick}
                className="block px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-800/70 font-medium transition-all duration-300 rounded-lg"
              >
                Contact
              </a>
            </li>
            <li>
              <a 
                href="/forms" 
                onClick={handleLinkClick}
                className="block px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-800/70 font-medium transition-all duration-300 rounded-lg"
              >
                Forms
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
