
import React from 'react';
import MinecraftBackground from '@/components/MinecraftBackground';
import MinecraftNavigation from '@/components/MinecraftNavigation';
import MinecraftHeroSection from '@/components/MinecraftHeroSection';
import MinecraftAboutSection from '@/components/MinecraftAboutSection';
import MinecraftSkillsSection from '@/components/MinecraftSkillsSection';
import MinecraftProjectsSection from '@/components/MinecraftProjectsSection';
import MinecraftContactSection from '@/components/MinecraftContactSection';
import MinecraftFooter from '@/components/MinecraftFooter';

const Index = () => {
  return (
    <div className="min-h-screen bg-minecraft-dark relative overflow-x-hidden font-pixel">
      <MinecraftBackground />
      <MinecraftNavigation />
      
      <main className="relative z-10">
        <MinecraftHeroSection />
        <MinecraftAboutSection />
        <MinecraftSkillsSection />
        <MinecraftProjectsSection />
        <MinecraftContactSection />
      </main>
      
      <MinecraftFooter />
    </div>
  );
};

export default Index;
