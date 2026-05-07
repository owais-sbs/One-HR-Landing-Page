'use client';

import type { ReactNode } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import contactImg from '../../contact.jpg';
import {
  ArrowRight,
  Award,
  BrainCircuit,
  CalendarDays,
  CheckCircle2,
  Clock3,
  DollarSign,
  Heart,
  Layers3,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
} from './Icons';
import { Button } from './Button';
import { Container } from './Container';
import { Input } from './Input';
import { MotionReveal } from './MotionReveal';

const servicesList = [
  {
    title: 'Employee Hub',
    icon: Users,
    features: [
      'Digital employee profiles with smart search',
      'Org charts, reporting lines and role mapping',
      'Secure document vault with permissions',
      'Self-service profile, leave and payroll access',
    ],
  },
  {
    title: 'Attendance & Payroll',
    icon: Clock3,
    features: [
      'Check-in/out, leave workflows and approvals',
      'Automated salary calculations and payslips',
      'Real-time dashboards for HR and finance',
      'Role-based controls for managers and admins',
    ],
  },
  {
    title: 'Automation Layer',
    icon: MessageSquare,
    features: [
      'Biometric machine integration',
      'Access control linked to onboarding and exits',
      'WhatsApp reminders, alerts and broadcasts',
      'Smart notifications for documents and holidays',
    ],
  },
];

const values = [
  {
    title: 'Performance',
    description: 'Build a people system that drives measurable growth across teams and departments.',
    icon: TrendingUp,
  },
  {
    title: 'Human-centric',
    description: 'Design HR experiences that feel supportive, clear and easy to trust.',
    icon: Heart,
  },
  {
    title: 'Partnership',
    description: 'Work with a team that acts like an extension of your internal operations.',
    icon: Layers3,
  },
  {
    title: 'Affordability',
    description: 'Scale specialist HR support without adding unnecessary overhead.',
    icon: DollarSign,
  },
  {
    title: 'Experience',
    description: 'Lean on deep HR know-how to stay ahead of compliance and hiring needs.',
    icon: Award,
  },
  {
    title: 'Innovation',
    description: 'Modernize workflows with automation, analytics and simpler day-to-day flows.',
    icon: BrainCircuit,
  },
];

const plans = [
  {
    name: 'Starter',
    price: '$49',
    period: '/month',
    employeeLimit: 'Up to 50 employees',
    highlight: false,
    features: [
      'Core HR management',
      'Leave and attendance tracking',
      'Employee self-service portal',
      'Basic document storage',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Professional',
    price: '$149',
    period: '/month',
    employeeLimit: 'Up to 200 employees',
    highlight: true,
    features: [
      'Everything in Starter',
      'Payroll for one country',
      'Biometric integration',
      'WhatsApp notifications',
    ],
    cta: 'Start Free Trial',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: ' quote',
    employeeLimit: '200+ employees',
    highlight: false,
    features: [
      'Multi-country payroll',
      'Door access control',
      'Full WhatsApp suite',
      'Dedicated support',
    ],
    cta: 'Contact Sales',
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
  centered = true,
}: {
  eyebrow: string;
  title: string;
  description: string;
  centered?: boolean;
}) {
  return (
    <div className={`${centered ? 'text-center mx-auto' : 'text-left'} max-w-3xl`}>
      <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100/85 shadow-[0_10px_30px_rgba(15,23,42,0.12)] backdrop-blur-xl">
        <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
        {eyebrow}
      </p>
      <h2 className="font-heading mt-5 text-3xl font-semibold tracking-tight text-white md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-slate-300 md:text-lg">
        {description}
      </p>
    </div>
  );
}

function MetricPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 shadow-[0_12px_45px_rgba(2,6,23,0.16)] backdrop-blur-xl">
      <p className="text-[11px] uppercase tracking-[0.24em] text-slate-300">{label}</p>
      <p className="mt-1 text-xl font-semibold text-white">{value}</p>
    </div>
  );
}

function GlassCard({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-[28px] border border-white/10 bg-white/5 shadow-[0_24px_80px_rgba(15,23,42,0.18)] backdrop-blur-2xl ${className}`}>
      {children}
    </div>
  );
}

function FloatingOrb({
  className = '',
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      aria-hidden="true"
      className={className}
      animate={
        shouldReduceMotion
          ? undefined
          : {
              y: [0, -10, 0],
              x: [0, 6, 0],
              scale: [1, 1.04, 1],
            }
      }
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
    />
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_26%),radial-gradient(circle_at_top_right,_rgba(59,130,246,0.16),_transparent_28%),linear-gradient(180deg,_#020617_0%,_#07111f_52%,_#0f172a_100%)] pt-28 pb-20 md:pt-36 md:pb-28"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] opacity-25" />
      <FloatingOrb className="absolute left-[-8rem] top-16 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      <FloatingOrb className="absolute right-[-6rem] top-28 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" delay={1.5} />
      <motion.div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent"
        animate={{ opacity: [0.55, 0.9, 0.55] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      <Container className="relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
          <MotionReveal side="left" className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100 backdrop-blur-xl">
              <Sparkles className="h-3.5 w-3.5" />
              Modern HR operating system
            </div>
            <h1 className="font-heading mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-6xl lg:text-7xl">
              A modern HR experience that feels{' '}
              <span className="bg-gradient-to-r from-cyan-200 via-white to-sky-300 bg-clip-text text-transparent">
                fast, glassy
              </span>{' '}
              and effortless.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
              One HR combines employee management, attendance, payroll and automation into one polished experience,
              designed to feel premium on desktop and mobile.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="#contact" size="lg" className="bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-500 text-slate-950 shadow-[0_18px_50px_rgba(34,211,238,0.25)]">
                Book a demo
              </Button>
              <Button href="#services" variant="outline" size="lg" className="text-white">
                Explore platform
              </Button>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <MetricPill label="Employee records" value="1,240+" />
              <MetricPill label="Automations" value="96%" />
              <MetricPill label="Faster ops" value="3.4x" />
            </div>
          </MotionReveal>

          <MotionReveal side="right" className="relative lg:pl-6">
            <FloatingOrb className="absolute inset-0 -z-10 rounded-full bg-cyan-400/20 blur-3xl" />
            <motion.div
              whileHover={{ y: -6, rotateX: 1.5, rotateY: -1.5 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="transform-gpu"
            >
              <GlassCard className="relative overflow-hidden p-4 md:p-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Live overview</p>
                  <h3 className="font-heading mt-1 text-lg font-semibold text-white">One HR dashboard</h3>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1.5 text-xs font-semibold text-emerald-200">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(74,222,128,0.9)]" />
                  Sync active
                </div>
              </div>

              <div className="mt-4 grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
                <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-slate-950/50 shadow-[0_20px_70px_rgba(2,6,23,0.18)]">
                  <Image
                    src="/home.jpg"
                    alt="One HR platform preview"
                    width={900}
                    height={620}
                    priority
                    className="h-full w-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 grid gap-3 sm:grid-cols-2">
                    <motion.div whileHover={{ y: -2 }} className="rounded-2xl border border-white/10 bg-slate-950/60 p-3 backdrop-blur-xl">
                      <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400">Attendance</p>
                      <p className="mt-1 text-lg font-semibold text-white">98.6% accurate</p>
                    </motion.div>
                    <motion.div whileHover={{ y: -2 }} className="rounded-2xl border border-white/10 bg-slate-950/60 p-3 backdrop-blur-xl">
                      <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400">Payroll</p>
                      <p className="mt-1 text-lg font-semibold text-white">Auto generated</p>
                    </motion.div>
                  </div>
                </div>

                <div className="grid gap-4">
                  <motion.div whileHover={{ y: -4 }} className="transform-gpu">
                    <GlassCard className="p-4">
                    <p className="text-sm font-medium text-slate-300">Workflow speed</p>
                    <div className="mt-4 flex items-end justify-between">
                      <p className="text-4xl font-semibold text-white">84%</p>
                      <p className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-200">+24% this month</p>
                    </div>
                    <div className="mt-4 h-2 rounded-full bg-white/10">
                      <div className="h-2 w-[84%] rounded-full bg-gradient-to-r from-cyan-300 to-blue-500" />
                    </div>
                    </GlassCard>
                  </motion.div>

                  <motion.div whileHover={{ y: -4 }} className="transform-gpu">
                    <GlassCard className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="rounded-2xl bg-cyan-400/15 p-3 text-cyan-200">
                        <Users className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-heading text-sm font-medium text-white">Employee self-service</p>
                        <p className="text-sm text-slate-400">Profile, leave, payslips and documents</p>
                      </div>
                    </div>
                    </GlassCard>
                  </motion.div>
                </div>
              </div>
              </GlassCard>
            </motion.div>
          </MotionReveal>
        </div>
      </Container>
    </section>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#08111f] py-20 md:py-32">
      <FloatingOrb className="absolute right-0 top-0 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" delay={0.5} />
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <MotionReveal side="left" className="relative">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-4">
                <motion.div whileHover={{ y: -4 }} className="transform-gpu overflow-hidden">
                  <GlassCard className="overflow-hidden p-0">
                  <Image
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80"
                    alt="Analytics"
                    width={700}
                    height={820}
                    className="h-full w-full object-cover"
                  />
                  </GlassCard>
                </motion.div>
                <motion.div whileHover={{ y: -4 }} className="transform-gpu">
                  <GlassCard className="p-5">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Trusted uptime</p>
                  <div className="mt-3 flex items-center justify-between">
                    <p className="text-3xl font-semibold text-white">99.9%</p>
                    <ShieldCheck className="h-6 w-6 text-cyan-300" />
                  </div>
                  <p className="mt-2 text-sm text-slate-400">Reliable automation for day-to-day HR operations.</p>
                  </GlassCard>
                </motion.div>
              </div>
              <div className="space-y-4 pt-8 sm:pt-16">
                <motion.div whileHover={{ y: -4 }} className="transform-gpu">
                  <GlassCard className="p-5">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Faster onboarding</p>
                  <div className="mt-3 flex items-center justify-between">
                    <p className="text-3xl font-semibold text-white">-42%</p>
                    <CalendarDays className="h-6 w-6 text-cyan-300" />
                  </div>
                  <p className="mt-2 text-sm text-slate-400">Less manual work from hire to first paycheck.</p>
                  </GlassCard>
                </motion.div>
                <motion.div whileHover={{ y: -4 }} className="transform-gpu overflow-hidden">
                  <GlassCard className="overflow-hidden p-0">
                  <Image
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80"
                    alt="Team collaboration"
                    width={700}
                    height={620}
                    className="h-full w-full object-cover"
                  />
                  </GlassCard>
                </motion.div>
              </div>
            </div>
          </MotionReveal>

          <MotionReveal side="right">
            <SectionHeading
              eyebrow="How we help"
              title="A single platform for HR teams that want clarity, speed and control."
              description="We streamline employee operations with a modern interface, better data visibility and simpler workflows that help teams move faster."
              centered={false}
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                'Comprehensive compliance and risk mitigation.',
                'Tailored hiring and retention workflows.',
                'Scalable HR infrastructure built for growth.',
                'Dedicated support for employee relations.',
              ].map((item) => (
                <motion.div key={item} whileHover={{ y: -2 }} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300 backdrop-blur-xl">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <motion.div whileHover={{ y: -4 }} className="transform-gpu">
                <GlassCard className="p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Employees</p>
                <p className="mt-2 text-2xl font-semibold text-white">1,240+</p>
                </GlassCard>
              </motion.div>
              <motion.div whileHover={{ y: -4 }} className="transform-gpu">
                <GlassCard className="p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Automations</p>
                <p className="mt-2 text-2xl font-semibold text-white">48</p>
                </GlassCard>
              </motion.div>
              <motion.div whileHover={{ y: -4 }} className="transform-gpu">
                <GlassCard className="p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Uptime</p>
                <p className="mt-2 text-2xl font-semibold text-white">99.9%</p>
                </GlassCard>
              </motion.div>
            </div>
          </MotionReveal>
        </div>
      </Container>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-[linear-gradient(180deg,#0f172a_0%,#111d33_100%)] py-20 md:py-32">
      <Container>
        <MotionReveal side="left">
          <SectionHeading
            eyebrow="Platform modules"
            title="Designed as modular blocks that feel premium, clean and easy to use."
            description="Each module is built to remove friction from common HR tasks while keeping the experience elegant and mobile friendly."
          />
        </MotionReveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            const side = index % 2 === 0 ? 'left' : 'right';

            return (
              <MotionReveal key={service.title} side={side} delay={index * 0.08}>
                <motion.div whileHover={{ y: -6 }} className="transform-gpu">
                  <GlassCard className="h-full p-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 text-cyan-200 shadow-[0_16px_45px_rgba(34,211,238,0.1)]">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="font-heading mt-5 text-xl font-semibold text-white">{service.title}</h3>
                    <ul className="mt-5 space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-sm leading-6 text-slate-300">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </GlassCard>
                </motion.div>
              </MotionReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export function WaveSection() {
  return (
    <section className="relative overflow-hidden bg-[#07111f] py-20 md:py-32">
      <div className="absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.18),transparent_60%)]" />
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <MotionReveal side="left">
            <SectionHeading
              eyebrow="Operational flow"
              title="A calmer way to manage people, payroll and approvals."
              description="The interface keeps the important things visible, removes unnecessary noise and makes every action feel predictable."
              centered={false}
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <motion.div whileHover={{ y: -3 }} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                <p className="text-sm font-medium text-white">Smart approvals</p>
                <p className="mt-2 text-sm text-slate-400">Direct, trackable workflows for managers and HR.</p>
              </motion.div>
              <motion.div whileHover={{ y: -3 }} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                <p className="text-sm font-medium text-white">Instant alerts</p>
                <p className="mt-2 text-sm text-slate-400">Keep people updated with notifications that matter.</p>
              </motion.div>
              <motion.div whileHover={{ y: -3 }} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                <p className="text-sm font-medium text-white">Single source of truth</p>
                <p className="mt-2 text-sm text-slate-400">Reduce duplication with one reliable dataset.</p>
              </motion.div>
              <motion.div whileHover={{ y: -3 }} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                <p className="text-sm font-medium text-white">Reporting clarity</p>
                <p className="mt-2 text-sm text-slate-400">Surface the metrics leaders need in seconds.</p>
              </motion.div>
            </div>
          </MotionReveal>

          <MotionReveal side="right" className="relative">
            <motion.div whileHover={{ y: -5 }} className="transform-gpu">
              <GlassCard className="overflow-hidden p-0">
              <div className="grid gap-0 md:grid-cols-2">
                <div className="p-6 md:p-8">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Workflow snapshot</p>
                  <div className="mt-5 space-y-4">
                    {[
                      { label: 'Leave approval', value: '1 pending' },
                      { label: 'Payroll status', value: 'Ready' },
                      { label: 'Compliance', value: 'Updated' },
                    ].map((item) => (
                      <div key={item.label} className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                        <p className="text-sm font-medium text-white">{item.label}</p>
                        <p className="mt-1 text-sm text-cyan-200">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative min-h-[280px]">
                  <Image
                    src="https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=900&q=80"
                    alt="Analytics dashboard"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent" />
                </div>
              </div>
              </GlassCard>
            </motion.div>
          </MotionReveal>
        </div>
      </Container>
    </section>
  );
}

export function Features() {
  return (
    <section id="features" className="bg-[#08111f] py-20 md:py-32">
      <Container>
        <MotionReveal side="left">
          <SectionHeading
            eyebrow="Design pillars"
            title="Modern features with a clean, premium interface language."
            description="The core principles are simple: fewer clicks, clearer hierarchy, responsive layout and motion that supports the experience instead of distracting from it."
          />
        </MotionReveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((val, index) => {
            const Icon = val.icon;
            const side = index % 2 === 0 ? 'left' : 'right';

            return (
              <MotionReveal key={val.title} side={side} delay={index * 0.06}>
                <motion.div whileHover={{ y: -4 }} className="transform-gpu">
                  <GlassCard className="h-full p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-cyan-200">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-heading mt-5 text-lg font-semibold text-white">{val.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{val.description}</p>
                  </GlassCard>
                </motion.div>
              </MotionReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export function Resources() {
  return (
    <section id="resources" className="relative overflow-hidden bg-[linear-gradient(180deg,#07111f_0%,#0f172a_100%)] py-20 md:py-32">
      <Container>
        <MotionReveal side="left">
          <SectionHeading
            eyebrow="Plans"
            title="Pricing that still feels modern and polished."
            description="Transparent subscription options for teams that want a better HR foundation without unnecessary complexity."
          />
        </MotionReveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <MotionReveal key={plan.name} side={index === 1 ? 'left' : 'right'} delay={index * 0.08}>
              <motion.div whileHover={{ y: -6 }} className="transform-gpu">
                <div
                  className={`relative h-full rounded-[30px] border p-6 shadow-[0_20px_70px_rgba(15,23,42,0.2)] backdrop-blur-2xl ${
                    plan.highlight
                      ? 'border-cyan-300/30 bg-gradient-to-b from-cyan-400/15 to-blue-500/10'
                      : 'border-white/10 bg-white/5'
                  }`}
                >
                  {plan.highlight && (
                    <div className="absolute right-5 top-5 rounded-full bg-cyan-300/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-100">
                      Most popular
                    </div>
                  )}
                  <p className={`text-sm font-semibold uppercase tracking-[0.26em] ${plan.highlight ? 'text-cyan-200' : 'text-slate-400'}`}>
                    {plan.name}
                  </p>
                  <div className="mt-4 flex items-end gap-2">
                    <span className="font-heading text-5xl font-semibold tracking-tight text-white">{plan.price}</span>
                    <span className="pb-1 text-sm text-slate-400">{plan.period}</span>
                  </div>
                  <p className="mt-2 text-sm text-slate-400">{plan.employeeLimit}</p>
                  <ul className="mt-7 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-slate-300">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    href="#contact"
                    variant={plan.highlight ? 'primary' : 'outline'}
                    size="lg"
                    className={`mt-8 w-full ${
                      plan.highlight
                        ? 'bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-500 text-slate-950'
                        : 'border-white/15 bg-white/5 text-white hover:bg-white/10'
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </div>
              </motion.div>
            </MotionReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#020617] py-20 md:py-32">
      <div className="absolute inset-0">
        <Image src={contactImg} alt="Corporate office" fill className="object-cover object-center opacity-20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.12),transparent_30%),linear-gradient(180deg,rgba(2,6,23,0.68),rgba(2,6,23,0.96))]" />
      </div>
      <FloatingOrb className="absolute left-[-4rem] top-16 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />

      <Container className="relative z-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <MotionReveal side="left">
            <SectionHeading
              eyebrow="Contact"
              title="Start with a cleaner, more modern HR setup."
              description="Tell us what your team needs and we will shape a workflow that feels easier to use from day one."
              centered={false}
            />

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <MapPin className="h-5 w-5 text-cyan-300" />
                100 Corporate Center Point, Suite 500, New York, NY 10001
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <Phone className="h-5 w-5 text-cyan-300" />
                +1 (800) 123-4567
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <Mail className="h-5 w-5 text-cyan-300" />
                hello@onehrsolutions.com
              </div>
            </div>
          </MotionReveal>

          <MotionReveal side="right">
            <motion.div whileHover={{ y: -4 }} className="transform-gpu">
              <GlassCard className="p-5 md:p-7">
              <form className="grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input type="text" placeholder="Full name" inputClassName="rounded-2xl border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-slate-400 focus:border-cyan-300/50 focus:ring-cyan-300/30" />
                  <Input type="email" placeholder="Business email" inputClassName="rounded-2xl border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-slate-400 focus:border-cyan-300/50 focus:ring-cyan-300/30" />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input type="text" placeholder="Company" inputClassName="rounded-2xl border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-slate-400 focus:border-cyan-300/50 focus:ring-cyan-300/30" />
                  <Input
                    type="select"
                    options={[
                      'Choose a service...',
                      'Employee Management',
                      'Attendance Management',
                      'Leave Management',
                      'Payroll Management',
                      'Reports & Analytics',
                      'Employee Self-Service',
                    ]}
                    inputClassName="rounded-2xl border-white/10 bg-white/5 px-5 py-4 text-white focus:border-cyan-300/50 focus:ring-cyan-300/30 [&>option]:text-black"
                  />
                </div>
                <Input
                  type="textarea"
                  rows={5}
                  placeholder="Tell us about your team and what you want to improve"
                  inputClassName="rounded-3xl border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-slate-400 focus:border-cyan-300/50 focus:ring-cyan-300/30"
                />
                <Button type="button" size="lg" className="w-full bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-500 text-slate-950 shadow-[0_18px_50px_rgba(34,211,238,0.25)]">
                  Send message
                </Button>
              </form>
              </GlassCard>
            </motion.div>
          </MotionReveal>
        </div>
      </Container>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#020617] py-14 text-slate-300">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-heading text-2xl font-semibold text-white">
              One HR<span className="text-cyan-300">.</span>
            </h3>
            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">
              A modern HR platform concept focused on speed, clarity and a polished user experience.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-200">Quick links</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              {[
                { label: 'Home', href: '#' },
                { label: 'Services', href: '#services' },
                { label: 'About', href: '#about' },
                { label: 'Resources', href: '#resources' },
                { label: 'Contact', href: '#contact' },
              ].map((item) => (
                <li key={item.label}>
                  <a className="inline-flex items-center gap-2 transition-colors hover:text-white" href={item.href}>
                    <ArrowRight className="h-4 w-4 text-cyan-300" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-200">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li>100 Corporate Center Point, Suite 500, New York, NY 10001</li>
              <li>+1 (800) 123-4567</li>
              <li>hello@onehrsolutions.com</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-200">Stay updated</h4>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              Subscribe for product updates, HR strategy notes and release news.
            </p>
            <div className="mt-4 flex gap-3">
              <input
                type="email"
                placeholder="Business email"
                className="min-w-0 flex-1 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 outline-none transition focus:border-cyan-300/40 focus:ring-2 focus:ring-cyan-300/20"
              />
              <button type="button" className="rounded-2xl bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-500 px-4 py-3 text-sm font-semibold text-slate-950">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-slate-500">
          (c) {new Date().getFullYear()} One HR. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
