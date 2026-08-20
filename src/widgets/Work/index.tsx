'use client';

import { FC, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FEATURED_PROJECTS } from '@/data';
import SectionTitle from '@/components/ui/SectionTitle';
import SectionOpacity from '@/components/ui/SectionOpacity';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import {
  ArrowUpRight,
  Sparkles,
  Activity,
  CheckCircle2,
  TrendingUp,
  Cpu,
  Layers,
  Terminal,
  ShoppingBag,
  Zap,
} from 'lucide-react';

const CATEGORIES = ['All Projects', 'AI Platform', 'Fintech', 'E-Commerce', 'Mobile & IoT', 'SaaS'];

const Work: FC = () => {
  const [activeFilter, setActiveFilter] = useState('All Projects');

  const filteredProjects = FEATURED_PROJECTS.filter((project) => {
    if (activeFilter === 'All Projects') return true;
    if (activeFilter === 'AI Platform') return project.category.includes('AI');
    if (activeFilter === 'Fintech') return project.industry.includes('Fintech');
    if (activeFilter === 'E-Commerce') return project.category.includes('Commerce');
    if (activeFilter === 'Mobile & IoT') return project.category.includes('Mobile') || project.category.includes('IoT');
    if (activeFilter === 'SaaS') return project.category.includes('SaaS');
    return true;
  });

  return (
    <section id="work" className="relative z-10 border-t border-stroke bg-bg-1 py-20 sm:py-28">
      <SectionOpacity>
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          {/* Section Header */}
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-primary">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Selected Deliverables // 2024 — 2026</span>
              </div>
              <SectionTitle title="SELECTED WORK." classes="mt-2 text-left" />
            </div>

            <p className="max-w-md text-sm text-text-2 sm:text-base">
              Explore how we engineer custom software, AI agents, and digital products that solve high-stakes challenges and drive measurable revenue.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="mt-10 flex flex-wrap items-center gap-2 border-b border-stroke pb-6">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`rounded-full px-4 py-1.5 text-xs font-mono transition-all duration-300 ${
                  activeFilter === cat
                    ? 'border border-primary bg-primary/10 text-primary shadow-[0_0_15px_rgba(204,194,220,0.2)]'
                    : 'border border-stroke bg-bg-2 text-text-3 hover:border-stroke-light hover:text-text-1'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="mt-12 space-y-16">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => (
                <motion.article
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  key={project.id}
                  className="group relative overflow-hidden rounded-3xl border border-stroke bg-bg-card/70 p-6 backdrop-blur-xl transition-all duration-500 hover:border-stroke-light sm:p-8 lg:p-10"
                >
                  {/* Subtle Accent Glow */}
                  <div
                    className={`pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-gradient-to-br ${project.accentGradient} blur-3xl opacity-40 group-hover:opacity-70 transition-opacity duration-700`}
                  />

                  <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12 items-center">
                    {/* Left Column: Case Study Details */}
                    <div className="lg:col-span-6 space-y-6">
                      <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                        <span className="rounded-full border border-stroke-light bg-bg-2 px-3 py-1 text-primary">
                          {project.badge}
                        </span>
                        <span className="text-text-3">&bull;</span>
                        <span className="text-text-3">{project.industry}</span>
                        <span className="text-text-3">&bull;</span>
                        <span className="text-text-3">{project.year}</span>
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold tracking-tight text-text-1 sm:text-3xl lg:text-4xl group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="mt-1 text-sm font-medium text-text-3 sm:text-base">
                          {project.subtitle}
                        </p>
                      </div>

                      <p className="text-sm leading-relaxed text-text-2 sm:text-base">
                        {project.description}
                      </p>

                      {/* Impact Metrics Grid */}
                      <div className="grid grid-cols-3 gap-3 rounded-2xl border border-stroke/80 bg-bg-2/80 p-4">
                        {project.impact.map((metric, mIdx) => (
                          <div key={mIdx} className="flex flex-col">
                            <span className="font-mono text-lg font-bold text-text-1 sm:text-xl">
                              {metric.value}
                            </span>
                            <span className="text-[11px] text-text-3">
                              {metric.label}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack Tags */}
                      <div className="space-y-2">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-text-3">
                          Architecture & Stack
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-md border border-stroke/60 bg-bg-1/80 px-2.5 py-1 font-mono text-[11px] text-text-2"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-2">
                        <Link href="/book">
                          <Button
                            variant="secondary"
                            size="sm"
                            title="Request Case Study Deep-Dive"
                            icon={<ArrowUpRight className="h-3.5 w-3.5 text-primary" />}
                          />
                        </Link>
                      </div>
                    </div>

                    {/* Right Column: Visual Product Mockup Canvas */}
                    <div className="lg:col-span-6">
                      <div className="relative overflow-hidden rounded-2xl border border-stroke-light/70 bg-bg-1/90 shadow-2xl transition-all duration-500 group-hover:border-primary/40">
                        {/* Mockup Header Bar */}
                        <div className="flex items-center justify-between border-b border-stroke/80 bg-bg-2/90 px-4 py-2.5">
                          <div className="flex items-center space-x-1.5">
                            <div className="h-2.5 w-2.5 rounded-full bg-rose-500/70" />
                            <div className="h-2.5 w-2.5 rounded-full bg-amber-500/70" />
                            <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
                          </div>
                          <div className="rounded-md border border-stroke/60 bg-bg-1 px-3 py-0.5 font-mono text-[10px] text-text-3">
                            app.{project.id}.zaviko.cloud
                          </div>
                          <div className="flex items-center space-x-1 font-mono text-[10px] text-emerald-400">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            <span>120 FPS</span>
                          </div>
                        </div>

                        {/* Interactive UI Mockup Visualization */}
                        <div className="p-5 sm:p-6 min-h-[300px] flex flex-col justify-between">
                          {project.mockupType === 'health' && (
                            <div className="space-y-4">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                  <Activity className="h-4 w-4 text-violet-400" />
                                  <span className="text-xs font-mono font-semibold text-text-1">Aura AI Diagnostic Engine</span>
                                </div>
                                <span className="rounded-full border border-violet-500/30 bg-violet-950/40 px-2.5 py-0.5 font-mono text-[10px] text-violet-300">
                                  Model v4.2 Active
                                </span>
                              </div>

                              {/* Waveform Visualization */}
                              <div className="flex h-20 items-end space-x-1.5 rounded-xl border border-stroke bg-bg-2 p-3">
                                {[40, 65, 30, 85, 95, 45, 70, 60, 90, 100, 50, 75, 40, 80, 95, 60, 45, 85, 30, 90, 70, 50, 80, 40].map((h, i) => (
                                  <div
                                    key={i}
                                    style={{ height: `${h}%` }}
                                    className="flex-1 rounded-full bg-gradient-to-t from-violet-600 to-primary/80 transition-all duration-300"
                                  />
                                ))}
                              </div>

                              <div className="grid grid-cols-2 gap-3 pt-1">
                                <div className="rounded-xl border border-stroke bg-bg-2/80 p-3">
                                  <span className="text-[10px] font-mono text-text-3">Diagnostic Confidence</span>
                                  <p className="mt-1 font-mono text-lg font-bold text-emerald-400">99.4% Validated</p>
                                </div>
                                <div className="rounded-xl border border-stroke bg-bg-2/80 p-3">
                                  <span className="text-[10px] font-mono text-text-3">Telemetry Latency</span>
                                  <p className="mt-1 font-mono text-lg font-bold text-cyan-400">18ms Global</p>
                                </div>
                              </div>
                            </div>
                          )}

                          {project.mockupType === 'fintech' && (
                            <div className="space-y-4">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                  <TrendingUp className="h-4 w-4 text-cyan-400" />
                                  <span className="text-xs font-mono font-semibold text-text-1">Kroma Quantitative Order Book</span>
                                </div>
                                <span className="rounded-full border border-cyan-500/30 bg-cyan-950/40 px-2.5 py-0.5 font-mono text-[10px] text-cyan-300">
                                  Sub-Millisecond
                                </span>
                              </div>

                              {/* Order book chart mockup */}
                              <div className="space-y-2 rounded-xl border border-stroke bg-bg-2 p-3 font-mono text-[11px]">
                                <div className="flex justify-between text-text-3 text-[10px]">
                                  <span>PRICE (USDT)</span>
                                  <span>DEPTH</span>
                                  <span>TOTAL</span>
                                </div>
                                <div className="relative flex justify-between text-emerald-400">
                                  <div className="absolute inset-0 bg-emerald-500/10 w-[75%]" />
                                  <span className="relative">68,492.50</span>
                                  <span className="relative">14.825 BTC</span>
                                  <span className="relative">$1.01M</span>
                                </div>
                                <div className="relative flex justify-between text-emerald-400">
                                  <div className="absolute inset-0 bg-emerald-500/10 w-[55%]" />
                                  <span className="relative">68,490.10</span>
                                  <span className="relative">8.410 BTC</span>
                                  <span className="relative">$575.9K</span>
                                </div>
                                <div className="relative flex justify-between text-rose-400">
                                  <div className="absolute inset-0 bg-rose-500/10 w-[65%]" />
                                  <span className="relative">68,494.00</span>
                                  <span className="relative">11.350 BTC</span>
                                  <span className="relative">$777.4K</span>
                                </div>
                              </div>

                              <div className="flex items-center justify-between rounded-xl border border-stroke bg-bg-2/80 p-3">
                                <span className="text-xs font-mono text-text-2">Execution Pipeline</span>
                                <span className="font-mono text-xs font-bold text-emerald-400">&lt; 12ms WebSocket Feed</span>
                              </div>
                            </div>
                          )}

                          {project.mockupType === 'ecommerce' && (
                            <div className="space-y-4">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                  <ShoppingBag className="h-4 w-4 text-amber-400" />
                                  <span className="text-xs font-mono font-semibold text-text-1">Verve Spatial Headless Store</span>
                                </div>
                                <span className="rounded-full border border-amber-500/30 bg-amber-950/40 px-2.5 py-0.5 font-mono text-[10px] text-amber-300">
                                  Shopify Plus API
                                </span>
                              </div>

                              {/* 3D stage preview mockup */}
                              <div className="flex h-24 items-center justify-center rounded-xl border border-stroke bg-gradient-to-b from-bg-2 to-bg-3 p-3">
                                <div className="flex flex-col items-center">
                                  <div className="h-12 w-12 rounded-xl border border-amber-400/40 bg-amber-500/10 flex items-center justify-center font-mono text-xs text-amber-300">
                                    3D WebGL
                                  </div>
                                  <span className="mt-2 text-[10px] font-mono text-text-3">Spatial 360° Configurator</span>
                                </div>
                              </div>

                              <div className="grid grid-cols-2 gap-3">
                                <div className="rounded-xl border border-stroke bg-bg-2/80 p-2.5 text-center">
                                  <span className="text-[10px] font-mono text-text-3">Average Order Value</span>
                                  <p className="font-mono text-sm font-bold text-text-1">+84% Lift</p>
                                </div>
                                <div className="rounded-xl border border-stroke bg-bg-2/80 p-2.5 text-center">
                                  <span className="text-[10px] font-mono text-text-3">Checkout Latency</span>
                                  <p className="font-mono text-sm font-bold text-emerald-400">0.4s Instant</p>
                                </div>
                              </div>
                            </div>
                          )}

                          {project.mockupType === 'ai-agents' && (
                            <div className="space-y-4">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                  <Cpu className="h-4 w-4 text-emerald-400" />
                                  <span className="text-xs font-mono font-semibold text-text-1">Synapse Autonomous Node Graph</span>
                                </div>
                                <span className="rounded-full border border-emerald-500/30 bg-emerald-950/40 px-2.5 py-0.5 font-mono text-[10px] text-emerald-300">
                                  Multi-Agent Mesh
                                </span>
                              </div>

                              {/* Node Graph Mockup */}
                              <div className="space-y-2 rounded-xl border border-stroke bg-bg-2 p-3 font-mono text-[10px]">
                                <div className="flex items-center justify-between rounded-lg border border-stroke-light bg-bg-1 p-2">
                                  <span className="text-text-2">1. Ingest Inbound Document</span>
                                  <span className="text-emerald-400">Done (4ms)</span>
                                </div>
                                <div className="flex items-center justify-between rounded-lg border border-emerald-500/40 bg-emerald-950/30 p-2">
                                  <span className="text-emerald-300">2. Vector Search &amp; RAG Reasoning</span>
                                  <span className="text-emerald-400 animate-pulse">Processing</span>
                                </div>
                                <div className="flex items-center justify-between rounded-lg border border-stroke bg-bg-1/60 p-2 text-text-3">
                                  <span>3. Auto-Execute CRM API Sync</span>
                                  <span>Queued</span>
                                </div>
                              </div>
                            </div>
                          )}

                          {(project.mockupType === 'telematics' || project.mockupType === 'saas') && (
                            <div className="space-y-4">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                  <Layers className="h-4 w-4 text-primary" />
                                  <span className="text-xs font-mono font-semibold text-text-1">High-Throughput Live Metrics</span>
                                </div>
                                <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 font-mono text-[10px] text-primary">
                                  Zero-Latency CRDT
                                </span>
                              </div>

                              <div className="grid grid-cols-2 gap-3 rounded-xl border border-stroke bg-bg-2 p-4">
                                <div>
                                  <span className="text-[10px] font-mono text-text-3">ACTIVE SESSIONS</span>
                                  <p className="font-mono text-xl font-bold text-text-1">180,420</p>
                                </div>
                                <div>
                                  <span className="text-[10px] font-mono text-text-3">UPTIME SLA</span>
                                  <p className="font-mono text-xl font-bold text-emerald-400">99.99%</p>
                                </div>
                              </div>

                              <div className="flex items-center space-x-2 rounded-xl border border-stroke bg-bg-2/60 p-3 text-[11px] font-mono text-text-2">
                                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                                <span>Multiplayer sync active &bull; 0 conflicts</span>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </SectionOpacity>
    </section>
  );
};

export default Work;
