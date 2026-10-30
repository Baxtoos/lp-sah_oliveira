import React from 'react';
import { Instagram, MapPin, Eye } from 'lucide-react';
import { siteConfig } from '../data/content';

export const InstagramSection: React.FC = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-ink overflow-hidden">
      <div className="absolute top-1/3 right-0 w-72 h-72 rounded-full bg-purple-electric/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <span className="text-xs font-semibold tracking-[0.2em] text-purple-electric uppercase">
          Instagram
        </span>
        <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight text-white text-balance">
          ACOMPANHE O STUDIO.
        </h2>
        <p className="mt-5 text-base sm:text-lg text-lilac/70 leading-relaxed max-w-xl mx-auto">
          Confira mais trabalhos, inspirações e novidades no Instagram.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-electric/25 bg-purple-dark/40 px-5 py-2.5 text-sm text-lilac/90">
            <Instagram size={16} className="text-purple-electric" />
            {siteConfig.instagram.handle}
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-electric/25 bg-purple-dark/40 px-5 py-2.5 text-sm text-lilac/90">
            <MapPin size={16} className="text-purple-electric" />
            {siteConfig.location}
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-electric/25 bg-purple-dark/40 px-5 py-2.5 text-sm text-lilac/90">
            <Eye size={16} className="text-purple-electric" />
            Estética facial e extensão de cílios
          </span>
        </div>

        <a
          href={siteConfig.instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-10 inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-purple-electric to-purple-deep px-9 py-4 text-base font-semibold text-white hover:glow-purple-strong hover:scale-[1.02] transition-all duration-300"
        >
          <Instagram size={20} />
          Visitar Instagram
        </a>
      </div>
    </section>
  );
};

