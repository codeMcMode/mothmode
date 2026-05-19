import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="py-16 px-6 relative border-t border-white/10 mt-12 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <img src="/mothmode_logo.png" alt="Moth Mode" className="h-8 w-auto mb-6 opacity-60" />
            <p className="text-moth-muted max-w-sm mb-6">
              For enquiries, partnerships or early access, contact Moth Mode.
            </p>
            <a href="mailto:hello@mothmode.net" className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors group">
              <svg className="w-5 h-5 text-white/40 group-hover:text-white/80 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              hello@mothmode.net
            </a>
          </div>
          
          <div className="flex flex-col md:items-end justify-end">
            <a href="https://mothmode.net" className="text-moth-muted hover:text-white transition-colors mb-2">mothmode.net</a>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-moth-muted">
            © {new Date().getFullYear()} Moth Mode. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-moth-muted">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
