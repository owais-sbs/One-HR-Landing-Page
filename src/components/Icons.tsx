import type { ReactNode, SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

function Icon({ children, className = '', ...props }: IconProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {children}
    </svg>
  );
}

export function Menu(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </Icon>
  );
}

export function X(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M6 6l12 12" />
      <path d="M18 6l-12 12" />
    </Icon>
  );
}

export function ArrowRight(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M5 12h13" />
      <path d="M12 5l6 7-6 7" />
    </Icon>
  );
}

export function Sparkles(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3Z" />
      <path d="M18 14l.8 2.2L21 17l-2.2.8L18 20l-.8-2.2L15 17l2.2-.8L18 14Z" />
    </Icon>
  );
}

export function Users(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M17 21v-1.2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4V21" />
      <circle cx="11.5" cy="7.5" r="3" />
      <path d="M20 21v-1a3.5 3.5 0 0 0-2.2-3.2" />
      <path d="M16.5 4.8a3 3 0 0 1 0 5.4" />
    </Icon>
  );
}

export function Clock3(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4l3 2" />
    </Icon>
  );
}

export function MessageSquare(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 5h16v11H9l-5 4V5Z" />
      <path d="M8 9h8" />
      <path d="M8 12h5" />
    </Icon>
  );
}

export function TrendingUp(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 16l5-5 4 4 7-8" />
      <path d="M16 7h4v4" />
    </Icon>
  );
}

export function Heart(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M20.2 8.6a4.8 4.8 0 0 0-8.2-2.1 4.8 4.8 0 0 0-8.2 2.1c-.4 2.2.7 4.4 2.3 5.9L12 20l6-5.5c1.6-1.5 2.7-3.7 2.2-5.9Z" />
    </Icon>
  );
}

export function Layers3(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 4 4 8l8 4 8-4-8-4Z" />
      <path d="M4 12l8 4 8-4" />
      <path d="M4 16l8 4 8-4" />
    </Icon>
  );
}

export function DollarSign(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 3v18" />
      <path d="M16 7.5c0-1.9-1.8-3.5-4-3.5s-4 1.3-4 3.2S9.2 10 12 10.4s4 1.7 4 3.6-1.8 3.5-4 3.5-4-1.3-4-3.2" />
    </Icon>
  );
}

export function Award(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="8" r="4" />
      <path d="M9.5 12.3 8 21l4-2 4 2-1.5-8.7" />
    </Icon>
  );
}

export function BrainCircuit(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M9 4a3 3 0 0 0-3 3v1" />
      <path d="M15 4a3 3 0 0 1 3 3v1" />
      <path d="M7 12h10" />
      <path d="M8 8h8" />
      <path d="M10 16h4" />
      <path d="M6 7h2" />
      <path d="M16 7h2" />
      <path d="M6 17h2" />
      <path d="M16 17h2" />
    </Icon>
  );
}

export function CalendarDays(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="4" y="5" width="16" height="15" rx="3" />
      <path d="M8 3v4" />
      <path d="M16 3v4" />
      <path d="M4 10h16" />
      <path d="M8 14h2" />
      <path d="M14 14h2" />
    </Icon>
  );
}

export function CheckCircle2(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="8.2" />
      <path d="m8.5 12.2 2.2 2.2 4.9-5.2" />
    </Icon>
  );
}

export function ShieldCheck(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 3 5 6v5c0 4.7 3.2 8.4 7 10 3.8-1.6 7-5.3 7-10V6l-7-3Z" />
      <path d="m9.5 12.2 1.8 1.8 3.8-4" />
    </Icon>
  );
}

export function MapPin(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10Z" />
      <circle cx="12" cy="11" r="2" />
    </Icon>
  );
}

export function Phone(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M5 5.5c0 8.1 5.4 13.5 13.5 13.5" />
      <path d="M6.8 4 9.6 6.8" />
      <path d="M16.4 17.2 19.2 20" />
    </Icon>
  );
}

export function Mail(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="4" y="6" width="16" height="12" rx="2" />
      <path d="m5 7 7 6 7-6" />
    </Icon>
  );
}
