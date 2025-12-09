import React from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import "./infos.css";
import { FaLinkedin, FaEnvelope } from "react-icons/fa"; 

const Infos = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <div id="contact" className="infoContainer">
      <div className={`infoText scroll-animate ${isVisible ? 'visible' : ''}`} ref={ref}>
        <h2 className="title">Get in Touch</h2>
        <h1 className="title-2">Contact Me</h1>
      </div>

      <div className="cardEmail">
        <div className="contactItem">
          <FaEnvelope className="icon" />
          <a
            href="mailto:amadoudiop.04@outlook.fr"
            className="contactLink"
          >
            amadoudiop.04@outlook.fr
          </a>
        </div>

        <div className="contactItem">
          <FaLinkedin className="icon" />
          <a
            href="https://www.linkedin.com/in/amadou-diop-3a5258316/?trk=opento_sprofile_details"
            className="contactLink"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default Infos;
