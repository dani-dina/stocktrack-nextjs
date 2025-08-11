import { FaWarehouse, FaBarcode, FaTruckLoading, FaBell, FaChartLine, FaClipboardList } from 'react-icons/fa';
import { Feature } from '../types';
import { features } from 'process';
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