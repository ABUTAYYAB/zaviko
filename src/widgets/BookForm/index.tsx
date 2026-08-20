'use client';

import { useRouter } from 'next/navigation';
import { FC, FormEvent, useState } from 'react';
import Link from 'next/link';
import { BOOK_FORM_DEFAULT_STATE, INPUT_FIELDS, RADIO_FIELDS, AGENCY_INFO } from '@/data';
import Button from '@/components/ui/Button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/RadioGroup';
import { ArrowLeft, CheckCircle2, Sparkles, Send, Calendar, ShieldCheck, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

interface Props {}

const BookForm: FC<Props> = () => {
  const [form, setForm] = useState(BOOK_FORM_DEFAULT_STATE);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { push } = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate async submission payload
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="mx-auto max-w-2xl rounded-3xl border border-stroke-light bg-bg-card/90 p-8 text-center shadow-2xl backdrop-blur-2xl sm:p-12"
      >
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-500/30 bg-emerald-950/40 text-emerald-400">
          <CheckCircle2 className="h-8 w-8" />
        </div>

        <h2 className="mt-6 text-2xl font-bold tracking-tight text-text-1 sm:text-3xl">
          Inquiry Received Successfully
        </h2>

        <p className="mt-3 text-sm text-text-2 sm:text-base leading-relaxed">
          Thank you for reaching out to <span className="text-primary font-semibold">{AGENCY_INFO.name}</span>. Our engineering leads will review your project scope and respond with an architecture overview and next steps within <span className="text-emerald-400 font-mono">24 hours</span>.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button
            onClick={() => push('/')}
            variant="secondary"
            title="Return to Home"
            icon={<ArrowLeft className="h-4 w-4" />}
          />
          <a
            href={`mailto:${AGENCY_INFO.email}?subject=Direct Follow-Up: ${encodeURIComponent(form.company || form.first || 'Project Inquiry')}`}
          >
            <Button
              variant="conic"
              title="Email Directly"
              icon={<Mail className="h-4 w-4" />}
            />
          </a>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      {/* Back Button & Header */}
      <div className="mb-10 text-center relative">
        <Link
          href="/"
          className="group absolute left-0 top-0 inline-flex items-center space-x-2 rounded-full border border-stroke bg-bg-2 px-4 py-2 text-xs font-mono text-text-2 transition-all hover:border-primary hover:text-text-1"
        >
          <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
          <span className="hidden sm:inline">Back</span>
        </Link>

        <div className="inline-flex items-center space-x-2 rounded-full border border-stroke-light bg-bg-2/80 px-3.5 py-1 font-mono text-[11px] text-text-2 mb-4">
          <Sparkles className="h-3 w-3 text-primary" />
          <span className="uppercase">{AGENCY_INFO.badge}</span>
        </div>

        <h1 className="text-3xl font-extrabold tracking-tight text-text-1 sm:text-4xl md:text-5xl">
          Project Inquiry &amp; Scope
        </h1>

        <p className="mt-3 text-sm text-text-2 sm:text-base max-w-xl mx-auto">
          Tell us about your product goals, timeline, and requirements. We will analyze your scope and respond with an architecture assessment within 24 hours.
        </p>
      </div>

      {/* Main Form Container */}
      <form
        onSubmit={handleSubmit}
        className="rounded-3xl border border-stroke bg-bg-card/80 p-6 shadow-2xl backdrop-blur-xl sm:p-10 space-y-10"
      >
        {/* Step 1: Radio Question Matrix */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {RADIO_FIELDS.map((item) => (
            <div key={item.title} className="space-y-3">
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-text-1">
                {item.title}
              </h3>
              <RadioGroup
                defaultValue={form[item.formKey as keyof typeof form] as string}
                onValueChange={(value) =>
                  setForm((prev) => ({ ...prev, [item.formKey]: value }))
                }
                className="space-y-2"
                required
              >
                {item.radioArray.map((radio) => (
                  <label
                    key={radio.value}
                    htmlFor={`${item.formKey}-${radio.value}`}
                    className="flex cursor-pointer items-center space-x-3 rounded-xl border border-stroke bg-bg-2/70 p-3 text-xs text-text-2 transition-all hover:border-stroke-light hover:bg-bg-2"
                  >
                    <RadioGroupItem
                      value={radio.value}
                      id={`${item.formKey}-${radio.value}`}
                      required
                    />
                    <span className="font-mono text-xs text-text-1">{radio.name}</span>
                  </label>
                ))}
              </RadioGroup>
            </div>
          ))}
        </div>

        {/* Step 2: Contact Information Input Fields */}
        <div className="border-t border-stroke pt-8 space-y-6">
          <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-text-1">
            Your Information &amp; Project Coordinates
          </h3>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {INPUT_FIELDS.map((field) => (
              <div
                key={field.name}
                className={`space-y-1.5 ${field.name === 'websiteUrl' ? 'sm:col-span-2' : ''}`}
              >
                <label
                  htmlFor={field.name}
                  className="block text-xs font-mono text-text-3"
                >
                  {field.label} {field.required && <span className="text-rose-400">*</span>}
                </label>
                <input
                  type={field.type || 'text'}
                  name={field.name}
                  id={field.name}
                  required={field.required}
                  placeholder={field.placeholder}
                  onChange={({ target: { name, value } }) =>
                    setForm((prev) => ({ ...prev, [name]: value }))
                  }
                  className="w-full rounded-xl border border-stroke bg-bg-2 px-4 py-3 font-mono text-xs text-text-1 placeholder-text-3 transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50"
                />
              </div>
            ))}
          </div>

          {/* Project Details Textarea */}
          <div className="space-y-1.5">
            <label htmlFor="message" className="block text-xs font-mono text-text-3">
              Project Description / Specific Requirements (Optional)
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Describe your product concept, target audience, core features, and any technical preferences..."
              onChange={({ target: { name, value } }) =>
                setForm((prev) => ({ ...prev, [name]: value }))
              }
              className="w-full resize-none rounded-xl border border-stroke bg-bg-2 p-4 font-mono text-xs text-text-1 placeholder-text-3 transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50"
            />
          </div>
        </div>

        {/* Submit Button & Guarantees */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-stroke pt-6 sm:flex-row">
          <div className="flex items-center space-x-2 text-xs font-mono text-text-3">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            <span>Strict NDA &bull; 100% Confidential</span>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            variant="conic"
            size="lg"
            title={isSubmitting ? 'Submitting Scope...' : 'Submit Project Inquiry'}
            icon={<Send className="h-4 w-4" />}
          />
        </div>
      </form>
    </div>
  );
};

export default BookForm;
