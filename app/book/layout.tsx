import type { Metadata } from 'next';

const title = 'Book an Appointment — Therapy Station, Banani, Dhaka';
const description =
  "Book a physiotherapy, chiropractic, or speech therapy appointment at Therapy Station in Banani, Dhaka. Fill in the form and we'll confirm your session within 24 hours.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'book physiotherapy appointment Dhaka',
    'physiotherapy appointment Banani',
    'chiropractic appointment Dhaka',
    'physiotherapy booking Bangladesh',
  ],
  alternates: { canonical: '/book' },
  openGraph: { title, description, url: '/book' },
  twitter: { title, description },
};

export default function BookLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
