'use client';
import Image from 'next/image';
import contactImg from '../../contact.jpg';
import { Container } from './Container';
import { Section } from './Section';
import { Heading } from './Heading';
import { Card } from './Card';
import { Button } from './Button';
import { Input } from './Input';
import {
  CheckCircle2, Users, Clock, CalendarDays, Banknote, BarChart3, UserCog,
  Heart, Activity, DollarSign, Handshake, Award, Lightbulb,
  ShieldCheck, Target, TrendingUp, Mail, Phone, MapPin, ArrowRight,
} from 'lucide-react';

// ─────────────────────────────────────────────
// Hero
// ─────────────────────────────────────────────
export function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-black flex flex-col"
      style={{ minHeight: 'calc(100vh - 60px)' }}
    >
      {/* Blue radial glow at bottom */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[420px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center bottom, rgba(30,80,180,0.55) 0%, rgba(10,20,60,0.35) 45%, transparent 75%)',
          filter: 'blur(8px)',
        }}
      />

      {/* Centered hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 text-center px-6 pt-20 pb-32">

        {/* Badge pill */}
        <div className="inline-flex items-center justify-center border border-gray-600 rounded-full px-5 py-1.5 mb-10">
          <span className="text-[10px] font-semibold tracking-[0.2em] text-gray-300 uppercase">
            The Future of HR Management
          </span>
        </div>

        {/* Main headline */}
        <h1 className="text-6xl md:text-8xl lg:text-[92px] font-extrabold text-white leading-[1.05] tracking-tight mb-8 max-w-4xl">
          Transform Talent<br />
          Into{' '}
          <span className="text-[#38bdf8]">Success.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-400 max-w-lg leading-relaxed">
          Institutional-grade HR automation system designed for elite
          organizational cultures. Manage scale with unparalleled technical
          superiority.
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="text-[9px] font-semibold tracking-[0.25em] text-gray-500 uppercase">Scroll</span>
        <div className="w-px h-8 bg-gray-600" />
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// Dark Stats + Features Section
// ─────────────────────────────────────────────
export function DarkFeatures() {
  const stats = [
    { value: '10K+', label: 'Companies Onboarded' },
    { value: '99.9%', label: 'Platform Uptime' },
    { value: '2M+', label: 'Employees Managed' },
    { value: '150+', label: 'Countries Supported' },
  ];

  const features = [
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
      ),
      title: 'Workforce Management',
      desc: 'Centralise employee records, org charts, and document management across your entire organisation in one place.',
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
      ),
      title: 'Attendance & Leave',
      desc: 'Automated attendance tracking, leave workflows, and real-time dashboards for HR, Finance, and Managers.',
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
      ),
      title: 'Payroll Automation',
      desc: 'End-to-end payroll processing with automated salary calculations, payslip generation, and compliance tracking.',
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
      ),
      title: 'Real-time Analytics',
      desc: 'Live dashboards with headcount metrics, payroll spend, attrition trends, and performance KPIs at a glance.',
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
      ),
      title: 'Role-Based Access',
      desc: 'Granular permissions for every role — HR, Finance, Manager, and Employee — with audit logs and compliance controls.',
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
      ),
      title: 'WhatsApp Notifications',
      desc: 'Automated payslip delivery, leave alerts, and onboarding broadcasts via WhatsApp for seamless communication.',
    },
  ];

  return (
    <section className="relative bg-[#050508] py-28 overflow-hidden">
      {/* Subtle top divider glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(56,189,248,0.4), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-14">

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {stats.map((s, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center py-8 px-4 rounded-2xl border border-white/[0.06] bg-white/[0.03]"
            >
              <span className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">{s.value}</span>
              <span className="text-sm text-gray-500 font-medium">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center border border-gray-700 rounded-full px-5 py-1.5 mb-6">
            <span className="text-[10px] font-semibold tracking-[0.2em] text-gray-400 uppercase">Platform Capabilities</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-4">
            Everything your HR team<br />
            <span className="text-[#38bdf8]">needs to scale.</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto mt-4 leading-relaxed">
            Built for high-growth organisations. One HR unifies every workflow into a single, powerful platform.
          </p>
        </div>

        {/* Feature cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div
              key={i}
              className="group relative rounded-2xl border border-white/[0.07] bg-white/[0.03] p-8 hover:border-[#38bdf8]/30 hover:bg-white/[0.06] transition-all duration-300 cursor-pointer"
            >
              {/* Top-left glow on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: 'radial-gradient(circle at 20% 20%, rgba(56,189,248,0.06) 0%, transparent 60%)' }}
              />
              <div className="w-11 h-11 rounded-xl bg-[#38bdf8]/10 flex items-center justify-center mb-5">
                {f.icon}
              </div>
              <h3 className="text-[17px] font-bold text-white mb-3">{f.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// About Section
// ─────────────────────────────────────────────
export function AboutSection() {
  return (
    <section className="relative overflow-hidden" id="about"
      style={{
        background: 'linear-gradient(110deg, #dbeafe 0%, #eff6ff 40%, #ffffff 65%, #ffffff 100%)',
        scrollMarginTop: '74px',
      }}
    >
      <div className="relative w-full grid lg:grid-cols-2 min-h-[560px] items-center">

        {/* LEFT — Dashboard screenshot, large and clear */}
        <div className="relative z-10 px-8 lg:px-14 py-14 lg:py-16 flex items-center justify-center">
          <div
            className="relative w-full rounded-2xl overflow-hidden"
            style={{
              maxWidth: '720px',
              boxShadow: '0 25px 70px -10px rgba(0,0,0,0.22)',
              border: '1px solid rgba(186,219,255,0.6)',
            }}
          >
            <Image
              src="/image.png"
              alt="Platform Administration Dashboard"
              width={1100}
              height={720}
              className="w-full h-auto block"
              priority
              quality={100}
              unoptimized
            />
          </div>
        </div>

        {/* RIGHT — Text content */}
        <div className="relative z-10 px-10 lg:px-16 py-14 lg:py-16">

          {/* HOW WE HELP badge */}
          <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-gray-300 text-[10px] font-bold text-gray-500 uppercase tracking-[0.18em] mb-6">
            HOW WE HELP
          </span>

          {/* Headline */}
          <h2 className="text-[2.6rem] md:text-[3rem] font-extrabold text-[#111827] mb-5 leading-[1.15] tracking-tight">
            Your One-Stop Solution For All Your HR Needs
          </h2>

          {/* Description */}
          <p className="text-gray-500 text-sm leading-[1.75] mb-7 max-w-[360px]">
            We streamline your human resources processes with custom-tailored solutions. From recruitment and compliance to ongoing team management, our dedicated experts make scaling effortless.
          </p>

          {/* Checklist */}
          <ul className="space-y-4 mb-9">
            {[
              'Comprehensive compliance and risk mitigation.',
              'Tailored talent acquisition and retention strategies.',
              'Scalable HR infrastructure built for growth.',
              'Dedicated expert support for employee relations.',
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-[#111827] text-sm font-medium">
                <CheckCircle2 className="text-[#0ea5e9] shrink-0" size={18} />
                {item}
              </li>
            ))}
          </ul>

          {/* CTA — dark pill button */}
          <a
            href="#services"
            className="inline-flex items-center gap-3 bg-[#111827] text-white text-[13px] font-bold uppercase tracking-widest px-7 py-4 rounded-full hover:bg-black transition-colors duration-200"
          >
            Explore Our Features
            <span className="text-base">→</span>
          </a>
        </div>

      </div>
    </section>
  );
}
// ─────────────────────────────────────────────
// Services
// ─────────────────────────────────────────────
const servicesList = [
  {
    title: 'Employee Management',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    desc: 'Centralised digital employee profiles, org charts, document management, and self-service portal for seamless workforce administration.',
  },
  {
    title: 'Attendance Tracking',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    desc: 'Digital check-in/out with automated tracking, leave request workflows, and real-time attendance dashboards for managers.',
  },
  {
    title: 'Payroll Management',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/>
      </svg>
    ),
    desc: 'End-to-end payroll processing with automated salary calculations, payslip generation, and full compliance tracking.',
  },
  {
    title: 'Salary Structures',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
    desc: 'Configure flexible salary components, allowances, deductions, and tax structures tailored to your organisation\'s policies.',
  },
  {
    title: 'Department Management',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="6" height="6" rx="1"/><rect x="16" y="3" width="6" height="6" rx="1"/>
        <rect x="9" y="15" width="6" height="6" rx="1"/>
        <path d="M5 9v3h14V9"/><line x1="12" y1="12" x2="12" y2="15"/>
      </svg>
    ),
    desc: 'Manage departments, designations, and reporting hierarchies with ease — keeping your organisational structure always up to date.',
  },
  {
    title: 'Leave Management',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
    desc: 'Streamlined leave request and approval workflows with policy enforcement, leave balance tracking, and automated notifications.',
  },
  {
    title: 'HR Analytics Dashboard',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/>
        <line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
    desc: 'Live dashboards with headcount metrics, payroll spend, attrition rates, and performance KPIs — all in one powerful view.',
  },
  {
    title: 'Employee Onboarding',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/>
        <line x1="23" y1="11" x2="17" y2="11"/>
      </svg>
    ),
    desc: 'Structured onboarding checklists, document collection, access provisioning, and WhatsApp-based welcome workflows for new hires.',
  },
];

export function Services() {
  return (
    <Section id="services" className="bg-white">
      <Heading title="Our Platform Capabilities" subtitle="One HR delivers enterprise-grade HR solutions engineered for scale, compliance, and operational excellence." />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
        {servicesList.map((service, idx) => (
          <div
            key={idx}
            className="relative bg-white rounded-2xl border border-gray-150 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col"
            style={{ border: '1px solid #e5e7eb' }}
          >
            {/* Top-right corner bracket */}
            <div
              className="absolute top-3 right-3 w-9 h-9 pointer-events-none"
              style={{
                borderTop: '2.5px solid #1e293b',
                borderRight: '2.5px solid #1e293b',
                borderTopRightRadius: '10px',
              }}
            />
            {/* Bottom-left corner bracket */}
            <div
              className="absolute bottom-3 left-3 w-9 h-9 pointer-events-none"
              style={{
                borderBottom: '2.5px solid #1e293b',
                borderLeft: '2.5px solid #1e293b',
                borderBottomLeftRadius: '10px',
              }}
            />

            <div className="p-7 flex flex-col flex-1">
              {/* Dark navy icon box */}
              <div className="w-12 h-12 rounded-xl bg-[#1e293b] flex items-center justify-center mb-5 shrink-0">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-[17px] font-bold text-gray-900 mb-3">{service.title}</h3>

              {/* Description — clamped to 3 lines */}
              <p className="text-sm text-gray-500 leading-relaxed flex-1" style={{
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}>
                {service.desc}
              </p>

              {/* No Read More button */}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ─────────────────────────────────────────────
// Wave Section
// ─────────────────────────────────────────────
export function WaveSection() {
  return (
    <section className="relative bg-primary pt-24 pb-20 overflow-hidden">
      <div className="absolute top-[-1px] left-0 w-full overflow-hidden leading-[0]">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] md:h-[100px]">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-white" />
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-white" />
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-white" />
        </svg>
      </div>

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-white relative z-10 pt-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Empower Every Employee</h2>
            <p className="text-white/80 leading-relaxed mb-6 font-light">
              Give your workforce a powerful self-service dashboard — view payslips, apply for leave, track attendance, update personal details, and stay connected with your team, all in one place.
            </p>
            <ul className="space-y-3 text-white/70 text-sm font-light">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary inline-block" />Real-time attendance & leave visibility</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary inline-block" />Instant payslip access & salary breakdown</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary inline-block" />Profile updates & document uploads</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary inline-block" />Seamless WhatsApp & in-app notifications</li>
            </ul>
          </div>
          <div className="relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/5 rounded-full blur-2xl -z-10" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full max-w-lg mx-auto border border-white/10 bg-black/20 backdrop-blur-sm p-2">
              <div className="relative rounded-xl overflow-hidden border border-white/10">
                <video
                  src="/Untitled design (1).mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto block rounded-xl"
                />
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 grid grid-cols-4 gap-2 z-20">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 bg-secondary rounded-full" />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

// ─────────────────────────────────────────────
// Features
// ─────────────────────────────────────────────
const values = [
  { title: 'Performance', description: "We're enablers of genuine performance GROWTH across teams and individuals.", icon: <Activity size={20} /> },
  { title: 'Human Centric', description: 'Your people are CORE to what we do and we ensure every solution we provide is tailored to the individual.', icon: <Heart size={20} /> },
  { title: 'Partnerships', description: 'We build REAL relationships with you so you know you can trust us and the advice we give.', icon: <Handshake size={20} /> },
  { title: 'Affordable', description: "We're on a mission to make specialist HR strategy and support ACCESSIBLE and affordable for all businesses.", icon: <DollarSign size={20} /> },
  { title: 'Experienced', description: "We've got the intel and the KNOWLEDGE to guide you and your business to success.", icon: <Award size={20} /> },
  { title: 'Innovation', description: 'We continually adapt our modern HR strategies to keep your business ahead of industry curves.', icon: <Lightbulb size={20} /> },
];

export function Features() {
  return (
    <Section id="features" bgWhite>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-start">
        <div className="lg:col-span-1 md:sticky md:top-24">
          <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">
            Our values and the pillars that underpin our service
          </h2>
          <div className="w-16 h-1 bg-secondary mt-6" />
        </div>
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
            {values.map((val, idx) => (
              <div key={idx} className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                  {val.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{val.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{val.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

// ─────────────────────────────────────────────
// Pricing Plans
// ─────────────────────────────────────────────
const plans = [
  {
    name: 'Basic',
    price: '$49',
    period: '/month',
    employeeLimit: 'Up to 50 users',
    highlight: false,
    features: [
      'Employee directory & profiles',
      'Department management',
      'Company profile',
      'Attendance clock-in/out & history',
      'Leave requests & balances',
      'Holiday calendar',
      'Employee self-service dashboard',
      'Basic user management',
      'Email support',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Professional',
    price: '$149',
    period: '/month',
    employeeLimit: 'Up to 200 users',
    highlight: true,
    features: [
      'Everything in Basic',
      'Employee onboarding pipeline',
      'Document management & expiry alerts',
      'Attendance approvals & corrections',
      'Leave approval workflows (HR & Manager)',
      'Working hours configuration',
      'Headcount, turnover & diversity reports',
      'Payroll configuration & history',
      'Priority support (email + chat)',
    ],
    cta: 'Start Free Trial',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: ' quote',
    employeeLimit: 'Unlimited users',
    highlight: false,
    features: [
      'Everything in Professional',
      'Full payroll processing & runs',
      'Salary structures with components',
      'Tax slabs, PF contributions & salary cycles',
      'Compensation, leave & payroll reports',
      'Custom workflows & API access',
      'Multi-country master data configuration',
      'Email & in-app notifications',
      'Dedicated success manager',
    ],
    cta: 'Contact Sales',
  },
];


// ─────────────────────────────────────────────
// Oracle Fusion Integration
// ─────────────────────────────────────────────
const integrationPoints = [
  {
    title: 'Bi-directional Data Sync',
    desc: 'Employee records, org structures, and cost centres sync automatically between One HR and Oracle Fusion HCM — no manual exports, no data drift.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="17 1 21 5 17 9" /><path d="M3 11V9a4 4 0 0 1 4-4h14" />
        <polyline points="7 23 3 19 7 15" /><path d="M21 13v2a4 4 0 0 1-4 4H3" />
      </svg>
    ),
  },
  {
    title: 'Payroll & Finance Alignment',
    desc: 'Payroll runs processed in One HR push salary journals, deductions, and tax entries directly into Oracle Fusion Financials — keeping your books always reconciled.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: 'Unified Workforce Reporting',
    desc: 'Combine attendance, leave, and performance data from One HR with Oracle Fusion Analytics to generate consolidated workforce intelligence reports.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    title: 'Single Sign-On (SSO)',
    desc: 'Employees log in once via Oracle Identity Cloud and access both platforms seamlessly — no duplicate credentials, full audit trail maintained.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    title: 'Compliance & Audit Logs',
    desc: "Every HR action — approvals, payroll changes, access grants — is logged and mirrored to Oracle Fusion's compliance module for full regulatory traceability.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: 'REST API & Webhooks',
    desc: 'A fully documented REST API and real-time webhooks let your Oracle Fusion implementation team connect, extend, and automate any workflow without custom middleware.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
];

export function OracleIntegration() {
  return (
    <section id="oracle" className="relative overflow-hidden py-24 md:py-32"
      style={{ background: 'linear-gradient(160deg, #0f172a 0%, #0c1a2e 55%, #0f2340 100%)', scrollMarginTop: '74px' }}
    >
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '48px 48px' }}
      />
      {/* Glow orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(234,67,53,0.12) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.1) 0%, transparent 70%)' }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-14">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex flex-col items-center gap-6 mb-8">
          {/* Enterprise Integration pill — above lockup */}
          <div className="inline-flex items-center justify-center border border-white/10 rounded-full px-5 py-1.5 bg-white/5">
            <span className="text-[10px] font-semibold tracking-[0.2em] text-sky-400 uppercase">Enterprise Integration</span>
          </div>

          {/* One HR + Oracle Fusion lockup */}
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
            {/* One HR logo mark */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center text-white text-xs font-black">1HR</div>
              <span className="text-white font-bold text-sm">One HR</span>
            </div>
            <div className="flex items-center gap-1.5 text-gray-400">
              <div className="w-5 h-px bg-gray-600" />
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                <polyline points="17 1 21 5 17 9" /><path d="M3 11V9a4 4 0 0 1 4-4h14" />
                <polyline points="7 23 3 19 7 15" /><path d="M21 13v2a4 4 0 0 1-4 4H3" />
              </svg>
              <div className="w-5 h-px bg-gray-600" />
            </div>
            {/* Oracle logo mark */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#ea4335] flex items-center justify-center">
                <span className="text-white text-[10px] font-black tracking-tight">ORC</span>
              </div>
              <span className="text-white font-bold text-sm">Oracle Fusion</span>
            </div>
          </div>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-5">
            Seamlessly connected with<br />
            <span className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(90deg, #ea4335 0%, #f97316 40%, #38bdf8 100%)' }}>
              Oracle Fusion HCM
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            One HR is built to work alongside Oracle Fusion — not replace it. Your enterprise data stays in sync, your teams stay aligned, and your workflows stay uninterrupted.
          </p>
        </div>

        {/* Integration points grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {integrationPoints.map((point, i) => (
            <div
              key={i}
              className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.04] p-7 hover:border-sky-400/30 hover:bg-white/[0.07] transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: 'radial-gradient(circle at 15% 15%, rgba(56,189,248,0.07) 0%, transparent 60%)' }} />
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 text-sky-400"
                style={{ background: 'rgba(56,189,248,0.1)' }}>
                {point.icon}
              </div>
              <h3 className="text-[16px] font-bold text-white mb-2">{point.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{point.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom trust bar */}
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#ea4335]/15 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ea4335" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <div>
              <p className="text-white font-semibold text-sm">Oracle Fusion Compatible</p>
              <p className="text-gray-500 text-xs mt-0.5">Tested against Oracle Fusion HCM Cloud REST APIs</p>
            </div>
          </div>
          <div className="hidden md:block w-px h-10 bg-white/10" />
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-sky-400/10 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
            </div>
            <div>
              <p className="text-white font-semibold text-sm">Real-time Sync</p>
              <p className="text-gray-500 text-xs mt-0.5">Data updates propagate in under 2 seconds</p>
            </div>
          </div>
          <div className="hidden md:block w-px h-10 bg-white/10" />
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-400/10 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <div>
              <p className="text-white font-semibold text-sm">Zero Middleware</p>
              <p className="text-gray-500 text-xs mt-0.5">Direct API integration — no third-party connectors needed</p>
            </div>
          </div>
          <a
            href="#contact"
            className="shrink-0 inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 text-white text-sm font-bold px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            Request Integration Demo
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}

export function Resources() {
  return (
    <Section id="resources" className="bg-[#f8fafc] border-t border-gray-100">
      <div className="text-center mb-14">
        <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-[#2582ff] text-xs font-bold uppercase tracking-widest mb-4 border border-blue-100">Subscription Plans</span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#111827] mb-4 tracking-tight">Choose Your Plan</h2>
        <p className="text-gray-500 text-lg max-w-xl mx-auto">Transparent pricing built for SMBs and growing enterprises. Scale up anytime.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`relative flex flex-col rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
              plan.highlight
                ? 'bg-gradient-to-b from-[#1e3a5f] to-[#0f2340] text-white shadow-2xl shadow-blue-900/30 scale-[1.03]'
                : 'bg-white border border-gray-100 shadow-md hover:shadow-xl text-[#111827]'
            }`}
          >
            {plan.highlight && (
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#3b82f6] to-[#0ea5e9]" />
            )}
            {plan.highlight && (
              <div className="absolute top-5 right-5">
                <span className="bg-gradient-to-r from-[#3b82f6] to-[#0ea5e9] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow">
                  Most Popular
                </span>
              </div>
            )}

            <div className="p-8 flex flex-col flex-1">
              <p className={`text-sm font-bold uppercase tracking-widest mb-3 ${plan.highlight ? 'text-sky-400' : 'text-[#2582ff]'}`}>{plan.name}</p>
              <div className="flex items-end gap-1 mb-1">
                <span className={`text-5xl font-extrabold tracking-tight ${plan.highlight ? 'text-white' : 'text-[#111827]'}`}>{plan.price}</span>
                <span className={`text-base font-medium mb-2 ${plan.highlight ? 'text-sky-300' : 'text-gray-400'}`}>{plan.period}</span>
              </div>
              <p className={`text-sm mb-8 ${plan.highlight ? 'text-sky-300/80' : 'text-gray-400'}`}>{plan.employeeLimit}</p>

              <ul className="space-y-3 mb-10 flex-1">
                {plan.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${plan.highlight ? 'bg-sky-500/20' : 'bg-blue-50'}`}>
                      <CheckCircle2 size={13} className={plan.highlight ? 'text-sky-400' : 'text-[#0ea5e9]'} />
                    </div>
                    <span className={plan.highlight ? 'text-sky-100' : 'text-gray-600'}>{feat}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`w-full text-center py-3.5 rounded-full font-bold text-sm transition-all duration-300 hover:scale-105 ${
                  plan.highlight
                    ? 'bg-gradient-to-r from-[#3b82f6] to-[#0ea5e9] text-white shadow-lg shadow-blue-500/30'
                    : 'border-2 border-[#2582ff] text-[#2582ff] hover:bg-[#2582ff] hover:text-white'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ─────────────────────────────────────────────
// Contact
// ─────────────────────────────────────────────
export function Contact() {
  return (
    <div id="contact" className="relative w-full min-h-[800px] flex items-center py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src={contactImg} alt="Professional Corporate Office" fill className="object-cover object-center grayscale opacity-80" />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
      </div>

      <div className="absolute top-[-1px] left-0 w-full overflow-hidden leading-[0] z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[80px] md:h-[130px]">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#ffffff" />
        </svg>
      </div>

      <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-[0] z-10 rotate-180">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] md:h-[100px]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#000000" />
        </svg>
      </div>

      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[500px]">
          <div className="mb-6 pl-1">
            <h2 className="text-4xl font-bold text-white mb-2 tracking-tight">Contact us</h2>
            <p className="text-gray-300 font-medium text-lg">Get in touch with us today to see how we can help you</p>
          </div>
          <form className="space-y-4">
            <Input type="text" placeholder="Full name" inputClassName="rounded-full shadow-lg border border-[#0ea5e9]/50 bg-[#0ea5e9]/10 text-white placeholder-gray-400 text-sm font-medium focus:ring-2 focus:ring-[#0ea5e9] focus:bg-[#0ea5e9]/20 transition-colors" />
            <Input type="email" placeholder="Email" inputClassName="rounded-full shadow-lg border border-[#0ea5e9]/50 bg-[#0ea5e9]/10 text-white placeholder-gray-400 text-sm font-medium focus:ring-2 focus:ring-[#0ea5e9] focus:bg-[#0ea5e9]/20 transition-colors" />
            <Input type="text" placeholder="Company" inputClassName="rounded-full shadow-lg border border-[#0ea5e9]/50 bg-[#0ea5e9]/10 text-white placeholder-gray-400 text-sm font-medium focus:ring-2 focus:ring-[#0ea5e9] focus:bg-[#0ea5e9]/20 transition-colors" />
            <Input
              type="select"
              inputClassName="rounded-full shadow-lg border border-[#0ea5e9]/50 bg-[#0ea5e9]/10 text-white text-sm font-medium focus:ring-2 focus:ring-[#0ea5e9] focus:bg-[#0ea5e9]/20 transition-colors [&>option]:text-black"
              options={['Choose a service...', 'Employee Management', 'Attendance Management', 'Leave Management', 'Payroll Management', 'Reports & Analytics', 'Employee Self-Service']}
            />
            <Input type="textarea" placeholder="Message" rows={4} inputClassName="rounded-3xl shadow-lg border border-[#0ea5e9]/50 bg-[#0ea5e9]/10 text-white placeholder-gray-400 text-sm font-medium focus:ring-2 focus:ring-[#0ea5e9] focus:bg-[#0ea5e9]/20 transition-colors" />
            <div className="pt-2">
              <Button type="button" variant="secondary" size="lg" className="shadow-lg bg-gradient-to-r from-cyan-400 to-blue-400 border-none font-bold">
                SEND YOUR MESSAGE
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Footer
// ─────────────────────────────────────────────
export function Footer() {
  return (
    <footer className="bg-black text-gray-300 pt-20 pb-10 relative overflow-hidden z-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div>
            <h3 className="text-2xl font-extrabold text-white mb-6">One HR<span className="text-[#2582ff]">.</span></h3>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed pr-4">
              Empowering businesses through strategic human resource deployment, unwavering compliance, and transformative talent management across the globe.
            </p>
            <div className="flex space-x-4">
              <a href="https://in.linkedin.com/company/onepathsolutions" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#0ea5e9] hover:text-white transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="https://www.facebook.com/OnePathSolutions/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#0ea5e9] hover:text-white transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/onepathsolutions/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#0ea5e9] hover:text-white transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Nav Links */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg tracking-wide uppercase">Quick Links</h4>
            <ul className="space-y-4 text-sm font-medium">
              {[
                { label: 'About',       id: 'about' },
                { label: 'Features',    id: 'services' },
                { label: 'Integration', id: 'oracle' },
                { label: 'Pricing',     id: 'resources' },
                { label: 'Contact',     id: 'contact' },
              ].map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => {
                      const el = document.getElementById(item.id);
                      if (el) {
                        const top = el.getBoundingClientRect().top + window.scrollY - 82;
                        window.scrollTo({ top, behavior: 'smooth' });
                      }
                    }}
                    className="hover:text-[#0ea5e9] transition-colors flex items-center text-left"
                  >
                    <ArrowRight size={14} className="mr-2 text-[#0ea5e9]" /> {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg tracking-wide uppercase">Contact Us</h4>
            <ul className="space-y-5 text-sm font-medium">
              <li className="flex items-start">
                <MapPin size={18} className="text-[#0ea5e9] mr-3 mt-0.5 shrink-0" />
                <span className="leading-relaxed text-gray-400">8-1-21/146, Level 1, Mirza Arcade, Building,<br />Shaikpet Rd, Surya Nagar, Toli Chowki,<br />Hyderabad, Telangana 500008</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-[#0ea5e9] mr-3 shrink-0" />
                <span className="text-gray-400">+91 96523 01382
</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-[#0ea5e9] mr-3 shrink-0" />
                <a href="mailto:info@onepathsolutions.com" className="hover:text-white text-gray-400 transition-colors">info@onepathsolutions.com</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg tracking-wide uppercase">HR Insights</h4>
            <p className="text-sm text-gray-400 mb-4 pr-2">Subscribe to our newsletter for the latest HR strategy and compliance updates.</p>
            <div className="relative mt-2">
              <input type="email" placeholder="Business Email" className="w-full bg-[#1e293b] border-none rounded-full px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0ea5e9] text-white transition-colors pr-[110px]" />
              <button type="button" className="absolute right-1 top-1 bottom-1 bg-gradient-to-r from-[#3b82f6] to-[#0ea5e9] hover:opacity-90 text-white rounded-full px-5 text-sm font-bold transition-opacity duration-300">
                Subscribe
              </button>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 mt-4 flex flex-col md:flex-row justify-between items-center text-xs font-semibold text-gray-500">
          <p>© {new Date().getFullYear()} One HR Management. All rights reserved.</p>
          <p className="mt-4 md:mt-0">
            Product Owned By <a href="https://onepathsolutions.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">OnePathSolutions</a>
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <a key={item} href="#" className="hover:text-white transition-colors">{item}</a>
            ))}
          </div>
        </div>

      </Container>
    </footer>
  );
}
