'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { scaleIn } from '@/lib/animations';
import { MagneticButton } from '@/components/shared/MagneticButton';

export default function CTABanner() {
  return (
    <section
      className="py-14 lg:py-20"
      style={{ background: 'var(--gradient-cta)' }}
    >
      <div className="container mx-auto max-w-[1200px]">
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="flex flex-col items-center text-center gap-6"
        >
          <h2
            className="text-[36px] lg:text-[48px] font-bold text-white max-w-[600px]"
            style={{
              fontFamily: 'var(--font-display)',
              lineHeight: 1.2,
            }}
          >
            Ready to Start Your Recovery?
          </h2>
          <p
            className="text-[17px] max-w-[480px]"
            style={{
              fontFamily: 'var(--font-body)',
              color: 'rgba(255,255,255,0.8)',
              lineHeight: 1.75,
            }}
          >
            Book your initial consultation today and take the first step toward a pain-free life.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
            <MagneticButton>
              <Link
                href="/book"
                className="inline-flex items-center justify-center min-w-[196px] font-semibold text-[15px] py-3.5 px-8 rounded-full transition-all duration-250 active:scale-95"
                style={{
                  fontFamily: 'var(--font-body)',
                  backgroundColor: '#FFFFFF',
                  color: 'var(--color-primary)',
                  boxShadow: 'var(--shadow-lg)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                    'rgba(255,255,255,0.92)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                    '#FFFFFF';
                }}
              >
                Book Appointment Now
              </Link>
            </MagneticButton>
            <a
              href="tel:+8801348134933"
              className="inline-flex items-center justify-center min-w-[160px] font-semibold text-[15px] py-3.5 px-8 rounded-full transition-all duration-250 active:scale-95"
              style={{
                fontFamily: 'var(--font-body)',
                border: '2px solid rgba(255,255,255,0.8)',
                color: '#FFFFFF',
                backgroundColor: 'transparent',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                  'rgba(255,255,255,0.1)';
                (e.currentTarget as HTMLAnchorElement).style.borderColor =
                  '#FFFFFF';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                  'transparent';
                (e.currentTarget as HTMLAnchorElement).style.borderColor =
                  'rgba(255,255,255,0.8)';
              }}
            >
              Call Us Today
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
