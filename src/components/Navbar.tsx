import React from 'react';
import { Container } from './Container';
import { Button } from './Button';
import { Grid } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="w-full bg-white bg-opacity-95 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-100 shadow-sm">
      <Container className="flex items-center justify-between py-4">
        {/* Logo Placeholder */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 grid grid-cols-2 gap-0.5">
            <div className="bg-primary rounded-sm"></div>
            <div className="bg-primary rounded-sm opacity-60"></div>
            <div className="bg-primary rounded-sm opacity-60"></div>
            <div className="bg-primary rounded-sm opacity-30"></div>
          </div>
          <span className="text-xl font-bold text-primary tracking-tight">One HR</span>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-primary">
          <a href="#" className="hover:text-secondary transition-colors">Home</a>
          <a href="#services" className="hover:text-secondary transition-colors">Services</a>
          <a href="#about" className="hover:text-secondary transition-colors">About</a>
          <a href="#resources" className="hover:text-secondary transition-colors">Resources</a>
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <a href="#contact">
            <Button variant="outline" size="sm" className="hidden sm:inline-flex">
              Get in Touch
            </Button>
          </a>
        </div>
      </Container>
    </nav>
  );
}
