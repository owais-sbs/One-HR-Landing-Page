'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Button } from './Button';
import { Container } from './Container';
import { Menu, X } from './Icons';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Resources', href: '#resources' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace('#', ''));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (!sections.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target instanceof HTMLElement) {
          setActive(visibleEntry.target.id);
        }
      },
      {
        rootMargin: '-18% 0px -62% 0px',
        threshold: [0.18, 0.3, 0.45, 0.6],
      }
    );

    sections.forEach((section) => observer.observe(section));

    const activeSection = sections.find((section) => {
      const rect = section.getBoundingClientRect();
      return rect.top <= 140 && rect.bottom >= 140;
    });

    if (activeSection) {
      setActive(activeSection.id);
    }

    return () => observer.disconnect();
  }, []);

  const desktopLinkClasses = (href: string) => {
    const isActive = active === href.replace('#', '');

    return [
      'relative rounded-full px-4 py-2.5 text-sm font-medium transition-all duration-300',
      isActive ? 'text-white' : 'text-slate-300 hover:text-white',
    ].join(' ');
  };

  return (
    <motion.nav
      initial={shouldReduceMotion ? false : { y: -18, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#020617]/55 backdrop-blur-2xl supports-[backdrop-filter]:bg-[#020617]/45"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/45 to-transparent" />
      <Container className="relative">
        <div className="flex items-center justify-between py-3.5 md:py-4">
          <motion.a
            href="#home"
            className="group flex items-center gap-3"
            whileHover={shouldReduceMotion ? undefined : { y: -1 }}
            transition={{ duration: 0.2 }}
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-sm font-semibold text-cyan-100 shadow-[0_15px_45px_rgba(15,23,42,0.25)] backdrop-blur-xl">
              OH
            </span>
            <div>
              <p className="font-heading text-lg font-semibold tracking-tight text-white md:text-xl">One HR</p>
              <p className="text-[11px] uppercase tracking-[0.26em] text-slate-400">Modern workspace</p>
            </div>
          </motion.a>

          <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1.5 shadow-[0_18px_50px_rgba(2,6,23,0.2)] backdrop-blur-xl md:flex">
            {navItems.map((item) => {
              const isActive = active === item.href.replace('#', '');

              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  whileHover={shouldReduceMotion ? undefined : { y: -1 }}
                  onClick={() => setActive(item.href.replace('#', ''))}
                  className={desktopLinkClasses(item.href)}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="active-nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-white/8"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                </motion.a>
              );
            })}
          </div>

          <div className="hidden md:block">
            <Button
              href="#contact"
              size="sm"
              className="bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-500 text-slate-950"
            >
              Get in touch
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white shadow-[0_12px_30px_rgba(2,6,23,0.2)] md:hidden"
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="absolute left-4 right-4 top-[calc(100%+0.75rem)] rounded-[28px] border border-white/10 bg-[#020617]/95 p-3 shadow-[0_30px_90px_rgba(15,23,42,0.45)] backdrop-blur-2xl md:hidden"
            >
              <div className="flex flex-col gap-1 text-sm text-slate-300">
                {navItems.map((item) => {
                  const isActive = active === item.href.replace('#', '');

                  return (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      onClick={() => {
                        setOpen(false);
                        setActive(item.href.replace('#', ''));
                      }}
                      whileTap={{ scale: 0.98 }}
                      className={`rounded-2xl px-4 py-3 transition-all ${
                        isActive ? 'bg-white/10 text-white' : 'hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      {item.label}
                    </motion.a>
                  );
                })}

                <Button
                  href="#contact"
                  size="lg"
                  className="mt-2 bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-500 text-slate-950"
                >
                  Get in touch
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </motion.nav>
  );
}
