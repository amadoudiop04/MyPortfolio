import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FiSun, FiMoon } from "react-icons/fi";

const NAV_ITEMS = [
  { label: "Home", to: "/", type: "link" },
  { label: "About", hash: "#about", type: "anchor" },
  { label: "Skills", hash: "#experience", type: "anchor" },
  { label: "Projects", to: "/projects", type: "link" },
  { label: "Contact", hash: "#contact", type: "anchor" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  // Initialize theme on mount
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const startDark = saved ? saved === "dark" : prefersDark;
    setIsDark(startDark);
    if (startDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleDark = () => {
    const next = !isDark;
    setIsDark(next);
    if (next) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const closeMenu = () => setIsOpen(false);

  const handleAnchorClick = (e, hash) => {
    e.preventDefault();
    closeMenu();
    if (location.pathname === "/") {
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  const renderNavItem = (item, mobile = false) => {
    const cls = mobile
      ? "block px-4 py-3 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/70 font-medium transition-all duration-300 rounded-xl"
      : "px-4 py-2 rounded-full text-sm text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 font-medium transition-all duration-200";

    if (item.type === "anchor") {
      return (
        <a key={item.label} href={item.hash} onClick={(e) => handleAnchorClick(e, item.hash)} className={cls}>
          {item.label}
        </a>
      );
    }
    return (
      <Link key={item.label} to={item.to} onClick={closeMenu} className={cls}>
        {item.label}
      </Link>
    );
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800/80 shadow-lg shadow-slate-200/50 dark:shadow-slate-950/50"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" onClick={closeMenu} className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-500 flex items-center justify-center font-bold text-white text-sm shadow-lg shadow-indigo-500/30 group-hover:shadow-indigo-500/50 group-hover:scale-110 transition-all duration-300">
            AD
          </div>
          <div className="hidden sm:block">
            <p className="text-lg font-bold bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent leading-tight">
              Amadou Diop
            </p>
            <p className="text-xs text-slate-400 dark:text-slate-500 font-medium">Junior Developer</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1 bg-slate-100/80 dark:bg-slate-900/60 backdrop-blur-sm rounded-full px-2 py-1.5 border border-slate-200 dark:border-slate-800/60">
          {NAV_ITEMS.map((item) => renderNavItem(item))}
        </div>

        {/* Dark mode + Mobile toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleDark}
            aria-label="Toggle dark mode"
            className="w-9 h-9 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800/70 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700/70 transition-all duration-300"
          >
            {isDark ? <FiSun className="text-base" /> : <FiMoon className="text-base" />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
            className="md:hidden flex flex-col gap-1.5 p-2 hover:bg-slate-100 dark:hover:bg-slate-800/50 rounded-lg transition-all duration-300"
          >
            <span className={`block w-6 h-0.5 bg-gradient-to-r from-indigo-600 to-violet-500 transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-gradient-to-r from-indigo-600 to-violet-500 transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-gradient-to-r from-indigo-600 to-violet-500 transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="bg-white/95 dark:bg-slate-950/95 backdrop-blur-lg border-t border-slate-200 dark:border-slate-800/50 px-4 py-4 space-y-1">
          {NAV_ITEMS.map((item) => renderNavItem(item, true))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
