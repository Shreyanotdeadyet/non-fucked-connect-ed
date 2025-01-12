export interface BadgeInterface {
    text: string;
    filled?: boolean;
  }
  
  export interface ButtonInterface {
    text: string;
    type: string;
    href: string;
    filled?: boolean;
    icon?: JSX.Element;
  }
  
  export interface CardInterface {
    indicator?: string,
    badge?: BadgeInterface,
    image?: string,
    title: string,
    subtitle?: string,
    body: React.ReactNode,
    className?: string;
    btn: ButtonInterface
  }

// types/calendly.d.ts
interface CalendlyBadgeWidgetOptions {
  url: string;
  text: string;
  color?: string;
  textColor?: string;
  branding?: boolean;
}

interface Calendly {
  initBadgeWidget(options: CalendlyBadgeWidgetOptions): void;
}

declare global {
  interface Window {
    Calendly: Calendly;
  }
}

export {};
