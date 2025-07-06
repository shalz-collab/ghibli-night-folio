
import React from 'react';

const MinecraftNavigation: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-minecraft-dark/90 backdrop-blur border-b-4 border-minecraft-stone">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-minecraft-gold font-pixel text-lg minecraft-text-glow">
            SHALINI.EXE
          </div>
          <div className="hidden md:flex space-x-4">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="minecraft-button text-xs py-2 px-4"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MinecraftNavigation;
