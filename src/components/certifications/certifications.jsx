import React from 'react';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: 'Opquast - Web Quality Certification',
      year: 2025,
      issuer: 'Opquast',
      description: 'Web quality certification and web development best practices',
      badge: '🏅',
      skills: ['Web Accessibility', 'SEO', 'Performance', 'Best Practices']
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-5xl font-bold text-center font-lobster bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent mb-16">
          Certifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-white dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-900/50 border border-slate-300 dark:border-slate-700/50 rounded-2xl p-8 shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-violet-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="text-5xl mb-4 inline-block p-3 bg-slate-100 dark:bg-slate-900/50 rounded-lg">
                  {cert.badge}
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 leading-tight">
                  {cert.title}
                </h3>

                <div className="flex justify-between items-start mb-4 pb-4 border-b border-slate-200 dark:border-slate-700/50">
                  <p className="text-indigo-600 dark:text-indigo-400 font-semibold">{cert.issuer}</p>
                  <span className="px-3 py-1 bg-violet-500/20 text-violet-600 dark:text-violet-300 rounded-full text-sm font-medium">
                    {cert.year}
                  </span>
                </div>

                <p className="text-slate-600 dark:text-slate-300 text-sm mb-6 leading-relaxed">{cert.description}</p>

                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-indigo-600/20 text-indigo-600 dark:text-indigo-400 rounded-full text-xs font-medium hover:bg-indigo-600/30 transition-colors duration-300"
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
