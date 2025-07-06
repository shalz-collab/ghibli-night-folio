
import React, { useEffect, useState } from 'react';

interface Star {
  id: number;
  x: number;
  y: number;
  size: 'small' | 'medium' | 'large';
  delay: number;
}

interface Leaf {
  id: number;
  x: number;
  y: number;
  rotation: number;
  delay: number;
  duration: number;
  type: 'maple' | 'oak' | 'birch';
}

const StarField: React.FC = () => {
  const [stars, setStars] = useState<Star[]>([]);
  const [leaves, setLeaves] = useState<Leaf[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars: Star[] = [];
      const starCount = 200;

      for (let i = 0; i < starCount; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: ['small', 'medium', 'large'][Math.floor(Math.random() * 3)] as 'small' | 'medium' | 'large',
          delay: Math.random() * 3
        });
      }

      setStars(newStars);
    };

    const generateLeaves = () => {
      const newLeaves: Leaf[] = [];
      const leafCount = 25;

      for (let i = 0; i < leafCount; i++) {
        newLeaves.push({
          id: i,
          x: Math.random() * 100,
          y: -10 - Math.random() * 20,
          rotation: Math.random() * 360,
          delay: Math.random() * 5,
          duration: 8 + Math.random() * 4,
          type: ['maple', 'oak', 'birch'][Math.floor(Math.random() * 3)] as 'maple' | 'oak' | 'birch'
        });
      }

      setLeaves(newLeaves);
    };

    generateStars();
    generateLeaves();
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Anime night sky gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950 via-purple-900 to-slate-900" />
      
      {/* Tree silhouettes */}
      <div className="absolute bottom-0 w-full h-64 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute bottom-0 -left-10 w-32 h-80 bg-black/40 rounded-t-full transform -skew-x-12" />
      <div className="absolute bottom-0 right-10 w-40 h-72 bg-black/40 rounded-t-full transform skew-x-6" />
      <div className="absolute bottom-0 left-1/3 w-24 h-60 bg-black/30 rounded-t-full" />
      
      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className={`star star-${star.size} animate-twinkle`}
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            animationDelay: `${star.delay}s`
          }}
        />
      ))}
      
      {/* Falling Leaves */}
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className={`leaf leaf-${leaf.type} animate-fall`}
          style={{
            left: `${leaf.x}%`,
            top: `${leaf.y}%`,
            transform: `rotate(${leaf.rotation}deg)`,
            animationDelay: `${leaf.delay}s`,
            animationDuration: `${leaf.duration}s`
          }}
        />
      ))}
      
      {/* Moon */}
      <div className="absolute top-20 right-20 w-20 h-20 bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-full shadow-lg shadow-yellow-200/20" />
    </div>
  );
};

export default StarField;
