'use client';

import Navigation from '@/widgets/Navigation';
import Hero from '@/widgets/Hero';
import Trust from '@/widgets/Trust';
import Work from '@/widgets/Work';
import Services from '@/widgets/Services';
import Capabilities from '@/widgets/Capabilities';
import Approach from '@/widgets/Approach';
import About from '@/widgets/About';
import Testimonials from '@/widgets/Testimonials';
import CallToAction from '@/widgets/CallToAction';
import ShadowCursor from '@/components/ui/ShadowCursor';

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <Trust />
      <Work />
      <Services />
      <Capabilities />
      <Approach />
      <About />
      <Testimonials />
      <CallToAction />

      {/* Optimized WebGL Fluid Cursor Simulation */}
      <ShadowCursor />
    </>
  );
}
