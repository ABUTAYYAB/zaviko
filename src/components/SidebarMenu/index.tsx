'use client';

import { FC, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import CustomLink from './Link';
import { NAV_ITEMS, AGENCY_INFO } from '@/data';
import { menuSlide } from '@/shared/utils/animations';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';

interface Props {
  close: () => void;
}

const SidebarMenu: FC<Props> = ({ close }) => {
  const [selectedIndicator, setSelectedIndicator] = useState<string | null>(null);

  const smoothScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    close();
  };

  return (
    <>
      <motion.div
        variants={menuSlide}
        initial="initial"
        animate="enter"
        exit="exit"
        className="fixed right-0 top-0 z-[4000] flex h-screen w-[420px] max-w-[90vw] flex-col justify-between border-l border-stroke bg-bg-2/95 px-8 pb-8 pt-24 text-text-1 shadow-2xl backdrop-blur-2xl sm:px-10"
      >
        <div>
          <div className="mb-6 flex items-center justify-between border-b border-stroke pb-3 uppercase text-text-3">
            <span className="text-xs font-semibold tracking-widest">Navigation</span>
            <span className="text-xs font-mono text-primary/80">01 — 07</span>
          </div>

          <nav className="flex flex-col space-y-1" onMouseLeave={() => setSelectedIndicator(null)}>
            {NAV_ITEMS.map((item, index) => (
              <CustomLink
                handleClick={() => smoothScroll(item.href)}
                key={item.title}
                data={{ ...item, index }}
                isActive={selectedIndicator === item.href}
                setSelectedIndicator={setSelectedIndicator}
              />
            ))}
          </nav>
        </div>

        <div className="space-y-6 pt-6 border-t border-stroke">
          <div className="space-y-2 text-xs">
            <div className="flex items-center space-x-2 text-text-3">
              <MapPin className="h-3.5 w-3.5 text-primary" />
              <span>{AGENCY_INFO.location}</span>
            </div>
            <div className="flex items-center space-x-2 text-text-3">
              <Mail className="h-3.5 w-3.5 text-primary" />
              <a href={`mailto:${AGENCY_INFO.email}`} className="hover:text-primary transition-colors">
                {AGENCY_INFO.email}
              </a>
            </div>
            <div className="flex items-center space-x-2 text-text-3">
              <Phone className="h-3.5 w-3.5 text-primary" />
              <span>{AGENCY_INFO.phone}</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2">
            <Link
              href="/book"
              onClick={close}
              className="flex w-full items-center justify-center space-x-2 rounded-full border border-stroke-light bg-primary/10 px-5 py-3 text-xs font-medium uppercase tracking-wider text-primary transition-all duration-300 hover:border-primary hover:bg-primary hover:text-bg-1"
            >
              <span>Book Discovery Call</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="flex items-center justify-between text-[11px] text-text-3">
            <span>© {new Date().getFullYear()} {AGENCY_INFO.name}</span>
            <div className="flex items-center space-x-1.5 text-emerald-400">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono">{AGENCY_INFO.badge}</span>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={close}
        className="fixed inset-0 z-[3999] bg-bg-1/70 backdrop-blur-sm transition-all duration-300"
      />
    </>
  );
};

export default SidebarMenu;
