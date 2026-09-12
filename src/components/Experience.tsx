'use client';

import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, MapPin, Calendar, CheckCircle2, ChevronRight } from 'lucide-react';

const ACHIEVEMENTS = [
  'Audited a TypeScript/Next.js Git Branch Analyzer embedded in a migration workbench platform, reviewing Git comparison and risk-analysis logic across key modules.',
  'Identified and resolved 10 software-quality findings covering rename detection, missing --find-renames flags, sample-path parsing, deletion scoring, binary diff handling, CSV export issues, conflict hotspot reporting, migration backlog behavior, and history dashboard navigation.',
  'Improved dashboard navigation and drill-down workflows, raising the reliability of migration-oriented reports.',
  'Worked across the full stack: Git CLI, TypeScript, Next.js, React, PostgreSQL, Vitest, Docker, and GitLab.',
  'Explored AI-assisted report generation using AWS Bedrock and Amazon Nova Micro.',
];

const TECH = [
  'TypeScript', 'Next.js', 'React', 'PostgreSQL', 'Git CLI', 'Vitest',
  'Docker', 'GitLab', 'AWS Bedrock',
];

export default function Experience() {
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
      id="experience"
      className="section-py bg-background"
      aria-labelledby="experience-heading"
      ref={ref}
    >
      <div className="container-max">
        <div className="mb-12">
          <motion.span {...animate(0)} className="section-tag">
            Experience
          </motion.span>
          <motion.h2
            {...animate(0.07)}
            id="experience-heading"
            className="section-heading mt-1"
          >
            Industry Experience
          </motion.h2>
          <motion.p {...animate(0.14)} className="section-subheading">
            Real-world software engineering, quality audit, and AI exploration.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border"
            aria-hidden="true"
          />

          <motion.div {...animate(0.2)} className="relative pl-12 md:pl-16">
            {/* Dot */}
            <div
              className="absolute left-2.5 md:left-4 top-6 w-3 h-3 rounded-full bg-blue border-2 border-surface ring-2 ring-blue/20"
              aria-hidden="true"
            />

            <div className="card group">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-blue-subtle border border-blue-border flex items-center justify-center">
                    <Briefcase size={20} className="text-blue" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-bold text-charcoal text-lg leading-tight">
                      Software Engineering Intern
                    </h3>
                    <p className="text-blue font-semibold text-sm mt-0.5">
                      Sopra HR Software
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5 sm:items-end text-xs text-charcoal-muted">
                  <span className="flex items-center gap-1.5">
                    <MapPin size={12} aria-hidden="true" />
                    Tunis, Tunisia
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar size={12} aria-hidden="true" />
                    Summer 2026
                  </span>
                </div>
              </div>

              {/* Project */}
              <div className="mb-5 p-4 rounded-lg bg-background border border-border">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-charcoal-subtle mb-1.5">
                  Project
                </p>
                <p className="text-sm font-semibold text-charcoal leading-snug">
                  Software Quality Audit and AI-Assisted Development on a Git Branch Analyzer
                  Tool within a Migration Workbench Platform
                </p>
              </div>

              {/* Achievements */}
              <ul className="space-y-3 mb-6" aria-label="Key achievements">
                {ACHIEVEMENTS.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-charcoal-muted leading-relaxed">
                    <CheckCircle2
                      size={16}
                      className="text-teal flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Tech stack */}
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-charcoal-subtle mb-2.5">
                  Technologies
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {TECH.map((t) => (
                    <span key={t} className="tech-pill">{t}</span>
                  ))}
                </div>
              </div>

              {/* Case study link */}
              <div className="mt-5 pt-5 border-t border-border-light">
                <button
                  onClick={() => {
                    document.querySelector('#case-study')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-1.5 text-sm text-blue font-medium hover:gap-2.5 transition-all duration-200"
                  aria-label="Read full case study"
                >
                  Read the full case study
                  <ChevronRight size={15} aria-hidden="true" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
