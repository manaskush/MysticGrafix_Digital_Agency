'use client';

import { Github, Instagram, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full bg-black/[0.9] py-10 text-gray-400">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-gray-700 pb-8">
          {/* About Section */}
          <div><div >
            <Image
                        priority
                        src="/logo/Mysticlogo.png"
                        alt="Logo"
                        width={50000}
                        height={50000}
                        className="w-60 h-30 md:w-45 md:h-25"
                      /></div>
            
            <p className="mt-2 text-sm">
              MysticGrafix specializes in branding, web design, and digital marketing to help
              your business scale and succeed. Your vision, our expertise.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
          {/* <div>
            <h3 className="text-lg font-semibold text-emerald-600">Quick Links</h3>
            <ul className="mt-2 space-y-2"> */}
              {/* <li>
                <Link href="/#website-design" className="hover:text-white transition">
                  Website Design
                </Link>
              </li>
              <li>
                <Link href="/#graphic-design" className="hover:text-white transition">
                  Graphic Design
                </Link>
              </li> */}
              {/* <li>
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
          </div> */}
          <div>
          <h3 className="text-lg font-semibold mt-4 text-emerald-600">Explore Different Pages</h3>
            <ul className="mt-2 space-y-2">
            <li>
                <Link href="/about" className="hover:text-white transition">
                  About us
                </Link>
              </li><li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact Number 
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition">
                  Projects
                </Link>
              </li> 
              <li>
                <Link href="/testimonials" className="hover:text-white transition">
                  Testimonails
                </Link>
              </li>
            </ul>
          </div>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold text-blue-700">Contact Us</h3>
            <ul className="mt-2 space-y-2 text-sm mb-4">
              <li>Email: mysticgrafix2020@gmail.com</li>
              <li>Phone: +91 863 018 7916</li>
              <li>Address: MIET Meerut Incubation, NH-58, Near Baghpat Bypass</li>
            </ul>
            <div className='mb-2'>Find Us here !!</div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3490.481078282418!2d77.63941467614603!3d28.973112168532033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c67fd15a1d32d%3A0x534a01de9038f130!2sMysticgrafix!5e0!3m2!1sen!2sin!4v1735411176971!5m2!1sen!2sin" width="400" height="250" style={{border:0}}  loading="lazy" ></iframe>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex justify-between items-center mt-8">
          {/* Social Links */}
          <div className="flex space-x-6">
            <a
              href="https://github.com/manaskush"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/company/mysticgrafix/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <Linkedin/>
            </a>
            <a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <Twitter/>
            </a>
            <a
              href="https://www.instagram.com/mysticgrafix_ind/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <Instagram/>
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
