// TypeScript interfaces for the Norwegian International School Landing Page

export interface Statistic {
  number: string;
  label: string;
  color: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  position?: string;
}

export interface CategoryCard {
  id: number;
  title: string;
  description: string;
  backgroundImage: string;
  category: 'academics' | 'culture' | 'campus' | 'community';
}

export interface NavigationItem {
  label: string;
  href: string;
  color: 'red' | 'orange' | 'blue';
}

export interface SocialMediaLink {
  platform: string;
  url: string;
  icon: string;
}

export interface FooterSection {
  title: string;
  items: string[];
}
