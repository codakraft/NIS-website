import { NavigationItem, Statistic, Testimonial, CategoryCard, FooterSection, SocialMediaLink } from '../types';

export const navigationData: NavigationItem[] = [
  { label: 'Full Experience', href: '#full-experience', color: 'red' },
  { label: 'Half a Day', href: '#half-day', color: 'orange' },
  { label: 'Apply', href: '#apply', color: 'red' }
];

export const mainNavigationData: NavigationItem[] = [
  { label: 'Home', href: '/', color: 'blue' },
  { label: 'About', href: '/about', color: 'red' },
  { label: 'Admissions', href: '/admission', color: 'orange' },
  { label: 'Contact', href: '#contact', color: 'blue' }
];

export const statisticsData: Statistic[] = [
  { number: '1,200+', label: 'Students', color: 'var(--accent-red)' },
  { number: '100+', label: 'Staff', color: 'var(--accent-red)' },
  { number: '95%', label: 'Success Rate', color: 'var(--accent-red)' }
];

export const testimonialsData: Testimonial[] = [
  {
    id: 1,
    quote: "The Norwegian International School has provided my child with an exceptional education that combines academic excellence with cultural diversity. The supportive environment and dedicated teachers have helped my child grow both academically and personally.",
    author: "Olamide Dare",
    position: "Parent"
  },
  {
    id: 2,
    quote: "As a graduate of NIS, I can confidently say that the education I received here prepared me well for university and beyond. The international curriculum and multicultural environment were invaluable.",
    author: "Sarah Johnson",
    position: "Alumni"
  },
  {
    id: 3,
    quote: "Working at NIS has been incredibly rewarding. The school's commitment to excellence and innovation in education creates an inspiring environment for both teachers and students.",
    author: "Dr. Michael Chen",
    position: "Faculty"
  }
];

export const categoryCardsData: CategoryCard[] = [
  {
    id: 1,
    title: 'Academics',
    description: 'World-class education with internationally recognized curricula that prepare students for global success.',
    backgroundImage: '/images/academics.jpg',
    category: 'academics'
  },
  {
    id: 2,
    title: 'Culture',
    description: 'Celebrating diversity through multicultural programs and international exchange opportunities.',
    backgroundImage: '/images/culture.jpg',
    category: 'culture'
  },
  {
    id: 3,
    title: 'Campus',
    description: 'State-of-the-art facilities designed to support learning, creativity, and personal development.',
    backgroundImage: '/images/campus.jpg',
    category: 'campus'
  },
  {
    id: 4,
    title: 'Culture',
    description: 'Rich traditions and customs from around the world, fostering global understanding and respect.',
    backgroundImage: '/images/culture2.jpg',
    category: 'culture'
  },
  {
    id: 5,
    title: 'Community',
    description: 'A supportive community where students, parents, and teachers work together towards common goals.',
    backgroundImage: '/images/community.jpg',
    category: 'community'
  },
  {
    id: 6,
    title: 'Campus',
    description: 'Modern learning spaces equipped with the latest technology and resources for 21st-century education.',
    backgroundImage: '/images/campus2.jpg',
    category: 'campus'
  }
];

export const footerSectionsData: FooterSection[] = [
  {
    title: 'Academics',
    items: ['Curriculum', 'Programs', 'Assessment']
  },
  {
    title: 'Admissions',
    items: ['Application Process', 'Requirements', 'Fees']
  }
];

export const socialLinksData: SocialMediaLink[] = [
  { platform: 'Facebook', url: 'https://facebook.com/norwegianschool', icon: 'facebook' },
  { platform: 'Instagram', url: 'https://instagram.com/norwegianschool', icon: 'instagram' },
  { platform: 'LinkedIn', url: 'https://linkedin.com/company/norwegianschool', icon: 'linkedin' },
  { platform: 'Twitter', url: 'https://twitter.com/norwegianschool', icon: 'twitter' }
];

export const contactData = {
  emails: [
    'admissions@norwegianschool.edu',
    'info@norwegianschool.edu',
    'support@norwegianschool.edu'
  ],
  address: "123 Education Lane, Oslo, Norway 0123"
};

export const contentData = {
  hero: {
    title: "Welcome to Norwegian Int'l School",
    currentSlide: 2,
    totalSlides: 3
  },
  about: {
    title: "What Sets Us Apart",
    subtitle: "ABOUT NIS",
    description: "With over 50 years of experience in international education, the Norwegian International School has established itself as a leading institution that combines Norwegian educational excellence with global perspectives. Our diverse community of students and teachers from around the world creates an enriching environment where academic achievement meets cultural understanding.",
    images: {
      classroom: '/images/classroom.jpg',
      teaching: '/images/teaching.jpg'
    }
  },
  statistics: {
    title: "Numbers Don't Lie",
    libraryImage: "/images/library.jpg"
  },
  testimonials: {
    title: "Hear what they say",
    subtitle: "TESTIMONIALS",
    currentTestimonial: 0
  }
};
