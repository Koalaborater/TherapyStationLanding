'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  CalendarDays,
  ArrowRight,
} from 'lucide-react';
import { slideLeft, slideRight } from '@/lib/animations';
import PageHero from '@/components/sections/PageHero';
import CTABanner from '@/components/sections/CTABanner';

const hours = [
  { day: 'Saturday – Thursday', time: '11:00 am – 9:00 pm' },
  { day: 'Friday', time: 'Closed' },
];

/* ─── page ──────────────────────────────────────────────────── */

export default function ContactPage() {
  return (
    <>
      <PageHero
        badge="GET IN TOUCH"
        title="Start Your Recovery Today"
        subtitle="Reach out and our team will get back to you within one business day."
      />

      <section className="py-14 lg:py-24" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="container mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

            {/* ── Left: Quick actions ─────────────────────── */}
            <motion.div
              variants={slideLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="flex flex-col gap-6"
            >
              <div>
                <h2
                  className="text-[28px] font-bold mb-2"
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)' }}
                >
                  Ready to Get Started?
                </h2>
                <p
                  className="text-[15px]"
                  style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}
                >
                  Book an appointment online, or reach us directly by phone, WhatsApp, or email — our team responds within one business day.
                </p>
              </div>

              {/* Book Appointment — primary card */}
              <Link
                href="/book"
                className="group flex items-center justify-between gap-4 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                style={{ background: 'var(--gradient-cta)', boxShadow: 'var(--shadow-lg)' }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="flex items-center justify-center w-12 h-12 rounded-xl flex-shrink-0"
                    style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}
                  >
                    <CalendarDays size={22} strokeWidth={2} color="#fff" />
                  </div>
                  <div>
                    <p
                      className="text-[17px] font-semibold text-white"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      Book an Appointment
                    </p>
                    <p
                      className="text-[13px]"
                      style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.75)' }}
                    >
                      Fill in a short form — confirmed within 24 hours
                    </p>
                  </div>
                </div>
                <ArrowRight
                  size={20}
                  strokeWidth={2.5}
                  color="#fff"
                  className="transition-transform duration-150 group-hover:translate-x-1 flex-shrink-0"
                />
              </Link>

              {/* Call / WhatsApp / Email — secondary actions */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  {
                    icon: Phone,
                    label: 'Call Us',
                    value: '01348-134933',
                    href: 'tel:+8801348134933',
                  },
                  {
                    icon: MessageCircle,
                    label: 'WhatsApp',
                    value: 'Message us',
                    href: 'https://wa.me/8801348134933',
                  },
                  {
                    icon: Mail,
                    label: 'Email',
                    value: 'Send an email',
                    href: 'mailto:therapystationbd@gmail.com',
                  },
                ].map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex flex-col items-center text-center gap-2 p-5 rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lg)]"
                    style={{ borderColor: 'var(--color-border)' }}
                  >
                    <div
                      className="flex items-center justify-center w-10 h-10 rounded-lg"
                      style={{ backgroundColor: 'var(--color-primary-light)' }}
                    >
                      <Icon size={18} strokeWidth={2} style={{ color: 'var(--color-primary)' }} />
                    </div>
                    <p
                      className="text-[12px] font-semibold uppercase tracking-wider"
                      style={{ fontFamily: 'var(--font-body)', color: 'var(--color-primary)' }}
                    >
                      {label}
                    </p>
                    <p
                      className="text-[13px]"
                      style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}
                    >
                      {value}
                    </p>
                  </a>
                ))}
              </div>

              {/* Address */}
              <div
                className="flex items-start gap-4 p-5 rounded-xl border"
                style={{ borderColor: 'var(--color-border)' }}
              >
                <div
                  className="flex items-center justify-center w-10 h-10 rounded-lg flex-shrink-0"
                  style={{ backgroundColor: 'var(--color-primary-light)' }}
                >
                  <MapPin size={18} strokeWidth={2} style={{ color: 'var(--color-primary)' }} />
                </div>
                <div>
                  <p
                    className="text-[12px] font-semibold uppercase tracking-wider mb-1"
                    style={{ fontFamily: 'var(--font-body)', color: 'var(--color-primary)' }}
                  >
                    Address
                  </p>
                  <p
                    className="text-[15px] whitespace-pre-line"
                    style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-primary)', lineHeight: 1.6 }}
                  >
                    Assets Snowdrops, Flat# A2 (Lift: 2){'\n'}House# 78, Road# 11, Block# M{'\n'}Banani, Dhaka-1213, Bangladesh
                  </p>
                </div>
              </div>

              {/* Opening hours */}
              <div
                className="p-5 rounded-xl border"
                style={{ borderColor: 'var(--color-border)' }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="flex items-center justify-center w-10 h-10 rounded-lg flex-shrink-0"
                    style={{ backgroundColor: 'var(--color-primary-light)' }}
                  >
                    <Clock size={18} strokeWidth={2} style={{ color: 'var(--color-primary)' }} />
                  </div>
                  <p
                    className="text-[12px] font-semibold uppercase tracking-wider"
                    style={{ fontFamily: 'var(--font-body)', color: 'var(--color-primary)' }}
                  >
                    Opening Hours
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  {hours.map(({ day, time }) => (
                    <div key={day} className="flex justify-between items-center">
                      <span
                        className="text-[14px]"
                        style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}
                      >
                        {day}
                      </span>
                      <span
                        className="text-[14px] font-semibold"
                        style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-primary)' }}
                      >
                        {time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* ── Right: Find Us ───────────────────────────── */}
            <motion.div
              variants={slideRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="flex flex-col gap-6"
            >
              <h2
                className="text-[28px] font-bold mb-2"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)' }}
              >
                Find Us
              </h2>

              {/* Map */}
              <div
                className="rounded-xl overflow-hidden border relative"
                style={{ borderColor: 'var(--color-border)' }}
              >
                <iframe
                  src="https://www.google.com/maps?q=Therapy+Station+Banani&output=embed"
                  className="w-full h-72 block"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Therapy Station location on Google Maps"
                />
              </div>
              <a
                href="https://share.google/yLZcbFugmRNGq9gAM"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-[14px] font-semibold py-3 rounded-xl border transition-colors duration-150"
                style={{
                  fontFamily: 'var(--font-body)',
                  color: 'var(--color-primary)',
                  borderColor: 'var(--color-border)',
                }}
              >
                <MapPin size={16} strokeWidth={2} />
                Get Directions on Google Maps
              </a>

              {/* Other locations */}
              <div
                className="p-5 rounded-xl border"
                style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-bg-secondary)' }}
              >
                <p
                  className="text-[12px] font-semibold uppercase tracking-wider mb-3"
                  style={{ fontFamily: 'var(--font-body)', color: 'var(--color-primary)' }}
                >
                  Also Serving
                </p>
                <div className="flex flex-col gap-3">
                  <div>
                    <p
                      className="text-[14px] font-semibold"
                      style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)' }}
                    >
                      Therapy Station — Shantinagar
                    </p>
                    <p
                      className="text-[13px]"
                      style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}
                    >
                      Novel House, 137 Shantinagar, 9th Floor, Dhaka-1217
                    </p>
                  </div>
                  <div>
                    <p
                      className="text-[14px] font-semibold"
                      style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)' }}
                    >
                      Nasir Physiotherapy — Basabo
                    </p>
                    <p
                      className="text-[13px]"
                      style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}
                    >
                      43 East Basabo, Kodomtola, Ground Floor, Dhaka-1214
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
