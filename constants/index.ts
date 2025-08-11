import { FaWarehouse, FaBarcode, FaTruckLoading, FaBell, FaChartLine, FaClipboardList } from 'react-icons/fa';
import { Feature } from '../types';
import { features, title } from 'process';
import { NavLink } from '../types';
import { FooterSection } from '../types';
import { ProgressItem } from '../types';

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
  }
];

export const featuresCard : Feature [] = [
  {
    id: '0',
    icon: FaWarehouse,
    title: 'Real-Time Stock',
    description: 'Track inventory levels instantly across all locations.'
  },
  {
    id: '1',
    icon: FaBarcode,
    title: 'Barcode & QR',
    description: 'Quickly add or update items with barcode scanning.'
  },
  {
    id: '2',
    icon: FaTruckLoading,
    title: 'Supplier Tracking',
    description: 'Manage suppliers and purchase orders with ease.'
  },
  {
    id: '3',
    icon: FaBell,
    title: 'Low Stock Alerts',
    description: 'Get notified when items run low.'
  },
  {
    id: '4',
    icon: FaChartLine,
    title: 'Analytics',
    description: 'View sales trends and inventory reports.'
  },
  {
    id: '5',
    icon: FaClipboardList,
    title: 'Multi-Location',
    description: 'Control inventory across multiple warehouses.'
  }
];

/* Footer links */
export const footerLinks : FooterSection[] = [
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Press', href: '/press' },
      { name: 'Contact', href: '/contact' }
    ]
  },
  {
    title: 'Product',
    links: [
      { name: 'Features', href: '/features' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Integrations', href: '/integrations' },
      { name: 'API', href: '/api' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { name: 'Blog', href: '/blog' },
      { name: 'Help Center', href: '/help' },
      { name: 'Guides', href: '/guides' },
      { name: 'Developers', href: '/developers' }
    ]
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Security', href: '/security' },
      { name: 'Compliance', href: '/compliance' }
    ]
  },
  {
    title: 'Contact',
    links: [
      { name: 'Email: support@ims.com', href: 'mailto:support@ims.com' },
      { name: 'Phone: +1 (555) 123-4567', href: 'tel:+15551234567' },
      { name: 'Location: New York, USA', href: '/location' },
      { name: 'Location: New York, USA', href: '/location' }
    ]
  }
];

export const progress : ProgressItem[] = [
  {
    id : '0',
    title : '100 M',
    description : 'Total Supply',
    isLine : false
  },
  {
    id : '1',
    isLine : true
  },
  {
    id : '2',
    title : '14 M',
    description : 'Pre-ICO',
    isLine : false
  },
  {
    id : '3',
    isLine : true
  },
  {
    id : '4',
    title : '78%',
    description : 'Token Sale',
    isLine : false
  },
  {
    id : '5',
    isLine : true
  },
  {
    id : '6',
    title : '89.65%',
    description : 'Hidden Cap',
    isLine : false
  }
];