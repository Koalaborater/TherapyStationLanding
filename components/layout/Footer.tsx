import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock, Facebook } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Specialists', href: '/specialists' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Book Appointment', href: '/book' },
];

const services = [
  'Electrotherapy & Modalities',
  'Manual Therapy',
  'Exercise & Functional Training',
  'Sports Rehabilitation',
  'Neurological Rehab',
  'Post-Surgical Recovery',
];

export default function Footer() {
  return (
    <footer
      style={{ backgroundColor: '#0F1C14' }}
      className="border-t"
    >
      <div
        className="container mx-auto max-w-[1200px] py-16"
        style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center mb-4 rounded-xl px-3 py-2"
              style={{ backgroundColor: '#FFFFFF' }}
            >
              <Image
                src="/logo.svg"
                alt="Therapy Station"
                width={180}
                height={101}
                className="h-12 w-auto"
              />
            </Link>
            <p
              className="text-[14px] leading-relaxed mb-4"
              style={{
                fontFamily: 'var(--font-body)',
                color: 'rgba(255,255,255,0.6)',
              }}
            >
              Evidence-based physiotherapy, rehabilitation, chiropractic
              care & speech therapy — by certified specialists under one
              roof in Banani, Dhaka.
            </p>
            <div className="flex items-center gap-3">
              <p
                className="text-[13px] italic"
                style={{ color: 'rgba(255,255,255,0.4)' }}
              >
                Move Better. Feel Better.
              </p>
              <a
                href="https://fb.com/therapystation"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Therapy Station on Facebook"
                className="flex items-center justify-center w-8 h-8 rounded-full transition-colors duration-150"
                style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}
              >
                <Facebook size={15} style={{ color: 'var(--color-primary-mid)' }} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4
              className="text-white text-[15px] font-semibold mb-5"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-[14px] transition-colors duration-150 hover:text-white"
                    style={{
                      fontFamily: 'var(--font-body)',
                      color: 'rgba(255,255,255,0.6)',
                    }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-white text-[15px] font-semibold mb-5"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Our Services
            </h4>
            <ul className="flex flex-col gap-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-[14px] transition-colors duration-150 hover:text-white"
                    style={{
                      fontFamily: 'var(--font-body)',
                      color: 'rgba(255,255,255,0.6)',
                    }}
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4
              className="text-white text-[15px] font-semibold mb-5"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Contact Us
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin
                  size={16}
                  className="shrink-0 mt-0.5"
                  style={{ color: 'var(--color-primary-mid)' }}
                />
                <span
                  className="text-[14px] leading-snug"
                  style={{
                    fontFamily: 'var(--font-body)',
                    color: 'rgba(255,255,255,0.6)',
                  }}
                >
                  Assets Snowdrops, Flat# A2 (Lift: 2)<br />
                  House# 78, Road# 11, Block# M<br />
                  Banani, Dhaka-1213
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone
                  size={16}
                  className="shrink-0"
                  style={{ color: 'var(--color-primary-mid)' }}
                />
                <a
                  href="tel:+8801348134933"
                  className="text-[14px] transition-colors duration-150 hover:text-white"
                  style={{
                    fontFamily: 'var(--font-body)',
                    color: 'rgba(255,255,255,0.6)',
                  }}
                >
                  01348-134933
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail
                  size={16}
                  className="shrink-0"
                  style={{ color: 'var(--color-primary-mid)' }}
                />
                <a
                  href="mailto:therapystationbd@gmail.com"
                  className="text-[14px] transition-colors duration-150 hover:text-white"
                  style={{
                    fontFamily: 'var(--font-body)',
                    color: 'rgba(255,255,255,0.6)',
                  }}
                >
                  therapystationbd@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock
                  size={16}
                  className="shrink-0 mt-0.5"
                  style={{ color: 'var(--color-primary-mid)' }}
                />
                <span
                  className="text-[14px] leading-snug"
                  style={{
                    fontFamily: 'var(--font-body)',
                    color: 'rgba(255,255,255,0.6)',
                  }}
                >
                  Sat–Thu: 11:00am – 9:00pm<br />
                  Friday: Closed
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t"
        style={{ borderColor: 'rgba(255,255,255,0.1)' }}
      >
        <div className="container mx-auto max-w-[1200px] py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className="text-[13px]"
            style={{
              fontFamily: 'var(--font-body)',
              color: 'rgba(255,255,255,0.4)',
            }}
          >
            &copy; {new Date().getFullYear()} Therapy Station. All rights reserved.
          </p>
          <p
            className="text-[13px]"
            style={{
              fontFamily: 'var(--font-body)',
              color: 'rgba(255,255,255,0.4)',
            }}
          >
            Built by{' '}
            <a
              href="https://koalaborate.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-150 hover:text-white"
              style={{ color: 'rgba(255,255,255,0.7)' }}
            >
              Koalaborate
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
