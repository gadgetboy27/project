import { useState, useEffect } from 'react';

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    let observer: IntersectionObserver;

    const observeSections = () => {
      const sections = document.querySelectorAll('section[id]');
      if (observer) observer.disconnect(); // clean old observers

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        },
        {
          rootMargin: '-20% 1px -5% 1px',
          threshold: 0.25
        }
      );

      sections.forEach((section) => observer.observe(section));
    };

    // Initial observation
    observeSections();

    // MutationObserver to detect lazy-loaded sections
    const mutationObserver = new MutationObserver(() => {
      observeSections(); // re-observe when new sections are added
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      if (observer) observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return activeSection;
}
