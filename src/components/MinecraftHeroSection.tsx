
import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const MinecraftHeroSection: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="text-center z-10 animate-minecraft-fade">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-pixel text-minecraft-gold mb-6 animate-pixel-glow minecraft-text-glow tracking-wider">
            SHALINI
          </h1>
          <div className="minecraft-block bg-minecraft-wood p-6 max-w-2xl mx-auto mb-6">
            <p className="text-white font-pixel text-xs md:text-sm leading-relaxed">
              "turning ☕ coffee into code and chaos into clean UI."
            </p>
          </div>
          <h2 className="text-lg md:text-xl font-pixel text-minecraft-emerald mb-4">
            Frontend Developer
          </h2>
        </div>

        <div className="minecraft-block bg-gray-800 p-8 max-w-4xl mx-auto mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-center justify-center space-x-2 text-minecraft-gold hover:text-minecraft-torch transition-colors">
              <MapPin size={16} />
              <span className="font-pixel text-xs">Chennai, India</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-minecraft-gold hover:text-minecraft-torch transition-colors">
              <Phone size={16} />
              <span className="font-pixel text-xs">+91 82209 11995</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-minecraft-gold hover:text-minecraft-torch transition-colors md:col-span-2">
              <Mail size={16} />
              <span className="font-pixel text-xs">shalinimuthukumar1434@gmail.com</span>
            </div>
          </div>

          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://github.com/shalz-collab"
              target="_blank"
              rel="noopener noreferrer"
              className="minecraft-button group animate-block-bounce"
              style={{ animationDelay: '0.5s' }}
            >
              <Github size={16} className="inline mr-2" />
              <span className="text-xs">GITHUB</span>
            </a>
            <a
              href="https://www.linkedin.com/in/shalini-m-18sf/"
              target="_blank"
              rel="noopener noreferrer"
              className="minecraft-button group animate-block-bounce"
              style={{ animationDelay: '1s' }}
            >
              <Linkedin size={16} className="inline mr-2" />
              <span className="text-xs">LINKEDIN</span>
            </a>
          </div>

          {/* Programming Languages as Minecraft Inventory */}
          <div className="space-y-4">
            <h3 className="font-pixel text-minecraft-diamond text-sm mb-4">CODING INVENTORY</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                { name: 'HTML5', emoji: '🧱', color: 'bg-orange-600' },
                { name: 'CSS3', emoji: '🎨', color: 'bg-blue-600' },
                { name: 'JavaScript', emoji: '⚡', color: 'bg-yellow-600' },
                { name: 'React', emoji: '🌀', color: 'bg-cyan-600' },
                { name: 'Tailwind', emoji: '💨', color: 'bg-teal-600' },
                { name: 'TypeScript', emoji: '📘', color: 'bg-blue-800' },
                { name: 'Git', emoji: '✨', color: 'bg-purple-600' }
              ].map((tech, index) => (
                <div
                  key={tech.name}
                  className={`minecraft-inventory-slot ${tech.color} hover:animate-block-bounce cursor-pointer group relative`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <span className="text-xl">{tech.emoji}</span>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-minecraft-dark text-white px-2 py-1 text-xs font-pixel opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {tech.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinecraftHeroSection;
