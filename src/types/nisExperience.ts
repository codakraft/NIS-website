/**
 * TypeScript interfaces for NIS Experience section components
 */

export interface ExperienceCardData {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  imageAlt: string;
}

export interface ExperienceCardProps extends ExperienceCardData {
  className?: string;
  onClick?: () => void;
}

export interface NISExperienceSectionProps {
  cards?: ExperienceCardData[];
  className?: string;
  onCardClick?: (cardId: string) => void;
}

export interface NISExperienceHeaderProps {
  label: string;
  title: string;
  className?: string;
}

// Default experience data
export const defaultExperienceCards: ExperienceCardData[] = [
  {
    id: 'academics',
    title: 'Academics',
    subtitle: 'Thinking Deeply, Dreaming Big',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/flicker-rave.appspot.com/o/academics.jpg?alt=media&token=your-token',
    imageAlt: 'Students studying in classroom'
  },
  {
    id: 'clubs-activities',
    title: 'Clubs & Activities',
    subtitle: 'Play. Perform. Pursue.',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/flicker-rave.appspot.com/o/clubs-activities.jpg?alt=media&token=your-token',
    imageAlt: 'Students in sports and activities'
  },
  {
    id: 'faith-character',
    title: 'Faith & Character',
    subtitle: 'Grow with Grace',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/flicker-rave.appspot.com/o/faith-character.jpg?alt=media&token=your-token',
    imageAlt: 'Students in assembly gathering'
  },
  {
    id: 'student-voice',
    title: 'Student Voice',
    subtitle: 'When Children Speak, We Listen',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/flicker-rave.appspot.com/o/student-voice.jpg?alt=media&token=your-token',
    imageAlt: 'Individual student portrait'
  }
];
