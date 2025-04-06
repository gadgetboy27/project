// components/Section.tsx
import React from 'react';

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

export function Section({ id, className = '', children }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-20 scroll-mt-20 ${className}`}
    >
      {children}
    </section>
  );
}
