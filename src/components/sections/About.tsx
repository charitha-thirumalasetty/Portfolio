'use client';

const About = () => {
  const skills = [
    {
      category: "Programming Languages",
      items: ["Python", "Java"],
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      category: "Frontend",
      items: ["React", "HTML", "CSS", "Tailwind"],
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      )
    },
    {
      category: "Backend",
      items: ["Node.js", "Express"],
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      )
    },
    {
      category: "Database",
      items: ["MongoDB", "MySQL"],
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      )
    },
    {
      category: "Tools",
      items: ["DevSecOps", "Git"],
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ];

  const stats = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      value: "2024",
      label: "Started Journey"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      value: "10+",
      label: "Technologies"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      value: "24/7",
      label: "Learning Mode"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      value: "∞",
      label: "Possibilities"
    }
  ];

  return (
    <section id="about" className="py-32 bg-gradient-to-br from-orange-50 to-pink-50 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-32 h-32 bg-purple-100 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-pink-100 rounded-full blur-lg"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Building tomorrow&apos;s web with today&apos;s technology
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-20">
          
          {/* Left Column - Profile (2 cols) */}
          <div className="lg:col-span-2">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-purple-100 sticky top-8">
              {/* Avatar */}
              <div className="flex flex-col items-center mb-8">
                <div className="w-32 h-32 rounded-3xl bg-purple-600 p-1 mb-6">
                  <div className="w-full h-full rounded-3xl bg-white flex items-center justify-center">
                    <span className="text-5xl font-bold text-purple-600">
                      CR
                    </span>
                  </div>
                </div>
                
                <h3 className="text-3xl font-bold text-gray-900 mb-2 text-center">
                  Charitha Rayalu
                </h3>
                <p className="text-lg text-purple-600 font-semibold mb-4">
                  Full Stack Developer
                </p>
                <p className="text-gray-600 text-center leading-relaxed mb-8">
                  BTech student at The Apollo University with a passion for creating innovative web solutions.
                </p>
              </div>

              {/* Info Cards */}
              <div className="space-y-4">
                <div className="bg-purple-50 p-5 rounded-2xl border border-purple-200">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-600 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-gray-900 font-bold text-sm">University</div>
                      <div className="text-gray-600 text-sm">Apollo University</div>
                    </div>
                  </div>
                  <div className="text-gray-500 text-xs">BTech • 2024 - 2028</div>
                </div>

                <div className="bg-purple-50 p-5 rounded-2xl border border-purple-200">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-purple-600 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-gray-900 font-bold text-sm">Role</div>
                      <div className="text-gray-600 text-sm">Student & Developer</div>
                    </div>
                  </div>
                  <div className="text-gray-500 text-xs">Building • Learning • Growing</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Skills (3 cols) */}
          <div className="lg:col-span-3 space-y-6">
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-3">Technical Skills</h3>
              <p className="text-gray-600">Technologies I use to bring ideas to life</p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {skills.map((skillGroup, index) => (
                <div 
                  key={index}
                  className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-purple-100 hover:shadow-2xl hover:border-purple-300 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-purple-600 flex items-center justify-center text-white">
                      {skillGroup.icon}
                    </div>
                    <h4 className="text-gray-900 font-bold text-lg">
                      {skillGroup.category}
                    </h4>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-4 py-2 bg-purple-50 border border-purple-200 text-gray-800 rounded-xl text-sm font-medium hover:bg-purple-100 hover:border-purple-300 hover:shadow-md transition-all duration-300 hover:scale-105 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Development Journey Stats */}
        <div className="mt-20">
          <h3 className="text-4xl font-bold text-gray-900 text-center mb-12">Development Journey</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-purple-100 hover:shadow-2xl hover:border-purple-300 transition-all duration-300 hover:scale-105 text-center group"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-600 text-white mb-4 mx-auto flex items-center justify-center group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-5xl font-bold text-purple-600 mb-3">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

