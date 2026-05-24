'use client';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "DriveHub",
      description: "A comprehensive vehicle rental platform that connects vehicle owners with renters. Features include user authentication, vehicle listings, booking management, and payment integration.",
      techStack: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      githubLink: "https://github.com/kalviumcommunity/S86_Charitha_Capstone_DriveHub.git",
      liveLink: "https://capstonedrivehub.netlify.app/", // Placeholder - user needs to add actual deployed link
      featured: true,
      status: "Completed"
    },
    {
      id: 2,
      title: "Signal Sync",
      description: "A production-level traffic congestion analytics system that provides actionable insights for urban traffic management using machine learning and data visualization.",
      techStack: ["Python", "flask", "Pandas", "NumPy", "Matplotlib", "scikit-learn"],
      githubLink: "https://github.com/kalviumcommunity/S86_0226_DataDrivers_DataScienceFoundation_SignalSync", // Placeholder
      liveLink: "https://github.com/kalviumcommunity/S86_0226_DataDrivers_DataScienceFoundation_SignalSync", // Placeholder
      featured: true,
      status: "Completed"
    },

  ];

  const handleLinkClick = (url: string, projectTitle: string) => {
    if (url === "#") {
      alert(`${projectTitle} link is a placeholder. Please update with actual URL.`);
      return;
    }
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="projects" className="py-32 bg-gradient-to-br from-orange-50 to-pink-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-40 right-20 w-32 h-32 bg-purple-100 rounded-full blur-xl"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-pink-100 rounded-full blur-lg"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            My <span className="text-purple-600">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Showcasing modern web technologies and innovative solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl border border-purple-100 hover:shadow-2xl hover:border-purple-300 transition-all duration-300 group ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              {/* Project Image Placeholder */}
              <div className="relative h-56 bg-purple-600 p-8 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-24 h-24 mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
                      {project.id === 1 ? (
                        <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                      ) : project.id === 2 ? (
                        <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/>
                      ) : (
                        <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"/>
                      )}
                    </svg>
                  </div>
                  <div className="text-2xl font-bold">{project.title}</div>
                </div>
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4 flex gap-2">
                  {project.status === 'Completed' && (
                    <span className="px-4 py-2 bg-green-500 text-white rounded-xl text-sm font-bold shadow-lg flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      Completed
                    </span>
                  )}
                  {project.status === 'Coming Soon' && (
                    <span className="px-4 py-2 bg-yellow-500 text-white rounded-xl text-sm font-bold shadow-lg flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                      </svg>
                      Coming Soon
                    </span>
                  )}
                  {project.featured && (
                    <span className="px-4 py-2 bg-orange-500 text-white rounded-xl text-sm font-bold shadow-lg flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                      Featured
                    </span>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
                    </svg>
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-2 bg-purple-50 border border-purple-200 text-gray-800 rounded-xl text-sm font-medium hover:bg-purple-100 hover:border-purple-300 hover:shadow-md transition-all duration-300 cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex gap-4">
                  <button
                    onClick={() => handleLinkClick(project.githubLink, project.title)}
                    className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all duration-300 hover:scale-105 font-semibold shadow-xl"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    GitHub
                  </button>
                  
                  <button
                    onClick={() => handleLinkClick(project.liveLink, project.title)}
                    className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-all duration-300 hover:scale-105 font-semibold shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={project.status === 'Coming Soon'}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    {project.status === 'Coming Soon' ? 'Coming Soon' : 'Live Demo'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-xl border border-purple-100 max-w-4xl mx-auto mb-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Interested in collaborating?</h3>
            <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-purple-600 hover:bg-purple-700 text-white px-10 py-4 rounded-xl font-bold shadow-xl hover:scale-105 transition-all duration-300"
            >
              Let&apos;s Work Together
            </button>
          </div>
        </div>

        {/* GitHub Profile Link */}
        <div className="text-center">
          <p className="text-gray-600 mb-4 text-lg">Want to see more of my work?</p>
          <a
            href="https://github.com/Charitha2937"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-purple-600 hover:text-purple-700 font-bold text-lg transition-colors group"
          >
            <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

