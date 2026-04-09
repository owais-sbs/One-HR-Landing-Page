import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> {
  label?: string;
  type?: 'text' | 'email' | 'textarea' | 'select';
  options?: string[];
  rows?: number;
  inputClassName?: string;
}

export function Input({ label, type = 'text', options, className = '', inputClassName = '', ...props }: InputProps) {
  const baseClasses = `w-full px-5 py-3.5 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all ${inputClassName || 'rounded'}`;

  return (
    <div className={`mb-4 w-full ${className}`}>
      {label && <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>}
      
      {type === 'textarea' ? (
        <textarea 
          className={baseClasses} 
          {...props as React.TextareaHTMLAttributes<HTMLTextAreaElement>} 
        />
      ) : type === 'select' ? (
        <select 
          className={baseClasses}
          {...props as React.SelectHTMLAttributes<HTMLSelectElement>}
        >
          {options?.map((opt, i) => <option key={i} value={opt}>{opt}</option>)}
        </select>
      ) : (
        <input 
          type={type} 
          className={baseClasses} 
          {...props as React.InputHTMLAttributes<HTMLInputElement>} 
        />
      )}
    </div>
  );
}
