// TypeScript interfaces for Norwegian School Landing Page

export interface NorwegianSchoolHeaderProps {
  onMenuClick?: () => void;
  onNISExperienceClick?: () => void;
  onTakeATourClick?: () => void;
  onApplyClick?: () => void;
}

export interface ActionButtonProps {
  label: string;
  onClick?: () => void;
  variant?: 'nisExperience' | 'takeTour' | 'apply';
  className?: string;
}

export interface LogoProps {
  showLocation?: boolean;
  size?: 'small' | 'medium' | 'large';
}
