import type { Metadata } from 'next';

const title = 'About Us — Physiotherapy & Rehabilitation Clinic in Banani, Dhaka';
const description =
  "Therapy Station is a specialist physiotherapy and rehabilitation centre in Banani, Dhaka, bringing certified physiotherapists, musculoskeletal specialists, speech therapists, and chiropractic practitioners under one roof — with over two decades of combined clinical experience.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'about Therapy Station',
    'physiotherapy clinic Banani',
    'physiotherapy centre Dhaka history',
    'chiropractic Dhaka',
    'rehabilitation clinic Dhaka',
  ],
  alternates: { canonical: '/about' },
  openGraph: { title, description, url: '/about' },
  twitter: { title, description },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
