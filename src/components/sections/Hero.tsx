'use client';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50 flex items-center relative overflow-hidden">
      {/* Clean minimal background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-100/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-32 left-32 w-24 h-24 bg-pink-100/20 rounded-full blur-lg"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center min-h-[80vh]">
          
          {/* Left Content */}
          <div className="space-y-12">
            
            {/* Name Badge */}
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span className="w-8 h-px bg-purple-600"></span>
                <span className="font-medium">Charitha Rayalu Thirumalasetty</span>
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.9] text-gray-900">
                Hello<br />
                I&apos;m Charitha<br />
                <span className="text-purple-600">A Full Stack</span><br />
                <span className="text-purple-600">Developer.</span>
              </h1>
            </div>

            {/* Scroll Indicator */}
            <div className="flex items-center gap-3 text-sm text-gray-500">
              <button 
                onClick={() => scrollToSection('about')}
                className="flex items-center gap-2 hover:text-purple-600 transition-colors group"
              >
                <div className="w-6 h-6 border border-gray-400 rounded-full flex items-center justify-center group-hover:border-purple-600 transition-colors">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
                <span className="font-medium">Scroll down</span>
              </button>
            </div>
          </div>

          {/* Right Visual Element - 3D Geometric Shapes */}
          <div className="hidden lg:flex items-center justify-center relative">
            <div className="w-full h-[600px] bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 rounded-3xl relative overflow-hidden">
              {/* 3D Isometric Shapes */}
              <div className="absolute inset-0 flex items-center justify-center">
                
                {/* Main Platform */}
                <div className="relative" style={{ transform: 'translate3d(0, 0, 0)', perspective: '1000px' }}>
                  
                  {/* Blue Base Platform */}
                  <div className="w-80 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg transform shadow-2xl"></div>
                  
                  {/* Pink Cube */}
                  <div className="absolute -top-16 left-20 w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-500 rounded-lg transform rotate-12 shadow-xl animate-float"></div>
                  
                  {/* Light Blue Cube Stack */}
                  <div className="absolute -top-20 left-[180px] space-y-2">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-300 to-blue-400 rounded-lg shadow-lg"></div>
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-200 to-blue-300 rounded-lg shadow-lg transform translate-x-2"></div>
                  </div>
                  
                  {/* Orange/Yellow Rectangle */}
                  <div className="absolute -top-10 right-[60px] w-24 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg transform rotate-6 shadow-xl animate-float" style={{ animationDelay: '0.5s' }}></div>
                  
                  {/* White/Light Elements */}
                  <div className="absolute -top-8 left-[140px] w-8 h-8 bg-white bg-opacity-90 rounded-full shadow-lg animate-bounce" style={{ animationDelay: '1s' }}></div>
                  
                  {/* Orange Sphere */}
                  <div className="absolute -top-6 left-[200px] w-6 h-6 bg-gradient-to-br from-orange-400 to-red-500 rounded-full shadow-lg animate-pulse"></div>
                  
                  {/* Dark Shadow/Oval */}
                  <div className="absolute -top-3 left-[190px] w-12 h-6 bg-gray-800 bg-opacity-30 rounded-full blur-sm"></div>
                  
                  {/* Additional floating elements */}
                  <div className="absolute -top-32 right-[120px] w-6 h-6 bg-white bg-opacity-80 rounded-full shadow-md animate-float" style={{ animationDelay: '2s' }}></div>
                  
                  {/* Background geometric shapes */}
                  <div className="absolute -top-40 left-12 w-4 h-4 bg-purple-300 bg-opacity-50 rounded transform rotate-45 animate-spin-slow"></div>
                  <div className="absolute -bottom-24 right-10 w-6 h-6 bg-pink-300 bg-opacity-40 rounded transform rotate-12 animate-pulse"></div>
                  
                </div>
              </div>
              
              {/* Additional ambient shapes */}
              <div className="absolute top-10 right-10 w-8 h-8 bg-white bg-opacity-20 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
              <div className="absolute bottom-20 left-10 w-12 h-12 bg-purple-300 bg-opacity-30 rounded-lg transform rotate-45 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

