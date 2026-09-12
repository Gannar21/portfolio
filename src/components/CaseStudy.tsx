'use client';

import { useState, useRef } from 'react';
import { motion, useInView, useReducedMotion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  Search,
  Wrench,
  CheckCircle2,
  Layers,
  TrendingUp,
  AlertTriangle,
  ArrowRight,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const TECH_USED = [
  'TypeScript', 'Next.js', 'React', 'Git CLI', 'PostgreSQL',
  'Vitest', 'Docker', 'GitLab', 'AWS Bedrock', 'Amazon Nova Micro',
];

const FINDINGS = [
  { id: 1, area: 'Rename Detection', issue: 'Git rename logic not using --find-renames flag, causing files to appear deleted rather than renamed.' },
  { id: 2, area: 'Sample-Path Parsing', issue: 'Incorrect path parsing when sampling diffs from multi-level directory trees.' },
  { id: 3, area: 'Deletion Scoring', issue: 'Deletion risk scores not correctly weighted, skewing overall migration risk metrics.' },
  { id: 4, area: 'Binary File Diffs', issue: 'Binary files causing diff parsing errors — not handled gracefully in comparison pipeline.' },
  { id: 5, area: 'CSV Export', issue: 'Export generating malformed rows for branches with special characters in names.' },
  { id: 6, area: 'Conflict Hotspots', issue: 'Hotspot detection not aggregating cross-branch conflicts correctly.' },
  { id: 7, area: 'Migration Backlog', issue: 'Backlog view showing stale data when branch state changed between requests.' },
  { id: 8, area: 'History Dashboard', issue: 'Navigation drill-down breaking on certain date range filters.' },
  { id: 9, area: 'Dashboard Navigation', issue: 'Back-navigation state lost on deep-link scenarios in dashboard.' },
  { id: 10, area: 'Missing --find-renames', issue: 'Root cause of multiple rename-related issues: missing Git flag throughout the diff pipeline.' },
];

const PHASES = [
  {
    id: 'problem',
    icon: AlertTriangle,
    label: 'Problem',
    color: 'text-terracotta',
    bg: 'bg-terracotta-subtle border-terracotta-border',
    summary: 'A Git Branch Analyzer embedded in a migration workbench platform had accumulated quality debt across its diff, risk-scoring, and dashboard layers.',
  },
  {
    id: 'investigation',
    icon: Search,
    label: 'Investigation',
    color: 'text-blue',
    bg: 'bg-blue-subtle border-blue-border',
    summary: 'Performed a structured audit of the TypeScript/Next.js codebase — reviewing Git comparison logic, risk-analysis modules, dashboard navigation flows, and export utilities.',
  },
  {
    id: 'findings',
    icon: Layers,
    label: 'Findings',
    color: 'text-charcoal-light',
    bg: 'bg-border-light border-border',
    summary: 'Identified 10 distinct software-quality issues spanning Git diff handling, parsing, scoring, export, and UI navigation.',
  },
  {
    id: 'improvements',
    icon: Wrench,
    label: 'Improvements',
    color: 'text-teal',
    bg: 'bg-teal-subtle border-teal-border',
    summary: 'Resolved all 10 findings — adding rename detection, fixing path parsing, correcting scoring, handling binary diffs, and stabilising navigation and export workflows.',
  },
  {
    id: 'outcome',
    icon: TrendingUp,
    label: 'Outcome',
    color: 'text-blue',
    bg: 'bg-blue-subtle border-blue-border',
    summary: 'Raised the reliability and accuracy of the migration analyzer. Explored AI-assisted report generation with AWS Bedrock / Amazon Nova Micro as a complementary layer.',
  },
];

export default function CaseStudy() {
  const [expanded, setExpanded] = useState(false);
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
      id="case-study"
      className="section-py bg-background"
      aria-labelledby="casestudy-heading"
      ref={ref}
    >
      <div className="container-max">
        <div className="mb-10">
          <motion.span {...animate(0)} className="section-tag">
            Case Study
          </motion.span>
          <motion.h2
            {...animate(0.07)}
            id="casestudy-heading"
            className="section-heading mt-1"
          >
            Software Quality Audit &amp; AI-Assisted Development
          </motion.h2>
          <motion.p {...animate(0.14)} className="section-subheading">
            Deep dive into my Sopra HR Software internship — from problem identification
            to resolved improvements.
          </motion.p>
        </div>

        {/* Phase pipeline (always visible) */}
        <motion.div {...animate(0.2)} className="mb-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {PHASES.map((phase, i) => {
              const Icon = phase.icon;
              return (
                <div key={phase.id} className="relative">
                  <div className={`rounded-xl border p-4 ${phase.bg} h-full`}>
                    <div className="flex items-center gap-2 mb-2">
                      <Icon size={15} className={phase.color} aria-hidden="true" />
                      <span className={`text-xs font-semibold uppercase tracking-wide ${phase.color}`}>
                        {phase.label}
                      </span>
                    </div>
                    <p className="text-xs text-charcoal-muted leading-relaxed">{phase.summary}</p>
                  </div>
                  {i < PHASES.length - 1 && (
                    <ArrowRight
                      size={14}
                      className="hidden lg:block absolute top-1/2 -right-2.5 -translate-y-1/2 text-charcoal-subtle z-10"
                      aria-hidden="true"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Expand button */}
        <motion.div {...animate(0.28)} className="flex justify-center mb-4">
          <button
            onClick={() => setExpanded(!expanded)}
            className={cn(
              'inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border text-sm font-medium transition-all duration-200',
              expanded
                ? 'bg-blue text-white border-blue hover:bg-blue-600'
                : 'bg-surface text-charcoal border-border hover:border-charcoal-light'
            )}
            aria-expanded={expanded}
            aria-controls="case-study-details"
          >
            {expanded ? 'Show Less' : 'Expand Full Case Study'}
            <ChevronDown
              size={16}
              className={cn('transition-transform duration-200', expanded && 'rotate-180')}
              aria-hidden="true"
            />
          </button>
        </motion.div>

        {/* Expanded content */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              id="case-study-details"
              key="details"
              initial={prefersReduced ? {} : { opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="grid lg:grid-cols-2 gap-6 pt-4">
                {/* Findings list */}
                <div className="card">
                  <div className="flex items-center gap-2 mb-5">
                    <Layers size={16} className="text-charcoal-muted" aria-hidden="true" />
                    <h3 className="font-semibold text-charcoal text-sm">
                      10 Quality Findings — Resolved
                    </h3>
                  </div>
                  <ul className="space-y-3" aria-label="List of resolved quality findings">
                    {FINDINGS.map((f) => (
                      <li key={f.id} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-teal-subtle border border-teal-border flex items-center justify-center">
                          <CheckCircle2 size={12} className="text-teal" aria-hidden="true" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-charcoal">{f.area}</p>
                          <p className="text-xs text-charcoal-muted leading-relaxed mt-0.5">{f.issue}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right column: platform overview + tech + AI note */}
                <div className="space-y-5">
                  {/* Platform overview */}
                  <div className="card">
                    <h3 className="font-semibold text-charcoal text-sm mb-3">Platform Context</h3>
                    <p className="text-sm text-charcoal-muted leading-relaxed">
                      The Git Branch Analyzer is a TypeScript/Next.js tool embedded within a larger
                      migration workbench platform at Sopra HR Software. It compares Git branches
                      and commits, generates diff summaries, scores migration risk, detects conflict
                      hotspots, and surfaces analysis through an interactive dashboard — helping
                      engineering teams plan and prioritize code migrations safely.
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="card">
                    <h3 className="font-semibold text-charcoal text-sm mb-3">Technologies</h3>
                    <div className="flex flex-wrap gap-1.5">
                      {TECH_USED.map((t) => (
                        <span key={t} className="tech-pill">{t}</span>
                      ))}
                    </div>
                  </div>

                  {/* AI note */}
                  <div className="rounded-xl border border-blue-border bg-blue-subtle p-4">
                    <p className="text-xs font-semibold text-blue uppercase tracking-wide mb-1.5">
                      AI-Assisted Development
                    </p>
                    <p className="text-xs text-charcoal-muted leading-relaxed">
                      As a complementary exploration, I investigated using{' '}
                      <span className="font-medium text-charcoal">AWS Bedrock</span> with{' '}
                      <span className="font-medium text-charcoal">Amazon Nova Micro</span> for
                      AI-assisted migration report generation — demonstrating how LLMs can
                      summarize structured diff data into human-readable migration narratives.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
