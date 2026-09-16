import './globals.css';
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingButtons from '@/components/shared/FloatingButtons';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

const SITE_URL = 'https://therapystation.com.bd';
const SITE_DESCRIPTION =
  'Therapy Station is a specialist physiotherapy, rehabilitation, chiropractic & speech therapy clinic in Banani, Dhaka. Certified physiotherapists and consultants treat back pain, sports injuries, stroke recovery, post-surgical rehab, and more — book your appointment today.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: '%s | Therapy Station',
    default: 'Therapy Station | Physiotherapy & Chiropractic Clinic in Banani, Dhaka',
  },
  description: SITE_DESCRIPTION,
  applicationName: 'Therapy Station',
  keywords: [
    'physiotherapy Dhaka',
    'physiotherapy Banani',
    'physiotherapist Banani Dhaka',
    'physio clinic Dhaka',
    'best physiotherapy center Dhaka',
    'chiropractor Dhaka',
    'chiropractic care Banani',
    'speech therapy Dhaka',
    'speech and language therapist Dhaka',
    'rehabilitation center Dhaka',
    'sports injury clinic Dhaka',
    'sports physiotherapy Dhaka',
    'back pain treatment Dhaka',
    'sciatica treatment Dhaka',
    'stroke rehabilitation Dhaka',
    'neurological rehabilitation Dhaka',
    'post surgery physiotherapy Dhaka',
    'paediatric physiotherapy Dhaka',
    "women's health physiotherapy Dhaka",
    'home visit physiotherapy Dhaka',
    'dry needling Dhaka',
    'biophysical therapy Dhaka',
  ],
  authors: [{ name: 'Therapy Station' }],
  creator: 'Therapy Station',
  publisher: 'Therapy Station',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_BD',
    siteName: 'Therapy Station',
    url: SITE_URL,
    title: 'Therapy Station | Physiotherapy & Chiropractic Clinic in Banani, Dhaka',
    description: SITE_DESCRIPTION,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Therapy Station – Physiotherapy Clinic in Banani, Dhaka',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Therapy Station | Physiotherapy & Chiropractic Clinic in Banani, Dhaka',
    description: SITE_DESCRIPTION,
    images: ['/og-image.png'],
  },
  themeColor: '#1A7A4A',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['MedicalBusiness', 'PhysicalTherapy'],
  name: 'Therapy Station',
  alternateName: 'Therapy Station Banani',
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.svg`,
  image: `${SITE_URL}/og-image.png`,
  telephone: '+8801348134933',
  email: 'therapystationbd@gmail.com',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Assets Snowdrops, Flat# A2 (Lift: 2), House# 78, Road# 11, Block# M',
    addressLocality: 'Banani',
    addressRegion: 'Dhaka',
    postalCode: '1213',
    addressCountry: 'BD',
  },
  hasMap: 'https://share.google/yLZcbFugmRNGq9gAM',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      opens: '11:00',
      closes: '21:00',
    },
  ],
  sameAs: ['https://fb.com/therapystation'],
  medicalSpecialty: [
    'Physiotherapy',
    'Chiropractic',
    'Speech-Language Pathology',
    'Sports Medicine',
    'Neurological Rehabilitation',
  ],
  areaServed: {
    '@type': 'City',
    name: 'Dhaka',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${inter.variable}`}
    >
      <body
        style={{
          backgroundColor: 'var(--color-bg)',
          fontFamily: 'var(--font-body)',
          color: 'var(--color-text-primary)',
        }}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
