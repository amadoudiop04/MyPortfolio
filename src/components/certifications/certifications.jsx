import React from 'react';
import './certifications.css';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: 'Opquast - Certification en Qualité Web',
      year: 2025,
      issuer: 'Opquast',
      description: 'Certification en qualité web et bonnes pratiques de développement web',
      badge: '🏅',
      skills: ['Accessibilité Web', 'SEO', 'Performance', 'Bonnes pratiques']
    }
  ];

  return (
    <section className="certifications-section">
      <div className="certifications-container">
        <h2 className="section-title">Certifications</h2>
        <div className="certifications-grid">
          {certifications.map((cert) => (
            <div key={cert.id} className="certification-card">
              <div className="cert-badge">{cert.badge}</div>
              <h3>{cert.title}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
              <p className="cert-year">{cert.year}</p>
              <p className="cert-description">{cert.description}</p>
              <div className="cert-skills">
                {cert.skills.map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;