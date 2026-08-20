'use client';

import { FC, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS } from '@/data';
import SectionTitle from '@/components/ui/SectionTitle';
import SectionOpacity from '@/components/ui/SectionOpacity';
import { Quote, Sparkles, Star, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

const Testimonials: FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[activeIndex];

  return (
    <section id="testimonials" className="relative z-10 border-t border-stroke bg-bg-1 py-20 sm:py-28">
      <SectionOpacity>
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          {/* Header Row */}
          <div className="flex flex-col justify-between gap-6 border-b border-stroke pb-8 md:flex-row md:items-end">
            <div>
              <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-primary">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Client Outcomes &amp; Reputation</span>
              </div>
              <SectionTitle title="TESTIMONIALS." classes="mt-2 text-left" />
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center space-x-3">
              <span className="font-mono text-xs text-text-3">
                0{activeIndex + 1} / 0{TESTIMONIALS.length}
              </span>
              <button
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-bg-2 text-text-2 transition-all hover:border-primary hover:text-text-1"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={nextTestimonial}
                aria-label="Next testimonial"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-bg-2 text-text-2 transition-all hover:border-primary hover:text-text-1"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Featured Testimonial Card */}
          <div className="mt-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="relative overflow-hidden rounded-3xl border border-stroke-light bg-bg-card/80 p-8 shadow-2xl backdrop-blur-xl sm:p-12 lg:p-16"
              >
                <div className="pointer-events-none absolute right-8 top-8 opacity-10 text-primary">
                  <Quote className="h-32 w-32" />
                </div>

                <div className="relative z-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12 items-center">
                  <div className="lg:col-span-8 space-y-6">
                    <div className="flex items-center space-x-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                      <span className="ml-2 font-mono text-xs text-text-3">Verified Project Review</span>
                    </div>

                    <blockquote className="text-xl font-light leading-relaxed text-text-1 sm:text-2xl md:text-3xl">
                      &ldquo;{current.quote}&rdquo;
                    </blockquote>

                    <div className="flex items-center space-x-4 pt-2">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-stroke-light bg-primary/20 font-mono text-sm font-bold text-primary">
                        {current.avatar}
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="font-mono text-base font-bold text-text-1">
                            {current.author}
                          </span>
                          <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                        </div>
                        <p className="text-xs text-text-3 font-mono">
                          {current.role} &bull; {current.company} ({current.industry})
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Measurable Impact Badge */}
                  <div className="lg:col-span-4 flex flex-col justify-center rounded-2xl border border-stroke bg-bg-2/90 p-6 backdrop-blur-md">
                    <span className="font-mono text-xs uppercase text-text-3">Validated Business Metric</span>
                    <span className="mt-2 font-mono text-2xl font-bold tracking-tight text-emerald-400 sm:text-3xl">
                      {current.metrics}
                    </span>
                    <span className="mt-1 text-xs text-text-3">
                      Production delivery benchmark achieved within 90 days of rollout.
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Quick Selectors Grid */}
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {TESTIMONIALS.map((t, idx) => (
              <button
                key={t.id}
                onClick={() => setActiveIndex(idx)}
                className={`flex flex-col rounded-2xl border p-4 text-left transition-all duration-300 ${
                  activeIndex === idx
                    ? 'border-primary bg-bg-card shadow-[0_0_20px_rgba(204,194,220,0.15)]'
                    : 'border-stroke bg-bg-2/50 hover:border-stroke-light hover:bg-bg-card/50'
                }`}
              >
                <span className="font-mono text-xs font-bold text-text-1 truncate">{t.author}</span>
                <span className="text-[11px] text-text-3 truncate">{t.company}</span>
              </button>
            ))}
          </div>
        </div>
      </SectionOpacity>
    </section>
  );
};

export default Testimonials;
