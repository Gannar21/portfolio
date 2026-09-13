'use client';

import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Brain, Shield, Database, TestTube2 } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  color: 'blue' | 'teal' | 'terracotta';
  skills: string[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Software Engineering',
    icon: Code2,
    color: 'blue',
    skills: [
      'TypeScript', 'JavaScript', 'Python', 'Java', 'C / C++',
      'React', 'Next.js', 'Angular', 'NestJS', 'Node.js',
      'REST APIs', 'Software Architecture', 'Git / GitLab',
    ],
  },
  {
    title: 'AI / Machine Learning',
    icon: Brain,
    color: 'teal',
    skills: [
      'Machine Learning', 'Artificial Intelligence', 'Large Language Models (LLMs)',
      'AI Engineering', 'Prompt Engineering', 'RAG Concepts', 'AI-Assisted Development',
    ],
  },
  {
    title: 'Cybersecurity',
    icon: Shield,
    color: 'terracotta',
    skills: [
      'Cybersecurity', 'Security Assessment', 'Secure Software Development',
      'ML Security Concepts',
    ],
  },
  {
    title: 'Data & Cloud',
    icon: Database,
    color: 'blue',
    skills: [
      'PostgreSQL', 'Supabase', 'Data Analytics', 'Azure', 'Docker',
    ],
  },
  {
    title: 'Testing & Quality',
    icon: TestTube2,
    color: 'teal',
    skills: [
      'Software Quality', 'Software Testing', 'Vitest', 'Automated Testing',
    ],
  },
];

const COLOR_STYLES = {
  blue: {
    icon: 'bg-blue-subtle text-blue border-blue-border',
    heading: 'text-blue',
    pill: 'bg-blue-subtle text-blue border border-blue-border/60',
  },
  teal: {
    icon: 'bg-teal-subtle text-teal border-teal-border',
    heading: 'text-teal',
    pill: 'bg-teal-subtle text-teal border border-teal-border/60',
  },
  terracotta: {
    icon: 'bg-terracotta-subtle text-terracotta border-terracotta-border',
    heading: 'text-terracotta',
    pill: 'bg-terracotta-subtle text-terracotta border border-terracotta-border/60',
  },
};

function SkillGroup({ category, delay }: { category: SkillCategory; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const prefersReduced = useReducedMotion();
  const styles = COLOR_STYLES[category.color];
  const Icon = category.icon;

  return (
    <motion.div
      ref={ref}
      initial={prefersReduced ? {} : { opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className="card"
    >
      <div className="flex items-center gap-3 mb-4">
        <div
          className={`w-9 h-9 rounded-lg border flex items-center justify-center flex-shrink-0 ${styles.icon}`}
        >
          <Icon size={18} aria-hidden="true" />
        </div>
        <h3 className={`font-semibold text-sm ${styles.heading}`}>
          {category.title}
        </h3>
      </div>

      <div className="flex flex-wrap gap-1.5" role="list" aria-label={`${category.title} skills`}>
        {category.skills.map((skill) => (
          <span
            key={skill}
            role="listitem"
            className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium ${styles.pill}`}
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
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
      id="skills"
      className="section-py bg-background"
      aria-labelledby="skills-heading"
      ref={ref}
    >
      <div className="container-max">
        <div className="mb-12">
          <motion.span {...animate(0)} className="section-tag">
            Skills
          </motion.span>
          <motion.h2
            {...animate(0.07)}
            id="skills-heading"
            className="section-heading mt-1"
          >
            Technical Toolkit
          </motion.h2>
          <motion.p {...animate(0.14)} className="section-subheading">
            Hands-on experience across software engineering, AI/ML, and security.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILL_CATEGORIES.map((cat, i) => (
            <SkillGroup key={cat.title} category={cat} delay={0.15 + i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
