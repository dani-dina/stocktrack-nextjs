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