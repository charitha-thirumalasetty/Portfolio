'use client';

import { useState, useEffect } from 'react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo */}
          <div className="flex items-center">
            <button 
              onClick={() => scrollToSection('hero')}
              className="flex items-center space-x-2 group"
            >
              <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <span className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                PORTFOLIO
              </span>
            </button>
          </div>

          {/* Desktop Navigation - Empty for clean minimal design */}
          <div className="hidden md:flex items-center">
            {/* Reserved for future navigation items */}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="inline-flex items-center justify-center p-2 rounded-xl text-gray-700 hover:text-purple-600 hover:bg-purple-50 focus:outline-none transition-colors">
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

