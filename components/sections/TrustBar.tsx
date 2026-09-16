'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/animations';

const stats = [
  { value: '500+', label: 'Patients Treated' },
  { value: '98%', label: 'Success Rate' },
  { value: '6', label: 'Specialist Therapists' },
  { value: '6 Days', label: 'A Week, Sat–Thu' },
];

const services = [
  'PHYSIOTHERAPY',
  'REHABILITATION',
  'CHIROPRACTIC CARE',
  'SPEECH THERAPY',
  'BIOPHYSICAL THERAPY',
  'HOME VISITS',
];

const marqueeItems = [...services, ...services];

export default function TrustBar() {
  return (
    <section
      style={{
        backgroundColor: 'var(--color-bg)',
      }}
    >
      <div className="container mx-auto max-w-[1200px]">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-2 lg:grid-cols-4 py-8"
        >
          {stats.map(({ value, label }, i) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center py-4 px-6 text-center"
              style={{
                borderRight:
                  i < stats.length - 1
                    ? '1px solid var(--color-border)'
                    : 'none',
              }}
            >
              <span
                className="text-[28px] font-bold leading-none mb-1"
                style={{
                  fontFamily: 'var(--font-display)',
                  color: 'var(--color-primary)',
                }}
              >
                {value}
              </span>
              <span
                className="text-[14px]"
                style={{
                  fontFamily: 'var(--font-body)',
                  color: 'var(--color-text-muted)',
                }}
              >
                {label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scrolling service ticker */}
      <div
        className="overflow-hidden py-3 border-t border-b"
        style={{
          borderColor: 'var(--color-border)',
          backgroundColor: 'var(--color-bg-secondary)',
        }}
      >
        <div
          className="flex animate-marquee whitespace-nowrap"
          style={{ width: 'max-content' }}
        >
          {marqueeItems.map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-4 px-8"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                color: 'var(--color-text-muted)',
              }}
            >
              {item}
              <span
                className="inline-block w-1 h-1 rounded-full"
                style={{ backgroundColor: 'var(--color-primary)' }}
              />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
