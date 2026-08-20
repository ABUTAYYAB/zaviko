'use client';

import { FC } from 'react';
import Image from 'next/image';
import SectionTitle from '@/components/ui/SectionTitle';
import SectionOpacity from '@/components/ui/SectionOpacity';
import { AGENCY_INFO } from '@/data';
import { Sparkles, Shield, Code2, Users, Cpu, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Button from '@/components/ui/Button';

interface Props {}

const PRINCIPLES = [
  {
    icon: Code2,
    title: 'Zero Compromise on Craft',
    description: 'We write strict, type-safe TypeScript with modular architecture and zero legacy debt. Every build is engineered to scale for years.',
  },
  {
    icon: Users,
    title: 'Direct Senior Access',
    description: 'No bloated agency layers or inexperienced junior handoffs. You collaborate directly with principal designers and lead engineers.',
  },
  {
    icon: Cpu,
    title: 'Modern AI & Edge Native',
    description: 'We integrate practical LLM workflows, serverless edge compute, and automated data pipelines that eliminate repetitive operations.',
  },
  {
    icon: Shield,
    title: 'Complete IP & Code Ownership',
    description: '100% of the source code, design systems, Figma tokens, and architecture belong to you upon milestone sign-off. Zero vendor lock-in.',
  },
];

const About: FC<Props> = () => {
  return (
    <section id="about" className="relative z-10 border-t border-stroke bg-bg-2/50 py-20 sm:py-28 backdrop-blur-md">
      <SectionOpacity>
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          {/* Header Row */}
          <div className="flex flex-col justify-between gap-6 border-b border-stroke pb-8 md:flex-row md:items-end">
            <div>
              <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-primary">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Studio DNA &amp; Philosophy</span>
              </div>
              <SectionTitle title="ABOUT ZAVIKO." classes="mt-2 text-left" />
            </div>

            <span className="font-mono text-xs text-text-3">
              EST. {AGENCY_INFO.location}
            </span>
          </div>

          {/* Manifesto Split Row */}
          <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-2xl font-light leading-snug tracking-tight text-text-1 sm:text-3xl md:text-4xl">
                We don’t just write code. We <span className="font-bold text-primary">architect and automate digital experiences</span> that make ambitious businesses perform at an entirely different level.
              </h3>

              <p className="text-sm leading-relaxed text-text-2 sm:text-base">
                Founded by engineers and product designers who grew frustrated with bloated, slow traditional agencies. Zaviko operates as an agile, elite special-forces engineering partner for founders and leaders who value extreme velocity, technical rigor, and exceptional design.
              </p>

              <div className="pt-2">
                <Link href="/book">
                  <Button
                    variant="conic"
                    size="sm"
                    title="Work With Our Studio"
                    icon={<ArrowUpRight className="h-4 w-4" />}
                  />
                </Link>
              </div>
            </div>

            {/* Preserved Signature Studio Image Card */}
            <div className="lg:col-span-5">
              <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-stroke-light bg-bg-card p-2 shadow-2xl transition-all duration-500 hover:border-primary/50">
                <div className="relative h-full w-full overflow-hidden rounded-2xl">
                  <Image
                    src="/images/hands_v2.jpg"
                    alt="Zaviko studio collaboration"
                    fill
                    className="object-cover object-center filter grayscale contrast-125 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-1/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-[11px] text-text-1 backdrop-blur-md rounded-xl border border-stroke/60 bg-bg-1/80 px-4 py-2">
                    <span>ZAVIKO // CRAFT &amp; DISCIPLINE</span>
                    <span className="text-primary font-bold">2026</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Core Studio Principles Grid */}
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PRINCIPLES.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-stroke bg-bg-card/70 p-6 backdrop-blur-xl transition-all duration-300 hover:border-stroke-light hover:bg-bg-card"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-stroke bg-bg-2 text-primary">
                    <IconComp className="h-5 w-5" />
                  </div>
                  <h4 className="mt-4 font-mono text-sm font-bold text-text-1">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-text-3">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </SectionOpacity>
    </section>
  );
};

export default About;
