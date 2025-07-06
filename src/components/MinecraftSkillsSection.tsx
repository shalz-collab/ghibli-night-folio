
import React from 'react';

const MinecraftSkillsSection: React.FC = () => {
  const skills = [
    { name: 'HTML5', level: 95, emoji: '🧱', description: 'Builds the structure like cobblestone' },
    { name: 'CSS3', level: 90, emoji: '🎨', description: 'Paints it like wool and banners' },
    { name: 'JavaScript', level: 85, emoji: '⚡', description: 'Powers interaction like Redstone' },
    { name: 'React', level: 80, emoji: '🌀', description: 'Creates dynamic pages like command blocks' },
    { name: 'Tailwind CSS', level: 90, emoji: '💨', description: 'Utility-first crafting like creative mode' },
    { name: 'Git & GitHub', level: 85, emoji: '✨', description: 'Save points and backups' },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-pixel text-minecraft-gold text-center mb-12 minecraft-text-glow animate-minecraft-fade">
            CRAFTING SKILLS
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="minecraft-block bg-gray-800 p-6 hover:bg-gray-700 transition-all duration-300 hover:animate-pixelate group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className="minecraft-inventory-slot bg-minecraft-emerald mr-4 w-12 h-12 text-lg">
                    {skill.emoji}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-pixel text-white text-sm mb-1 group-hover:text-minecraft-gold transition-colors">
                      {skill.name}
                    </h3>
                    <p className="text-gray-400 text-xs font-pixel leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </div>
                
                <div className="skill-bar mb-2">
                  <div
                    className="skill-bar-fill transition-all duration-2000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                
                <div className="text-center text-minecraft-gold text-xs font-pixel">
                  LVL {skill.level}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinecraftSkillsSection;
