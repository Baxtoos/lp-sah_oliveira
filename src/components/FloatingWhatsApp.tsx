import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { getWhatsAppLink } from '../data/content';

export const FloatingWhatsApp: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => setTooltipVisible(true), 800);
      return () => clearTimeout(timer);
    }
    setTooltipVisible(false);
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-3">
      {tooltipVisible && (
        <div className="hidden sm:flex items-center gap-2 rounded-full bg-ink/90 backdrop-blur border border-purple-electric/30 px-4 py-2.5 animate-fade-in">
          <span className="text-sm text-white font-medium">Fale com a Sah</span>
          <button
            onClick={() => setTooltipVisible(false)}
            className="text-lilac/50 hover:text-white"
            aria-label="Fechar"
          >
            <X size={14} />
          </button>
        </div>
      )}
      <a
        href={getWhatsAppLink(
          'Olá, Sah! Encontrei o site do Studio Sah Oliveira e gostaria de mais informações.'
        )}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-purple-electric text-white hover:scale-110 transition-transform duration-300 glow-purple-strong"
        aria-label="Abrir conversa no WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-purple-electric animate-pulse-ring" />
        <MessageCircle size={26} className="relative z-10" />
      </a>
    </div>
  );
};

