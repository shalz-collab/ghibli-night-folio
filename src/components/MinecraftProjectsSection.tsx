
import React from 'react';
import { Github, Square } from 'lucide-react';

const MinecraftProjectsSection: React.FC = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce platform built with React, featuring responsive design and smooth animations.',
      emoji: '🛒',
      technologies: ['React', 'Tailwind CSS', 'JavaScript'],
      githubLink: '#',
      blocks: 'Diamond'
    },
    {
      title: 'Portfolio Website',
      description: 'A stunning portfolio website with Minecraft-inspired design, featuring animated backgrounds.',
      emoji: '✨',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      githubLink: '#',
      blocks: 'Gold'
    },
    {
      title: 'Task Management App',
      description: 'An intuitive task management application with drag-and-drop functionality.',
      emoji: '📝',
      technologies: ['React', 'TypeScript', 'Tailwind'],
      githubLink: '#',
      blocks: 'Emerald'
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-pixel text-minecraft-gold text-center mb-12 minecraft-text-glow animate-minecraft-fade">
            PROJECT BUILDS
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="minecraft-block bg-minecraft-wood hover:bg-amber-800 transition-all duration-300 overflow-hidden group hover:animate-pixel-glow cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-6">
                  <div className="minecraft-inventory-slot bg-minecraft-diamond mb-4 mx-auto text-3xl">
                    {project.emoji}
                  </div>
                  
                  <h3 className="font-pixel text-white text-sm mb-3 text-center group-hover:text-minecraft-gold transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 text-xs font-pixel leading-relaxed text-center">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4 justify-center">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="minecraft-inventory-slot bg-minecraft-stone text-xs w-auto h-6 px-2 text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-center">
                    <a
                      href={project.githubLink}
                      className="minecraft-button flex items-center space-x-2 text-xs py-2 px-4"
                    >
                      <Github size={12} />
                      <span>VIEW CODE</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinecraftProjectsSection;
