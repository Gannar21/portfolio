'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ArrowDown, ChevronRight } from 'lucide-react';

const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contact@asmag.dev';

const SPECIALIZATIONS = ['Software Engineering', 'AI/ML', 'LLMs', 'Cybersecurity'];

const SOCIAL_LINKS = [
  {
    label: 'GitHub',
    href: 'https://github.com/Gannar21',
    icon: Github,
    external: true,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/asma-gannar-036421273/',
    icon: Linkedin,
    external: true,
  },
  {
    label: 'Email',
    href: `mailto:${CONTACT_EMAIL}`,
    icon: Mail,
    external: false,
  },
  {
    label: 'CV',
    href: '/Asma-Gannar-CV.pdf',
    icon: Download,
    download: true,
    external: false,
  },
];

export default function Hero() {
  const prefersReduced = useReducedMotion();

  const fadeUp = (delay: number) => ({
    initial: prefersReduced ? {} : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-background"
      aria-label="Introduction"
    >
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            'radial-gradient(circle, #d1d5db 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          opacity: 0.35,
        }}
      />

      {/* Soft gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 60% 40%, rgba(239,246,255,0.6) 0%, transparent 70%)',
        }}
      />

      <div className="container-max relative z-10 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Availability badge */}
          <motion.div {...fadeUp(0.05)} className="mb-8">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-border bg-blue-subtle text-blue text-sm font-medium">
              <span
                className="w-2 h-2 rounded-full bg-blue animate-pulse"
                aria-hidden="true"
              />
              Open to PFE / Capstone Internship — January 2027
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            {...fadeUp(0.12)}
            className="text-[clamp(2.75rem,8vw,4.5rem)] font-bold text-charcoal tracking-tight leading-[1.08] mb-5"
          >
            Asma Gannar
          </motion.h1>

          {/* Specializations */}
          <motion.p
            {...fadeUp(0.2)}
            className="text-lg md:text-xl text-charcoal-light font-medium mb-6 flex flex-wrap gap-x-2.5 gap-y-1"
            aria-label="Specializations"
          >
            {SPECIALIZATIONS.map((spec, i) => (
              <span key={spec} className="inline-flex items-center gap-2.5">
                {spec}
                {i < SPECIALIZATIONS.length - 1 && (
                  <span className="text-border-DEFAULT font-normal" aria-hidden="true">·</span>
                )}
              </span>
            ))}
          </motion.p>

          {/* Tagline */}
          <motion.p
            {...fadeUp(0.28)}
            className="text-base md:text-lg text-charcoal-muted leading-relaxed mb-3 max-w-xl"
          >
            Building intelligent, reliable software solutions at the intersection of
            software engineering, AI, and cybersecurity.
          </motion.p>

          {/* Education line */}
          <motion.p
            {...fadeUp(0.35)}
            className="text-sm text-charcoal-muted mb-10 flex items-center gap-1.5"
          >
            <span className="w-1 h-1 rounded-full bg-teal inline-block" aria-hidden="true" />
            Final-Year Software Engineering Student · Class of 2027 · MedTech, SMU
          </motion.p>

          {/* CTAs */}
          <motion.div
            {...fadeUp(0.42)}
            className="flex flex-wrap items-center gap-3 mb-12"
          >
            <a
              href="#projects"
              className="btn-primary"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View My Work
              <ChevronRight size={16} className="-mr-1" />
            </a>
            <a
              href="#contact"
              className="btn-secondary"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact Me
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            {...fadeUp(0.5)}
            className="flex flex-wrap items-center gap-5"
            aria-label="Social links"
          >
            {SOCIAL_LINKS.map(({ label, href, icon: Icon, external, download }) => (
              <a
                key={label}
                href={href}
                className="social-link"
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                download={download}
                aria-label={`${label}${external ? ' (opens in new tab)' : ''}`}
              >
                <Icon size={17} aria-hidden="true" />
                <span>{label}</span>
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={prefersReduced ? {} : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-charcoal-subtle"
        aria-hidden="true"
      >
        <span className="text-[10px] uppercase tracking-[0.15em] font-medium">Scroll</span>
        <ArrowDown size={14} className="animate-bounce" />
      </motion.div>
    </section>
  );
}
