import type { Metadata } from 'next';

const title = 'Our Services — Physiotherapy, Chiropractic & Rehabilitation in Banani, Dhaka';
const description =
  'Explore the full range of treatments at Therapy Station: electrotherapy & modalities, manual therapy, chiropractic adjustment, exercise therapy, dry needling, and rehabilitation for orthopedic, neurological, sports, paediatric, geriatric, and post-surgical conditions in Banani, Dhaka.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'physiotherapy services Dhaka',
    'chiropractic adjustment Banani',
    'dry needling Dhaka',
    'manual therapy Dhaka',
    'electrotherapy Dhaka',
    'sports injury rehab Dhaka',
    'neurological rehabilitation Dhaka',
    'post surgery physiotherapy Dhaka',
    'paediatric physiotherapy Dhaka',
    'stroke rehabilitation Dhaka',
  ],
  alternates: { canonical: '/services' },
  openGraph: { title, description, url: '/services' },
  twitter: { title, description },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
