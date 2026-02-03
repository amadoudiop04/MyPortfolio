import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { label: 'GitHub', href: 'https://github.com/amadoudiop04', icon: '💻' },
    { label: 'LinkedIn', href: 'https://linkedin.com', icon: '💼' },
    { label: 'Email', href: 'mailto:your@email.com', icon: '✉️' },
  ];

  return (
    <footer className="border-t border-slate-700/50 mt-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="text-2xl font-bold font-lobster bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent mb-2">
                Amadou Diop
              </h3>
              <p className="text-slate-400 text-sm">Junior Developer</p>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Passionate about building modern web experiences with clean code and great design.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <nav className="flex flex-col gap-2">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-slate-400 hover:text-indigo-400 transition-colors duration-300 text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex flex-col gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-400 hover:text-indigo-400 transition-colors duration-300 text-sm group"
                  aria-label={link.label}
                >
                  <span className="group-hover:scale-110 transition-transform">{link.icon}</span>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-white font-semibold mb-4">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {['React', 'Tailwind', 'Node.js', 'JavaScript'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs bg-slate-800/50 border border-slate-700/50 text-slate-300 rounded-full hover:border-indigo-500/50 transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm text-center sm:text-left">
            © {currentYear} Amadou Diop. All rights reserved.
          </p>
          <p className="text-slate-500 text-xs">
            Designed & Built with <span className="text-pink-400">❤️</span> by Amadou Diop
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
