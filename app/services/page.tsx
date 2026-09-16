'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Zap,
  Hand,
  Dumbbell,
  Footprints,
  Bandage,
  Syringe,
  Bone,
  Brain,
  Users2,
  Baby,
  Trophy,
  HeartPulse,
  Wind,
  Scissors,
  ArrowRight,
  CalendarDays,
  ClipboardList,
  TrendingUp,
  UserCheck,
  Sparkles,
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { stagger, fadeUp, scaleIn } from '@/lib/animations';
import PageHero from '@/components/sections/PageHero';
import CTABanner from '@/components/sections/CTABanner';
import type { LucideIcon } from 'lucide-react';

/* ─── what we offer ───────────────────────────────────────────
   Grouped exactly as our clinical modalities are organised.
─────────────────────────────────────────────────────────────── */

interface ModalityGroup {
  icon: LucideIcon;
  title: string;
  items: string[];
}

const modalityGroups: ModalityGroup[] = [
  {
    icon: Zap,
    title: 'Electrotherapy & Modalities',
    items: [
      'Biophysical Therapy (BioPT) / Micro-current Therapy',
      'Infra-red Ray (IRR)',
      'Shortwave Diathermy (SWD)',
      'Ultrasound Therapy (UST)',
      'Electrical Muscle Stimulator (EMS/NEMS)',
      'Faradic, Galvanic & Russian Current',
      'Transcutaneous Electrical Nerve Stimulation (TENS)',
      'Interferential Therapy (IFT)',
      'LASER Therapy',
      'Mechanical Traction',
      'Cryotherapy',
      'Pulsed Electromagnetic Field (PEMF)',
      'Shock Wave Therapy',
      'TECAR Therapy',
      'Super Inductive System (SIS)',
    ],
  },
  {
    icon: Hand,
    title: 'Manual Therapy',
    items: [
      'Soft Tissue Release (STR) / DTFM',
      'Myofascial Release (MFR) / Trigger Point Release',
      'Stretching Exercise',
      'Joint Mobilization',
      'Manipulation',
      'Chiropractic Adjustment',
      'Osteopathy',
    ],
  },
  {
    icon: Dumbbell,
    title: 'Exercise Therapy',
    items: [
      'Range of Motion (ROM) Exercise',
      'Stretching Exercise',
      'Strengthening Exercise',
      'Mobility Drills / Agility Training',
      'Posture Corrective Exercise',
      'Core Stabilization Exercise',
      'Balance Training',
      'Coordination Training',
      'Breathing Exercise',
      'Functional Training',
    ],
  },
  {
    icon: Footprints,
    title: 'Functional Training',
    items: ['Gait Training', 'Ergonomic Advice & Training'],
  },
  {
    icon: Bandage,
    title: 'Taping',
    items: ['Sports Taping', 'Kinesio-Taping'],
  },
  {
    icon: Syringe,
    title: 'Invasive Approach',
    items: [
      'Dry Needling / Western Acupuncture',
      'Injection & Infiltration — Steroid, PRP, Prolotherapy, Stem Cell',
    ],
  },
];

/* ─── conditions we treat ─────────────────────────────────────── */

interface ConditionGroup {
  icon: LucideIcon;
  title: string;
  items: string[];
}

const conditionGroups: ConditionGroup[] = [
  {
    icon: Bone,
    title: 'Orthopedic & Musculoskeletal',
    items: [
      'Shoulder: Arthritis/frozen shoulder, tendinitis, bursitis, impingement syndrome, SLAP/Bankart lesion, AC joint problems, subluxation',
      'Elbow: Tennis elbow, golfers elbow, olecranon bursitis, arthritis',
      'Wrist & Hand: De Quervain’s tenosynovitis, trigger finger, carpal tunnel syndrome, ganglion cyst, wrist fracture, arthritis',
      'Neck/Cervical: Prolapsed cervical disc, torticollis, cervical rib, cervical headache, whiplash injury, cervical spondylosis',
      'Lower Back/Lumbar: PLID/sciatica/slip disc, facet joint dysfunction, lumbar spondylosis, spondylolisthesis, pars fracture',
      'Hip: Hip arthritis, avascular necrosis, total hip replacement rehab, bursitis',
      'Knee: Osteoarthritis, patellofemoral pain syndrome, IT band syndrome, chondromalacia patella, bursitis',
      'Ankle & Foot: Plantar fasciitis, Achilles tendinopathy, retrocalcaneal bursitis',
    ],
  },
  {
    icon: Brain,
    title: 'Neurological',
    items: [
      'Stroke',
      'Head injury',
      'Multiple sclerosis',
      'Transverse myelitis',
      "Bell's palsy",
      'Spinal cord injury',
      'Motor neuron disease',
      'Guillain-Barré syndrome',
      'Myelopathy',
      'Neuropathy',
      "Parkinson's disease",
    ],
  },
  {
    icon: Users2,
    title: 'Geriatric',
    items: [
      'Osteoporosis',
      "Parkinson's disease",
      'Dementia',
      'Arthritis',
      'Physical weakness',
      'Fall risk',
      'Balance problems',
    ],
  },
  {
    icon: Baby,
    title: 'Paediatric',
    items: [
      'Cerebral palsy',
      'Autism',
      'Congenital anomalies (e.g. scoliosis)',
      'Duchenne muscular dystrophy',
      'Club foot',
      'Down syndrome',
      'Bow leg',
      'Hip dysplasia',
    ],
  },
  {
    icon: Trophy,
    title: 'Sports Injuries',
    items: [
      'Ligament injury (ACL, PCL, MCL, LCL, ATFL/ankle sprain and more)',
      'Meniscus injury',
      'Cartilage injury (SLAP, Bankart, TFCC)',
      'Muscle strain',
      'Tendon injury',
    ],
  },
  {
    icon: HeartPulse,
    title: "Women's Health (Gynae)",
    items: [
      'Exercise before & during pregnancy',
      'Exercise after delivery',
      'Urinary incontinence',
    ],
  },
  {
    icon: Wind,
    title: 'Cardio-Pulmonary',
    items: ['Chest physiotherapy', 'Breathing exercise', 'Postural drainage'],
  },
  {
    icon: Scissors,
    title: 'Post-Surgical Rehabilitation',
    items: [
      'Fracture rehab',
      'Total hip replacement rehab',
      'Total knee replacement rehab',
      'Radius/ulna fracture',
      'Femur fracture',
      'Patella fracture',
      'Spine fracture',
      'ACL reconstruction',
    ],
  },
];

/* ─── how it works ─────────────────────────────────────────── */

interface Step {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: '01',
    icon: CalendarDays,
    title: 'Book Appointment',
    description:
      'Choose a time that suits you online or by phone. New patients receive a confirmation with everything they need to know before their first visit.',
  },
  {
    number: '02',
    icon: ClipboardList,
    title: 'Initial Assessment',
    description:
      'Your therapist conducts a thorough evaluation of your condition, medical history, and goals to build a complete picture before recommending treatment.',
  },
  {
    number: '03',
    icon: UserCheck,
    title: 'Personalised Plan',
    description:
      'We design a tailored treatment programme with clear milestones, giving you a roadmap so you always know what to expect and when.',
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Recovery & Progress',
    description:
      'Regular sessions, progress reviews, and home exercise support ensure you keep improving — right through to full discharge and beyond.',
  },
];

/* ─── FAQs ─────────────────────────────────────────────────── */

const faqs = [
  {
    q: 'What happens during my first session?',
    a: 'Your first appointment is a comprehensive assessment. Your therapist will review your medical history, discuss your pain or functional concern, perform physical tests, and explain their findings. You may also receive some initial treatment on the same visit, and will leave with a clear plan for the sessions ahead.',
  },
  {
    q: 'How many sessions will I need?',
    a: 'This depends entirely on your condition. After your initial assessment your therapist will give you a realistic estimate along with clear milestones to track progress.',
  },
  {
    q: 'Do you accept health insurance?',
    a: 'We recommend calling our reception team with your policy details so we can confirm coverage before your appointment. We will handle the paperwork on your behalf wherever possible.',
  },
  {
    q: 'What should I wear to my appointment?',
    a: 'Loose, comfortable clothing that allows the therapist to access the area being treated is ideal — shorts for lower-limb or back conditions, a vest or strappy top for shoulder and neck issues. Avoid tight jeans or restrictive sportswear.',
  },
  {
    q: 'Will treatment be painful?',
    a: 'Some manual techniques can cause mild temporary discomfort, and it is normal to feel a little sore for 24–48 hours after the first few sessions — similar to post-exercise soreness. Your therapist will always work within your comfort threshold and encourage you to communicate openly throughout each session.',
  },
  {
    q: 'Do you offer home visit appointments?',
    a: 'Yes — we offer home visits for patients who are unable to travel due to their condition or mobility limitations. Home visits are subject to availability. Please call us to check whether a home visit is appropriate for your situation.',
  },
  {
    q: 'Do you have female therapists available?',
    a: 'Yes, a female therapist is available on request — please mention this when booking your appointment.',
  },
  {
    q: 'Do you offer services outside Banani?',
    a: 'Yes — alongside our main Banani branch, Therapy Station also serves patients at our Shantinagar location, with an affiliated clinic at Nasir Physiotherapy in Basabo. Call us to find the most convenient location for you.',
  },
];

/* ─── page ──────────────────────────────────────────────────── */

export default function ServicesPage() {
  return (
    <>
      <PageHero
        badge="OUR SERVICES"
        title="Expert Physiotherapy Care"
        subtitle="Comprehensive treatments tailored to your recovery"
      />

      {/* Featured service */}
      <section className="pt-14 lg:pt-24 pb-6" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="container mx-auto max-w-[1200px]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="flex flex-col gap-3 rounded-[var(--radius-lg)] p-8 lg:p-10"
            style={{ background: 'var(--gradient-cta)' }}
          >
            <span
              className="inline-flex items-center gap-1.5 self-start text-[11px] font-bold uppercase tracking-[0.12em] px-3 py-1.5 rounded-full"
              style={{ fontFamily: 'var(--font-body)', color: 'var(--color-primary)', backgroundColor: '#FFFFFF' }}
            >
              <Sparkles size={12} strokeWidth={2.5} />
              Featured Service
            </span>
            <h2
              className="text-[26px] lg:text-[32px] font-bold text-white"
              style={{ fontFamily: 'var(--font-display)', lineHeight: 1.25 }}
            >
              Chiropractic Care
            </h2>
            <p
              className="text-[15px] max-w-[720px]"
              style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.85)', lineHeight: 1.75 }}
            >
              Drug-free, non-invasive spinal and musculoskeletal treatment using precision manual adjustment. Highly effective for disc prolapse (PLID), sciatica, cervical spondylosis, postural dysfunction, and chronic spinal pain — without surgery or medication.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Offer */}
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
              Our Services
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-[36px] lg:text-[44px] font-bold mb-4"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)', lineHeight: 1.2 }}
            >
              What We Treat &amp; Offer
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-[17px] max-w-[560px]"
              style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)', lineHeight: 1.75 }}
            >
              A full range of modalities and hands-on techniques, delivered by specialists across every discipline.
            </motion.p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            {modalityGroups.map(({ icon: Icon, title, items }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="group flex flex-col bg-white rounded-[var(--radius-lg)] border overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lg)]"
                style={{ borderColor: 'var(--color-border)', boxShadow: 'var(--shadow-sm)' }}
              >
                <div className="h-1 w-full" style={{ backgroundColor: 'var(--color-primary)' }} />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="flex items-center justify-center w-11 h-11 rounded-xl flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: 'var(--color-primary-light)' }}
                    >
                      <Icon size={20} strokeWidth={2} style={{ color: 'var(--color-primary)' }} />
                    </div>
                    <h3
                      className="text-[18px] font-semibold"
                      style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)' }}
                    >
                      {title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item) => (
                      <span
                        key={item}
                        className="text-[12.5px] px-3 py-1.5 rounded-full border"
                        style={{
                          fontFamily: 'var(--font-body)',
                          color: 'var(--color-text-secondary)',
                          borderColor: 'var(--color-border)',
                          backgroundColor: 'var(--color-bg-secondary)',
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Conditions We Treat */}
      <section className="py-14 lg:py-24" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
        <div className="container mx-auto max-w-[900px]">
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
              Conditions We Treat
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-[36px] lg:text-[44px] font-bold mb-4"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)', lineHeight: 1.2 }}
            >
              From Sports Injuries to Chronic Conditions
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-[17px] max-w-[560px]"
              style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)', lineHeight: 1.75 }}
            >
              Browse by category to see the specific conditions our specialists manage every day.
            </motion.p>
          </motion.div>

          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <Accordion type="single" collapsible className="flex flex-col gap-3">
              {conditionGroups.map(({ icon: Icon, title, items }) => (
                <AccordionItem
                  key={title}
                  value={title}
                  className="border rounded-xl px-6 overflow-hidden bg-white"
                  style={{ borderColor: 'var(--color-border)' }}
                >
                  <AccordionTrigger className="hover:no-underline py-5">
                    <div className="flex items-center gap-3">
                      <div
                        className="flex items-center justify-center w-9 h-9 rounded-lg flex-shrink-0"
                        style={{ backgroundColor: 'var(--color-primary-light)' }}
                      >
                        <Icon size={17} strokeWidth={2} style={{ color: 'var(--color-primary)' }} />
                      </div>
                      <span
                        className="text-[15px] font-semibold text-left"
                        style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)' }}
                      >
                        {title}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 pl-12">
                    <ul className="flex flex-col gap-2">
                      {items.map((item) => (
                        <li
                          key={item}
                          className="text-[13.5px]"
                          style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-14 lg:py-24" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="container mx-auto max-w-[1200px]">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="flex flex-col items-center text-center mb-10 lg:mb-16"
          >
            <motion.span
              variants={fadeUp}
              className="text-[11px] font-bold uppercase tracking-[0.12em] mb-4"
              style={{ fontFamily: 'var(--font-body)', color: 'var(--color-primary)' }}
            >
              The Process
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-[36px] lg:text-[44px] font-bold mb-4"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)', lineHeight: 1.2 }}
            >
              How It Works
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-[17px] max-w-[500px]"
              style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)', lineHeight: 1.75 }}
            >
              Four clear steps from booking to full recovery — no surprises, just progress.
            </motion.p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {/* Dashed connector — desktop only */}
            <div
              className="hidden lg:block absolute top-10 left-[calc(12.5%+8px)] right-[calc(12.5%+8px)]"
              aria-hidden="true"
            >
              <svg width="100%" height="2" xmlns="http://www.w3.org/2000/svg">
                <line
                  x1="0" y1="1" x2="100%" y2="1"
                  stroke="var(--color-primary)"
                  strokeWidth="2"
                  strokeDasharray="8 6"
                  strokeOpacity="0.3"
                />
              </svg>
            </div>

            {steps.map(({ number, icon: Icon, title, description }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative mb-6 z-10">
                  <div
                    className="flex items-center justify-center w-20 h-20 rounded-full bg-white"
                    style={{ border: '2px solid var(--color-primary)', borderColor: 'color-mix(in srgb, var(--color-primary) 30%, transparent)' }}
                  >
                    <Icon size={28} strokeWidth={1.6} style={{ color: 'var(--color-primary)' }} />
                  </div>
                  <span
                    className="absolute -top-3 -right-2 text-[26px] font-black leading-none select-none"
                    style={{ fontFamily: 'var(--font-display)', color: 'var(--color-primary)', opacity: 0.18 }}
                  >
                    {number}
                  </span>
                </div>
                <h3
                  className="text-[17px] font-semibold mb-2"
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)' }}
                >
                  {title}
                </h3>
                <p
                  className="text-[14px]"
                  style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}
                >
                  {description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 lg:py-24" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
        <div className="container mx-auto max-w-[800px]">
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
              Got Questions?
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-[36px] lg:text-[44px] font-bold mb-4"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)', lineHeight: 1.2 }}
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-[17px] max-w-[480px]"
              style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)', lineHeight: 1.75 }}
            >
              Everything you need to know before your first visit.
            </motion.p>
          </motion.div>

          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <Accordion type="single" collapsible className="flex flex-col gap-3">
              {faqs.map(({ q, a }, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="border rounded-xl px-6 overflow-hidden"
                  style={{ borderColor: 'var(--color-border)', backgroundColor: '#fff' }}
                >
                  <AccordionTrigger
                    className="text-left text-[15px] font-semibold py-5 hover:no-underline"
                    style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)' }}
                  >
                    {q}
                  </AccordionTrigger>
                  <AccordionContent
                    className="text-[14px] pb-5"
                    style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)', lineHeight: 1.75 }}
                  >
                    {a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className="flex justify-center mt-10"
          >
            <Link
              href="/specialists"
              className="inline-flex items-center gap-2 text-[14px] font-semibold transition-colors duration-150"
              style={{ fontFamily: 'var(--font-body)', color: 'var(--color-primary)' }}
            >
              Meet the specialists behind these treatments
              <ArrowRight size={15} strokeWidth={2.5} />
            </Link>
          </motion.div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
