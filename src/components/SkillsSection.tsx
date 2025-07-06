
import React from 'react';

const SkillsSection: React.FC = () => {
  const skills = [
    { name: 'HTML5', icon: '🏗️', level: 95, color: 'from-orange-500 to-red-500' },
    { name: 'CSS3', icon: '🎨', level: 90, color: 'from-blue-500 to-purple-500' },
    { name: 'JavaScript', icon: '⚡', level: 85, color: 'from-yellow-400 to-orange-500' },
    { name: 'React', icon: '⚛️', level: 80, color: 'from-cyan-400 to-blue-500' },
    { name: 'TypeScript', icon: '📘', level: 75, color: 'from-blue-600 to-indigo-600' },
    { name: 'Tailwind CSS', icon: '💨', level: 90, color: 'from-teal-400 to-cyan-500' },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12 animate-fade-in-up">
            🌸 My Magical Toolkit
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group bg-black/20 backdrop-blur-xl rounded-2xl p-6 border border-purple-400/30 hover:border-pink-400/50 transition-all duration-500 hover:scale-105 hover:rotate-1 animate-fade-in-up shadow-lg hover:shadow-2xl"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl mb-4 text-center group-hover:animate-bounce">{skill.icon}</div>
                <h3 className="text-xl font-semibold text-white text-center mb-4 group-hover:text-pink-200 transition-colors">
                  {skill.name}
                </h3>
                
                <div className="w-full bg-black/30 rounded-full h-3 mb-2 overflow-hidden">
                  <div
                    className={`bg-gradient-to-r ${skill.color} h-3 rounded-full transition-all duration-1000 ease-out shadow-lg`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                
                <div className="text-center text-purple-200 text-sm font-medium">
                  {skill.level}%
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
