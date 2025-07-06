
import React from 'react';
import { MapPin, Phone, Mail, Github, Linkedin } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative">
      <div className="text-center z-10 animate-fade-in-up">
        <div className="mb-8">
          <h1 className="text-7xl md:text-9xl font-bold text-white mb-6 animate-float tracking-wider">
            SHALINI
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-pink-300 mb-4 animate-pulse">
            Frontend Developer
          </h2>
          <div className="text-lg md:text-xl text-purple-200 mb-8 font-medium italic">
            "turning ☕ coffee into code and chaos into clean UI."
          </div>
        </div>

        <div className="bg-black/20 backdrop-blur-xl rounded-3xl p-8 max-w-3xl mx-auto border border-purple-400/30 animate-glow shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-center justify-center space-x-2 text-pink-300 hover:text-pink-200 transition-colors">
              <MapPin size={20} />
              <span className="text-lg">Chennai, India</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-pink-300 hover:text-pink-200 transition-colors">
              <Phone size={20} />
              <span className="text-lg">+91 82209 11995</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-pink-300 hover:text-pink-200 transition-colors md:col-span-2">
              <Mail size={20} />
              <span className="text-lg">shalinimuthukumar1434@gmail.com</span>
            </div>
          </div>

          <div className="text-xl text-white mb-8 leading-relaxed">
            ✨ Crafting pixel-perfect interfaces with anime aesthetics and modern web magic ✨
          </div>

          <div className="flex justify-center space-x-8 mb-8">
            <a
              href="https://github.com/shalz-collab"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-purple-600/30 rounded-full hover:bg-purple-500/40 transition-all duration-300 hover:scale-110 transform hover:rotate-12"
            >
              <Github size={28} className="text-white group-hover:text-purple-200" />
            </a>
            <a
              href="https://www.linkedin.com/in/shalini-m-18sf/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-pink-600/30 rounded-full hover:bg-pink-500/40 transition-all duration-300 hover:scale-110 transform hover:-rotate-12"
            >
              <Linkedin size={28} className="text-white group-hover:text-pink-200" />
            </a>
          </div>

          {/* Programming Languages */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-purple-200 mb-4">Programming Languages & Technologies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['HTML5', 'CSS3', 'JavaScript', 'React', 'Bootstrap', 'Tailwind CSS', 'TypeScript'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white rounded-full text-sm font-medium border border-purple-400/30 hover:border-pink-400/50 hover:scale-105 transition-all duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
