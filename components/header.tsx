'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import ServicesDropdown from './dropdown';
 // Adjust the path as needed

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full px-4 py-4 z-[100] bg-black/[0.96]">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            priority
            src="/logo/Mysticlogo.png"
            alt="Logo"
            width={200}
            height={80}
            className="w-40 h-auto md:w-48"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/projects" className="text-white hover:text-gray-300">
            Projects
          </Link>
          <ServicesDropdown />
          <Link href="/about" className="text-white hover:text-gray-300">
            About
          </Link>
          <Link href="/contact" className="text-white hover:text-gray-300">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 text-sm font-medium text-white px-2">
          <Link href="/projects" onClick={() => setMobileMenuOpen(false)} className="hover:text-gray-300">
            Projects
          </Link>
          <Link href="/services" onClick={() => setMobileMenuOpen(false)} className="hover:text-gray-300">
            Services
          </Link>
          <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="hover:text-gray-300">
            About
          </Link>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-gray-300">
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
