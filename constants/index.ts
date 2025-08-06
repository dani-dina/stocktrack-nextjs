import { NavLink } from '../types';

// constants/navLinks.ts
export const navLinks : NavLink[] = [
  {
    id : '0',
    label: 'Dashboard',
    href: '/dashboard',
    exact: true,
    isExternal: false,
  },
  {
    id : '1',
    label: 'Features',
    href: '/#features',
    isExternal: false,
  },
  {
    id : '2',
    label: 'Solutions',
    href: '#',
    submenu: [
      {
        id : '00',
        label: 'Inventory Management',
        href: '/solutions/inventory',
      },
      {
        id : '01',
        label: 'Sales Analytics',
        href: '/solutions/analytics',
      },
      {
        id : '02',
        label: 'Supplier Dashboard',
        href: '/solutions/suppliers',
      },
    ],
  },
  {
    id : '3',
    label: 'Pricing',
    href: '/#pricing',
  },
  {
    id : '4',
    label: 'Blog',
    href: '/blog',
  },
  {
    id : '5',
    label: 'Company',
    href: '#',
    submenu: [
      {
        id : '000',
        label: 'About Us',
        href: '/about',
      },
      {
        id : '001',
        label: 'Careers',
        href: '/careers',
        badge: 'Hiring',
      },
      {
        id : '002',
        label: 'Press',
        href: '/press',
      },
    ],
  },
  {
    id : '6',
    label: 'Contact',
    href: '/#contact',
    isExternal: false,
  },
  {
    id : '7',
    label: 'GitHub',
    href: 'https://github.com/your-org/your-project',
    isExternal: true,
    icon: 'github', 
  },
];
