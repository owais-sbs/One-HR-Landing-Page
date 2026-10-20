'use client';
import React, { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

const NAV_HEIGHT = 74; // px — keep in sync with navbar h-[74px]

const navItems = [
  { label: 'About', href: 'about' },
  { label: 'Features', href: 'services' },
  { label: 'Integration', href: 'oracle' },
  { label: 'Pricing', href: 'resources' },
  { label: 'Contact', href: 'contact' },
];

function smoothScrollTo(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT - 8;
  window.scrollTo({ top, behavior: 'smooth' });
}

export function Navbar({ forceSolid = false }: { forceSolid?: boolean }) {
  const [scrolled, setScrolled] = useState(forceSolid);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === '/';

  useEffect(() => {
    if (forceSolid) {
      setScrolled(true);
      return;
    }
    const handleScroll = () => setScrolled(window.scrollY > 80);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [forceSolid]);

  useEffect(() => {
    if (!isHome) return;
    const hash = window.location.hash.replace('#', '');
    if (!hash) return;
    const timer = window.setTimeout(() => smoothScrollTo(hash), 80);
    return () => window.clearTimeout(timer);
  }, [isHome, pathname]);

  const goToSection = (id: string) => {
    setMenuOpen(false);
    if (isHome) {
      smoothScrollTo(id);
      return;
    }
    router.push(`/#${id}`);
  };

  const goHome = () => {
    setMenuOpen(false);
    if (isHome) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    router.push('/');
  };

  const linkClass = `transition-colors duration-200 cursor-pointer ${
    scrolled ? 'text-gray-600 hover:text-[#111827]' : 'text-white/80 hover:text-white'
  }`;

  const ctaStyle = scrolled
    ? undefined
    : {
        backgroundImage: 'linear-gradient(90deg, #3b82f6 0%, #6366f1 55%, #8b5cf6 100%)',
        boxShadow: '0 10px 28px -10px rgba(99,102,241,0.85)',
      };

  return (
    <nav
      className={`w-full sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-sm border-b border-gray-100' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-14 flex items-center justify-between h-[74px]">
        <button onClick={goHome} className="flex items-center focus:outline-none">
          <span className="text-[26px] tracking-tight">
            <span className={`font-normal transition-colors duration-300 ${scrolled ? 'text-[#111827]' : 'text-white'}`}>One </span>
            <span className={`font-extrabold transition-colors duration-300 ${scrolled ? 'text-[#111827]' : 'text-white'}`}>HR</span>
            <span
              className="font-extrabold"
              style={{
                backgroundImage: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              .
            </span>
          </span>
        </button>

        <div className="hidden md:flex items-center space-x-8 text-[15px] font-medium">
          {navItems.map((item) => (
            <button key={item.label} onClick={() => goToSection(item.href)} className={linkClass}>
              {item.label}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center">
          <button
            onClick={() => goToSection('contact')}
            className={`text-[12px] font-bold rounded-full px-6 py-2.5 tracking-[0.14em] uppercase transition-all duration-300 ${
              scrolled
                ? 'text-[#111827] border border-[#111827] hover:bg-[#111827] hover:text-white'
                : 'text-white border-transparent hover:brightness-110'
            }`}
            style={ctaStyle}
          >
            Get Started
          </button>
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 transition-colors ${scrolled ? 'bg-[#111827]' : 'bg-white'}`} />
          <span className={`block w-6 h-0.5 transition-colors ${scrolled ? 'bg-[#111827]' : 'bg-white'}`} />
          <span className={`block w-6 h-0.5 transition-colors ${scrolled ? 'bg-[#111827]' : 'bg-white'}`} />
        </button>
      </div>

      {menuOpen && (
        <div className={`md:hidden px-6 pb-5 flex flex-col gap-4 text-[15px] font-medium ${scrolled ? 'bg-white' : 'bg-[#020617]'}`}>
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => goToSection(item.href)}
              className={`text-left ${linkClass}`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => goToSection('contact')}
            className={`mt-2 text-[12px] font-bold rounded-full px-6 py-2.5 w-fit tracking-[0.14em] uppercase text-white transition-all duration-300 ${
              scrolled ? 'border border-[#111827] text-[#111827]' : 'border-transparent'
            }`}
            style={scrolled ? undefined : ctaStyle}
          >
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}
