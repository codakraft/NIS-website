export interface FaqItem {
  id: string;
  question: string;
  answer?: string;
  href?: string;
}

export interface FaqSectionProps {
  eyebrow?: string;
  title: string | React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  items: FaqItem[];
  defaultOpenId?: string;
  className?: string;
}
