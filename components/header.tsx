'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import ServicesDropdown from './dropdown';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for header background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinkClass = "relative text-white hover:text-gray-300 transition-colors duration-300 group";
  const navLinkUnderline = "absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full";

  return (
    <header 
      className={`relative w-full px-4 py-6 z-[100] transition-all duration-300 ${
        scrolled 
          ? 'bg-black/95 backdrop-blur-md border-b border-white/10 shadow-lg' 
          : 'bg-black/[0.96] backdrop-blur-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto relative">
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-center gap-8 text-sm font-medium relative z-10">
          <Link href="/projects" className={navLinkClass}>
            <span>Projects</span>
            <div className={navLinkUnderline}></div>
          </Link>
          <div className="relative">
            <ServicesDropdown />
          </div>
          
          {/* Centered Logo */}
          <Link href="/" className="flex-shrink-0 transform hover:scale-105 transition-transform duration-300">
            <Image
              priority
              src="/logo/Mysticlogo.png"
              alt="Mystic Logo"
              width={240}
              height={120}
              className="w-60 h-auto md:w-45"
            />
          </Link>
          
          <Link href="/about" className={navLinkClass}>
            <span>About</span>
            <div className={navLinkUnderline}></div>
          </Link>
          <Link href="/contact" className={navLinkClass}>
            <span>Contact</span>
            <div className={navLinkUnderline}></div>
          </Link>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              priority
              src="/logo/Mysticlogo.png"
              alt="Mystic Logo"
              width={160}
              height={64}
              className="w-32 h-auto sm:w-36"
            />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="relative w-10 h-10 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 rounded-lg transition-colors duration-200 hover:bg-white/10"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <XMarkIcon 
                className={`w-6 h-6 transition-all duration-300 ${
                  mobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'
                }`} 
              />
              <Bars3Icon 
                className={`w-6 h-6 absolute transition-all duration-300 ${
                  mobileMenuOpen ? 'opacity-0 -rotate-90' : 'opacity-100 rotate-0'
                }`} 
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Panel with Animation */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-4 space-y-3">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-4"></div>
          
          {[
            { href: '/projects', label: 'Projects' },
            { href: '/services', label: 'Services' },
            { href: '/about', label: 'About' },
            { href: '/contact', label: 'Contact' }
          ].map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-3 px-4 text-white hover:text-gray-300 hover:bg-white/5 rounded-lg transition-all duration-200 transform hover:translate-x-2 ${
                mobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
              }`}
              style={{
                transitionDelay: mobileMenuOpen ? `${index * 50}ms` : '0ms'
              }}
            >
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm -z-10"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
}