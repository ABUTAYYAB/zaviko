'use client';

import { FC, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sparkles, CheckCircle2 } from 'lucide-react';

interface Props {
  card: {
    id: string;
    number: string;
    title: string;
    subtitle: string;
    description: string;
    services: string[][];
    technologies: string[];
    highlight: string;
    classes?: string;
  };
}

const ServiceCard: FC<Props> = ({ card }) => {
  const { title, subtitle, services, description, number, technologies, highlight, classes } = card;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`group relative border-b border-stroke py-12 transition-all duration-300 hover:border-stroke-light sm:py-16 ${classes}`}
    >
      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-start">
        {/* Title & Subtitle */}
        <div className="flex-1 space-y-2">
          <div className="flex items-center space-x-3">
            <span className="font-mono text-sm font-bold text-primary sm:text-base">
              {number}
            </span>
            <span className="h-px w-8 bg-stroke-light group-hover:w-14 group-hover:bg-primary transition-all duration-300" />
            <span className="font-mono text-xs text-text-3 uppercase tracking-wider">
              Service Pillar
            </span>
          </div>

          <h3 className="text-3xl font-light tracking-tight text-text-1 sm:text-4xl md:text-5xl lg:text-6xl group-hover:text-primary transition-colors">
            {title}
          </h3>

          <p className="max-w-xl text-sm font-medium text-text-3 sm:text-base">
            {subtitle}
          </p>
        </div>

        {/* Action Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          className="inline-flex items-center space-x-2 self-start rounded-full border border-stroke bg-bg-2 px-4 py-2 text-xs font-mono text-text-2 transition-all duration-300 hover:border-primary hover:text-text-1"
        >
          <span>{isOpen ? 'Close Scope' : 'Explore Deliverables'}</span>
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-300 ${
              isOpen ? 'rotate-180 text-primary' : ''
            }`}
          />
        </button>
      </div>

      {/* Services Tag Grid & Description */}
      <div className="relative mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
        {/* Services List Matrix */}
        <div className="lg:col-span-6 space-y-4">
          <div className="flex flex-col space-y-3">
            {services.map((row: string[], rowIdx: number) => (
              <ul key={rowIdx} className="flex flex-wrap items-center gap-x-6 gap-y-2">
                {row.map((item) => (
                  <li key={item} className="flex items-center space-x-2 text-sm font-semibold text-text-2 sm:text-base">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ))}
          </div>

          {/* Highlight banner */}
          <div className="mt-4 flex items-center space-x-2 rounded-xl border border-stroke/60 bg-bg-card/60 px-4 py-2.5 text-xs text-text-2 font-mono">
            <Sparkles className="h-3.5 w-3.5 text-primary flex-shrink-0" />
            <span>{highlight}</span>
          </div>
        </div>

        {/* Description & Giant Aesthetic Background Number */}
        <div className="relative lg:col-span-6 flex flex-col justify-between">
          <p className="relative z-10 text-sm leading-relaxed text-text-2 sm:text-base">
            {description}
          </p>

          {/* Preserved Signature Giant Background Number */}
          <div
            aria-hidden="true"
            className="pointer-events-none select-none font-mono text-7xl font-extrabold tracking-tighter text-stroke/40 sm:text-8xl md:text-9xl lg:text-[140px] opacity-25 group-hover:opacity-40 transition-opacity duration-500 text-right -mt-8 sm:-mt-12"
          >
            {number}
          </div>
        </div>
      </div>

      {/* Expandable Interactive Detail Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-stroke/70 mt-8 pt-6"
          >
            <div className="grid grid-cols-1 gap-6 rounded-2xl border border-stroke-light bg-bg-2/80 p-6 backdrop-blur-xl md:grid-cols-2">
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-text-3">
                  Core Technologies
                </span>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-stroke bg-bg-1 px-3 py-1 font-mono text-xs text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-text-3">
                  Key Deliverables
                </span>
                <ul className="space-y-1.5 text-xs text-text-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                    <span>Complete Figma Design Systems &amp; Tokens</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                    <span>Clean, Modular, 100% Tested Production Code</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                    <span>Full IP Transfer &amp; Dedicated Deployment Support</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServiceCard;
