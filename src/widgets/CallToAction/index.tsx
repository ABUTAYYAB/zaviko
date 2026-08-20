'use client';

import { FC } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import SectionOpacity from '@/components/ui/SectionOpacity';
import { AGENCY_INFO, NAV_ITEMS } from '@/data';
import { ArrowUpRight, Mail, Phone, MapPin, Sparkles, Clock, Globe } from 'lucide-react';

interface Props {}

const CallToAction: FC<Props> = () => {
  const router = useRouter();

  const handleFormToggle = () => {
    router.push('/book');
  };

  return (
    <section id="contact" className="relative z-10 border-t border-stroke bg-bg-1 pt-24 pb-12 sm:pt-32">
      <SectionOpacity>
        {/* Conversion Hero Band */}
        <div className="mx-auto max-w-6xl px-5 text-center sm:px-8">
          <div className="mx-auto inline-flex items-center space-x-2 rounded-full border border-stroke-light bg-bg-2/80 px-4 py-1.5 font-mono text-xs text-text-2 shadow-lg backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span className="uppercase text-text-1">START YOUR BUILD // {AGENCY_INFO.badge}</span>
          </div>

          <h2 className="mt-8 text-4xl font-extrabold tracking-tight text-text-1 sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05]">
            LET&apos;S BUILD SOMETHING{' '}
            <span className="bg-gradient-to-r from-text-1 via-primary to-accent-glow bg-clip-text text-transparent">
              EXTRAORDINARY.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base text-text-2 sm:text-lg md:text-xl leading-relaxed text-balance">
            Whether you are engineering a breakthrough AI platform, launching a high-converting web product, or scaling an enterprise workflow — we are ready to partner.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button
              onClick={handleFormToggle}
              variant="conic"
              size="lg"
              title="Start Project Scope"
              icon={<ArrowUpRight className="h-4 w-4" />}
            />
            <a href={`mailto:${AGENCY_INFO.email}`}>
              <Button
                variant="secondary"
                size="lg"
                title="Email Us Directly"
                icon={<Mail className="h-4 w-4 text-primary" />}
              />
            </a>
          </div>
        </div>

        {/* Global Footer */}
        <footer className="mx-auto mt-28 max-w-7xl border-t border-stroke px-5 pt-16 sm:px-8">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 pb-16">
            {/* Column 1: Brand & Identity (4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-stroke-light bg-bg-2 font-mono text-sm font-bold text-primary">
                  Z
                </div>
                <span className="font-mono text-base font-bold tracking-widest text-text-1">
                  {AGENCY_INFO.name.toUpperCase()}
                </span>
              </div>

              <p className="text-xs leading-relaxed text-text-3 max-w-sm">
                {AGENCY_INFO.tagline}
              </p>

              <div className="flex items-center space-x-2 rounded-xl border border-stroke bg-bg-2/80 p-3 text-xs font-mono text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{AGENCY_INFO.badge}</span>
              </div>
            </div>

            {/* Column 2: Quick Links (2 cols) */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="font-mono text-xs uppercase tracking-widest text-text-1">
                Navigation
              </h4>
              <ul className="space-y-2.5 text-xs text-text-3">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <a
                      href={`#${item.href}`}
                      className="hover:text-primary transition-colors duration-200"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Capabilities (2 cols) */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="font-mono text-xs uppercase tracking-widest text-text-1">
                Disciplines
              </h4>
              <ul className="space-y-2.5 text-xs text-text-3">
                <li>Digital Product Design</li>
                <li>Full-Stack Next.js</li>
                <li>Mobile Engineering</li>
                <li>Autonomous AI Agents</li>
                <li>Workflow Automation</li>
                <li>Shopify Plus Commerce</li>
              </ul>
            </div>

            {/* Column 4: Studio Coordinates & Contact (3 cols) */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="font-mono text-xs uppercase tracking-widest text-text-1">
                Coordinates
              </h4>
              <div className="space-y-2.5 text-xs text-text-3">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-primary shrink-0" />
                  <span>{AGENCY_INFO.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-primary shrink-0" />
                  <a href={`mailto:${AGENCY_INFO.email}`} className="hover:text-primary transition-colors">
                    {AGENCY_INFO.email}
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-primary shrink-0" />
                  <span>{AGENCY_INFO.phone}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="h-4 w-4 text-primary shrink-0" />
                  <span>{AGENCY_INFO.coordinates}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Copyright & Socials */}
          <div className="flex flex-col items-center justify-between gap-4 border-t border-stroke py-8 sm:flex-row text-xs text-text-3 font-mono">
            <div>
              © {new Date().getFullYear()} {AGENCY_INFO.legalName}. All rights reserved.
            </div>

            <div className="flex items-center space-x-6">
              {AGENCY_INFO.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </footer>
      </SectionOpacity>
    </section>
  );
};

export default CallToAction;
