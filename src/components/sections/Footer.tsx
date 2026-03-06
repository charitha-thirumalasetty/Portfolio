'use client';

const Footer = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/charitha-rayalu-thirumalasetty-b7134933a",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: "GitHub",
      url: "https://github.com/Charitha2937",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
        </svg>
      )
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/Charitha2937/",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.856 2.133 8.074-.074l8.074-8.074a1.375 1.375 0 1 0-1.946-1.946l-8.074 8.074a2.72 2.72 0 0 1-3.8.022l-.038-.038-4.276-4.193a2.72 2.72 0 0 1-.581-.827 2.72 2.72 0 0 1-.213-.892c-.01-.147-.006-.292.014-.434a2.72 2.72 0 0 1 .533-1.193l3.855-4.127L18.29 1.55c.434-.434.998-.49 1.378-.11.38.38.324.944-.11 1.378L11.69 10.686a.665.665 0 0 0-.194.471c0 .177.07.347.194.471.124.124.294.194.471.194.177 0 .347-.07.471-.194L20.5 3.76c.434-.434.998-.49 1.378-.11.38.38.324.944-.11 1.378l-7.868 7.868a2.72 2.72 0 0 1-3.8 0 2.72 2.72 0 0 1 0-3.8L18.29.107c.434-.434.998-.49 1.378-.11.38.38.324.944-.11 1.378L11.690 9.243a.665.665 0 0 0-.194.471c0 .177.07.347.194.471.124.124.294.194.471.194.177 0 .347-.07.471-.194l7.868-7.868c.434-.434.998-.49 1.378-.11.38.38.324.944-.11 1.378l-7.868 7.868a2.72 2.72 0 0 1-3.8 0 2.72 2.72 0 0 1 0-3.8l7.868-7.868c.434-.434.998-.49 1.378-.11.38.38.324.944-.11 1.378L11.69 17.114a.665.665 0 0 0-.194.471c0 .177.07.347.194.471.124.124.294.194.471.194.177 0 .347-.07.471-.194l7.868-7.868c1.378-1.378 1.378-3.608 0-4.986s-3.608-1.378-4.986 0z"/>
        </svg>
      )
    },
    {
      name: "Email",
      url: "mailto:charitharayaluthirumalasetty@gmail.com",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      )
    },
    {
      name: "Twitter",
      url: "#", // Placeholder - user can add actual Twitter/X link
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      )
    },
    {
      name: "YouTube",
      url: "#", // Placeholder - user can add actual YouTube link
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    }
  ];

  const handleSocialClick = (url: string, name: string) => {
    if (url === "#") {
      alert(`${name} link is a placeholder. Please update with actual URL.`);
      return;
    }
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* About Section */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <h3 className="text-2xl font-bold mb-3">
                <span className="text-purple-400">
                  Charitha Rayalu
                </span>
              </h3>
              <p className="text-gray-300 leading-relaxed max-w-md text-sm">
                Full Stack Developer passionate about creating innovative web applications 
                and AI-powered solutions. Currently pursuing BTech at Apollo University.
              </p>
            </div>
            
            <div className="space-y-2 text-gray-300 text-sm">
              <p className="flex items-center gap-3">
                <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <a 
                  href="mailto:charitharayaluthirumalasetty@gmail.com"
                  className="hover:text-purple-400 transition-colors"
                >
                  charitharayaluthirumalasetty@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-3">
                <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <a 
                  href="tel:+919346732991"
                  className="hover:text-purple-400 transition-colors"
                >
                  +91 93467 32991
                </a>
              </p>
              <p className="flex items-center gap-3">
                <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span>Nandyal, India</span>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-base font-semibold mb-4 text-purple-300">Quick Links</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              {[
                { name: 'About', id: 'about' },
                { name: 'Education', id: 'education' },
                { name: 'Projects', id: 'projects' },
                { name: 'Contact', id: 'contact' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(link.id);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="hover:text-purple-400 transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="space-y-3">
            <h4 className="text-base font-semibold mb-4 text-purple-300">Technologies</h4>
            <ul className="space-y-2 text-gray-300 text-xs">
              <li className="hover:text-purple-400 transition-colors cursor-default">React & Next.js</li>
              <li className="hover:text-purple-400 transition-colors cursor-default">Node.js & Express</li>
              <li className="hover:text-purple-400 transition-colors cursor-default">MongoDB & MySQL</li>
              <li className="hover:text-purple-400 transition-colors cursor-default">Python & Java</li>
              <li className="hover:text-purple-400 transition-colors cursor-default">Tailwind CSS</li>
              <li className="hover:text-purple-400 transition-colors cursor-default">DevSecOps</li>
            </ul>
          </div>
        </div>

        {/* Social Media & Back to Top */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-xs font-medium">Follow me:</span>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <button
                    key={social.name}
                    onClick={() => handleSocialClick(social.url, social.name)}
                    className={`p-3 rounded-2xl border border-gray-600 transition-all hover:border-purple-400 hover:bg-purple-600 hover:text-white hover:scale-110 hover:shadow-lg ${
                      social.url === '#' ? 'opacity-50' : ''
                    }`}
                    title={social.name}
                  >
                    {social.icon}
                  </button>
                ))}
              </div>
            </div>

            {/* Back to Top Button */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 px-5 py-2 bg-purple-600 hover:bg-purple-700 rounded-2xl text-xs font-medium transition-all hover:scale-105 shadow-lg"
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              Back to Top
            </button>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-6 mt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center">
            
            {/* Copyright */}
            <div className="text-gray-400 text-xs">
              <p>&copy; {currentYear} Charitha Rayalu Thirumalasetty. All rights reserved.</p>
            </div>

            {/* Built with Love */}
            <div className="flex items-center gap-2 text-gray-400 text-xs">
              <span>Built with</span>
              <svg className="w-4 h-4 text-red-500 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
              </svg>
              <span>by <span className="text-purple-400 font-medium">Charitha</span></span>
            </div>

            {/* Tech Stack */}
            <div className="text-gray-400 text-xs">
              <span>Next.js • Tailwind CSS • TypeScript</span>
            </div>
          </div>
        </div>

        {/* Inspirational Quote */}
        <div className="mt-6 p-4 bg-purple-800/30 rounded-2xl text-center border border-purple-700/30">
          <p className="text-purple-300 text-base font-medium flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
            </svg>
            <span>&quot;Code is like humor. When you have to explain it, it&apos;s bad.&quot; — Cory House</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

