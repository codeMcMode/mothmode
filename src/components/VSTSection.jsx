import React, { useState, useEffect } from 'react';

const uiImages = [
  { src: '/mixmemora_ui_1.png', alt: 'MixMemora plugin open in Ableton Live showing mix bus notes' },
  { src: '/mixmemora_ui_2.png', alt: 'MixMemora plugin open in FL Studio showing a task with audio attachment' },
  { src: '/mixmemora_ui_3.png', alt: 'MixMemora plugin on a MacBook showing client feedback notes' },
  { src: '/mixmemora_ui_4.png', alt: 'MixMemora task editor with due dates and priorities' },
  { src: '/mixmemora_ui_5.png', alt: 'MixMemora notes board with cloud sync in Logic Pro' },
];

const VSTSection = () => {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((current) => (current + 1) % uiImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/30 text-xs text-green-400 w-max mb-6">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Now live
              </div>
              <h3 className="sr-only">MixMemora</h3>
              <p className="text-moth-muted text-lg leading-relaxed mb-8">
                MixMemora is a note, reference and memory plugin for music producers. It keeps track ideas, feedback, creative decisions, audio references and production notes inside the creative workflow. Free to download, no account required.
              </p>
              
              <ul className="space-y-4 mb-10">
                {['Track notes', 'Audio references', 'Creative tags', 'Feedback workflows', 'Cloud sync and sharing'].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-moth-muted">
                    <svg className="w-5 h-5 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="https://mixmemora.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-gray-200 transition-colors"
                >
                  Download Free
                </a>
                <div className="flex flex-wrap gap-4 text-sm text-moth-muted">
                  <span className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-md">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-13.051-1.801"/></svg>
                    Windows
                  </span>
                  <span className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-md">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                    macOS
                  </span>
                </div>
              </div>
            </div>
            
            <div className="bg-black/40 p-8 md:p-12 flex items-center justify-center relative min-h-[300px]">
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent pointer-events-none"></div>
              <div className="w-full max-w-lg relative z-10">
                <div className="relative aspect-[1024/626]">
                  {uiImages.map((image, i) => (
                    <img
                      key={image.src}
                      src={image.src}
                      alt={image.alt}
                      className={`absolute inset-0 w-full h-full object-cover rounded-xl border border-white/10 shadow-2xl hover:border-white/20 transition-opacity duration-700 ${i === activeImage ? 'opacity-100' : 'opacity-0'}`}
                    />
                  ))}
                </div>
                <div className="flex justify-center gap-2 mt-5">
                  {uiImages.map((image, i) => (
                    <button
                      key={image.src}
                      onClick={() => setActiveImage(i)}
                      aria-label={`Show UI preview ${i + 1}`}
                      className={`w-2 h-2 rounded-full transition-colors ${i === activeImage ? 'bg-white/80' : 'bg-white/20 hover:bg-white/40'}`}
                    />
                  ))}
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
