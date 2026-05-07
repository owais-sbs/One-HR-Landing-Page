'use client';
import React, { useEffect, useState } from 'react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkClass = `transition-colors duration-200 ${
    scrolled ? 'text-gray-600 hover:text-[#111827]' : 'text-gray-300 hover:text-white'
  }`;

  return (
    <nav
      className={`w-full sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-sm border-b border-gray-100'
          : 'bg-black'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-14 flex items-center justify-between h-[74px]">

        {/* Logo */}
        <div className="flex items-center">
          <span className="text-[26px] tracking-tight">
            <span className={`font-normal transition-colors duration-300 ${scrolled ? 'text-[#111827]' : 'text-white'}`}>One </span>
            <span className={`font-extrabold transition-colors duration-300 ${scrolled ? 'text-[#111827]' : 'text-white'}`}>HR</span>
            <span className="font-extrabold text-[#2582ff]">.</span>
          </span>
        </div>

        {/* Center Nav Links */}
        <div className={`hidden md:flex items-center space-x-9 text-[16px] font-medium`}>
          <a href="#about" className={navLinkClass}>About</a>
          <a href="#services" className={navLinkClass}>Features</a>
          <a href="#resources" className={navLinkClass}>Pricing</a>
          <a href="#contact" className={navLinkClass}>Contact</a>
        </div>

        {/* Right: Login + GET STARTED */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="#login"
            className={`text-[16px] font-medium transition-colors duration-300 ${
              scrolled ? 'text-[#111827] hover:text-gray-500' : 'text-white hover:text-gray-300'
            }`}
          >
            Login
          </a>
          <a
            href="#contact"
            className={`text-[13px] font-bold border rounded-full px-6 py-2 transition-all duration-300 tracking-widest uppercase ${
              scrolled
                ? 'text-[#111827] border-[#111827] hover:bg-[#111827] hover:text-white'
                : 'text-white border-white hover:bg-white hover:text-black'
            }`}
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}
