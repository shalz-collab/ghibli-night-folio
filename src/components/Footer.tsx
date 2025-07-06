
import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-purple-500/20 bg-black/10 backdrop-blur-lg">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 text-purple-200 mb-4">
            <span>Made with</span>
            <Heart size={16} className="text-pink-400 animate-pulse" />
            <span>and anime magic by SHALINI</span>
          </div>
          
          <p className="text-purple-300 text-sm">
            © 2024 SHALINI. All rights reserved.
          </p>
          
          <p className="text-purple-400 text-xs mt-2">
            Inspired by the beauty of anime nights and falling sakura 🌸✨
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
