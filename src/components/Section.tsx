import React from 'react';
import { Container } from './Container';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  bgWhite?: boolean;
}

export function Section({ id, children, className = '', containerClassName = '', bgWhite = true }: SectionProps) {
  return (
    <section id={id} className={`py-16 md:py-24 ${bgWhite ? 'bg-slate-950' : ''} ${className}`}>
      <Container className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}
