'use client';

import { FC, useEffect } from 'react';
import initCursor from '@/shared/utils/useShadowCursor';

interface Props {}

const ShadowCursor: FC<Props> = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Check reduced motion preference
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Skip on touch-only mobile devices without pointer
    if (
      window.matchMedia &&
      window.matchMedia('(pointer: coarse)').matches &&
      !window.matchMedia('(pointer: fine)').matches
    ) {
      return;
    }

    const timer = setTimeout(() => {
      try {
        initCursor();
      } catch (err) {
        console.warn('WebGL ShadowCursor simulation fallback:', err);
      }
    }, 50);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30 h-screen w-full overflow-hidden mix-blend-screen opacity-90 select-none"
    >
      <canvas id="fluid" className="pointer-events-none h-full w-full" />
    </div>
  );
};

export default ShadowCursor;
