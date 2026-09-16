'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Specialists', href: '/specialists' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <nav
      className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b transition-shadow duration-300"
      style={{
        borderColor: 'var(--color-border)',
        boxShadow: scrolled ? 'var(--shadow-md)' : 'none',
      }}
    >
      <div className="container mx-auto max-w-[1200px]">
        <div className="flex items-center justify-between min-h-[72px]">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center shrink-0"
            aria-label="Therapy Station home"
          >
            <Image
              src="/logo.svg"
              alt="Therapy Station"
              width={200}
              height={112}
              priority
              className="h-14 w-auto"
            />
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map(({ label, href }) => {
              const isActive =
                href === '/' ? pathname === '/' : pathname.startsWith(href);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className="relative text-[15px] font-medium transition-colors duration-150 pb-0.5"
                    style={{
                      fontFamily: 'var(--font-body)',
                      color: isActive
                        ? 'var(--color-primary)'
                        : 'var(--color-text-secondary)',
                      letterSpacing: '0.01em',
                    }}
                  >
                    {label}
                    {isActive && (
                      <span
                        className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full"
                        style={{ backgroundColor: 'var(--color-primary)' }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              href="/book"
              className="inline-flex items-center justify-center min-w-[140px] text-white font-semibold text-[15px] py-3 px-6 rounded-full transition-all duration-250 active:scale-95"
              style={{
                fontFamily: 'var(--font-body)',
                backgroundColor: 'var(--color-primary)',
                boxShadow: 'var(--shadow-md)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                  'var(--color-primary-dark)';
                (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                  'var(--shadow-lg)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                  'var(--color-primary)';
                (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                  'var(--shadow-md)';
              }}
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg transition-colors duration-150"
            style={{ color: 'var(--color-text-primary)' }}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence initial={false}>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden md:hidden border-t"
            style={{ borderColor: 'var(--color-border)' }}
          >
            <div
              className="container mx-auto max-w-[1200px] py-4 flex flex-col gap-1"
              style={{ backgroundColor: 'var(--color-bg)' }}
            >
              {navLinks.map(({ label, href }) => {
                const isActive =
                  href === '/' ? pathname === '/' : pathname.startsWith(href);
                return (
                  <Link
                    key={href}
                    href={href}
                    className="flex items-center text-[15px] font-medium px-3 py-3 rounded-lg transition-colors duration-150"
                    style={{
                      fontFamily: 'var(--font-body)',
                      color: isActive
                        ? 'var(--color-primary)'
                        : 'var(--color-text-secondary)',
                      backgroundColor: isActive
                        ? 'var(--color-primary-light)'
                        : 'transparent',
                    }}
                  >
                    {label}
                  </Link>
                );
              })}
              <div className="pt-3 pb-1">
                <Link
                  href="/book"
                  className="flex items-center justify-center w-full min-w-[140px] text-white font-semibold text-[15px] py-3 px-6 rounded-full transition-all duration-250 active:scale-95"
                  style={{
                    fontFamily: 'var(--font-body)',
                    backgroundColor: 'var(--color-primary)',
                    boxShadow: 'var(--shadow-md)',
                  }}
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
