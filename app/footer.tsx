'use client';

import { Github } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full bg-black/[0.9] py-10 text-gray-400">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-gray-700 pb-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-100">About MysticGrafix</h3>
            <p className="mt-2 text-sm">
              MysticGrafix specializes in branding, web design, and digital marketing to help
              your business scale and succeed. Your vision, our expertise.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-100">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link href="/#website-design" className="hover:text-white transition">
                  Website Design
                </Link>
              </li>
              <li>
                <Link href="/#graphic-design" className="hover:text-white transition">
                  Graphic Design
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-white transition">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-100">Contact Us</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>Email: contact@mysticgrafix.com</li>
              <li>Phone: +1 234 567 890</li>
              <li>Address: 123 MysticGrafix Street, NY</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex justify-between items-center mt-8">
          {/* Social Links */}
          <div className="flex space-x-6">
            <a
              href="https://github.com/yourgithub"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <i className="fab fa-linkedin w-5 h-5"></i>
            </a>
            <a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <i className="fab fa-twitter w-5 h-5"></i>
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm">
            &copy; {new Date().getFullYear()} MysticGrafix. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
