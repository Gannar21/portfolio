import { Github, Linkedin, Mail } from 'lucide-react';

const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contact@asmag.dev';

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
];

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white" role="contentinfo">
      <div className="container-max py-12">
        <div className="grid sm:grid-cols-[1fr_auto] gap-8 items-start mb-10 pb-10 border-b border-white/10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-lg bg-blue flex items-center justify-center text-white text-sm font-bold">
                AG
              </div>
              <span className="font-bold text-white text-lg">Asma Gannar</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Software Engineering · AI/ML · LLMs · Cybersecurity
            </p>
            <p className="text-white/40 text-xs mt-2">
              Final-Year Student · MedTech, SMU · Class of 2027
            </p>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            © {year} Asma Gannar. Built with Next.js & Tailwind CSS.
          </p>

          {/* Social links */}
          <div className="flex items-center gap-4" aria-label="Social links">
            {SOCIAL_LINKS.map(({ label, href, icon: Icon, external }) => (
              <a
                key={label}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                className="text-white/40 hover:text-white transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                aria-label={`${label}${external ? ' (opens in new tab)' : ''}`}
              >
                <Icon size={18} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
