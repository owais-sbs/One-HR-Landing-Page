import React from 'react';

interface HeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function Heading({ title, subtitle, centered = true, className = '' }: HeadingProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'} ${className}`}>
      <h2 className="mb-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto max-w-2xl text-lg text-slate-300 opacity-90">
          {subtitle}
        </p>
      )}
    </div>
  );
}
