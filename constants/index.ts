import { FaWarehouse, FaBarcode, FaTruckLoading, FaBell, FaChartLine, FaClipboardList } from 'react-icons/fa';
import { Feature, GrowingStep } from '../types';
import { features, title } from 'process';
import { NavLink } from '../types';
import { FooterSection } from '../types';
import { ProgressItem } from '../types';
import { PricingPlan } from '../types';
import { Testimonial } from '../types';
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
    href: '/features',
    isExternal: false,
  },
  {
    id : '2',
    label: 'Solutions',
    href: '/solutions',
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
    href: '/pricing',
  },
  {
    id : '4',
    label: 'Blog',
    href: '/blog',
  },
  {
    id : '5',
    label: 'Company',
    href: '/company',
    submenu: [
      {
        id : '000',
        label: 'About Us',
        href: '/about-us',
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
    href: '/contact',
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

export const progressItem : ProgressItem[] = [
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

/* pricing plans */
export const pricingPlans : PricingPlan [] = [
  {
    id: '0',
    children: 'Starter Plan',
    btnTitle : 'Get Started',
    annualPrice: '$25',
    yearlyPrice: '$256',
    description: 'Perfect for small businesses just starting with inventory tracking.',
    packages: [
      'Basic inventory tracking',
      'Up to 500 products',
      'Single user access',
      'Email support',
      'Basic analytics dashboard'
    ]
  },
  {
    id: '1',
    children: 'Professional Plan',
    btnTitle : 'Upgrade Now',
    annualPrice: '$49',
    yearlyPrice: '$499',
    description: 'Ideal for growing businesses needing advanced features.',
    packages: [
      'Advanced inventory tracking',
      'Up to 5,000 products',
      'Multi-user access',
      'Priority email & chat support',
      'Real-time stock alerts',
      'Advanced analytics & reporting'
    ]
  },
  {
    id: '2',
    children: 'Enterprise Plan',
    btnTitle : 'Upgrade Now',
    annualPrice: '$99',
    yearlyPrice: '$999',
    description: 'Complete solution for large enterprises with complex inventory needs.',
    packages: [
      'Unlimited products',
      'Unlimited users',
      '24/7 premium support',
      'AI-powered demand forecasting',
      'Custom API integrations',
      'Dedicated account manager'
    ]
  }
];

/* Growing steps */
export const growingSteps: GrowingStep[] = [
  {
    id: '0',
    number: '01',
    message: 'Start by connecting your warehouses, stores, or sales channels in minutes.',
  },
  {
    id: '1',
    number: '02',
    message: 'Automatically track stock levels, purchases, and sales across all locations.',
  },
  {
    id: '2',
    number: '03',
    message: 'Use real-time analytics to optimize inventory, reduce waste, and boost profits.',
  },
];

const testimonials : Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "Operations Manager",
    message:
      "Since we started using this platform, our stockouts dropped by 40% and our team works twice as fast. It’s a game-changer!",
    image: "/profile1.jpg",
  },
  {
    id: "2",
    name: "Michael Smith",
    role: "E-commerce Founder",
    message:
      "Managing thousands of SKUs used to be a nightmare. Now I can track everything in real-time, even from my phone.",
    image: "/profile2.jpg",
  },
  {
    id: "3",
    name: "Amina Tesfaye",
    role: "Retail Store Owner",
    message:
      "This system helped me cut down overstock costs and gave me insights to grow my business. Highly recommend it!",
    image: "/profile3.jpg",
  },
];
