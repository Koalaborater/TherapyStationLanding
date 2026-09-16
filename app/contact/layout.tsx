import type { Metadata } from 'next';

const title = 'Contact Us — Therapy Station, Banani, Dhaka';
const description =
  'Get in touch with Therapy Station in Banani, Dhaka. Find our address, phone number, email, opening hours (Sat–Thu, 11am–9pm), and map — or book an appointment online.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'Therapy Station contact',
    'physiotherapy clinic Banani address',
    'physiotherapy clinic Dhaka phone number',
    'Therapy Station Banani location',
  ],
  alternates: { canonical: '/contact' },
  openGraph: { title, description, url: '/contact' },
  twitter: { title, description },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
