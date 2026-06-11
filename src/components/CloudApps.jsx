import React from 'react';

const CloudApps = () => {
  return (
    <section id="cloud-apps" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Cloud apps for creative workflows</h2>
          <p className="text-moth-muted text-lg leading-relaxed mb-8">
            Moth Mode will also build companion cloud apps for sharing, feedback, collaboration and project memory. 
            We believe the future of production connects the local DAW to the web seamlessly.
          </p>
          <div className="glass-card p-6 border-l-2 border-l-white/40">
            <div className="flex items-center gap-3 mb-3">
              <img
                src="/mixmemora_logo.png"
                alt="MixMemora logo"
                className="h-8 w-auto object-contain"
              />
              <h4 className="text-white font-medium">MixMemora Cloud</h4>
            </div>
            <p className="text-moth-muted text-sm leading-relaxed">
              Planned as the first cloud companion app. It will sync with the MixMemora VST, allowing you to review your track notes, references, and feedback from anywhere.
            </p>
          </div>
        </div>
        
        <div className="lg:w-1/2 w-full">
          <div className="glass-card p-2 md:p-4 aspect-video rounded-xl relative overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
            
            {/* Abstract visual representation of a cloud interface */}
            <div className="w-full h-full border border-white/5 rounded-lg bg-[#0a0a0c] flex flex-col">
              <div className="h-10 border-b border-white/5 flex items-center px-4 gap-4">
                <div className="w-4 h-4 rounded-full bg-white/10"></div>
                <div className="w-24 h-3 bg-white/10 rounded"></div>
                <div className="ml-auto w-8 h-8 rounded-full bg-white/5"></div>
              </div>
              <div className="flex-1 flex p-4 gap-4">
                <div className="w-1/4 h-full hidden sm:flex flex-col gap-3">
                  <div className="w-full h-8 bg-white/5 rounded"></div>
                  <div className="w-full h-8 bg-white/5 rounded"></div>
                  <div className="w-full h-8 bg-white/5 rounded opacity-50"></div>
                </div>
                <div className="flex-1 flex flex-col gap-4">
                  <div className="w-full h-32 bg-white/5 rounded-lg"></div>
                  <div className="flex gap-4">
                    <div className="w-1/2 h-24 bg-white/5 rounded-lg"></div>
                    <div className="w-1/2 h-24 bg-white/5 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudApps;
