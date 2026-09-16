export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  slug: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface BookingForm {
  name: string;
  phone: string;
  service: string;
  preferredDate: string;
  notes?: string;
}

export interface ContactForm {
  name: string;
  phone: string;
  message: string;
  serviceInterest?: string;
}
