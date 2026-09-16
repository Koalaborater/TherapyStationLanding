'use client';

import { useCallback, useEffect, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { stagger, fadeUp } from '@/lib/animations';
import { Button } from '@/components/ui/button';

interface Testimonial {
  quote: string;
  name: string;
  condition: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      'After six months of chronic lower back pain, three sessions with the team had me walking without a limp. The personalised programme they built for me was completely different from anything I had tried before.',
    name: 'Rafiq Ahmed',
    condition: 'Chronic Back Pain',
  },
  {
    quote:
      'I tore my ACL playing football and was told I might never play competitively again. Therapy Station got me back on the pitch in four months. The team genuinely cares about your goals, not just your symptoms.',
    name: 'Tariq Hossain',
    condition: 'ACL Rehabilitation',
  },
  {
    quote:
      'Post-surgery recovery was something I dreaded, but the team made every session feel productive and encouraging. I regained full shoulder mobility three weeks ahead of schedule.',
    name: 'Nadia Islam',
    condition: 'Post-Surgery Recovery',
  },
  {
    quote:
      'I had been managing neck pain from desk work for years. Within two weeks of starting treatment the headaches stopped entirely. I only wish I had come sooner.',
    name: 'Sumaya Chowdhury',
    condition: 'Neck & Shoulder Pain',
  },
  {
    quote:
      'The neurological rehab programme for my mother after her stroke was exceptional. The therapists were patient, knowledgeable, and incredibly compassionate throughout the entire process.',
    name: 'Karim Uddin',
    condition: 'Neurological Rehabilitation',
  },
  {
    quote:
      'Modern equipment, clean facilities, and therapists who actually explain what they are doing and why. Therapy Station is a cut above every other clinic I have visited in Dhaka.',
    name: 'Lamiya Begum',
    condition: 'Sports Rehabilitation',
  },
];

function StarRating() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={15}
          fill="var(--color-primary)"
          strokeWidth={0}
          style={{ color: 'var(--color-primary)' }}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 1 },
    },
  });
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoplay = useCallback(() => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      emblaApi?.scrollNext();
    }, 4000);
  }, [emblaApi]);

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    startAutoplay();
    return () => stopAutoplay();
  }, [emblaApi, startAutoplay, stopAutoplay]);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
    startAutoplay();
  }, [emblaApi, startAutoplay]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
    startAutoplay();
  }, [emblaApi, startAutoplay]);

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
            style={{ fontFamily: 'var(--font-body)', color: 'var(--color-primary)' }}
          >
            Patient Stories
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
            What Our Patients Say
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
            Real stories from real patients who got their lives back with the help of our specialists.
          </motion.p>
        </motion.div>

        {/* Carousel */}
        <div
          className="overflow-hidden"
          ref={emblaRef}
          onMouseEnter={stopAutoplay}
          onMouseLeave={startAutoplay}
        >
          <div className="flex gap-6">
            {testimonials.map(({ quote, name, condition }) => (
              <div
                key={name}
                className="flex-none w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white rounded-2xl border p-8 flex flex-col gap-5"
                style={{
                  borderColor: 'var(--color-border)',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                {/* Quote mark */}
                <div
                  className="text-[64px] font-serif leading-none select-none -mb-2"
                  style={{
                    color: 'var(--color-primary-light)',
                    fontFamily: 'Georgia, serif',
                    lineHeight: 1,
                  }}
                >
                  &ldquo;
                </div>

                {/* Quote */}
                <p
                  className="text-[15px] italic flex-1"
                  style={{
                    fontFamily: 'var(--font-body)',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.8,
                  }}
                >
                  {quote}
                </p>

                <div className="flex flex-col gap-2 pt-2 border-t" style={{ borderColor: 'var(--color-border)' }}>
                  <StarRating />
                  <span
                    className="text-[15px] font-semibold"
                    style={{
                      fontFamily: 'var(--font-display)',
                      color: 'var(--color-text-primary)',
                    }}
                  >
                    {name}
                  </span>
                  <span
                    className="inline-flex w-fit text-[12px] font-medium px-2.5 py-0.5 rounded-full"
                    style={{
                      backgroundColor: 'var(--color-primary-light)',
                      color: 'var(--color-primary)',
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    {condition}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <Button
            variant="outline"
            size="icon"
            onClick={scrollPrev}
            aria-label="Previous testimonial"
            className="rounded-full w-10 h-10"
            style={{ borderColor: 'var(--color-border)' }}
          >
            <ChevronLeft size={18} />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={scrollNext}
            aria-label="Next testimonial"
            className="rounded-full w-10 h-10"
            style={{ borderColor: 'var(--color-border)' }}
          >
            <ChevronRight size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
}
