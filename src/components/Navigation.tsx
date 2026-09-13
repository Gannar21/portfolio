'use client';

import { useState, useEffect } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );

    NAV_LINKS.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-surface/80 backdrop-blur-xl border-b border-border shadow-nav'
            : 'bg-transparent'
        )}
      >
        <div className="container-max">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={() => handleNavClick('#home')}
              className="flex items-center gap-2.5 group focus-visible:outline-none"
              aria-label="Go to home"
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold tracking-tight transition-transform duration-200 group-hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #8b5cf6, #22d3ee)' }}
              >
                AG
              </div>
              <span className="font-semibold text-charcoal text-sm hidden sm:block">
                Asma Gannar
              </span>
            </button>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1" role="navigation" aria-label="Main navigation">
              {NAV_LINKS.map(({ label, href }) => (
                <button
                  key={href}
                  onClick={() => handleNavClick(href)}
                  className={cn(
                    'px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue',
                    activeSection === href.replace('#', '')
                      ? 'text-blue bg-blue-subtle'
                      : 'text-charcoal-muted hover:text-charcoal hover:bg-white/5'
                  )}
                >
                  {label}
                </button>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="/Asma-Gannar-CV.pdf"
                download
                className="btn-primary text-xs px-4 py-2"
                aria-label="Download CV as PDF"
              >
                <Download size={14} />
                Download CV
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg text-charcoal-muted hover:text-charcoal hover:bg-white/5 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          'fixed inset-0 z-40 lg:hidden transition-all duration-300',
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-background/70 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />

        {/* Drawer */}
        <div
          className={cn(
            'absolute top-0 right-0 h-full w-72 bg-surface border-l border-border shadow-xl transition-transform duration-300',
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <div className="flex items-center justify-between p-4 border-b border-border">
            <span className="font-semibold text-charcoal">Menu</span>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 rounded-lg text-charcoal-muted hover:text-charcoal hover:bg-white/5 transition-colors duration-200"
              aria-label="Close menu"
            >
              <X size={18} />
            </button>
          </div>

          <nav className="p-4 space-y-1" role="navigation" aria-label="Mobile navigation">
            {NAV_LINKS.map(({ label, href }) => (
              <button
                key={href}
                onClick={() => handleNavClick(href)}
                className={cn(
                  'w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200',
                  activeSection === href.replace('#', '')
                    ? 'text-blue bg-blue-subtle'
                    : 'text-charcoal-muted hover:text-charcoal hover:bg-white/5'
                )}
              >
                {label}
              </button>
            ))}
          </nav>

          <div className="p-4 border-t border-border">
            <a
              href="/Asma-Gannar-CV.pdf"
              download
              className="btn-primary w-full justify-center"
              aria-label="Download CV as PDF"
            >
              <Download size={16} />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
