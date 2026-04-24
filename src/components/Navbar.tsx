'use client';
import React, { useState, useEffect } from 'react';
import { Container } from './Container';
import { Button } from './Button';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm border-b border-gray-100 py-4' : 'bg-transparent py-6'}`}>
      <Container className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <span className={`text-2xl font-extrabold tracking-tight transition-colors ${isScrolled ? 'text-[#111827]' : 'text-white'}`}>
            One HR<span className="text-[#2582ff]">.</span>
          </span>
        </div>

        {/* Links */}
        <div className={`hidden md:flex items-center space-x-10 text-sm font-semibold transition-colors ${isScrolled ? 'text-gray-700' : 'text-white/90'}`}>
          <a href="#" className={`hover:text-[#2582ff] transition-colors`}>Features</a>
          <a href="#services" className={`hover:text-[#2582ff] transition-colors`}>Enterprise</a>
          <a href="#about" className={`hover:text-[#2582ff] transition-colors`}>Pricing</a>
          <a href="#company" className={`hover:text-[#2582ff] transition-colors`}>Company</a>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#login" className={`text-sm font-semibold transition-colors ${isScrolled ? 'text-gray-700 hover:text-[#2582ff]' : 'text-white hover:text-white/80'}`}>
            Login
          </a>
          <a href="#contact">
            <Button variant="outline" size="sm" className={`rounded-full px-6 py-2 font-bold text-sm transition-colors border-none ${isScrolled ? 'bg-black text-white hover:bg-gray-800' : 'bg-white text-black hover:bg-gray-100 shadow-lg shadow-white/10'}`}>
              Get Started
            </Button>
          </a>
        </div>
      </Container>
    </nav>
  );
}
