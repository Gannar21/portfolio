'use client';

import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const COURSEWORK = [
  'Algorithms & Complexity',
  'Software Architecture',
  'Software Analysis & Design',
  'Software Development Methodologies',
  'Requirements Engineering & UX',
  'Machine Learning',
  'Artificial Intelligence Engineering',
  'Cybersecurity',
  'Software Quality & Testing',
  'Pervasive Computing & Cloud',
  'Data Analytics',
  'Research Methods',
  'Model Driven Engineering',
];

export default function Education() {
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
      id="education"
      className="section-py bg-surface"
      aria-labelledby="education-heading"
      ref={ref}
    >
      <div className="container-max">
        <div className="mb-12">
          <motion.span {...animate(0)} className="section-tag">
            Education
          </motion.span>
          <motion.h2
            {...animate(0.07)}
            id="education-heading"
            className="section-heading mt-1"
          >
            Academic Background
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_340px] gap-8 items-start">
          {/* Main education card */}
          <motion.div {...animate(0.14)}>
            <div className="rounded-2xl border border-border bg-background overflow-hidden">
              {/* Top bar */}
              <div className="h-1 bg-gradient-to-r from-blue to-teal" aria-hidden="true" />

              <div className="p-8">
                <div className="flex items-start gap-5 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-subtle border border-blue-border flex items-center justify-center flex-shrink-0">
                    <GraduationCap size={24} className="text-blue" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-bold text-charcoal text-xl leading-snug">
                      Engineering Degree in Software Engineering
                    </h3>
                    <p className="text-blue font-semibold text-sm mt-1">
                      MedTech, South Mediterranean University (SMU)
                    </p>
                    <p className="text-charcoal-muted text-sm mt-0.5">
                      Tunis, Tunisia · 2022 – 2027
                    </p>
                  </div>
                </div>

                {/* Cycle breakdown */}
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div className="rounded-xl border border-border bg-surface p-4">
                    <div className="w-7 h-7 rounded-lg bg-blue-subtle flex items-center justify-center mb-2" aria-hidden="true">
                      <span className="text-blue font-bold text-xs">1</span>
                    </div>
                    <p className="font-semibold text-charcoal text-sm">Preparatory Cycle</p>
                    <p className="text-charcoal-muted text-xs mt-0.5">2 years · 2022 – 2024</p>
                    <p className="text-charcoal-muted text-xs mt-1 leading-relaxed">
                      Mathematics, physics, computer science fundamentals, and engineering methodology.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-surface p-4">
                    <div className="w-7 h-7 rounded-lg bg-teal-subtle flex items-center justify-center mb-2" aria-hidden="true">
                      <span className="text-teal font-bold text-xs">2</span>
                    </div>
                    <p className="font-semibold text-charcoal text-sm">Engineering Cycle</p>
                    <p className="text-charcoal-muted text-xs mt-0.5">3 years · 2024 – 2027</p>
                    <p className="text-charcoal-muted text-xs mt-1 leading-relaxed">
                      Specialized in software engineering, AI/ML, cybersecurity, and applied development.
                    </p>
                  </div>
                </div>

                {/* ABET */}
                <div className="flex items-start gap-3 p-4 rounded-xl bg-terracotta-subtle border border-terracotta-border">
                  <Award size={20} className="text-terracotta flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-semibold text-terracotta uppercase tracking-wide">
                      ABET Accredited
                    </p>
                    <p className="text-xs text-charcoal-muted mt-0.5 leading-relaxed">
                      MedTech, South Mediterranean University (SMU) — 1st and only ABET-accredited
                      engineering school in Tunisia.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Coursework */}
          <motion.div {...animate(0.24)}>
            <div className="rounded-2xl border border-border bg-background p-6">
              <div className="flex items-center gap-2.5 mb-5">
                <BookOpen size={18} className="text-charcoal-muted" aria-hidden="true" />
                <h3 className="font-semibold text-charcoal text-sm">Relevant Coursework</h3>
              </div>

              <ul className="space-y-2" aria-label="Relevant coursework">
                {COURSEWORK.map((course) => (
                  <li
                    key={course}
                    className="flex items-center gap-2.5 text-sm text-charcoal-muted"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-blue flex-shrink-0"
                      aria-hidden="true"
                    />
                    {course}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
