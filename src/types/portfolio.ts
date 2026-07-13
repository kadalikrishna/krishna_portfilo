export type SocialLinks = {
  github?: string;
  instagram?: string;
  linkedin?: string;
  email?: string;
  phone?: string;
  website?: string;
};

export type Profile = {
  name: string;
  shortName: string;
  tagline: string;
  role: string;
  specialization: string;
  location: string;
  yearsOfExperience: string;
  aboutHeading: string;
  bio: string;
  avatarSvg: string;
  resumeUrl: string;
  resumeDownloadName: string;
  social: SocialLinks;
};

export type SkillCategory = {
  name: string;
  items: string[];
};

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  role: string;
  year: string;
  link?: string;
  github?: string;
  documentation?: string;
  image?: string;
  highlight: boolean;
};

export type Education = {
  institution: string;
  program: string;
  period: string;
  location: string;
  cgpa: string;
  coursework?: string;
};

export type Achievement = {
  id: string;
  title: string;
  role: string;
  summary: string;
  description: string;
  images: string[];
};

export type Certification = {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  summary: string;
  description: string;
  image?: string;
  modalImage?: string;
  badgeImage?: string;
  verifyUrl?: string;
};

export type Portfolio = {
  profile: Profile;
  skills: {
    categories: SkillCategory[];
  };
  projects: Project[];
  education: Education[];
  achievements: Achievement[];
  certifications: Certification[];
};
