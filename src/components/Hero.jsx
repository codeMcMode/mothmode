import React from 'react';

const Hero = () => {
  return (
    <section className="relative pt-40 pb-20 px-6 flex flex-col items-center text-center min-h-[85vh] justify-center">
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-3xl"></div>
      </div>
      
      <div className="mb-8">
        <img src="/mothmode_logo.png" alt="Moth Mode" className="h-20 w-auto opacity-80 mx-auto" />
      </div>
      
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-moth-muted mb-8">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
        mothmode.net
      </div>
      
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 max-w-4xl bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
        Software for creators in motion.
      </h1>
      
      <p className="text-lg md:text-xl text-moth-muted max-w-2xl mb-10 font-light leading-relaxed">
        Moth Mode builds focused tools for music producers, DJs, creators and modern digital workflows.
      </p>
      
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <a href="#vst-plugins" className="px-8 py-3.5 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition-colors w-full sm:w-auto">
          View VST Plugins
        </a>
        <a href="#contact" className="px-8 py-3.5 rounded-full bg-transparent border border-white/20 text-white font-medium hover:bg-white/5 transition-colors w-full sm:w-auto">
          Contact
        </a>
      </div>
    </section>
  );
};

export default Hero;
