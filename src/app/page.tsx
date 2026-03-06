import Navigation from '@/components/ui/Navigation';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Education from '@/components/sections/Education';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />
        
        {/* About Section */}
        <About />
        
        {/* Education Section */}
        <Education />
        
        {/* Projects Section */}
        <Projects />
        
        {/* Contact Section */}
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
