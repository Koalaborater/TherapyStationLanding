'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { fadeIn } from '@/lib/animations';

interface Stat {
  raw: number;
  display: string;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { raw: 500, display: '500', suffix: '+', label: 'Patients Treated' },
  { raw: 98, display: '98', suffix: '%', label: 'Satisfaction Rate' },
  { raw: 6, display: '6', suffix: '', label: 'Specialist Therapists' },
  { raw: 6, display: '6', suffix: '', label: 'Days a Week (Sat–Thu)' },
];

function AnimatedNumber({ raw, suffix }: { raw: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [triggered, setTriggered] = useState(false);

  const spring = useSpring(0, { stiffness: 60, damping: 20 });
  const rounded = useTransform(spring, (v) => Math.round(v));

  useEffect(() => {
    if (isInView && !triggered) {
      setTriggered(true);
      spring.set(raw);
    }
  }, [isInView, triggered, raw, spring]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <motion.section
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className="py-14 lg:py-24"
      style={{ background: 'var(--gradient-cta)' }}
    >
      <div className="container mx-auto max-w-[1200px]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map(({ raw, suffix, label }) => (
            <div
              key={label}
              className="flex flex-col items-center text-center gap-3"
            >
              <span
                className="text-[52px] lg:text-[60px] font-bold leading-none"
                style={{
                  fontFamily: 'var(--font-display)',
                  color: '#FFFFFF',
                }}
              >
                <AnimatedNumber raw={raw} suffix={suffix} />
              </span>
              <span
                className="text-[16px]"
                style={{
                  fontFamily: 'var(--font-body)',
                  color: 'rgba(255,255,255,0.7)',
                  lineHeight: 1.5,
                }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
