import React from "react";
import "./container.css";
import image from "../Ressources/github.png";

const Container = () => {
  return (
    <main className="myself" role="main">
      <section className="myself-container" aria-labelledby="profile-heading">
        <div className="card-profile-img" aria-label="profile"></div>

        <header className="presentation">
          <div>
          <p className="text-1">Hello, I'm</p>
          <h2 className="text-2">Amadou Diop</h2>
          <h1 id="profile-heading" className="text-3">Junior Developer</h1>
          </div>

          <a
            href="https://drive.google.com/file/d/1Aotkt7wFh8s48WUGcrwD_WTfiIr-1L0p/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn-1" aria-label="Download my CV">
              Download CV
            </button>
          </a>

          <div>
            <a
              href="https://github.com/amadoudiop04"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my GitHub profile"
            >
              <img className="logo" src={image} alt="GitHub logo" />
            </a>
          </div>
        </header>
      </section>
    </main>
  );
};

export default Container;
