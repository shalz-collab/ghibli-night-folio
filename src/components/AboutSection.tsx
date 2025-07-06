
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 animate-fade-in-up">
            About Me
          </h2>
          
          <div className="bg-black/20 backdrop-blur-xl rounded-3xl p-8 border border-purple-400/30 hover:border-pink-400/40 transition-all duration-500">
            <div className="text-lg text-purple-100 leading-relaxed space-y-6">
              <p>
                Welcome to my anime-inspired digital realm! 🌸 I'm a passionate frontend developer who believes in the magic of transforming creative visions into interactive web experiences. With an eye for detail and a love for anime aesthetics, I craft user interfaces that tell stories through code.
              </p>
              
              <p>
                When I'm not coding under the starlit sky, you'll find me exploring the latest design trends, experimenting with new technologies, or getting lost in the enchanting worlds of anime and manga - which clearly inspire my creative approach! ✨
              </p>
              
              <p>
                I specialize in creating responsive, accessible, and performant web applications that bring brands to life with a touch of magic. Every project is an opportunity to blend technical excellence with creative storytelling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
