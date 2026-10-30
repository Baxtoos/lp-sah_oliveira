import React, { useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Sparkles } from 'lucide-react';

export const About: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(() => {});
      }
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section id="sobre" className="relative py-24 lg:py-32 overflow-hidden bg-purple-deep">
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-purple-electric/15 blur-[120px]" />
      <div className="absolute bottom-10 left-0 w-60 h-60 rounded-full bg-purple-dark/40 blur-[100px]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-electric/50 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Coluna de Mídia: Vídeo Institucional do Studio */}
          <div className="relative order-2 lg:order-1">
            <div
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden border border-purple-electric/30 bg-ink glow-purple cursor-pointer shadow-2xl"
              onClick={togglePlay}
            >
              <video
                ref={videoRef}
                src="/videos/studio-video.mp4"
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />

              {/* Degradê superior e inferior para contraste dos controles */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-ink/40 pointer-events-none" />

              {/* Badge superior: Studio Sah Oliveira */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2 rounded-full bg-ink/80 backdrop-blur-md border border-purple-electric/30 px-3.5 py-1.5 pointer-events-none">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-electric opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-electric" />
                </span>
                <span className="text-[11px] font-medium tracking-wider text-lilac uppercase">
                  Studio Sah Oliveira
                </span>
              </div>

              {/* Botão central de Play quando pausado */}
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center z-10 bg-ink/40 backdrop-blur-sm transition-all duration-300">
                  <div className="w-16 h-16 rounded-full bg-purple-electric text-white flex items-center justify-center shadow-lg glow-purple-strong transform scale-100 hover:scale-110 transition-transform">
                    <Play size={28} className="ml-1" fill="currentColor" />
                  </div>
                </div>
              )}

              {/* Barra de Controles Inferior */}
              <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    togglePlay();
                  }}
                  className="flex items-center gap-2 rounded-full bg-ink/80 hover:bg-ink backdrop-blur-md border border-purple-electric/30 px-4 py-2 text-xs font-semibold text-white transition-all hover:border-purple-electric"
                  aria-label={isPlaying ? 'Pausar vídeo' : 'Reproduzir vídeo'}
                >
                  {isPlaying ? <Pause size={14} /> : <Play size={14} fill="currentColor" />}
                  <span>{isPlaying ? 'Pausar' : 'Reproduzir'}</span>
                </button>

                <button
                  type="button"
                  onClick={toggleMute}
                  className="flex items-center gap-2 rounded-full bg-ink/80 hover:bg-ink backdrop-blur-md border border-purple-electric/30 px-4 py-2 text-xs font-semibold text-white transition-all hover:border-purple-electric"
                  aria-label={isMuted ? 'Ativar som' : 'Desativar som'}
                >
                  {isMuted ? (
                    <>
                      <VolumeX size={14} className="text-lilac/70" />
                      <span>Ativar som</span>
                    </>
                  ) : (
                    <>
                      <Volume2 size={14} className="text-purple-electric" />
                      <span>Com som</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Elementos decorativos nos cantos */}
            <div className="absolute -bottom-4 -right-4 w-28 h-28 border-b-2 border-r-2 border-purple-electric/50 rounded-br-2xl pointer-events-none" />
            <div className="absolute -top-3 -left-3 w-20 h-20 border-t-2 border-l-2 border-purple-electric/30 rounded-tl-2xl pointer-events-none" />
          </div>

          {/* Coluna de Texto */}
          <div className="order-1 lg:order-2">
            <span className="text-xs font-semibold tracking-[0.2em] text-purple-electric uppercase flex items-center gap-2">
              <Sparkles size={14} />
              Sobre o estúdio
            </span>
            <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight text-white text-balance">
              BELEZA QUE RESPEITA{' '}
              <span className="text-purple-electric">SUA ESSÊNCIA.</span>
            </h2>
            <p className="mt-6 text-base sm:text-lg text-lilac/80 leading-relaxed max-w-lg">
              No Studio Sah Oliveira, cada atendimento é uma oportunidade de dedicar um tempo a você. O objetivo é oferecer cuidados de beleza com atenção aos detalhes, valorizando suas características e suas preferências.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {['Atendimento individual', 'Cuidado personalizado', 'Ambiente acolhedor'].map(
                (item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border border-purple-electric/30 bg-purple-dark/40 px-4 py-2 text-sm text-lilac/90"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-electric" />
                    {item}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
