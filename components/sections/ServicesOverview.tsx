'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Bone,
  Trophy,
  Scissors,
  Hand,
  Brain,
  MessageSquare,
  ArrowRight,
} from 'lucide-react';
import { fadeUp, stagger } from '@/lib/animations';
import { TiltCard } from '@/components/shared/TiltCard';
import type { LucideIcon } from 'lucide-react';

interface Service {
  icon: LucideIcon;
  name: string;
  description: string;
  href: string;
}

const services: Service[] = [
  {
    icon: Bone,
    name: 'Orthopedic & Musculoskeletal',
    description:
      'Evidence-based treatment for back, neck, shoulder, hip, knee, and joint pain — from acute injuries to chronic arthritis.',
    href: '/services',
  },
  {
    icon: Trophy,
    name: 'Sports Rehabilitation',
    description:
      'Tailored recovery programmes for athletes of all levels — from ligament tears and muscle strains to full return-to-play plans.',
    href: '/services',
  },
  {
    icon: Scissors,
    name: 'Post-Surgical Recovery',
    description:
      'Structured post-operative physiotherapy after joint replacements and fracture surgery, rebuilding strength and function.',
    href: '/services',
  },
  {
    icon: Hand,
    name: 'Chiropractic Care',
    description:
      'Drug-free spinal and musculoskeletal treatment using precision manual adjustment — effective for sciatica, disc prolapse, and chronic spinal pain.',
    href: '/services',
  },
  {
    icon: Brain,
    name: 'Neurological Rehabilitation',
    description:
      "Specialist support for stroke, Parkinson's, and nerve injuries — focused on regaining independence and quality of life.",
    href: '/services',
  },
  {
    icon: MessageSquare,
    name: 'Speech & Language Therapy',
    description:
      'Assessment and therapy for speech, language, and communication difficulties, delivered alongside your physiotherapy programme.',
    href: '/services',
  },
];

export default function ServicesOverview() {
  return (
    <section
      className="py-14 lg:py-24"
      style={{ backgroundColor: 'var(--color-bg-secondary)' }}
    >
      <div className="container mx-auto max-w-[1200px]">
        {/* Section header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="flex flex-col items-center text-center mb-14"
        >
          <motion.span
            variants={fadeUp}
            className="text-[11px] font-bold uppercase tracking-[0.12em] mb-4"
            style={{
              fontFamily: 'var(--font-body)',
              color: 'var(--color-primary)',
            }}
          >
            Our Services
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
            What We Treat
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-[17px] max-w-[560px]"
            style={{
              fontFamily: 'var(--font-body)',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.75,
            }}
          >
            From sports injuries to chronic conditions, our specialists bring
            evidence-based care to help you move without limits.
          </motion.p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map(({ icon: Icon, name, description, href }) => (
            <motion.div key={name} variants={fadeUp}>
              <TiltCard className="h-full rounded-[var(--radius-lg)]">
                <div
                  className="group flex flex-col h-full bg-white rounded-[var(--radius-lg)] border overflow-hidden transition-shadow duration-300 hover:shadow-[var(--shadow-lg)]"
                  style={{
                    borderColor: 'var(--color-border)',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  {/* Top accent bar */}
                  <div
                    className="h-1 w-full"
                    style={{ backgroundColor: 'var(--color-primary)' }}
                  />

                  <div className="flex flex-col flex-1 p-6">
                    {/* Icon */}
                    <div
                      className="flex items-center justify-center w-12 h-12 rounded-xl mb-5"
                      style={{ backgroundColor: 'var(--color-primary-light)' }}
                    >
                      <Icon
                        size={22}
                        strokeWidth={2}
                        style={{ color: 'var(--color-primary)' }}
                      />
                    </div>

                    {/* Name */}
                    <h3
                      className="text-[20px] font-semibold mb-2"
                      style={{
                        fontFamily: 'var(--font-display)',
                        color: 'var(--color-text-primary)',
                        lineHeight: 1.3,
                      }}
                    >
                      {name}
                    </h3>

                    {/* Description */}
                    <p
                      className="text-[14px] mb-6 flex-1"
                      style={{
                        fontFamily: 'var(--font-body)',
                        color: 'var(--color-text-secondary)',
                        lineHeight: 1.7,
                      }}
                    >
                      {description}
                    </p>

                    {/* Learn more */}
                    <Link
                      href={href}
                      className="inline-flex items-center gap-1.5 text-[14px] font-semibold transition-colors duration-150"
                      style={{
                        fontFamily: 'var(--font-body)',
                        color: 'var(--color-primary)',
                      }}
                    >
                      Learn More
                      <ArrowRight
                        size={15}
                        strokeWidth={2.5}
                        className="transition-transform duration-150 group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
