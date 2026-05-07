import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  children: React.ReactNode;
}

export function Button({ variant = 'primary', size = 'md', href, children, className = '', ...props }: ButtonProps) {
  const baseStyles =
    'group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 ease-out text-sm transform-gpu focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#020617]';

  const variants = {
    primary: 'bg-white text-slate-950 shadow-[0_18px_45px_rgba(255,255,255,0.12)] hover:-translate-y-0.5 hover:shadow-[0_22px_55px_rgba(255,255,255,0.18)]',
    secondary: 'bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-500 text-slate-950 shadow-[0_18px_50px_rgba(34,211,238,0.24)] hover:-translate-y-0.5 hover:shadow-[0_24px_60px_rgba(34,211,238,0.28)]',
    outline:
      'border border-white/10 bg-white/5 text-white shadow-[0_12px_30px_rgba(2,6,23,0.18)] backdrop-blur-xl hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-white/10',
  };

  const sizes = {
    sm: 'px-4 py-2.5 text-xs',
    md: 'px-5 py-3',
    lg: 'px-6 py-3.5 text-base',
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
