'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { CircleCheck } from 'lucide-react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { scaleIn } from '@/lib/animations';
import PageHero from '@/components/sections/PageHero';

/* ─── Formspree ────────────────────────────────────────────
   Replace with your real Formspree form endpoint
   (Formspree dashboard → your form → Integration → "Endpoint").
   Looks like: https://formspree.io/f/xxxxxxxx
──────────────────────────────────────────────────────────── */
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

/* ─── schema ─────────────────────────────────────────────── */

const schema = z.object({
  name: z.string().min(2, 'Please enter your full name'),
  age: z.preprocess(
    (val) => (val === '' || val === undefined ? undefined : Number(val)),
    z
      .number()
      .min(1, 'Please enter a valid age')
      .max(120, 'Please enter a valid age')
      .optional()
  ),
  gender: z.string().optional(),
  phone: z
    .string()
    .min(7, 'Please enter a valid phone number')
    .regex(/^[\d\s+\-()]+$/, 'Phone number contains invalid characters'),
  email: z
    .string()
    .email('Please enter a valid email address')
    .optional()
    .or(z.literal('')),
  whatsapp: z
    .string()
    .regex(/^[\d\s+\-()]*$/, 'WhatsApp number contains invalid characters')
    .optional()
    .or(z.literal('')),
  preferred_date: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const genderOptions = ['Male', 'Female', 'Other'];

const whatHappensNext = [
  'We review your request within 24 hours',
  'A member of our team calls or messages to confirm your slot',
  'You receive a written confirmation',
  'Arrive 10 minutes early for your first session',
];

/* ─── page ──────────────────────────────────────────────── */

export default function BookPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      age: undefined,
      gender: '',
      phone: '',
      email: '',
      whatsapp: '',
      preferred_date: '',
    },
  });

  async function onSubmit(data: FormData) {
    setSubmitting(true);
    setSubmitError(false);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Formspree request failed');
      setSubmitted(true);
    } catch {
      setSubmitError(true);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <PageHero
        badge="BOOK APPOINTMENT"
        title="Schedule Your Session"
        subtitle="Fill in the form below and we'll confirm your appointment within 24 hours"
      />

      <section className="py-14 lg:py-24" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="container mx-auto max-w-[1200px]">
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            className="max-w-2xl mx-auto"
          >
            <div
              className="rounded-2xl border p-8 md:p-10"
              style={{
                borderColor: 'var(--color-border)',
                boxShadow: 'var(--shadow-lg)',
                backgroundColor: '#fff',
              }}
            >
              {submitted ? (
                <div className="flex flex-col items-center text-center gap-5 py-10">
                  <div
                    className="flex items-center justify-center w-20 h-20 rounded-full"
                    style={{ backgroundColor: 'var(--color-primary-light)' }}
                  >
                    <CircleCheck
                      size={44}
                      strokeWidth={1.5}
                      style={{ color: 'var(--color-primary)' }}
                    />
                  </div>
                  <h2
                    className="text-[26px] font-bold"
                    style={{
                      fontFamily: 'var(--font-display)',
                      color: 'var(--color-text-primary)',
                    }}
                  >
                    Request Received — We'll Be in Touch Soon
                  </h2>
                  <p
                    className="text-[15px] max-w-[420px]"
                    style={{
                      fontFamily: 'var(--font-body)',
                      color: 'var(--color-text-secondary)',
                      lineHeight: 1.75,
                    }}
                  >
                    Thank you for booking with Therapy Station. A member of our
                    team will review your request and get back to you within 24
                    hours to confirm your appointment time.
                  </p>
                  <div
                    className="w-full max-w-sm rounded-xl p-5 mt-2 text-left"
                    style={{
                      backgroundColor: 'var(--color-bg-secondary)',
                      border: '1px solid var(--color-border)',
                    }}
                  >
                    <p
                      className="text-[12px] font-bold uppercase tracking-wider mb-4"
                      style={{
                        fontFamily: 'var(--font-body)',
                        color: 'var(--color-primary)',
                      }}
                    >
                      What happens next
                    </p>
                    <div className="flex flex-col gap-3">
                      {whatHappensNext.map((step, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <span
                            className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold text-white mt-0.5"
                            style={{ backgroundColor: 'var(--color-primary)' }}
                          >
                            {i + 1}
                          </span>
                          <span
                            className="text-[13px]"
                            style={{
                              fontFamily: 'var(--font-body)',
                              color: 'var(--color-text-secondary)',
                              lineHeight: 1.6,
                            }}
                          >
                            {step}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h2
                      className="text-[24px] font-bold mb-1"
                      style={{
                        fontFamily: 'var(--font-display)',
                        color: 'var(--color-text-primary)',
                      }}
                    >
                      Your Details
                    </h2>
                    <p
                      className="text-[14px]"
                      style={{
                        fontFamily: 'var(--font-body)',
                        color: 'var(--color-text-secondary)',
                      }}
                    >
                      Fields marked with * are required.
                    </p>
                  </div>

                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="flex flex-col gap-5"
                    >
                      {/* Name */}
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[13px] font-semibold">
                              Full Name *
                            </FormLabel>
                            <FormControl>
                              <Input placeholder="e.g. Rafiq Ahmed" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Age + Gender */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <FormField
                          control={form.control}
                          name="age"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-[13px] font-semibold">
                                Age
                              </FormLabel>
                              <FormControl>
                                <Input
                                  type="number"
                                  min={1}
                                  max={120}
                                  placeholder="e.g. 34"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="gender"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-[13px] font-semibold">
                                Gender
                              </FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                value={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {genderOptions.map((g) => (
                                    <SelectItem key={g} value={g}>
                                      {g}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Phone + WhatsApp */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-[13px] font-semibold">
                                Phone Number *
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="e.g. 01812-345678"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="whatsapp"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-[13px] font-semibold">
                                WhatsApp Number
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Leave blank if same as phone"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Email */}
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[13px] font-semibold">
                              Email Address
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="you@example.com"
                                type="email"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Preferred Date */}
                      <FormField
                        control={form.control}
                        name="preferred_date"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[13px] font-semibold">
                              Preferred Date
                            </FormLabel>
                            <FormControl>
                              <Input type="date" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {submitError && (
                        <div
                          className="flex flex-col items-center text-center gap-1.5 py-3 px-4 rounded-xl"
                          style={{ backgroundColor: 'rgba(220,38,38,0.06)' }}
                        >
                          <p
                            className="text-[13px] font-medium"
                            style={{ fontFamily: 'var(--font-body)', color: 'var(--color-error)' }}
                          >
                            Something went wrong sending your request.
                          </p>
                          <p
                            className="text-[13px]"
                            style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}
                          >
                            Please try again, or call us directly at{' '}
                            <a
                              href="tel:+8801348134933"
                              className="font-semibold underline"
                              style={{ color: 'var(--color-primary)' }}
                            >
                              01348-134933
                            </a>
                            .
                          </p>
                        </div>
                      )}

                      <Button
                        type="submit"
                        disabled={submitting}
                        className="w-full h-12 text-[15px] font-semibold rounded-full mt-1 text-white transition-all duration-200"
                        style={{
                          fontFamily: 'var(--font-body)',
                          backgroundColor: 'var(--color-primary)',
                        }}
                      >
                        {submitting ? 'Submitting…' : 'Book Appointment'}
                      </Button>
                    </form>
                  </Form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
