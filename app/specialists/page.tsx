'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { UserCheck, Home, GraduationCap } from 'lucide-react';
import { stagger, fadeUp, scaleIn } from '@/lib/animations';
import PageHero from '@/components/sections/PageHero';
import CTABanner from '@/components/sections/CTABanner';

/* ─── consultants ──────────────────────────────────────────── */

interface Consultant {
  name: string;
  badge: string;
  title: string;
  bio?: string;
  credentials: string[];
  experience: string;
  photo: string;
}

const consultants: Consultant[] = [
    {
        name: "Mohammad Nasir Uddin",
        badge: "Chief Consultant",
        title: "Physiotherapy & Speech Therapy",
        bio: "Leads Therapy Station's physiotherapy and speech therapy services as Chief Consultant, combining a senior academic career in physiotherapy education with over a decade of hands-on clinical practice. Author of eleven physiotherapy lecture-note sets used across the BPT curriculum, with a strong focus on evidence-based teaching and patient care.",
        credentials: [
            "Assoc. Professor & Head, Physiotherapy, State College of Health Sciences",
            "BPT — NITOR, University of Dhaka",
            "Masters in Population Sciences, University of Dhaka",
            "Master's in Speech & Language Pathology, University of Dhaka",
            "M.Phil, University of Dhaka",
            "Author of 11 physiotherapy lecture-note sets for the BPT curriculum",
        ],
        experience: "22+ years at Therapy Station",
        photo: "/specialists/mohammad-nasir-uddin.jpg",
    },
    {
        name: "Md. Rafiqul Islam",
        badge: "Consultant — Musculoskeletal",
        title: "Orthopedic Medicine & Sports Medicine Specialist",
        bio: "Specialises in assessing and treating musculoskeletal disorders — from acute and chronic pain to sports injuries and degenerative conditions of the spine and extremities. Experienced in managing complex cases involving the spine, shoulder, and lower limbs, with a patient-first, empathetic approach to care.",
        credentials: [
            "Assistant Professor, Physiotherapy, State College of Health Sciences",
            "BSc in Physiotherapy — SCHS, University of Dhaka (2016)",
            "MSc in Physiotherapy — BHPI-CRP, University of Dhaka (2023)",
            "Diploma, Orthopaedic Medicine — Global Cyriax Institute, Belgium (2016)",
            "Master's in Speech & Language Pathology",
            "Certified: Shoulder Symptom Modification Procedure (SSMP, UK) · Mulligan Concept (India) · Dry Needling (MSA) · Sports Taping (BCB)",
        ],
        experience: "10+ years professional experience",
        photo: "/specialists/md-rafiqul-islam.jpg",
    },
    {
        name: "Songita Hossain Sithi",
        badge: "Consultant — Biophysical Therapy",
        title: "Biophysical Therapy Specialist",
        bio: "Specialises in biophysical therapy, combining physiotherapy and biophysical modalities with postgraduate training in speech and language therapy for a well-rounded approach to patient recovery. Part of the Therapy Station clinical team for over eight years.",
        credentials: [
            "BPT — SCHS, University of Dhaka",
            "PGD (BioPT)",
            "Masters in Speech and Language Therapy, University of Dhaka",
        ],
        experience: "8+ years at Therapy Station",
        photo: "/specialists/songita-hossain-sithi.jpg",
    },
];

/* ─── physiotherapists ─────────────────────────────────────── */

interface Physio {
  name: string;
  qualification: string;
  photo: string;
}

const physios: Physio[] = [
  { name: 'Mahbub Hasan Apu', qualification: 'BPT — SCHS (DU), 2023', photo: '/specialists/mahbub-hasan-apu.jpeg' },
  { name: 'Sayeda Humaira Haque', qualification: 'BPT — NITOR (DU), 2025', photo: '/specialists/sayeda-humaira-haque.jpg' },
  // { name: 'Md. Selim Reza', qualification: 'BPT — SCHS (DU), 2023', photo: '/specialists/md-selim-reza.jpg' },
];

/* ─── page ─────────────────────────────────────────────────── */

export default function SpecialistsPage() {
  return (
    <>
      <PageHero
        badge="OUR SPECIALISTS"
        title="Meet Our Clinical Team"
        subtitle="Certified physiotherapists, consultants, and rehabilitation specialists under one roof"
      />

      {/* Consultants */}
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
              Chief & Consultant Team
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-[36px] lg:text-[44px] font-bold mb-4"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)', lineHeight: 1.2 }}
            >
              Senior Consultants
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-[17px] max-w-[560px]"
              style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)', lineHeight: 1.75 }}
            >
              Academic faculty and senior clinicians leading treatment across physiotherapy, musculoskeletal medicine, and biophysical therapy.
            </motion.p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="flex flex-col gap-6"
          >
            {consultants.map(({ name, badge, title, bio, credentials, experience, photo }) => (
              <motion.div
                key={name}
                variants={scaleIn}
                className="flex flex-col sm:flex-row gap-6 bg-white rounded-[var(--radius-lg)] border p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lg)]"
                style={{ borderColor: 'var(--color-border)', boxShadow: 'var(--shadow-sm)' }}
              >
                {/* Photo */}
                <div
                  className="relative flex-shrink-0 w-24 h-24 rounded-full overflow-hidden mx-auto sm:mx-0 ring-4"
                  style={{ boxShadow: 'var(--shadow-sm)', '--tw-ring-color': 'var(--color-primary-light)' } as React.CSSProperties}
                >
                  <Image src={photo} alt={name} fill sizes="96px" className="object-cover" />
                </div>

                <div className="flex flex-col flex-1 text-center sm:text-left">
                  <span
                    className="self-center sm:self-start text-[12px] font-semibold mb-2 px-3 py-1 rounded-full"
                    style={{
                      fontFamily: 'var(--font-body)',
                      color: 'var(--color-primary)',
                      backgroundColor: 'var(--color-primary-light)',
                    }}
                  >
                    {badge}
                  </span>
                  <h3
                    className="text-[20px] font-semibold mb-1"
                    style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)' }}
                  >
                    {name}
                  </h3>
                  <p
                    className="text-[14px] font-medium mb-3"
                    style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}
                  >
                    {title}
                  </p>

                  {bio && (
                    <p
                      className="text-[13.5px] mb-4"
                      style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}
                    >
                      {bio}
                    </p>
                  )}

                  <ul className="flex flex-col gap-1.5 mb-4">
                    {credentials.map((c) => (
                      <li key={c} className="flex items-start gap-2">
                        <GraduationCap
                          size={14}
                          strokeWidth={2}
                          className="flex-shrink-0 mt-0.5"
                          style={{ color: 'var(--color-primary-mid)' }}
                        />
                        <span
                          className="text-[13px] text-left"
                          style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}
                        >
                          {c}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <span
                    className="text-[13px] font-semibold"
                    style={{ fontFamily: 'var(--font-body)', color: 'var(--color-primary)' }}
                  >
                    {experience}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Physiotherapy team */}
      <section className="py-14 lg:py-24" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
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
              The Wider Team
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-[36px] lg:text-[44px] font-bold mb-4"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)', lineHeight: 1.2 }}
            >
              Physiotherapy Team
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-[17px] max-w-[500px]"
              style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)', lineHeight: 1.75 }}
            >
              Qualified physiotherapists delivering day-to-day treatment under the supervision of our senior consultants.
            </motion.p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {physios.map(({ name, qualification, photo }) => (
              <motion.div
                key={name}
                variants={fadeUp}
                className="flex flex-col items-center text-center bg-white rounded-[var(--radius-lg)] border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lg)]"
                style={{ borderColor: 'var(--color-border)', boxShadow: 'var(--shadow-sm)' }}
              >
                <div
                  className="relative w-16 h-16 rounded-full overflow-hidden mb-4 ring-4"
                  style={{ '--tw-ring-color': 'var(--color-primary-light)' } as React.CSSProperties}
                >
                  <Image src={photo} alt={name} fill sizes="64px" className="object-cover" />
                </div>
                <h3
                  className="text-[16px] font-semibold mb-1"
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)' }}
                >
                  {name}
                </h3>
                <span
                  className="text-[13px]"
                  style={{ fontFamily: 'var(--font-body)', color: 'var(--color-primary)' }}
                >
                  Physiotherapist
                </span>
                <span
                  className="text-[12px] mt-1"
                  style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-muted)' }}
                >
                  {qualification}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Availability badges */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className="flex flex-wrap items-center justify-center gap-3 mt-10"
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 text-[13px] font-medium px-4 py-2 rounded-full bg-white border"
              style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)', borderColor: 'var(--color-border)' }}
            >
              <UserCheck size={15} strokeWidth={2} style={{ color: 'var(--color-primary)' }} />
              Female therapist available
            </motion.span>
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 text-[13px] font-medium px-4 py-2 rounded-full bg-white border"
              style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)', borderColor: 'var(--color-border)' }}
            >
              <Home size={15} strokeWidth={2} style={{ color: 'var(--color-primary)' }} />
              Home visit service available
            </motion.span>
          </motion.div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
