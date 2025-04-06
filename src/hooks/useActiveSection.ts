import { useState, useEffect } from 'react';

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Check if the intersection ratio is enough for a section to be considered active
            if (entry.intersectionRatio >= 0.5) {
              setActiveSection(entry.target.id);
            }
          }
        });
      },
      {
        rootMargin: '-20% 0px -0% 0px', // Fine-tune to make the observer less sensitive
        threshold: [0.2] // Trigger when at least 50% of a section is in view
      }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return activeSection;
}
