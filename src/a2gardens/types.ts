export type PageType = 'home' | 'projects' | 'about' | 'contact' | 'privacy' | 'terms';

export type ProjectCategory = 'all' | 'terrace' | 'city_garden' | 'balcony' | 'rooftop';

export interface PlantSpec {
  name: string;
  botanicalName: string;
  sunlight: 'Full Sun' | 'Partial Shade' | 'Deep Shade' | 'Adaptable';
  role: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'terrace' | 'city_garden' | 'balcony' | 'rooftop';
  categoryLabel: string;
  location: string;
  commune: string;
  surfaceArea: string;
  orientation: string;
  year: string;
  tagline: string;
  summary: string;
  challenge: string;
  architecturalSolution: string;
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  beforeObjectPosition?: string;
  afterObjectPosition?: string;
  gallery: string[];
  materials: string[];
  plantPalette: PlantSpec[];
  highlights: string[];
  testimonial?: {
    client: string;
    neighborhood: string;
    quote: string;
  };
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  location: string;
  area: string;
  budget: string;
  timeline: string;
  message: string;
}

export interface NotificationResponse {
  success: boolean;
  message: string;
  notificationId?: string;
  dispatchedTo?: string;
  timestamp?: string;
  recipientName?: string;
  error?: string;
}
