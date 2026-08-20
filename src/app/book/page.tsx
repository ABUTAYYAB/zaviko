
import type { Metadata } from 'next';
import BookForm from '@/widgets/BookForm';
import ShadowCursor from '@/components/ui/ShadowCursor';

export const metadata: Metadata = {
  title: 'Start a Project // Zaviko Digital Studio',
  description:
    'Submit your project scope, goals, and technical requirements. We will analyze your architecture and provide an assessment within 24 hours.',
};

export default function BookPage() {
  return (
    <div className="relative min-h-screen w-full bg-bg-1 py-16 sm:py-24 overflow-hidden">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[700px] rounded-full bg-gradient-to-b from-primary/15 via-accent-violet/10 to-transparent blur-3xl opacity-60" />

      <div className="relative z-10">
        <BookForm />
      </div>

      <ShadowCursor />
    </div>
  );
}
