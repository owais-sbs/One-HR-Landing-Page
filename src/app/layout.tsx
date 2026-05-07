import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'One HR | Premium HR Platform',
  description: 'A modern, cinematic HR landing page with smooth motion, glassmorphism, and premium SaaS polish.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="min-h-full flex flex-col overflow-x-hidden bg-[#020617] text-white">{children}</body>
    </html>
  );
}
