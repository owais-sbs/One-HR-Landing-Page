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
    <section className="relative w-full h-[100svh] min-h-[700px] flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image with dark overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80" 
          alt="Modern Corporate Office" 
          fill 
          priority
          className="object-cover object-center opacity-40 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-[#0f172a]" />
      </div>

      <Container className="relative z-10 flex flex-col items-center text-center px-4 mt-8">
        {/* Badge */}
        <div className="mb-6 sm:mb-8 border border-white/20 rounded-full px-6 py-2 bg-black/40 backdrop-blur-md">
          <span className="text-[10px] sm:text-xs font-bold text-white uppercase tracking-[0.25em]">
            THE FUTURE OF HR MANAGEMENT
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-[5.5rem] lg:text-[7rem] font-bold text-white leading-[1.1] tracking-[-0.02em] mb-6 sm:mb-10">
          Transform Talent <br/>
          Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">Success.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl font-medium leading-relaxed">
          Institutional-grade HR automation system designed for elite organizational cultures. Manage scale with unparalleled technical superiority.
        </p>
      </Container>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <span className="text-[10px] text-white uppercase tracking-[0.2em] font-semibold">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-white/80 to-transparent" />
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// About Section
// ─────────────────────────────────────────────
export function AboutSection() {
  return (
    <section className="relative w-full bg-white overflow-hidden" id="about">
      {/* Slanted background for the split-screen effect representing the red shape in reference */}
      <div 
        className="absolute top-0 left-0 bottom-0 w-full lg:w-[50%] bg-[#f8fafc] lg:bg-sky-100 hidden lg:block"
        style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0 100%)' }}
      />
      {/* Mobile background equivalent */}
      <div className="absolute top-0 left-0 right-0 h-[40%] bg-blue-50 block lg:hidden" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left Side: Single Image */}
          <div className="relative w-full h-full flex items-center justify-start lg:-ml-6 xl:-ml-12">
            <Image 
              src="/home.jpg" 
              alt="HR Dashboard System" 
              width={1200}
              height={800}
              className="w-[105%] sm:w-[110%] lg:w-[115%] max-w-none h-auto object-contain shadow-2xl border border-black/5" 
              priority
            />
          </div>

          {/* Right Side: Content */}
          <div className="pt-10 lg:pt-0 pl-0 lg:pl-10">
            <span className="inline-block px-5 py-2 rounded-full border border-blue-200 bg-blue-50 text-xs font-extrabold text-[#2582ff] uppercase tracking-wider mb-6 shadow-sm">
              HOW WE HELP
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#111827] mb-6 leading-[1.15] tracking-tight">
              Your One-Stop Solution <br className="hidden xl:block" /> For All Your HR Needs
            </h2>
            <p className="text-gray-500 text-lg mb-8 leading-relaxed max-w-lg">
              We streamline your human resources processes with custom-tailored solutions. From recruitment and compliance to ongoing team management, our dedicated experts make scaling effortless.
            </p>
            <ul className="space-y-5 mb-10">
              {[
                'Comprehensive compliance and risk mitigation.',
                'Tailored talent acquisition and retention strategies.',
                'Scalable HR infrastructure built for growth.',
                'Dedicated expert support for employee relations.',
              ].map((item) => (
                <li key={item} className="flex items-start text-gray-700 font-medium text-base">
                  <div className="mt-1 mr-4 shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-[#2582ff]">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="text-[#111827] leading-tight pt-1">{item}</span>
                </li>
              ))}
            </ul>
            
            <Button className="rounded-full bg-gradient-to-r from-[#111827] to-[#1f2937] px-8 py-3.5 hover:scale-105 border-0 font-bold transition-all text-white shadow-lg shadow-gray-900/20">
              Explore Our Solutions<span className="ml-2">→</span>
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
  {
    title: 'Employee & Operations',
    icon: <Users size={28} />,
    features: [
      'Centralised digital employee profiles',
      'Org structure: departments, designations, reporting hierarchies',
      'Secure role-based document management',
      'Self-service portal — leave, payslips, profile updates',
    ],
  },
  {
    title: 'Attendance & Payroll',
    icon: <Clock size={28} />,
    features: [
      'Digital check-in/out, leave requests & automated tracking',
      'Automated salary calculations & payslip generation',
      'Real-time dashboards for headcount, attendance & payroll',
      'Granular role-based access for HR, Finance & Managers',
    ],
  },
  {
    title: 'Hardware & WhatsApp',
    icon: <Banknote size={28} />,
    features: [
      'Biometric machine integration (fingerprint / face recognition)',
      'Door access control — auto-grant/revoke on hire or exit',
      'Payslips, leave notifications & attendance reminders via WhatsApp',
      'Onboarding documents & holiday broadcasts via WhatsApp',
    ],
  },
];

export function Services() {
  return (
    <Section id="services" className="bg-gray-50 bg-opacity-30">
      <Heading title="Services We Offer" subtitle="Freedom HR provides custom HR solutions for your business in the most flexible and value driven way." />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto px-4">
        {servicesList.map((service, idx) => (
          <div
            key={idx}
            className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-50"
          >
            {/* Top Right Bracket Corner */}
            <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-[#1f2937] rounded-tr-3xl transition-all duration-300 group-hover:border-[#0ea5e9]" />
            {/* Bottom Left Bracket Corner */}
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-[#1f2937] rounded-bl-3xl transition-all duration-300 group-hover:border-[#0ea5e9]" />

            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-[#1c3f60] flex items-center justify-center text-white mb-6 shadow-md transition-transform duration-300 group-hover:-translate-y-1 relative z-10">
              {service.icon}
            </div>
            
            <h3 className="text-lg font-extrabold text-[#111827] mb-3 relative z-10">{service.title}</h3>
            
            <p className="text-sm text-gray-500 leading-relaxed mb-6 font-medium relative z-10 line-clamp-4">
              {service.features.join('. ')}
            </p>
            
            <a href="#" className="inline-flex items-center text-[13px] font-bold text-[#111827] hover:text-[#0ea5e9] transition-colors group/link relative z-10">
              Read More <span className="ml-2 font-black transition-transform group-hover/link:translate-x-1">→</span>
            </a>
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
              <Image src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" alt="HR Analytics Dashboard" fill className="object-cover object-center" />
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
    name: 'Starter',
    price: '$49',
    period: '/month',
    employeeLimit: 'Up to 50 employees',
    highlight: false,
    features: [
      'Core HR Management',
      'Leave & Attendance Tracking',
      'Employee Self-Service Portal',
      'Basic Document Storage',
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
      'Payroll (1 country)',
      'Biometric Integration',
      'Automated WhatsApp Notifications',
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
      'Multi-country Payroll',
      'Door Access Control',
      'Full WhatsApp Suite',
      '24/7 Dedicated Support',
    ],
    cta: 'Contact Sales',
  },
];

export function Resources() {
  return (
    <Section id="resources" className="bg-[#f8fafc] border-t border-gray-100">
      <div className="text-center mb-14">
        <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-[#2582ff] text-xs font-bold uppercase tracking-widest mb-4 border border-blue-100">Subscription Plans</span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#111827] mb-4 tracking-tight">Choose Your Plan</h2>
        <p className="text-gray-500 text-lg max-w-xl mx-auto">Transparent pricing built for SMBs and growing enterprises. Scale up anytime.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch px-4">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`relative flex flex-col bg-white rounded-[2rem] transition-all duration-300 ${
              plan.highlight
                ? 'border-2 border-[#0ea5e9] shadow-2xl shadow-[#0ea5e9]/10 scale-[1.03] z-10'
                : 'border border-gray-100 shadow-xl shadow-gray-200/40 hover:shadow-2xl hover:-translate-y-1'
            }`}
          >
            {plan.highlight && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-gradient-to-r from-[#3b82f6] to-[#0ea5e9] text-white text-[11px] font-bold uppercase tracking-widest px-5 py-2 rounded-full shadow-md">
                  Most Popular
                </span>
              </div>
            )}

            <div className="p-10 flex flex-col flex-1">
              <h3 className="text-xl font-extrabold text-[#111827] mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-black text-[#111827] tracking-tight">{plan.price}</span>
                <span className="text-gray-500 font-medium">{plan.period}</span>
              </div>
              <p className="text-sm text-gray-500 mb-8 pb-8 border-b border-gray-100">{plan.employeeLimit}</p>

              <ul className="space-y-4 mb-10 flex-1">
                {plan.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className={`shrink-0 mt-0.5 ${plan.highlight ? 'text-[#0ea5e9]' : 'text-gray-400'}`} />
                    <span className="text-gray-600 text-sm font-medium leading-tight">{feat}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`w-full text-center py-4 rounded-xl font-bold text-[13px] tracking-wide transition-all duration-300 ${
                  plan.highlight
                    ? 'bg-[#111827] text-white hover:bg-[#1f2937] shadow-lg shadow-gray-900/20 hover:shadow-xl'
                    : 'bg-gray-50 text-[#111827] hover:bg-gray-100'
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
            <h3 className="text-2xl font-extrabold text-white mb-6">One HR<span className="text-[#2582ff]">.</span></h3>
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
