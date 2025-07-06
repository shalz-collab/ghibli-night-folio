
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce platform built with React and Tailwind CSS, featuring responsive design and smooth animations.',
      image: '🛒',
      technologies: ['React', 'Tailwind CSS', 'JavaScript'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'A stunning portfolio website with Ghibli-inspired design, featuring animated backgrounds and smooth interactions.',
      image: '✨',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      title: 'Task Management App',
      description: 'An intuitive task management application with drag-and-drop functionality and real-time updates.',
      image: '📝',
      technologies: ['React', 'Bootstrap', 'JavaScript'],
      liveLink: '#',
      githubLink: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12 animate-fade-in-up">
            Featured Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="bg-night-sky-800/60 backdrop-blur-lg rounded-2xl overflow-hidden border border-ghibli-purple-500/30 hover:border-ghibli-pink-500/50 transition-all duration-300 hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-6">
                  <div className="text-6xl text-center mb-4">{project.image}</div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-ghibli-purple-200 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-ghibli-purple-500/20 text-ghibli-purple-300 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.liveLink}
                      className="flex items-center space-x-2 text-ghibli-pink-400 hover:text-ghibli-pink-300 transition-colors duration-300"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm">Live Demo</span>
                    </a>
                    <a
                      href={project.githubLink}
                      className="flex items-center space-x-2 text-ghibli-purple-400 hover:text-ghibli-purple-300 transition-colors duration-300"
                    >
                      <Github size={16} />
                      <span className="text-sm">Code</span>
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

export default ProjectsSection;
