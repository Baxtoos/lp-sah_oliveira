import { SiteConfig, ServiceItem, GalleryItem, DifferentialItem, TimePeriod } from '../types';

export const siteConfig: SiteConfig = {
  name: 'Studio Sah Oliveira',
  tagline: 'Estética & Bem-estar',
  location: 'Salto — SP',
  services: 'Estética facial • Extensão de cílios',
  instagram: {
    handle: '@studio_sah_oliveira',
    url: 'https://www.instagram.com/studio_sah_oliveira/',
  },
  whatsappNumber: '5511999999999',
  nav: [
    { label: 'Início', href: 'inicio' },
    { label: 'Serviços', href: 'servicos' },
    { label: 'Resultados', href: 'resultados' },
    { label: 'Sobre', href: 'sobre' },
    { label: 'Agendamento', href: 'agendamento' },
  ],
};

export const getWhatsAppLink = (message?: string): string => {
  const base = `https://wa.me/${siteConfig.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};

export const services: ServiceItem[] = [
  {
    id: 'extensao-de-cilios',
    title: 'Extensão de cílios',
    description: 'Valorize seu olhar com um estilo que combina com suas preferências e personalidade.',
    image: 'https://images.pexels.com/photos/5128234/pexels-photo-5128234.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Aplicação de extensão de cílios',
  },
  {
    id: 'estetica-facial',
    title: 'Estética facial',
    description: 'Cuidados voltados à pele, com atendimento adequado às necessidades e aos objetivos de cada cliente.',
    image: 'https://images.pexels.com/photos/37229301/pexels-photo-37229301.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Tratamento de estética facial',
  },
];

export const galleryItems: GalleryItem[] = [
  {
    src: 'https://images.pexels.com/photos/5128234/pexels-photo-5128234.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Aplicação de extensão de cílios',
    span: 'tall',
  },
  {
    src: 'https://images.pexels.com/photos/37229298/pexels-photo-37229298.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Tratamento facial relaxante',
    span: 'normal',
  },
  {
    src: 'https://images.pexels.com/photos/5128235/pexels-photo-5128235.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Extensão de cílios — detalhe do procedimento',
    span: 'normal',
  },
  {
    src: 'https://images.pexels.com/photos/3762758/pexels-photo-3762758.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Pele valorizada após tratamento facial',
    span: 'wide',
  },
  {
    src: 'https://images.pexels.com/photos/5128268/pexels-photo-5128268.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Procedimento de cílios com precisão',
    span: 'tall',
  },
  {
    src: 'https://images.pexels.com/photos/37240340/pexels-photo-37240340.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Massagem facial no estúdio',
    span: 'normal',
  },
  {
    src: 'https://images.pexels.com/photos/5128222/pexels-photo-5128222.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Aplicação de cílios no estúdio',
    span: 'normal',
  },
  {
    src: 'https://images.pexels.com/photos/3762765/pexels-photo-3762765.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Resultado de pele tratada',
    span: 'wide',
  },
];

export const differentials: DifferentialItem[] = [
  {
    icon: 'Heart',
    title: 'Atendimento personalizado',
    description: 'Uma experiência pensada para considerar as preferências de cada cliente.',
  },
  {
    icon: 'Sparkles',
    title: 'Atenção aos detalhes',
    description: 'Cuidado com a apresentação e o acabamento de cada procedimento.',
  },
  {
    icon: 'Home',
    title: 'Ambiente com personalidade',
    description: 'Um espaço de beleza com identidade visual própria e atmosfera acolhedora.',
  },
  {
    icon: 'MessageCircle',
    title: 'Orientação profissional',
    description: 'Informações para ajudar você a entender os cuidados relacionados ao procedimento escolhido.',
  },
];

export const timePeriods: readonly TimePeriod[] = ['Manhã', 'Tarde', 'Noite'] as const;

