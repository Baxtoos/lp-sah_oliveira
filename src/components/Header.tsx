import React, { useState, useEffect } from 'react';
import { CalendarHeart, Menu, X } from 'lucide-react';
import { siteConfig, getWhatsAppLink } from '../data/content';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ink/95 backdrop-blur-md border-b border-purple-deep/40 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        <button
          onClick={() => scrollTo('inicio')}
          className="text-left group"
          aria-label="Ir para o início"
        >
          <span className="block font-display font-bold text-base sm:text-lg tracking-wide text-white leading-tight">
            STUDIO SAH OLIVEIRA
          </span>
          <span className="block text-[10px] sm:text-xs text-lilac/70 tracking-[0.2em] uppercase">
            {siteConfig.tagline}
          </span>
        </button>

        <nav className="hidden lg:flex items-center gap-8">
          {siteConfig.nav.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className="text-sm font-medium text-lilac/80 hover:text-white transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-purple-electric group-hover:w-full transition-all duration-300" />
            </button>
          ))}
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-purple-electric px-6 py-2.5 text-sm font-semibold text-white hover:bg-purple-electric/90 hover:glow-purple transition-all duration-300"
          >
            <CalendarHeart size={16} />
            Agendar horário
          </a>
        </nav>

        <button
          className="lg:hidden text-white p-1"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-ink/98 backdrop-blur-lg border-b border-purple-deep/40 animate-fade-in">
          <nav className="flex flex-col px-6 py-6 gap-1">
            {siteConfig.nav.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className="text-left py-3 text-base font-medium text-lilac/90 hover:text-purple-electric transition-colors border-b border-white/5"
              >
                {item.label}
              </button>
            ))}
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-purple-electric px-6 py-3 text-base font-semibold text-white"
            >
              <CalendarHeart size={18} />
              Agendar horário
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

