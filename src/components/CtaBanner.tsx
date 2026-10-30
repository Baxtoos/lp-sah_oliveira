import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../data/content';

export const CtaBanner: React.FC = () => {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-electric via-purple-deep to-purple-dark bg-[length:200%_200%] animate-gradient-shift" />
      <div className="absolute top-0 left-0 w-40 h-40 bg-ink/20 rounded-full blur-[60px]" />
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-ink/20 rounded-full blur-[80px]" />

      <svg
        className="absolute inset-0 w-full h-full opacity-15 pointer-events-none"
        viewBox="0 0 1440 400"
        fill="none"
        preserveAspectRatio="none"
      >
        <line x1="0" y1="100" x2="1440" y2="100" stroke="#0B0B0F" strokeWidth="1" />
        <line x1="0" y1="300" x2="1440" y2="300" stroke="#0B0B0F" strokeWidth="1" />
        <circle cx="720" cy="200" r="180" stroke="#0B0B0F" strokeWidth="1" />
      </svg>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight text-white text-balance">
          UM TEMPO PARA VOCÊ. UM CUIDADO QUE FAZ SENTIDO.
        </h2>
        <p className="mt-5 text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
          Descubra os serviços do Studio Sah Oliveira e encontre o atendimento ideal para valorizar sua beleza.
        </p>
        <a
          href={getWhatsAppLink('Olá, Sah! Gostaria de agendar um horário no Studio Sah Oliveira.')}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-8 inline-flex items-center justify-center gap-2.5 rounded-full bg-ink px-9 py-4 text-base font-semibold text-white hover:bg-ink/90 hover:scale-[1.02] transition-all duration-300 border border-white/10"
        >
          <MessageCircle size={20} />
          Agendar pelo WhatsApp
        </a>
      </div>
    </section>
  );
};

