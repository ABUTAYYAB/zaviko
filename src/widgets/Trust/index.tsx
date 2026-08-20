'use client';

import { FC } from 'react';
import { CLIENT_LOGOS } from '@/data';
import { ShieldCheck, Cpu, Code2, Sparkles } from 'lucide-react';

const Trust: FC = () => {
  return (
    <section className="relative z-10 border-y border-stroke bg-bg-2/50 py-12 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-6 flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-text-3">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span>Powering ambitious teams globally</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-text-3">
            <div className="flex items-center space-x-1.5 text-text-2">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
              <span>Production-Grade Security</span>
            </div>
            <div className="hidden sm:flex items-center space-x-1.5 text-text-2">
              <Cpu className="h-3.5 w-3.5 text-cyan-400" />
              <span>Edge & AI Optimized</span>
            </div>
            <div className="hidden md:flex items-center space-x-1.5 text-text-2">
              <Code2 className="h-3.5 w-3.5 text-primary" />
              <span>100% In-House Engineering</span>
            </div>
          </div>
        </div>

        {/* Infinite Logo Marquee */}
        <div className="relative overflow-hidden py-4">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-bg-1 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-bg-1 to-transparent" />

          <div className="flex w-max animate-marquee space-x-12 sm:space-x-16">
            {[...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, idx) => (
              <div
                key={idx}
                className="group flex items-center space-x-3 rounded-xl border border-stroke/50 bg-bg-card/40 px-5 py-3 transition-all duration-300 hover:border-stroke-light hover:bg-bg-card"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-stroke-light bg-bg-1 font-mono text-xs font-bold text-primary group-hover:text-white">
                  {logo.ticker.slice(0, 2)}
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-sm font-semibold tracking-tight text-text-1 group-hover:text-primary transition-colors">
                    {logo.name}
                  </span>
                  <span className="text-[10px] text-text-3 font-mono">
                    {logo.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
