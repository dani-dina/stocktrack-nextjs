import { IconType } from "react-icons";

export type NavLink = {
  id : string,
  label: string;
  href: string;
  exact?: boolean;        
  isExternal?: boolean;   
  icon?: string;         
  badge?: string;    
  submenu?: NavLink[];   
};

export interface ButtonProps {
  className?: string;
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

export type circleProps = {
   className : string,
}

export type BackgroundGradientProps = {
  className?: string;
};

export type Feature = {
  id: string;
  icon: IconType;
  title: string;
  description: string;
};


export type FooterLink = {
  name: string;
  href: string;
};

export type FooterSection = {
  title: string;
  links: FooterLink[];
};

export type ProgressItem = {
  id: string;
  title?: string;
  description?: string;
  isLine: boolean;
};

export type pricingProp = {
  key : string;
  children : string;
  btnTitle : string;
  price : string;
  packages : string[];
  description : string;

}

export type PricingPlan = {
  id: string;
  children : string;
  btnTitle : string;
  annualPrice: string;
  yearlyPrice: string;
  packages: string[];
  description : string;
};

export type GrowingStep = {
  id: string;
  number: string;
  message: string;
};

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  message: string;
  image: string;
}

