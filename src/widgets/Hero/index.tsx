'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useFloatingImages from '@/composables/useFloatingImages';
import { useScroll, useTransform, motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { AGENCY_INFO, TRUST_METRICS } from '@/data';
import { ArrowDown, ArrowUpRight, Sparkles, Terminal, Activity, Zap } from 'lucide-react';
import { main_1, main_2, main_3 } from './images/index';

const Hero = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const refCard1 = useRef(null);
  const refCard2 = useRef(null);

  const { manageMouseMove } = useFloatingImages(ref1, ref2, ref3, refCard1, refCard2);

  const heroContainer = useRef(null);
  const heading1 = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroContainer,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const yTranslate = useTransform(scrollYProgress, [0, 0.6], [0, -80]);

  const scrollToWork = () => {
    const el = document.getElementById('work');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="main"
      ref={heroContainer}
      onMouseMove={manageMouseMove}
      className="relative flex min-h-screen w-full flex-col justify-between overflow-hidden bg-bg-1 pt-28 pb-12 sm:pt-36 sm:pb-16"
    >
      {/* Background Parallax Frames (Preserving Original Soul) */}
      <div
        ref={ref1}
        className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-40 mix-blend-screen transition-transform duration-700"
      >
        <Image
          src={main_1}
          fill
          alt=""
          priority
          className="object-cover object-center"
        />
      </div>

      <div
        ref={ref2}
        className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-25 mix-blend-screen transition-transform duration-700"
      >
        <Image
          src={main_2}
          fill
          alt=""
          priority
          className="object-cover object-center"
        />
      </div>

      <div
        ref={ref3}
        className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-35 mix-blend-screen transition-transform duration-700"
      >
        <Image
          src={main_3}
          fill
          alt=""
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Floating Interactive Product Layer 1 (Left - Live Agent/Terminal Fragment) */}
      <div
        ref={refCard1}
        className="pointer-events-none absolute left-8 top-1/3 z-10 hidden xl:block w-72 rounded-xl border border-stroke-light/60 bg-bg-2/80 p-4 shadow-2xl backdrop-blur-xl transition-transform duration-500"
      >
        <div className="flex items-center justify-between border-b border-stroke/60 pb-2.5 mb-3">
          <div className="flex items-center space-x-1.5">
            <div className="h-2 w-2 rounded-full bg-rose-500/80" />
            <div className="h-2 w-2 rounded-full bg-amber-500/80" />
            <div className="h-2 w-2 rounded-full bg-emerald-500/80" />
          </div>
          <div className="flex items-center space-x-1 font-mono text-[10px] text-text-3">
            <Terminal className="h-3 w-3 text-primary" />
            <span>zaviko-agent.ts</span>
          </div>
        </div>
        <div className="space-y-1.5 font-mono text-[11px] leading-relaxed">
          <p className="text-text-3">{`// Initializing multi-agent pipeline`}</p>
          <p className="text-primary">const agent = new ZavikoEngine(&#123;</p>
          <p className="text-emerald-400 pl-3">model: &apos;claude-3-7-sonnet&apos;,</p>
          <p className="text-cyan-400 pl-3">latency: &apos;&lt;12ms&apos;,</p>
          <p className="text-violet-400 pl-3">autonomous: true</p>
          <p className="text-primary">&#125;);</p>
          <div className="mt-2 flex items-center space-x-1 text-[10px] text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Telemetry streaming 120 FPS</span>
          </div>
        </div>
      </div>

      {/* Floating Interactive Product Layer 2 (Right - Performance Gauge Fragment) */}
      <div
        ref={refCard2}
        className="pointer-events-none absolute right-8 top-1/2 z-10 hidden xl:block w-64 rounded-xl border border-stroke-light/60 bg-bg-2/80 p-4 shadow-2xl backdrop-blur-xl transition-transform duration-500"
      >
        <div className="flex items-center justify-between border-b border-stroke/60 pb-2 mb-2.5">
          <span className="font-mono text-[10px] uppercase text-text-3">Core Performance</span>
          <span className="rounded bg-emerald-950/60 px-1.5 py-0.5 font-mono text-[10px] text-emerald-400">
            OPTIMAL
          </span>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="text-text-2">Lighthouse Score</span>
            <span className="font-mono font-bold text-emerald-400">99 / 100</span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-bg-3">
            <div className="h-full w-[99%] rounded-full bg-gradient-to-r from-primary to-emerald-400" />
          </div>
          <div className="flex items-center justify-between pt-1 text-[10px] text-text-3 font-mono">
            <span className="flex items-center space-x-1">
              <Activity className="h-3 w-3 text-cyan-400" />
              <span>Edge Cached</span>
            </span>
            <span>0.04s FCP</span>
          </div>
        </div>
      </div>

      {/* Main Hero Center Content */}
      <motion.div
        style={{ opacity, y: yTranslate }}
        className="relative z-20 mx-auto flex max-w-6xl flex-1 flex-col items-center justify-center px-5 text-center sm:px-8"
      >
        {/* Eyebrow Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center space-x-2 rounded-full border border-stroke-light bg-bg-2/90 px-4 py-1.5 text-xs font-mono tracking-wider text-text-2 shadow-lg backdrop-blur-md"
        >
          <Sparkles className="h-3.5 w-3.5 text-primary animate-pulse" />
          <span className="uppercase text-text-1">DIGITAL PRODUCTS &bull; AI SYSTEMS &bull; AUTOMATION</span>
        </motion.div>

        {/* Monumental Headline */}
        <motion.h1
          ref={heading1}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-5xl text-4xl font-extrabold tracking-tight text-text-1 sm:text-6xl md:text-7xl lg:text-8xl leading-[1.04]"
        >
          ENGINEERING DIGITAL EXPERIENCES{' '}
          <span className="bg-gradient-to-r from-text-1 via-primary to-accent-glow bg-clip-text text-transparent">
            BUILT FOR WHAT&apos;S NEXT.
          </span>
        </motion.h1>

        {/* Sophisticated Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-6 max-w-2xl text-base font-normal leading-relaxed text-text-2 sm:text-lg md:text-xl text-balance"
        >
          Zaviko designs, engineers, and automates bespoke digital platforms — from high-performance web applications and mobile apps to intelligent AI systems and scalable commerce.
        </motion.p>

        {/* Action Button Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Button
            onClick={scrollToWork}
            variant="conic"
            size="lg"
            title="Explore Selected Work"
            icon={<ArrowDown className="h-4 w-4" />}
          />
          <Link href="/book">
            <Button
              variant="secondary"
              size="lg"
              title="Book Discovery Call"
              icon={<ArrowUpRight className="h-4 w-4 text-primary" />}
            />
          </Link>
        </motion.div>
      </motion.div>

      {/* Bottom Hero Trust & Metric Strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.55 }}
        className="relative z-20 mx-auto mt-12 w-full max-w-6xl px-5 sm:px-8"
      >
        <div className="grid grid-cols-2 gap-3 rounded-2xl border border-stroke/70 bg-bg-2/70 p-4 backdrop-blur-xl sm:grid-cols-4 sm:gap-4 sm:p-6">
          {TRUST_METRICS.map((metric, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-2 sm:items-start sm:text-left sm:p-0"
            >
              <span className="font-mono text-2xl font-bold tracking-tight text-text-1 sm:text-3xl lg:text-4xl">
                {metric.value}
              </span>
              <span className="mt-1 text-xs font-semibold text-text-2 sm:text-sm">
                {metric.label}
              </span>
              <span className="hidden text-[11px] text-text-3 sm:block">
                {metric.detail}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
