'use client';

import { motion } from 'framer-motion';
import { stagger, fadeUp } from '@/lib/animations';

interface PageHeroProps {
  badge: string;
  title: string;
  subtitle: string;
}

export default function PageHero({ badge, title, subtitle }: PageHeroProps) {
  return (
    <section
      className="relative min-h-[40vh] flex flex-col justify-center"
      style={{ background: 'var(--gradient-hero-subtle)' }}
    >
      <div className="container mx-auto max-w-[1200px] py-14 lg:py-20 flex flex-col items-center text-center">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-4"
        >
          <motion.span
            variants={fadeUp}
            className="text-[11px] font-bold uppercase tracking-[0.14em] px-3 py-1 rounded-full"
            style={{
              fontFamily: 'var(--font-body)',
              color: 'var(--color-primary)',
              backgroundColor: 'var(--color-primary-light)',
            }}
          >
            {badge}
          </motion.span>
          <motion.h1
            variants={fadeUp}
            className="text-[40px] lg:text-[56px] font-bold"
            style={{
              fontFamily: 'var(--font-display)',
              color: 'var(--color-text-primary)',
              lineHeight: 1.15,
            }}
          >
            {title}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-[18px] max-w-[520px]"
            style={{
              fontFamily: 'var(--font-body)',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.75,
            }}
          >
            {subtitle}
          </motion.p>
        </motion.div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-[0]">
        <svg
          viewBox="0 0 1440 56"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="block w-full"
          style={{ height: '56px' }}
          aria-hidden="true"
        >
          <path
            d="M0,40 C360,72 1080,8 1440,40 L1440,56 L0,56 Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>
    </section>
  );
}
