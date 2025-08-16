'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

export default function ServicesDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const services = [
    { name: 'Design', href: '/services/design' },
    { name: 'Web Development', href: '/services/website' },
    { name: '3D & Motion Graphics', href: '/services/3d&MotionGraphics' },
    { name: 'Social Media Marketing', href: '/services/smm' },
    { name: 'Logo Design', href: '/services/logo' },
    { name: 'Brand Shoots', href: '/services/shoots' },
  ];

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Services Button */}
      <Link
        href="/services"
        className="flex items-center text-white hover:text-gray-300 px-4 py-2 focus:outline-none"
      >
        Services
        <ChevronDownIcon className="w-4 h-4 ml-1" />
      </Link>

      {/* Dropdown Menu */}
      <div
        className={`absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5 z-[200] transition-all duration-200 ${
          isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
        }`}
      >
        <div className="py-1">
          {services.map((service) => (
            <Link
              key={service.name}
              href={service.href}
              className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
            >
              {service.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
