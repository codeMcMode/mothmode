import React from 'react';

const VSTSection = () => {
  return (
    <section id="vst-plugins" className="py-24 px-6 bg-white/[0.02] border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">VST Plugins</h2>
          <p className="text-moth-muted text-lg max-w-2xl leading-relaxed">
            Our core focus is delivering powerful native audio plugins that integrate seamlessly into your DAW.
          </p>
        </div>

        <div className="glass-card overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <img
                src="/mixmemora_logo.png"
                alt="MixMemora logo"
                className="h-16 w-auto mb-6 object-contain object-left"
              />
              <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/80 w-max mb-6">
                In development
              </div>
              <h3 className="sr-only">MixMemora</h3>
              <p className="text-moth-muted text-lg leading-relaxed mb-8">
                MixMemora is a note, reference and memory plugin for music producers. It helps keep track ideas, feedback, creative decisions, audio references and production notes inside the creative workflow.
              </p>
              
              <ul className="space-y-4 mb-10">
                {['Track notes', 'Audio references', 'Creative tags', 'Feedback workflows', 'Cloud sharing planned'].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-moth-muted">
                    <svg className="w-5 h-5 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4 text-sm text-moth-muted">
                <span className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-md">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-13.051-1.801"/></svg>
                  Windows first
                </span>
                <span className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-md">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm1-13h-2v6h6v-2h-4V7z"/></svg>
                  Mac planned
                </span>
              </div>
            </div>
            
            <div className="bg-black/40 p-8 md:p-12 flex items-center justify-center relative min-h-[300px]">
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent pointer-events-none"></div>
              <img 
                src="/mixmemora_ui.jpg" 
                alt="MixMemora UI Preview" 
                className="w-full max-w-lg rounded-xl border border-white/10 shadow-2xl relative z-10 hover:border-white/20 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VSTSection;
