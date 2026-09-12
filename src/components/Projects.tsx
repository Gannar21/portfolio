'use client';

import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Users, CheckCircle2 } from 'lucide-react';

interface Project {
  title: string;
  subtitle?: string;
  date?: string;
  description: string;
  role?: string;
  teamNote?: string;
  category: string;
  categoryColor: 'blue' | 'teal' | 'terracotta';
  tech: string[];
  features: string[];
  github?: string;
  live?: string;
  featured?: boolean;
}

const PROJECTS: Project[] = [
  {
    title: 'Gruup',
    subtitle: 'Gym Management SaaS',
    description:
      'A multi-tenant gym management platform designed to simplify gym administration, member management, attendance, classes, billing, and analytics.',
    category: 'SaaS Platform',
    categoryColor: 'blue',
    teamNote: 'Co-built with two teammates',
    tech: ['Next.js', 'React', 'TypeScript', 'Supabase', 'React Native', 'Expo'],
    features: [
      'Multi-tenant architecture with custom gym branding',
      'Role-based access control',
      'QR check-in & attendance tracking',
      'Class and member management',
      'Billing and analytics dashboards',
      'CSV export and realtime features',
      'Mobile application (React Native / Expo)',
      'Supabase Auth & Row Level Security',
    ],
    live: 'https://gruup.dev',
    featured: true,
  },
  {
    title: 'XAI Internship PFE Portal',
    subtitle: 'Orange ISS Project',
    date: 'February 2026 – Present',
    description:
      'An internship and PFE management platform connecting students, coordinators, supervisors, HR teams, and technical stakeholders across the full internship lifecycle.',
    category: 'Student Project',
    categoryColor: 'teal',
    tech: ['Angular', 'TypeScript', 'NestJS', 'PostgreSQL', 'Azure', 'HTML', 'CSS'],
    features: [
      'Full internship and PFE management lifecycle',
      'Role-based access for students, coordinators, HR, and supervisors',
      'CV parsing and automated candidate ranking',
      'Explainable AI (XAI) for transparent decision support',
      'Student and supervisor management workflows',
      'Cloud deployment on Azure',
    ],
    featured: true,
  },
  {
    title: 'AI Assistant for Software Engineering',
    description:
      'An AI-assisted software engineering application exploring LLM-powered support for development workflows, including structured prompting and context-aware interactions.',
    category: 'AI / LLM',
    categoryColor: 'blue',
    tech: ['Python', 'Streamlit', 'Ollama', 'LLMs', 'Structured Prompting'],
    features: [
      'LLM-powered development workflow assistance',
      'Structured prompt engineering',
      'AI-assisted code understanding',
      'Software engineering-focused interactions',
    ],
  },
  {
    title: '2M Stoneware Website',
    date: 'July 2024',
    description:
      'A modern business website developed for a stoneware company, providing a clean and professional online presence.',
    category: 'Web Development',
    categoryColor: 'terracotta',
    tech: ['HTML', 'CSS', 'JavaScript'],
    features: [
      'Responsive business website',
      'Clean product presentation',
      'Mobile-friendly layout',
    ],
  },
];

const CATEGORY_STYLES = {
  blue: 'bg-blue-subtle text-blue border-blue-border',
  teal: 'bg-teal-subtle text-teal border-teal-border',
  terracotta: 'bg-terracotta-subtle text-terracotta border-terracotta-border',
};

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const prefersReduced = useReducedMotion();

  return (
    <motion.article
      ref={ref}
      initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className="card flex flex-col h-full group"
      aria-label={`Project: ${project.title}`}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <span
          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${CATEGORY_STYLES[project.categoryColor]}`}
        >
          {project.category}
        </span>
        {project.date && (
          <span className="text-[11px] text-charcoal-subtle flex-shrink-0">{project.date}</span>
        )}
      </div>

      {/* Title */}
      <div className="mb-3">
        <h3 className="font-bold text-charcoal text-lg leading-snug">{project.title}</h3>
        {project.subtitle && (
          <p className="text-charcoal-muted text-sm mt-0.5">{project.subtitle}</p>
        )}
      </div>

      {/* Team note */}
      {project.teamNote && (
        <div className="flex items-center gap-1.5 text-xs text-charcoal-muted mb-3">
          <Users size={12} aria-hidden="true" />
          {project.teamNote}
        </div>
      )}

      {/* Description */}
      <p className="text-sm text-charcoal-muted leading-relaxed mb-4">{project.description}</p>

      {/* Features */}
      <div className="mb-5 flex-1">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-charcoal-subtle mb-2">
          Key Features
        </p>
        <ul className="space-y-1.5" aria-label="Key features">
          {project.features.slice(0, 5).map((f) => (
            <li key={f} className="flex items-start gap-2 text-xs text-charcoal-muted leading-snug">
              <CheckCircle2 size={12} className="text-teal flex-shrink-0 mt-0.5" aria-hidden="true" />
              {f}
            </li>
          ))}
          {project.features.length > 5 && (
            <li className="text-xs text-charcoal-subtle pl-5">
              +{project.features.length - 5} more
            </li>
          )}
        </ul>
      </div>

      {/* Tech */}
      <div className="mb-5">
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span key={t} className="tech-pill">{t}</span>
          ))}
        </div>
      </div>

      {/* Links */}
      <div className="flex items-center gap-3 pt-4 border-t border-border-light">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost text-xs px-3 py-1.5"
            aria-label={`View ${project.title} on GitHub (opens in new tab)`}
          >
            <Github size={14} aria-hidden="true" />
            GitHub
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs px-3 py-1.5"
            aria-label={`View ${project.title} live site (opens in new tab)`}
          >
            <ExternalLink size={13} aria-hidden="true" />
            Live Demo
          </a>
        )}
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const prefersReduced = useReducedMotion();

  const animate = (delay = 0) => ({
    initial: prefersReduced ? {} : { opacity: 0, y: 18 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
  });

  const featured = PROJECTS.filter((p) => p.featured);
  const others = PROJECTS.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="section-py bg-surface"
      aria-labelledby="projects-heading"
      ref={ref}
    >
      <div className="container-max">
        <div className="mb-12">
          <motion.span {...animate(0)} className="section-tag">
            Projects
          </motion.span>
          <motion.h2
            {...animate(0.07)}
            id="projects-heading"
            className="section-heading mt-1"
          >
            What I&apos;ve Built
          </motion.h2>
          <motion.p {...animate(0.14)} className="section-subheading">
            A selection of projects across SaaS, AI/ML, and web development.
          </motion.p>
        </div>

        {/* Featured projects — larger cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {featured.map((project, i) => (
            <ProjectCard key={project.title} project={project} delay={0.2 + i * 0.1} />
          ))}
        </div>

        {/* Other projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-6">
          {others.map((project, i) => (
            <ProjectCard key={project.title} project={project} delay={0.4 + i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
