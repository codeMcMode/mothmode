import React from 'react';
import ProductCard from './ProductCard';

const SoftwareSection = () => {
  return (
    <section id="software" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Software by Moth Mode</h2>
          <p className="text-moth-muted text-lg max-w-2xl leading-relaxed">
            Moth Mode is the parent company for multiple upcoming creative products. Our ecosystem is designed to solve real problems for digital creators, starting with music production.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <ProductCard 
            category="VST Plugin / Cloud Companion"
            title="MixMemora"
            logo="/mixmemora_logo.png"
            logoAlt="MixMemora logo"
            description="A creative memory layer for producers: store track notes, references, audio ideas and feedback around your music projects. Free VST3 for Windows and macOS."
            status="Now live"
            primaryButton="Download Free"
            primaryButtonLink="https://mixmemora.com"
          />
          <ProductCard 
            category="Production Utilities"
            title="Future Tools"
            description="Smaller focused tools for music production, workflow, collaboration and creative organisation."
            status="Planned"
            primaryButton="Follow Updates"
          />
        </div>
      </div>
    </section>
  );
};

export default SoftwareSection;
