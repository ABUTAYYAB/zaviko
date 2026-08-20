'use client';

import { FC, useState } from 'react';
import { motion } from 'framer-motion';
import { CAPABILITY_STACKS } from '@/data';
import SectionTitle from '@/components/ui/SectionTitle';
import SectionOpacity from '@/components/ui/SectionOpacity';
import { Cpu, Terminal, Shield, Sparkles, Check, Server, Globe, Database } from 'lucide-react';

const ICONS = [Globe, Server, Cpu, Database];

const Capabilities: FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="capabilities" className="relative z-10 border-t border-stroke bg-bg-2/60 py-20 sm:py-28 backdrop-blur-md">
      <SectionOpacity>
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          {/* Header */}
          <div className="flex flex-col justify-between gap-6 border-b border-stroke pb-8 md:flex-row md:items-end">
            <div>
              <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-primary">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Technical Credibility &amp; Infrastructure</span>
              </div>
              <SectionTitle title="CAPABILITIES." classes="mt-2 text-left" />
            </div>

            <p className="max-w-md text-sm text-text-2 sm:text-base">
              Engineered with modern, type-safe, resilient technologies. We don’t chase hype — we select the best tool for latency, scale, and long-term maintainability.
            </p>
          </div>

          {/* Interactive Stack Grid */}
          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
            {/* Category Selectors (Left 5 cols) */}
            <div className="lg:col-span-5 space-y-3">
              {CAPABILITY_STACKS.map((stack, idx) => {
                const IconComponent = ICONS[idx % ICONS.length];
                const isActive = activeCategory === idx;

                return (
                  <button
                    key={stack.category}
                    onClick={() => setActiveCategory(idx)}
                    className={`group flex w-full items-start space-x-4 rounded-2xl border p-5 text-left transition-all duration-300 ${
                      isActive
                        ? 'border-primary/80 bg-bg-card shadow-[0_0_25px_rgba(204,194,220,0.15)]'
                        : 'border-stroke bg-bg-1/60 hover:border-stroke-light hover:bg-bg-card/50'
                    }`}
                  >
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-colors ${
                        isActive
                          ? 'border-primary bg-primary/10 text-primary'
                          : 'border-stroke bg-bg-2 text-text-3 group-hover:text-text-1'
                      }`}
                    >
                      <IconComponent className="h-5 w-5" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4
                          className={`font-mono text-base font-bold transition-colors ${
                            isActive ? 'text-primary' : 'text-text-1 group-hover:text-text-1'
                          }`}
                        >
                          {stack.category}
                        </h4>
                        <span className="font-mono text-xs text-text-3">0{idx + 1}</span>
                      </div>
                      <p className="mt-1 text-xs text-text-3">{stack.description}</p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Expanded Stack Visualizer (Right 7 cols) */}
            <div className="lg:col-span-7">
              <div className="h-full rounded-3xl border border-stroke-light bg-bg-card p-6 shadow-2xl backdrop-blur-xl sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between border-b border-stroke pb-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <Terminal className="h-4 w-4 text-primary" />
                      <span className="font-mono text-xs uppercase tracking-wider text-text-2">
                        {CAPABILITY_STACKS[activeCategory].category} Architecture
                      </span>
                    </div>
                    <span className="rounded-full border border-emerald-500/30 bg-emerald-950/40 px-2.5 py-0.5 font-mono text-[10px] text-emerald-400">
                      Strict Production Standard
                    </span>
                  </div>

                  <p className="text-sm text-text-2 sm:text-base leading-relaxed">
                    {CAPABILITY_STACKS[activeCategory].description}. We enforce strict type-safety, 100% test coverage on critical business logic, and continuous observability.
                  </p>

                  <div className="mt-6 space-y-3">
                    <span className="text-xs font-mono uppercase tracking-wider text-text-3">
                      Production Stack &amp; Tooling
                    </span>
                    <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                      {CAPABILITY_STACKS[activeCategory].skills.map((skill) => (
                        <div
                          key={skill}
                          className="flex items-center space-x-2 rounded-xl border border-stroke bg-bg-1/80 px-3.5 py-2.5 font-mono text-xs text-text-1 transition-all hover:border-primary hover:bg-bg-1"
                        >
                          <Check className="h-3.5 w-3.5 text-primary shrink-0" />
                          <span className="truncate">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Quality Guarantees Strip */}
                <div className="mt-8 grid grid-cols-2 gap-3 border-t border-stroke pt-6 sm:grid-cols-3">
                  <div className="flex flex-col">
                    <span className="font-mono text-xs font-bold text-text-1">Sub-100ms API</span>
                    <span className="text-[11px] text-text-3">Edge Cached SLA</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-xs font-bold text-emerald-400">100% Type-Safe</span>
                    <span className="text-[11px] text-text-3">Strict TypeScript</span>
                  </div>
                  <div className="hidden sm:flex flex-col">
                    <span className="font-mono text-xs font-bold text-cyan-400">Zero-Lockin</span>
                    <span className="text-[11px] text-text-3">100% IP Transfer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionOpacity>
    </section>
  );
};

export default Capabilities;
