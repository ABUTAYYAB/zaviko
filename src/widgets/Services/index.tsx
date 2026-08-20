'use client';

import { FC } from 'react';
import SectionTitle from '@/components/ui/SectionTitle';
import SectionOpacity from '@/components/ui/SectionOpacity';
import ServiceCard from '@/components/ServiceCard';
import { CARDS } from '@/data';
import { Sparkles, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Button from '@/components/ui/Button';

interface Props {}

const Services: FC<Props> = () => {
  return (
    <section id="services" className="relative z-10 border-t border-stroke bg-bg-1 py-20 sm:py-28">
      <SectionOpacity>
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          {/* Header Row */}
          <div className="flex flex-col justify-between gap-6 border-b border-stroke pb-10 md:flex-row md:items-end">
            <div>
              <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-primary">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Capabilities &amp; Core Disciplines</span>
              </div>
              <SectionTitle title="SERVICES." classes="mt-2 text-left" />
            </div>

            <div className="flex flex-col items-start space-y-4 md:items-end">
              <p className="max-w-md text-sm text-text-2 sm:text-base md:text-right">
                End-to-end digital craft. We take complex technical initiatives from strategic blueprint to high-velocity production scale.
              </p>
              <Link href="/book">
                <Button
                  variant="outline"
                  size="sm"
                  title="Schedule Architecture Consultation"
                  icon={<ArrowUpRight className="h-3.5 w-3.5 text-primary" />}
                />
              </Link>
            </div>
          </div>

          {/* Service Cards Matrix */}
          <div className="divide-y divide-stroke">
            {CARDS.map((card) => (
              <ServiceCard key={card.id} card={card} />
            ))}
          </div>
        </div>
      </SectionOpacity>
    </section>
  );
};

export default Services;
