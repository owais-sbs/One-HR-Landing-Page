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
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-600 max-w-2xl text-lg opacity-90 mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
