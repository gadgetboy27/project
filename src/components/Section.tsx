import React from 'react';
import { useInView } from 'react-intersection-observer';

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

export function Section({ id, className = '', children }: SectionProps) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section
      id={id}
      ref={ref}
      className={`py-20 ${className} ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      } transition-all duration-700 ease-out`}
    >
      {children}
    </section>
  );
}