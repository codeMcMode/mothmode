import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const LegalLayout = ({ title, lastUpdated, children }) => {
  return (
    <div className="bg-[#0a0a0c] min-h-screen text-[#e2e2e5] font-sans selection:bg-white/20 selection:text-white">
      <header className="border-b border-white/10 bg-[#0a0a0c]/80 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src="/mothmode_logo.png" alt="Moth Mode" className="h-10 w-auto" />
          </Link>
          <Link to="/" className="text-sm text-moth-muted hover:text-white transition-colors">
            Back to home
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">{title}</h1>
        {lastUpdated && (
          <p className="text-sm text-moth-muted mb-10">Last updated: {lastUpdated}</p>
        )}
        <div className="legal-content space-y-8 text-moth-muted leading-relaxed">
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LegalLayout;
