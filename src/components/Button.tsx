import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  children: React.ReactNode;
}

export function Button({ variant = 'primary', size = 'md', href, children, className = '', ...props }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 ease-in-out uppercase tracking-wider text-sm";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-opacity-90 hover:shadow-lg",
    secondary: "bg-secondary text-white hover:bg-opacity-90 hover:shadow-lg",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white"
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3",
    lg: "px-8 py-4 text-base"
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
    <button 
      className={combinedClasses}
      {...props}
    >
      {children}
    </button>
  );
}
