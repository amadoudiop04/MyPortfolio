import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="/">Accueil</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projets</a>
          <a href="#contact">Contact</a>
          <a href="/forms">Forms</a>
        </div>
        <p className="footer-text">
          © 2024 Amadou Diop. Junior Learning Computer Science
        </p>
      </div>
    </footer>
  );
};

export default Footer;
