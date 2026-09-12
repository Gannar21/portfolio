'use client';

import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award, Code2, Brain, Shield, Database } from 'lucide-react';

const INTERESTS = [
  { label: 'Software Engineering', icon: Code2 },
  { label: 'AI / Machine Learning', icon: Brain },
  { label: 'Large Language Models', icon: Brain },
  { label: 'AI Engineering', icon: Brain },
  { label: 'Cybersecurity', icon: Shield },
  { label: 'Data & Analytics', icon: Database },
  { label: 'Cloud Technologies', icon: Database },
  { label: 'Software Quality', icon: Award },
];

export default function About() {
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
      id="about"
      className="section-py bg-surface"
      aria-labelledby="about-heading"
      ref={ref}
    >
      <div className="container-max">
        <div className="grid lg:grid-cols-[1fr_380px] gap-12 lg:gap-16 items-start">
          {/* Left — text */}
          <div>
            <motion.span {...animate(0)} className="section-tag">
              About Me
            </motion.span>

            <motion.h2
              {...animate(0.07)}
              id="about-heading"
              className="section-heading mt-1 mb-6"
            >
              Building software that matters
            </motion.h2>

            <div className="space-y-4 text-charcoal-muted leading-relaxed">
              <motion.p {...animate(0.14)}>
                I am a final-year Software Engineering student at MedTech, South Mediterranean
                University (SMU) in Tunisia, set to graduate in 2027. My engineering program
                combines a two-year preparatory cycle with a three-year engineering cycle,
                giving me a rigorous foundation in both theory and applied software development.
              </motion.p>

              <motion.p {...animate(0.21)}>
                My interests span the full engineering stack — from designing reliable software
                architectures and building production web applications, to exploring how large
                language models and AI-assisted workflows can be integrated into real development
                pipelines. I care deeply about software quality and I approach every project with
                attention to correctness, maintainability, and user impact.
              </motion.p>

              <motion.p {...animate(0.28)}>
                I am actively seeking a{' '}
                <strong className="text-charcoal font-semibold">
                  6-month PFE / capstone internship
                </strong>{' '}
                starting January 2027, ideally in Europe, in areas such as Software Engineering,
                AI/ML, AI Engineering, Data, or Cybersecurity.
              </motion.p>
            </div>

            {/* Interest tags */}
            <motion.div {...animate(0.35)} className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-charcoal-subtle mb-3">
                Areas of Interest
              </p>
              <div className="flex flex-wrap gap-2">
                {INTERESTS.map(({ label, icon: Icon }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-border-light text-charcoal-light border border-border transition-colors duration-200 hover:border-blue/40 hover:text-blue hover:bg-blue-subtle"
                  >
                    <Icon size={12} aria-hidden="true" />
                    {label}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — education card */}
          <motion.div {...animate(0.2)}>
            <div className="rounded-2xl border border-border bg-surface shadow-card overflow-hidden">
              {/* Card header */}
              <div className="bg-blue px-6 py-5">
                <GraduationCap size={28} className="text-white/80 mb-3" aria-hidden="true" />
                <h3 className="text-white font-bold text-lg leading-snug">
                  Engineering Degree in Software Engineering
                </h3>
              </div>

              {/* Card body */}
              <div className="p-6 space-y-5">
                <div>
                  <p className="font-semibold text-charcoal text-base">
                    MedTech, South Mediterranean University (SMU)
                  </p>
                  <p className="text-charcoal-muted text-sm mt-0.5">Tunis, Tunisia · 2022 – 2027</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-charcoal-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal flex-shrink-0" aria-hidden="true" />
                    2-year Preparatory Cycle
                  </div>
                  <div className="flex items-center gap-2 text-sm text-charcoal-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal flex-shrink-0" aria-hidden="true" />
                    3-year Engineering Cycle
                  </div>
                </div>

                <div className="border-t border-border pt-4">
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-terracotta-subtle border border-terracotta-border">
                    <Award size={18} className="text-terracotta flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="text-xs font-semibold text-terracotta uppercase tracking-wide mb-0.5">
                        ABET Accredited
                      </p>
                      <p className="text-xs text-charcoal-muted leading-snug">
                        1st and only ABET-accredited engineering school in Tunisia
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Seeking badge */}
            <div className="mt-4 p-4 rounded-xl border border-border bg-background">
              <p className="text-xs font-semibold uppercase tracking-wider text-charcoal-subtle mb-1.5">
                Currently Seeking
              </p>
              <p className="text-sm font-semibold text-charcoal">
                PFE / Capstone Internship
              </p>
              <p className="text-xs text-charcoal-muted mt-0.5">
                6 months · Starting January 2027 · Europe preferred
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
