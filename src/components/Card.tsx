import React from 'react';

interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  linkText?: string;
  linkHref?: string;
  className?: string;
  horizontal?: boolean;
}

export function Card({ title, description, icon, linkText, linkHref, className = '', horizontal = false }: CardProps) {
  if (horizontal) {
    return (
      <div className={`flex flex-col md:flex-row items-start gap-4 p-6 bg-white transition-all duration-300 ${className}`}>
        {icon && <div className="flex-shrink-0 mt-1">{icon}</div>}
        <div>
          <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`group bg-white rounded-lg p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col h-full ${className}`}>
      <h3 className="text-xl font-bold text-primary mb-4 pb-4 border-b border-gray-100">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">{description}</p>
      
      <div className="flex justify-between items-end mt-auto">
        {linkText && linkHref && (
          <a href={linkHref} className="text-secondary font-medium text-sm hover:text-primary transition-colors inline-flex items-center">
            {linkText}
            <span className="ml-1">›</span>
          </a>
        )}
        {icon && (
          <div className="w-12 h-12 rounded bg-cyan-50 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
}
