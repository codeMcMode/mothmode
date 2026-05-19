import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0c]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <img src="/mothmode_logo.png" alt="Moth Mode Logo" className="h-10 w-auto" />
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm text-moth-muted hover:text-white transition-colors">Home</a>
          <a href="#vst-plugins" className="text-sm text-moth-muted hover:text-white transition-colors">VST Plugins</a>
          <a href="#cloud-apps" className="text-sm text-moth-muted hover:text-white transition-colors">Cloud Apps</a>
          <a href="#about" className="text-sm text-moth-muted hover:text-white transition-colors">About</a>
          <a href="#contact" className="text-sm text-moth-muted hover:text-white transition-colors">Contact</a>
        </nav>

        <a href="#software" className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all">
          Explore Software
        </a>
        
        {/* Mobile menu button could go here, keeping it simple for V1 */}
        <div className="md:hidden">
          <button className="text-moth-muted hover:text-white">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
