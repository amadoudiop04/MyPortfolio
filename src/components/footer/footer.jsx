import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: "Home", href: "/", isLink: true },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#experience" },
    { label: "Projects", href: "/projects", isLink: true },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { label: "GitHub", href: "https://github.com/amadoudiop04", icon: FaGithub },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/amadou-diop-3a5258316/", icon: FaLinkedinIn },
    { label: "Email", href: "mailto:amadoudiop.04@outlook.fr", icon: FaEnvelope },
  ];

  return (
    <footer className="border-t border-slate-300 dark:border-slate-700/50 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4 md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-500 flex items-center justify-center font-bold text-white text-sm">
                AD
              </div>
              <div>
                <h3 className="text-xl font-bold font-lobster bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                  Amadou Diop
                </h3>
                <p className="text-xs text-slate-400 dark:text-slate-500">Junior Developer</p>
              </div>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-xs">
              Passionate about building modern web experiences with clean code and great design.
            </p>
            <div className="flex gap-3 mt-2">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700/50 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white hover:border-indigo-300 dark:hover:border-indigo-600/50 hover:bg-indigo-50 dark:hover:bg-indigo-600/10 transition-all duration-300"
                >
                  <Icon className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-slate-900 dark:text-white font-semibold mb-4 text-sm uppercase tracking-wider">Navigation</h4>
            <nav className="flex flex-col gap-2">
              {links.map(({ label, href, isLink }) =>
                isLink ? (
                  <Link key={label} to={href} className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 text-sm">
                    {label}
                  </Link>
                ) : (
                  <a key={label} href={href} className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 text-sm">
                    {label}
                  </a>
                )
              )}
            </nav>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-slate-900 dark:text-white font-semibold mb-4 text-sm uppercase tracking-wider">Stack</h4>
            <div className="flex flex-wrap gap-2">
              {["React", "Tailwind", "Node.js", "JavaScript", "Go"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 text-slate-600 dark:text-slate-300 rounded-full hover:border-indigo-300 dark:hover:border-indigo-600/40 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700/50 to-transparent mb-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            © {currentYear} Amadou Diop. All rights reserved.
          </p>
          <p className="text-slate-400 dark:text-slate-500 text-xs">
            Designed & built with <span className="text-violet-500">❤️</span> by Amadou Diop
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
