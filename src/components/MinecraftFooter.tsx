
import React from 'react';
import { Square } from 'lucide-react';

const MinecraftFooter: React.FC = () => {
  return (
    <footer className="py-12 border-t-4 border-minecraft-stone bg-minecraft-dark/90 backdrop-blur-lg">
      <div className="container mx-auto px-6">
        <div className="text-center">
          {/* Minecraft hotbar style */}
          <div className="flex justify-center mb-6">
            <div className="minecraft-block bg-gray-800 p-2 flex space-x-1">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="minecraft-inventory-slot bg-gray-700 w-8 h-8 text-xs flex items-center justify-center">
                  {i === 0 && '🧱'}
                  {i === 1 && '🎨'}
                  {i === 2 && '⚡'}
                  {i === 3 && '🌀'}
                  {i === 4 && '💨'}
                  {i === 5 && '✨'}
                  {i === 6 && '📘'}
                  {i === 7 && '🛒'}
                  {i === 8 && '📝'}
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex items-center justify-center space-x-2 text-minecraft-gold mb-4">
            <span className="font-pixel text-xs">Crafted with</span>
            <Square size={12} className="text-minecraft-redstone animate-pixel-glow" />
            <span className="font-pixel text-xs">and pixel perfect code by SHALINI</span>
          </div>
          
          <p className="text-minecraft-stone font-pixel text-xs">
            © 2024 SHALINI. ALL RIGHTS RESERVED.
          </p>
          
          <p className="text-minecraft-emerald font-pixel text-xs mt-2">
            Powered by React + Minecraft Magic ⛏️✨
          </p>
        </div>
      </div>
    </footer>
  );
};

export default MinecraftFooter;
