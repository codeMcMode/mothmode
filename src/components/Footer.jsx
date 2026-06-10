import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY, companyRegistrationLine } from '../constants/company';

const Footer = () => {
  const addressLines = [
    COMPANY.registeredOffice.line1,
    COMPANY.registeredOffice.line2,
    COMPANY.registeredOffice.line3,
    COMPANY.registeredOffice.line4,
  ];

  return (
    <footer id="contact" className="py-16 px-6 relative border-t border-white/10 mt-12 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <img src="/mothmode_logo.png" alt="Moth Mode" className="h-8 w-auto mb-6 opacity-60" />
            <p className="text-moth-muted max-w-sm mb-6">
              For enquiries, partnerships or early access, contact Moth Mode.
            </p>
            <a href={`mailto:${COMPANY.contactEmail}`} className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors group">
              <svg className="w-5 h-5 text-white/40 group-hover:text-white/80 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {COMPANY.contactEmail}
            </a>
          </div>

          <div className="flex flex-col md:items-end justify-end">
            <a href={COMPANY.website} className="text-moth-muted hover:text-white transition-colors mb-2">mothmode.net</a>
            <a href={COMPANY.parentSite} className="text-sm text-moth-muted hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
              designmania.co.uk
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 space-y-4">
          <p className="text-sm text-moth-muted leading-relaxed">
            {COMPANY.tradingName} is a trading name of {COMPANY.legalName}.
          </p>
          <address className="not-italic text-sm text-moth-muted leading-relaxed">
            {addressLines.map((line) => (
              <span key={line} className="block">{line}</span>
            ))}
            <span className="block">{COMPANY.registeredOffice.country}</span>
          </address>
          <p className="text-sm text-moth-muted">{companyRegistrationLine}</p>

          <div className="pt-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <p className="text-sm text-moth-muted">
              © {new Date().getFullYear()} {COMPANY.legalName}. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-moth-muted">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
