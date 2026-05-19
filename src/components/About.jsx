import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-white/[0.02] border-y border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Built for focused creative software.</h2>
        <div className="w-16 h-1 bg-white/20 mx-auto mb-8 rounded-full"></div>
        <p className="text-xl md:text-2xl text-moth-muted font-light leading-relaxed">
          Moth Mode is a software company creating tools for modern creators. The goal is to build small, useful, polished applications that solve real workflow problems — starting with music production, plugins and creator-focused cloud tools.
        </p>
      </div>
    </section>
  );
};

export default About;
