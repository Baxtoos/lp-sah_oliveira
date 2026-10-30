import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryItems } from '../data/content';
import { GallerySpan } from '../types';
import { ZoomInIcon } from './icons/ZoomInIcon';

const spanClasses: Record<GallerySpan, string> = {
  tall: 'row-span-2',
  wide: 'col-span-2',
  normal: '',
};

export const Results: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const closeModal = useCallback(() => setSelectedIdx(null), []);

  const prevImage = useCallback(() => {
    setSelectedIdx((prev) =>
      prev === null ? null : (prev - 1 + galleryItems.length) % galleryItems.length
    );
  }, []);

  const nextImage = useCallback(() => {
    setSelectedIdx((prev) => (prev === null ? null : (prev + 1) % galleryItems.length));
  }, []);

  useEffect(() => {
    if (selectedIdx === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedIdx, closeModal, prevImage, nextImage]);

  return (
    <section id="resultados" className="relative py-24 lg:py-32 bg-purple-deep overflow-hidden">
      <div className="absolute top-10 right-1/4 w-72 h-72 rounded-full bg-purple-electric/10 blur-[120px]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-electric/40 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold tracking-[0.2em] text-purple-electric uppercase">
            Resultados
          </span>
          <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight text-white text-balance">
            CADA DETALHE FAZ A DIFERENÇA.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-lilac/70 leading-relaxed">
            Conheça alguns dos trabalhos realizados no Studio Sah Oliveira.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3 md:gap-4">
          {galleryItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedIdx(idx)}
              className={`group relative overflow-hidden rounded-xl border border-purple-electric/15 hover:border-purple-electric/40 transition-all duration-500 ${
                spanClasses[item.span] ?? ''
              }`}
              aria-label={`Ampliar imagem: ${item.alt}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-purple-electric/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <ZoomInIcon size={14} className="text-white" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedIdx !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 backdrop-blur-sm animate-fade-in p-4"
          onClick={closeModal}
        >
          <button
            className="absolute top-6 right-6 text-white/80 hover:text-white p-2 z-10"
            onClick={closeModal}
            aria-label="Fechar"
          >
            <X size={28} />
          </button>
          <button
            className="absolute left-4 sm:left-8 text-white/60 hover:text-white p-2 z-10"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            aria-label="Imagem anterior"
          >
            <ChevronLeft size={36} />
          </button>
          <figure
            className="relative max-w-4xl max-h-[85vh] animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryItems[selectedIdx].src}
              alt={galleryItems[selectedIdx].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg border border-purple-electric/30"
            />
            <figcaption className="mt-3 text-center text-sm text-lilac/70">
              {galleryItems[selectedIdx].alt}
            </figcaption>
          </figure>
          <button
            className="absolute right-4 sm:right-8 text-white/60 hover:text-white p-2 z-10"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            aria-label="Próxima imagem"
          >
            <ChevronRight size={36} />
          </button>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-lilac/50">
            {selectedIdx + 1} / {galleryItems.length}
          </div>
        </div>
      )}
    </section>
  );
};

