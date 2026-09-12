'use client';

import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import { Globe } from 'lucide-react';

const LANGUAGES = [
  {
    name: 'Arabic',
    level: 'Native',
    dots: 5,
    color: 'bg-blue',
  },
  {
    name: 'French',
    level: 'Fluent',
    dots: 4,
    color: 'bg-teal',
  },
  {
    name: 'English',
    level: 'Professional Working Proficiency',
    dots: 4,
    color: 'bg-terracotta',
  },
];

export default function Languages() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const prefersReduced = useReducedMotion();

  const animate = (delay = 0) => ({
    initial: prefersReduced ? {} : { opacity: 0, y: 18 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <section aria-labelledby="languages-heading" ref={ref} className="pb-0">
      <div className="container-max">
        <motion.div {...animate(0)} className="flex items-center gap-2 mb-4">
          <Globe size={16} className="text-charcoal-muted" aria-hidden="true" />
          <h3
            id="languages-heading"
            className="text-sm font-semibold uppercase tracking-wider text-charcoal-subtle"
          >
            Languages
          </h3>
        </motion.div>

        <div className="flex flex-wrap gap-4">
          {LANGUAGES.map((lang, i) => (
            <motion.div
              key={lang.name}
              {...animate(0.07 + i * 0.07)}
              className="card py-4 px-5 min-w-[160px]"
            >
              <p className="font-semibold text-charcoal text-sm mb-1">{lang.name}</p>
              <p className="text-xs text-charcoal-muted mb-2.5">{lang.level}</p>
              <div
                className="flex gap-1"
                role="img"
                aria-label={`${lang.name} proficiency: ${lang.dots} out of 5`}
              >
                {Array.from({ length: 5 }).map((_, idx) => (
                  <span
                    key={idx}
                    className={`w-5 h-1.5 rounded-full transition-colors duration-200 ${
                      idx < lang.dots ? lang.color : 'bg-border'
                    }`}
                    aria-hidden="true"
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
