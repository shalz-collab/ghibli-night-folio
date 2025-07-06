
import React from 'react';

const MinecraftAboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-pixel text-minecraft-gold mb-12 minecraft-text-glow animate-minecraft-fade">
            PLAYER STATS
          </h2>
          
          <div className="minecraft-block bg-minecraft-wood p-8 hover:animate-pixel-glow">
            <div className="text-sm font-pixel text-white leading-relaxed space-y-6">
              <p>
                Welcome to my pixelated coding world! 🎮 I'm a passionate frontend developer who believes 
                in crafting user interfaces like building epic Minecraft structures - block by block, 
                with precision and creativity.
              </p>
              
              <p>
                When I'm not coding in my digital cave, you'll find me exploring new web technologies, 
                experimenting with pixel-perfect designs, or getting lost in the endless possibilities 
                of creative mode development! ⛏️
              </p>
              
              <p>
                I specialize in creating responsive, accessible, and performant web applications that 
                bring ideas to life with the same dedication as building a castle in Minecraft - 
                one carefully placed block at a time.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="minecraft-inventory-slot bg-minecraft-redstone">
                <div className="text-xs text-center">
                  <div className="font-pixel text-white">99+</div>
                  <div className="font-pixel text-xs text-gray-300">Projects</div>
                </div>
              </div>
              <div className="minecraft-inventory-slot bg-minecraft-emerald">
                <div className="text-xs text-center">
                  <div className="font-pixel text-white">∞</div>
                  <div className="font-pixel text-xs text-gray-300">Coffee</div>
                </div>
              </div>
              <div className="minecraft-inventory-slot bg-minecraft-diamond">
                <div className="text-xs text-center">
                  <div className="font-pixel text-white">24/7</div>
                  <div className="font-pixel text-xs text-gray-300">Coding</div>
                </div>
              </div>
              <div className="minecraft-inventory-slot bg-minecraft-gold">
                <div className="text-xs text-center">
                  <div className="font-pixel text-white">100%</div>
                  <div className="font-pixel text-xs text-gray-300">Passion</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinecraftAboutSection;
