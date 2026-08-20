'use client';

import { FC } from 'react';
import SectionTitle from '@/components/ui/SectionTitle';
import SectionOpacity from '@/components/ui/SectionOpacity';
import HoverCards from '@/components/ui/HoverCards';
import { APPROACH_CARDS } from '@/data';
import { Sparkles } from 'lucide-react';

interface Props {}

const Approach: FC<Props> = () => {
  return (
    <section id="approach" className="relative z-10 border-t border-stroke bg-bg-1 py-20 sm:py-28">
      <SectionOpacity>
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          {/* Header Row */}
          <div className="flex flex-col justify-between gap-6 border-b border-stroke pb-8 md:flex-row md:items-end">
            <div>
              <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-primary">
                <Sparkles className="h-3.5 w-3.5" />
                <span>The Zaviko Delivery Framework</span>
              </div>
              <SectionTitle title="APPROACH." classes="mt-2 text-left" />
            </div>

            <p className="max-w-md text-sm text-text-2 sm:text-base">
              A transparent, battle-tested 5-phase lifecycle engineered to eliminate scope creep, accelerate velocity, and ensure flawless production deployment.
            </p>
          </div>

          {/* Process Cards Grid */}
          <div className="mt-12">
            <HoverCards cards={APPROACH_CARDS} />
          </div>
        </div>
      </SectionOpacity>
    </section>
  );
};

export default Approach;
