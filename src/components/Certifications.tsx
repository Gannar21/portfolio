'use client';

import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import { BadgeCheck } from 'lucide-react';

const CERTS = [
  {
    title: 'Full-Stack Development',
    issuer: 'Udemy',
    color: 'blue' as const,
  },
  {
    title: 'Agile Project Management',
    issuer: 'Google',
    color: 'teal' as const,
  },
];

const COLOR_STYLES = {
  blue: {
    bg: 'bg-blue-subtle border-blue-border',
    icon: 'text-blue',
    issuer: 'text-blue',
  },
  teal: {
    bg: 'bg-teal-subtle border-teal-border',
    icon: 'text-teal',
    issuer: 'text-teal',
  },
};

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const prefersReduced = useReducedMotion();

  const animate = (delay = 0) => ({
    initial: prefersReduced ? {} : { opacity: 0, y: 18 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <section
      aria-labelledby="certs-heading"
      ref={ref}
      className="pb-0"
    >
      <div className="container-max">
        <motion.h3
          {...animate(0)}
          id="certs-heading"
          className="text-sm font-semibold uppercase tracking-wider text-charcoal-subtle mb-4"
        >
          Certifications
        </motion.h3>

        <div className="flex flex-wrap gap-3">
          {CERTS.map((cert, i) => {
            const styles = COLOR_STYLES[cert.color];
            return (
              <motion.div
                key={cert.title}
                {...animate(0.07 + i * 0.07)}
                className={`inline-flex items-center gap-3 px-4 py-3 rounded-xl border ${styles.bg}`}
              >
                <BadgeCheck size={18} className={styles.icon} aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold text-charcoal leading-none">{cert.title}</p>
                  <p className={`text-xs font-medium mt-0.5 ${styles.issuer}`}>{cert.issuer}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
