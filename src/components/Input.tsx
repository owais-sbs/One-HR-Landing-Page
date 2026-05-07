import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> {
  label?: string;
  type?: 'text' | 'email' | 'textarea' | 'select';
  options?: string[];
  rows?: number;
  inputClassName?: string;
}

export function Input({ label, type = 'text', options, className = '', inputClassName = '', ...props }: InputProps) {
  const baseClasses =
    `w-full border border-white/10 bg-white/5 outline-none transition-all placeholder:text-slate-400 backdrop-blur-xl ` +
    `${inputClassName || 'rounded-2xl px-4 py-3'} focus:border-cyan-300/40 focus:ring-2 focus:ring-cyan-300/20`;

  return (
    <div className={`mb-4 w-full ${className}`}>
      {label && <label className="mb-1 block text-sm font-medium text-slate-200">{label}</label>}

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
