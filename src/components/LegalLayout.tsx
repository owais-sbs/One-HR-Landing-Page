import Link from 'next/link';
import { Navbar } from './Navbar';
import { Footer } from './Landingpage';
import { WhatsAppFloat } from './WhatsAppFloat';

type LegalLayoutProps = {
  title: string;
  effectiveDate: string;
  children: React.ReactNode;
};

export function LegalLayout({ title, effectiveDate, children }: LegalLayoutProps) {
  return (
    <main className="min-h-screen bg-white">
      <Navbar forceSolid />
      <article className="bg-[#f8fafc] border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 pt-16 pb-10">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-[#0ea5e9] hover:text-[#0284c7] mb-6"
          >
            ← Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#111827] tracking-tight mb-3">
            {title}
          </h1>
          <p className="text-sm text-gray-500 font-medium">Effective date: {effectiveDate}</p>
        </div>
      </article>
      <div className="max-w-3xl mx-auto px-6 lg:px-8 py-12 md:py-16">
        <div className="legal-prose space-y-8 text-[15px] leading-relaxed text-gray-700">
          {children}
        </div>
      </div>
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-xl font-bold text-[#111827] mb-3 tracking-tight">{title}</h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}

export function LegalList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="list-disc pl-5 space-y-2">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}
