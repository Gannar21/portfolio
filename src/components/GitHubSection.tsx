'use client';

import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import { Github, ExternalLink, Code2, GitBranch, Star } from 'lucide-react';

const HIGHLIGHTS = [
  { icon: Code2, label: 'Projects', description: 'Web applications, SaaS platforms, and AI tooling' },
  { icon: GitBranch, label: 'Open Source', description: 'Experimenting with and contributing to the ecosystem' },
  { icon: Star, label: 'Learning', description: 'Exploring new frameworks, tools, and architectures' },
];

export default function GitHubSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const prefersReduced = useReducedMotion();

  const animate = (delay = 0) => ({
    initial: prefersReduced ? {} : { opacity: 0, y: 18 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <section aria-labelledby="github-heading" className="section-py bg-surface" ref={ref}>
      <div className="container-max">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div {...animate(0)} className="flex justify-center mb-4">
            <span className="section-tag">Code</span>
          </motion.div>

          <motion.h2
            {...animate(0.07)}
            id="github-heading"
            className="section-heading mb-4"
          >
            GitHub &amp; Open Code
          </motion.h2>

          <motion.p {...animate(0.14)} className="text-charcoal-muted leading-relaxed mb-8">
            I use GitHub to document projects, experiment with new technologies,
            and build practical software engineering solutions. My repository reflects
            my hands-on approach to learning and building.
          </motion.p>

          <motion.div {...animate(0.2)} className="grid sm:grid-cols-3 gap-4 mb-8">
            {HIGHLIGHTS.map(({ icon: Icon, label, description }) => (
              <div key={label} className="card text-left">
                <div className="w-9 h-9 rounded-lg bg-blue-subtle border border-blue-border flex items-center justify-center mb-3">
                  <Icon size={18} className="text-blue" aria-hidden="true" />
                </div>
                <p className="font-semibold text-charcoal text-sm mb-1">{label}</p>
                <p className="text-xs text-charcoal-muted">{description}</p>
              </div>
            ))}
          </motion.div>

          <motion.div {...animate(0.27)}>
            <a
              href="https://github.com/Gannar21"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-white/5 border border-white/15 text-charcoal font-semibold text-sm transition-all duration-200 hover:bg-white/10 hover:border-white/25 hover:shadow-card focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue active:scale-[0.98]"
              aria-label="View GitHub profile (opens in new tab)"
            >
              <Github size={18} aria-hidden="true" />
              View github.com/Gannar21
              <ExternalLink size={14} className="opacity-50" aria-hidden="true" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
