export interface NavItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  location: string;
  services: string;
  instagram: {
    handle: string;
    url: string;
  };
  whatsappNumber: string;
  nav: NavItem[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

export type GallerySpan = 'tall' | 'wide' | 'normal';

export interface GalleryItem {
  src: string;
  alt: string;
  span: GallerySpan;
}

export type DifferentialIcon = 'Heart' | 'Sparkles' | 'Home' | 'MessageCircle';

export interface DifferentialItem {
  icon: DifferentialIcon;
  title: string;
  description: string;
}

export type TimePeriod = 'Manhã' | 'Tarde' | 'Noite';

export interface BookingFormData {
  nome: string;
  servico: string;
  data: string;
  periodo: TimePeriod | '';
  observacoes: string;
}
