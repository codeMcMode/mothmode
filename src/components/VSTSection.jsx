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
              <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/80 w-max mb-6">
                In development
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">MixMemora</h3>
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
              {/* Placeholder for the plugin UI */}
              <div className="w-full max-w-sm aspect-[4/3] rounded-lg border border-white/10 bg-moth-bg shadow-2xl flex flex-col overflow-hidden relative group">
                <div className="h-8 border-b border-white/10 bg-white/5 flex items-center px-4 justify-between">
                  <span className="text-[10px] uppercase tracking-widest text-moth-muted font-semibold">MixMemora VST</span>
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                  </div>
                </div>
                <div className="flex-1 p-6 flex flex-col gap-4">
                  <div className="h-4 w-1/3 bg-white/10 rounded"></div>
                  <div className="h-2 w-full bg-white/5 rounded mt-2"></div>
                  <div className="h-2 w-5/6 bg-white/5 rounded"></div>
                  <div className="h-2 w-4/6 bg-white/5 rounded"></div>
                  <div className="mt-auto flex gap-2">
                    <div className="h-8 w-16 bg-white/10 rounded"></div>
                    <div className="h-8 w-16 bg-white/5 rounded"></div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-4 py-2 bg-black/80 rounded-md text-sm border border-white/10">UI Preview</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VSTSection;
