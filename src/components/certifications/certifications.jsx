import React from 'react';

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
    <section className="py-20 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-5xl font-bold text-center font-lobster bg-gradient-to-r from-red-500 to-pink-400 bg-clip-text text-transparent mb-16">
          Certifications
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <div 
              key={cert.id}
              className="bg-gradient-to-br from-slate-800 to-slate-900/50 border border-slate-700/50 rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                {/* Badge */}
                <div className="text-5xl mb-4 inline-block p-3 bg-slate-900/50 rounded-lg">
                  {cert.badge}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                  {cert.title}
                </h3>

                {/* Issuer and Year */}
                <div className="flex justify-between items-start mb-4 pb-4 border-b border-slate-700/50">
                  <p className="text-red-500 font-semibold">
                    {cert.issuer}
                  </p>
                  <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm font-medium">
                    {cert.year}
                  </span>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-red-600/20 text-red-400 rounded-full text-xs font-medium hover:bg-red-600/30 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;