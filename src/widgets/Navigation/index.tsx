'use client';

import { FC, useEffect, useState } from 'react';
import Link from 'next/link';
import SidebarMenu from '@/components/SidebarMenu';
import { AnimatePresence, motion } from 'framer-motion';
import { AGENCY_INFO, NAV_ITEMS } from '@/data';
import { ArrowUpRight } from 'lucide-react';

interface Props {}

const Navigation: FC<Props> = () => {
  const [isActive, setIsActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('work');

  const closeSidebar = () => setIsActive(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsActive(false);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-[100] w-full transition-all duration-500 ${
          isScrolled
            ? 'bg-bg-1/80 py-3.5 backdrop-blur-xl border-b border-stroke/50 shadow-2xl'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
          {/* Logo & Brand */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center space-x-3 text-left focus:outline-none"
            title="Zaviko — Return to top"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-stroke-light bg-bg-2 font-mono text-sm font-bold tracking-wider text-primary transition-all duration-300 group-hover:border-primary group-hover:shadow-[0_0_20px_rgba(204,194,220,0.3)]">
              Z
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-[0.2em] text-text-1 transition-colors group-hover:text-primary">
                {AGENCY_INFO.name.toUpperCase()}
              </span>
              <span className="text-[10px] font-mono text-text-3 tracking-wider">
                STUDIO // 2026
              </span>
            </div>
          </button>

          {/* Desktop Center Menu */}
          <nav className="hidden lg:flex items-center space-x-1 rounded-full border border-stroke bg-bg-2/70 px-4 py-1.5 backdrop-blur-md">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className={`relative px-3.5 py-1.5 text-xs font-medium transition-all duration-200 ${
                  activeSection === item.href
                    ? 'text-text-1'
                    : 'text-text-3 hover:text-text-1'
                }`}
              >
                {item.title}
              </button>
            ))}
          </nav>

          {/* Right Cluster: Availability + CTA + Burger */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Availability Pill (Desktop) */}
            <div className="hidden xl:flex items-center space-x-2 rounded-full border border-emerald-500/20 bg-emerald-950/20 px-3 py-1 text-[11px] font-mono text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available Q2/Q3</span>
            </div>

            {/* Quick Action Book Button */}
            <Link
              href="/book"
              className="hidden sm:inline-flex items-center space-x-1.5 rounded-full border border-stroke bg-bg-2 px-4 py-2 text-xs font-medium text-text-1 transition-all duration-300 hover:border-primary hover:bg-primary hover:text-bg-1"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>

            {/* Hamburger Toggle */}
            <button
              type="button"
              aria-label="Toggle navigation menu"
              onClick={() => setIsActive(!isActive)}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-stroke bg-bg-2 transition-all duration-300 hover:border-primary hover:bg-bg-3"
            >
              <div className={`burger ${isActive ? 'burgerActive' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Slide-out Drawer */}
      <AnimatePresence mode="wait">
        {isActive && <SidebarMenu close={closeSidebar} />}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
