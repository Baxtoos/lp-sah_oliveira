import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { services, getWhatsAppLink } from '../data/content';

export const Services: React.FC = () => {
  return (
    <section id="servicos" className="relative py-24 lg:py-32 bg-ink overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-purple-electric/8 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold tracking-[0.2em] text-purple-electric uppercase">
            Serviços
          </span>
          <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight text-white text-balance">
            ENCONTRE SEU PRÓXIMO CUIDADO.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-lilac/70 leading-relaxed">
            Conheça os serviços do Studio Sah Oliveira e escolha o que faz sentido para você.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service) => (
            <article
              key={service.id}
              className="group relative rounded-2xl overflow-hidden border border-purple-electric/20 bg-purple-dark/60 hover:border-purple-electric/50 transition-all duration-500"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-dark via-purple-dark/30 to-transparent" />
              </div>

              <div className="p-6 lg:p-8">
                <h3 className="font-display font-semibold text-xl lg:text-2xl text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm lg:text-base text-lilac/75 leading-relaxed">
                  {service.description}
                </p>
                <a
                  href={getWhatsAppLink(
                    `Olá, Sah! Tenho interesse em ${service.title}. Poderia me passar mais informações?`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-purple-electric hover:text-white transition-colors group/btn"
                >
                  Consultar e agendar
                  <ArrowUpRight
                    size={16}
                    className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
                  />
                </a>
              </div>

              <div className="absolute top-4 right-4 w-12 h-12 border-t border-r border-purple-electric/40 rounded-tr-xl pointer-events-none" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

