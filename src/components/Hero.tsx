'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ArrowDown, ChevronRight } from 'lucide-react';

const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contact@asmag.dev';

const SPECIALIZATIONS = ['Software Engineering', 'AI/ML', 'LLMs', 'Cybersecurity'];

const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/Gannar21', icon: Github, external: true },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/asma-gannar-036421273/', icon: Linkedin, external: true },
  { label: 'Email', href: `mailto:${CONTACT_EMAIL}`, icon: Mail, external: false },
  { label: 'CV', href: '/Asma-Gannar-CV.pdf', icon: Download, download: true, external: false },
];

export default function Hero() {
  const prefersReduced = useReducedMotion();

  const fadeUp = (delay: number) => ({
    initial: prefersReduced ? {} : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-background"
      aria-label="Introduction"
    >
      {/* Violet glow orb — top left */}
      <div
        className="absolute top-[-15%] left-[-10%] w-[700px] h-[700px] rounded-full pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 65%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Cyan glow orb — bottom right */}
      <div
        className="absolute bottom-[-20%] right-[-8%] w-[600px] h-[600px] rounded-full pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(circle, rgba(34,211,238,0.13) 0%, transparent 65%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.015]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          backgroundSize: '200px 200px',
        }}
      />

      <div className="container-max relative z-10 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Availability badge */}
          <motion.div {...fadeUp(0.05)} className="mb-8">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-charcoal-light text-sm font-medium">
              <span
                className="w-2 h-2 rounded-full bg-teal animate-pulse"
                aria-hidden="true"
              />
              Open to PFE / Capstone Internship — January 2027
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            {...fadeUp(0.12)}
            className="text-[clamp(2.75rem,8vw,4.75rem)] font-bold tracking-tight leading-[1.06] mb-5"
            style={{
              background: 'linear-gradient(135deg, #e2d9ff 0%, #a78bfa 45%, #67e8f9 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
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
                  <span className="text-charcoal-subtle font-normal" aria-hidden="true">·</span>
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
            className="text-sm text-charcoal-subtle mb-10 flex items-center gap-1.5"
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
