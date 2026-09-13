'use client';

import { useState, useRef, FormEvent } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { Mail, Linkedin, Github, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contact@asmag.dev';

const FORMSUBMIT_URL = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

interface FormData {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}

const INITIAL_FORM: FormData = { name: '', email: '', company: '', subject: '', message: '' };

type Status = 'idle' | 'submitting' | 'success' | 'error';

function validate(data: FormData): Partial<Record<keyof FormData, string>> {
  const errors: Partial<Record<keyof FormData, string>> = {};
  if (!data.name.trim()) errors.name = 'Name is required.';
  if (!data.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Enter a valid email address.';
  }
  if (!data.subject.trim()) errors.subject = 'Subject is required.';
  if (!data.message.trim()) {
    errors.message = 'Message is required.';
  } else if (data.message.trim().length < 20) {
    errors.message = 'Message must be at least 20 characters.';
  } else if (data.message.trim().length > 2000) {
    errors.message = 'Message must be under 2000 characters.';
  }
  return errors;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [status, setStatus] = useState<Status>('idle');

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const prefersReduced = useReducedMotion();

  const animate = (delay = 0) => ({
    initial: prefersReduced ? {} : { opacity: 0, y: 18 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validation = validate(formData);
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }
    setStatus('submitting');
    try {
      const res = await fetch(FORMSUBMIT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: `[Portfolio] ${formData.subject}`,
          message: `Company / Org: ${formData.company || '—'}\n\n${formData.message}`,
          _captcha: 'false',
          _template: 'table',
        }),
      });
      const data = await res.json();
      if (data.success === 'true' || data.success === true) {
        setStatus('success');
        setFormData(INITIAL_FORM);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section
      id="contact"
      className="section-py bg-background"
      aria-labelledby="contact-heading"
      ref={ref}
    >
      <div className="container-max">
        <div className="grid lg:grid-cols-[1fr_420px] gap-12 lg:gap-16 items-start">
          {/* Left — info */}
          <div>
            <motion.span {...animate(0)} className="section-tag">
              Contact
            </motion.span>
            <motion.h2
              {...animate(0.07)}
              id="contact-heading"
              className="section-heading mt-1 mb-4"
            >
              Let&apos;s Build Something Great
            </motion.h2>
            <motion.p {...animate(0.14)} className="text-charcoal-muted leading-relaxed mb-8">
              Interested in working together, discussing a PFE opportunity, or learning
              more about my projects? I&apos;d be happy to hear from you.
            </motion.p>

            {/* Direct contacts */}
            <motion.div {...animate(0.21)} className="space-y-4">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center gap-4 p-4 rounded-xl border border-border bg-surface-2 group hover:border-blue-border hover:bg-blue-subtle transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue"
                aria-label={`Send email to ${CONTACT_EMAIL}`}
              >
                <div className="w-10 h-10 rounded-lg bg-blue-subtle border border-blue-border flex items-center justify-center flex-shrink-0 group-hover:bg-blue group-hover:border-blue transition-all duration-200">
                  <Mail size={18} className="text-blue group-hover:text-white transition-colors duration-200" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-charcoal-subtle uppercase tracking-wide">Email</p>
                  <p className="text-sm font-medium text-charcoal group-hover:text-blue transition-colors duration-200">
                    {CONTACT_EMAIL}
                  </p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/asma-gannar-036421273/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-border bg-surface-2 group hover:border-blue-border hover:bg-blue-subtle transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue"
                aria-label="Connect on LinkedIn (opens in new tab)"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-subtle border border-blue-border flex items-center justify-center flex-shrink-0 group-hover:bg-blue group-hover:border-blue transition-all duration-200">
                  <Linkedin size={18} className="text-blue group-hover:text-white transition-colors duration-200" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-charcoal-subtle uppercase tracking-wide">LinkedIn</p>
                  <p className="text-sm font-medium text-charcoal group-hover:text-blue transition-colors duration-200">
                    asma-gannar-036421273
                  </p>
                </div>
              </a>

              <a
                href="https://github.com/Gannar21"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-border bg-surface-2 group hover:border-white/25 hover:bg-white/8 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue"
                aria-label="View GitHub profile (opens in new tab)"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/15 group-hover:border-white/25 transition-all duration-200">
                  <Github size={18} className="text-charcoal-muted group-hover:text-charcoal transition-colors duration-200" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-charcoal-subtle uppercase tracking-wide">GitHub</p>
                  <p className="text-sm font-medium text-charcoal">Gannar21</p>
                </div>
              </a>
            </motion.div>
          </div>

          {/* Right — form */}
          <motion.div {...animate(0.2)}>
            <div className="card p-7">
              {status === 'success' ? (
                <div className="text-center py-8">
                  <div className="w-14 h-14 rounded-full bg-teal-subtle border border-teal-border flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={28} className="text-teal" aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-charcoal text-lg mb-2">Message Sent!</h3>
                  <p className="text-charcoal-muted text-sm leading-relaxed mb-5">
                    Thank you for reaching out. I&apos;ll get back to you as soon as possible.
                  </p>
                  <button onClick={() => setStatus('idle')} className="btn-secondary text-sm">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
                  <h3 className="font-bold text-charcoal text-base mb-5">Send a Message</h3>

                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="label">
                        Name <span aria-hidden="true" className="text-terracotta">*</span>
                      </label>
                      <input
                        id="name" name="name" type="text"
                        value={formData.name} onChange={handleChange}
                        className={`input-field ${errors.name ? 'border-terracotta/60 focus:ring-terracotta/30 focus:border-terracotta/60' : ''}`}
                        placeholder="Your full name"
                        aria-required="true"
                        aria-describedby={errors.name ? 'name-error' : undefined}
                      />
                      {errors.name && (
                        <p id="name-error" className="mt-1.5 text-xs text-terracotta flex items-center gap-1" role="alert">
                          <AlertCircle size={12} aria-hidden="true" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="label">
                        Email <span aria-hidden="true" className="text-terracotta">*</span>
                      </label>
                      <input
                        id="email" name="email" type="email"
                        value={formData.email} onChange={handleChange}
                        className={`input-field ${errors.email ? 'border-terracotta/60 focus:ring-terracotta/30 focus:border-terracotta/60' : ''}`}
                        placeholder="your@email.com"
                        aria-required="true"
                        aria-describedby={errors.email ? 'email-error' : undefined}
                      />
                      {errors.email && (
                        <p id="email-error" className="mt-1.5 text-xs text-terracotta flex items-center gap-1" role="alert">
                          <AlertCircle size={12} aria-hidden="true" />
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="company" className="label">
                        Company / Organization
                      </label>
                      <input
                        id="company" name="company" type="text"
                        value={formData.company} onChange={handleChange}
                        className="input-field"
                        placeholder="Your company (optional)"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="label">
                        Subject <span aria-hidden="true" className="text-terracotta">*</span>
                      </label>
                      <input
                        id="subject" name="subject" type="text"
                        value={formData.subject} onChange={handleChange}
                        className={`input-field ${errors.subject ? 'border-terracotta/60 focus:ring-terracotta/30 focus:border-terracotta/60' : ''}`}
                        placeholder="PFE opportunity, project inquiry…"
                        aria-required="true"
                        aria-describedby={errors.subject ? 'subject-error' : undefined}
                      />
                      {errors.subject && (
                        <p id="subject-error" className="mt-1.5 text-xs text-terracotta flex items-center gap-1" role="alert">
                          <AlertCircle size={12} aria-hidden="true" />
                          {errors.subject}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="message" className="label">
                        Message <span aria-hidden="true" className="text-terracotta">*</span>
                      </label>
                      <textarea
                        id="message" name="message" rows={5}
                        value={formData.message} onChange={handleChange}
                        className={`input-field resize-none ${errors.message ? 'border-terracotta/60 focus:ring-terracotta/30 focus:border-terracotta/60' : ''}`}
                        placeholder="Tell me about the opportunity or your project…"
                        aria-required="true"
                        aria-describedby={errors.message ? 'message-error' : 'message-hint'}
                      />
                      <div className="flex items-center justify-between mt-1">
                        {errors.message ? (
                          <p id="message-error" className="text-xs text-terracotta flex items-center gap-1" role="alert">
                            <AlertCircle size={12} aria-hidden="true" />
                            {errors.message}
                          </p>
                        ) : (
                          <span id="message-hint" />
                        )}
                        <span className="text-xs text-charcoal-subtle ml-auto">
                          {formData.message.length}/2000
                        </span>
                      </div>
                    </div>

                    {status === 'error' && (
                      <div
                        className="flex items-center gap-2 p-3 rounded-lg bg-terracotta-subtle border border-terracotta-border text-sm text-terracotta"
                        role="alert"
                      >
                        <AlertCircle size={16} aria-hidden="true" />
                        Something went wrong. Please try again or email me directly.
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                      aria-busy={status === 'submitting'}
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 size={16} className="animate-spin" aria-hidden="true" />
                          Sending…
                        </>
                      ) : (
                        <>
                          <Send size={16} aria-hidden="true" />
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
