import React from 'react';

const ProductCard = ({ category, title, description, status, logo, logoAlt, primaryButton, primaryButtonLink, secondaryButton }) => {
  return (
    <div className="glass-card p-8 flex flex-col h-full group">
      <div className="flex items-center justify-between mb-6">
        <span className="text-xs font-semibold uppercase tracking-wider text-moth-muted">{category}</span>
        <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/80">
          {status}
        </span>
      </div>

      {logo && (
        <img
          src={logo}
          alt={logoAlt || title}
          className="h-14 w-auto mb-5 object-contain object-left"
        />
      )}
      
      <h3 className={`font-bold text-white mb-4 ${logo ? 'sr-only' : 'text-2xl'}`}>{title}</h3>
      <p className="text-moth-muted leading-relaxed mb-8 flex-grow">
        {description}
      </p>
      
      <div className="flex items-center gap-3 mt-auto">
        {primaryButton && primaryButtonLink ? (
          <a href={primaryButtonLink} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-lg bg-white/10 text-white text-sm font-medium hover:bg-white/20 transition-colors inline-block">
            {primaryButton}
          </a>
        ) : primaryButton ? (
          <button className="px-5 py-2.5 rounded-lg bg-white/10 text-white text-sm font-medium hover:bg-white/20 transition-colors">
            {primaryButton}
          </button>
        ) : null}
        {secondaryButton && (
          <button className="px-5 py-2.5 rounded-lg bg-transparent text-moth-muted text-sm font-medium hover:text-white transition-colors">
            {secondaryButton}
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
