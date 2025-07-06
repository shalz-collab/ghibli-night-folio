
import React from 'react';

const Navigation: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-night-sky-800/80 backdrop-blur-md border-b border-ghibli-purple-500/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-semibold text-ghibli-purple-300">
            Shalini MK
          </div>
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-white hover:text-ghibli-purple-300 transition-colors duration-300"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-ghibli-purple-300 transition-colors duration-300"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-white hover:text-ghibli-purple-300 transition-colors duration-300"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-white hover:text-ghibli-purple-300 transition-colors duration-300"
            >
              Projects
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
