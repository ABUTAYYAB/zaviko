'use client';

import { FC, SVGProps, useState } from 'react';
import { cn } from '@/shared/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { Sparkles, Clock, CheckCircle2 } from 'lucide-react';

interface CardItem {
  number?: string;
  title: string;
  timeframe?: string;
  icon: FC<SVGProps<SVGSVGElement>>;
  description: string;
  deliverable?: string;
}

interface Props {
  cards: CardItem[];
  wrapperClasses?: string;
  itemClasses?: string;
}

const HoverCards: FC<Props> = ({ cards, itemClasses, wrapperClasses }) => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div className={cn('grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3', itemClasses)}>
      {cards.map((card, idx) => {
        const IconComponent = card.icon;

        return (
          <div
            key={idx}
            className={cn(
              'group relative flex flex-col p-1.5 transition-all duration-300',
              idx === 3 ? 'lg:col-span-1' : '',
              idx === 4 ? 'md:col-span-2 lg:col-span-2' : ''
            )}
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
          >
            {/* Preserved Framer Motion Shared Layout Spotlight */}
            <AnimatePresence>
              {hoveredIdx === idx && (
                <motion.span
                  className={cn(
                    'absolute inset-0 z-0 block h-full w-full rounded-3xl bg-primary/10 border border-primary/30 shadow-[0_0_30px_rgba(204,194,220,0.15)]',
                    wrapperClasses
                  )}
                  layoutId="cardHoverEffect"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.2 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.1 },
                  }}
                />
              )}
            </AnimatePresence>

            <div className="relative z-10 flex h-full flex-col justify-between rounded-2xl border border-stroke bg-bg-card/80 p-6 backdrop-blur-xl transition-all duration-300 group-hover:border-stroke-light sm:p-8">
              <div>
                {/* Header: Step Number + Timeframe */}
                <div className="flex items-center justify-between border-b border-stroke pb-4 mb-5">
                  <div className="flex items-center space-x-2">
                    <span className="font-mono text-sm font-bold text-primary">
                      PHASE {card.number || `0${idx + 1}`}
                    </span>
                  </div>
                  {card.timeframe && (
                    <div className="flex items-center space-x-1 rounded-full border border-stroke bg-bg-1 px-3 py-1 font-mono text-[11px] text-text-3">
                      <Clock className="h-3 w-3 text-primary" />
                      <span>{card.timeframe}</span>
                    </div>
                  )}
                </div>

                {/* Title & Icon */}
                <div className="flex items-center space-x-3 mb-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-stroke bg-bg-2 text-text-1 group-hover:border-primary group-hover:text-primary transition-colors">
                    <IconComponent />
                  </div>
                  <h4 className="text-lg font-bold tracking-tight text-text-1 sm:text-xl group-hover:text-primary transition-colors">
                    {card.title}
                  </h4>
                </div>

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-text-2 font-normal">
                  {card.description}
                </p>
              </div>

              {/* Deliverable Badge */}
              {card.deliverable && (
                <div className="mt-6 flex items-start space-x-2 rounded-xl border border-stroke/70 bg-bg-1/70 p-3 text-xs font-mono text-text-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] text-text-3 uppercase block">Deliverable</span>
                    <span>{card.deliverable}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HoverCards;
