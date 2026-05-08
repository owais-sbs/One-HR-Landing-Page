'use client';
import React, { useEffect, useState } from 'react';

const NAV_HEIGHT = 74; // px — keep in sync with navbar h-[74px]

const navItems = [
  { label: 'About',       href: '#about' },
  { label: 'Features',    href: '#services' },
  { label: 'Integration', href: '#oracle' },
  { label: 'Pricing',     href: '#resources' },
  { label: 'Contact',     href: '#contact' },
];

function smoothScrollTo(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT - 8;
  window.scrollTo({ top, behavior: 'smooth' });
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linkClass = `transition-colors duration-200 cursor-pointer ${
    scrolled ? 'text-gray-600 hover:text-[#111827]' : 'text-gray-300 hover:text-white'
  }`;

  return (
    <nav
      className={`w-full sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-sm border-b border-gray-100' : 'bg-black'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-14 flex items-center justify-between h-[74px]">

        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center focus:outline-none"
        >
          <span className="text-[26px] tracking-tight">
            <span className={`font-normal transition-colors duration-300 ${scrolled ? 'text-[#111827]' : 'text-white'}`}>One </span>
            <span className={`font-extrabold transition-colors duration-300 ${scrolled ? 'text-[#111827]' : 'text-white'}`}>HR</span>
            <span className="font-extrabold text-[#2582ff]">.</span>
          </span>
        </button>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-8 text-[15px] font-medium">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => smoothScrollTo(item.href.replace('#', ''))}
              className={linkClass}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Right: Login + GET STARTED */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="#login"
            className={`text-[15px] font-medium transition-colors duration-300 ${
              scrolled ? 'text-[#111827] hover:text-gray-500' : 'text-white hover:text-gray-300'
            }`}
          >
            Login
          </a>
          <button
            onClick={() => smoothScrollTo('contact')}
            className={`text-[13px] font-bold border rounded-full px-6 py-2 transition-all duration-300 tracking-widest uppercase ${
              scrolled
                ? 'text-[#111827] border-[#111827] hover:bg-[#111827] hover:text-white'
                : 'text-white border-white hover:bg-white hover:text-black'
            }`}
          >
            Get Started
          </button>
        </div>

        {/* Mobile hamburger */}
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

      {/* Mobile menu */}
      {menuOpen && (
        <div className={`md:hidden px-6 pb-5 flex flex-col gap-4 text-[15px] font-medium ${scrolled ? 'bg-white' : 'bg-black'}`}>
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => { smoothScrollTo(item.href.replace('#', '')); setMenuOpen(false); }}
              className={`text-left ${linkClass}`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => { smoothScrollTo('contact'); setMenuOpen(false); }}
            className="mt-2 text-[13px] font-bold border rounded-full px-6 py-2 w-fit tracking-widest uppercase text-white border-white hover:bg-white hover:text-black transition-all"
          >
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}
