import React from 'react';
import { Instagram, MapPin, MessageCircle } from 'lucide-react';
import { siteConfig, getWhatsAppLink } from '../data/content';

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-ink border-t border-purple-electric/20 pt-16 pb-8">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-electric/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8 pb-12 border-b border-purple-electric/15">
          <div>
            <p className="font-display font-bold text-lg text-white tracking-wide">
              {siteConfig.name}
            </p>
            <p className="mt-1 text-xs text-lilac/60 tracking-[0.2em] uppercase">
              {siteConfig.tagline}
            </p>
            <p className="mt-4 flex items-center gap-2 text-sm text-lilac/70">
              <MapPin size={15} className="text-purple-electric" />
              {siteConfig.location}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold text-purple-electric uppercase tracking-[0.15em] mb-4">
              Navegação
            </p>
            <ul className="space-y-2.5">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => scrollTo(item.href)}
                    className="text-sm text-lilac/70 hover:text-white transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold text-purple-electric uppercase tracking-[0.15em] mb-4">
              Contato
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={siteConfig.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-lilac/70 hover:text-white transition-colors w-fit"
              >
                <Instagram size={18} className="text-purple-electric" />
                {siteConfig.instagram.handle}
              </a>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-purple-electric px-5 py-2.5 text-sm font-semibold text-white hover:glow-purple transition-all w-fit"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-lilac/50">
            © {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.
          </p>
          <p className="text-xs text-lilac/40">{siteConfig.services}</p>
        </div>
      </div>
    </footer>
  );
};

