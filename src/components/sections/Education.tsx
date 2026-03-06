'use client';

const Education = () => {
  return (
    <section id="education" className="py-32 bg-gradient-to-br from-orange-50 to-pink-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-100 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-pink-100 rounded-full blur-lg"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Education & <span className="text-purple-600">Learning</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Building a strong foundation through academic excellence
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Current Education */}
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-purple-100 hover:shadow-2xl hover:border-purple-300 transition-all duration-300">
            <div className="flex items-start justify-between mb-6">
              <div className="w-16 h-16 rounded-2xl bg-purple-600 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <div className="bg-purple-600 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-lg">
                2024 - 2028
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Bachelor of Technology
            </h3>
            
            <div className="flex items-center gap-2 text-purple-600 mb-4">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">The Apollo University</span>
            </div>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Currently pursuing Bachelor of Technology with focus on computer science 
              and software engineering. Building strong fundamentals in programming, 
              algorithms, and modern web development technologies.
            </p>

            {/* Key Focus Areas */}
            <div className="space-y-3">
              <h4 className="font-bold text-gray-900">Key Focus Areas:</h4>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                  <span className="text-sm text-gray-700">Software Engineering</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                  <span className="text-sm text-gray-700">Web Development</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-pink-600 rounded-full"></span>
                  <span className="text-sm text-gray-700">Data Structures</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-pink-600 rounded-full"></span>
                  <span className="text-sm text-gray-700">Algorithms</span>
                </div>
              </div>
            </div>

            {/* Status */}
            <div className="bg-green-50 border-2 border-green-200 p-4 rounded-2xl mt-6">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-green-700 font-bold">Currently Enrolled</span>
              </div>
              <p className="text-green-600 text-sm mt-2">
                Active student working on various projects and assignments
              </p>
            </div>
          </div>

          
        </div>

        
      </div>
    </section>
  );
};

export default Education;

