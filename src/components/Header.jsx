import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0c]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src="/mothmode_logo.png" alt="Moth Mode Logo" className="h-10 w-auto" />
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm text-moth-muted hover:text-white transition-colors">Home</Link>
          <a href="#vst-plugins" className="text-sm text-moth-muted hover:text-white transition-colors">VST Plugins</a>
          <a href="#cloud-apps" className="text-sm text-moth-muted hover:text-white transition-colors">Cloud Apps</a>
          <a href="#about" className="text-sm text-moth-muted hover:text-white transition-colors">About</a>
          <a href="#contact" className="text-sm text-moth-muted hover:text-white transition-colors">Contact</a>
        </nav>

        <a href="#software" className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all">
          Explore Software
        </a>
        
        <div className="md:hidden">
          <button 
            className="text-moth-muted hover:text-white p-2 -mr-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-[#0a0a0c] border-b border-white/5 p-6 shadow-2xl flex flex-col gap-6">
          <nav className="flex flex-col gap-4">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-base text-moth-muted hover:text-white transition-colors block py-2">Home</Link>
            <a href="#vst-plugins" onClick={() => setMobileMenuOpen(false)} className="text-base text-moth-muted hover:text-white transition-colors block py-2">VST Plugins</a>
            <a href="#cloud-apps" onClick={() => setMobileMenuOpen(false)} className="text-base text-moth-muted hover:text-white transition-colors block py-2">Cloud Apps</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-base text-moth-muted hover:text-white transition-colors block py-2">About</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-base text-moth-muted hover:text-white transition-colors block py-2">Contact</a>
          </nav>
          <a href="#software" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-center px-5 py-3 text-sm font-medium text-white bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all text-center">
            Explore Software
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
