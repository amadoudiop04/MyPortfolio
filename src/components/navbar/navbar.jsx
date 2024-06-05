import React from "react";
import "./navbar.css";

const navbar = () => {
  return (
    <div className="header-container">
      <nav className="my-nav">
      <h1 className="title-top">Amadou Diop</h1>
      <div>
        <ul className="nav-links">
          <li>{" "}<a className="links-header" href="#about">About</a></li>
          <li>{" "}<a className="links-header" href="#experience">Experience</a></li>
          <li>{" "}<a className="links-header" href="projects">Projets</a></li>
          <li>{" "}<a className="links-header" href="#contact">Contact</a></li>
        </ul>
      </div>
      </nav>
    </div>
  );
};

export default navbar;
