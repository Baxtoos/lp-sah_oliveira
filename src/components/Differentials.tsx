import React from 'react';
import { LucideIcon, Heart, Sparkles, Home as House, MessageCircle } from 'lucide-react';
import { differentials } from '../data/content';
import { DifferentialIcon } from '../types';

const iconMap: Record<DifferentialIcon, LucideIcon> = {
  Heart,
  Sparkles,
  Home: House,
  MessageCircle,
};

export const Differentials: React.FC = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-ink overflow-hidden">
      <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full bg-purple-electric/8 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold tracking-[0.2em] text-purple-electric uppercase">
            Diferenciais
          </span>
          <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight text-white text-balance">
            CUIDADO EM CADA DETALHE.
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {differentials.map((item) => {
            const Icon = iconMap[item.icon] ?? Heart;
            return (
              <div
                key={item.title}
                className="group rounded-2xl border border-purple-electric/15 bg-purple-dark/30 p-6 lg:p-8 hover:border-purple-electric/40 hover:bg-purple-dark/50 transition-all duration-500"
              >
                <div className="relative w-12 h-12 rounded-xl bg-purple-electric/15 flex items-center justify-center group-hover:bg-purple-electric/25 transition-colors duration-500">
                  <Icon size={22} className="text-white" />
                  <div className="absolute inset-0 rounded-xl border border-purple-electric/30" />
                </div>
                <h3 className="mt-5 font-display font-semibold text-lg text-white">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm text-lilac/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
