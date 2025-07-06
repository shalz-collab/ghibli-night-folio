
import React, { useEffect, useState } from 'react';

interface MinecraftLeaf {
  id: number;
  x: number;
  y: number;
  rotation: number;
  delay: number;
  duration: number;
  size: number;
}

const MinecraftBackground: React.FC = () => {
  const [leaves, setLeaves] = useState<MinecraftLeaf[]>([]);

  useEffect(() => {
    const generateLeaves = () => {
      const newLeaves: MinecraftLeaf[] = [];
      const leafCount = 30;

      for (let i = 0; i < leafCount; i++) {
        newLeaves.push({
          id: i,
          x: Math.random() * 100,
          y: -10 - Math.random() * 20,
          rotation: Math.random() * 360,
          delay: Math.random() * 5,
          duration: 8 + Math.random() * 4,
          size: 8 + Math.random() * 4,
        });
      }

      setLeaves(newLeaves);
    };

    generateLeaves();
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Minecraft night sky gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-minecraft-dark" />
      
      {/* Pixelated stars */}
      <div className="absolute inset-0">
        {Array.from({ length: 100 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white opacity-80"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 50}%`,
              animation: `pixel-glow ${2 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>
      
      {/* Minecraft-style moon */}
      <div className="absolute top-10 right-10 w-16 h-16 bg-minecraft-gold opacity-80 border-2 border-yellow-300" 
           style={{ clipPath: 'polygon(0% 0%, 100% 0%, 85% 15%, 85% 85%, 15% 85%, 0% 100%)' }} />
      
      {/* Pixelated tree silhouettes */}
      <div className="absolute bottom-0 left-10 w-8 h-32 bg-minecraft-wood border-r-2 border-amber-900" />
      <div className="absolute bottom-32 left-6 w-16 h-16 bg-minecraft-grass border-2 border-green-600" 
           style={{ clipPath: 'polygon(20% 100%, 0% 60%, 10% 40%, 0% 20%, 20% 0%, 40% 20%, 30% 40%, 50% 20%, 70% 0%, 90% 20%, 80% 40%, 100% 60%, 80% 100%)' }} />
      
      <div className="absolute bottom-0 right-20 w-8 h-40 bg-minecraft-wood border-r-2 border-amber-900" />
      <div className="absolute bottom-40 right-16 w-20 h-20 bg-minecraft-grass border-2 border-green-600"
           style={{ clipPath: 'polygon(25% 100%, 0% 75%, 15% 50%, 0% 25%, 25% 0%, 50% 25%, 35% 50%, 65% 25%, 75% 0%, 100% 25%, 85% 50%, 100% 75%, 75% 100%, 50% 75%, 25% 100%)' }} />
      
      {/* Falling pixelated leaves */}
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="minecraft-leaf animate-leaf-fall"
          style={{
            left: `${leaf.x}%`,
            top: `${leaf.y}%`,
            width: `${leaf.size}px`,
            height: `${leaf.size}px`,
            transform: `rotate(${leaf.rotation}deg)`,
            animationDelay: `${leaf.delay}s`,
            animationDuration: `${leaf.duration}s`
          }}
        />
      ))}
    </div>
  );
};

export default MinecraftBackground;
