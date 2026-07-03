import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FiSun, FiMoon } from "react-icons/fi";

const NAV_ITEMS = [
  { label: "Home",     to: "/",          type: "link"   },
  { label: "About",    hash: "#about",   type: "anchor" },
  { label: "Skills",   hash: "#experience", type: "anchor" },
  { label: "Projects", to: "/projects",  type: "link"   },
  { label: "Contact",  hash: "#contact", type: "anchor" },
];

const Navbar = () => {
  const [isOpen, setIsOpen]   = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark]   = useState(true);
  const navigate  = useNavigate();
  const location  = useLocation();

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const startDark = saved ? saved === "dark" : prefersDark;
    setIsDark(startDark);
    document.documentElement.classList.toggle("dark", startDark);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ─── Scroll to anchor after cross-page navigation ─── */
  useEffect(() => {
    const target = location.state?.scrollTo;
    if (!target) return;
    const id = setTimeout(() => {
      document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
    }, 350);
    return () => clearTimeout(id);
  }, [location.state?.scrollTo]);

  const toggleDark = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  const closeMenu = () => setIsOpen(false);

  const handleAnchorClick = (e, hash) => {
    e.preventDefault();
    closeMenu();
    if (location.pathname === "/") {
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: hash } });
    }
  };

  const isActivePage = (item) =>
    item.type === "link" && location.pathname === item.to;

  const renderNavItem = (item, mobile = false) => {
    const active = isActivePage(item);

    const desktopCls = `relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
      active
        ? "bg-gradient-to-r from-indigo-500/15 to-violet-500/15 text-indigo-600 dark:text-indigo-400 font-semibold"
        : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5"
    }`;

    const mobileCls = `flex items-center gap-2 px-4 py-3 font-medium transition-all duration-200 rounded-xl ${
      active
        ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10"
        : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/70"
    }`;

    const cls = mobile ? mobileCls : desktopCls;

    if (item.type === "anchor") {
      return (
        <a key={item.label} href={item.hash} onClick={(e) => handleAnchorClick(e, item.hash)} className={cls}>
          {item.label}
        </a>
      );
    }
    return (
      <Link key={item.label} to={item.to} onClick={closeMenu} className={cls}>
        {active && !mobile && (
          <span className="absolute inset-0 rounded-full ring-1 ring-indigo-500/20" />
        )}
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
            <span className={`block w-6 h-0.5 bg-gradient-to-r from-indigo-600 to-violet-500 transition-all duration-300 ${isOpen ? "opacity-0 scale-x-0" : ""}`} />
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
