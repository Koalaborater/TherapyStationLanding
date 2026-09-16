'use client';

import { motion } from 'framer-motion';
import { UserCheck, Cpu, ClipboardList } from 'lucide-react';
import { slideLeft, slideRight, fadeUp, stagger } from '@/lib/animations';
import { ImagePlaceholder } from '@/components/shared/ImagePlaceholder';
import type { LucideIcon } from 'lucide-react';

interface Differentiator {
  icon: LucideIcon;
  heading: string;
  body: string;
  imageAlt: string;
  imageBg: string;
}

const points: Differentiator[] = [
  {
    icon: UserCheck,
    heading: 'Expert Specialists',
    body: 'Every therapist on our team holds advanced clinical qualifications and brings years of hands-on experience. You are always seen by a senior practitioner who stays with your case from initial assessment through full recovery.',
    imageAlt: 'Expert physiotherapy specialists',
    imageBg: '#E8F5EE',
  },
  {
    icon: Cpu,
    heading: 'Modern Equipment',
    body: 'Our clinic is equipped with the latest electrotherapy, ultrasound, and biomechanical assessment tools. Cutting-edge technology means faster, more accurate diagnosis and treatment outcomes that outperform traditional methods.',
    imageAlt: 'Modern physiotherapy equipment',
    imageBg: '#EAF4FF',
  },
  {
    icon: ClipboardList,
    heading: 'Personalised Treatment',
    body: 'No two patients are the same. We build a bespoke treatment plan around your body, lifestyle, and goals — then adjust it every session based on your progress, ensuring you recover at the optimal pace for you.',
    imageAlt: 'Personalised treatment plan',
    imageBg: '#FFF8EC',
  },
];

export default function WhyUs() {
  return (
    <section className="py-14 lg:py-24" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="container mx-auto max-w-[1200px]">
        {/* Section header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="flex flex-col items-center text-center mb-10 lg:mb-20"
        >
          <motion.span
            variants={fadeUp}
            className="text-[11px] font-bold uppercase tracking-[0.12em] mb-4"
            style={{
              fontFamily: 'var(--font-body)',
              color: 'var(--color-primary)',
            }}
          >
            Why Choose Us
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-[36px] lg:text-[44px] font-bold mb-4"
            style={{
              fontFamily: 'var(--font-display)',
              color: 'var(--color-text-primary)',
              lineHeight: 1.2,
            }}
          >
            The Therapy Station Difference
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-[17px] max-w-[520px]"
            style={{
              fontFamily: 'var(--font-body)',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.75,
            }}
          >
            Three pillars that set us apart and keep our patients coming back — and referring their friends.
          </motion.p>
        </motion.div>

        {/* Alternating rows */}
        <div className="flex flex-col gap-14 lg:gap-24">
          {points.map(({ icon: Icon, heading, body, imageAlt, imageBg }, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={heading}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  !isEven ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                {/* Image side */}
                <motion.div
                  variants={isEven ? slideLeft : slideRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                >
                  <ImagePlaceholder bg={imageBg} icon={Icon} alt={imageAlt} />
                </motion.div>

                {/* Text side */}
                <motion.div
                  variants={isEven ? slideRight : slideLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                  className="flex flex-col justify-center"
                >
                  <div
                    className="flex items-center justify-center w-14 h-14 rounded-2xl mb-6"
                    style={{ backgroundColor: 'var(--color-primary-light)' }}
                  >
                    <Icon
                      size={26}
                      strokeWidth={1.8}
                      style={{ color: 'var(--color-primary)' }}
                    />
                  </div>
                  <h3
                    className="text-[28px] lg:text-[32px] font-bold mb-4"
                    style={{
                      fontFamily: 'var(--font-display)',
                      color: 'var(--color-text-primary)',
                      lineHeight: 1.25,
                    }}
                  >
                    {heading}
                  </h3>
                  <p
                    className="text-[16px]"
                    style={{
                      fontFamily: 'var(--font-body)',
                      color: 'var(--color-text-secondary)',
                      lineHeight: 1.8,
                    }}
                  >
                    {body}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
