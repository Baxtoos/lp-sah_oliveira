import React from 'react';
import { ArrowRight, Eye } from 'lucide-react';
import { getWhatsAppLink } from '../data/content';
import { SparkleIcon } from './icons/SparkleIcon';
import heroImg from '../assets/sah-oliveira-hero.jpg';

export const Hero: React.FC = () => {
  const scrollToServices = () => {
    document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-ink pt-24 pb-16"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-dark via-ink to-ink" />
      <div className="absolute inset-0 bg-purple-glow opacity-60" />
      <div className="absolute top-1/3 -left-20 w-96 h-96 rounded-full bg-purple-electric/10 blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-purple-deep/30 blur-[100px]" />

      <svg
        className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
        viewBox="0 0 1440 900"
        fill="none"
        preserveAspectRatio="none"
      >
        <line x1="0" y1="200" x2="1440" y2="200" stroke="#7028D8" strokeWidth="0.5" />
        <line x1="0" y1="700" x2="1440" y2="700" stroke="#7028D8" strokeWidth="0.5" />
        <line x1="720" y1="0" x2="720" y2="900" stroke="#7028D8" strokeWidth="0.5" />
        <circle cx="720" cy="450" r="300" stroke="#7028D8" strokeWidth="0.5" />
      </svg>

      <div className="relative z-10 mx-auto max-w-7xl px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-purple-electric/40 bg-purple-deep/30 px-4 py-1.5 text-xs font-medium tracking-[0.15em] text-lilac uppercase">
              Studio Sah Oliveira • Salto, SP
            </span>
            <h1 className="mt-6 font-display font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] text-white text-balance">
              SUA BELEZA.{' '}
              <span className="text-purple-electric">SUA ESSÊNCIA.</span>{' '}
              SEU MOMENTO.
            </h1>
            <p className="mt-6 max-w-md text-base sm:text-lg text-lilac/80 leading-relaxed">
              Cuidados com a pele e o olhar que valorizam sua beleza e fazem você se sentir ainda mais confiante.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-purple-electric px-8 py-4 text-base font-semibold text-white hover:glow-purple-strong hover:scale-[1.02] transition-all duration-300"
              >
                Quero agendar
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <button
                onClick={scrollToServices}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-lilac/30 px-8 py-4 text-base font-semibold text-white hover:bg-white/5 hover:border-lilac/50 transition-all duration-300"
              >
                Conhecer os serviços
              </button>
            </div>
            <p className="mt-8 text-sm text-lilac/50 tracking-wide flex items-center gap-2">
              <Eye size={14} className="text-purple-electric" />
              Estética facial • Extensão de cílios
            </p>
          </div>

          <div className="relative animate-scale-in">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-purple-electric/20 glow-purple">
              <img
                src={heroImg}
                alt="Sah Oliveira — Studio Sah Oliveira"
                className="w-full h-full object-cover object-center"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-4 -left-4 hidden sm:flex items-center gap-3 rounded-2xl bg-ink/90 backdrop-blur-sm border border-purple-electric/30 px-5 py-4 animate-float-slow">
              <div className="w-10 h-10 rounded-full bg-purple-electric/20 flex items-center justify-center">
                <SparkleIcon size={20} className="text-purple-electric" />
              </div>
              <div>
                <p className="text-xs text-lilac/60 uppercase tracking-wider">Estúdio</p>
                <p className="text-sm font-semibold text-white">Sah Oliveira</p>
              </div>
            </div>

            <div className="absolute -top-3 -right-3 w-24 h-24 border-t-2 border-r-2 border-purple-electric/40 rounded-tr-2xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

