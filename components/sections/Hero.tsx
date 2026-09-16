'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { fadeUp, slideRight, stagger } from '@/lib/animations';
import { MagneticButton } from '@/components/shared/MagneticButton';

const microStats = [
  { value: '500+', label: 'Patients Treated' },
  { value: '20+', label: 'Years Experience' },
  { value: '6', label: 'Specialists' },
];

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="relative overflow-hidden flex items-center lg:min-h-[90vh]"
      style={{ background: 'var(--gradient-hero)' }}
    >
      {/* Decorative circles */}
      <div
        className="absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
      />
      <div
        className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full pointer-events-none"
        style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
      />

      <div className="container mx-auto max-w-[1200px] py-14 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left column */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="flex flex-col"
          >
            {/* Badge */}
            <motion.div variants={fadeUp} className="mb-6">
              <span
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.15)',
                  color: 'rgba(255,255,255,0.9)',
                  fontFamily: 'var(--font-body)',
                  letterSpacing: '0.05em',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255,255,255,0.2)',
                }}
              >
                Banani, Dhaka
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              variants={fadeUp}
              className="mb-4 lg:mb-6"
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                lineHeight: 1.15,
                color: '#FFFFFF',
              }}
            >
              <span className="block text-[34px] sm:text-[40px] lg:text-[60px]">
                Move Better.
              </span>
              <span
                className="block text-[30px] sm:text-[36px] lg:text-[54px]"
                style={{ color: 'rgba(255,255,255,0.82)' }}
              >
                Feel Better.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeUp}
              className="text-[16px] lg:text-[18px] max-w-md mb-6 lg:mb-8"
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 400,
                lineHeight: 1.75,
                color: 'rgba(255,255,255,0.8)',
              }}
            >
              Evidence-based physiotherapy, rehabilitation, chiropractic
              care & speech therapy — by certified specialists under one
              roof in Banani, Dhaka.
            </motion.p>

            {/* CTA buttons */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 sm:gap-4 mb-8 lg:mb-12">
              <MagneticButton>
                <Link
                  href="/book"
                  className="inline-flex items-center justify-center min-w-[160px] font-semibold text-[15px] py-3 px-8 rounded-full transition-all duration-250 active:scale-95"
                  style={{
                    fontFamily: 'var(--font-body)',
                    border: '2px solid white',
                    color: '#FFFFFF',
                    backgroundColor: 'transparent',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                      'rgba(255,255,255,0.12)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                      'transparent';
                  }}
                >
                  Book Appointment
                </Link>
              </MagneticButton>
              <Link
                href="/services"
                className="inline-flex items-center justify-center font-semibold text-[15px] py-3 px-8 rounded-full transition-all duration-250"
                style={{
                  fontFamily: 'var(--font-body)',
                  color: 'rgba(255,255,255,0.72)',
                  textDecoration: 'underline',
                  textUnderlineOffset: '3px',
                  backgroundColor: 'transparent',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    'rgba(255,255,255,0.72)';
                }}
              >
                View Services
              </Link>
            </motion.div>

            {/* Micro-stats */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-5 sm:gap-8">
              {microStats.map(({ value, label }) => (
                <div key={label} className="flex flex-col gap-0.5">
                  <span
                    className="text-[22px] font-bold"
                    style={{
                      fontFamily: 'var(--font-display)',
                      color: '#FFFFFF',
                    }}
                  >
                    {value}
                  </span>
                  <span
                    className="text-[14px]"
                    style={{
                      fontFamily: 'var(--font-body)',
                      color: 'rgba(255,255,255,0.7)',
                    }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right column — hero visual */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            animate="visible"
            className="relative flex items-center justify-center -mt-2 lg:mt-0"
          >
            {/* Ambient glow behind the figure */}
            <div
              className="absolute w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] lg:w-[440px] lg:h-[440px] rounded-full pointer-events-none"
              style={{
                background:
                  'radial-gradient(circle, rgba(255,255,255,0.14) 0%, transparent 70%)',
              }}
            />
            <motion.div
              animate={reduceMotion ? undefined : { y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-full max-w-[260px] sm:max-w-[340px] lg:max-w-[500px]"
            >
              <Image
                src="/hero-stretch.png"
                alt="Illustration of a person stretching during a physiotherapy session"
                width={1536}
                height={1024}
                priority
                className="w-full h-auto"
                style={{ filter: 'drop-shadow(0 24px 48px rgba(0,0,0,0.25))' }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
