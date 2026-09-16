'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heart, FlaskConical, TrendingUp, Users, ArrowRight, UserCheck, Home } from 'lucide-react';
import { stagger, fadeUp, slideLeft, slideRight } from '@/lib/animations';
import PageHero from '@/components/sections/PageHero';
import CTABanner from '@/components/sections/CTABanner';
import { ImagePlaceholder } from '@/components/shared/ImagePlaceholder';
import type { LucideIcon } from 'lucide-react';

/* ─── values ───────────────────────────────────────────────── */

interface Value {
  icon: LucideIcon;
  title: string;
  description: string;
}

const values: Value[] = [
  {
    icon: Heart,
    title: 'Patient First',
    description:
      'Every clinical decision starts and ends with your wellbeing. We listen deeply, communicate clearly, and never rush a session.',
  },
  {
    icon: FlaskConical,
    title: 'Evidence-Based Care',
    description:
      'Our treatments are grounded in current research. We continuously review clinical guidelines to ensure you receive the most effective therapies available.',
  },
  {
    icon: TrendingUp,
    title: 'Continuous Improvement',
    description:
      'Our therapists pursue ongoing professional development, and we regularly audit outcomes to make sure our standard of care keeps rising.',
  },
];

/* ─── page ──────────────────────────────────────────────────── */

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge="ABOUT US"
        title="Expert Care. Trusted Specialists."
        subtitle="Banani's specialist physiotherapy and rehabilitation centre"
      />

      {/* Our Story */}
      <section className="py-14 lg:py-24" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="container mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Text */}
            <motion.div
              variants={slideLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="flex flex-col gap-6"
            >
              <div>
                <span
                  className="text-[11px] font-bold uppercase tracking-[0.12em]"
                  style={{ fontFamily: 'var(--font-body)', color: 'var(--color-primary)' }}
                >
                  Our Story
                </span>
                <h2
                  className="text-[36px] lg:text-[44px] font-bold mt-3 mb-4"
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)', lineHeight: 1.2 }}
                >
                  Built on a Belief That Everyone Deserves to Move Well
                </h2>
              </div>
              <p
                className="text-[16px]"
                style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)', lineHeight: 1.8 }}
              >
                Therapy Station is a specialist physiotherapy and rehabilitation centre in Banani, Dhaka. We bring certified physiotherapists, musculoskeletal specialists, speech therapists, and chiropractic practitioners under one roof — with branches across Dhaka.
              </p>
              <p
                className="text-[16px]"
                style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)', lineHeight: 1.8 }}
              >
                We deliver evidence-based, personalised treatment plans guided by over two decades of clinical experience, combining physiotherapy, rehabilitation, biophysical therapy, chiropractic care, and speech therapy into one coordinated programme for every patient.
              </p>
              <p
                className="text-[16px]"
                style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)', lineHeight: 1.8 }}
              >
                Our mission is simple: to deliver evidence-based care that produces lasting results, in an environment where patients feel genuinely heard and supported. Every programme we build, every technique we refine, and every specialist we bring on board reflects that commitment.
              </p>
            </motion.div>

            {/* Image placeholder */}
            <motion.div
              variants={slideRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              <ImagePlaceholder
                bg="var(--color-bg-tertiary)"
                icon={Users}
                alt="Therapy Station clinic"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specialists teaser */}
      <section className="py-14 lg:py-24" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
        <div className="container mx-auto max-w-[1200px]">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="flex flex-col items-center text-center gap-5 rounded-[var(--radius-lg)] border bg-white px-6 py-14"
            style={{ borderColor: 'var(--color-border)', boxShadow: 'var(--shadow-sm)' }}
          >
            <motion.span
              variants={fadeUp}
              className="text-[11px] font-bold uppercase tracking-[0.12em]"
              style={{ fontFamily: 'var(--font-body)', color: 'var(--color-primary)' }}
            >
              Our Clinical Team
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-[32px] lg:text-[40px] font-bold max-w-[560px]"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)', lineHeight: 1.2 }}
            >
              Meet the Specialists Behind Your Recovery
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-[16px] max-w-[520px]"
              style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)', lineHeight: 1.75 }}
            >
              Our consultants and physiotherapists hold advanced qualifications from leading institutions in Bangladesh and abroad. See their credentials and specialisms in full.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-3 mt-1">
              <span
                className="inline-flex items-center gap-2 text-[13px] font-medium px-4 py-2 rounded-full"
                style={{ fontFamily: 'var(--font-body)', color: 'var(--color-primary)', backgroundColor: 'var(--color-primary-light)' }}
              >
                <UserCheck size={15} strokeWidth={2} />
                Female therapist available
              </span>
              <span
                className="inline-flex items-center gap-2 text-[13px] font-medium px-4 py-2 rounded-full"
                style={{ fontFamily: 'var(--font-body)', color: 'var(--color-primary)', backgroundColor: 'var(--color-primary-light)' }}
              >
                <Home size={15} strokeWidth={2} />
                Home visit service available
              </span>
            </motion.div>
            <motion.div variants={fadeUp}>
              <Link
                href="/specialists"
                className="inline-flex items-center gap-2 font-semibold text-[15px] py-3 px-8 rounded-full transition-all duration-250 active:scale-95 text-white mt-2"
                style={{ fontFamily: 'var(--font-body)', backgroundColor: 'var(--color-primary)', boxShadow: 'var(--shadow-md)' }}
              >
                View Our Specialists
                <ArrowRight size={16} strokeWidth={2.5} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-14 lg:py-24" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="container mx-auto max-w-[1200px]">
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
              style={{ fontFamily: 'var(--font-body)', color: 'var(--color-primary)' }}
            >
              What Drives Us
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-[36px] lg:text-[44px] font-bold"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)', lineHeight: 1.2 }}
            >
              Our Core Values
            </motion.h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {values.map(({ icon: Icon, title, description }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="group flex flex-col bg-white rounded-[var(--radius-lg)] border overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lg)]"
                style={{ borderColor: 'var(--color-border)', boxShadow: 'var(--shadow-sm)' }}
              >
                <div className="h-1 w-full" style={{ backgroundColor: 'var(--color-primary)' }} />
                <div className="p-6">
                  <div
                    className="flex items-center justify-center w-12 h-12 rounded-xl mb-5 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: 'var(--color-primary-light)' }}
                  >
                    <Icon size={22} strokeWidth={2} style={{ color: 'var(--color-primary)' }} />
                  </div>
                  <h3
                    className="text-[19px] font-semibold mb-3"
                    style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)' }}
                  >
                    {title}
                  </h3>
                  <p
                    className="text-[14px]"
                    style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)', lineHeight: 1.75 }}
                  >
                    {description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
