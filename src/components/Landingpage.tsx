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
    <section className="relative overflow-hidden bg-gradient-to-br from-[#f2f8fc] to-white pt-16 pb-24 md:pt-28 md:pb-36">
      <div className="absolute top-10 right-[30%] w-5 h-5 bg-[#2582ff] rounded-full z-0" />

      <div className="absolute top-12 left-[50%] -translate-x-[20%] opacity-80 z-0 hidden md:block">
        <svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dotGrid" x="0" y="0" width="15" height="15" patternUnits="userSpaceOnUse">
              <circle cx="3" cy="3" r="2.5" fill="#2582ff" />
            </pattern>
          </defs>
          <rect width="120" height="120" fill="url(#dotGrid)" />
        </svg>
      </div>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center relative z-10">
          <div className="max-w-xl mx-auto lg:mx-0">
            <div className="flex gap-2 mb-8 items-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2582ff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#111827] mb-6 leading-[1.1] tracking-tight">
              Elevate your workforce with expert HR solutions.
            </h1>
            <p className="text-lg text-gray-500 mb-10 leading-relaxed max-w-[90%]">
              From talent acquisition and seamless onboarding to robust performance management. One HR provides the strategic support you need to scale your business effortlessly.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center font-bold text-white rounded-full transition-all duration-300 ease-in-out px-8 py-3.5 bg-gradient-to-r from-[#3b82f6] to-[#0ea5e9] hover:shadow-lg hover:scale-105 shadow-blue-500/30"
            >
              Get In Touch <span className="ml-2">→</span>
            </a>
          </div>

          <div className="relative w-full flex justify-center lg:justify-end mt-12 lg:mt-0 lg:pr-10">
            <div className="absolute top-[5%] right-[5%] w-[320px] h-[320px] md:w-[420px] md:h-[420px] rotate-[-45deg] bg-gray-100/80 rounded-[60px] md:rounded-[80px] -translate-x-[20%] translate-y-[10%] -z-10" />
            <div className="relative w-[320px] h-[320px] md:w-[420px] md:h-[420px] rotate-[45deg] rounded-[60px] md:rounded-[80px] overflow-hidden shadow-2xl shadow-gray-400/20 group">
              <div className="absolute inset-0 w-[150%] h-[150%] -top-[25%] -left-[25%] rotate-[-45deg]">
                <Image
                  src="https://i.pinimg.com/736x/42/54/0e/42540e6878e714a67411afcd9595d91e.jpg"
                  alt="Professional HR solutions"
                  fill
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
            <div className="absolute -bottom-8 left-[10%] md:left-[15%] w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-tr from-[#2563eb] to-[#38bdf8] shadow-xl z-20" />
          </div>
        </div>
      </Container>
    </section>
  );
}

// ─────────────────────────────────────────────
// About Section
// ─────────────────────────────────────────────
export function AboutSection() {
  return (
    <section className="relative py-24 bg-white overflow-hidden" id="about">
      <div className="absolute top-10 right-10 opacity-30 w-64 h-64 border-4 border-dashed border-gray-200 rounded-full mix-blend-multiply pointer-events-none -mr-32 -mt-32" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4 sm:gap-6 w-full max-w-[550px] mx-auto lg:mx-0">
              <div className="flex flex-col gap-4 sm:gap-6">
                <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-lg">
                  <Image src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Team meeting" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                </div>
                <div className="relative w-[70%] aspect-square rounded-2xl overflow-hidden shadow-md -mr-10">
                  <Image src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="HR Professional" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                </div>
              </div>
              <div className="flex flex-col gap-4 sm:gap-6 transform translate-y-12 sm:translate-y-20">
                <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-xl bg-black text-white flex flex-col items-center justify-center text-center p-6 hover:scale-105 transition-transform duration-500">
                  <div className="text-5xl md:text-6xl font-extrabold mb-2 tracking-tight text-[#0ea5e9]">25<span className="text-3xl align-top">+</span></div>
                  <div className="text-sm md:text-base font-semibold leading-tight text-white">Years<br />Experience<br />Working</div>
                </div>
                <div className="relative w-full aspect-[4/3] sm:aspect-square rounded-3xl overflow-hidden shadow-lg">
                  <Image src="https://images.unsplash.com/photo-1622675363311-3e1904dc1885?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Office collaboration" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="pt-10 lg:pt-0">
            <span className="inline-block px-5 py-2 rounded-full border border-gray-200 text-xs font-bold text-gray-500 uppercase tracking-wider mb-6 shadow-sm">HOW WE HELP</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#111827] mb-6 leading-[1.15] tracking-tight">
              Your One-Stop Solution <br className="hidden lg:block" /> For All Your HR Needs
            </h2>
            <p className="text-gray-500 text-lg mb-8 leading-relaxed max-w-lg">
              We streamline your human resources processes with custom-tailored solutions. From recruitment and compliance to ongoing team management, our dedicated experts make scaling effortless.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                'Comprehensive compliance and risk mitigation.',
                'Tailored talent acquisition and retention strategies.',
                'Scalable HR infrastructure built for growth.',
                'Dedicated expert support for employee relations.',
              ].map((item) => (
                <li key={item} className="flex items-center text-gray-700 font-medium">
                  <CheckCircle2 className="text-[#0ea5e9] mr-3 bg-blue-50 rounded-full" size={24} />
                  <span className="text-[#111827]">{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <div className="flex -space-x-3">
                {[
                  ['https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80', 'Client 1'],
                  ['https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80', 'Client 2'],
                  ['https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80', 'Client 3'],
                  ['https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80', 'Client 4'],
                ].map(([src, alt]) => (
                  <Image key={alt} src={src} alt={alt} width={48} height={48} className="rounded-full border-2 border-white shadow-sm object-cover" />
                ))}
              </div>
              <p className="text-sm font-medium text-gray-600 border-l border-gray-200 pl-4 py-2">
                Join our <span className="font-bold text-[#111827]">5000+</span> satisfied client
              </p>
            </div>
            <Button className="rounded-full bg-gradient-to-r from-[#3b82f6] to-[#0ea5e9] shadow-lg shadow-blue-500/30 px-8 py-3.5 hover:scale-105 border-0 font-bold transition-all text-white">
              Explore Our Solutions <span className="ml-2">→</span>
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}
// ─────────────────────────────────────────────
// Services
// ─────────────────────────────────────────────
const servicesList = [
  { title: 'Employee Management', description: 'Maintain comprehensive employee records and streamline HR administration from a single centralized hub.', icon: <Users size={24} />, linkText: 'Learn more', linkHref: '#' },
  { title: 'Attendance Management', description: 'Track employee hours, manage flexible shifts, and monitor overall attendance with precise automated systems.', icon: <Clock size={24} />, linkText: 'Learn more', linkHref: '#' },
  { title: 'Leave Management', description: 'Simplify time-off requests, actively track employee leave balances, and manage team approvals effortlessly.', icon: <CalendarDays size={24} />, linkText: 'Learn more', linkHref: '#' },
  { title: 'Payroll Management', description: 'Ensure exact and timely compensation with automated payroll processing and built-in regulatory compliance features.', icon: <Banknote size={24} />, linkText: 'Learn more', linkHref: '#' },
  { title: 'Reports & Analytics', description: 'Gain valuable insights into your workforce demographics with customizable reporting and data-driven HR analytics.', icon: <BarChart3 size={24} />, linkText: 'Learn more', linkHref: '#' },
  { title: 'Employee Self-Service', description: 'Empower your team with a dedicated portal to update their own profiles, access pay slips, and submit requests.', icon: <UserCog size={24} />, linkText: 'Learn more', linkHref: '#' },
];

export function Services() {
  return (
    <Section id="services" className="bg-gray-50 bg-opacity-30">
      <Heading title="Services We Offer" subtitle="Freedom HR provides custom HR solutions for your business in the most flexible and value driven way." />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {servicesList.map((service, idx) => (
          <Card key={idx} title={service.title} description={service.description} icon={service.icon} linkText={service.linkText} linkHref={service.linkHref} />
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
    <section className="relative bg-primary pt-24 pb-20 mt-16 overflow-hidden">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">We're Here To Help</h2>
            <p className="text-white/80 leading-relaxed mb-6 font-light">
              At One HR we become an invaluable resource within your business, teaming up as your HR expert and freeing you to concentrate on other areas of your business. We offer a scalable and cost-effective solution and become your friend and trusted advisor.
            </p>
          </div>
          <div className="relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/5 rounded-full blur-2xl -z-10" />
            <div className="relative rounded-t-[100px] rounded-bl-[100px] rounded-br-lg overflow-hidden shadow-xl aspect-square max-w-sm mx-auto">
              <Image src="https://i.pinimg.com/1200x/e6/92/15/e692151bfc86c7d523697aa0dbd1a5d0.jpg" alt="Confident HR Executive" fill className="object-cover" />
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
// Resources
// ─────────────────────────────────────────────
const focuses = [
  { title: 'Strategic Advisory', description: 'Partner with our elite consultants to align your human capital strategy directly with your long-term commercial goals.', icon: <Target size={24} className="text-[#0ea5e9]" /> },
  { title: 'Workforce Optimization', description: "Deploy data-driven analytics to restructure processes and maximize your team's overall productivity.", icon: <TrendingUp size={24} className="text-[#0ea5e9]" /> },
  { title: 'Culture & Retention', description: 'Build an award-winning organizational culture that effortlessly attracts and retains top-tier industry talent.', icon: <Users size={24} className="text-[#0ea5e9]" /> },
  { title: 'Ironclad Compliance', description: 'Navigate complex regulatory environments securely with our rigorous, always-updated compliance frameworks.', icon: <ShieldCheck size={24} className="text-[#0ea5e9]" /> },
];

export function Resources() {
  return (
    <Section id="resources" className="bg-[#f8fafc] border-t border-gray-100 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col lg:flex-row">
          <div className="lg:w-5/12 relative h-80 lg:h-auto">
            <Image src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Executive HR meeting" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <h3 className="text-3xl font-extrabold text-white mb-2 leading-tight">Elevating Modern <br />Workplaces</h3>
            </div>
          </div>
          <div className="lg:w-7/12 p-8 lg:p-14 flex flex-col justify-center">
            <span className="text-sm font-bold text-[#0ea5e9] uppercase tracking-widest mb-2 block">Our Core Focus</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#111827] mb-6">Actionable Insights & Growth</h2>
            <p className="text-gray-500 mb-10 text-lg">We don't just solve immediate problems. We architect robust, sustainable environments where your people can thrive and perform at their absolute best.</p>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
              {focuses.map((item, idx) => (
                <div key={idx} className="flex flex-col">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 border border-blue-100">{item.icon}</div>
                  <h4 className="text-xl font-bold text-[#111827] mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

// ─────────────────────────────────────────────
// Contact
// ─────────────────────────────────────────────
export function Contact() {
  return (
    <div id="contact" className="relative w-full min-h-[800px] flex items-center py-32 mt-10 overflow-hidden">
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
            <h3 className="text-2xl font-extrabold text-white mb-6">One <span className="text-[#0ea5e9]">HR</span></h3>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed pr-4">
              Empowering businesses through strategic human resource deployment, unwavering compliance, and transformative talent management across the globe.
            </p>
            <div className="flex space-x-4">
              {[
                <path key="li" d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />,
                <path key="tw" d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />,
                <path key="fb" d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
              ].map((icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#0ea5e9] hover:text-white transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {icon}
                    {i === 0 && <><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></>}
                  </svg>
                </a>
              ))}
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#0ea5e9] hover:text-white transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Nav Links */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg tracking-wide uppercase">Quick Links</h4>
            <ul className="space-y-4 text-sm font-medium">
              {[
                { label: 'Home', href: '' },
                { label: 'Services', href: '#services' },
                { label: 'About', href: '#about' },
                { label: 'Resources', href: '#resources' },
                { label: 'Contact', href: '#contact' },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-[#0ea5e9] transition-colors flex items-center">
                    <ArrowRight size={14} className="mr-2 text-[#0ea5e9]" /> {item.label}
                  </a>
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
                <span className="leading-relaxed text-gray-400">100 Corporate Center Point,<br />Suite 500, New York, NY 10001</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-[#0ea5e9] mr-3 shrink-0" />
                <span className="text-gray-400">+1 (800) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-[#0ea5e9] mr-3 shrink-0" />
                <a href="mailto:hello@onehrsolutions.com" className="hover:text-white text-gray-400 transition-colors">hello@onehrsolutions.com</a>
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
