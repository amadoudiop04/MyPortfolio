import React, { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header-container">
      <nav className="my-nav">
        <h1 className="title-top">Amadou Diop</h1>
        <div className={`nav-links-container ${isOpen ? "open" : ""}`}>
          <ul className="nav-links">
            <li>
              <a className="links-header" href="/">
                Accueil
              </a>
            </li>
            <li>
              <a className="links-header" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="links-header" href="#experience">
                Experience
              </a>
            </li>
            <li>
              <a className="links-header" href="#projects">
                Projets
              </a>
            </li>
            <li>
              <a className="links-header" href="#contact">
                Contact
              </a>
            </li>
            <li>
              <a className="links-header" href="/forms">
                forms
              </a>
            </li>
          </ul>
        </div>
        <div className="burger" onClick={toggleMenu}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
