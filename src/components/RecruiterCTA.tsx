'use client';

import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import { Download, Mail, Linkedin, ArrowRight } from 'lucide-react';

export default function RecruiterCTA() {
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
      aria-labelledby="recruiter-cta-heading"
      className="py-16 md:py-20 relative overflow-hidden"
      ref={ref}
      style={{ background: 'linear-gradient(135deg, #1A0A3E 0%, #0A1A3A 50%, #0A2030 100%)' }}
    >
      {/* Background orbs */}
      <div
        className="absolute top-[-30%] left-[-10%] w-[500px] h-[500px] rounded-full pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <div
        className="absolute bottom-[-30%] right-[-10%] w-[400px] h-[400px] rounded-full pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(circle, rgba(34,211,238,0.15) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="container-max text-center relative z-10">
        <motion.div {...animate(0)} className="max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white/80 text-xs font-semibold uppercase tracking-wider mb-5">
            Open to Opportunities
          </span>

          <h2
            id="recruiter-cta-heading"
            className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4"
          >
            Looking for a Software Engineering,
            AI, or Cybersecurity intern?
          </h2>

          <p className="text-white/65 text-lg leading-relaxed mb-10">
            Let&apos;s talk about how I could contribute to your team.
            I&apos;m seeking a 6-month PFE / capstone internship starting January 2027.
          </p>

          <motion.div
            {...animate(0.12)}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            <a
              href="/Asma-Gannar-CV.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-[#1A0A3E] font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-[0.98]"
              aria-label="Download CV as PDF"
            >
              <Download size={16} aria-hidden="true" />
              Download CV
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white font-semibold text-sm transition-all duration-200 hover:bg-white/20 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-[0.98]"
            >
              <Mail size={16} aria-hidden="true" />
              Contact Me
              <ArrowRight size={14} className="-mr-1" aria-hidden="true" />
            </a>

            <a
              href="https://www.linkedin.com/in/asma-gannar-036421273/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white font-semibold text-sm transition-all duration-200 hover:bg-white/20 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-[0.98]"
              aria-label="Connect on LinkedIn (opens in new tab)"
            >
              <Linkedin size={16} aria-hidden="true" />
              LinkedIn
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
