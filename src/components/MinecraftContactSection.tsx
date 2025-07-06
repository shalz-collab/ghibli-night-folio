
import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const MinecraftContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-pixel text-minecraft-gold mb-12 minecraft-text-glow animate-minecraft-fade">
            MULTIPLAYER CONNECT
          </h2>
          
          <div className="minecraft-block bg-minecraft-stone p-8">
            <p className="font-pixel text-white text-sm mb-8 leading-relaxed">
              Ready to build something awesome together? Send me a message and let's craft 
              the next big project in the digital world!
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="minecraft-block bg-minecraft-wood p-4 hover:animate-pixel-glow group">
                <Mail className="mx-auto mb-2 text-minecraft-gold group-hover:text-minecraft-torch" size={24} />
                <p className="font-pixel text-xs text-white mb-1">EMAIL</p>
                <p className="font-pixel text-xs text-minecraft-gold">shalinimuthukumar1434@gmail.com</p>
              </div>
              
              <div className="minecraft-block bg-minecraft-wood p-4 hover:animate-pixel-glow group">
                <Phone className="mx-auto mb-2 text-minecraft-gold group-hover:text-minecraft-torch" size={24} />
                <p className="font-pixel text-xs text-white mb-1">PHONE</p>
                <p className="font-pixel text-xs text-minecraft-gold">+91 82209 11995</p>
              </div>
              
              <div className="minecraft-block bg-minecraft-wood p-4 hover:animate-pixel-glow group md:col-span-2">
                <MapPin className="mx-auto mb-2 text-minecraft-gold group-hover:text-minecraft-torch" size={24} />
                <p className="font-pixel text-xs text-white mb-1">LOCATION</p>
                <p className="font-pixel text-xs text-minecraft-gold">Chennai, India</p>
              </div>
            </div>
            
            <div className="flex justify-center space-x-4">
              <a
                href="https://github.com/shalz-collab"
                target="_blank"
                rel="noopener noreferrer"
                className="minecraft-button group"
              >
                <Github size={16} className="inline mr-2" />
                <span className="text-xs">GITHUB</span>
              </a>
              <a
                href="https://www.linkedin.com/in/shalini-m-18sf/"
                target="_blank"
                rel="noopener noreferrer"
                className="minecraft-button group"
              >
                <Linkedin size={16} className="inline mr-2" />
                <span className="text-xs">LINKEDIN</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinecraftContactSection;
