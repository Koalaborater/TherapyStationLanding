import type { Metadata } from 'next';

const title = 'Our Specialists — Consultants & Physiotherapists in Banani, Dhaka';
const description =
  'Meet the certified physiotherapists, consultants, and rehabilitation specialists at Therapy Station, Banani, Dhaka — with academic credentials, clinical experience, and areas of expertise in musculoskeletal, biophysical, and speech therapy.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'physiotherapist Banani Dhaka',
    'physiotherapy consultant Dhaka',
    'orthopedic physiotherapist Dhaka',
    'speech therapist Dhaka',
    'biophysical therapy specialist Dhaka',
  ],
  alternates: { canonical: '/specialists' },
  openGraph: { title, description, url: '/specialists' },
  twitter: { title, description },
};

export default function SpecialistsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
